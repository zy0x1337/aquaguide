import { cn } from '../../lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export const PageHeader = ({ title, subtitle, icon, actions, className }: PageHeaderProps) => {
  return (
    <div className={cn(
      'flex flex-col md:flex-row md:items-center md:justify-between gap-4',
      'pb-6 mb-6 border-b border-gray-200 dark:border-gray-800',
      className
    )}>
      <div className="flex items-start gap-4">
        {icon && (
          <div className="p-3 bg-gradient-to-br from-coral-500 to-coral-600 dark:from-coral-400 dark:to-coral-500 rounded-xl shadow-lg text-white">
            {icon}
          </div>
        )}
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-1">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      {actions && (
        <div className="flex items-center gap-3">
          {actions}
        </div>
      )}
    </div>
  );
};

// Default export for backward compatibility
export default PageHeader;
