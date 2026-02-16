import { Fish as FishIcon, Leaf, Droplets, Activity, TrendingUp, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { DashboardStats as StatsType } from '../../lib/supabase/dashboard';

interface DashboardStatsProps {
  stats: StatsType;
}

const DashboardStats = ({ stats }: DashboardStatsProps) => {
  const getHealthColor = (score: number) => {
    if (score >= 80) return 'from-emerald-500 to-green-500';
    if (score >= 60) return 'from-amber-500 to-orange-500';
    return 'from-red-500 to-rose-500';
  };

  const getHealthText = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    return 'Needs Attention';
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Tanks */}
      <StatCard
        icon={<Droplets className="w-8 h-8" />}
        label="Total Tanks"
        value={stats.totalTanks}
        gradient="from-blue-500 to-cyan-500"
        delay={0}
      />

      {/* Total Fish */}
      <StatCard
        icon={<FishIcon className="w-8 h-8" />}
        label="Total Fish"
        value={stats.totalFish}
        gradient="from-indigo-500 to-purple-500"
        delay={0.1}
      />

      {/* Total Plants */}
      <StatCard
        icon={<Leaf className="w-8 h-8" />}
        label="Total Plants"
        value={stats.totalPlants}
        gradient="from-emerald-500 to-green-500"
        delay={0.2}
      />

      {/* Average Health */}
      <StatCard
        icon={<Activity className="w-8 h-8" />}
        label="Average Health"
        value={`${Math.round(stats.averageHealth)}%`}
        subtitle={getHealthText(stats.averageHealth)}
        gradient={getHealthColor(stats.averageHealth)}
        delay={0.3}
      />

      {/* Volume Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Total Volume</h3>
            <p className="text-3xl font-bold text-slate-900">{stats.totalVolumeLiters}L</p>
          </div>
        </div>
        <div className="text-xs text-slate-500">
          Average: {stats.totalTanks > 0 ? Math.round(stats.totalVolumeLiters / stats.totalTanks) : 0}L per tank
        </div>
      </motion.div>

      {/* Tank Type Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:col-span-2 lg:col-span-3"
      >
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-4">Tank Distribution</h3>
        <div className="flex gap-4">
          <TypeBadge
            label="Freshwater"
            count={stats.tanksByType.freshwater}
            color="bg-blue-100 text-blue-700"
          />
          <TypeBadge
            label="Saltwater"
            count={stats.tanksByType.saltwater}
            color="bg-cyan-100 text-cyan-700"
          />
          <TypeBadge
            label="Brackish"
            count={stats.tanksByType.brackish}
            color="bg-teal-100 text-teal-700"
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
  gradient,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  subtitle?: string;
  gradient: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow"
  >
    <div className="flex items-center gap-4">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-1">{label}</h3>
        <p className="text-3xl font-bold text-slate-900">{value}</p>
        {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
      </div>
    </div>
  </motion.div>
);

const TypeBadge = ({ label, count, color }: { label: string; count: number; color: string }) => (
  <div className="flex-1">
    <div className={`${color} rounded-lg px-4 py-3 text-center`}>
      <p className="text-2xl font-bold">{count}</p>
      <p className="text-xs font-semibold uppercase">{label}</p>
    </div>
  </div>
);

export default DashboardStats;
