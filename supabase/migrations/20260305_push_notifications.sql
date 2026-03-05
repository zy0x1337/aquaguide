-- ───────────────────────────────────────────────────────────────────
-- Push Notifications Infrastructure
-- Run in: Supabase Dashboard → SQL Editor
-- ───────────────────────────────────────────────────────────────────

-- 1. Push Subscriptions
--    One row per browser/device per user.
--    Created by the frontend after Notification.requestPermission() = granted.
CREATE TABLE IF NOT EXISTS push_subscriptions (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID        REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  endpoint    TEXT        NOT NULL UNIQUE,
  p256dh      TEXT        NOT NULL,
  auth_key    TEXT        NOT NULL,
  user_agent  TEXT,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own push subscriptions"
  ON push_subscriptions FOR ALL
  USING  (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 2. Reminder Schedules
--    Server-side mirror of localStorage reminders.
--    Synced from the frontend so the Edge Function can read them
--    even when every browser tab is closed.
CREATE TABLE IF NOT EXISTS reminder_schedules (
  id          TEXT        PRIMARY KEY,   -- same id as localStorage: "<tankId>-water-change" etc.
  user_id     UUID        REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  tank_id     TEXT        NOT NULL,
  tank_name   TEXT        NOT NULL,
  type        TEXT        NOT NULL CHECK (type IN ('water_change', 'parameter_check', 'filter_clean')),
  title       TEXT        NOT NULL,
  message     TEXT        NOT NULL,
  next_due_at TIMESTAMPTZ NOT NULL,
  frequency   TEXT        NOT NULL CHECK (frequency IN ('daily', 'weekly', 'biweekly', 'monthly')),
  enabled     BOOLEAN     NOT NULL DEFAULT false,
  updated_at  TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE reminder_schedules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own reminder schedules"
  ON reminder_schedules FOR ALL
  USING  (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Edge Function also needs to read these (service role bypasses RLS automatically).

-- 3. pg_cron: call Edge Function every 5 minutes
--    Requires pg_cron + pg_net extensions (enabled by default in Supabase).
--
--    BEFORE running this block, set your service role key once:
--      ALTER DATABASE postgres SET "app.service_role_key" = '<your_service_role_key>';
--
SELECT cron.schedule(
  'aquaguide-send-push-reminders',
  '*/5 * * * *',
  $$
    SELECT net.http_post(
      url     := 'https://plyiyuctfphxtvzyqttz.supabase.co/functions/v1/send-push-reminders',
      headers := jsonb_build_object(
        'Content-Type',  'application/json',
        'Authorization', 'Bearer ' || current_setting('app.service_role_key', true)
      ),
      body    := '{}'::jsonb
    );
  $$
);
