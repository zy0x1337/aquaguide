import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TankHealthScore } from '../../lib/supabase/dashboard';

interface TankHealthListProps {
  healthScores: TankHealthScore[];
}

const TankHealthList = ({ healthScores }: TankHealthListProps) => {
  if (healthScores.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-12 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">No tanks yet. Add your first tank to see health monitoring.</p>
      </div>
    );
  }

  const sortedScores = [...healthScores].sort((a, b) => a.score - b.score);

  return (
    <div className="space-y-3">
      {sortedScores.map((health, index) => (
        <TankHealthCard key={health.tankId} health={health} delay={index * 0.05} />
      ))}
    </div>
  );
};

const TankHealthCard = ({ health, delay }: { health: TankHealthScore; delay: number }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-600 dark:text-emerald-400';
    if (score >= 60) return 'text-amber-600 dark:text-amber-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-900';
    if (score >= 60) return 'bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-900';
    return 'bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-900';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    return <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <Link
        to={`/my-tanks/${health.tankId}`}
        className="block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5 hover:border-slate-300 dark:hover:border-slate-600 transition-colors group"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {health.tankName}
              </h3>
              {getScoreIcon(health.score)}
            </div>

            {health.issues.length > 0 ? (
              <div className="space-y-1 mb-2">
                {health.issues.map((issue, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-amber-700 dark:text-amber-400">
                    <div className="w-1 h-1 rounded-full bg-amber-500 dark:bg-amber-400" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5" />
                All parameters within range
              </p>
            )}

            {health.daysUntilNextWaterChange !== undefined && (
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {health.daysUntilNextWaterChange > 0 ? (
                  <span>Next water change in {health.daysUntilNextWaterChange} days</span>
                ) : (
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">Water change recommended</span>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className={`${getScoreBg(health.score)} border rounded-lg px-5 py-3 text-center min-w-[90px]`}>
              <div className={`text-2xl font-bold ${getScoreColor(health.score)}`}>
                {health.score}
              </div>
              <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-0.5">
                Health
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default TankHealthList;
