import { cn } from '../../lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'card' | 'text' | 'circle' | 'button' | 'image';
}

/**
 * Loading placeholder component with shimmering pulse effect
 */
export const Skeleton = ({ className, variant = 'text' }: SkeletonProps) => {
  const baseClasses = "animate-pulse bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 dark:from-stone-800 dark:via-stone-700 dark:to-stone-800 bg-[length:200%_100%] rounded-md";
  
  const variants = {
    card: 'rounded-2xl h-64 w-full',
    text: 'h-4 w-full',
    circle: 'rounded-full h-12 w-12',
    button: 'h-10 w-32 rounded-lg',
    image: 'h-48 w-full rounded-t-2xl'
  };

  return (
    <div 
      className={cn(baseClasses, variants[variant], className)}
      role="status"
      aria-label="Loading..."
    />
  );
};

/**
 * Pre-configured grid skeleton for species cards
 * Matches the layout of the HomePage grid
 */
export const SpeciesGridSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="bg-white dark:bg-stone-900 rounded-2xl border border-slate-100 dark:border-stone-800 overflow-hidden shadow-sm">
        {/* Image Placeholder */}
        <Skeleton variant="image" className="rounded-none" />
        
        {/* Content Placeholder */}
        <div className="p-4 space-y-3">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
          <div className="flex gap-2 pt-2">
            <Skeleton className="h-4 w-16 rounded-full" />
            <Skeleton className="h-4 w-12 rounded-full" />
          </div>
        </div>
      </div>
    ))}
  </div>
);
