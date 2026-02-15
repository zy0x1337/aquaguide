import { AlertTriangle } from 'lucide-react';
import { FinNipping } from '../../types/species';

interface Props {
  finNipping: FinNipping;
}

export const FinNippingWarning = ({ finNipping }: Props) => {
  const { risk, targets } = finNipping;

  if (risk === 'none') return null;

  const riskConfig = {
    low: {
      color: 'from-amber-50 to-yellow-50',
      border: 'border-amber-200',
      textColor: 'text-amber-900',
      iconColor: 'text-amber-600',
      label: 'Low Risk'
    },
    medium: {
      color: 'from-orange-50 to-amber-50',
      border: 'border-orange-300',
      textColor: 'text-orange-900',
      iconColor: 'text-orange-600',
      label: 'Medium Risk'
    },
    high: {
      color: 'from-red-50 to-rose-50',
      border: 'border-red-300',
      textColor: 'text-red-900',
      iconColor: 'text-red-600',
      label: 'High Risk'
    }
  };

  const config = riskConfig[risk];

  return (
    <div className={`bg-gradient-to-br ${config.color} dark:from-red-950/30 dark:to-orange-950/30 rounded-xl p-5 border-2 ${config.border} dark:border-red-800`}>
      <div className="flex gap-3 items-start">
        <AlertTriangle className={`w-6 h-6 ${config.iconColor} dark:text-red-400 flex-shrink-0`} />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className={`font-bold ${config.textColor} dark:text-red-300 text-base`}>
              Fin Nipping Warning
            </h4>
            <span className={`px-2 py-0.5 rounded-full text-xs font-bold uppercase ${config.textColor} dark:text-red-200 bg-white dark:bg-red-900/30 border ${config.border} dark:border-red-700`}>
              {config.label}
            </span>
          </div>
          
          <p className={`text-sm ${config.textColor} dark:text-red-200 mb-3`}>
            This species may nip at the fins of tank mates, especially slow-moving or long-finned fish.
          </p>

          {targets && targets.length > 0 && (
            <div>
              <p className={`text-xs font-semibold ${config.textColor} dark:text-red-300 uppercase mb-2`}>
                ⚠️ Avoid pairing with:
              </p>
              <div className="flex flex-wrap gap-2">
                {targets.map((target) => (
                  <span
                    key={target}
                    className={`text-xs ${config.textColor} dark:text-red-200 bg-white dark:bg-red-900/30 px-3 py-1.5 rounded-lg border ${config.border} dark:border-red-700 font-semibold`}
                  >
                    {target}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
