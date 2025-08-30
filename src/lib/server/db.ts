import mysql from 'mysql2/promise';
import type { Pool } from 'mysql2/promise';
import { env } from '$env/dynamic/private';

let pool: Pool | undefined; // <- not exported

export function getPool(): Pool {
  if (!pool) {
    pool = mysql.createPool({
      host: env.DB_HOST,
      user: env.DB_USER,
      password: env.DB_PASS,
      database: env.DB_NAME,
      port: Number(env.DB_PORT ?? 3306),
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      connectTimeout: 10000,
      ssl: env.DB_SSL ? { rejectUnauthorized: true } : undefined
    });
  }
  return pool;
}
