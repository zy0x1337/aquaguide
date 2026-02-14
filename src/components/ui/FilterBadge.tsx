import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FilterBadgeProps {
  label: string;
  value: string;
  onRemove: () => void;
  className?: string;
}

/**
 * Visual indicator for active filters with remove button
 */
export const FilterBadge = ({ label, value, onRemove, className }: FilterBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10",
        "border border-indigo-200 dark:border-indigo-500/30 rounded-full",
        "text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wide",
        "animate-in fade-in zoom-in duration-200 shadow-sm",
        "group hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors",
        className
      )}
    >
      <span className="opacity-60 font-medium">{label}:</span>
      <span>{value}</span>
      <button
        onClick={onRemove}
        className="ml-1 -mr-1 p-0.5 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-400/30 text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-200 transition-colors"
        aria-label={`Remove ${label} filter`}
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
