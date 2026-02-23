import { useState, useEffect } from 'react';
import { Bell, BellOff, Clock, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  getTankReminders,
  createDefaultReminders,
  toggleReminder,
  updateReminderDate,
  deleteReminder,
  requestNotificationPermission,
  isNotificationSupported,
  Reminder,
} from '../../lib/notifications';

interface ReminderPanelProps {
  tankId: string;
  tankName: string;
}

export default function ReminderPanel({ tankId, tankName }: ReminderPanelProps) {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [hasPermission, setHasPermission] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadReminders();
    checkPermission();
  }, [tankId]);

  const loadReminders = () => {
    const tankReminders = getTankReminders(tankId);
    if (tankReminders.length === 0) {
      createDefaultReminders(tankId, tankName);
      setReminders(getTankReminders(tankId));
    } else {
      setReminders(tankReminders);
    }
  };

  const checkPermission = () => {
    if (isNotificationSupported()) {
      setHasPermission(Notification.permission === 'granted');
    }
  };

  const handleRequestPermission = async () => {
    const permission = await requestNotificationPermission();
    setHasPermission(permission === 'granted');
  };

  const handleToggle = (reminderId: string, enabled: boolean) => {
    if (!hasPermission && enabled) {
      handleRequestPermission();
      return;
    }
    toggleReminder(reminderId, enabled);
    loadReminders();
  };

  const handleDateChange = (reminderId: string, dateTimeLocal: string) => {
    const date = new Date(dateTimeLocal);
    updateReminderDate(reminderId, date.toISOString());
    loadReminders();
    setEditingId(null);
  };

  const handleDelete = (reminderId: string, title: string) => {
    if (confirm(`Delete reminder "${title}"?`)) {
      deleteReminder(reminderId);
      loadReminders();
    }
  };

  const formatDateTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDateTimeInput = (isoString: string) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const getTimeUntil = (isoString: string) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = date.getTime() - now.getTime();
    const diffMins = Math.round(diffMs / 60000);
    
    if (diffMins < 0) return 'Overdue';
    if (diffMins < 60) return `in ${diffMins}min`;
    if (diffMins < 1440) return `in ${Math.round(diffMins / 60)}h`;
    return `in ${Math.round(diffMins / 1440)}d`;
  };

  if (!isNotificationSupported()) {
    return (
      <div className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-800 rounded-xl p-6 text-center">
        <BellOff className="w-12 h-12 text-amber-600 dark:text-amber-400 mx-auto mb-3" />
        <h3 className="font-bold text-amber-900 dark:text-amber-300 mb-2">Notifications Not Supported</h3>
        <p className="text-sm text-amber-700 dark:text-amber-400">
          Your browser doesn't support notifications. Try Chrome, Firefox, or Edge.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
            <Bell className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Reminders</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {hasPermission ? 'Notifications enabled' : 'Enable notifications'}
            </p>
          </div>
        </div>

        {!hasPermission && (
          <button
            onClick={handleRequestPermission}
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            <Bell className="w-4 h-4" />
            Enable
          </button>
        )}
      </div>

      {/* Reminders List */}
      <div className="space-y-3">
        {reminders.map((reminder, index) => (
          <motion.div
            key={reminder.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`rounded-xl border-2 transition-all ${
              reminder.enabled
                ? 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border-indigo-200 dark:border-indigo-800'
                : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
            }`}
          >
            {/* Main Row */}
            <div className="flex items-center gap-4 p-4">
              {/* Title & Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{reminder.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{reminder.message}</p>
                {reminder.enabled && (
                  <button
                    onClick={() => setEditingId(editingId === reminder.id ? null : reminder.id)}
                    className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Clock className="w-3 h-3" />
                    {formatDateTime(reminder.nextDate)} ({getTimeUntil(reminder.nextDate)})
                  </button>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggle(reminder.id, !reminder.enabled)}
                  className={`p-2 rounded-lg transition-colors ${
                    reminder.enabled
                      ? 'bg-indigo-100 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-950/50'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                  title={reminder.enabled ? 'Disable' : 'Enable'}
                >
                  {reminder.enabled ? <Bell className="w-5 h-5" /> : <BellOff className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => handleDelete(reminder.id, reminder.title)}
                  className="p-2 text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Date Editor */}
            {editingId === reminder.id && reminder.enabled && (
              <div className="border-t border-indigo-200 dark:border-indigo-800 p-4 bg-white/50 dark:bg-gray-900/50">
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Next Reminder
                </label>
                <input
                  type="datetime-local"
                  defaultValue={formatDateTimeInput(reminder.nextDate)}
                  onChange={(e) => handleDateChange(reminder.id, e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20 transition-all"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Info */}
      {hasPermission && reminders.some(r => r.enabled) && (
        <div className="mt-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex gap-3">
            <Bell className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <p className="text-sm text-blue-900 dark:text-blue-300">
              <strong>{reminders.filter(r => r.enabled).length} active reminders</strong>
              <br />
              <span className="text-blue-700 dark:text-blue-400">
                You'll receive browser notifications when tasks are due.
              </span>
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
