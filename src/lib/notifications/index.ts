// AquaGuide Notification System
// localStorage → Supabase sync so the Edge Function can fire when the PWA is closed.

import { supabase } from '../supabase';

export interface Reminder {
  id: string;
  tankId: string;
  tankName: string;
  type: 'water_change' | 'parameter_check' | 'filter_clean';
  title: string;
  message: string;
  nextDate: string;
  frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly';
  enabled: boolean;
}

const STORAGE_KEY = 'aquaguide_reminders_v2';

// ── localStorage helpers ───────────────────────────────────────────────────

export function getReminders(): Reminder[] {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    return s ? JSON.parse(s) : [];
  } catch { return []; }
}

export function saveReminders(reminders: Reminder[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
  window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }));
  // Fire-and-forget sync to Supabase so Edge Function has fresh data
  syncRemindersToSupabase(reminders).catch(() => {});
}

export function getTankReminders(tankId: string): Reminder[] {
  return getReminders().filter(r => r.tankId === tankId);
}

export function createDefaultReminders(tankId: string, tankName: string): void {
  if (getTankReminders(tankId).length > 0) return;

  const now   = new Date();
  const in7d  = new Date(now.getTime() + 7  * 86_400_000);
  const in30d = new Date(now.getTime() + 30 * 86_400_000);
  in7d.setHours(10, 0, 0, 0);
  in30d.setHours(10, 0, 0, 0);

  saveReminders([
    ...getReminders(),
    { id: `${tankId}-water-change`, tankId, tankName, type: 'water_change',    title: `💧 Water Change – ${tankName}`,     message: `Time for a water change in ${tankName}`,   nextDate: in7d.toISOString(),  frequency: 'weekly',  enabled: false },
    { id: `${tankId}-param-check`,  tankId, tankName, type: 'parameter_check', title: `🧪 Check Parameters – ${tankName}`, message: `Test water parameters in ${tankName}`,      nextDate: in7d.toISOString(),  frequency: 'weekly',  enabled: false },
    { id: `${tankId}-filter-clean`, tankId, tankName, type: 'filter_clean',    title: `🔧 Clean Filter – ${tankName}`,     message: `Time to clean the filter in ${tankName}`, nextDate: in30d.toISOString(), frequency: 'monthly', enabled: false },
  ]);
}

export function toggleReminder(reminderId: string, enabled: boolean): void {
  saveReminders(getReminders().map(r => r.id === reminderId ? { ...r, enabled } : r));
}

export function updateReminderDate(reminderId: string, nextDate: string): void {
  saveReminders(getReminders().map(r => r.id === reminderId ? { ...r, nextDate } : r));
}

export function updateReminder(
  reminderId: string,
  updates: Partial<Pick<Reminder, 'nextDate' | 'frequency'>>,
): void {
  saveReminders(getReminders().map(r => r.id === reminderId ? { ...r, ...updates } : r));
}

export function deleteReminder(reminderId: string): void {
  saveReminders(getReminders().filter(r => r.id !== reminderId));
}

export function completeReminder(tankId: string, type: Reminder['type']): void {
  const reminder = getReminders().find(r => r.tankId === tankId && r.type === type);
  if (!reminder?.enabled) return;
  const daysMap: Record<Reminder['frequency'], number> = { daily: 1, weekly: 7, biweekly: 14, monthly: 30 };
  const next = new Date(Date.now() + daysMap[reminder.frequency] * 86_400_000);
  next.setHours(10, 0, 0, 0);
  saveReminders(getReminders().map(r => r.id === reminder.id ? { ...r, nextDate: next.toISOString() } : r));
}

// ── Supabase sync ─────────────────────────────────────────────────────────────

/** Upsert all reminders into reminder_schedules so the Edge Function can read them. */
async function syncRemindersToSupabase(reminders: Reminder[]): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  if (reminders.length === 0) return;

  await supabase.from('reminder_schedules').upsert(
    reminders.map(r => ({
      id:          r.id,
      user_id:     user.id,
      tank_id:     r.tankId,
      tank_name:   r.tankName,
      type:        r.type,
      title:       r.title,
      message:     r.message,
      next_due_at: r.nextDate,
      frequency:   r.frequency,
      enabled:     r.enabled,
      updated_at:  new Date().toISOString(),
    })),
    { onConflict: 'id' },
  );
}

// ── Web Push subscription ──────────────────────────────────────────────────────────

function urlBase64ToUint8Array(b64: string): Uint8Array {
  const padding = '='.repeat((4 - (b64.length % 4)) % 4);
  const base64  = (b64 + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw     = atob(base64);
  return Uint8Array.from([...raw].map(c => c.charCodeAt(0)));
}

/**
 * Subscribe the current browser to Web Push and save the subscription
 * to the push_subscriptions table so the Edge Function can reach this device.
 */
export async function registerPushSubscription(): Promise<void> {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) return;

  const vapidKey = import.meta.env.VITE_VAPID_PUBLIC_KEY as string | undefined;
  if (!vapidKey) {
    console.warn('[Push] VITE_VAPID_PUBLIC_KEY is not set – background push disabled');
    return;
  }

  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const reg = await navigator.serviceWorker.ready;

    // Reuse existing subscription if VAPID key matches, otherwise re-subscribe
    let sub = await reg.pushManager.getSubscription();
    if (!sub) {
      sub = await reg.pushManager.subscribe({
        userVisibleOnly:      true,
        applicationServerKey: urlBase64ToUint8Array(vapidKey),
      });
    }

    const json = sub.toJSON() as {
      endpoint: string;
      keys: { p256dh: string; auth: string };
    };

    const { error } = await supabase.from('push_subscriptions').upsert({
      user_id:    user.id,
      endpoint:   json.endpoint,
      p256dh:     json.keys.p256dh,
      auth_key:   json.keys.auth,
      user_agent: navigator.userAgent.slice(0, 200),
      updated_at: new Date().toISOString(),
    }, { onConflict: 'endpoint' });

    if (error) console.error('[Push] upsert error:', error);
    else console.log('[Push] subscription saved to Supabase ✓');
  } catch (e) {
    console.error('[Push] registerPushSubscription failed:', e);
  }
}

// ── Permissions ───────────────────────────────────────────────────────────────

export function isNotificationSupported(): boolean {
  return 'Notification' in window;
}

/**
 * Request browser notification permission.
 * If granted, automatically registers the Web Push subscription in Supabase.
 */
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!isNotificationSupported()) return 'denied';
  const result = await Notification.requestPermission();
  if (result === 'granted') {
    // Register + persist push subscription so Edge Function can reach this device
    registerPushSubscription().catch(() => {});
  }
  return result;
}

// ── sendNotification ──────────────────────────────────────────────────────────────

export async function sendNotification(
  title: string,
  body: string,
  url  = '/my-tanks',
  tag?: string,
): Promise<void> {
  if (Notification.permission !== 'granted') return;

  const options: NotificationOptions = {
    body,
    icon:               '/icon-192.png',
    badge:              '/icon-192.png',
    tag:                tag ?? `aquaguide-${Date.now()}`,
    // @ts-expect-error – valid in SW context
    data:               { url },
    requireInteraction: true,
    vibrate:            [200, 100, 200],
  };

  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.ready;
      await reg.showNotification(title, options);
      return;
    } catch { /* fall through */ }
  }

  new Notification(title, { body, icon: '/icon-192.png', tag: options.tag });
}

// ── checkDueReminders ─────────────────────────────────────────────────────────────

const FIRED_KEY = 'aquaguide_fired_v2';

function getFired(): Set<string> {
  try { return new Set(JSON.parse(sessionStorage.getItem(FIRED_KEY) || '[]')); }
  catch { return new Set(); }
}
function markFired(k: string) {
  const s = getFired(); s.add(k);
  sessionStorage.setItem(FIRED_KEY, JSON.stringify([...s]));
}

export async function checkDueReminders(): Promise<void> {
  if (Notification.permission !== 'granted') return;

  const now    = Date.now();
  const fired  = getFired();
  const active = getReminders().filter(r => r.enabled);

  for (const r of active) {
    const due     = new Date(r.nextDate).getTime();
    const fireKey = `${r.id}::${r.nextDate}`;
    if (due <= now && !fired.has(fireKey)) {
      try {
        await sendNotification(r.title, r.message, '/my-tanks', r.id);
        markFired(fireKey);
        completeReminder(r.tankId, r.type);
      } catch { /* retry next tick */ }
    }
  }
}

// ── System lifecycle ──────────────────────────────────────────────────────────

let _interval: ReturnType<typeof setInterval> | null = null;

export function startReminderSystem(): void {
  if (_interval) return;
  checkDueReminders();
  _interval = setInterval(checkDueReminders, 60_000);

  // Ensure push subscription is registered in DB on every app start
  if (Notification.permission === 'granted') {
    registerPushSubscription().catch(() => {});
    // Also sync current localStorage reminders to DB (catches missed syncs)
    syncRemindersToSupabase(getReminders()).catch(() => {});
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(() => checkDueReminders()).catch(() => {});
  }
}

export function stopReminderSystem(): void {
  if (_interval) { clearInterval(_interval); _interval = null; }
}
