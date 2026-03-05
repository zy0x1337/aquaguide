// Supabase Edge Function – send-push-reminders
// Deployed via: Dashboard → Edge Functions → send-push-reminders
// Called every 5 min by pg_cron.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import webpush from 'npm:web-push'

const corsHeaders = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    webpush.setVapidDetails(
      Deno.env.get('VAPID_MAILTO')!,
      Deno.env.get('VAPID_PUBLIC_KEY')!,
      Deno.env.get('VAPID_PRIVATE_KEY')!,
    )

    // Service-role client – bypasses RLS so we can read all users' data
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    )

    // 1. Due reminders
    const { data: reminders, error: rErr } = await supabase
      .from('reminder_schedules')
      .select('*')
      .eq('enabled', true)
      .lte('next_due_at', new Date().toISOString())

    if (rErr) throw new Error(rErr.message)
    if (!reminders?.length) {
      return new Response(JSON.stringify({ sent: 0 }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    let sent = 0
    const daysMap: Record<string, number> = { daily: 1, weekly: 7, biweekly: 14, monthly: 30 }

    for (const reminder of reminders) {
      // 2. Subscriptions for this user
      const { data: subs } = await supabase
        .from('push_subscriptions')
        .select('*')
        .eq('user_id', reminder.user_id)

      if (!subs?.length) continue

      for (const sub of subs) {
        try {
          await webpush.sendNotification(
            { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth_key } },
            JSON.stringify({
              title: reminder.title,
              body:  reminder.message,
              url:   '/my-tanks',
              tag:   reminder.id,
            }),
          )
          sent++
        } catch (err: any) {
          // Expired subscription – remove it
          if (err?.statusCode === 410) {
            await supabase.from('push_subscriptions').delete().eq('endpoint', sub.endpoint)
          }
        }
      }

      // 3. Advance next_due_at so it won’t fire again this cycle
      const days    = daysMap[reminder.frequency] ?? 7
      const nextDue = new Date(Date.now() + days * 86_400_000)
      nextDue.setHours(10, 0, 0, 0)

      await supabase
        .from('reminder_schedules')
        .update({ next_due_at: nextDue.toISOString(), updated_at: new Date().toISOString() })
        .eq('id', reminder.id)
    }

    return new Response(JSON.stringify({ sent }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err: any) {
    console.error('[send-push-reminders]', err)
    return new Response(JSON.stringify({ error: err.message }), {
      status:  500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
