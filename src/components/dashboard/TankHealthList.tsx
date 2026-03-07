import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Clock, ChevronRight, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import { TankHealthScore } from '../../lib/supabase/dashboard';

interface TankHealthListProps { healthScores: TankHealthScore[]; }

const scoreLabel = (s: number) => s >= 80 ? 'Excellent' : s >= 60 ? 'Good' : s >= 40 ? 'Fair' : 'Critical';
const scoreColors = (s: number) => ({
  text:       s >= 80 ? 'text-emerald-600 dark:text-emerald-400' : s >= 60 ? 'text-amber-600 dark:text-amber-400' : 'text-rose-600 dark:text-rose-400',
  bar:        s >= 80 ? 'bg-emerald-500'  : s >= 60 ? 'bg-amber-500'  : 'bg-rose-500',
  pill:       s >= 80 ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' : s >= 60 ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' : 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300',
  border:     s >= 80 ? 'border-l-emerald-400' : s >= 60 ? 'border-l-amber-400' : 'border-l-rose-400',
});

const TankHealthList = ({ healthScores }: TankHealthListProps) => {
  if (healthScores.length === 0) return (
    <div className="bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-10 text-center">
      <Droplets className="w-8 h-8 text-slate-300 dark:text-slate-700 mx-auto mb-2" />
      <p className="text-slate-500 dark:text-slate-400 text-sm">No tanks to show. Add your first tank to see health monitoring.</p>
    </div>
  );

  const sorted = [...healthScores].sort((a, b) => a.score - b.score);

  return (
    <div className="space-y-3">
      {sorted.map((health, i) => (
        <TankHealthCard key={health.tankId} health={health} delay={i * 0.06} />
      ))}
    </div>
  );
};

const TankHealthCard = ({ health, delay }: { health: TankHealthScore; delay: number }) => {
  const c = scoreColors(health.score);
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.3 }}>
      <Link
        to={`/my-tanks/${health.tankId}`}
        className={`block bg-white dark:bg-slate-900 border border-l-4 ${c.border} border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:shadow-md transition-all group`}
      >
        <div className="flex items-start gap-4">
          {/* Score circle */}
          <div className="flex-shrink-0 text-center pt-0.5">
            <div className={`text-2xl font-black leading-none ${c.text}`}>{health.score}</div>
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wide mt-0.5">/ 100</div>
          </div>

          <div className="flex-1 min-w-0">
            {/* Name + label */}
            <div className="flex items-center gap-2 mb-1.5">
              <h3 className="font-black text-slate-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                {health.tankName}
              </h3>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${c.pill}`}>{scoreLabel(health.score)}</span>
            </div>

            {/* Health bar */}
            <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${health.score}%` }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: delay + 0.1 }}
                className={`h-full rounded-full ${c.bar}`}
              />
            </div>

            {/* Issues or OK */}
            {health.issues.length > 0 ? (
              <div className="space-y-0.5">
                {health.issues.slice(0, 2).map((issue, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-400">
                    <AlertTriangle className="w-3 h-3 flex-shrink-0" />{issue}
                  </div>
                ))}
                {health.issues.length > 2 && (
                  <p className="text-[10px] text-slate-400">+{health.issues.length - 2} more issue{health.issues.length - 2 > 1 ? 's' : ''}</p>
                )}
              </div>
            ) : (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />All parameters within range
              </p>
            )}

            {/* Water change */}
            {health.daysUntilNextWaterChange !== undefined && (
              <div className={`flex items-center gap-1 mt-1.5 text-[10px] font-medium ${
                health.daysUntilNextWaterChange <= 0 ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400'
              }`}>
                <Clock className="w-3 h-3" />
                {health.daysUntilNextWaterChange > 0
                  ? `Next water change in ${health.daysUntilNextWaterChange}d`
                  : 'Water change recommended'
                }
              </div>
            )}
          </div>

          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors flex-shrink-0 mt-1" />
        </div>
      </Link>
    </motion.div>
  );
};

export default TankHealthList;
