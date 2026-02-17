// Simple Notification System for AquaGuide
// Checks reminders every minute and sends browser notifications

export interface Reminder {
  id: string;
  tankId: string;
  tankName: string;
  type: 'water_change' | 'parameter_check' | 'filter_clean';
  title: string;
  message: string;
  nextDate: string; // ISO string for easy storage
  frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly';
  enabled: boolean;
}

const STORAGE_KEY = 'aquaguide_reminders_v2';

// Get all reminders from localStorage
export function getReminders(): Reminder[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

// Save reminders to localStorage
export function saveReminders(reminders: Reminder[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
}

// Get reminders for a specific tank
export function getTankReminders(tankId: string): Reminder[] {
  return getReminders().filter(r => r.tankId === tankId);
}

// Create default reminders for a new tank
export function createDefaultReminders(tankId: string, tankName: string): void {
  const existing = getTankReminders(tankId);
  if (existing.length > 0) return; // Already exists

  const now = new Date();
  const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  nextWeek.setHours(10, 0, 0, 0); // 10 AM

  const defaults: Reminder[] = [
    {
      id: `${tankId}-water-change`,
      tankId,
      tankName,
      type: 'water_change',
      title: `💧 Water Change - ${tankName}`,
      message: `Time for a water change in ${tankName}`,
      nextDate: nextWeek.toISOString(),
      frequency: 'weekly',
      enabled: false,
    },
    {
      id: `${tankId}-param-check`,
      tankId,
      tankName,
      type: 'parameter_check',
      title: `🧪 Check Parameters - ${tankName}`,
      message: `Test water parameters in ${tankName}`,
      nextDate: nextWeek.toISOString(),
      frequency: 'weekly',
      enabled: false,
    },
    {
      id: `${tankId}-filter-clean`,
      tankId,
      tankName,
      type: 'filter_clean',
      title: `🔧 Clean Filter - ${tankName}`,
      message: `Time to clean the filter in ${tankName}`,
      nextDate: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      frequency: 'monthly',
      enabled: false,
    },
  ];

  const all = getReminders();
  saveReminders([...all, ...defaults]);
}

// Toggle reminder on/off
export function toggleReminder(reminderId: string, enabled: boolean): void {
  const reminders = getReminders();
  const updated = reminders.map(r =>
    r.id === reminderId ? { ...r, enabled } : r
  );
  saveReminders(updated);
}

// Update reminder next date
export function updateReminderDate(reminderId: string, nextDate: string): void {
  const reminders = getReminders();
  const updated = reminders.map(r =>
    r.id === reminderId ? { ...r, nextDate } : r
  );
  saveReminders(updated);
}

// Complete a reminder (reschedule to next occurrence)
export function completeReminder(tankId: string, type: Reminder['type']): void {
  const reminders = getReminders();
  const reminder = reminders.find(r => r.tankId === tankId && r.type === type);
  
  if (!reminder || !reminder.enabled) return;

  // Calculate next date based on frequency
  const now = new Date();
  const daysToAdd = {
    daily: 1,
    weekly: 7,
    biweekly: 14,
    monthly: 30,
  }[reminder.frequency];

  const nextDate = new Date(now.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
  
  const updated = reminders.map(r =>
    r.id === reminder.id ? { ...r, nextDate: nextDate.toISOString() } : r
  );
  
  saveReminders(updated);
  console.log(`✅ Rescheduled ${reminder.title} to ${nextDate.toLocaleString()}`);
}

// Delete a reminder
export function deleteReminder(reminderId: string): void {
  const reminders = getReminders().filter(r => r.id !== reminderId);
  saveReminders(reminders);
}

// Request notification permission
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) {
    return 'denied';
  }
  return await Notification.requestPermission();
}

// Check if notifications are supported
export function isNotificationSupported(): boolean {
  return 'Notification' in window;
}

// Send a notification
export async function sendNotification(title: string, body: string): Promise<void> {
  if (Notification.permission !== 'granted') return;

  try {
    const registration = await navigator.serviceWorker.ready;
    await registration.showNotification(title, {
      body,
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      tag: `reminder-${Date.now()}`,
      requireInteraction: true,
      vibrate: [200, 100, 200],
    });
  } catch (error) {
    console.error('Failed to send notification:', error);
    // Fallback to regular notification
    new Notification(title, { body, icon: '/icon-192.png' });
  }
}

// Check for due reminders and send notifications
export function checkDueReminders(): void {
  if (Notification.permission !== 'granted') return;

  const reminders = getReminders().filter(r => r.enabled);
  const now = Date.now();

  reminders.forEach(reminder => {
    const dueDate = new Date(reminder.nextDate).getTime();
    
    // If reminder is due (within last hour to avoid spam)
    if (dueDate <= now && dueDate > now - 60 * 60 * 1000) {
      sendNotification(reminder.title, reminder.message);
      console.log(`🔔 Sent notification: ${reminder.title}`);
      
      // Auto-reschedule after notification
      completeReminder(reminder.tankId, reminder.type);
    }
  });
}

// Start the reminder checker (call once on app load)
let checkInterval: number | null = null;

export function startReminderSystem(): void {
  if (checkInterval) return; // Already running

  // Check immediately
  checkDueReminders();

  // Then check every minute
  checkInterval = window.setInterval(() => {
    checkDueReminders();
  }, 60 * 1000);

  console.log('✅ Reminder system started');
}

export function stopReminderSystem(): void {
  if (checkInterval) {
    window.clearInterval(checkInterval);
    checkInterval = null;
    console.log('⏹️ Reminder system stopped');
  }
}
