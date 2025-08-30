import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ cookies }) => {
  cookies.delete('starlight_session', { path: '/' }); // Delete the cookie
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};