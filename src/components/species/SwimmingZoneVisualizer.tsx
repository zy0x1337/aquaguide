import { motion } from 'framer-motion';
import { Fish, Waves, Droplets, Anchor } from 'lucide-react';
import { SwimmingZonePreference } from '../../types/species';

interface Props {
  swimmingZone: SwimmingZonePreference;
}

export const SwimmingZoneVisualizer = ({ swimmingZone }: Props) => {
  const { primary, secondary, preference } = swimmingZone;
  
  const zones = [
    { id: 'surface', label: 'Surface', icon: Waves },
    { id: 'midwater', label: 'Midwater', icon: Fish },
    { id: 'bottom', label: 'Bottom', icon: Anchor }
  ] as const;

  const getZoneOpacity = (zoneId: string) => {
    if (zoneId === primary) return preference;
    if (zoneId === secondary) return 1 - preference;
    return 0;
  };

  const getZonePriority = (zoneId: string) => {
    if (zoneId === primary) return 'primary';
    if (zoneId === secondary) return 'secondary';
    return 'none';
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 md:p-6 border border-slate-200 dark:border-slate-700">
      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2 pb-4 border-b border-slate-200 dark:border-slate-700">
        <Droplets className="w-4 h-4" />
        Swimming Zones
      </h4>
      
      {/* Tank Visual */}
      <div className="space-y-2 mb-4">
        {zones.map((zone, index) => {
          const opacity = getZoneOpacity(zone.id);
          const priority = getZonePriority(zone.id);
          const isActive = priority !== 'none';
          const Icon = zone.icon;
          
          return (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3 p-3">
                {/* Zone Label with Icon */}
                <div className={`flex items-center gap-2 min-w-[100px] ${
                  isActive ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-600'
                }`}>
                  <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{zone.label}</span>
                </div>
                
                {/* Progress Bar */}
                <div className="flex-1 bg-slate-100 dark:bg-slate-900 rounded-full h-7 overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? `${opacity * 100}%` : '0%' }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    className={`h-full flex items-center justify-end px-3 ${
                      priority === 'primary' 
                        ? 'bg-slate-800 dark:bg-slate-300' 
                        : priority === 'secondary'
                        ? 'bg-slate-500'
                        : ''
                    }`}
                  >
                    {isActive && opacity > 0.15 && (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-xs font-medium text-white dark:text-slate-900"
                      >
                        {Math.round(opacity * 100)}%
                      </motion.span>
                    )}
                  </motion.div>
                  
                  {/* Percentage outside bar for small values */}
                  {isActive && opacity <= 0.15 && opacity > 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        {Math.round(opacity * 100)}%
                      </span>
                    </div>
                  )}
                </div>

                {/* Priority Badge */}
                {priority === 'primary' && (
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-medium uppercase tracking-wide bg-slate-900 dark:bg-slate-300 text-white dark:text-slate-900">
                    Main
                  </span>
                )}
                {priority === 'secondary' && (
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-medium uppercase tracking-wide bg-slate-500 text-white">
                    Alt
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Footer Summary */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-900 dark:bg-slate-300"></div>
            <span>Primary: {zones.find(z => z.id === primary)?.label}</span>
          </div>
          {secondary && (
            <>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                <span>Secondary: {zones.find(z => z.id === secondary)?.label}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
