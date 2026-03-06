import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Info, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParameterAlert } from '../../lib/supabase/alerts';

interface AlertsPanelProps {
  alerts: ParameterAlert[];
}

const AlertsPanel = ({ alerts }: AlertsPanelProps) => {
  const sortedAlerts = [...alerts].sort((a, b) => {
    const levelOrder = { critical: 0, warning: 1, info: 2 };
    return levelOrder[a.level] - levelOrder[b.level];
  });

  if (alerts.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-12 text-center">
        <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
          <Info className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">All Clear</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">No parameter issues detected</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Parameter Alerts</h2>
        <div className="flex items-center gap-2">
          <AlertBadge count={alerts.filter(a => a.level === 'critical').length} level="critical" />
          <AlertBadge count={alerts.filter(a => a.level === 'warning').length} level="warning" />
        </div>
      </div>

      <div className="space-y-3">
        {sortedAlerts.map((alert, index) => (
          <AlertCard key={alert.id} alert={alert} delay={index * 0.05} />
        ))}
      </div>
    </div>
  );
};

const AlertCard = ({ alert, delay }: { alert: ParameterAlert; delay: number }) => {
  const [isExpanded, setIsExpanded] = useState(alert.level === 'critical');

  const levelStyles = {
    critical: {
      border: 'border-red-200 dark:border-red-900',
      bg: 'bg-red-50 dark:bg-red-950/20',
      icon: 'text-red-600 dark:text-red-400',
      iconBg: 'bg-red-100 dark:bg-red-900/40',
      badge: 'bg-red-600',
      text: 'text-slate-900 dark:text-white',
      secondary: 'text-slate-700 dark:text-slate-300',
    },
    warning: {
      border: 'border-amber-200 dark:border-amber-900',
      bg: 'bg-amber-50 dark:bg-amber-950/20',
      icon: 'text-amber-600 dark:text-amber-400',
      iconBg: 'bg-amber-100 dark:bg-amber-900/40',
      badge: 'bg-amber-600',
      text: 'text-slate-900 dark:text-white',
      secondary: 'text-slate-700 dark:text-slate-300',
    },
    info: {
      border: 'border-blue-200 dark:border-blue-900',
      bg: 'bg-blue-50 dark:bg-blue-950/20',
      icon: 'text-blue-600 dark:text-blue-400',
      iconBg: 'bg-blue-100 dark:bg-blue-900/40',
      badge: 'bg-blue-600',
      text: 'text-slate-900 dark:text-white',
      secondary: 'text-slate-700 dark:text-slate-300',
    },
  };

  const style = levelStyles[alert.level];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className={`border ${style.border} ${style.bg} rounded-lg p-4`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-9 h-9 ${style.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
          {alert.level === 'info' ? (
            <Info className={`w-4.5 h-4.5 ${style.icon}`} />
          ) : (
            <AlertTriangle className={`w-4.5 h-4.5 ${style.icon}`} />
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className={`font-bold text-sm ${style.text}`}>{alert.title}</h3>
              <Link
                to={`/my-tanks/${alert.tankId}`}
                className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium flex items-center gap-1 mt-1"
              >
                {alert.tankName}
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
            <span className={`${style.badge} text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide`}>
              {alert.parameter}
            </span>
          </div>

          <p className={`text-sm ${style.secondary} mb-2`}>{alert.description}</p>

          <div className="flex items-center justify-between">
            <p className={`text-xs ${style.secondary}`}>
              <strong>Current:</strong> {alert.currentValue}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              {isExpanded ? (
                <>
                  Hide
                  <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  Details
                  <ChevronDown className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
              <h4 className={`text-xs font-bold ${style.text} mb-1.5`}>💡 Recommendation</h4>
              <p className={`text-xs ${style.secondary} mb-2.5`}>{alert.recommendation}</p>

              <h4 className={`text-xs font-bold ${style.text} mb-1.5`}>📋 Action Steps</h4>
              <ol className="space-y-1 pl-4">
                {alert.actions.map((action, i) => (
                  <li key={i} className={`text-xs ${style.secondary} list-decimal`}>
                    {action}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AlertBadge = ({ count, level }: { count: number; level: 'critical' | 'warning' }) => {
  if (count === 0) return null;

  const colors = {
    critical: 'bg-red-600',
    warning: 'bg-amber-600',
  };

  return (
    <div className={`${colors[level]} text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1`}>
      <AlertTriangle className="w-3 h-3" />
      {count}
    </div>
  );
};

export default AlertsPanel;
