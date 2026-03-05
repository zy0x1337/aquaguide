/**
 * usePushSubscription
 *
 * 1. Creates/retrieves the browser’s Web Push subscription (requires VAPID public key).
 * 2. Saves it to Supabase → push_subscriptions.
 * 3. Syncs localStorage reminders to Supabase → reminder_schedules so the
 *    Edge Function can fire pushes even when every browser tab is closed.
 *
 * Setup (one-time):
 *   1. npx web-push generate-vapid-keys
 *   2. Add VITE_VAPID_PUBLIC_KEY=<publicKey> to your .env
 *   3. supabase secrets set VAPID_PUBLIC_KEY=<publicKey> VAPID_PRIVATE_KEY=<privateKey> VAPID_MAILTO=mailto:you@example.com
 *   4. Run supabase/migrations/20260305_push_notifications.sql in Supabase SQL Editor
 *   5. Deploy the Edge Function: supabase functions deploy send-push-reminders
 */

import { useEffect, useRef } from 'react';
import { useAuth } from '../lib/supabase/auth';
import { supabase } from '../lib/supabase';
import { getReminders } from '../lib/notifications';

// Convert VAPID base64url public key to Uint8Array
function toUint8(b64url: string): Uint8Array {
  const pad = '='.repeat((4 - (b64url.length % 4)) % 4);
  const raw = atob((b64url + pad).replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from([...raw].map(c => c.charCodeAt(0)));
}

async function savePushSubscription(userId: string, sub: PushSubscription): Promise<void> {
  const j = sub.toJSON();
  const { error } = await supabase
    .from('push_subscriptions')
    .upsert(
      {
        user_id:    userId,
        endpoint:   j.endpoint!,
        p256dh:     j.keys!.p256dh,
        auth_key:   j.keys!.auth,
        user_agent: navigator.userAgent.slice(0, 200),
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'endpoint' },
    );
  if (error) console.error('[PushSubscription] save failed:', error.message);
}

export async function syncRemindersToSupabase(userId: string): Promise<void> {
  const reminders = getReminders();
  if (!reminders.length) return;

  const rows = reminders.map(r => ({
    id:          r.id,
    user_id:     userId,
    tank_id:     r.tankId,
    tank_name:   r.tankName,
    type:        r.type,
    title:       r.title,
    message:     r.message,
    next_due_at: r.nextDate,
    frequency:   r.frequency,
    enabled:     r.enabled,
    updated_at:  new Date().toISOString(),
  }));

  const { error } = await supabase
    .from('reminder_schedules')
    .upsert(rows, { onConflict: 'id' });

  if (error) console.error('[PushSubscription] reminder sync failed:', error.message);
}

export function usePushSubscription(): void {
  const { user } = useAuth();
  const didSetup = useRef(false);

  useEffect(() => {
    if (!user) return;
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) return;

    const publicKey = import.meta.env.VITE_VAPID_PUBLIC_KEY as string | undefined;
    if (!publicKey) {
      console.info(
        '[PushSubscription] VITE_VAPID_PUBLIC_KEY not set.\n' +
        'Run: npx web-push generate-vapid-keys  then add VITE_VAPID_PUBLIC_KEY to .env',
      );
      return;
    }

    const setup = async () => {
      if (Notification.permission !== 'granted') return;

      try {
        const reg = await navigator.serviceWorker.ready;

        // Get existing subscription or create a new one
        let sub = await reg.pushManager.getSubscription();
        if (!sub) {
          sub = await reg.pushManager.subscribe({
            userVisibleOnly:      true,
            applicationServerKey: toUint8(publicKey),
          });
        }

        await savePushSubscription(user.id, sub);

        // Sync reminders once per session
        if (!didSetup.current) {
          await syncRemindersToSupabase(user.id);
          didSetup.current = true;
        }
      } catch (err) {
        console.error('[PushSubscription] setup error:', err);
      }
    };

    setup();

    // Keep reminder_schedules in sync whenever the user toggles/edits reminders
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'aquaguide_reminders_v2') syncRemindersToSupabase(user.id);
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [user]);
}
