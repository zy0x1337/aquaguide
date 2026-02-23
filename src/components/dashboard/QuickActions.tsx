import { Plus, Droplets, Wrench, Activity, Fish } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuickActionsProps {
  onAddTank: () => void;
  onAddReading?: () => void;
  onLogMaintenance?: () => void;
}

const QuickActions = ({ onAddTank, onAddReading, onLogMaintenance }: QuickActionsProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <ActionCard
          icon={<Plus className="w-6 h-6" />}
          label="Add Tank"
          description="Create a new tank"
          gradient="from-indigo-500 to-purple-500"
          onClick={onAddTank}
          delay={0}
        />
        <ActionCard
          icon={<Droplets className="w-6 h-6" />}
          label="Log Parameters"
          description="Record water readings"
          gradient="from-blue-500 to-cyan-500"
          onClick={onAddReading}
          disabled={!onAddReading}
          delay={0.05}
        />
        <ActionCard
          icon={<Wrench className="w-6 h-6" />}
          label="Log Maintenance"
          description="Track maintenance tasks"
          gradient="from-purple-500 to-pink-500"
          onClick={onLogMaintenance}
          disabled={!onLogMaintenance}
          delay={0.1}
        />
        <ActionCard
          icon={<Activity className="w-6 h-6" />}
          label="View Reports"
          description="Coming soon"
          gradient="from-emerald-500 to-green-500"
          onClick={() => alert('Reports feature coming soon!')}
          delay={0.15}
        />
      </div>
    </div>
  );
};

const ActionCard = ({
  icon,
  label,
  description,
  gradient,
  onClick,
  disabled,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  description: string;
  gradient: string;
  onClick?: () => void;
  disabled?: boolean;
  delay: number;
}) => (
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    onClick={onClick}
    disabled={disabled}
    className={`
      group relative overflow-hidden
      bg-gradient-to-br ${gradient}
      rounded-xl p-4 text-left
      hover:shadow-lg transition-all
      disabled:opacity-50 disabled:cursor-not-allowed
    `}
  >
    <div className="relative z-10">
      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 text-white">
        {icon}
      </div>
      <h3 className="font-bold text-white mb-1">{label}</h3>
      <p className="text-xs text-white/80">{description}</p>
    </div>
    
    {/* Hover effect overlay */}
    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
  </motion.button>
);

export default QuickActions;
