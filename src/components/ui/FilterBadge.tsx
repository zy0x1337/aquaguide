import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FilterBadgeProps {
  label: string;
  value: string;
  onRemove: () => void;
  variant?: 'default' | 'primary' | 'success' | 'warning';
}

export const FilterBadge = ({ label, value, onRemove, variant = 'default' }: FilterBadgeProps) => {
  const variants = {
    default: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700',
    primary: 'bg-coral-50 dark:bg-coral-900/20 text-coral-700 dark:text-coral-300 border-coral-300 dark:border-coral-700',
    success: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700',
  };

  return (
    <div className={cn(
      'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border transition-all',
      variants[variant]
    )}>
      <span className="text-xs opacity-75">{label}:</span>
      <span className="font-semibold">{value}</span>
      <button
        onClick={onRemove}
        className="ml-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-0.5 transition-colors"
        aria-label={`Remove ${label} filter`}
      >
        <X size={14} />
      </button>
    </div>
  );
};