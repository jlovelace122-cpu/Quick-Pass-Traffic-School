import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

// Support both local SQLite and Turso cloud
const isLocal = !process.env.TURSO_DATABASE_URL || process.env.TURSO_DATABASE_URL.includes('your-database');

export default defineConfig({
  schema: './db/schema.js',
  out: './db/migrations',
  dialect: 'sqlite',
  ...(isLocal ? {
    driver: 'libsql',
    dbCredentials: {
      url: 'file:./db/quickpass.db',
    },
  } : {
    driver: 'turso',
    dbCredentials: {
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    },
  }),
});
