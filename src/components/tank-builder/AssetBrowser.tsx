import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fish as FishIcon, Leaf, Mountain, Plus, Filter, ChevronDown, Loader2 } from 'lucide-react';
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

const ITEMS_PER_PAGE = 20;

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
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Reset display count when tab or search changes
  useEffect(() => {
    setDisplayCount(ITEMS_PER_PAGE);
  }, [selectedTab, searchTerm, filters]);

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

  // Full filtered lists (no slicing)
  const allFilteredSpecies = allSpecies.filter((s: Species) => {
    const matchesSearch = s.taxonomy.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.taxonomy.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilters = !showAdvancedFilters || applyFilters(s);
    
    return matchesSearch && matchesFilters;
  });

  const allFilteredPlants = allPlants.filter((p: Plant) => 
    p.taxonomy.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.taxonomy.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const allFilteredHardscape = HARDSCAPE_LIBRARY.filter(h => h.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Get currently displayed items
  const displayedSpecies = allFilteredSpecies.slice(0, displayCount);
  const displayedPlants = allFilteredPlants.slice(0, displayCount);
  const displayedHardscape = allFilteredHardscape.slice(0, displayCount);

  // Check if there are more items to load
  const hasMoreSpecies = displayedSpecies.length < allFilteredSpecies.length;
  const hasMorePlants = displayedPlants.length < allFilteredPlants.length;
  const hasMoreHardscape = displayedHardscape.length < allFilteredHardscape.length;

  const hasMore = selectedTab === 'fish' ? hasMoreSpecies : 
                  selectedTab === 'plant' ? hasMorePlants : hasMoreHardscape;

  // Load more items
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount(prev => prev + ITEMS_PER_PAGE);
      setIsLoading(false);
    }, 300); // Simulate loading delay
  }, [isLoading, hasMore]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, loadMore]);

  const activeFilterCount = showAdvancedFilters ? (
    (filters.diet !== 'all' ? 1 : 0) +
    (filters.temperament !== 'all' ? 1 : 0) +
    (filters.difficulty !== 'all' ? 1 : 0) +
    (filters.maxSize !== 15 ? 1 : 0) +
    (filters.tempMin !== 20 || filters.tempMax !== 28 ? 1 : 0) +
    (filters.phMin !== 6.0 || filters.phMax !== 8.0 ? 1 : 0)
  ) : 0;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
      <div className="flex border-b border-slate-200 dark:border-slate-800">
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
          className="w-full px-4 py-3 border-2 border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" 
        />

        {/* Advanced Filters Toggle (Only for Fish) */}
        {selectedTab === 'fish' && (
          <div>
            <button
              onClick={onToggleAdvancedFilters}
              className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 hover:from-indigo-100 hover:to-blue-100 dark:hover:from-indigo-950/50 dark:hover:to-blue-950/50 border-2 border-indigo-200 dark:border-indigo-800 rounded-xl transition-all font-semibold text-sm text-indigo-900 dark:text-indigo-300"
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
                  <div className="mt-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4">
                    {/* Temperature Range */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 block">
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
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 block">
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
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 block">
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
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 block">🍽️ Diet</label>
                      <select
                        value={filters.diet}
                        onChange={(e) => onFiltersChange({ ...filters, diet: e.target.value as any })}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white rounded-lg text-sm"
                      >
                        <option value="all">All Diets</option>
                        <option value="omnivore">Omnivore</option>
                        <option value="carnivore">Carnivore</option>
                        <option value="herbivore">Herbivore</option>
                      </select>
                    </div>

                    {/* Temperament */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 block">😊 Temperament</label>
                      <select
                        value={filters.temperament}
                        onChange={(e) => onFiltersChange({ ...filters, temperament: e.target.value as any })}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white rounded-lg text-sm"
                      >
                        <option value="all">All Temperaments</option>
                        <option value="peaceful">Peaceful Only</option>
                        <option value="semi-aggressive">Semi-Aggressive</option>
                      </select>
                    </div>

                    {/* Difficulty */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 block">⭐ Care Level</label>
                      <select
                        value={filters.difficulty}
                        onChange={(e) => onFiltersChange({ ...filters, difficulty: e.target.value as any })}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white rounded-lg text-sm"
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
                      className="w-full px-3 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 font-bold rounded-lg transition-colors text-sm"
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

      <div className="px-4 pb-2">
        {selectedTab === 'fish' && allFilteredSpecies.length === 0 && (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400">
            <p className="font-bold">No fish match your filters</p>
            <p className="text-sm">Try adjusting your filter settings</p>
          </div>
        )}
        {selectedTab === 'plant' && allFilteredPlants.length === 0 && (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400">
            <p className="font-bold">No plants found</p>
            <p className="text-sm">Try a different search term</p>
          </div>
        )}
        {selectedTab === 'hardscape' && allFilteredHardscape.length === 0 && (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400">
            <p className="font-bold">No hardscape items found</p>
            <p className="text-sm">Try a different search term</p>
          </div>
        )}
      </div>

      <div className="p-4 pt-0 max-h-[500px] overflow-y-auto">
        {selectedTab === 'fish' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {displayedSpecies.map((species: Species) => (
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
            
            {/* Loading indicator and observer target */}
            <div ref={observerTarget} className="py-4">
              {isLoading && (
                <div className="flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="text-sm font-semibold">Loading more fish...</span>
                </div>
              )}
              {!hasMore && displayedSpecies.length > 0 && (
                <p className="text-center text-sm text-slate-500 dark:text-slate-400 font-semibold">
                  All {allFilteredSpecies.length} fish loaded
                </p>
              )}
            </div>
          </div>
        )}
        {selectedTab === 'plant' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {displayedPlants.map((plant: Plant) => (
                <ItemCard 
                  key={plant.id} 
                  name={plant.taxonomy.commonName} 
                  image={plant.imageUrl} 
                  subtitle={`${plant.specs.heightCM.max}cm • ${plant.specs.growthRate}`} 
                  onClick={() => onAddItem(plant, 'plant')} 
                />
              ))}
            </div>
            
            {/* Loading indicator and observer target */}
            <div ref={observerTarget} className="py-4">
              {isLoading && (
                <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="text-sm font-semibold">Loading more plants...</span>
                </div>
              )}
              {!hasMore && displayedPlants.length > 0 && (
                <p className="text-center text-sm text-slate-500 dark:text-slate-400 font-semibold">
                  All {allFilteredPlants.length} plants loaded
                </p>
              )}
            </div>
          </div>
        )}
        {selectedTab === 'hardscape' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {displayedHardscape.map((item: HardscapeItem) => (
                <HardscapeCard 
                  key={item.id} 
                  item={item} 
                  onClick={() => onAddItem(item, 'hardscape')} 
                />
              ))}
            </div>
            
            {/* Loading indicator and observer target */}
            <div ref={observerTarget} className="py-4">
              {isLoading && (
                <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="text-sm font-semibold">Loading more items...</span>
                </div>
              )}
              {!hasMore && displayedHardscape.length > 0 && (
                <p className="text-center text-sm text-slate-500 dark:text-slate-400 font-semibold">
                  All {allFilteredHardscape.length} items loaded
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, label, count, color }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string; count: number; color: 'indigo' | 'emerald' | 'amber'; }) => {
  const colors = { 
    indigo: active ? 'text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/30' : '', 
    emerald: active ? 'text-emerald-600 dark:text-emerald-400 border-emerald-600 dark:border-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30' : '', 
    amber: active ? 'text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-400 bg-amber-50/50 dark:bg-amber-950/30' : '' 
  };
  return (
    <button 
      onClick={onClick} 
      className={`flex-1 px-6 py-4 font-bold text-sm transition-all flex items-center justify-center gap-2 ${
        active 
          ? `${colors[color]} border-b-2` 
          : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
      }`}
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
    className={`group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 hover:from-white hover:to-slate-50 dark:hover:from-slate-700 dark:hover:to-slate-800 border-2 rounded-xl overflow-hidden transition-all shadow-md hover:shadow-xl ${
      warning ? 'border-rose-300 dark:border-rose-700' : 'border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600'
    }`}
  >
    {warning && (
      <div className="absolute top-2 left-2 z-10 bg-rose-500 text-white px-2 py-1 rounded-md text-[10px] font-bold">Too big!</div>
    )}
    <div className="aspect-square bg-slate-200 dark:bg-slate-700 overflow-hidden">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500">
          <FishIcon className="w-10 h-10" />
        </div>
      )}
    </div>
    <div className="p-3">
      <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{name}</p>
      {subtitle && <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{subtitle}</p>}
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
    className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 hover:from-white hover:to-slate-50 dark:hover:from-slate-700 dark:hover:to-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-600 rounded-xl overflow-hidden transition-all shadow-md hover:shadow-xl"
  >
    <div className="aspect-square overflow-hidden flex items-center justify-center text-5xl" style={{ backgroundColor: item.color + '15' }}>
      {item.icon}
    </div>
    <div className="p-3">
      <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{item.name}</p>
      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{item.size}cm</p>
    </div>
    <div className="absolute top-2 right-2 w-7 h-7 bg-amber-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg">
      <Plus className="w-4 h-4" />
    </div>
  </motion.button>
);
