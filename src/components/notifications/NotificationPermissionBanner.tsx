import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, Calendar, Droplets, AlertCircle } from 'lucide-react';
import { notificationManager } from '../../lib/notifications/NotificationManager';
import { useToast } from '../../contexts/ToastContext';

const NotificationPermissionBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const toast = useToast();

  useEffect(() => {
    // Check if we should show the banner
    const checkPermission = () => {
      if (!notificationManager.isSupported()) {
        return false;
      }

      const permission = notificationManager.getPermission();
      const dismissed = localStorage.getItem('notification-banner-dismissed');
      
      // Show banner if permission is default (not asked yet) and not dismissed
      return permission === 'default' && !dismissed;
    };

    setShowBanner(checkPermission());
  }, []);

  const handleRequestPermission = async () => {
    setIsRequesting(true);
    
    try {
      const permission = await notificationManager.requestPermission();
      
      if (permission === 'granted') {
        toast.success(
          'Notifications enabled!',
          'You\'ll now receive reminders for maintenance and water changes.'
        );
        setShowBanner(false);
        
        // Show a test notification
        setTimeout(() => {
          notificationManager.showNotification({
            title: '🐠 AquaGuide Notifications Active',
            body: 'You\'ll receive helpful reminders for your aquarium care!',
            tag: 'welcome',
          });
        }, 1000);
      } else if (permission === 'denied') {
        toast.error(
          'Notifications blocked',
          'You can enable them later in your browser settings.'
        );
        setShowBanner(false);
      }
    } catch (error) {
      console.error('Permission request error:', error);
      toast.error('Something went wrong', 'Please try again later.');
    } finally {
      setIsRequesting(false);
    }
  };

  const handleDismiss = () => {
    localStorage.setItem('notification-banner-dismissed', 'true');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
            <div className="flex items-start gap-3 sm:gap-4">
              {/* Icon - Hidden on mobile */}
              <div className="hidden sm:flex w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl items-center justify-center flex-shrink-0">
                <Bell className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 mb-1">
                  {/* Mobile Icon */}
                  <Bell className="w-5 h-5 sm:hidden flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-base sm:text-lg">
                    Enable Notifications
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-indigo-100 mb-2 sm:mb-3 leading-relaxed">
                  Never miss important aquarium tasks! Get reminders for:
                </p>
                
                {/* Benefits - Stack on mobile */}
                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  <BenefitItem
                    icon={<Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    text="Maintenance schedules"
                  />
                  <BenefitItem
                    icon={<Droplets className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    text="Water parameter checks"
                  />
                  <BenefitItem
                    icon={<AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    text="Critical alerts"
                  />
                </div>

                {/* Actions - Stack on mobile */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleRequestPermission}
                    disabled={isRequesting}
                    className="bg-white text-indigo-600 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-indigo-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm shadow-lg w-full sm:w-auto"
                  >
                    {isRequesting ? 'Requesting...' : 'Enable Notifications'}
                  </button>
                  <button
                    onClick={handleDismiss}
                    className="px-4 py-2 sm:py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-semibold transition-colors text-xs sm:text-sm w-full sm:w-auto"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-1.5 sm:p-2 transition-colors flex-shrink-0"
                aria-label="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const BenefitItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2">
    <div className="text-indigo-200 flex-shrink-0">
      {icon}
    </div>
    <span className="text-xs font-medium">{text}</span>
  </div>
);

export default NotificationPermissionBanner;
