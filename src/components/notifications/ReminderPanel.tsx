import { useState, useEffect } from 'react';
import { Bell, BellOff, Clock, Trash2, Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  getTankReminders,
  createDefaultReminders,
  toggleReminder,
  updateReminder,
  deleteReminder,
  requestNotificationPermission,
  isNotificationSupported,
  type Reminder,
} from '../../lib/notifications';

// ── Config ────────────────────────────────────────────────────────────────

const PRESETS: { label: string; days: number }[] = [
  { label: 'Today',    days: 0  },
  { label: 'Tomorrow', days: 1  },
  { label: '+ 3 days', days: 3  },
  { label: '+ 1 week', days: 7  },
  { label: '+ 2 weeks',days: 14 },
  { label: '+ 1 month',days: 30 },
];

const HOURS = [7, 8, 9, 10, 12, 14, 17, 18, 20];

const FREQUENCIES: { value: Reminder['frequency']; label: string }[] = [
  { value: 'daily',    label: 'Daily'      },
  { value: 'weekly',   label: 'Weekly'     },
  { value: 'biweekly', label: 'Every 2 w'  },
  { value: 'monthly',  label: 'Monthly'    },
];

const TYPE_CFG: Record<Reminder['type'], { emoji: string; color: string; bg: string; border: string }> = {
  water_change:    { emoji: '💧', color: 'text-cyan-700 dark:text-cyan-300',   bg: 'bg-cyan-50 dark:bg-cyan-950/40',   border: 'border-cyan-200 dark:border-cyan-800'   },
  parameter_check: { emoji: '🧪', color: 'text-violet-700 dark:text-violet-300', bg: 'bg-violet-50 dark:bg-violet-950/40', border: 'border-violet-200 dark:border-violet-800' },
  filter_clean:    { emoji: '🔧', color: 'text-amber-700 dark:text-amber-300',  bg: 'bg-amber-50 dark:bg-amber-950/40',  border: 'border-amber-200 dark:border-amber-800'  },
};

// ── Helpers ────────────────────────────────────────────────────────────────

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric', month: 'short' }) +
  ' · ' +
  new Date(iso).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

const timeAgo = (iso: string) => {
  const diff = new Date(iso).getTime() - Date.now();
  if (diff < 0) return '⚠️ überfällig';
  const d = Math.floor(diff / 86_400_000);
  const h = Math.floor((diff % 86_400_000) / 3_600_000);
  if (d > 0) return `in ${d}d ${h}h`;
  return `in ${h}h`;
};

const buildDate = (daysFromNow: number, hour: number): Date => {
  const d = new Date(Date.now() + daysFromNow * 86_400_000);
  d.setHours(hour, 0, 0, 0);
  return d;
};

const daysUntil = (iso: string) =>
  Math.round((new Date(iso).getTime() - Date.now()) / 86_400_000);

// ── Date editor sub-component ──────────────────────────────────────────────

function DateEditor({
  reminder,
  onSave,
  onClose,
}: {
  reminder: Reminder;
  onSave: (nextDate: string, frequency: Reminder['frequency']) => void;
  onClose: () => void;
}) {
  // Allow 0 (today) – clamp only below 0
  const initialDays = Math.max(0, daysUntil(reminder.nextDate));
  const initialHour = new Date(reminder.nextDate).getHours() || 10;

  const [days,      setDays]      = useState(initialDays);
  const [hour,      setHour]      = useState(initialHour);
  const [frequency, setFrequency] = useState<Reminder['frequency']>(reminder.frequency);

  const preview = buildDate(days, hour);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden"
    >
      <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4 bg-gray-50/80 dark:bg-gray-800/50">

        {/* ── When ── */}
        <div>
          <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">When</p>
          <div className="flex flex-wrap gap-1.5">
            {PRESETS.map(p => (
              <button
                key={p.days}
                onClick={() => setDays(p.days)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  days === p.days
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Time ── */}
        <div>
          <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Time</p>
          <div className="flex flex-wrap gap-1.5">
            {HOURS.map(h => (
              <button
                key={h}
                onClick={() => setHour(h)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  hour === h
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500'
                }`}
              >
                {String(h).padStart(2, '0')}:00
              </button>
            ))}
          </div>
        </div>

        {/* ── Repeat ── */}
        <div>
          <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Repeat</p>
          <div className="flex flex-wrap gap-1.5">
            {FREQUENCIES.map(f => (
              <button
                key={f.value}
                onClick={() => setFrequency(f.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  frequency === f.value
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Preview + Save ── */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            <Clock className="w-3.5 h-3.5 text-indigo-500" />
            <span>
              <span className="font-bold text-gray-900 dark:text-white">
                {days === 0
                  ? 'Today'
                  : preview.toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric', month: 'short' })}
              </span>
              {' · '}
              {String(hour).padStart(2, '0')}:00
              {' · '}
              {FREQUENCIES.find(f => f.value === frequency)?.label}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => onSave(preview.toISOString(), frequency)}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-all shadow-sm"
            >
              <Check className="w-3.5 h-3.5" strokeWidth={3} />
              Save
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function ReminderPanel({ tankId, tankName }: { tankId: string; tankName: string }) {
  const [reminders,     setReminders]     = useState<Reminder[]>([]);
  const [hasPermission, setHasPermission] = useState(false);
  const [editingId,     setEditingId]     = useState<string | null>(null);

  const load = () => {
    const rs = getTankReminders(tankId);
    if (rs.length === 0) {
      createDefaultReminders(tankId, tankName);
      setReminders(getTankReminders(tankId));
    } else {
      setReminders(rs);
    }
  };

  useEffect(() => {
    load();
    if (isNotificationSupported()) setHasPermission(Notification.permission === 'granted');
  }, [tankId]);

  const handleToggle = async (reminderId: string, enabled: boolean) => {
    if (!hasPermission && enabled) {
      const p = await requestNotificationPermission();
      setHasPermission(p === 'granted');
      if (p !== 'granted') return;
    }
    toggleReminder(reminderId, enabled);
    load();
  };

  const handleSave = (reminderId: string, nextDate: string, frequency: Reminder['frequency']) => {
    updateReminder(reminderId, { nextDate, frequency });
    load();
    setEditingId(null);
  };

  const handleDelete = (reminderId: string) => {
    deleteReminder(reminderId);
    load();
  };

  if (!isNotificationSupported()) {
    return (
      <div className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-800 rounded-xl p-6 text-center">
        <BellOff className="w-10 h-10 text-amber-600 dark:text-amber-400 mx-auto mb-3" />
        <h3 className="font-bold text-amber-900 dark:text-amber-300 mb-1">Notifications Not Supported</h3>
        <p className="text-sm text-amber-700 dark:text-amber-400">Try Chrome, Firefox, or Edge.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-sm">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-black text-gray-900 dark:text-white">Reminders</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {hasPermission
                ? `${reminders.filter(r => r.enabled).length} of ${reminders.length} active`
                : 'Notifications disabled'}
            </p>
          </div>
        </div>
        {!hasPermission && (
          <button
            onClick={async () => {
              const p = await requestNotificationPermission();
              setHasPermission(p === 'granted');
            }}
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:shadow-lg transition-all"
          >
            <Bell className="w-4 h-4" />
            Enable
          </button>
        )}
      </div>

      {/* Reminder cards */}
      <div className="divide-y divide-gray-100 dark:divide-gray-800">
        {reminders.map((r) => {
          const cfg       = TYPE_CFG[r.type];
          const isEditing = editingId === r.id;
          const overdue   = r.enabled && new Date(r.nextDate).getTime() < Date.now();
          const freqLabel = FREQUENCIES.find(f => f.value === r.frequency)?.label;

          return (
            <div key={r.id}>
              <div className={`flex items-center gap-3 px-5 py-4 transition-colors ${
                r.enabled ? '' : 'opacity-60'
              }`}>

                {/* Emoji badge */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 border ${
                  r.enabled ? `${cfg.bg} ${cfg.border}` : 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                }`}>
                  {cfg.emoji}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-black text-gray-900 dark:text-white truncate">
                    {r.type === 'water_change'     ? 'Water Change'
                     : r.type === 'parameter_check' ? 'Check Parameters'
                     : 'Clean Filter'}
                  </p>

                  {r.enabled ? (
                    <button
                      onClick={() => setEditingId(isEditing ? null : r.id)}
                      className={`flex items-center gap-1.5 mt-0.5 text-xs transition-colors ${
                        overdue
                          ? 'text-red-600 dark:text-red-400 font-bold'
                          : 'text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                      }`}
                    >
                      <Clock className="w-3 h-3" />
                      <span>{fmt(r.nextDate)}</span>
                      <span className="opacity-70">({timeAgo(r.nextDate)})</span>
                      <span className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-bold text-gray-500 dark:text-gray-400">
                        {freqLabel}
                      </span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${isEditing ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{freqLabel} · tap bell to enable</p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button
                    onClick={() => handleToggle(r.id, !r.enabled)}
                    title={r.enabled ? 'Disable' : 'Enable'}
                    className={`p-2 rounded-xl transition-all ${
                      r.enabled
                        ? `${cfg.bg} ${cfg.color} ${cfg.border} border hover:opacity-80`
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {r.enabled
                      ? <Bell className="w-4 h-4" strokeWidth={2.5} />
                      : <BellOff className="w-4 h-4" strokeWidth={2.5} />}
                  </button>
                  <button
                    onClick={() => handleDelete(r.id)}
                    className="p-2 rounded-xl text-gray-300 dark:text-gray-600 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              {/* Date editor */}
              <AnimatePresence>
                {isEditing && r.enabled && (
                  <DateEditor
                    reminder={r}
                    onSave={(date, freq) => handleSave(r.id, date, freq)}
                    onClose={() => setEditingId(null)}
                  />
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Footer info */}
      {hasPermission && reminders.some(r => r.enabled) && (
        <div className="px-5 py-3 bg-indigo-50/60 dark:bg-indigo-950/20 border-t border-indigo-100 dark:border-indigo-900">
          <p className="text-xs text-indigo-700 dark:text-indigo-400">
            🔔 Notifications arrive even when AquaGuide is closed (PWA installed).
          </p>
        </div>
      )}
    </motion.div>
  );
}
