import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Info, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParameterAlert } from '../../lib/supabase/alerts';

interface AlertsPanelProps {
  alerts: ParameterAlert[];
}

const AlertsPanel = ({ alerts }: AlertsPanelProps) => {
  // Sort by level: critical > warning > info
  const sortedAlerts = [...alerts].sort((a, b) => {
    const levelOrder = { critical: 0, warning: 1, info: 2 };
    return levelOrder[a.level] - levelOrder[b.level];
  });

  if (alerts.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-12 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <Info className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">All Clear!</h3>
        <p className="text-slate-600">No parameter issues detected. Your tanks are looking healthy!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">Parameter Alerts</h2>
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
      border: 'border-red-200',
      bg: 'bg-red-50',
      icon: 'text-red-600',
      iconBg: 'bg-red-100',
      badge: 'bg-red-600',
    },
    warning: {
      border: 'border-amber-200',
      bg: 'bg-amber-50',
      icon: 'text-amber-600',
      iconBg: 'bg-amber-100',
      badge: 'bg-amber-600',
    },
    info: {
      border: 'border-blue-200',
      bg: 'bg-blue-50',
      icon: 'text-blue-600',
      iconBg: 'bg-blue-100',
      badge: 'bg-blue-600',
    },
  };

  const style = levelStyles[alert.level];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className={`border-2 ${style.border} ${style.bg} rounded-xl p-4`}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 ${style.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
          {alert.level === 'info' ? (
            <Info className={`w-5 h-5 ${style.icon}`} />
          ) : (
            <AlertTriangle className={`w-5 h-5 ${style.icon}`} />
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-bold text-slate-900">{alert.title}</h3>
              <Link
                to={`/my-tanks/${alert.tankId}`}
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1 mt-1"
              >
                {alert.tankName}
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
            <span className={`${style.badge} text-white px-2 py-0.5 rounded text-xs font-bold uppercase`}>
              {alert.parameter}
            </span>
          </div>

          <p className="text-sm text-slate-700 mb-2">{alert.description}</p>

          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-600">
              <strong>Current:</strong> {alert.currentValue}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
            >
              {isExpanded ? (
                <>
                  Hide Actions
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  View Actions
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Actions */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 mb-2">💡 Recommendation:</h4>
              <p className="text-sm text-slate-700 mb-3">{alert.recommendation}</p>

              <h4 className="text-sm font-bold text-slate-900 mb-2">📋 Action Steps:</h4>
              <ol className="space-y-1.5 pl-4">
                {alert.actions.map((action, i) => (
                  <li key={i} className="text-sm text-slate-700 list-decimal">
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
    <div className={`${colors[level]} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5`}>
      <AlertTriangle className="w-3 h-3" />
      {count}
    </div>
  );
};

export default AlertsPanel;
