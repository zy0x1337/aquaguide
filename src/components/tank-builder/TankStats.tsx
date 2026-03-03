import { motion } from 'framer-motion';
import { Thermometer, Droplets, Gauge, Fan, Lightbulb, ChefHat, Info } from 'lucide-react';
import { TankItem, TankConfig } from '../../types/builder';
import { Species } from '../../types/species';
import { calculateTankStats } from '../../utils/tank-calculations';

interface TankStatsProps {
  items: TankItem[];
  tankConfig: TankConfig;
}

export const TankStats = ({ items, tankConfig }: TankStatsProps) => {
  const stats = calculateTankStats(items, tankConfig);

  const totalFish = items.filter(i => i.type === 'fish').reduce((acc, i) => acc + (i.count || 1), 0);
  const totalPlants = items.filter(i => i.type === 'plant').length;
  const totalHardscape = items.filter(i => i.type === 'hardscape').length;

  let tempRange = '', phRange = '';
  const fishItems = items.filter(i => i.type === 'fish');

  if (fishItems.length > 0) {
    const temps = fishItems.map(item => { const species = item.data as Species; return { min: species.environment.tempC.min, max: species.environment.tempC.max }; });
    const phs = fishItems.map(item => { const species = item.data as Species; return { min: species.environment.ph.min, max: species.environment.ph.max }; });
    const tempMin = Math.max(...temps.map(t => t.min));
    const tempMax = Math.min(...temps.map(t => t.max));
    const phMin = Math.max(...phs.map(p => p.min));
    const phMax = Math.min(...phs.map(p => p.max));

    tempRange = tempMin <= tempMax ? `${tempMin}-${tempMax}°C` : '⚠️ Conflict';
    phRange = phMin <= phMax ? `${phMin.toFixed(1)}-${phMax.toFixed(1)}` : '⚠️ Conflict';
  }

  const bioloadColor = stats.stockingPercentage > 100
    ? 'text-rose-600'
    : stats.stockingPercentage > 85
    ? 'text-amber-600'
    : 'text-emerald-600';

  const progressColor = stats.stockingPercentage > 100
    ? 'bg-rose-500'
    : stats.stockingPercentage > 85
    ? 'bg-amber-500'
    : 'bg-emerald-500';

  return (
    <div className="space-y-4">

      {/* Primary Stats */}
      <div className="grid grid-cols-2 gap-3">
        <StatBox
          label="Volume"
          value={`${tankConfig.volume}L`}
          subtext={`${tankConfig.length}×${tankConfig.width}×${tankConfig.height}cm`}
        />
        <StatBox
          label="Inhabitants"
          value={totalFish.toString()}
          subtext={`${totalPlants} plants • ${totalHardscape} decor`}
        />
      </div>

      {/* Bioload */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
            <Gauge className="w-3.5 h-3.5 text-slate-500" /> Bioload / Stocking
          </span>
          <span className={`font-black text-lg ${bioloadColor}`}>
            {Math.min(100, stats.stockingPercentage)}%
          </span>
        </div>
        <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, stats.stockingPercentage)}%` }}
            transition={{ type: 'spring', stiffness: 50 }}
            className={`h-full ${progressColor}`}
          />
        </div>
        <div className="flex items-start gap-1.5 mt-2">
          <Info className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
            {stats.stockingPercentage < 50
              ? 'Lightly stocked. Ideal for beginners and stable parameters.'
              : stats.stockingPercentage < 85
              ? 'Optimally stocked. Regular maintenance required.'
              : 'Heavily stocked! Only for experienced keepers with over-filtration.'}
          </p>
        </div>
      </div>

      {/* Water Parameters */}
      {(tempRange || phRange) && (
        <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
          {tempRange && (
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mb-1 uppercase tracking-wide font-semibold">
                <Thermometer className="w-3 h-3" /> Temp
              </span>
              <span className={`font-black text-sm ${
                tempRange.includes('Conflict') ? 'text-rose-600' : 'text-slate-900 dark:text-white'
              }`}>
                {tempRange}
              </span>
            </div>
          )}
          {phRange && (
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mb-1 uppercase tracking-wide font-semibold">
                <Droplets className="w-3 h-3" /> pH
              </span>
              <span className={`font-black text-sm ${
                phRange.includes('Conflict') ? 'text-rose-600' : 'text-slate-900 dark:text-white'
              }`}>
                {phRange}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Recommended Hardware */}
      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
        <h4 className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
          Recommended Hardware
        </h4>
        <div className="space-y-2.5">
          <HardwareItem
            icon={<Fan className="w-3.5 h-3.5 text-blue-500" />}
            label="Filter Flow"
            value={`${stats.filterRate} L/h`}
            desc="Min. turnover for bioload"
          />
          <HardwareItem
            icon={<Thermometer className="w-3.5 h-3.5 text-rose-500" />}
            label="Heater"
            value={`${stats.heaterWattage}W`}
            desc="For stable temperature"
          />
          <HardwareItem
            icon={<Lightbulb className="w-3.5 h-3.5 text-amber-500" />}
            label="Lighting"
            value={`${stats.lightingLumens}+ lm`}
            desc={totalPlants > 0 ? 'For plant growth' : 'For viewing'}
          />
        </div>
      </div>

      {/* Feeding Schedule */}
      {stats.feedingAdvice.length > 0 && (
        <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
          <h4 className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <ChefHat className="w-3.5 h-3.5" /> Feeding Schedule
          </h4>
          <ul className="space-y-1.5">
            {stats.feedingAdvice.map((advice, idx) => (
              <li
                key={idx}
                className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 px-2.5 py-1.5 rounded-lg border-l-2 border-indigo-400"
              >
                {advice}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const StatBox = ({ label, value, subtext }: { label: string; value: string; subtext: string }) => (
  <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide mb-1">{label}</div>
    <div className="text-xl font-black text-slate-900 dark:text-white">{value}</div>
    <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate mt-0.5">{subtext}</div>
  </div>
);

const HardwareItem = ({ icon, label, value, desc }: { icon: React.ReactNode; label: string; value: string; desc: string }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2.5">
      <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-xs font-bold text-slate-700 dark:text-slate-300">{label}</div>
        <div className="text-[10px] text-slate-400 dark:text-slate-500">{desc}</div>
      </div>
    </div>
    <div className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded-md">
      {value}
    </div>
  </div>
);
