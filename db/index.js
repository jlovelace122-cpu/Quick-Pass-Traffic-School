import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema.js';

// Create Turso/LibSQL client
// For local development, use file-based SQLite
// For production, use Turso cloud URL
const isLocal = !process.env.TURSO_DATABASE_URL || process.env.TURSO_DATABASE_URL.includes('your-database');

const client = createClient(isLocal ? {
  url: 'file:./db/quickpass.db',
} : {
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Create Drizzle ORM instance
export const db = drizzle(client, { schema });

export { client };
export default db;
