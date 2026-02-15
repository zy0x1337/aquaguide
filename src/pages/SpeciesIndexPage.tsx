import { useState, useMemo, Suspense, lazy } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, AlertCircle, Filter, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { allSpecies } from '../data/species';
import { SEOHead } from '../components/seo/SEOHead';
import { SpeciesGridSkeleton } from '../components/ui/Skeleton';
import { PageTransition } from '../components/layout/PageTransition';
import type { Difficulty, Species } from '../types/species';

const SpeciesCard = lazy(() => import('../components/species/SpeciesCard').then(module => ({ default: module.SpeciesCard })));

interface AdvancedFilters {
  tempMin: number;
  tempMax: number;
  phMin: number;
  phMax: number;
  maxSize: number;
  diet: 'all' | 'carnivore' | 'herbivore' | 'omnivore';
  temperament: 'all' | 'peaceful' | 'semi-aggressive';
  difficulty: Difficulty | 'all';
}

const SpeciesIndexPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'name' | 'difficulty' | 'size'>('name');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  
  const [filters, setFilters] = useState<AdvancedFilters>({
    tempMin: 15,
    tempMax: 30,
    phMin: 5.0,
    phMax: 9.0,
    maxSize: 30,
    diet: 'all',
    temperament: 'all',
    difficulty: 'all'
  });

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

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.diet !== 'all') count++;
    if (filters.temperament !== 'all') count++;
    if (filters.difficulty !== 'all') count++;
    if (filters.maxSize !== 30) count++;
    if (filters.tempMin !== 15 || filters.tempMax !== 30) count++;
    if (filters.phMin !== 5.0 || filters.phMax !== 9.0) count++;
    return count;
  }, [filters]);

  const filteredSpecies = useMemo(() => {
    return allSpecies
      .filter((s: Species) => {
        const matchesSearch = s.taxonomy.commonName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              s.taxonomy.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilters = !showAdvancedFilters || applyFilters(s);
        return matchesSearch && matchesFilters;
      })
      .sort((a: Species, b: Species) => {
        if (sortOrder === 'name') return a.taxonomy.commonName.localeCompare(b.taxonomy.commonName);
        if (sortOrder === 'size') return a.visuals.adultSizeCM - b.visuals.adultSizeCM;
        const diffMap: Record<Difficulty, number> = { beginner: 0, medium: 1, expert: 2 };
        return diffMap[a.care.difficulty] - diffMap[b.care.difficulty];
      });
  }, [searchTerm, filters, sortOrder, showAdvancedFilters]);

  const resetFilters = () => {
    setFilters({
      tempMin: 15,
      tempMax: 30,
      phMin: 5.0,
      phMax: 9.0,
      maxSize: 30,
      diet: 'all',
      temperament: 'all',
      difficulty: 'all'
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 dark:bg-stone-950 pb-20 transition-colors duration-300">
        <SEOHead 
          title="Species Database - AquaGuide" 
          description="Browse our complete collection of aquarium fish and invertebrates."
        />

        <div className="bg-white dark:bg-stone-900 border-b border-slate-200 dark:border-stone-800 pt-24 pb-12 px-6 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
              Species <span className="text-indigo-600 dark:text-indigo-400">Index</span>
            </h1>
            <p className="text-slate-500 dark:text-stone-400 text-lg max-w-2xl">
              Explore our complete database of {allSpecies.length} documented species.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 -mt-8">
          {/* Search Bar */}
          <div className="bg-white dark:bg-stone-900 rounded-xl shadow-lg border border-slate-100 dark:border-stone-800 p-4 mb-4 transition-colors duration-300">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by name or scientific name..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-stone-800 border border-slate-200 dark:border-stone-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-colors dark:text-white"
              />
            </div>
          </div>

          {/* Filter Controls */}
          <div className="bg-white dark:bg-stone-900 rounded-xl shadow-lg border border-slate-100 dark:border-stone-800 p-4 mb-6 transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Advanced Filters Toggle */}
              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="w-full md:w-auto flex items-center justify-between md:justify-start gap-2 px-4 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 hover:from-indigo-100 hover:to-blue-100 dark:hover:from-indigo-950/50 dark:hover:to-blue-950/50 border-2 border-indigo-200 dark:border-indigo-800 rounded-xl transition-all font-semibold text-sm text-indigo-900 dark:text-indigo-300"
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

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-3 w-full md:w-auto">
                <button 
                  onClick={() => setSortOrder(prev => prev === 'name' ? 'difficulty' : prev === 'difficulty' ? 'size' : 'name')}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-stone-800 hover:bg-slate-100 dark:hover:bg-stone-700 border border-slate-200 dark:border-stone-700 rounded-lg text-sm font-bold text-slate-700 dark:text-stone-300 transition-colors whitespace-nowrap"
                >
                  <ArrowUpDown className="w-4 h-4" />
                  {sortOrder === 'name' ? 'Name' : sortOrder === 'difficulty' ? 'Difficulty' : 'Size'}
                </button>

                {activeFilterCount > 0 && (
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-2 px-4 py-2 bg-rose-50 dark:bg-rose-950/30 hover:bg-rose-100 dark:hover:bg-rose-950/50 border border-rose-200 dark:border-rose-800 rounded-lg text-sm font-bold text-rose-700 dark:text-rose-300 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Clear Filters
                  </button>
                )}
              </div>
            </div>

            {/* Advanced Filters Panel */}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Temperature Range */}
                      <div className="bg-slate-50 dark:bg-stone-800 rounded-lg p-4 border border-slate-200 dark:border-stone-700">
                        <label className="text-xs font-bold text-slate-700 dark:text-stone-300 mb-2 block">
                          🌡️ Temperature: {filters.tempMin}°C - {filters.tempMax}°C
                        </label>
                        <div className="space-y-2">
                          <input
                            type="range"
                            min="15"
                            max="30"
                            value={filters.tempMin}
                            onChange={(e) => setFilters({ ...filters, tempMin: Number(e.target.value) })}
                            className="w-full"
                          />
                          <input
                            type="range"
                            min="15"
                            max="30"
                            value={filters.tempMax}
                            onChange={(e) => setFilters({ ...filters, tempMax: Number(e.target.value) })}
                            className="w-full"
                          />
                        </div>
                      </div>

                      {/* pH Range */}
                      <div className="bg-slate-50 dark:bg-stone-800 rounded-lg p-4 border border-slate-200 dark:border-stone-700">
                        <label className="text-xs font-bold text-slate-700 dark:text-stone-300 mb-2 block">
                          💧 pH: {filters.phMin.toFixed(1)} - {filters.phMax.toFixed(1)}
                        </label>
                        <div className="space-y-2">
                          <input
                            type="range"
                            min="5.0"
                            max="9.0"
                            step="0.1"
                            value={filters.phMin}
                            onChange={(e) => setFilters({ ...filters, phMin: Number(e.target.value) })}
                            className="w-full"
                          />
                          <input
                            type="range"
                            min="5.0"
                            max="9.0"
                            step="0.1"
                            value={filters.phMax}
                            onChange={(e) => setFilters({ ...filters, phMax: Number(e.target.value) })}
                            className="w-full"
                          />
                        </div>
                      </div>

                      {/* Max Size */}
                      <div className="bg-slate-50 dark:bg-stone-800 rounded-lg p-4 border border-slate-200 dark:border-stone-700">
                        <label className="text-xs font-bold text-slate-700 dark:text-stone-300 mb-2 block">
                          📏 Max Size: {filters.maxSize}cm
                        </label>
                        <input
                          type="range"
                          min="2"
                          max="30"
                          value={filters.maxSize}
                          onChange={(e) => setFilters({ ...filters, maxSize: Number(e.target.value) })}
                          className="w-full"
                        />
                      </div>

                      {/* Diet */}
                      <div className="bg-slate-50 dark:bg-stone-800 rounded-lg p-4 border border-slate-200 dark:border-stone-700">
                        <label className="text-xs font-bold text-slate-700 dark:text-stone-300 mb-2 block">🍽️ Diet</label>
                        <select
                          value={filters.diet}
                          onChange={(e) => setFilters({ ...filters, diet: e.target.value as any })}
                          className="w-full px-3 py-2 bg-white dark:bg-stone-900 border border-slate-300 dark:border-stone-600 rounded-lg text-sm dark:text-white"
                        >
                          <option value="all">All Diets</option>
                          <option value="omnivore">Omnivore</option>
                          <option value="carnivore">Carnivore</option>
                          <option value="herbivore">Herbivore</option>
                        </select>
                      </div>

                      {/* Temperament */}
                      <div className="bg-slate-50 dark:bg-stone-800 rounded-lg p-4 border border-slate-200 dark:border-stone-700">
                        <label className="text-xs font-bold text-slate-700 dark:text-stone-300 mb-2 block">😊 Temperament</label>
                        <select
                          value={filters.temperament}
                          onChange={(e) => setFilters({ ...filters, temperament: e.target.value as any })}
                          className="w-full px-3 py-2 bg-white dark:bg-stone-900 border border-slate-300 dark:border-stone-600 rounded-lg text-sm dark:text-white"
                        >
                          <option value="all">All Temperaments</option>
                          <option value="peaceful">Peaceful Only</option>
                          <option value="semi-aggressive">Semi-Aggressive</option>
                        </select>
                      </div>

                      {/* Difficulty */}
                      <div className="bg-slate-50 dark:bg-stone-800 rounded-lg p-4 border border-slate-200 dark:border-stone-700">
                        <label className="text-xs font-bold text-slate-700 dark:text-stone-300 mb-2 block">⭐ Care Level</label>
                        <select
                          value={filters.difficulty}
                          onChange={(e) => setFilters({ ...filters, difficulty: e.target.value as any })}
                          className="w-full px-3 py-2 bg-white dark:bg-stone-900 border border-slate-300 dark:border-stone-600 rounded-lg text-sm dark:text-white"
                        >
                          <option value="all">All Levels</option>
                          <option value="beginner">Beginner</option>
                          <option value="medium">Medium</option>
                          <option value="expert">Expert</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Results Count */}
          <div className="mb-4 text-sm text-slate-600 dark:text-stone-400">
            Showing <span className="font-bold text-indigo-600 dark:text-indigo-400">{filteredSpecies.length}</span> of {allSpecies.length} species
          </div>

          {/* Species Grid */}
          {filteredSpecies.length > 0 ? (
            <Suspense fallback={<SpeciesGridSkeleton />}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredSpecies.map((s: Species) => <SpeciesCard key={s.id} data={s} />)}
              </div>
            </Suspense>
          ) : (
            <div className="text-center py-24">
              <div className="inline-block p-4 rounded-full bg-slate-100 dark:bg-stone-800 mb-4">
                <AlertCircle className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No species found</h3>
              <p className="text-slate-500 dark:text-stone-400">Try adjusting your filters or search term.</p>
              {activeFilterCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default SpeciesIndexPage;