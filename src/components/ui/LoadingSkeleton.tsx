import { cn } from '../../lib/utils';

interface LoadingSkeletonProps {
  className?: string;
  variant?: 'card' | 'text' | 'circle' | 'line';
}

export const LoadingSkeleton = ({ className, variant = 'card' }: LoadingSkeletonProps) => {
  const baseClasses = 'animate-pulse bg-gray-200 dark:bg-gray-800';
  
  const variants = {
    card: 'rounded-xl h-64 w-full',
    text: 'rounded h-4 w-3/4',
    circle: 'rounded-full h-12 w-12',
    line: 'rounded h-px w-full',
  };

  return (
    <div className={cn(baseClasses, variants[variant], className)} />
  );
};

export const SpeciesCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-soft border border-gray-200 dark:border-gray-800 transition-all">
    <LoadingSkeleton variant="card" className="h-48 rounded-t-xl rounded-b-none" />
    <div className="p-4 space-y-3">
      <LoadingSkeleton variant="text" className="h-6 w-2/3" />
      <LoadingSkeleton variant="text" className="h-4 w-1/2" />
      <div className="flex gap-2 pt-2">
        <LoadingSkeleton variant="text" className="h-6 w-16 rounded-full" />
        <LoadingSkeleton variant="text" className="h-6 w-20 rounded-full" />
      </div>
    </div>
  </div>
);

export const PlantCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-soft border border-gray-200 dark:border-gray-800 transition-all">
    <LoadingSkeleton variant="card" className="h-48 rounded-t-xl rounded-b-none" />
    <div className="p-4 space-y-3">
      <LoadingSkeleton variant="text" className="h-6 w-3/4" />
      <LoadingSkeleton variant="text" className="h-4 w-full" />
      <LoadingSkeleton variant="text" className="h-4 w-5/6" />
      <div className="flex gap-2 pt-2">
        <LoadingSkeleton variant="circle" className="h-8 w-8" />
        <LoadingSkeleton variant="circle" className="h-8 w-8" />
        <LoadingSkeleton variant="circle" className="h-8 w-8" />
      </div>
    </div>
  </div>
);

export const DiseaseCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-800 transition-all">
    <div className="flex items-start gap-4">
      <LoadingSkeleton variant="circle" className="h-12 w-12" />
      <div className="flex-1 space-y-3">
        <LoadingSkeleton variant="text" className="h-6 w-1/2" />
        <LoadingSkeleton variant="text" className="h-4 w-full" />
        <LoadingSkeleton variant="text" className="h-4 w-3/4" />
        <div className="flex gap-2 pt-2">
          <LoadingSkeleton variant="text" className="h-6 w-24 rounded-full" />
          <LoadingSkeleton variant="text" className="h-6 w-20 rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

export const DashboardCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-800 transition-all">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <LoadingSkeleton variant="text" className="h-5 w-1/3" />
        <LoadingSkeleton variant="circle" className="h-8 w-8" />
      </div>
      <LoadingSkeleton variant="text" className="h-10 w-1/2" />
      <LoadingSkeleton variant="text" className="h-4 w-2/3" />
    </div>
  </div>
);

export const TableRowSkeleton = () => (
  <div className="flex items-center gap-4 p-4 border-b border-gray-200 dark:border-gray-800">
    <LoadingSkeleton variant="circle" className="h-10 w-10" />
    <div className="flex-1 space-y-2">
      <LoadingSkeleton variant="text" className="h-4 w-1/3" />
      <LoadingSkeleton variant="text" className="h-3 w-1/2" />
    </div>
    <LoadingSkeleton variant="text" className="h-4 w-20" />
  </div>
);