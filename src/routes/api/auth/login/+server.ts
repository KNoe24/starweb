// src/routes/api/login/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { getPool } from '$lib/server/db';
import { verifyAuthMeSha, validUsername } from '$lib/server/authme';

export const POST: RequestHandler = async ({ request, cookies }) => {
  const { username, password } = await request.json();

  if (!username || !password) {
    return new Response(JSON.stringify({ ok: false, error: 'Missing username or password.' }), { status: 400 });
  }
  if (!validUsername(username)) {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid username.' }), { status: 400 });
  }

  const conn = await getPool().getConnection();
  try {
    const [rows] = await conn.execute('SELECT password FROM authme WHERE username = ? LIMIT 1', [username]);
    const list = rows as Array<{ password: string }>;
    if (!list.length) return new Response(JSON.stringify({ ok: false, error: 'User not found.' }), { status: 404 });

    const stored = list[0].password;
    const ok = verifyAuthMeSha(password, stored);
    if (!ok) return new Response(JSON.stringify({ ok: false, error: 'Invalid credentials.' }), { status: 401 });

    // Optional: create a very simple session cookie for your panel
    cookies.set('starlight_session', JSON.stringify({ u: username, t: Date.now() }), {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return new Response(JSON.stringify({ok: true }), { status: 200 });
  } finally {
    conn.release();
  }
};
