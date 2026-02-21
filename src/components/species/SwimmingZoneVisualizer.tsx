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
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 md:p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 md:mb-5 flex items-center gap-2 pb-4 border-b border-slate-200 dark:border-slate-700">
        <Droplets className="w-4 h-4" />
        Swimming Zones
      </h4>
      
      {/* Tank Visual */}
      <div className="space-y-2 md:space-y-3 mb-4 md:mb-5">
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
              className={`relative rounded-lg overflow-hidden border ${
                isActive ? 'border-slate-300 dark:border-slate-600' : 'border-slate-200 dark:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4">
                {/* Zone Label with Icon */}
                <div className={`flex items-center gap-2 min-w-[100px] md:min-w-[120px] ${
                  isActive ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-600'
                }`}>
                  <div className={`p-1.5 md:p-2 rounded-lg ${isActive ? 'bg-slate-100 dark:bg-slate-700' : 'bg-slate-50 dark:bg-slate-800'}`}>
                    <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold">{zone.label}</span>
                </div>
                
                {/* Progress Bar */}
                <div className="flex-1 bg-slate-100 dark:bg-slate-800/50 rounded-full h-6 md:h-8 overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? `${opacity * 100}%` : '0%' }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    className={`h-full flex items-center justify-end px-2 md:px-3 ${
                      priority === 'primary' 
                        ? 'bg-slate-800 dark:bg-slate-200' 
                        : priority === 'secondary'
                        ? 'bg-slate-500 dark:bg-slate-400'
                        : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                  >
                    {isActive && opacity > 0.15 && (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className={`text-[10px] md:text-xs font-semibold ${
                          priority === 'primary' ? 'text-white dark:text-slate-900' : 'text-white dark:text-slate-900'
                        }`}
                      >
                        {Math.round(opacity * 100)}%
                      </motion.span>
                    )}
                  </motion.div>
                  
                  {/* Percentage outside bar for small values */}
                  {isActive && opacity <= 0.15 && opacity > 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] md:text-xs font-semibold text-slate-600 dark:text-slate-400">
                        {Math.round(opacity * 100)}%
                      </span>
                    </div>
                  )}
                </div>

                {/* Priority Badge */}
                {priority === 'primary' && (
                  <span className="px-2 md:px-3 py-1 rounded-md text-[9px] md:text-[10px] font-semibold uppercase tracking-wide bg-slate-900 dark:bg-slate-200 text-white dark:text-slate-900">
                    Main
                  </span>
                )}
                {priority === 'secondary' && (
                  <span className="px-2 md:px-3 py-1 rounded-md text-[9px] md:text-[10px] font-semibold uppercase tracking-wide bg-slate-400 dark:bg-slate-600 text-white">
                    Alt
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Footer Summary */}
      <div className="pt-4 md:pt-5 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-900 dark:bg-slate-200"></div>
            <span><strong className="font-semibold">Primary:</strong> {zones.find(z => z.id === primary)?.label}</span>
          </div>
          {secondary && (
            <>
              <span className="text-slate-400">•</span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <span><strong className="font-semibold">Secondary:</strong> {zones.find(z => z.id === secondary)?.label}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
