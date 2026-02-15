import { motion } from 'framer-motion';
import { Sun, Moon, Sunrise, Sunset } from 'lucide-react';
import { ActivityProfile } from '../../types/species';

interface Props {
  activity: ActivityProfile;
}

export const ActivityPatternTimeline = ({ activity }: Props) => {
  const { level, peakTimes, nocturnal } = activity;
  
  const timeSlots = [
    { id: 'morning', label: 'Morning', icon: Sunrise, color: 'from-amber-400 to-orange-400' },
    { id: 'afternoon', label: 'Afternoon', icon: Sun, color: 'from-yellow-400 to-amber-400' },
    { id: 'evening', label: 'Evening', icon: Sunset, color: 'from-orange-400 to-rose-400' },
    { id: 'night', label: 'Night', icon: Moon, color: 'from-indigo-500 to-purple-500' }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950/20 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase flex items-center gap-2">
          {nocturnal ? <Moon className="w-4 h-4 text-indigo-600" /> : <Sun className="w-4 h-4 text-amber-600" />}
          Activity Pattern
        </h4>
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
          level === 'high' ? 'bg-rose-100 text-rose-700 border border-rose-200' :
          level === 'moderate' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
          'bg-emerald-100 text-emerald-700 border border-emerald-200'
        }`}>
          {level} Activity
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {timeSlots.map(({ id, label, icon: Icon, color }) => {
          const isActive = peakTimes.includes(id as any);
          
          return (
            <motion.div
              key={id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: timeSlots.findIndex(t => t.id === id) * 0.1 }}
              className={`relative rounded-lg p-3 text-center transition-all ${
                isActive 
                  ? `bg-gradient-to-br ${color} text-white shadow-lg` 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600'
              }`}
            >
              <Icon className={`w-6 h-6 mx-auto mb-1 ${
                isActive ? 'drop-shadow-md' : ''
              }`} />
              <div className="text-[10px] font-bold uppercase tracking-wide">{label}</div>
              {isActive && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-current"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="text-xs text-slate-600 dark:text-slate-400 text-center">
        {nocturnal ? (
          <span>🌙 <strong>Nocturnal:</strong> Most active during nighttime hours</span>
        ) : (
          <span>☀️ <strong>Diurnal:</strong> Most active during daylight hours</span>
        )}
      </div>
    </div>
  );
};
