import { Plus, Droplets, Wrench, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuickActionsProps {
  onAddTank: () => void;
  onPlanTank?: () => void;
  onAddReading?: () => void;
  onLogMaintenance?: () => void;
}

const QuickActions = ({ onAddTank, onPlanTank, onAddReading, onLogMaintenance }: QuickActionsProps) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <ActionCard
          icon={<Plus className="w-5 h-5" />}
          label="Add Tank"
          description="Create manually"
          bg="bg-indigo-50 dark:bg-indigo-950/20"
          border="border-indigo-200 dark:border-indigo-900"
          iconBg="bg-indigo-100 dark:bg-indigo-900/40"
          iconColor="text-indigo-600 dark:text-indigo-400"
          textColor="text-slate-900 dark:text-white"
          onClick={onAddTank}
          delay={0}
        />
        <ActionCard
          icon={<Hammer className="w-5 h-5" />}
          label="Tank Builder"
          description="Design with tools"
          bg="bg-teal-50 dark:bg-teal-950/20"
          border="border-teal-200 dark:border-teal-900"
          iconBg="bg-teal-100 dark:bg-teal-900/40"
          iconColor="text-teal-600 dark:text-teal-400"
          textColor="text-slate-900 dark:text-white"
          onClick={onPlanTank}
          delay={0.05}
        />
        <ActionCard
          icon={<Droplets className="w-5 h-5" />}
          label="Log Parameters"
          description="Water readings"
          bg="bg-blue-50 dark:bg-blue-950/20"
          border="border-blue-200 dark:border-blue-900"
          iconBg="bg-blue-100 dark:bg-blue-900/40"
          iconColor="text-blue-600 dark:text-blue-400"
          textColor="text-slate-900 dark:text-white"
          onClick={onAddReading}
          disabled={!onAddReading}
          delay={0.1}
        />
        <ActionCard
          icon={<Wrench className="w-5 h-5" />}
          label="Maintenance"
          description="Track tasks"
          bg="bg-purple-50 dark:bg-purple-950/20"
          border="border-purple-200 dark:border-purple-900"
          iconBg="bg-purple-100 dark:bg-purple-900/40"
          iconColor="text-purple-600 dark:text-purple-400"
          textColor="text-slate-900 dark:text-white"
          onClick={onLogMaintenance}
          disabled={!onLogMaintenance}
          delay={0.15}
        />
      </div>
    </div>
  );
};

const ActionCard = ({
  icon, label, description, bg, border, iconBg, iconColor, textColor, onClick, disabled, delay,
}: {
  icon: React.ReactNode; label: string; description: string;
  bg: string; border: string; iconBg: string; iconColor: string; textColor: string;
  onClick?: () => void; disabled?: boolean; delay: number;
}) => (
  <motion.button
    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.3 }}
    onClick={onClick} disabled={disabled}
    className={`group text-left border ${border} ${bg} rounded-lg p-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
  >
    <div className={`w-9 h-9 ${iconBg} rounded-lg flex items-center justify-center mb-3`}>
      <div className={iconColor}>{icon}</div>
    </div>
    <h3 className={`font-bold text-sm ${textColor} mb-0.5`}>{label}</h3>
    <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
  </motion.button>
);

export default QuickActions;
