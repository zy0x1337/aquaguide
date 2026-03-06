import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Bell, BellOff, Clock, Trash2, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  getTankReminders,
  createDefaultReminders,
  toggleReminder,
  updateReminder,
  deleteReminder,
  requestNotificationPermission,
  isNotificationSupported,
  completeReminder,
  type Reminder,
} from '../../lib/notifications';

// ── Constants ─────────────────────────────────────────────────────────────

const ITEM_H = 44;

const _base = new Date(); _base.setHours(0, 0, 0, 0);
const DATE_OPTIONS: Date[] = Array.from({ length: 90 }, (_, i) => {
  const d = new Date(_base);
  d.setDate(d.getDate() + i);
  return d;
});

const HOURS   = Array.from({ length: 24 }, (_, i) => i);
const MINUTES = Array.from({ length: 12 }, (_, i) => i * 5);

const FREQUENCIES: { value: Reminder['frequency']; label: string }[] = [
  { value: 'daily',    label: 'Daily'     },
  { value: 'weekly',   label: 'Weekly'    },
  { value: 'biweekly', label: 'Every 2 w' },
  { value: 'monthly',  label: 'Monthly'   },
];

const TYPE_CFG: Record<Reminder['type'], { emoji: string; color: string; bg: string; border: string }> = {
  water_change:    { emoji: '💧', color: 'text-cyan-700 dark:text-cyan-300',   bg: 'bg-cyan-50 dark:bg-cyan-950/40',   border: 'border-cyan-200 dark:border-cyan-800'   },
  parameter_check: { emoji: '🧪', color: 'text-violet-700 dark:text-violet-300', bg: 'bg-violet-50 dark:bg-violet-950/40', border: 'border-violet-200 dark:border-violet-800' },
  filter_clean:    { emoji: '🔧', color: 'text-amber-700 dark:text-amber-300',  bg: 'bg-amber-50 dark:bg-amber-950/40',  border: 'border-amber-200 dark:border-amber-800'  },
};

// ── Helpers ───────────────────────────────────────────────────────────────

const pad = (n: number) => String(n).padStart(2, '0');

const dateLabelShort = (d: Date): string => {
  const diff = Math.round((d.getTime() - _base.getTime()) / 86_400_000);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Tomorrow';
  return d.toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric', month: 'short' });
};

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric', month: 'short' }) +
  ' · ' +
  new Date(iso).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

const timeAgo = (iso: string) => {
  const diff = new Date(iso).getTime() - Date.now();
  if (diff < 0) return '⚠️ overdue';
  const d = Math.floor(diff / 86_400_000);
  const h = Math.floor((diff % 86_400_000) / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  if (d > 0) return `in ${d}d ${h}h`;
  if (h > 0) return `in ${h}h ${m}m`;
  return `in ${m}m`;
};

// ── Drum Wheel ─────────────────────────────────────────────────────────────

function Wheel<T>({
  items,
  selectedIndex,
  onSelect,
  label,
  className = '',
}: {
  items: T[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  label: (item: T) => string;
  className?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef  = useRef<ReturnType<typeof setTimeout>>();
  const ignoreRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = selectedIndex * ITEM_H;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prevIdx = useRef(selectedIndex);
  useEffect(() => {
    if (prevIdx.current === selectedIndex) return;
    prevIdx.current = selectedIndex;
    const el = scrollRef.current;
    if (!el) return;
    ignoreRef.current = true;
    el.scrollTo({ top: selectedIndex * ITEM_H, behavior: 'smooth' });
    setTimeout(() => { ignoreRef.current = false; }, 400);
  }, [selectedIndex]);

  const handleScroll = useCallback(() => {
    if (ignoreRef.current) return;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const el = scrollRef.current;
      if (!el) return;
      const idx = Math.round(el.scrollTop / ITEM_H);
      const clamped = Math.min(Math.max(idx, 0), items.length - 1);
      onSelect(clamped);
    }, 120);
  }, [items.length, onSelect]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ height: ITEM_H * 5 }}>
      <div
        className="absolute inset-x-1 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 pointer-events-none"
        style={{ top: ITEM_H * 2, height: ITEM_H, zIndex: 0 }}
      />

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative h-full overflow-y-scroll"
        style={{
          scrollSnapType: 'y mandatory',
          scrollbarWidth: 'none',
          // @ts-expect-error
          msOverflowStyle: 'none',
          zIndex: 1,
        }}
      >
        <div style={{ height: ITEM_H * 2 }} />
        {items.map((item, i) => (
          <div
            key={i}
            style={{ height: ITEM_H, scrollSnapAlign: 'center' }}
            className={`flex items-center justify-center select-none cursor-pointer transition-colors text-sm ${
              i === selectedIndex
                ? 'font-black text-indigo-700 dark:text-indigo-300'
                : 'font-medium text-gray-400 dark:text-gray-500'
            }`}
            onClick={() => {
              scrollRef.current?.scrollTo({ top: i * ITEM_H, behavior: 'smooth' });
              onSelect(i);
            }}
          >
            {label(item)}
          </div>
        ))}
        <div style={{ height: ITEM_H * 2 }} />
      </div>

      <div className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: ITEM_H * 2, zIndex: 2, background: 'linear-gradient(to bottom, var(--wheel-bg, #fff) 30%, transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 pointer-events-none" style={{ height: ITEM_H * 2, zIndex: 2, background: 'linear-gradient(to top, var(--wheel-bg, #fff) 30%, transparent)' }} />
    </div>
  );
}

// ── DateEditor ─────────────────────────────────────────────────────────────

function DateEditor({
  reminder,
  onSave,
  onClose,
}: {
  reminder: Reminder;
  onSave: (nextDate: string, frequency: Reminder['frequency']) => void;
  onClose: () => void;
}) {
  const next = new Date(reminder.nextDate);
  const nextMidnight = new Date(next.getFullYear(), next.getMonth(), next.getDate());

  const initDateIdx = Math.max(0, Math.min(
    Math.round((nextMidnight.getTime() - _base.getTime()) / 86_400_000),
    DATE_OPTIONS.length - 1,
  ));
  const initHourIdx   = next.getHours();
  const initMinIdx    = MINUTES.reduce((best, m, i) =>
    Math.abs(m - next.getMinutes()) < Math.abs(MINUTES[best] - next.getMinutes()) ? i : best, 0);

  const [dateIdx,   setDateIdx]   = useState(initDateIdx);
  const [hourIdx,   setHourIdx]   = useState(initHourIdx);
  const [minIdx,    setMinIdx]    = useState(initMinIdx);
  const [frequency, setFrequency] = useState<Reminder['frequency']>(reminder.frequency);

  const preview = useMemo(() => {
    const d = new Date(DATE_OPTIONS[dateIdx]);
    d.setHours(HOURS[hourIdx], MINUTES[minIdx], 0, 0);
    return d;
  }, [dateIdx, hourIdx, minIdx]);

  const chipBase   = 'px-3 py-1.5 rounded-lg text-xs font-bold transition-all';
  const chipActive = 'bg-indigo-600 text-white shadow-sm';
  const chipIdle   = 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-indigo-400';

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.22 }}
      className="overflow-hidden"
    >
      <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4 bg-gray-50/80 dark:bg-gray-800/60">

        <div
          className="flex items-stretch rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden"
          style={{ '--wheel-bg': 'var(--tw-bg)' } as React.CSSProperties}
        >
          <div className="flex-[2] [--wheel-bg:theme(colors.white)] dark:[--wheel-bg:theme(colors.gray.800)]">
            <Wheel
              items={DATE_OPTIONS}
              selectedIndex={dateIdx}
              onSelect={setDateIdx}
              label={dateLabelShort}
            />
          </div>

          <div className="w-px bg-gray-100 dark:bg-gray-700 self-stretch" />

          <div className="flex-1 [--wheel-bg:theme(colors.white)] dark:[--wheel-bg:theme(colors.gray.800)]">
            <Wheel
              items={HOURS}
              selectedIndex={hourIdx}
              onSelect={setHourIdx}
              label={h => pad(h)}
            />
          </div>

          <div className="flex items-center justify-center px-1 text-lg font-black text-gray-400 dark:text-gray-500 select-none flex-shrink-0">
            :
          </div>

          <div className="flex-1 [--wheel-bg:theme(colors.white)] dark:[--wheel-bg:theme(colors.gray.800)]">
            <Wheel
              items={MINUTES}
              selectedIndex={minIdx}
              onSelect={setMinIdx}
              label={m => pad(m)}
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Repeat</p>
          <div className="flex flex-wrap gap-1.5">
            {FREQUENCIES.map(f => (
              <button key={f.value} onClick={() => setFrequency(f.value)}
                className={`${chipBase} ${frequency === f.value ? chipActive : chipIdle}`}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
            <Clock className="w-3.5 h-3.5 text-indigo-500" />
            <span className="font-bold text-gray-800 dark:text-gray-200">
              {dateLabelShort(DATE_OPTIONS[dateIdx])}
            </span>
            <span>{pad(HOURS[hourIdx])}:{pad(MINUTES[minIdx])}</span>
            <span className="opacity-60">· {FREQUENCIES.find(f => f.value === frequency)?.label}</span>
          </div>
          <div className="flex gap-2">
            <button onClick={onClose}
              className="px-3 py-1.5 text-xs font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
              Cancel
            </button>
            <button
              onClick={() => onSave(preview.toISOString(), frequency)}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-black rounded-xl transition-all shadow-sm shadow-indigo-500/30"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function ReminderPanel({
  tankId,
  tankName,
  onBadgeChange,
}: {
  tankId: string;
  tankName: string;
  onBadgeChange?: (count: number) => void;
}) {
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
    // Update badge
    const now = Date.now();
    const overdueCount = getTankReminders(tankId).filter(r => r.enabled && new Date(r.nextDate).getTime() < now).length;
    onBadgeChange?.(overdueCount);
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

  const handleComplete = (reminderId: string) => {
    const r = reminders.find(x => x.id === reminderId);
    if (!r) return;
    completeReminder(tankId, r.type);
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
            onClick={async () => { const p = await requestNotificationPermission(); setHasPermission(p === 'granted'); load(); }}
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:shadow-lg transition-all"
          >
            <Bell className="w-4 h-4" /> Enable
          </button>
        )}
      </div>

      {/* Cards */}
      <div className="divide-y divide-gray-100 dark:divide-gray-800">
        {reminders.map((r) => {
          const cfg       = TYPE_CFG[r.type];
          const isEditing = editingId === r.id;
          const overdue   = r.enabled && new Date(r.nextDate).getTime() < Date.now();
          const freqLabel = FREQUENCIES.find(f => f.value === r.frequency)?.label;

          return (
            <div key={r.id}>
              <div className={`flex items-center gap-3 px-5 py-4 transition-colors ${
                overdue
                  ? 'bg-red-50/60 dark:bg-red-950/20'
                  : r.enabled ? '' : 'opacity-60'
              }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 border ${
                  r.enabled ? `${cfg.bg} ${cfg.border}` : 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                }`}>{cfg.emoji}</div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-black text-gray-900 dark:text-white truncate">
                      {r.type === 'water_change' ? 'Water Change' : r.type === 'parameter_check' ? 'Check Parameters' : 'Clean Filter'}
                    </p>
                    {overdue && (
                      <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-black rounded-full uppercase tracking-wide">
                        Overdue
                      </span>
                    )}
                  </div>
                  {r.enabled ? (
                    <button
                      onClick={() => setEditingId(isEditing ? null : r.id)}
                      className={`flex items-center gap-1.5 mt-0.5 text-xs transition-colors ${
                        overdue ? 'text-red-600 dark:text-red-400 font-bold' : 'text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                      }`}
                    >
                      <Clock className="w-3 h-3" />
                      <span>{fmt(r.nextDate)}</span>
                      <span className="opacity-60">({timeAgo(r.nextDate)})</span>
                      <span className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-bold text-gray-500 dark:text-gray-400">{freqLabel}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${isEditing ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{freqLabel} · tap bell to enable</p>
                  )}
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {r.enabled && (
                    <button
                      onClick={() => handleComplete(r.id)}
                      className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all"
                      title="Mark as done"
                    >
                      <Check className="w-4 h-4" strokeWidth={2.5} />
                    </button>
                  )}
                  <button
                    onClick={() => handleToggle(r.id, !r.enabled)}
                    className={`p-2 rounded-xl transition-all ${
                      r.enabled ? `${cfg.bg} ${cfg.color} ${cfg.border} border hover:opacity-80` : 'bg-gray-100 dark:bg-gray-800 text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {r.enabled ? <Bell className="w-4 h-4" strokeWidth={2.5} /> : <BellOff className="w-4 h-4" strokeWidth={2.5} />}
                  </button>
                  <button
                    onClick={() => { deleteReminder(r.id); load(); }}
                    className="p-2 rounded-xl text-gray-300 dark:text-gray-600 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all"
                  >
                    <Trash2 className="w-4 h-4" strokeWidth={2.5} />
                  </button>
                </div>
              </div>

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
