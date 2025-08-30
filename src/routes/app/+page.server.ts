// src/routes/app/+page.server.ts
import type { PageServerLoad } from './$types';
import { redirect, error } from '@sveltejs/kit';
import { getPool } from '$lib/server/db';

type PanelPunishment =
  | { banned: true; reason?: string; ends?: number }
  | { banned: false };

type OnlineTime = { labels: string[]; minutes: number[] };

type PanelData = {
  username: string;
  rank: string;
  points: number;
  punishment: PanelPunishment;
  onlineTime: OnlineTime;
};

// ---- Configure schema & table names here ----
const DBS = {
  luckperms: 's4_luckperms',
  playerpoints: 's4_playerpoints',
  litebans: 's4_litebans',
  authme: 's4_authme' // use your actual AuthMe database/schema
} as const;

const TABLES = {
  luckperms_players: 'luckperms_players',          // uuid, username, primary_group
  playerpoints_points: 'playerpoints_points',      // uuid, points   (adjust if yours is player_points)
  litebans_bans: 'litebans_bans',                  // uuid, reason, until, active
  authme: 'authme',                                // username, password, ...
  // If you use Plan, adjust this to your schema/table, or leave as null to fall back to zeros
  plan_sessions: null as string | null             // e.g. `${DBS.plan}.plan_sessions`
};

// ---- Session cookie helper ----
function readSession(cookieVal: string | undefined): { u: string; t: number } | null {
  try {
    if (!cookieVal) return null;
    return JSON.parse(cookieVal);
  } catch {
    return null;
  }
}

export const load: PageServerLoad = async ({ cookies }) => {
  // Require session
  const session = readSession(cookies.get('starlight_session'));
  if (!session?.u) {
    throw redirect(302, '/');
  }
  const username = session.u;

  const conn = await getPool().getConnection();
  try {
    // 1) LuckPerms → UUID + primary group
    const [lpRows] = await conn.query(
      `
      SELECT uuid, primary_group
      FROM \`${DBS.luckperms}\`.\`${TABLES.luckperms_players}\`
      WHERE LOWER(username) = LOWER(?) LIMIT 1
      `,
      [username]
    );
    const lp = (lpRows as Array<{ uuid: string; primary_group: string }>)[0];
    const uuid = lp?.uuid ?? null;
    const rank = lp?.primary_group ?? 'unknown';

    // 2) AuthMe → confirm display name (table name was missing before; fixed)
    const [amRows] = await conn.query(
      `
      SELECT username
      FROM \`${DBS.authme}\`.\`${TABLES.authme}\`
      WHERE LOWER(username) = LOWER(?) LIMIT 1
      `,
      [username]
    );
    const am = (amRows as Array<{ username: string }>)[0];
    const displayName = am?.username ?? username;

    // 3) PlayerPoints → points
    let points = 0;
    if (uuid) {
      const [ppRows] = await conn.query(
        `
        SELECT points
        FROM \`${DBS.playerpoints}\`.\`${TABLES.playerpoints_points}\`
        WHERE uuid = ? LIMIT 1
        `,
        [uuid]
      );
      points = (ppRows as Array<{ points: number }>)[0]?.points ?? 0;
    }

    // 4) LiteBans → ban status
    let punishment: PanelPunishment = { banned: false };
    if (uuid) {
      const [banRows] = await conn.query(
        `
        SELECT reason, \`until\`, active
        FROM \`${DBS.litebans}\`.\`${TABLES.litebans_bans}\`
        WHERE uuid = ? AND active = 1
        ORDER BY \`until\` DESC
        LIMIT 1
        `,
        [uuid]
      );
      const b = (banRows as Array<{ reason: string; until: number; active: number }>)[0];
      if (b?.active === 1) {
        punishment = {
          banned: true,
          reason: b.reason,
          ends: b.until // seconds or ms depending on your LiteBans config
        };
      }
    }

    // 5) Online time (last 7 days) — optional Plan support
    async function getOnlineTime7d(): Promise<OnlineTime> {
      const labels: string[] = [];
      const minutes: number[] = [];
      const now = new Date();

      for (let i = 6; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(now.getDate() - i);
        labels.push(d.toISOString().slice(0, 10));
      }

      if (!uuid) {
        return { labels, minutes: Array(7).fill(0) };
      }

      if (!TABLES.plan_sessions) {
        // No plan table configured → zeros
        return { labels, minutes: Array(7).fill(0) };
      }

      try {
        const [rows] = await conn.query(
          `
          SELECT DATE(FROM_UNIXTIME(session_start/1000)) AS day,
                 SUM(
                   LEAST(session_end, UNIX_TIMESTAMP(CONCAT(CURDATE(), ' 23:59:59'))*1000)
                   - GREATEST(session_start, UNIX_TIMESTAMP(DATE_SUB(CURDATE(), INTERVAL 6 DAY))*1000)
                 ) AS ms
          FROM ${TABLES.plan_sessions}
          WHERE uuid = ?
            AND session_end IS NOT NULL
            AND session_start >= UNIX_TIMESTAMP(DATE_SUB(CURDATE(), INTERVAL 6 DAY))*1000
          GROUP BY day
          `,
          [uuid]
        );

        const map = new Map<string, number>();
        (rows as Array<{ day: string; ms: number | null }>).forEach((r) => {
          if (r.day && r.ms) map.set(r.day, Math.max(0, Math.round(r.ms / 60000))); // ms → minutes
        });
        for (let i = 0; i < labels.length; i++) {
          minutes[i] = map.get(labels[i]) ?? 0;
        }
        return { labels, minutes };
      } catch {
        return { labels, minutes: Array(7).fill(0) };
      }
    }

    const onlineTime = await getOnlineTime7d();

    // Return payload to +page.svelte
    const out: PanelData = {
      username: displayName,
      rank,
      points,
      punishment,
      onlineTime
    };
    return out;
  } catch (e) {
    console.error(e);
    throw error(500, 'Failed to load panel data.');
  } finally {
    conn.release();
  }
};
