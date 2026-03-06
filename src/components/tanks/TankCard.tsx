import { Link } from 'react-router-dom';
import { Fish, Droplets, Thermometer, Trash2, Edit, ChevronRight, Sparkles, Leaf, Activity } from 'lucide-react';
import { Tank } from '../../types/tank';
import { motion } from 'framer-motion';

interface TankCardProps {
  tank: Tank;
  onDelete: (id: string) => void;
}

const TankCard = ({ tank, onDelete }: TankCardProps) => {
  const totalFish = tank.inhabitants?.fish.reduce((sum, f) => sum + f.quantity, 0) || 0;
  const totalPlants = tank.inhabitants?.plants.reduce((sum, p) => sum + p.quantity, 0) || 0;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Clean Header */}
      <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-850 p-5 border-b border-slate-200 dark:border-slate-700">
        {/* Subtle accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" />

        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5 truncate">{tank.name}</h3>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
              <Droplets className="w-4 h-4" />
              <span>{tank.volumeLiters}L</span>
              <span>•</span>
              <span className="capitalize">{tank.type}</span>
            </div>
          </div>
          
          {/* More Prominent Action Buttons */}
          <div className="flex gap-2 ml-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 bg-white dark:bg-slate-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 border border-slate-300 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-700 rounded-lg transition-all shadow-sm hover:shadow"
              title="Edit Tank"
            >
              <Edit className="w-4 h-4 text-slate-600 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (confirm(`Delete "${tank.name}"?`)) {
                  onDelete(tank.id);
                }
              }}
              className="p-2.5 bg-white dark:bg-slate-700 hover:bg-red-50 dark:hover:bg-red-900/20 border border-slate-300 dark:border-slate-600 hover:border-red-300 dark:hover:border-red-700 rounded-lg transition-all shadow-sm hover:shadow"
              title="Delete Tank"
            >
              <Trash2 className="w-4 h-4 text-slate-600 dark:text-slate-300 group-hover:text-red-600 dark:group-hover:text-red-400" />
            </motion.button>
          </div>
        </div>

        {/* Quick Stats with cleaner design */}
        <div className="grid grid-cols-3 gap-2.5">
          <CleanStatBadge icon={<Fish className="w-3.5 h-3.5" />} value={totalFish} label="Fish" color="blue" />
          <CleanStatBadge icon={<Leaf className="w-3.5 h-3.5" />} value={totalPlants} label="Plants" color="emerald" />
          <CleanStatBadge icon={<Thermometer className="w-3.5 h-3.5" />} value={`${tank.parameters.tempC}°C`} label="Temp" color="orange" />
        </div>
      </div>

      {/* Body with enhanced design */}
      <div className="relative p-5">
        {/* Water Parameters */}
        <div className="space-y-3 mb-5">
          <h4 className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide flex items-center gap-2">
            <Activity className="w-3.5 h-3.5" />
            Water Parameters
          </h4>
          <div className="grid grid-cols-2 gap-2.5">
            <ParamCard label="pH" value={tank.parameters.ph} status={tank.parameters.ph >= 6.5 && tank.parameters.ph <= 7.5 ? 'good' : 'warning'} />
            <ParamCard label="Ammonia" value={`${tank.parameters.ammonia}ppm`} status={tank.parameters.ammonia > 0 ? 'danger' : 'good'} />
            <ParamCard label="Nitrite" value={`${tank.parameters.nitrite}ppm`} status={tank.parameters.nitrite > 0 ? 'danger' : 'good'} />
            <ParamCard label="Nitrate" value={`${tank.parameters.nitrate}ppm`} status={tank.parameters.nitrate > 20 ? 'warning' : 'good'} />
          </div>
        </div>

        {/* More Prominent Action Button */}
        <Link
          to={`/my-tanks/${tank.id}`}
          className="group/btn relative w-full flex items-center justify-between bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-5 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl overflow-hidden"
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
          
          <span className="relative flex items-center gap-2 z-10">
            <Sparkles className="w-4 h-4" />
            Manage Tank
          </span>
          <ChevronRight className="relative w-5 h-5 group-hover/btn:translate-x-1 transition-transform z-10" />
        </Link>
      </div>
    </motion.div>
  );
};

// Clean Stat Badge Component
const CleanStatBadge = ({ icon, value, label, color }: { icon: React.ReactNode; value: string | number; label: string; color: string }) => {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300',
    emerald: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300',
    orange: 'bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-900 text-orange-700 dark:text-orange-300',
  }[color];

  return (
    <div className={`${colorClasses} border rounded-lg px-3 py-2.5 text-center`}>
      <div className="flex items-center justify-center gap-1 mb-1">
        {icon}
        <span className="text-base font-black">{value}</span>
      </div>
      <div className="text-[10px] font-bold uppercase tracking-wider opacity-80">{label}</div>
    </div>
  );
};

// Compact Parameter Card
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
    <div className={`${config.bg} border ${config.border} rounded-lg p-2.5 transition-all hover:shadow-sm relative overflow-hidden`}>
      <div className="absolute top-2 right-2">
        <div className={`w-1.5 h-1.5 rounded-full ${config.dot} animate-pulse`} />
      </div>
      <div className="text-[10px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wide">{label}</div>
      <div className={`text-base font-black ${config.text}`}>{value}</div>
    </div>
  );
};

export default TankCard;
