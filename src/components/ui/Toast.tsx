import { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { cn } from '../../lib/utils';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

export const Toast = ({ id, type, message, duration = 5000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
    warning: AlertTriangle,
  };

  const variants = {
    success: cn(
      'bg-emerald-50 dark:bg-emerald-900/20',
      'border-emerald-200 dark:border-emerald-800',
      'text-emerald-800 dark:text-emerald-200'
    ),
    error: cn(
      'bg-red-50 dark:bg-red-900/20',
      'border-red-200 dark:border-red-800',
      'text-red-800 dark:text-red-200'
    ),
    info: cn(
      'bg-sapphire-50 dark:bg-sapphire-900/20',
      'border-sapphire-200 dark:border-sapphire-800',
      'text-sapphire-800 dark:text-sapphire-200'
    ),
    warning: cn(
      'bg-yellow-50 dark:bg-yellow-900/20',
      'border-yellow-200 dark:border-yellow-800',
      'text-yellow-800 dark:text-yellow-200'
    ),
  };

  const Icon = icons[type];

  return (
    <div className={cn(
      'flex items-start gap-3 p-4 rounded-xl border shadow-lg',
      'animate-in slide-in-from-top-5 duration-300',
      'backdrop-blur-sm',
      variants[type]
    )}>
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        onClick={() => onClose(id)}
        className="hover:bg-black/10 dark:hover:bg-white/10 rounded-lg p-1 transition-colors"
        aria-label="Close notification"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export const ToastContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="fixed top-20 right-4 z-50 flex flex-col gap-2 max-w-md">
    {children}
  </div>
);