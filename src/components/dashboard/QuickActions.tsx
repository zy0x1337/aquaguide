import { Plus, Droplets, Wrench, Hammer, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuickActionsProps {
  onAddTank: () => void;
  onPlanTank: () => void;
  onAddReading: () => void;
  onLogMaintenance: () => void;
}

const QuickActions = ({ onAddTank, onPlanTank, onAddReading, onLogMaintenance }: QuickActionsProps) => {
  const actions = [
    {
      label:    'Add Tank',
      sub:      'Create a new aquarium',
      icon:     Plus,
      iconBg:   'bg-indigo-100 dark:bg-indigo-900/30',
      iconColor:'text-indigo-600 dark:text-indigo-400',
      glow:     'hover:shadow-indigo-100 dark:hover:shadow-indigo-900/20',
      onClick:  onAddTank,
    },
    {
      label:    'Log Parameters',
      sub:      'Record water readings',
      icon:     Droplets,
      iconBg:   'bg-cyan-100 dark:bg-cyan-900/30',
      iconColor:'text-cyan-600 dark:text-cyan-400',
      glow:     'hover:shadow-cyan-100 dark:hover:shadow-cyan-900/20',
      onClick:  onAddReading,
    },
    {
      label:    'Log Maintenance',
      sub:      'Water change, filter, etc.',
      icon:     Wrench,
      iconBg:   'bg-amber-100 dark:bg-amber-900/30',
      iconColor:'text-amber-600 dark:text-amber-400',
      glow:     'hover:shadow-amber-100 dark:hover:shadow-amber-900/20',
      onClick:  onLogMaintenance,
    },
    {
      label:    'Tank Builder',
      sub:      'Plan a new setup',
      icon:     Hammer,
      iconBg:   'bg-emerald-100 dark:bg-emerald-900/30',
      iconColor:'text-emerald-600 dark:text-emerald-400',
      glow:     'hover:shadow-emerald-100 dark:hover:shadow-emerald-900/20',
      onClick:  onPlanTank,
    },
  ];

  return (
    <div>
      <h2 className="text-base font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
        <ChevronRight className="w-4 h-4 text-slate-400" />
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {actions.map((action, i) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              onClick={action.onClick}
              className={`group flex flex-col items-start gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 rounded-xl p-4 text-left transition-all hover:shadow-md ${action.glow}`}
            >
              <div className={`p-2.5 rounded-xl ${action.iconBg} transition-transform group-hover:scale-110`}>
                <Icon className={`w-5 h-5 ${action.iconColor}`} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-black text-slate-900 dark:text-white">{action.label}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{action.sub}</p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
