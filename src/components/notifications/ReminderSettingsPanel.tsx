import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bell, BellOff, Plus, Trash2, Calendar, Droplets, Filter, Fish, Clock } from 'lucide-react';
import { reminderSystem, Reminder } from '../../lib/notifications/reminderSystem';
import { notificationManager } from '../../lib/notifications/NotificationManager';
import { useToast } from '../../contexts/ToastContext';

interface ReminderSettingsPanelProps {
  tankId: string;
  tankName: string;
}

const ReminderSettingsPanel = ({ tankId, tankName }: ReminderSettingsPanelProps) => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [hasPermission, setHasPermission] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const toast = useToast();

  useEffect(() => {
    loadReminders();
    checkPermission();
  }, [tankId]);

  const loadReminders = () => {
    const tankReminders = reminderSystem.getRemindersByTank(tankId);
    setReminders(tankReminders);

    // If no reminders exist, create defaults
    if (tankReminders.length === 0) {
      reminderSystem.createDefaultReminders(tankId, tankName);
      const newReminders = reminderSystem.getRemindersByTank(tankId);
      setReminders(newReminders);
    }
  };

  const checkPermission = () => {
    if (notificationManager.isSupported()) {
      setHasPermission(notificationManager.getPermission() === 'granted');
    }
  };

  const handleRequestPermission = async () => {
    try {
      const permission = await notificationManager.requestPermission();
      if (permission === 'granted') {
        setHasPermission(true);
        toast.success('Notifications enabled!', "You'll receive helpful reminders.");
      } else {
        toast.error('Permission denied', 'Enable notifications in browser settings.');
      }
    } catch (error) {
      toast.error('Failed to request permission', 'Please try again.');
    }
  };

  const handleToggleReminder = (reminderId: string, enabled: boolean) => {
    if (!hasPermission && enabled) {
      handleRequestPermission();
      return;
    }

    reminderSystem.toggleReminder(reminderId, enabled);
    loadReminders();
    
    const reminder = reminders.find(r => r.id === reminderId);
    if (reminder) {
      console.log('🔔 Reminder toggled:', {
        enabled,
        reminder: reminder.title,
        nextDate: reminder.nextDate,
        now: new Date(),
      });
      
      toast.success(
        enabled ? 'Reminder enabled' : 'Reminder disabled',
        enabled ? `You'll be notified for ${reminder.title}` : `${reminder.title} disabled`
      );
    }
  };

  const handleUpdateNextDate = (reminderId: string, newDateStr: string) => {
    // Parse the datetime-local input (already in local timezone)
    const newDate = new Date(newDateStr);
    
    console.log('📅 Updating reminder date:', {
      reminderId,
      input: newDateStr,
      parsed: newDate,
      iso: newDate.toISOString(),
      now: new Date(),
    });
    
    reminderSystem.updateReminder(reminderId, { nextDate: newDate });
    loadReminders();
    setEditingId(null);
    
    toast.success('Date updated', 'Reminder date has been changed.');
  };

  const handleDeleteReminder = (reminderId: string) => {
    const reminder = reminders.find(r => r.id === reminderId);
    if (!reminder) return;

    if (confirm(`Delete reminder "${reminder.title}"?`)) {
      reminderSystem.deleteReminder(reminderId);
      loadReminders();
      toast.success('Reminder deleted', 'Reminder has been removed.');
    }
  };

  const getReminderIcon = (type: Reminder['type']) => {
    switch (type) {
      case 'water_change': return <Droplets className="w-5 h-5" />;
      case 'parameter_check': return <Calendar className="w-5 h-5" />;
      case 'filter_clean': return <Filter className="w-5 h-5" />;
      case 'feeding': return <Fish className="w-5 h-5" />;
      default: return <Bell className="w-5 h-5" />;
    }
  };

  const getFrequencyLabel = (frequency: Reminder['frequency'], customDays?: number) => {
    switch (frequency) {
      case 'daily': return 'Daily';
      case 'weekly': return 'Weekly';
      case 'biweekly': return 'Every 2 weeks';
      case 'monthly': return 'Monthly';
      case 'custom': return `Every ${customDays} days`;
      default: return frequency;
    }
  };

  const formatNextDate = (date: Date) => {
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 7) return `In ${diffDays} days`;
    return date.toLocaleDateString();
  };

  // Format date for datetime-local input (YYYY-MM-DDTHH:MM)
  const formatDateTimeLocal = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  if (!notificationManager.isSupported()) {
    return (
      <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 text-center">
        <BellOff className="w-12 h-12 text-amber-600 mx-auto mb-3" />
        <h3 className="font-bold text-amber-900 mb-2">Notifications Not Supported</h3>
        <p className="text-sm text-amber-700">
          Your browser doesn't support notifications. Try using Chrome, Firefox, or Edge.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 sm:p-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
            <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Reminders</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {hasPermission ? 'Get notified for maintenance tasks' : 'Enable notifications to set reminders'}
            </p>
          </div>
        </div>

        {!hasPermission && (
          <button
            onClick={handleRequestPermission}
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
          >
            <Bell className="w-4 h-4" />
            Enable Notifications
          </button>
        )}
      </div>

      {/* Reminders List */}
      <div className="space-y-3">
        {reminders.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            <Bell className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-sm">No reminders yet</p>
          </div>
        ) : (
          reminders.map((reminder, index) => (
            <motion.div
              key={reminder.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-xl border-2 transition-all ${
                reminder.enabled
                  ? 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              {/* Main Content */}
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  reminder.enabled ? 'bg-white text-indigo-600' : 'bg-slate-200 text-slate-500'
                }`}>
                  {getReminderIcon(reminder.type)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">{reminder.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-1 truncate">{reminder.message}</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className={`font-semibold ${
                      reminder.enabled ? 'text-indigo-600' : 'text-slate-500'
                    }`}>
                      {getFrequencyLabel(reminder.frequency, reminder.customDays)}
                    </span>
                    {reminder.enabled && (
                      <>
                        <span className="text-slate-400">•</span>
                        <button
                          onClick={() => setEditingId(editingId === reminder.id ? null : reminder.id)}
                          className="text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-1"
                        >
                          <Clock className="w-3 h-3" />
                          {formatNextDate(reminder.nextDate)} at {reminder.nextDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => handleToggleReminder(reminder.id, !reminder.enabled)}
                    className={`p-2 rounded-lg transition-colors ${
                      reminder.enabled
                        ? 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                        : 'bg-slate-200 text-slate-500 hover:bg-slate-300'
                    }`}
                    title={reminder.enabled ? 'Disable' : 'Enable'}
                  >
                    {reminder.enabled ? (
                      <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <BellOff className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </button>
                  <button
                    onClick={() => handleDeleteReminder(reminder.id)}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Date Editor */}
              {editingId === reminder.id && reminder.enabled && (
                <div className="border-t border-indigo-200 p-3 sm:p-4 bg-white/50">
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Next Reminder Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    defaultValue={formatDateTimeLocal(reminder.nextDate)}
                    onChange={(e) => handleUpdateNextDate(reminder.id, e.target.value)}
                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
                  />
                  <p className="text-xs text-slate-500 mt-2">
                    Current: {reminder.nextDate.toLocaleString()}
                  </p>
                </div>
              )}
            </motion.div>
          ))
        )}
      </div>

      {/* Info */}
      {hasPermission && reminders.some(r => r.enabled) && (
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex gap-3">
            <Bell className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-blue-900">
              <strong>Active reminders:</strong> {reminders.filter(r => r.enabled).length}
              <br />
              <span className="text-blue-700">
                You'll receive notifications when tasks are due. Make sure your device isn't in Do Not Disturb mode.
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Debug Info (remove in production) */}
      {hasPermission && reminders.some(r => r.enabled) && (
        <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs font-mono">
          <div className="font-bold text-slate-700 mb-2">Debug Info:</div>
          <div className="space-y-1 text-slate-600">
            <div>Current Time: {new Date().toLocaleString()}</div>
            <div>Permission: {Notification.permission}</div>
            {reminders.filter(r => r.enabled).map(r => (
              <div key={r.id} className="mt-2 pt-2 border-t border-slate-200">
                <div className="font-semibold">{r.title}:</div>
                <div>Next: {r.nextDate.toISOString()}</div>
                <div>Due in: {Math.round((r.nextDate.getTime() - Date.now()) / 60000)} minutes</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ReminderSettingsPanel;
