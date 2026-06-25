import { createClient } from '@libsql/client';

const client = createClient({ url: 'file:./db/quickpass.db' });

async function check() {
  try {
    const tables = await client.execute("SELECT name FROM sqlite_master WHERE type='table'");
    console.log('Tables:', tables.rows.map(r => r.name));
    
    // Check if chat tables exist
    const hasChatSessions = tables.rows.some(r => r.name === 'chat_sessions');
    const hasChatMessages = tables.rows.some(r => r.name === 'chat_messages');
    console.log('chat_sessions exists:', hasChatSessions);
    console.log('chat_messages exists:', hasChatMessages);
    
    if (!hasChatSessions) {
      console.log('Creating chat_sessions table...');
      await client.execute(`CREATE TABLE IF NOT EXISTS chat_sessions (
        id TEXT PRIMARY KEY,
        user_id TEXT,
        session_token TEXT NOT NULL UNIQUE,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        last_message_at TEXT,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )`);
      console.log('chat_sessions created!');
    }
    
    if (!hasChatMessages) {
      console.log('Creating chat_messages table...');
      await client.execute(`CREATE TABLE IF NOT EXISTS chat_messages (
        id TEXT PRIMARY KEY,
        session_id TEXT NOT NULL,
        role TEXT NOT NULL,
        content TEXT NOT NULL,
        metadata TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (session_id) REFERENCES chat_sessions(id)
      )`);
      console.log('chat_messages created!');
    }
    
    console.log('Done!');
  } catch (e) {
    console.error('Error:', e.message);
  }
}

check();
