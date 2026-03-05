-- ───────────────────────────────────────────────────────────────────
-- Push Notifications – Tables only
-- Run in: Supabase Dashboard → SQL Editor
--
-- After running this, schedule the Edge Function via:
-- Supabase Dashboard → Edge Functions → send-push-reminders → Schedule
-- Cron expression: */5 * * * *
-- ───────────────────────────────────────────────────────────────────

-- 1. Push Subscriptions
--    One row per browser/device per user.
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
--    Synced from frontend on every toggle/edit so the Edge Function
--    can send pushes even when all browser tabs are closed.
CREATE TABLE IF NOT EXISTS reminder_schedules (
  id          TEXT        PRIMARY KEY,
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
