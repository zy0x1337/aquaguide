import { useState, useEffect, useRef, useCallback } from 'react';
import { Bell, Check, X, AlertCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  getReminders,
  completeReminder,
  requestNotificationPermission,
  isNotificationSupported,
  type Reminder,
} from '../../lib/notifications';

const TYPE_CFG = {
  water_change:    { emoji: '💧', label: 'Water Change',      urgentBg: 'bg-cyan-50    dark:bg-cyan-950/30',    urgentBorder: 'border-cyan-200    dark:border-cyan-800'    },
  parameter_check: { emoji: '🧪', label: 'Check Parameters',  urgentBg: 'bg-indigo-50  dark:bg-indigo-950/30',  urgentBorder: 'border-indigo-200  dark:border-indigo-800'  },
  filter_clean:    { emoji: '🔧', label: 'Clean Filter',       urgentBg: 'bg-amber-50   dark:bg-amber-950/30',   urgentBorder: 'border-amber-200   dark:border-amber-800'   },
} as const;

const timeLabel = (iso: string): { text: string; overdue: boolean; soon: boolean } => {
  const diff = new Date(iso).getTime() - Date.now();
  const overdue = diff < 0;
  const soon    = !overdue && diff < 3_600_000; // within 1h
  let text: string;
  if (overdue) {
    const d = Math.ceil(Math.abs(diff) / 86_400_000);
    text = d <= 1 ? 'Overdue today' : `${d}d overdue`;
  } else {
    const mins = Math.round(diff / 60_000);
    if (mins < 60)         text = `in ${mins} min`;
    else if (mins < 1440)  text = `in ${Math.round(mins / 60)} h`;
    else                   text = `in ${Math.round(mins / 1440)} d`;
  }
  return { text, overdue, soon };
};

const BADGE_THRESHOLD = 3_600_000 * 24; // treat reminders due within 24h as "urgent" for badge

export default function NotificationBell({ compact = false }: { compact?: boolean }) {
  const [open,       setOpen]       = useState(false);
  const [reminders,  setReminders]  = useState<Reminder[]>([]);
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const panelRef = useRef<HTMLDivElement>(null);

  const reload = useCallback(() => {
    setReminders(getReminders());
    if ('Notification' in window) setPermission(Notification.permission);
  }, []);

  useEffect(() => {
    reload();
    const id = setInterval(reload, 60_000);
    // Sync when another tab modifies localStorage
    const onStorage = (e: StorageEvent) => { if (e.key === 'aquaguide_reminders_v2') reload(); };
    window.addEventListener('storage', onStorage);
    return () => { clearInterval(id); window.removeEventListener('storage', onStorage); };
  }, [reload]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const active   = reminders.filter(r => r.enabled);
  const now      = Date.now();
  const badgeNum = active.filter(r => new Date(r.nextDate).getTime() <= now + BADGE_THRESHOLD).length;

  const handleDone = (r: Reminder) => {
    completeReminder(r.tankId, r.type);
    reload();
  };

  const handleEnableNotifs = async () => {
    const p = await requestNotificationPermission();
    setPermission(p);
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div ref={panelRef} className="relative">
      {/* Bell button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Reminders"
        className={`relative ${
          compact ? 'p-1.5' : 'p-2'
        } rounded-xl transition-all ${
          open
            ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400'
            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        <Bell className={compact ? 'w-4 h-4' : 'w-5 h-5'} strokeWidth={2.5} />
        <AnimatePresence>
          {badgeNum > 0 && (
            <motion.span
              key="badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-0.5 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center shadow-sm"
            >
              {badgeNum > 9 ? '9+' : badgeNum}
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 z-[300] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-indigo-500" strokeWidth={2.5} />
                <span className="font-black text-sm text-gray-900 dark:text-white">Reminders</span>
                {active.length > 0 && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
                    {active.length} active
                  </span>
                )}
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Permission banner */}
            {isNotificationSupported() && permission !== 'granted' && (
              <div className="mx-3 mt-3 flex items-center gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" strokeWidth={2.5} />
                <p className="text-xs text-amber-800 dark:text-amber-300 flex-1 leading-snug">
                  {permission === 'denied'
                    ? 'Notifications blocked in browser settings.'
                    : 'Enable notifications to receive reminders.'}
                </p>
                {permission !== 'denied' && (
                  <button
                    onClick={handleEnableNotifs}
                    className="flex-shrink-0 text-xs font-bold px-2.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
                  >
                    Enable
                  </button>
                )}
              </div>
            )}

            {/* List */}
            <div className="max-h-64 overflow-y-auto py-2 px-2 space-y-1">
              {active.length === 0 ? (
                <div className="py-8 text-center">
                  <Bell className="w-8 h-8 text-gray-300 dark:text-gray-700 mx-auto mb-2" strokeWidth={1.5} />
                  <p className="text-sm font-bold text-gray-500 dark:text-gray-400">No active reminders</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Enable reminders on a tank's detail page</p>
                </div>
              ) : (
                [...active]
                  .sort((a, b) => new Date(a.nextDate).getTime() - new Date(b.nextDate).getTime())
                  .map(r => {
                    const cfg = TYPE_CFG[r.type] ?? TYPE_CFG.water_change;
                    const { text: tl, overdue, soon } = timeLabel(r.nextDate);
                    return (
                      <div
                        key={r.id}
                        className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl border transition-all ${
                          overdue
                            ? 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900'
                            : soon
                            ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900'
                            : `${cfg.urgentBg} ${cfg.urgentBorder}`
                        }`}
                      >
                        <span className="text-base leading-none">{cfg.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-black truncate ${
                            overdue ? 'text-red-700 dark:text-red-400' : 'text-gray-900 dark:text-white'
                          }`}>{r.tankName}</p>
                          <p className={`text-[10px] font-semibold ${
                            overdue ? 'text-red-500 dark:text-red-400' : soon ? 'text-amber-600 dark:text-amber-400' : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {cfg.label} · {tl}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDone(r)}
                          title="Mark as done"
                          className="flex-shrink-0 p-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-emerald-400 dark:hover:border-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all group"
                        >
                          <Check className="w-3 h-3 text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" strokeWidth={3} />
                        </button>
                      </div>
                    );
                  })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-800/30">
              <Link
                to="/my-tanks"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <span>Manage in My Tanks</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
