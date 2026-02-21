import { motion } from 'framer-motion';
import { Sun, Moon, Sunrise, Sunset, Activity } from 'lucide-react';
import { ActivityProfile } from '../../types/species';

interface Props {
  activity: ActivityProfile;
}

export const ActivityPatternTimeline = ({ activity }: Props) => {
  const { level, peakTimes, nocturnal } = activity;
  
  const timeSlots = [
    { id: 'morning', label: 'Morning', icon: Sunrise, color: 'from-amber-400 to-orange-400', bgActive: 'bg-gradient-to-br from-amber-400 to-orange-400', bgInactive: 'bg-amber-50 dark:bg-amber-950/20', border: 'border-amber-200 dark:border-amber-800' },
    { id: 'afternoon', label: 'Day', icon: Sun, color: 'from-yellow-400 to-amber-400', bgActive: 'bg-gradient-to-br from-yellow-400 to-amber-400', bgInactive: 'bg-yellow-50 dark:bg-yellow-950/20', border: 'border-yellow-200 dark:border-yellow-800' },
    { id: 'evening', label: 'Evening', icon: Sunset, color: 'from-orange-400 to-rose-400', bgActive: 'bg-gradient-to-br from-orange-400 to-rose-400', bgInactive: 'bg-orange-50 dark:bg-orange-950/20', border: 'border-orange-200 dark:border-orange-800' },
    { id: 'night', label: 'Night', icon: Moon, color: 'from-indigo-500 to-purple-500', bgActive: 'bg-gradient-to-br from-indigo-500 to-purple-500', bgInactive: 'bg-indigo-50 dark:bg-indigo-950/20', border: 'border-indigo-200 dark:border-indigo-800' }
  ];

  const activityLevelConfig = {
    high: { bg: 'bg-rose-50 dark:bg-rose-950/30', text: 'text-rose-700 dark:text-rose-400', border: 'border-rose-200 dark:border-rose-800', label: 'High' },
    moderate: { bg: 'bg-amber-50 dark:bg-amber-950/30', text: 'text-amber-700 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-800', label: 'Moderate' },
    low: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-700 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800', label: 'Low' }
  };

  const levelConfig = activityLevelConfig[level] || activityLevelConfig.moderate;

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-900/50 dark:to-blue-950/20 rounded-xl p-4 md:p-6 border-2 border-slate-200 dark:border-slate-700 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 md:mb-5 pb-4 border-b-2 border-slate-200 dark:border-slate-700">
        <h4 className="text-xs md:text-sm font-black text-slate-900 dark:text-white uppercase flex items-center gap-2 tracking-wider">
          <Activity className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          Activity Pattern
        </h4>
        <span className={`px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-black uppercase tracking-wide border-2 ${levelConfig.bg} ${levelConfig.text} ${levelConfig.border} shadow-sm`}>
          {levelConfig.label}
        </span>
      </div>

      {/* Timeline Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3 mb-4 md:mb-5">
        {timeSlots.map(({ id, label, icon: Icon, bgActive, bgInactive, border }, index) => {
          const isActive = peakTimes.includes(id as any);
          
          return (
            <motion.div
              key={id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              className={`relative rounded-xl p-3 md:p-4 text-center transition-all border-2 ${
                isActive 
                  ? `${bgActive} text-white shadow-xl scale-105` 
                  : `${bgInactive} ${border} text-slate-600 dark:text-slate-400`
              }`}
            >
              {/* Icon */}
              <Icon className={`w-5 h-5 md:w-6 md:h-6 mx-auto mb-1.5 md:mb-2 ${
                isActive ? 'drop-shadow-lg' : ''
              }`} />
              
              {/* Label */}
              <div className={`text-[9px] md:text-[10px] font-black uppercase tracking-wider ${
                isActive ? 'text-white' : 'text-slate-700 dark:text-slate-400'
              }`}>
                {label}
              </div>
              
              {/* Active Indicator Pulse */}
              {isActive && (
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-lg"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className={`text-xs md:text-sm text-center font-semibold rounded-lg p-3 md:p-4 border-2 ${
        nocturnal 
          ? 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800' 
          : 'bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800'
      }`}>
        <div className="flex items-center justify-center gap-2">
          {nocturnal ? (
            <>
              <Moon className="w-4 h-4" />
              <span><strong className="font-black">Nocturnal:</strong> Most active at night</span>
            </>
          ) : (
            <>
              <Sun className="w-4 h-4" />
              <span><strong className="font-black">Diurnal:</strong> Most active during daylight</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
