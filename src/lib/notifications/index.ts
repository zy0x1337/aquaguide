// AquaGuide Notification System
// localStorage-based (device-local) – syncs across tabs via storage event.

export interface Reminder {
  id: string;
  tankId: string;
  tankName: string;
  type: 'water_change' | 'parameter_check' | 'filter_clean';
  title: string;
  message: string;
  nextDate: string;   // ISO string
  frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly';
  enabled: boolean;
}

const STORAGE_KEY = 'aquaguide_reminders_v2';

// ── CRUD ─────────────────────────────────────────────────────────────────────

export function getReminders(): Reminder[] {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    return s ? JSON.parse(s) : [];
  } catch { return []; }
}

export function saveReminders(reminders: Reminder[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
  // Let other tabs know
  window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }));
}

export function getTankReminders(tankId: string): Reminder[] {
  return getReminders().filter(r => r.tankId === tankId);
}

export function createDefaultReminders(tankId: string, tankName: string): void {
  if (getTankReminders(tankId).length > 0) return;

  const now  = new Date();
  const in7d = new Date(now.getTime() + 7  * 86_400_000);
  const in30d = new Date(now.getTime() + 30 * 86_400_000);
  in7d.setHours(10, 0, 0, 0);
  in30d.setHours(10, 0, 0, 0);

  const defaults: Reminder[] = [
    { id: `${tankId}-water-change`, tankId, tankName, type: 'water_change',    title: `💧 Water Change – ${tankName}`,      message: `Time for a water change in ${tankName}`,      nextDate: in7d.toISOString(),  frequency: 'weekly',  enabled: false },
    { id: `${tankId}-param-check`,  tankId, tankName, type: 'parameter_check', title: `🧪 Check Parameters – ${tankName}`,  message: `Test water parameters in ${tankName}`,        nextDate: in7d.toISOString(),  frequency: 'weekly',  enabled: false },
    { id: `${tankId}-filter-clean`, tankId, tankName, type: 'filter_clean',    title: `🔧 Clean Filter – ${tankName}`,      message: `Time to clean the filter in ${tankName}`,    nextDate: in30d.toISOString(), frequency: 'monthly', enabled: false },
  ];

  saveReminders([...getReminders(), ...defaults]);
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

// ── Complete (reschedule) ─────────────────────────────────────────────────────

export function completeReminder(tankId: string, type: Reminder['type']): void {
  const reminder = getReminders().find(r => r.tankId === tankId && r.type === type);
  if (!reminder || !reminder.enabled) return;

  const daysMap: Record<Reminder['frequency'], number> = { daily: 1, weekly: 7, biweekly: 14, monthly: 30 };
  const next = new Date(Date.now() + daysMap[reminder.frequency] * 86_400_000);
  next.setHours(10, 0, 0, 0);

  saveReminders(getReminders().map(r => r.id === reminder.id ? { ...r, nextDate: next.toISOString() } : r));
}

// ── Browser notifications ─────────────────────────────────────────────────────

export function isNotificationSupported(): boolean {
  return 'Notification' in window;
}

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!isNotificationSupported()) return 'denied';
  return Notification.requestPermission();
}

/**
 * Show a native browser notification.
 * Prefers Service Worker (works when tab is backgrounded);
 * falls back to new Notification() if SW not ready yet.
 */
export async function sendNotification(
  title: string,
  body: string,
  url = '/my-tanks',
  tag?: string,
): Promise<void> {
  if (Notification.permission !== 'granted') return;

  // Try via SW (survives backgrounded tab on desktop/Android)
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'SHOW_NOTIFICATION',
      title,
      body,
      url,
      tag: tag ?? `aquaguide-${Date.now()}`,
    });
    return;
  }

  // SW not controlling yet (first load / iOS) – use SW registration if available
  if ('serviceWorker' in navigator) {
    try {
      const reg = await Promise.race([
        navigator.serviceWorker.ready,
        new Promise<never>((_, reject) => setTimeout(() => reject(new Error('SW timeout')), 3_000)),
      ]);
      await reg.showNotification(title, {
        body,
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        tag: tag ?? `aquaguide-${Date.now()}`,
        data: { url },
        requireInteraction: true,
        vibrate: [200, 100, 200],
      });
      return;
    } catch (_) { /* fall through */ }
  }

  // Final fallback: plain Notification API
  try {
    new Notification(title, { body, icon: '/icon-192.png', tag: tag ?? `aquaguide-${Date.now()}` });
  } catch (err) {
    console.error('[Notifications] sendNotification failed:', err);
  }
}

// ── Reminder checker (called every 60 s by startReminderSystem) ───────────────

const FIRED_KEY = 'aquaguide_fired_notifications';

function getFired(): Set<string> {
  try { return new Set(JSON.parse(sessionStorage.getItem(FIRED_KEY) || '[]')); }
  catch { return new Set(); }
}

function markFired(id: string): void {
  const fired = getFired();
  fired.add(id);
  sessionStorage.setItem(FIRED_KEY, JSON.stringify([...fired]));
}

export function checkDueReminders(): void {
  if (Notification.permission !== 'granted') return;

  const now   = Date.now();
  const fired = getFired();
  const active = getReminders().filter(r => r.enabled);

  for (const r of active) {
    const due = new Date(r.nextDate).getTime();
    // Fire if overdue by at most 1 hour (avoids firing old reminders on first load)
    if (due <= now && due > now - 3_600_000 && !fired.has(r.id + r.nextDate)) {
      sendNotification(r.title, r.message, `/my-tanks`, r.id);
      markFired(r.id + r.nextDate);
      completeReminder(r.tankId, r.type);
    }
  }
}

// ── System lifecycle ──────────────────────────────────────────────────────────

let _interval: ReturnType<typeof setInterval> | null = null;

export function startReminderSystem(): void {
  if (_interval) return;
  checkDueReminders();
  _interval = setInterval(checkDueReminders, 60_000);
}

export function stopReminderSystem(): void {
  if (_interval) { clearInterval(_interval); _interval = null; }
}
