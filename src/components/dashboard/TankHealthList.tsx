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
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-12 text-center">
        <p className="text-gray-500 dark:text-gray-400">No tanks yet. Add your first tank to see health monitoring!</p>
      </div>
    );
  }

  // Sort by score (lowest first to highlight issues)
  const sortedScores = [...healthScores].sort((a, b) => a.score - b.score);

  return (
    <div className="space-y-4">
      {sortedScores.map((health, index) => (
        <TankHealthCard key={health.tankId} health={health} delay={index * 0.05} />
      ))}
    </div>
  );
};

const TankHealthCard = ({ health, delay }: { health: TankHealthScore; delay: number }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'from-emerald-500 to-green-500';
    if (score >= 60) return 'from-amber-500 to-orange-500';
    return 'from-red-500 to-rose-500';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800';
    if (score >= 60) return 'bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800';
    return 'bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-800';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    return <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <Link
        to={`/my-tanks/${health.tankId}`}
        className="block bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-all group"
      >
        <div className="flex items-start justify-between gap-4">
          {/* Tank Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {health.tankName}
              </h3>
              {getScoreIcon(health.score)}
            </div>

            {/* Issues */}
            {health.issues.length > 0 ? (
              <div className="space-y-1.5 mb-3">
                {health.issues.map((issue, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-amber-700 dark:text-amber-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                All parameters within acceptable range
              </p>
            )}

            {/* Next Maintenance */}
            {health.daysUntilNextWaterChange !== undefined && (
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                {health.daysUntilNextWaterChange > 0 ? (
                  <span>Next water change in {health.daysUntilNextWaterChange} days</span>
                ) : (
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">Water change recommended</span>
                )}
              </div>
            )}
          </div>

          {/* Health Score */}
          <div className="flex items-center gap-3">
            <div className={`${getScoreBg(health.score)} border-2 rounded-xl px-6 py-4 text-center min-w-[100px]`}>
              <div className={`text-3xl font-bold bg-gradient-to-r ${getScoreColor(health.score)} bg-clip-text text-transparent`}>
                {health.score}
              </div>
              <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mt-1">
                Health Score
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default TankHealthList;
