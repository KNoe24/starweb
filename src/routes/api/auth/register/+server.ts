// src/routes/api/register/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { getPool } from '$lib/server/db';
import { hashForAuthMe, validUsername } from '$lib/server/authme';

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
  try {
    const { username, password, email } = await request.json();

    if (!username || !password || !email) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing username or password.' }), { status: 400 });
    }
    if (!validUsername(username)) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid Minecraft username (3-16 chars, A-Z, 0-9, _).' }), { status: 400 });
    }
    if (password.length < 6) {
      return new Response(JSON.stringify({ ok: false, error: 'Password must be at least 6 characters.' }), { status: 400 });
    }

    const { stored } = hashForAuthMe(password);

    // ✅ headers are on request.headers
    const xff = request.headers.get('x-forwarded-for');
    const ip = (xff?.split(',')[0]?.trim() || getClientAddress() || '0.0.0.0');

    const now = Math.floor(Date.now() / 1000);

    const sql = `
      INSERT INTO authme (username, realname, password, ip, lastlogin, regdate, regip, email)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [username.toLowerCase(), username, stored, ip, now, now, ip, email];

  const conn = await getPool().getConnection();
    try {
      await conn.execute(sql, params);
    } finally {
      conn.release();
    }

    return new Response(JSON.stringify({ ok: true }), { status: 201 });
  } catch (err: any) {
    if (err?.code === 'ER_DUP_ENTRY') {
      return new Response(JSON.stringify({ ok: false, error: 'This username is already registered.' }), { status: 409 });
    }
    return new Response(JSON.stringify({ ok: false, error: 'Server error.' }), { status: 500 });
  }
};
