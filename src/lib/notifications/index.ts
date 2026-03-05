// AquaGuide Notification System
// localStorage-based (device-local) – syncs across tabs via storage event.

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

// ── CRUD ────────────────────────────────────────────────────────────────────

export function getReminders(): Reminder[] {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    return s ? JSON.parse(s) : [];
  } catch { return []; }
}

export function saveReminders(reminders: Reminder[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
  window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }));
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

export function deleteReminder(reminderId: string): void {
  saveReminders(getReminders().filter(r => r.id !== reminderId));
}

// ── Reschedule ─────────────────────────────────────────────────────────────────

export function completeReminder(tankId: string, type: Reminder['type']): void {
  const reminder = getReminders().find(r => r.tankId === tankId && r.type === type);
  if (!reminder?.enabled) return;
  const daysMap: Record<Reminder['frequency'], number> = { daily: 1, weekly: 7, biweekly: 14, monthly: 30 };
  const next = new Date(Date.now() + daysMap[reminder.frequency] * 86_400_000);
  next.setHours(10, 0, 0, 0);
  saveReminders(getReminders().map(r => r.id === reminder.id ? { ...r, nextDate: next.toISOString() } : r));
}

// ── Browser permission ──────────────────────────────────────────────────────────

export function isNotificationSupported(): boolean {
  return 'Notification' in window;
}

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!isNotificationSupported()) return 'denied';
  return Notification.requestPermission();
}

// ── sendNotification ──────────────────────────────────────────────────────────────
//
// Chrome blocks new Notification() from the main thread when a SW with a push
// handler is registered. We must ALWAYS go through ServiceWorkerRegistration.
// serviceWorker.ready resolves as soon as the SW is in "activated" state, which
// is nearly instant thanks to skipWaiting + clients.claim in sw.js.
//
export async function sendNotification(
  title: string,
  body: string,
  url  = '/my-tanks',
  tag?: string,
): Promise<void> {
  if (Notification.permission !== 'granted') return;

  const options: NotificationOptions = {
    body,
    icon:              '/icon-192.png',
    badge:             '/icon-192.png',
    tag:               tag ?? `aquaguide-${Date.now()}`,
    // @ts-expect-error – data is valid in SW notification options
    data:              { url },
    requireInteraction: true,
    vibrate:           [200, 100, 200],
  };

  // ① Try via SW registration – works even when tab is backgrounded
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.ready; // resolves quickly (skipWaiting)
      await reg.showNotification(title, options);
      return;
    } catch (swErr) {
      console.warn('[Notifications] SW showNotification failed, using fallback:', swErr);
    }
  }

  // ② Fallback: main-thread Notification (browsers without SW support)
  try {
    new Notification(title, { body, icon: '/icon-192.png', tag: options.tag });
  } catch (err) {
    console.error('[Notifications] Notification() failed:', err);
    throw err; // let caller know so it doesn’t mark the reminder as fired
  }
}

// ── checkDueReminders ─────────────────────────────────────────────────────────────

const FIRED_KEY = 'aquaguide_fired_v2';

function getFired(): Set<string> {
  try { return new Set(JSON.parse(sessionStorage.getItem(FIRED_KEY) || '[]')); }
  catch { return new Set(); }
}

function markFired(key: string): void {
  const s = getFired();
  s.add(key);
  sessionStorage.setItem(FIRED_KEY, JSON.stringify([...s]));
}

// Async so we can await sendNotification and only reschedule on success.
export async function checkDueReminders(): Promise<void> {
  if (Notification.permission !== 'granted') return;

  const now   = Date.now();
  const fired = getFired();
  const active = getReminders().filter(r => r.enabled);

  for (const r of active) {
    const due = new Date(r.nextDate).getTime();
    const fireKey = `${r.id}::${r.nextDate}`;

    // Fire if overdue and not yet fired this session.
    // No arbitrary time-window – sessionStorage dedup prevents spam.
    if (due <= now && !fired.has(fireKey)) {
      try {
        await sendNotification(r.title, r.message, `/my-tanks`, r.id);
        // Only mark fired + reschedule AFTER successful delivery
        markFired(fireKey);
        completeReminder(r.tankId, r.type);
      } catch {
        // sendNotification threw – don’t mark as fired so next tick retries
      }
    }
  }
}

// ── System lifecycle ──────────────────────────────────────────────────────────

let _interval: ReturnType<typeof setInterval> | null = null;

export function startReminderSystem(): void {
  if (_interval) return;

  // Check immediately, then every 60 s
  checkDueReminders();
  _interval = setInterval(checkDueReminders, 60_000);

  // Re-check once the SW is fully active (catches the first-load race condition
  // where controller is null when checkDueReminders first runs)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(() => {
      // Only retry if nothing was successfully fired yet this session
      checkDueReminders();
    }).catch(() => {/* ignore */});
  }
}

export function stopReminderSystem(): void {
  if (_interval) { clearInterval(_interval); _interval = null; }
}
