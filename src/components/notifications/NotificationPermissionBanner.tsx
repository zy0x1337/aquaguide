import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, Calendar, Droplets, AlertCircle } from 'lucide-react';
import { isNotificationSupported, requestNotificationPermission, sendNotification } from '../../lib/notifications';
import { useToast } from '../../contexts/ToastContext';

const NotificationPermissionBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const toast = useToast();

  useEffect(() => {
    // Check if we should show the banner
    const checkPermission = () => {
      if (!isNotificationSupported()) {
        return false;
      }

      const permission = Notification.permission;
      const dismissed = localStorage.getItem('notification-banner-dismissed');
      
      // Show banner if permission is default (not asked yet) and not dismissed
      return permission === 'default' && !dismissed;
    };

    setShowBanner(checkPermission());
  }, []);

  const handleRequestPermission = async () => {
    setIsRequesting(true);
    
    try {
      const permission = await requestNotificationPermission();
      
      if (permission === 'granted') {
        toast.success(
          'Notifications enabled!',
          'You\'ll now receive reminders for maintenance and water changes.'
        );
        setShowBanner(false);
        
        // Show a test notification
        setTimeout(() => {
          sendNotification(
            '🐠 AquaGuide Notifications Active',
            'You\'ll receive helpful reminders for your aquarium care!'
          );
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
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <Bell className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-1">
                  Enable Notifications
                </h3>
                <p className="text-sm text-indigo-100 mb-3 leading-relaxed">
                  Never miss important aquarium tasks! Get reminders for:
                </p>
                
                {/* Benefits */}
                <div className="grid sm:grid-cols-3 gap-2 mb-4">
                  <BenefitItem
                    icon={<Calendar className="w-4 h-4" />}
                    text="Maintenance schedules"
                  />
                  <BenefitItem
                    icon={<Droplets className="w-4 h-4" />}
                    text="Water parameter checks"
                  />
                  <BenefitItem
                    icon={<AlertCircle className="w-4 h-4" />}
                    text="Critical alerts"
                  />
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={handleRequestPermission}
                    disabled={isRequesting}
                    className="bg-white text-indigo-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-indigo-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm shadow-lg"
                  >
                    {isRequesting ? 'Requesting...' : 'Enable Notifications'}
                  </button>
                  <button
                    onClick={handleDismiss}
                    className="px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-semibold transition-colors text-sm"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-2 transition-colors flex-shrink-0"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const BenefitItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
    <div className="text-indigo-200">
      {icon}
    </div>
    <span className="text-xs font-medium">{text}</span>
  </div>
);

export default NotificationPermissionBanner;
