import { useState } from 'react';
import { X, Wrench, Bell, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTankReminders, toggleReminder, updateReminderDate, Reminder, isNotificationSupported, requestNotificationPermission, sendNotification } from '../../lib/notifications';

interface AddMaintenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (log: {
    type: 'water_change' | 'filter_cleaning' | 'equipment_maintenance' | 'medication' | 'other';
    title: string;
    description?: string;
    waterChangePercent?: number;
    performedAt?: string;
  }) => Promise<void>;
  tankId: string;
  tankName: string;
}

const maintenanceTypes = [
  { value: 'water_change', label: 'Water Change', icon: '💧', hasReminder: true },
  { value: 'filter_cleaning', label: 'Filter Cleaning', icon: '🔧', hasReminder: true },
  { value: 'equipment_maintenance', label: 'Equipment Maintenance', icon: '⚙️', hasReminder: false },
  { value: 'medication', label: 'Medication', icon: '💊', hasReminder: false },
  { value: 'other', label: 'Other', icon: '📝', hasReminder: false },
];

const AddMaintenanceModal = ({ isOpen, onClose, onSubmit, tankId, tankName }: AddMaintenanceModalProps) => {
  const [formData, setFormData] = useState({
    type: 'water_change' as const,
    title: '',
    description: '',
    waterChangePercent: '',
    performedAt: new Date().toISOString().slice(0, 16),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [enableReminder, setEnableReminder] = useState(false);
  const [reminderFrequency, setReminderFrequency] = useState<Reminder['frequency']>('weekly');
  const [permissionStatus, setPermissionStatus] = useState<'granted' | 'denied' | 'default'>(
    isNotificationSupported() ? Notification.permission : 'denied'
  );

  const handleReminderToggle = async (checked: boolean) => {
    if (checked) {
      // Check if notifications are supported
      if (!isNotificationSupported()) {
        alert('Notifications are not supported in your browser.');
        return;
      }

      // Request permission if needed
      const currentPermission = Notification.permission;
      if (currentPermission === 'default') {
        const permission = await requestNotificationPermission();
        setPermissionStatus(permission);
        
        if (permission === 'granted') {
          setEnableReminder(true);
        } else {
          alert('Please enable notifications in your browser settings to use reminders.');
        }
      } else if (currentPermission === 'denied') {
        alert('Notifications are blocked. Please enable them in your browser settings.');
        setPermissionStatus('denied');
      } else {
        setEnableReminder(true);
      }
    } else {
      setEnableReminder(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const log: any = {
        type: formData.type,
        title: formData.title,
        performedAt: new Date(formData.performedAt).toISOString(),
      };

      if (formData.description) log.description = formData.description;
      if (formData.waterChangePercent && formData.type === 'water_change') {
        log.waterChangePercent = parseInt(formData.waterChangePercent);
      }

      await onSubmit(log);

      // Handle reminder if enabled
      if (enableReminder && permissionStatus === 'granted') {
        const reminderType = formData.type === 'water_change' ? 'water_change' : 'filter_clean';
        const reminders = getTankReminders(tankId);
        const reminder = reminders.find(r => r.type === reminderType);

        if (reminder) {
          // Calculate next date based on frequency
          const now = new Date();
          const daysToAdd = {
            daily: 1,
            weekly: 7,
            biweekly: 14,
            monthly: 30,
          }[reminderFrequency];

          const nextDate = new Date(now.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
          nextDate.setHours(10, 0, 0, 0); // Set to 10 AM

          // Update reminder
          updateReminderDate(reminder.id, nextDate.toISOString());
          toggleReminder(reminder.id, true);

          // Send test notification
          setTimeout(() => {
            sendNotification(
              `✅ Reminder Set - ${tankName}`,
              `You'll be reminded about ${currentType?.label.toLowerCase()} in ${daysToAdd} day${daysToAdd > 1 ? 's' : ''}`
            );
          }, 500);
        }
      }
      
      // Reset form
      setFormData({
        type: 'water_change',
        title: '',
        description: '',
        waterChangePercent: '',
        performedAt: new Date().toISOString().slice(0, 16),
      });
      setEnableReminder(false);
      setReminderFrequency('weekly');
    } catch (err) {
      console.error('Error submitting maintenance log:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const currentType = maintenanceTypes.find(t => t.value === formData.type);
  const showReminderOption = currentType?.hasReminder;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 flex items-center justify-between rounded-t-2xl sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Log Maintenance</h2>
                    <p className="text-sm text-purple-100">Track tank maintenance tasks</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Maintenance Type */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Maintenance Type *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {maintenanceTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => handleChange('type', type.value)}
                        className={`p-3 rounded-xl border-2 transition-all text-left ${
                          formData.type === type.value
                            ? 'border-purple-500 bg-purple-50 shadow-md'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{type.icon}</span>
                          <span className="text-sm font-medium text-slate-900">{type.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    placeholder="e.g., 50% water change"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                {/* Water Change Percentage (only for water_change type) */}
                {formData.type === 'water_change' && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Water Changed (%)
                    </label>
                    <input
                      type="number"
                      value={formData.waterChangePercent}
                      onChange={(e) => handleChange('waterChangePercent', e.target.value)}
                      placeholder="e.g., 50"
                      min="0"
                      max="100"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                )}

                {/* Date/Time */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Date & Time *
                  </label>
                  <input
                    type="datetime-local"
                    value={formData.performedAt}
                    onChange={(e) => handleChange('performedAt', e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Description (Optional)
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    placeholder="Additional notes, observations, or actions taken..."
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all resize-none"
                  />
                </div>

                {/* Reminder Section */}
                {showReminderOption && (
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <input
                        type="checkbox"
                        id="enableReminder"
                        checked={enableReminder}
                        onChange={(e) => handleReminderToggle(e.target.checked)}
                        className="mt-1 w-4 h-4 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                      />
                      <label htmlFor="enableReminder" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2 mb-1">
                          <Bell className="w-4 h-4 text-purple-600" />
                          <span className="font-semibold text-slate-900 text-sm">
                            Set up recurring reminder
                          </span>
                        </div>
                        <p className="text-xs text-slate-600">
                          Get notified when it's time for the next {currentType?.label.toLowerCase()}
                        </p>
                      </label>
                    </div>

                    {/* Permission Warning */}
                    {permissionStatus === 'denied' && (
                      <div className="mb-3 bg-amber-50 border-2 border-amber-300 rounded-lg p-3 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-800">
                          Notifications are blocked. Please enable them in your browser settings to use reminders.
                        </p>
                      </div>
                    )}

                    {enableReminder && permissionStatus === 'granted' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                      >
                        <label className="block text-xs font-semibold text-slate-700 mb-2">
                          Reminder Frequency
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { value: 'daily', label: 'Daily' },
                            { value: 'weekly', label: 'Weekly' },
                            { value: 'biweekly', label: 'Every 2 Weeks' },
                            { value: 'monthly', label: 'Monthly' },
                          ].map((freq) => (
                            <button
                              key={freq.value}
                              type="button"
                              onClick={() => setReminderFrequency(freq.value as Reminder['frequency'])}
                              className={`px-3 py-2 rounded-lg border-2 text-xs font-medium transition-all ${
                                reminderFrequency === freq.value
                                  ? 'border-purple-500 bg-purple-100 text-purple-900'
                                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                              }`}
                            >
                              {freq.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.title}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Saving...' : 'Log Maintenance'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddMaintenanceModal;
