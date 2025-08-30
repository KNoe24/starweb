// src/lib/server/authme.ts
import crypto from 'crypto';

/** Lowercase hex SHA-256 */
const sha256hex = (str: string) =>
  crypto.createHash('sha256').update(str, 'utf8').digest('hex');

/** Generate a 16-char salt (AuthMe commonly uses 16 chars) */
export const genSalt = (len = 16) =>
  crypto.randomBytes(12).toString('base64url').slice(0, len);

/** Build AuthMe's $SHA$ format */
export function hashForAuthMe(password: string, salt?: string) {
  const s = salt ?? genSalt(16);
  const step1 = sha256hex(password);
  const step2 = sha256hex(step1 + s);
  return { stored: `$SHA$${s}$${step2}`, salt: s };
}

/** Verify a plaintext password against stored "$SHA$<salt>$<hash>" */
export function verifyAuthMeSha(plain: string, stored: string) {
  const parts = stored.split('$');
  if (parts.length < 4 || parts[1] !== 'SHA') return false;
  const salt = parts[2];
  const expected = parts[3].trim().toLowerCase();
  const step1 = sha256hex(plain);
  const step2 = sha256hex(step1 + salt);
  return step2.toLowerCase() === expected;
}

/** Basic Minecraft nickname validation */
export const validUsername = (u: string) => /^[A-Za-z0-9_]{3,16}$/.test(u);
