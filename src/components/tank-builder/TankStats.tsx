import { motion } from 'framer-motion';
import { Layers, Thermometer, Droplets, Gauge, Fan, Lightbulb } from 'lucide-react';
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
    const tempMin = Math.max(...temps.map(t => t.min)); const tempMax = Math.min(...temps.map(t => t.max));
    const phMin = Math.max(...phs.map(p => p.min)); const phMax = Math.min(...phs.map(p => p.max));
    
    if (tempMin <= tempMax) tempRange = `${tempMin}-${tempMax}°C`;
    else tempRange = '⚠️ Conflict';
    
    if (phMin <= phMax) phRange = `${phMin.toFixed(1)}-${phMax.toFixed(1)}`;
    else phRange = '⚠️ Conflict';
  }

  const bioloadColor = stats.stockingPercentage > 100 ? 'text-rose-600' : stats.stockingPercentage > 85 ? 'text-amber-600' : 'text-emerald-600';
  const progressColor = stats.stockingPercentage > 100 ? 'bg-rose-500' : stats.stockingPercentage > 85 ? 'bg-amber-500' : 'bg-emerald-500';

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
        <Layers className="w-5 h-5 mr-2 text-indigo-600" /> Tank Analytics
      </h3>

      {/* Primary Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatBox label="Volume" value={`${tankConfig.volume}L`} subtext={`${tankConfig.length}×${tankConfig.width}×${tankConfig.height}cm`} />
        <StatBox label="Inhabitants" value={totalFish.toString()} subtext={`${totalPlants} plants • ${totalHardscape} rocks`} />
      </div>

      {/* Bioload Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <Gauge className="w-4 h-4 text-slate-500" /> Bioload / Stocking
          </span>
          <span className={`font-bold text-sm ${bioloadColor}`}>{Math.min(100, stats.stockingPercentage)}%</span>
        </div>
        <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden shadow-inner border border-slate-200">
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: `${Math.min(100, stats.stockingPercentage)}%` }} 
            transition={{ type: 'spring', stiffness: 50 }}
            className={`h-full ${progressColor}`} 
          />
        </div>
        <p className="text-xs text-slate-500 mt-2">
          {stats.stockingPercentage < 50 ? 'Lightly stocked. Good for beginners.' : 
           stats.stockingPercentage < 85 ? 'Moderately stocked. Regular maintenance needed.' : 
           'Heavily stocked! High filtration required.'}
        </p>
      </div>

      {/* Parameters */}
      {(tempRange || phRange) && (
        <div className="grid grid-cols-2 gap-3 mb-6 p-3 bg-slate-50 rounded-xl border border-slate-100">
          {tempRange && (
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 flex items-center gap-1"><Thermometer className="w-3 h-3" /> Temp</span>
              <span className={`font-bold text-sm ${tempRange.includes('Conflict') ? 'text-rose-600' : 'text-slate-700'}`}>{tempRange}</span>
            </div>
          )}
          {phRange && (
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 flex items-center gap-1"><Droplets className="w-3 h-3" /> pH</span>
              <span className={`font-bold text-sm ${phRange.includes('Conflict') ? 'text-rose-600' : 'text-slate-700'}`}>{phRange}</span>
            </div>
          )}
        </div>
      )}

      {/* Hardware Recommendations */}
      <div className="border-t border-slate-200 pt-4">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Recommended Hardware</h4>
        <div className="space-y-3">
          <HardwareItem 
            icon={<Fan className="w-4 h-4 text-blue-500" />} 
            label="Filter Flow Rate" 
            value={`${stats.filterRate} L/h`} 
            desc="Min. turnover for this bioload" 
          />
          <HardwareItem 
            icon={<Thermometer className="w-4 h-4 text-rose-500" />} 
            label="Heater Power" 
            value={`${stats.heaterWattage} Watts`} 
            desc="To maintain stable temp" 
          />
          <HardwareItem 
            icon={<Lightbulb className="w-4 h-4 text-amber-500" />} 
            label="Lighting" 
            value={`${stats.lightingLumens}+ Lumens`} 
            desc={totalPlants > 0 ? "For plant growth" : "For viewing"} 
          />
        </div>
      </div>
    </div>
  );
};

const StatBox = ({ label, value, subtext }: { label: string; value: string; subtext: string }) => (
  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
    <div className="text-xs text-slate-500 font-medium mb-1">{label}</div>
    <div className="text-xl font-bold text-slate-800">{value}</div>
    <div className="text-[10px] text-slate-400 truncate">{subtext}</div>
  </div>
);

const HardwareItem = ({ icon, label, value, desc }: { icon: React.ReactNode; label: string; value: string; desc: string }) => (
  <div className="flex items-center justify-between group">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-indigo-300 transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-xs font-bold text-slate-700">{label}</div>
        <div className="text-[10px] text-slate-400">{desc}</div>
      </div>
    </div>
    <div className="font-mono text-sm font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">
      {value}
    </div>
  </div>
);
