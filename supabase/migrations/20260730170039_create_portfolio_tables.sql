/*
# Create portfolio visit counter and contact messages tables

1. New Tables
- `portfolio_visits` — tracks total portfolio page visits (single-row counter table)
  - `id` (int, primary key, always 1)
  - `count` (bigint, total visits)
  - `updated_at` (timestamp)
- `portfolio_messages` — stores messages submitted via the contact form
  - `id` (uuid, primary key)
  - `name` (text, sender name)
  - `email` (text, sender email)
  - `subject` (text, optional subject)
  - `message` (text, message body)
  - `created_at` (timestamp)

2. Security
- Enable RLS on both tables.
- This is a no-auth public portfolio site, so anon + authenticated can:
  - read/increment the visit counter (intentionally public stat)
  - insert contact messages (public contact form)
  - NOT read messages (only service role / owner can read messages)
*/

CREATE TABLE IF NOT EXISTS portfolio_visits (
  id int PRIMARY KEY DEFAULT 1,
  count bigint NOT NULL DEFAULT 0,
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT single_row CHECK (id = 1)
);

ALTER TABLE portfolio_visits ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_read_visits" ON portfolio_visits;
CREATE POLICY "anon_read_visits" ON portfolio_visits FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_update_visits" ON portfolio_visits;
CREATE POLICY "anon_update_visits" ON portfolio_visits FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

CREATE TABLE IF NOT EXISTS portfolio_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE portfolio_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_messages" ON portfolio_messages;
CREATE POLICY "anon_insert_messages" ON portfolio_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Seed the single counter row
INSERT INTO portfolio_visits (id, count) VALUES (1, 0)
  ON CONFLICT (id) DO NOTHING;
