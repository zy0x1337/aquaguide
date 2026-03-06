import { Fish as FishIcon, Leaf, Droplets, Activity, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { DashboardStats as StatsType } from '../../lib/supabase/dashboard';

interface DashboardStatsProps {
  stats: StatsType;
}

const DashboardStats = ({ stats }: DashboardStatsProps) => {
  const getHealthColor = (score: number) => {
    if (score >= 80) return 'text-emerald-600 dark:text-emerald-400';
    if (score >= 60) return 'text-amber-600 dark:text-amber-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getHealthText = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    return 'Needs Attention';
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Tanks */}
      <StatCard
        icon={<Droplets className="w-5 h-5" />}
        label="Total Tanks"
        value={stats.totalTanks}
        iconColor="text-blue-600 dark:text-blue-400"
        delay={0}
      />

      {/* Total Fish */}
      <StatCard
        icon={<FishIcon className="w-5 h-5" />}
        label="Total Fish"
        value={stats.totalFish}
        iconColor="text-indigo-600 dark:text-indigo-400"
        delay={0.05}
      />

      {/* Total Plants */}
      <StatCard
        icon={<Leaf className="w-5 h-5" />}
        label="Total Plants"
        value={stats.totalPlants}
        iconColor="text-emerald-600 dark:text-emerald-400"
        delay={0.1}
      />

      {/* Average Health */}
      <StatCard
        icon={<Activity className="w-5 h-5" />}
        label="Average Health"
        value={`${Math.round(stats.averageHealth)}%`}
        subtitle={getHealthText(stats.averageHealth)}
        iconColor={getHealthColor(stats.averageHealth)}
        delay={0.15}
      />

      {/* Volume Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-4.5 h-4.5 text-slate-600 dark:text-slate-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Total Volume</h3>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{stats.totalVolumeLiters}L</p>
          </div>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400">
          Avg: {stats.totalTanks > 0 ? Math.round(stats.totalVolumeLiters / stats.totalTanks) : 0}L per tank
        </div>
      </motion.div>

      {/* Tank Type Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.3 }}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 sm:col-span-2 lg:col-span-3"
      >
        <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">Tank Distribution</h3>
        <div className="flex gap-3">
          <TypeBadge
            label="Freshwater"
            count={stats.tanksByType.freshwater}
            color="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-900"
          />
          <TypeBadge
            label="Saltwater"
            count={stats.tanksByType.saltwater}
            color="bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/20 dark:text-cyan-400 dark:border-cyan-900"
          />
          <TypeBadge
            label="Brackish"
            count={stats.tanksByType.brackish}
            color="bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/20 dark:text-teal-400 dark:border-teal-900"
          />
        </div>
      </motion.div>
    </div>
  );
};

const StatCard = ({
  icon,
  label,
  value,
  subtitle,
  iconColor,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  subtitle?: string;
  iconColor: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.3 }}
    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
  >
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
        <div className={iconColor}>
          {icon}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-0.5">{label}</h3>
        <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
        {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  </motion.div>
);

const TypeBadge = ({ label, count, color }: { label: string; count: number; color: string }) => (
  <div className="flex-1">
    <div className={`${color} border rounded-lg px-3 py-2.5 text-center`}>
      <p className="text-xl font-bold">{count}</p>
      <p className="text-[10px] font-semibold uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  </div>
);

export default DashboardStats;
