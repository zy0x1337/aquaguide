import { motion } from 'framer-motion';

interface ParameterScaleProps {
  label: string;
  unit: string;
  min: number;
  max: number;
  valueMin: number;
  valueMax: number;
  ideal?: number;
  color: 'rose' | 'cyan' | 'indigo' | 'purple' | 'emerald' | 'amber';
}

const colorConfig = {
  rose: {
    gradient: 'from-sky-400 via-rose-400 to-rose-600',
    text: 'text-rose-700 dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    border: 'border-rose-200 dark:border-rose-800',
    ideal: 'bg-rose-500'
  },
  cyan: {
    gradient: 'from-rose-400 via-amber-300 to-sky-400',
    text: 'text-cyan-700 dark:text-cyan-400',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    border: 'border-cyan-200 dark:border-cyan-800',
    ideal: 'bg-cyan-500'
  },
  indigo: {
    gradient: 'from-blue-400 to-indigo-500',
    text: 'text-indigo-700 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    border: 'border-indigo-200 dark:border-indigo-800',
    ideal: 'bg-indigo-500'
  },
  purple: {
    gradient: 'from-purple-400 to-pink-500',
    text: 'text-purple-700 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    border: 'border-purple-200 dark:border-purple-800',
    ideal: 'bg-purple-500'
  },
  emerald: {
    gradient: 'from-emerald-400 to-teal-500',
    text: 'text-emerald-700 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-200 dark:border-emerald-800',
    ideal: 'bg-emerald-500'
  },
  amber: {
    gradient: 'from-amber-400 to-orange-500',
    text: 'text-amber-700 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-200 dark:border-amber-800',
    ideal: 'bg-amber-500'
  }
};

export const ParameterScale = ({ 
  label, 
  unit, 
  min, 
  max, 
  valueMin, 
  valueMax, 
  ideal,
  color 
}: ParameterScaleProps) => {
  const colors = colorConfig[color];
  const range = max - min;
  const startPercent = ((valueMin - min) / range) * 100;
  const widthPercent = ((valueMax - valueMin) / range) * 100;
  const idealPercent = ideal ? ((ideal - min) / range) * 100 : null;

  return (
    <div>
      {/* Label and Range */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm md:text-base font-bold text-slate-700 dark:text-slate-300">{label}</span>
        <span className={`text-xs md:text-sm font-black px-3 py-1.5 rounded-full border-2 ${colors.bg} ${colors.text} ${colors.border}`}>
          {valueMin}{unit} - {valueMax}{unit}
        </span>
      </div>

      {/* Scale Bar */}
      <div className="relative w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 md:h-4 overflow-hidden">
        {/* Acceptable Range */}
        <motion.div
          initial={{ width: 0, marginLeft: 0 }}
          animate={{ 
            width: `${widthPercent}%`, 
            marginLeft: `${startPercent}%` 
          }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={`absolute h-full rounded-full bg-gradient-to-r ${colors.gradient} shadow-lg`}
        />

        {/* Ideal Value Marker */}
        {idealPercent !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="absolute top-1/2 -translate-y-1/2 z-10"
            style={{ left: `${idealPercent}%` }}
          >
            <div className={`w-1 h-6 md:h-7 ${colors.ideal} rounded-full shadow-xl border-2 border-white`} />
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className={`text-[9px] md:text-[10px] font-black px-2 py-1 rounded-md ${colors.bg} ${colors.text} border ${colors.border} shadow-lg`}>
                Ideal: {ideal}{unit}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Min/Max Labels */}
      <div className="flex justify-between text-[10px] md:text-xs text-slate-400 dark:text-slate-500 mt-2 font-semibold">
        <span>{min}{unit}</span>
        <span>{((min + max) / 2).toFixed(1)}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
};
