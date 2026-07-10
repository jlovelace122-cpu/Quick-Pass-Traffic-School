import { client } from './index.js';

const sql = `
CREATE TABLE IF NOT EXISTS certificate_reports (
  id TEXT PRIMARY KEY,
  certificate_id TEXT NOT NULL,
  state_code TEXT NOT NULL,
  provider TEXT NOT NULL DEFAULT 'flhsmv',
  status TEXT NOT NULL DEFAULT 'pending',
  payload TEXT NOT NULL,
  external_reference_id TEXT,
  attempt_count INTEGER DEFAULT 0,
  last_attempt_at TEXT,
  sent_at TEXT,
  error_message TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(certificate_id) REFERENCES certificates(id)
);
`;

await client.execute(sql);
console.log('certificate_reports table ready');
