// AquaGuide Notification System

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

/** Update both nextDate and/or frequency in one call */
export function updateReminder(
  reminderId: string,
  updates: Partial<Pick<Reminder, 'nextDate' | 'frequency'>>,
): void {
  saveReminders(getReminders().map(r => r.id === reminderId ? { ...r, ...updates } : r));
}

export function deleteReminder(reminderId: string): void {
  saveReminders(getReminders().filter(r => r.id !== reminderId));
}

// ── Reschedule ──────────────────────────────────────────────────────────────

export function completeReminder(tankId: string, type: Reminder['type']): void {
  const reminder = getReminders().find(r => r.tankId === tankId && r.type === type);
  if (!reminder?.enabled) return;
  const daysMap: Record<Reminder['frequency'], number> = { daily: 1, weekly: 7, biweekly: 14, monthly: 30 };
  const next = new Date(Date.now() + daysMap[reminder.frequency] * 86_400_000);
  next.setHours(10, 0, 0, 0);
  saveReminders(getReminders().map(r => r.id === reminder.id ? { ...r, nextDate: next.toISOString() } : r));
}

// ── Permissions ──────────────────────────────────────────────────────────────

export function isNotificationSupported(): boolean {
  return 'Notification' in window;
}

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!isNotificationSupported()) return 'denied';
  return Notification.requestPermission();
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
    } catch (swErr) {
      console.warn('[Notifications] SW showNotification failed:', swErr);
    }
  }

  try {
    new Notification(title, { body, icon: '/icon-192.png', tag: options.tag });
  } catch (err) {
    console.error('[Notifications] Notification() failed:', err);
    throw err;
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
        await sendNotification(r.title, r.message, `/my-tanks`, r.id);
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
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(() => checkDueReminders())
      .catch(() => {});
  }
}

export function stopReminderSystem(): void {
  if (_interval) { clearInterval(_interval); _interval = null; }
}
