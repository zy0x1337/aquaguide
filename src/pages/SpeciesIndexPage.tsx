import { useState, useMemo, Suspense, lazy } from 'react';
import { Search, SlidersHorizontal, Fish, Globe2, Activity, Box, Droplets, PawPrint, X, Filter, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Fuse from 'fuse.js';
import { allSpecies } from '../data/species';
import { searchBiotopes } from '../data/biotopes';
import { SEOHead } from '../components/seo/SEOHead';
import { SpeciesGridSkeleton } from '../components/ui/Skeleton';
import { FilterBadge } from '../components/ui/FilterBadge';
import { PageTransition } from '../components/layout/PageTransition';
import { cn } from '../lib/utils';
import type { Difficulty, Species, Region } from '../types/species';

const SpeciesCard = lazy(() => import('../components/species/SpeciesCard').then(module => ({ default: module.SpeciesCard })));

interface Filters {
  // Basic Filters
  level: Difficulty | null;
  region: Region | null;
  tankSize: number | null;
  biotope: string;
  type: 'fish' | 'invertebrate' | null;

  // Advanced Filters
  tempMin: number;
  tempMax: number;
  phMin: number;
  phMax: number;
  maxBodySize: number;
  diet: 'all' | 'carnivore' | 'herbivore' | 'omnivore';
  temperament: 'all' | 'peaceful' | 'semi-aggressive';
}

const SpeciesIndexPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [biotopeSuggestions, setBiotopeSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const [filters, setFilters] = useState<Filters>({
    level: null,
    region: null,
    tankSize: null,
    biotope: '',
    type: null,
    tempMin: 15,
    tempMax: 30,
    phMin: 5.0,
    phMax: 9.0,
    maxBodySize: 30,
    diet: 'all',
    temperament: 'all'
  });

  // Fuse.js configuration for fuzzy search
  const fuse = useMemo(() => {
    return new Fuse(allSpecies, {
      keys: [
        { name: 'taxonomy.commonName', weight: 2 },
        { name: 'taxonomy.scientificName', weight: 1.5 },
        { name: 'behavior.description', weight: 0.5 },
        { name: 'behavior.tags', weight: 1 },
        { name: 'taxonomy.origin', weight: 0.3 }
      ],
      threshold: 0.3, // 0 = exact match, 1 = match anything
      ignoreLocation: true,
      useExtendedSearch: true
    });
  }, []);

  const applyFilters = (species: Species): boolean => {
    // Basic Filters
    if (filters.level && species.care.difficulty !== filters.level) return false;
    if (filters.region && species.taxonomy.region !== filters.region) return false;
    if (filters.tankSize && species.environment.minTankSizeLiters > filters.tankSize) return false;
    
    // Biotope filter
    if (filters.biotope) {
      const bio = (species.taxonomy.biotope || '').toLowerCase();
      const term = filters.biotope.toLowerCase();
      if (!bio.includes(term)) return false;
    }

    // Type filter
    if (filters.type) {
      const isShrimp = species.visuals.iconShape === 'shrimp';
      if (filters.type === 'invertebrate' && !isShrimp) return false;
      if (filters.type === 'fish' && isShrimp) return false;
    }

    // Advanced Filters
    if (showAdvancedFilters) {
      if (species.environment.tempC.min > filters.tempMax || species.environment.tempC.max < filters.tempMin) return false;
      if (species.environment.ph.min > filters.phMax || species.environment.ph.max < filters.phMin) return false;
      if (species.visuals.adultSizeCM > filters.maxBodySize) return false;
      if (filters.diet !== 'all' && species.care.diet !== filters.diet) return false;
      if (filters.temperament !== 'all') {
        if (filters.temperament === 'peaceful' && !species.behavior.tags.includes('peaceful')) return false;
        if (filters.temperament === 'semi-aggressive' && !species.behavior.tags.includes('semi-aggressive')) return false;
      }
    }
    
    return true;
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.level) count++;
    if (filters.region) count++;
    if (filters.tankSize) count++;
    if (filters.biotope) count++;
    if (filters.type) count++;
    if (showAdvancedFilters) {
      if (filters.diet !== 'all') count++;
      if (filters.temperament !== 'all') count++;
      if (filters.maxBodySize !== 30) count++;
      if (filters.tempMin !== 15 || filters.tempMax !== 30) count++;
      if (filters.phMin !== 5.0 || filters.phMax !== 9.0) count++;
    }
    return count;
  }, [filters, showAdvancedFilters]);

  // Enhanced search with Fuse.js
  const filteredSpecies = useMemo(() => {
    let results: Species[] = allSpecies;

    // Apply fuzzy search if search term exists
    if (searchTerm.trim()) {
      results = fuse.search(searchTerm).map(r => r.item);
    }

    // Apply filters to search results
    return results.filter(applyFilters);
  }, [searchTerm, filters, showAdvancedFilters, fuse]);

  const resetFilters = () => {
    setFilters({
      level: null,
      region: null,
      tankSize: null,
      biotope: '',
      type: null,
      tempMin: 15,
      tempMax: 30,
      phMin: 5.0,
      phMax: 9.0,
      maxBodySize: 30,
      diet: 'all',
      temperament: 'all'
    });
    setSearchTerm('');
    setShowAdvancedFilters(false);
  };

  const handleBiotopeInput = (value: string) => {
    setFilters({ ...filters, biotope: value });
    if (value.length >= 2) {
      const matches = searchBiotopes(value, 6);
      setBiotopeSuggestions(matches);
      setShowSuggestions(matches.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const selectBiotope = (biotope: any) => {
    setFilters({ ...filters, biotope: biotope.label });
    setShowSuggestions(false);
  };

  const activeFilters = [
    filters.level && { key: 'difficulty', label: 'Level', value: filters.level, clear: () => setFilters({ ...filters, level: null }) },
    filters.region && { key: 'region', label: 'Region', value: filters.region, clear: () => setFilters({ ...filters, region: null }) },
    filters.tankSize && { key: 'tank', label: 'Tank', value: `≤${filters.tankSize}L`, clear: () => setFilters({ ...filters, tankSize: null }) },
    filters.biotope && { key: 'biotope', label: 'Biotope', value: filters.biotope, clear: () => setFilters({ ...filters, biotope: '' }) },
    filters.type && { key: 'category', label: 'Type', value: filters.type, clear: () => setFilters({ ...filters, type: null }) },
  ].filter(Boolean);

  const hasActiveFilters = activeFilters.length > 0 || searchTerm;
  const regions: Region[] = ['South America', 'Asia', 'Africa', 'Central America'];

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 dark:bg-stone-950 pb-20 transition-colors duration-300">
        <SEOHead 
          title="Species Database - AquaGuide" 
          description="Browse our complete collection of aquarium fish and invertebrates. Fuzzy search with typo tolerance."
        />

        {/* Centered Header */}
        <div className="bg-white dark:bg-stone-900 border-b border-slate-200 dark:border-stone-800 pt-24 pb-12 px-6 transition-colors duration-300">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
              Species <span className="text-indigo-600 dark:text-indigo-400">Database</span>
            </h1>
            <p className="text-slate-500 dark:text-stone-400 text-lg mb-8">
              Explore our complete database of {allSpecies.length} documented species.
            </p>

            {/* Enhanced Search Bar with Fuzzy Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative flex items-center bg-slate-50 dark:bg-stone-800 rounded-2xl p-2 shadow-lg border border-slate-200 dark:border-stone-700">
                  <div className="pl-3 text-slate-400">
                    <Search className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search species... (typo-tolerant!)" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 text-slate-900 dark:text-white placeholder:text-slate-400 bg-transparent border-none focus:ring-0 outline-none"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="mr-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                      aria-label="Clear search"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
              {searchTerm && (
                <p className="text-xs text-slate-500 dark:text-stone-400 mt-2 italic">
                  💡 Fuzzy search active - finds results even with typos
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 -mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar Filters */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-stone-800 sticky top-24 transition-colors duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-slate-900 dark:text-white flex items-center">
                    <SlidersHorizontal className="w-5 h-5 mr-2 text-indigo-500" /> Filters
                  </h3>
                  {hasActiveFilters && (
                    <button onClick={resetFilters} className="text-xs text-rose-500 font-bold hover:underline">
                      Reset
                    </button>
                  )}
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
                      <Activity className="w-3 h-3 mr-1.5" /> Level
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <FilterChip label="Beginner" isActive={filters.level === 'beginner'} onClick={() => setFilters({ ...filters, level: filters.level === 'beginner' ? null : 'beginner' })} colorClass="text-emerald-700 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20" activeClass="bg-emerald-500 text-white border-emerald-600" />
                      <FilterChip label="Medium" isActive={filters.level === 'medium'} onClick={() => setFilters({ ...filters, level: filters.level === 'medium' ? null : 'medium' })} colorClass="text-amber-700 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400 border-amber-100 dark:border-amber-500/20" activeClass="bg-amber-500 text-white border-amber-600" />
                      <FilterChip label="Expert" isActive={filters.level === 'expert'} onClick={() => setFilters({ ...filters, level: filters.level === 'expert' ? null : 'expert' })} colorClass="text-rose-700 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400 border-rose-100 dark:border-rose-500/20" activeClass="bg-rose-500 text-white border-rose-600" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
                      <Globe2 className="w-3 h-3 mr-1.5" /> Region
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {regions.map(region => (
                        <FilterChip 
                          key={region}
                          label={region} 
                          isActive={filters.region === region} 
                          onClick={() => setFilters({ ...filters, region: filters.region === region ? null : region })} 
                        />
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-stone-800 space-y-6">
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
                          <Box className="w-3 h-3 mr-1.5" /> Size
                        </label>
                        <select 
                          className="w-full bg-slate-50 dark:bg-stone-800 border border-slate-200 dark:border-stone-700 text-slate-700 dark:text-stone-300 text-sm rounded-lg p-2.5 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                          value={filters.tankSize || ''}
                          onChange={(e) => setFilters({ ...filters, tankSize: e.target.value === '' ? null : Number(e.target.value) })}
                        >
                          <option value="">Any Tank Size</option>
                          <option value="30">Max 30 Liters (Nano)</option>
                          <option value="60">Max 60 Liters (Standard)</option>
                          <option value="120">Max 120 Liters</option>
                          <option value="200">Max 200 Liters</option>
                        </select>
                      </div>

                      <div className="space-y-3 relative">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
                          <Droplets className="w-3 h-3 mr-1.5" /> Biotope
                        </label>
                        <input 
                          type="text" 
                          value={filters.biotope}
                          onChange={(e) => handleBiotopeInput(e.target.value)}
                          onFocus={() => filters.biotope.length >= 2 && setShowSuggestions(true)}
                          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                          placeholder="e.g. 'Mekong'..."
                          className="w-full bg-slate-50 dark:bg-stone-800 border border-slate-200 dark:border-stone-700 text-slate-700 dark:text-stone-300 text-sm rounded-lg p-2.5 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                        />
                        
                        {showSuggestions && biotopeSuggestions.length > 0 && (
                          <div className="absolute z-50 w-full bg-white dark:bg-stone-800 border border-slate-200 dark:border-stone-700 rounded-lg shadow-xl mt-1 max-h-60 overflow-y-auto">
                            {biotopeSuggestions.map((b) => (
                              <button
                                key={b.id}
                                onClick={() => selectBiotope(b)}
                                className="w-full text-left px-4 py-3 hover:bg-indigo-50 dark:hover:bg-stone-700 transition-colors border-b border-slate-100 dark:border-stone-700 last:border-0 group"
                              >
                                <div className="font-bold text-slate-800 dark:text-stone-200 text-sm group-hover:text-indigo-700 dark:group-hover:text-indigo-400">{b.label}</div>
                                <div className="text-xs text-slate-500 dark:text-stone-400 truncate">{b.description}</div>
                              </button>
                            ))}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 pt-1">
                          {['Blackwater', 'Amazon', 'Rice Paddies'].map(tag => (
                            <button 
                              key={tag}
                              onClick={() => setFilters({ ...filters, biotope: tag })}
                              className="px-2.5 py-1 bg-slate-100 dark:bg-stone-800 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 text-slate-600 dark:text-stone-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-[10px] font-bold uppercase rounded-lg border border-slate-200 dark:border-stone-700 transition-all whitespace-nowrap"
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
                          <PawPrint className="w-3 h-3 mr-1.5" /> Type
                        </label>
                        <div className="flex flex-wrap gap-2">
                          <FilterChip label="Fish" isActive={filters.type === 'fish'} onClick={() => setFilters({ ...filters, type: filters.type === 'fish' ? null : 'fish' })} />
                          <FilterChip label="Invertebrates" isActive={filters.type === 'invertebrate'} onClick={() => setFilters({ ...filters, type: filters.type === 'invertebrate' ? null : 'invertebrate' })} />
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Advanced Filters Toggle */}
              <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-slate-200 dark:border-stone-800 p-4 mb-6 transition-colors duration-300">
                <button
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 hover:from-indigo-100 hover:to-blue-100 dark:hover:from-indigo-950/50 dark:hover:to-blue-950/50 border-2 border-indigo-200 dark:border-indigo-800 rounded-xl transition-all font-semibold text-sm text-indigo-900 dark:text-indigo-300"
                >
                  <span className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Advanced Filters
                    {showAdvancedFilters && activeFilterCount > 5 && (
                      <span className="bg-indigo-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {activeFilterCount - 5}
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
                      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-stone-800">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          
                          <div>
                            <label className="text-xs font-bold text-slate-700 dark:text-stone-300 mb-2 block">
                              🌡️ Temperature: {filters.tempMin}°C - {filters.tempMax}°C
                            </label>
                            <div className="space-y-2">
                              <input type="range" min="15" max="30" value={filters.tempMin} onChange={(e) => setFilters({ ...filters, tempMin: Number(e.target.value) })} className="w-full accent-indigo-500" />
                              <input type="range" min="15" max="30" value={filters.tempMax} onChange={(e) => setFilters({ ...filters, tempMax: Number(e.target.value) })} className="w-full accent-indigo-500" />
                            </div>
                          </div>

                          <div>
                            <label className="text-xs font-bold text-slate-700 dark:text-stone-300 mb-2 block">
                              💧 pH: {filters.phMin.toFixed(1)} - {filters.phMax.toFixed(1)}
                            </label>
                            <div className="space-y-2">
                              <input type="range" min="5.0" max="9.0" step="0.1" value={filters.phMin} onChange={(e) => setFilters({ ...filters, phMin: Number(e.target.value) })} className="w-full accent-indigo-500" />
                              <input type="range" min="5.0" max="9.0" step="0.1" value={filters.phMax} onChange={(e) => setFilters({ ...filters, phMax: Number(e.target.value) })} className="w-full accent-indigo-500" />
                            </div>
                          </div>

                          <div>
                            <label className="text-xs font-bold text-slate-700 dark:text-stone-300 mb-2 block">
                              📏 Max Body Size: {filters.maxBodySize}cm
                            </label>
                            <input type="range" min="2" max="30" value={filters.maxBodySize} onChange={(e) => setFilters({ ...filters, maxBodySize: Number(e.target.value) })} className="w-full accent-indigo-500" />
                          </div>

                          <div>
                            <label className="text-xs font-bold text-slate-700 dark:text-stone-300 mb-1 block">Diet</label>
                            <select value={filters.diet} onChange={(e) => setFilters({ ...filters, diet: e.target.value as any })} className="w-full px-3 py-2 bg-slate-50 dark:bg-stone-800 border border-slate-200 dark:border-stone-700 rounded-lg text-sm dark:text-white focus:ring-2 focus:ring-indigo-500">
                              <option value="all">Any Diet</option>
                              <option value="omnivore">Omnivore</option>
                              <option value="carnivore">Carnivore</option>
                              <option value="herbivore">Herbivore</option>
                            </select>
                          </div>

                          <div>
                            <label className="text-xs font-bold text-slate-700 dark:text-stone-300 mb-1 block">Temperament</label>
                            <select value={filters.temperament} onChange={(e) => setFilters({ ...filters, temperament: e.target.value as any })} className="w-full px-3 py-2 bg-slate-50 dark:bg-stone-800 border border-slate-200 dark:border-stone-700 rounded-lg text-sm dark:text-white focus:ring-2 focus:ring-indigo-500">
                              <option value="all">Any Temperament</option>
                              <option value="peaceful">Peaceful Only</option>
                              <option value="semi-aggressive">Semi-Aggressive</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Active Filter Badges & Results */}
              <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-slate-200 dark:border-stone-800 p-4 mb-6 transition-colors duration-300">
                {activeFilters.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-slate-100 dark:border-stone-800">
                    {activeFilters.map((filter: any) => (
                      <FilterBadge key={filter.key} label={filter.label} value={filter.value} onRemove={filter.clear} />
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-800 dark:text-stone-100 flex items-center">
                    Found 
                    <span className="mx-2 px-3 py-1 bg-indigo-600 text-white rounded-lg font-black text-sm shadow-md">
                      {filteredSpecies.length}
                    </span> 
                    Species
                  </h2>
                  
                  {hasActiveFilters && (
                    <button onClick={resetFilters} className="text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 dark:bg-rose-500/10 dark:text-rose-400 dark:hover:bg-rose-500/20 px-3 py-2 rounded-lg transition-colors flex items-center border border-rose-100 dark:border-rose-500/20">
                      <X className="w-3.5 h-3.5 mr-1.5" /> Reset Filters
                    </button>
                  )}
                </div>
              </div>

              {/* Species Grid */}
              {filteredSpecies.length > 0 ? (
                <Suspense fallback={<SpeciesGridSkeleton />}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSpecies.map((s: Species) => <SpeciesCard key={s.id} data={s} />)}
                  </div>
                </Suspense>
              ) : (
                <div className="text-center py-20 bg-white dark:bg-stone-900 rounded-3xl border border-dashed border-slate-300 dark:border-stone-800">
                  <div className="animate-bounce-slow mb-4">
                    <div className="w-16 h-16 bg-slate-50 dark:bg-stone-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <Fish className="w-8 h-8 text-slate-300 dark:text-stone-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No swimmers found</h3>
                  <p className="text-slate-500 dark:text-stone-400 max-w-xs mx-auto mb-6">
                    No species match your criteria. Try adjusting your filters.
                  </p>
                  <button onClick={resetFilters} className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-lg">
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

const FilterChip = ({ label, isActive, onClick, colorClass = "text-slate-600 bg-slate-50 dark:text-stone-400 dark:bg-stone-800 border-slate-200 dark:border-stone-700 hover:bg-slate-100 dark:hover:bg-stone-700", activeClass = "bg-slate-800 text-white border-slate-900 dark:bg-stone-700 dark:text-white dark:border-stone-600 shadow-md" }: any) => (
  <button
    onClick={onClick}
    className={cn(
      "px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide border transition-all duration-200",
      isActive ? activeClass : colorClass
    )}
  >
    {label}
  </button>
);

export default SpeciesIndexPage;
