/**
 * Notification Manager
 * Handles browser push notifications and permission requests
 */

export interface NotificationOptions {
  title: string;
  body: string;
  icon?: string;
  badge?: string;
  tag?: string;
  data?: any;
  requireInteraction?: boolean;
  actions?: NotificationAction[];
}

export class NotificationManager {
  private static instance: NotificationManager;
  private permission: NotificationPermission = 'default';

  private constructor() {
    if ('Notification' in window) {
      this.permission = Notification.permission;
    }
  }

  static getInstance(): NotificationManager {
    if (!NotificationManager.instance) {
      NotificationManager.instance = new NotificationManager();
    }
    return NotificationManager.instance;
  }

  /**
   * Check if notifications are supported
   */
  isSupported(): boolean {
    return 'Notification' in window && 'serviceWorker' in navigator;
  }

  /**
   * Get current permission status
   */
  getPermission(): NotificationPermission {
    return this.permission;
  }

  /**
   * Request notification permission from user
   */
  async requestPermission(): Promise<NotificationPermission> {
    if (!this.isSupported()) {
      throw new Error('Notifications not supported');
    }

    if (this.permission === 'granted') {
      return 'granted';
    }

    try {
      const permission = await Notification.requestPermission();
      this.permission = permission;
      return permission;
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      throw error;
    }
  }

  /**
   * Show a local notification
   */
  async showNotification(options: NotificationOptions): Promise<void> {
    if (!this.isSupported()) {
      console.warn('Notifications not supported');
      return;
    }

    if (this.permission !== 'granted') {
      console.warn('Notification permission not granted');
      return;
    }

    try {
      // Get service worker registration
      const registration = await navigator.serviceWorker.ready;

      // Show notification via service worker
      await registration.showNotification(options.title, {
        body: options.body,
        icon: options.icon || '/icon-192.png',
        badge: options.badge || '/icon-192.png',
        tag: options.tag,
        data: options.data,
        requireInteraction: options.requireInteraction || false,
        actions: options.actions,
        vibrate: [200, 100, 200],
      });
    } catch (error) {
      console.error('Error showing notification:', error);
      throw error;
    }
  }

  /**
   * Schedule a notification for later
   */
  async scheduleNotification(
    options: NotificationOptions,
    delayMs: number
  ): Promise<number> {
    if (!this.isSupported()) {
      throw new Error('Notifications not supported');
    }

    // Use setTimeout for now (in production, use proper background sync)
    const timeoutId = window.setTimeout(() => {
      this.showNotification(options);
    }, delayMs);

    return timeoutId;
  }

  /**
   * Cancel a scheduled notification
   */
  cancelScheduledNotification(timeoutId: number): void {
    window.clearTimeout(timeoutId);
  }

  /**
   * Get all active notifications
   */
  async getNotifications(): Promise<Notification[]> {
    if (!this.isSupported()) {
      return [];
    }

    try {
      const registration = await navigator.serviceWorker.ready;
      return await registration.getNotifications();
    } catch (error) {
      console.error('Error getting notifications:', error);
      return [];
    }
  }

  /**
   * Close all notifications
   */
  async closeAllNotifications(): Promise<void> {
    if (!this.isSupported()) {
      return;
    }

    try {
      const notifications = await this.getNotifications();
      notifications.forEach(notification => notification.close());
    } catch (error) {
      console.error('Error closing notifications:', error);
    }
  }
}

// Export singleton instance
export const notificationManager = NotificationManager.getInstance();

// Convenience functions
export const requestNotificationPermission = () => 
  notificationManager.requestPermission();

export const showNotification = (options: NotificationOptions) => 
  notificationManager.showNotification(options);

export const scheduleNotification = (options: NotificationOptions, delayMs: number) => 
  notificationManager.scheduleNotification(options, delayMs);
