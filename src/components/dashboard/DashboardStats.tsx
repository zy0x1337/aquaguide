import { Fish as FishIcon, Leaf, Droplets, Activity, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { DashboardStats as StatsType } from '../../lib/supabase/dashboard';

interface DashboardStatsProps { stats: StatsType; }

const DashboardStats = ({ stats }: DashboardStatsProps) => {
  const getHealthColor  = (s: number) => s >= 80 ? 'text-emerald-600 dark:text-emerald-400' : s >= 60 ? 'text-amber-600 dark:text-amber-400' : 'text-rose-600 dark:text-rose-400';
  const getHealthLabel  = (s: number) => s >= 80 ? 'Excellent' : s >= 60 ? 'Good' : 'Needs Attention';
  const getHealthBar    = (s: number) => s >= 80 ? 'bg-emerald-500' : s >= 60 ? 'bg-amber-500' : 'bg-rose-500';

  const statCards = [
    { icon: <Droplets className="w-5 h-5" />,  label: 'Total Tanks',  value: stats.totalTanks,                  sub: `${stats.totalVolumeLiters}L total`,   iconBg: 'bg-blue-100   dark:bg-blue-900/30',   iconColor: 'text-blue-600   dark:text-blue-400',   delay: 0    },
    { icon: <FishIcon className="w-5 h-5" />,  label: 'Total Fish',   value: stats.totalFish,                   sub: 'across all tanks',                    iconBg: 'bg-indigo-100 dark:bg-indigo-900/30', iconColor: 'text-indigo-600 dark:text-indigo-400', delay: 0.05 },
    { icon: <Leaf className="w-5 h-5" />,      label: 'Total Plants', value: stats.totalPlants,                  sub: 'across all tanks',                    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30', iconColor: 'text-emerald-600 dark:text-emerald-400', delay: 0.1 },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Total Volume', value: `${stats.totalVolumeLiters}L`,      sub: `∅ ${stats.totalTanks > 0 ? Math.round(stats.totalVolumeLiters / stats.totalTanks) : 0}L / tank`, iconBg: 'bg-cyan-100 dark:bg-cyan-900/30', iconColor: 'text-cyan-600 dark:text-cyan-400', delay: 0.15 },
  ];

  return (
    <div className="space-y-4">
      {/* Stat cards row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {statCards.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: c.delay, duration: 0.3 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2 rounded-lg ${c.iconBg}`}>
                <div className={c.iconColor}>{c.icon}</div>
              </div>
            </div>
            <p className="text-2xl font-black text-slate-900 dark:text-white mb-0.5">{c.value}</p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{c.label}</p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">{c.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Health + Distribution row */}
      <div className="grid sm:grid-cols-2 gap-3">

        {/* Average Health with bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800`}>
                <Activity className={`w-4 h-4 ${getHealthColor(stats.averageHealth)}`} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Average Health</p>
                <p className={`text-2xl font-black ${getHealthColor(stats.averageHealth)}`}>{Math.round(stats.averageHealth)}%</p>
              </div>
            </div>
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${
              stats.averageHealth >= 80 ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' :
              stats.averageHealth >= 60 ? 'bg-amber-100   dark:bg-amber-900/30   text-amber-700   dark:text-amber-300'   :
                                          'bg-rose-100    dark:bg-rose-900/30    text-rose-700    dark:text-rose-300'
            }`}>{getHealthLabel(stats.averageHealth)}</span>
          </div>
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.round(stats.averageHealth)}%` }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
              className={`h-full rounded-full ${getHealthBar(stats.averageHealth)}`}
            />
          </div>
        </motion.div>

        {/* Tank Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.3 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4"
        >
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">Tank Distribution</p>
          <div className="space-y-2">
            {[
              { label: 'Freshwater', count: stats.tanksByType.freshwater, bar: 'bg-blue-500',  text: 'text-blue-600 dark:text-blue-400'  },
              { label: 'Saltwater',  count: stats.tanksByType.saltwater,  bar: 'bg-cyan-500',  text: 'text-cyan-600 dark:text-cyan-400'  },
              { label: 'Brackish',   count: stats.tanksByType.brackish,   bar: 'bg-teal-500',  text: 'text-teal-600 dark:text-teal-400'  },
            ].map(t => (
              <div key={t.label} className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-slate-500 w-20 shrink-0">{t.label}</span>
                <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: stats.totalTanks > 0 ? `${(t.count / stats.totalTanks) * 100}%` : '0%' }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                    className={`h-full rounded-full ${t.bar}`}
                  />
                </div>
                <span className={`text-sm font-black w-4 text-right ${t.text}`}>{t.count}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardStats;
