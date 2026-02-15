import { useState } from 'react';
import { motion } from 'framer-motion';
import { Fish as FishIcon, Leaf, Mountain, Plus } from 'lucide-react';
import { allSpecies } from '../../data/species';
import { allPlants } from '../../data/plants';
import { HARDSCAPE_LIBRARY } from '../../data/builder';
import { Species } from '../../types/species';
import { Plant } from '../../types/plant';
import { HardscapeItem } from '../../types/builder';

interface AssetBrowserProps {
  onAddItem: (item: Species | Plant | HardscapeItem, type: 'fish' | 'plant' | 'hardscape') => void;
  tankVolume: number;
}

export const AssetBrowser = ({ onAddItem, tankVolume }: AssetBrowserProps) => {
  const [selectedTab, setSelectedTab] = useState<'fish' | 'plant' | 'hardscape'>('fish');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSpecies = allSpecies.filter((s: Species) => 
    s.taxonomy.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.taxonomy.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 20);

  const filteredPlants = allPlants.filter((p: Plant) => 
    p.taxonomy.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.taxonomy.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 20);

  const filteredHardscape = HARDSCAPE_LIBRARY.filter(h => h.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200">
      <div className="flex border-b border-slate-200">
        <TabButton 
          active={selectedTab === 'fish'} 
          onClick={() => setSelectedTab('fish')} 
          icon={<FishIcon className="w-4 h-4" />} 
          label="Fish" 
          count={allSpecies.length} 
          color="indigo" 
        />
        <TabButton 
          active={selectedTab === 'plant'} 
          onClick={() => setSelectedTab('plant')} 
          icon={<Leaf className="w-4 h-4" />} 
          label="Plants" 
          count={allPlants.length} 
          color="emerald" 
        />
        <TabButton 
          active={selectedTab === 'hardscape'} 
          onClick={() => setSelectedTab('hardscape')} 
          icon={<Mountain className="w-4 h-4" />} 
          label="Hardscape" 
          count={HARDSCAPE_LIBRARY.length} 
          color="amber" 
        />
      </div>

      <div className="p-4 border-b border-slate-200">
        <input 
          type="text" 
          placeholder={`Search ${selectedTab}...`} 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" 
        />
      </div>

      <div className="p-4 max-h-[400px] overflow-y-auto">
        {selectedTab === 'fish' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredSpecies.map((species: Species) => (
              <ItemCard 
                key={species.id} 
                name={species.taxonomy.commonName} 
                image={species.imageUrl} 
                subtitle={`${species.visuals.adultSizeCM}cm • Min: ${species.environment.minTankSizeLiters}L`} 
                onClick={() => onAddItem(species, 'fish')} 
                warning={species.environment.minTankSizeLiters > tankVolume} 
              />
            ))}
          </div>
        )}
        {selectedTab === 'plant' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredPlants.map((plant: Plant) => (
              <ItemCard 
                key={plant.id} 
                name={plant.taxonomy.commonName} 
                image={plant.imageUrl} 
                subtitle={`${plant.specs.heightCM.max}cm • ${plant.specs.growthRate}`} 
                onClick={() => onAddItem(plant, 'plant')} 
              />
            ))}
          </div>
        )}
        {selectedTab === 'hardscape' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredHardscape.map((item: HardscapeItem) => (
              <HardscapeCard 
                key={item.id} 
                item={item} 
                onClick={() => onAddItem(item, 'hardscape')} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, label, count, color }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string; count: number; color: 'indigo' | 'emerald' | 'amber'; }) => {
  const colors = { 
    indigo: active ? 'text-indigo-600 border-indigo-600 bg-indigo-50/50' : '', 
    emerald: active ? 'text-emerald-600 border-emerald-600 bg-emerald-50/50' : '', 
    amber: active ? 'text-amber-600 border-amber-600 bg-amber-50/50' : '' 
  };
  return (
    <button 
      onClick={onClick} 
      className={`flex-1 px-6 py-4 font-bold text-sm transition-all flex items-center justify-center gap-2 ${active ? `${colors[color]} border-b-2` : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
    >
      {icon} {label} ({count})
    </button>
  );
};

const ItemCard = ({ name, image, subtitle, onClick, warning }: { name: string; image?: string; subtitle?: string; onClick: () => void; warning?: boolean; }) => (
  <motion.button 
    whileHover={{ scale: 1.05, y: -4 }} 
    whileTap={{ scale: 0.95 }} 
    onClick={onClick} 
    className={`group relative bg-gradient-to-br from-slate-50 to-white hover:from-white hover:to-slate-50 border-2 rounded-xl overflow-hidden transition-all shadow-md hover:shadow-xl ${warning ? 'border-rose-300' : 'border-slate-200 hover:border-indigo-400'}`}
  >
    {warning && (
      <div className="absolute top-2 left-2 z-10 bg-rose-500 text-white px-2 py-1 rounded-md text-[10px] font-bold">Too big!</div>
    )}
    <div className="aspect-square bg-slate-200 overflow-hidden">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-slate-400">
          <FishIcon className="w-10 h-10" />
        </div>
      )}
    </div>
    <div className="p-3">
      <p className="text-xs font-bold text-slate-900 truncate">{name}</p>
      {subtitle && <p className="text-[10px] text-slate-500 font-medium">{subtitle}</p>}
    </div>
    <div className="absolute top-2 right-2 w-7 h-7 bg-indigo-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg">
      <Plus className="w-4 h-4" />
    </div>
  </motion.button>
);

const HardscapeCard = ({ item, onClick }: { item: HardscapeItem; onClick: () => void }) => (
  <motion.button 
    whileHover={{ scale: 1.05, y: -4 }} 
    whileTap={{ scale: 0.95 }} 
    onClick={onClick} 
    className="group relative bg-gradient-to-br from-slate-50 to-white hover:from-white hover:to-slate-50 border-2 border-slate-200 hover:border-amber-400 rounded-xl overflow-hidden transition-all shadow-md hover:shadow-xl"
  >
    <div className="aspect-square overflow-hidden flex items-center justify-center text-5xl" style={{ backgroundColor: item.color + '15' }}>
      {item.icon}
    </div>
    <div className="p-3">
      <p className="text-xs font-bold text-slate-900 truncate">{item.name}</p>
      <p className="text-[10px] text-slate-500 font-medium">{item.size}cm</p>
    </div>
    <div className="absolute top-2 right-2 w-7 h-7 bg-amber-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg">
      <Plus className="w-4 h-4" />
    </div>
  </motion.button>
);
