import { notificationManager } from './NotificationManager';

export interface Reminder {
  id: string;
  tankId: string;
  tankName: string;
  type: 'water_change' | 'parameter_check' | 'filter_clean' | 'feeding' | 'custom';
  title: string;
  message: string;
  frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'custom';
  customDays?: number;
  nextDate: Date;
  enabled: boolean;
  lastNotified?: Date;
}

const STORAGE_KEY = 'aquaguide_reminders';

export class ReminderSystem {
  private static instance: ReminderSystem;
  private reminders: Reminder[] = [];
  private checkInterval: number | null = null;

  private constructor() {
    this.loadReminders();
    this.startCheckingReminders();
  }

  static getInstance(): ReminderSystem {
    if (!ReminderSystem.instance) {
      ReminderSystem.instance = new ReminderSystem();
    }
    return ReminderSystem.instance;
  }

  /**
   * Load reminders from localStorage
   */
  private loadReminders(): void {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        this.reminders = parsed.map((r: any) => ({
          ...r,
          nextDate: new Date(r.nextDate),
          lastNotified: r.lastNotified ? new Date(r.lastNotified) : undefined,
        }));
      }
    } catch (error) {
      console.error('Error loading reminders:', error);
      this.reminders = [];
    }
  }

  /**
   * Save reminders to localStorage
   */
  private saveReminders(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.reminders));
    } catch (error) {
      console.error('Error saving reminders:', error);
    }
  }

  /**
   * Get all reminders
   */
  getReminders(): Reminder[] {
    return this.reminders;
  }

  /**
   * Get reminders for a specific tank
   */
  getRemindersByTank(tankId: string): Reminder[] {
    return this.reminders.filter(r => r.tankId === tankId);
  }

  /**
   * Add a new reminder
   */
  addReminder(reminder: Omit<Reminder, 'id'>): Reminder {
    const newReminder: Reminder = {
      ...reminder,
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };
    
    this.reminders.push(newReminder);
    this.saveReminders();
    return newReminder;
  }

  /**
   * Update an existing reminder
   */
  updateReminder(id: string, updates: Partial<Reminder>): void {
    const index = this.reminders.findIndex(r => r.id === id);
    if (index !== -1) {
      this.reminders[index] = { ...this.reminders[index], ...updates };
      this.saveReminders();
    }
  }

  /**
   * Delete a reminder
   */
  deleteReminder(id: string): void {
    this.reminders = this.reminders.filter(r => r.id !== id);
    this.saveReminders();
  }

  /**
   * Enable/disable a reminder
   */
  toggleReminder(id: string, enabled: boolean): void {
    this.updateReminder(id, { enabled });
  }

  /**
   * Complete a reminder (mark as done and reschedule)
   */
  completeReminder(tankId: string, type: Reminder['type']): void {
    const reminder = this.reminders.find(
      r => r.tankId === tankId && r.type === type && r.enabled
    );

    if (!reminder) {
      console.log(`No active reminder found for ${type} on tank ${tankId}`);
      return;
    }

    const now = new Date();
    const newNextDate = this.calculateNextDate(reminder);

    console.log('✅ Completing reminder:', {
      reminder: reminder.title,
      oldNextDate: reminder.nextDate,
      newNextDate,
      completed: now,
    });

    this.updateReminder(reminder.id, {
      lastNotified: now,
      nextDate: newNextDate,
    });
  }

  /**
   * Calculate next reminder date based on frequency
   */
  private calculateNextDate(reminder: Reminder): Date {
    const now = new Date();
    const daysToAdd = this.getFrequencyDays(reminder.frequency, reminder.customDays);
    const nextDate = new Date(now);
    nextDate.setDate(nextDate.getDate() + daysToAdd);
    return nextDate;
  }

  /**
   * Get number of days for frequency
   */
  private getFrequencyDays(frequency: Reminder['frequency'], customDays?: number): number {
    switch (frequency) {
      case 'daily': return 1;
      case 'weekly': return 7;
      case 'biweekly': return 14;
      case 'monthly': return 30;
      case 'custom': return customDays || 7;
      default: return 7;
    }
  }

  /**
   * Start checking for due reminders
   */
  private startCheckingReminders(): void {
    // Check every minute
    this.checkInterval = window.setInterval(() => {
      this.checkDueReminders();
    }, 60 * 1000);

    // Check immediately
    this.checkDueReminders();
  }

  /**
   * Check for reminders that are due
   */
  private async checkDueReminders(): Promise<void> {
    const now = new Date();
    console.log('🔍 Checking reminders at', now.toLocaleString());

    for (const reminder of this.reminders) {
      if (!reminder.enabled) continue;

      console.log(`  - ${reminder.title}: due ${reminder.nextDate.toLocaleString()} (in ${Math.round((reminder.nextDate.getTime() - now.getTime()) / 60000)}min)`);

      // Check if reminder is due (compare timestamps)
      if (reminder.nextDate.getTime() <= now.getTime()) {
        // Check if we already notified today
        const lastNotified = reminder.lastNotified;
        if (lastNotified) {
          // Compare dates without time (same calendar day check)
          const lastNotifiedDate = new Date(lastNotified);
          lastNotifiedDate.setHours(0, 0, 0, 0);
          
          const todayDate = new Date(now);
          todayDate.setHours(0, 0, 0, 0);
          
          // Don't notify more than once per day
          if (lastNotifiedDate.getTime() === todayDate.getTime()) {
            console.log(`    ⏭️ Already notified today, skipping`);
            continue;
          }
        }

        console.log(`    🔔 SENDING NOTIFICATION for ${reminder.title}`);
        
        // Send notification
        await this.sendReminderNotification(reminder);

        // Update reminder
        this.updateReminder(reminder.id, {
          lastNotified: now,
          nextDate: this.calculateNextDate(reminder),
        });
      }
    }
  }

  /**
   * Send a reminder notification
   */
  private async sendReminderNotification(reminder: Reminder): Promise<void> {
    try {
      await notificationManager.showNotification({
        title: `🐠 ${reminder.title}`,
        body: reminder.message,
        tag: `reminder-${reminder.id}`,
        requireInteraction: true,
        data: {
          type: 'reminder',
          reminderId: reminder.id,
          tankId: reminder.tankId,
        },
        actions: [
          {
            action: 'view',
            title: 'View Tank',
          },
          {
            action: 'snooze',
            title: 'Remind Later',
          },
        ],
      });
      
      console.log('✅ Notification sent successfully');
    } catch (error) {
      console.error('❌ Error sending reminder notification:', error);
    }
  }

  /**
   * Create default reminders for a new tank
   */
  createDefaultReminders(tankId: string, tankName: string): void {
    const now = new Date();
    
    // Set to tomorrow at 10:00 AM local time
    const tomorrow10AM = new Date(now);
    tomorrow10AM.setDate(tomorrow10AM.getDate() + 1);
    tomorrow10AM.setHours(10, 0, 0, 0);

    const defaults: Array<Omit<Reminder, 'id'>> = [
      {
        tankId,
        tankName,
        type: 'water_change',
        title: `Water Change - ${tankName}`,
        message: `Time for a water change in ${tankName}. Replace 25-30% of the water.`,
        frequency: 'weekly',
        nextDate: new Date(tomorrow10AM.getTime() + 7 * 24 * 60 * 60 * 1000), // +7 days
        enabled: false, // Let user enable
      },
      {
        tankId,
        tankName,
        type: 'parameter_check',
        title: `Check Parameters - ${tankName}`,
        message: `Test water parameters in ${tankName}. Check pH, ammonia, nitrite, and nitrate.`,
        frequency: 'weekly',
        nextDate: new Date(tomorrow10AM.getTime() + 7 * 24 * 60 * 60 * 1000), // +7 days
        enabled: false,
      },
      {
        tankId,
        tankName,
        type: 'filter_clean',
        title: `Clean Filter - ${tankName}`,
        message: `Clean the filter in ${tankName}. Rinse media in tank water.`,
        frequency: 'monthly',
        nextDate: new Date(tomorrow10AM.getTime() + 30 * 24 * 60 * 60 * 1000), // +30 days
        enabled: false,
      },
    ];

    defaults.forEach(reminder => this.addReminder(reminder));
  }

  /**
   * Stop checking reminders (cleanup)
   */
  stop(): void {
    if (this.checkInterval) {
      window.clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
  }
}

// Export singleton instance
export const reminderSystem = ReminderSystem.getInstance();
