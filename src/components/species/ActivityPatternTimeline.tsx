import { motion } from 'framer-motion';
import { Sun, Moon, Sunrise, Sunset, Activity } from 'lucide-react';
import { ActivityProfile } from '../../types/species';

interface Props {
  activity: ActivityProfile;
}

export const ActivityPatternTimeline = ({ activity }: Props) => {
  const { level, peakTimes, nocturnal } = activity;
  
  const timeSlots = [
    { id: 'morning', label: 'Morning', icon: Sunrise, color: 'text-amber-500' },
    { id: 'afternoon', label: 'Day', icon: Sun, color: 'text-yellow-500' },
    { id: 'evening', label: 'Evening', icon: Sunset, color: 'text-orange-500' },
    { id: 'night', label: 'Night', icon: Moon, color: 'text-indigo-400' }
  ];

  const activityLevelConfig = {
    high: { label: 'High' },
    moderate: { label: 'Moderate' },
    low: { label: 'Low' }
  };

  const levelConfig = activityLevelConfig[level] || activityLevelConfig.moderate;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 md:p-6 border border-slate-200 dark:border-slate-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-500" />
          Activity Pattern
        </h4>
        <span className="px-3 py-1.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          {levelConfig.label}
        </span>
      </div>

      {/* Timeline Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {timeSlots.map(({ id, label, icon: Icon, color }, index) => {
          const isActive = peakTimes.includes(id as any);
          
          return (
            <motion.div
              key={id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              className={`relative rounded-lg p-3 text-center transition-all border ${
                isActive 
                  ? 'bg-slate-900 dark:bg-slate-300 text-white dark:text-slate-900 border-slate-900 dark:border-slate-300' 
                  : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              {/* Icon */}
              <Icon className={`w-5 h-5 mx-auto mb-1.5 ${isActive ? '' : color}`} />
              
              {/* Label */}
              <div className="text-[10px] font-medium uppercase tracking-wide">
                {label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="text-xs text-center font-medium rounded-lg p-3 border bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-center gap-2">
          {nocturnal ? (
            <>
              <Moon className="w-4 h-4 text-indigo-400" />
              <span>Nocturnal: Most active at night</span>
            </>
          ) : (
            <>
              <Sun className="w-4 h-4 text-yellow-500" />
              <span>Diurnal: Most active during daylight</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
