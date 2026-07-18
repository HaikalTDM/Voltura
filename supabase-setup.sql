-- Run this in your Supabase SQL Editor
-- 1. Go to https://app.supabase.com → your project → SQL Editor
-- 2. Paste and run this entire script

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE sessions REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE sessions;

-- Allow anonymous read/write (this is a public sharing app)
CREATE POLICY "anon_read" ON sessions FOR SELECT USING (true);
CREATE POLICY "anon_insert" ON sessions FOR INSERT WITH CHECK (true);
CREATE POLICY "anon_update" ON sessions FOR UPDATE USING (true);
