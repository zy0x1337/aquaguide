// AquaGuide – Background Push Reminder Sender
// Triggered every 5 min via pg_cron.
//
// Required Supabase secrets (supabase secrets set ...):
//   VAPID_PUBLIC_KEY   – from: npx web-push generate-vapid-keys
//   VAPID_PRIVATE_KEY  – from: npx web-push generate-vapid-keys
//   VAPID_MAILTO       – e.g. mailto:you@example.com
//   (SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY are injected automatically)

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import webpush from 'npm:web-push@3.6.7';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

webpush.setVapidDetails(
  Deno.env.get('VAPID_MAILTO')     ?? 'mailto:admin@aquaguide.app',
  Deno.env.get('VAPID_PUBLIC_KEY')!,
  Deno.env.get('VAPID_PRIVATE_KEY')!,
);

const DAYS: Record<string, number> = {
  daily: 1, weekly: 7, biweekly: 14, monthly: 30,
};

Deno.serve(async (_req) => {
  const now = new Date().toISOString();

  // 1. All enabled reminders that are due
  const { data: reminders, error } = await supabase
    .from('reminder_schedules')
    .select('*')
    .eq('enabled', true)
    .lte('next_due_at', now);

  if (error) {
    console.error('[send-push-reminders] DB error:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  if (!reminders?.length) {
    return new Response(JSON.stringify({ sent: 0, message: 'Nothing due' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let sent = 0, failed = 0;

  for (const reminder of reminders) {
    // 2. Get all push subscriptions for this user
    const { data: subs } = await supabase
      .from('push_subscriptions')
      .select('endpoint, p256dh, auth_key')
      .eq('user_id', reminder.user_id);

    // 3. Reschedule immediately (prevents double-fire if push is slow)
    const nextDue = new Date(Date.now() + (DAYS[reminder.frequency] ?? 7) * 86_400_000);
    nextDue.setHours(10, 0, 0, 0);

    await supabase
      .from('reminder_schedules')
      .update({ next_due_at: nextDue.toISOString(), updated_at: new Date().toISOString() })
      .eq('id', reminder.id);

    if (!subs?.length) continue;

    // 4. Fire push to every registered device
    const payload = JSON.stringify({
      title: reminder.title,
      body:  reminder.message,
      url:   '/my-tanks',
      tag:   reminder.id,
    });

    for (const sub of subs) {
      try {
        await webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth_key } },
          payload,
        );
        sent++;
      } catch (err: any) {
        console.error(`Push failed [${err?.statusCode}]:`, sub.endpoint, err?.message);
        failed++;
        // Expired / revoked subscription → remove to keep the table clean
        if (err?.statusCode === 410 || err?.statusCode === 404) {
          await supabase.from('push_subscriptions').delete().eq('endpoint', sub.endpoint);
        }
      }
    }
  }

  console.log(`[send-push-reminders] sent=${sent} failed=${failed} due=${reminders.length}`);
  return new Response(
    JSON.stringify({ sent, failed, due: reminders.length }),
    { headers: { 'Content-Type': 'application/json' } },
  );
});
