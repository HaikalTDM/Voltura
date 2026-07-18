-- Run this in your Supabase SQL Editor
-- 1. Go to https://app.supabase.com → your project → SQL Editor
-- 2. Paste and run this entire script

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE sessions REPLICA IDENTITY FULL;

-- Enable realtime for this table
ALTER PUBLICATION supabase_realtime ADD TABLE sessions;
