import { motion } from 'framer-motion';
import { Fish } from 'lucide-react';
import { SwimmingZonePreference } from '../../types/species';

interface Props {
  swimmingZone: SwimmingZonePreference;
}

export const SwimmingZoneVisualizer = ({ swimmingZone }: Props) => {
  const { primary, secondary, preference } = swimmingZone;
  
  const zones = ['surface', 'midwater', 'bottom'] as const;
  const zoneLabels = {
    surface: 'Surface',
    midwater: 'Midwater',
    bottom: 'Bottom',
    all: 'All Zones'
  };

  const getZoneOpacity = (zone: string) => {
    if (zone === primary) return preference;
    if (zone === secondary) return 1 - preference;
    return 0.1;
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
      <h4 className="text-sm font-bold text-blue-900 dark:text-blue-300 uppercase mb-4 flex items-center gap-2">
        <Fish className="w-4 h-4" />
        Swimming Zone Preference
      </h4>
      
      <div className="space-y-3">
        {zones.map((zone) => {
          const opacity = getZoneOpacity(zone);
          const isActive = zone === primary || zone === secondary;
          
          return (
            <div key={zone} className="flex items-center gap-3">
              <div className="w-24 text-sm font-semibold text-blue-900 dark:text-blue-200 capitalize">
                {zoneLabels[zone]}
              </div>
              <div className="flex-1 bg-blue-100 dark:bg-blue-900/30 rounded-full h-8 overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${opacity * 100}%` }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`h-full rounded-full flex items-center justify-end px-3 ${
                    zone === primary ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                    zone === secondary ? 'bg-gradient-to-r from-blue-400 to-cyan-400' :
                    'bg-blue-200 dark:bg-blue-800'
                  }`}
                >
                  {isActive && (
                    <span className="text-xs font-bold text-white">
                      {Math.round(opacity * 100)}%
                    </span>
                  )}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800 text-xs text-blue-800 dark:text-blue-300">
        <strong>Primary Zone:</strong> {zoneLabels[primary]}
        {secondary && <> • <strong>Secondary:</strong> {zoneLabels[secondary]}</>}
      </div>
    </div>
  );
};
