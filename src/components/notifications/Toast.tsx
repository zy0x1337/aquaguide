import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastProps {
  toast: Toast;
  onClose: (id: string) => void;
}

const ToastComponent = ({ toast, onClose }: ToastProps) => {
  const duration = toast.duration || 5000;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(toast.id);
    }, duration);

    return () => clearTimeout(timer);
  }, [toast.id, duration, onClose]);

  const config = {
    success: {
      icon: <CheckCircle className="w-5 h-5" />,
      bgColor: 'from-emerald-500 to-green-500',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      progressBar: 'bg-emerald-600',
    },
    error: {
      icon: <XCircle className="w-5 h-5" />,
      bgColor: 'from-red-500 to-rose-500',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      progressBar: 'bg-red-600',
    },
    warning: {
      icon: <AlertTriangle className="w-5 h-5" />,
      bgColor: 'from-amber-500 to-orange-500',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      progressBar: 'bg-amber-600',
    },
    info: {
      icon: <Info className="w-5 h-5" />,
      bgColor: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      progressBar: 'bg-blue-600',
    },
  };

  const style = config[toast.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className="relative overflow-hidden"
    >
      {/* Main Toast */}
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-4 min-w-[320px] max-w-md">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className={`${style.iconBg} rounded-lg p-2 flex-shrink-0`}>
            <div className={style.iconColor}>{style.icon}</div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-slate-900 text-sm mb-0.5">{toast.title}</h4>
            {toast.message && (
              <p className="text-xs text-slate-600 leading-relaxed">{toast.message}</p>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={() => onClose(toast.id)}
            className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors p-1 hover:bg-slate-100 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: duration / 1000, ease: 'linear' }}
          className={`absolute bottom-0 left-0 h-1 ${style.progressBar}`}
        />
      </div>
    </motion.div>
  );
};

interface ToastContainerProps {
  toasts: Toast[];
  onClose: (id: string) => void;
}

export const ToastContainer = ({ toasts, onClose }: ToastContainerProps) => {
  return (
    <div className="fixed bottom-4 right-4 z-[9999] space-y-3 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastComponent toast={toast} onClose={onClose} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastComponent;
