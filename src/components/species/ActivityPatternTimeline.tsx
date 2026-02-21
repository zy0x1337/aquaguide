import { motion } from 'framer-motion';
import { Sun, Moon, Sunrise, Sunset, Activity } from 'lucide-react';
import { ActivityProfile } from '../../types/species';

interface Props {
  activity: ActivityProfile;
}

export const ActivityPatternTimeline = ({ activity }: Props) => {
  const { level, peakTimes, nocturnal } = activity;
  
  const timeSlots = [
    { id: 'morning', label: 'Morning', icon: Sunrise },
    { id: 'afternoon', label: 'Day', icon: Sun },
    { id: 'evening', label: 'Evening', icon: Sunset },
    { id: 'night', label: 'Night', icon: Moon }
  ];

  const activityLevelConfig = {
    high: { label: 'High' },
    moderate: { label: 'Moderate' },
    low: { label: 'Low' }
  };

  const levelConfig = activityLevelConfig[level] || activityLevelConfig.moderate;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 md:p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 md:mb-5 pb-4 border-b border-slate-200 dark:border-slate-700">
        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <Activity className="w-4 h-4" />
          Activity Pattern
        </h4>
        <span className="px-3 py-1.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
          {levelConfig.label}
        </span>
      </div>

      {/* Timeline Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3 mb-4 md:mb-5">
        {timeSlots.map(({ id, label, icon: Icon }, index) => {
          const isActive = peakTimes.includes(id as any);
          
          return (
            <motion.div
              key={id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              className={`relative rounded-lg p-3 md:p-4 text-center transition-all border ${
                isActive 
                  ? 'bg-slate-900 dark:bg-slate-200 text-white dark:text-slate-900 border-slate-900 dark:border-slate-200' 
                  : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              {/* Icon */}
              <Icon className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-1.5 md:mb-2" />
              
              {/* Label */}
              <div className="text-[9px] md:text-[10px] font-semibold uppercase tracking-wide">
                {label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="text-xs md:text-sm text-center font-medium rounded-lg p-3 md:p-4 border bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-center gap-2">
          {nocturnal ? (
            <>
              <Moon className="w-4 h-4" />
              <span><strong className="font-semibold">Nocturnal:</strong> Most active at night</span>
            </>
          ) : (
            <>
              <Sun className="w-4 h-4" />
              <span><strong className="font-semibold">Diurnal:</strong> Most active during daylight</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
