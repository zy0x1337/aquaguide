import { useState, useEffect, useCallback } from 'react';
import { X, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ToastProps {
  id: string;
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose: (id: string) => void;
}

/**
 * Single Toast Notification Component
 */
export const Toast = ({ id, message, type = 'info', duration = 3000, onClose }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation In
  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  // Auto Close Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for exit animation before unmounting
      setTimeout(() => onClose(id), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, id, onClose]);

  const handleManualClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(id), 300);
  };

  const icons = {
    success: CheckCircle2,
    error: AlertCircle,
    info: Info
  };

  const styles = {
    success: 'bg-emerald-500 border-emerald-600 text-white',
    error: 'bg-rose-500 border-rose-600 text-white',
    info: 'bg-indigo-500 border-indigo-600 text-white'
  };

  const Icon = icons[type];

  return (
    <div
      className={cn(
        "pointer-events-auto w-full max-w-sm overflow-hidden rounded-xl border shadow-lg ring-1 ring-black/5 transition-all duration-300 ease-out",
        styles[type],
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-2 opacity-0 scale-95"
      )}
      role="alert"
    >
      <div className="p-4 flex items-start gap-3">
        <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1 text-sm font-semibold">{message}</div>
        <button
          onClick={handleManualClose}
          className="flex-shrink-0 hover:bg-white/20 p-1 rounded-lg transition-colors -mr-1 -mt-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

/**
 * Toast Hook for managing notifications
 */
export const useToast = () => {
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type: 'success' | 'error' | 'info' }>>([]);

  const showToast = useCallback((message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, showToast, removeToast };
};

/**
 * Container to render toasts (place in Layout or App root)
 */
export const ToastContainer = ({ toasts, removeToast }: { toasts: any[], removeToast: (id: string) => void }) => (
  <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none p-4 md:p-0">
    {toasts.map((toast) => (
      <Toast key={toast.id} {...toast} onClose={removeToast} />
    ))}
  </div>
);
