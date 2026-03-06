import { Link } from 'react-router-dom';
import { Fish, Droplets, Thermometer, Trash2, Edit, ChevronRight, Sparkles } from 'lucide-react';
import { Tank } from '../../types/tank';
import { motion } from 'framer-motion';

interface TankCardProps {
  tank: Tank;
  onDelete: (id: string) => void;
}

const TankCard = ({ tank, onDelete }: TankCardProps) => {
  const totalFish = tank.inhabitants?.fish.length || 0;
  const totalPlants = tank.inhabitants?.plants.length || 0;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      {/* Header with gradient */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 p-6 text-white overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1 drop-shadow-sm">{tank.name}</h3>
              <p className="text-indigo-100 text-sm font-medium flex items-center gap-2">
                <Droplets className="w-4 h-4" />
                {tank.volumeLiters}L • {tank.type}
              </p>
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all shadow-sm border border-white/20"
                title="Edit Tank"
              >
                <Edit className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (confirm(`Delete "${tank.name}"?`)) {
                    onDelete(tank.id);
                  }
                }}
                className="p-2 bg-white/10 hover:bg-red-500/90 backdrop-blur-sm rounded-lg transition-all shadow-sm border border-white/20 hover:border-red-400"
                title="Delete Tank"
              >
                <Trash2 className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Quick Stats with glassmorphism */}
          <div className="grid grid-cols-3 gap-3">
            <StatBadge icon={<Fish className="w-4 h-4" />} value={totalFish} label="Fish" />
            <StatBadge icon={<Sparkles className="w-4 h-4" />} value={totalPlants} label="Plants" />
            <StatBadge icon={<Thermometer className="w-4 h-4" />} value={`${tank.parameters.tempC}°C`} label="Temp" />
          </div>
        </div>
      </div>

      {/* Body with enhanced design */}
      <div className="relative p-6">
        {/* Water Parameters */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
            Water Parameters
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <ParamCard label="pH" value={tank.parameters.ph} status={tank.parameters.ph >= 6.5 && tank.parameters.ph <= 7.5 ? 'good' : 'warning'} />
            <ParamCard label="Ammonia" value={`${tank.parameters.ammonia}ppm`} status={tank.parameters.ammonia > 0 ? 'danger' : 'good'} />
            <ParamCard label="Nitrite" value={`${tank.parameters.nitrite}ppm`} status={tank.parameters.nitrite > 0 ? 'danger' : 'good'} />
            <ParamCard label="Nitrate" value={`${tank.parameters.nitrate}ppm`} status={tank.parameters.nitrate > 20 ? 'warning' : 'good'} />
          </div>
        </div>

        {/* Enhanced Action Button */}
        <Link
          to={`/my-tanks/${tank.id}`}
          className="group/btn relative w-full flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-950/50 dark:hover:to-purple-950/50 text-indigo-700 dark:text-indigo-400 font-bold px-5 py-3.5 rounded-xl transition-all border border-indigo-200 dark:border-indigo-900 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm hover:shadow-md"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Manage Tank
          </span>
          <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-purple-500/5 to-indigo-500/0 opacity-0 group-hover/btn:opacity-100 transition-opacity rounded-xl" />
        </Link>
      </div>
    </motion.div>
  );
};

// Helper Components with enhanced styling
const StatBadge = ({ icon, value, label }: { icon: React.ReactNode; value: string | number; label: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30 shadow-lg"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl" />
    <div className="relative">
      <div className="flex items-center justify-center gap-1.5 mb-1">
        <div className="p-1 bg-white/20 rounded-lg">{icon}</div>
        <span className="text-lg font-black drop-shadow-sm">{value}</span>
      </div>
      <div className="text-xs text-center text-white/90 font-semibold">{label}</div>
    </div>
  </motion.div>
);

const ParamCard = ({ label, value, status }: { label: string; value: string | number; status: 'good' | 'warning' | 'danger' }) => {
  const config = {
    good: {
      bg: 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30',
      border: 'border-emerald-200 dark:border-emerald-900',
      text: 'text-emerald-700 dark:text-emerald-300',
      dot: 'bg-emerald-500',
    },
    warning: {
      bg: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30',
      border: 'border-amber-200 dark:border-amber-900',
      text: 'text-amber-700 dark:text-amber-300',
      dot: 'bg-amber-500',
    },
    danger: {
      bg: 'bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30',
      border: 'border-red-200 dark:border-red-900',
      text: 'text-red-700 dark:text-red-300',
      dot: 'bg-red-500',
    },
  }[status];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`${config.bg} border ${config.border} rounded-lg p-3 transition-all shadow-sm hover:shadow-md relative overflow-hidden`}
    >
      <div className="absolute top-2 right-2">
        <div className={`w-2 h-2 rounded-full ${config.dot} animate-pulse`} />
      </div>
      <div className="text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">{label}</div>
      <div className={`text-lg font-black ${config.text}`}>{value}</div>
    </motion.div>
  );
};

export default TankCard;
