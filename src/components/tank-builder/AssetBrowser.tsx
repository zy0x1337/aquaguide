import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fish as FishIcon, Leaf, Mountain, Plus, Filter, ChevronDown } from 'lucide-react';
import { allSpecies } from '../../data/species';
import { allPlants } from '../../data/plants';
import { HARDSCAPE_LIBRARY } from '../../data/builder';
import { Species } from '../../types/species';
import { Plant } from '../../types/plant';
import { HardscapeItem } from '../../types/builder';

interface FilterState {
  tempMin: number;
  tempMax: number;
  phMin: number;
  phMax: number;
  maxSize: number;
  diet: 'all' | 'carnivore' | 'herbivore' | 'omnivore';
  temperament: 'all' | 'peaceful' | 'semi-aggressive';
  difficulty: 'all' | 'beginner' | 'medium' | 'expert';
}

interface AssetBrowserProps {
  onAddItem: (item: Species | Plant | HardscapeItem, type: 'fish' | 'plant' | 'hardscape') => void;
  tankVolume: number;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  showAdvancedFilters: boolean;
  onToggleAdvancedFilters: () => void;
}

export const AssetBrowser = ({ 
  onAddItem, 
  tankVolume, 
  filters, 
  onFiltersChange,
  showAdvancedFilters,
  onToggleAdvancedFilters 
}: AssetBrowserProps) => {
  const [selectedTab, setSelectedTab] = useState<'fish' | 'plant' | 'hardscape'>('fish');
  const [searchTerm, setSearchTerm] = useState('');

  // Apply filters to species
  const applyFilters = (species: Species): boolean => {
    // Temperature check
    if (species.environment.tempC.min > filters.tempMax || species.environment.tempC.max < filters.tempMin) {
      return false;
    }
    
    // pH check
    if (species.environment.ph.min > filters.phMax || species.environment.ph.max < filters.phMin) {
      return false;
    }
    
    // Size check
    if (species.visuals.adultSizeCM > filters.maxSize) {
      return false;
    }
    
    // Diet check
    if (filters.diet !== 'all' && species.care.diet !== filters.diet) {
      return false;
    }
    
    // Temperament check
    if (filters.temperament !== 'all') {
      if (filters.temperament === 'peaceful' && !species.behavior.tags.includes('peaceful')) {
        return false;
      }
      if (filters.temperament === 'semi-aggressive' && !species.behavior.tags.includes('semi-aggressive')) {
        return false;
      }
    }
    
    // Difficulty check
    if (filters.difficulty !== 'all' && species.care.difficulty !== filters.difficulty) {
      return false;
    }
    
    return true;
  };

  const filteredSpecies = allSpecies.filter((s: Species) => {
    const matchesSearch = s.taxonomy.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.taxonomy.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilters = !showAdvancedFilters || applyFilters(s);
    
    return matchesSearch && matchesFilters;
  }).slice(0, 20);

  const filteredPlants = allPlants.filter((p: Plant) => 
    p.taxonomy.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.taxonomy.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 20);

  const filteredHardscape = HARDSCAPE_LIBRARY.filter(h => h.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const activeFilterCount = showAdvancedFilters ? (
    (filters.diet !== 'all' ? 1 : 0) +
    (filters.temperament !== 'all' ? 1 : 0) +
    (filters.difficulty !== 'all' ? 1 : 0) +
    (filters.maxSize !== 15 ? 1 : 0) +
    (filters.tempMin !== 20 || filters.tempMax !== 28 ? 1 : 0) +
    (filters.phMin !== 6.0 || filters.phMax !== 8.0 ? 1 : 0)
  ) : 0;

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

      <div className="p-4 space-y-3">
        <input 
          type="text" 
          placeholder={`Search ${selectedTab}...`} 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" 
        />

        {/* Advanced Filters Toggle (Only for Fish) */}
        {selectedTab === 'fish' && (
          <div>
            <button
              onClick={onToggleAdvancedFilters}
              className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 border-2 border-indigo-200 rounded-xl transition-all font-semibold text-sm text-indigo-900"
            >
              <span className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Advanced Filters
                {activeFilterCount > 0 && (
                  <span className="bg-indigo-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showAdvancedFilters ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showAdvancedFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                    {/* Temperature Range */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 mb-2 block">
                        🌡️ Temperature: {filters.tempMin}°C - {filters.tempMax}°C
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="range"
                          min="15"
                          max="30"
                          value={filters.tempMin}
                          onChange={(e) => onFiltersChange({ ...filters, tempMin: Number(e.target.value) })}
                          className="flex-1"
                        />
                        <input
                          type="range"
                          min="15"
                          max="30"
                          value={filters.tempMax}
                          onChange={(e) => onFiltersChange({ ...filters, tempMax: Number(e.target.value) })}
                          className="flex-1"
                        />
                      </div>
                    </div>

                    {/* pH Range */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 mb-2 block">
                        💧 pH: {filters.phMin.toFixed(1)} - {filters.phMax.toFixed(1)}
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="range"
                          min="5.0"
                          max="9.0"
                          step="0.1"
                          value={filters.phMin}
                          onChange={(e) => onFiltersChange({ ...filters, phMin: Number(e.target.value) })}
                          className="flex-1"
                        />
                        <input
                          type="range"
                          min="5.0"
                          max="9.0"
                          step="0.1"
                          value={filters.phMax}
                          onChange={(e) => onFiltersChange({ ...filters, phMax: Number(e.target.value) })}
                          className="flex-1"
                        />
                      </div>
                    </div>

                    {/* Max Size */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 mb-2 block">
                        📏 Max Size: {filters.maxSize}cm
                      </label>
                      <input
                        type="range"
                        min="2"
                        max="30"
                        value={filters.maxSize}
                        onChange={(e) => onFiltersChange({ ...filters, maxSize: Number(e.target.value) })}
                        className="w-full"
                      />
                    </div>

                    {/* Diet */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 mb-2 block">🍽️ Diet</label>
                      <select
                        value={filters.diet}
                        onChange={(e) => onFiltersChange({ ...filters, diet: e.target.value as any })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                      >
                        <option value="all">All Diets</option>
                        <option value="omnivore">Omnivore</option>
                        <option value="carnivore">Carnivore</option>
                        <option value="herbivore">Herbivore</option>
                      </select>
                    </div>

                    {/* Temperament */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 mb-2 block">😊 Temperament</label>
                      <select
                        value={filters.temperament}
                        onChange={(e) => onFiltersChange({ ...filters, temperament: e.target.value as any })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                      >
                        <option value="all">All Temperaments</option>
                        <option value="peaceful">Peaceful Only</option>
                        <option value="semi-aggressive">Semi-Aggressive</option>
                      </select>
                    </div>

                    {/* Difficulty */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 mb-2 block">⭐ Care Level</label>
                      <select
                        value={filters.difficulty}
                        onChange={(e) => onFiltersChange({ ...filters, difficulty: e.target.value as any })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                      >
                        <option value="all">All Levels</option>
                        <option value="beginner">Beginner</option>
                        <option value="medium">Medium</option>
                        <option value="expert">Expert</option>
                      </select>
                    </div>

                    {/* Reset Button */}
                    <button
                      onClick={() => onFiltersChange({
                        tempMin: 20,
                        tempMax: 28,
                        phMin: 6.0,
                        phMax: 8.0,
                        maxSize: 15,
                        diet: 'all',
                        temperament: 'all',
                        difficulty: 'all'
                      })}
                      className="w-full px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-lg transition-colors text-sm"
                    >
                      Reset Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      <div className="px-4 pb-4">
        {selectedTab === 'fish' && filteredSpecies.length === 0 && (
          <div className="text-center py-8 text-slate-500">
            <p className="font-bold">No fish match your filters</p>
            <p className="text-sm">Try adjusting your filter settings</p>
          </div>
        )}
      </div>

      <div className="p-4 pt-0 max-h-[400px] overflow-y-auto">
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
