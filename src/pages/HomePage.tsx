import { useState, Suspense, lazy } from 'react';
import { Search, SlidersHorizontal, Fish, Globe2, Activity, Box, Droplets, PawPrint, X } from 'lucide-react';
import { speciesRepository } from '../data/species';
import { searchBiotopes } from '../data/biotopes';
import { useSpeciesSearch } from '../hooks/useSpeciesSearch';
import { SEOHead } from '../components/seo/SEOHead';
import { SpeciesGridSkeleton } from '../components/ui/Skeleton';
import { FilterBadge } from '../components/ui/FilterBadge';
import { useToast, Toast } from '../components/ui/Toast';
import { cn } from '../lib/utils';
import { Region } from '../types/species';

// Lazy load SpeciesCard for initial paint performance
const SpeciesCard = lazy(() => import('../components/species/SpeciesCard').then(module => ({ default: module.SpeciesCard })));

const HomePage = () => {
  const allSpecies = speciesRepository.getAll();
  
  const { 
    searchTerm, setSearchTerm,
    filterDifficulty, setFilterDifficulty,
    filterRegion, setFilterRegion,
    filterTankLiters, setFilterTankLiters,
    filterBiotopeTerm, setFilterBiotopeTerm,
    filterCategory, setFilterCategory,
    results, resultCount 
  } = useSpeciesSearch(allSpecies);

  // --- AUTOCOMPLETE STATE ---
  const [biotopeSuggestions, setBiotopeSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Toast System
  const { toasts, showToast, removeToast } = useToast();

  const handleBiotopeInput = (value: string) => {
    setFilterBiotopeTerm(value);
    if (value.length >= 2) {
      const matches = searchBiotopes(value, 6);
      setBiotopeSuggestions(matches);
      setShowSuggestions(matches.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const selectBiotope = (biotope: any) => {
    setFilterBiotopeTerm(biotope.label);
    setShowSuggestions(false);
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setFilterDifficulty(null);
    setFilterRegion(null);
    setFilterTankLiters(null);
    setFilterBiotopeTerm('');
    setFilterCategory(null);
    setShowSuggestions(false);
    showToast('All filters have been reset', 'info');
  };

  // Active Filters Array for Badges
  const activeFilters = [
    filterDifficulty && { key: 'difficulty', label: 'Level', value: filterDifficulty, clear: () => setFilterDifficulty(null) },
    filterRegion && { key: 'region', label: 'Region', value: filterRegion, clear: () => setFilterRegion(null) },
    filterTankLiters && { key: 'tank', label: 'Tank', value: `≤${filterTankLiters}L`, clear: () => setFilterTankLiters(null) },
    filterBiotopeTerm && { key: 'biotope', label: 'Biotope', value: filterBiotopeTerm, clear: () => setFilterBiotopeTerm('') },
    filterCategory && { key: 'category', label: 'Type', value: filterCategory, clear: () => setFilterCategory(null) },
  ].filter(Boolean);

  const hasActiveFilters = activeFilters.length > 0 || searchTerm;

  // Explicitly typed regions array to fix TS error
  const regions: Region[] = ['South America', 'Asia', 'Africa', 'Central America'];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-stone-950 font-sans pb-20 transition-colors duration-300">
      <SEOHead 
        title="AquaGuide - The Modern Aquarium Database"
        description="Find the perfect fish for your aquarium. Filter by tank size, parameters, and biotope."
      />

      {/* 🌟 HERO SECTION */}
      <section className="bg-slate-900 text-white pt-24 pb-20 px-4 md:px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-500 rounded-full blur-[80px] md:blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-emerald-500 rounded-full blur-[60px] md:blur-[100px] opacity-20 translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
            The Modern Aquarium Database
          </span>
          <h1 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 tracking-tight leading-none">
            Stop Guessing.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
              Start Scaping.
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
            Discover {allSpecies.length}+ detailed species profiles, scientifically accurate care guides, and biotope inspirations.
          </p>

          {/* MAIN SEARCH BAR */}
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative flex items-center bg-white dark:bg-stone-900 rounded-2xl p-1.5 md:p-2 shadow-xl border border-white/10 dark:border-stone-800">
              <div className="pl-3 md:pl-4 text-slate-400">
                <Search className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <input 
                type="text" 
                placeholder="Search for fish, shrimp, or snails..." 
                className="w-full p-3 md:p-4 text-base md:text-lg text-slate-900 dark:text-white placeholder:text-slate-400 bg-transparent border-none focus:ring-0 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-8 md:-mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* 🌟 ADVANCED FILTER SECTION */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-stone-900 p-5 md:p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-stone-800 sticky top-24 transition-colors duration-300">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-sm md:text-base">
                  <SlidersHorizontal className="w-4 h-4 md:w-5 md:h-5 mr-2 text-indigo-500" /> Filters
                </h3>
                {hasActiveFilters && (
                  <button onClick={clearAllFilters} className="text-xs text-rose-500 font-bold hover:underline">
                    Reset
                  </button>
                )}
              </div>
              
              <div className="space-y-6 md:space-y-8">
                {/* Row 1: Difficulty */}
                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
                    <Activity className="w-3 h-3 mr-1.5" /> Level
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <FilterChip label="Beginner" isActive={filterDifficulty === 'beginner'} onClick={() => setFilterDifficulty(filterDifficulty === 'beginner' ? null : 'beginner')} colorClass="text-emerald-700 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20" activeClass="bg-emerald-500 text-white border-emerald-600" />
                    <FilterChip label="Medium" isActive={filterDifficulty === 'medium'} onClick={() => setFilterDifficulty(filterDifficulty === 'medium' ? null : 'medium')} colorClass="text-amber-700 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400 border-amber-100 dark:border-amber-500/20" activeClass="bg-amber-500 text-white border-amber-600" />
                    <FilterChip label="Expert" isActive={filterDifficulty === 'expert'} onClick={() => setFilterDifficulty(filterDifficulty === 'expert' ? null : 'expert')} colorClass="text-rose-700 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400 border-rose-100 dark:border-rose-500/20" activeClass="bg-rose-500 text-white border-rose-600" />
                  </div>
                </div>

                {/* Row 2: Region */}
                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
                    <Globe2 className="w-3 h-3 mr-1.5" /> Region
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {regions.map(region => (
                      <FilterChip 
                        key={region}
                        label={region} 
                        isActive={filterRegion === region} 
                        onClick={() => setFilterRegion(filterRegion === region ? null : region)} 
                      />
                    ))}
                  </div>
                </div>

                {/* Row 3: Advanced (Tank, Biotope, Type) */}
                <div className="pt-6 border-t border-slate-100 dark:border-stone-800 space-y-6">
                    {/* Tank Size Filter */}
                    <div className="space-y-3">
                      <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
                        <Box className="w-3 h-3 mr-1.5" /> Size
                      </label>
                      <select 
                        className="w-full bg-slate-50 dark:bg-stone-800 border border-slate-200 dark:border-stone-700 text-slate-700 dark:text-stone-300 text-sm rounded-lg p-2.5 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                        value={filterTankLiters || ''}
                        onChange={(e) => setFilterTankLiters(e.target.value === '' ? null : Number(e.target.value))}
                      >
                        <option value="">Any Tank Size</option>
                        <option value="30">Max 30 Liters (Nano)</option>
                        <option value="60">Max 60 Liters (Standard)</option>
                        <option value="120">Max 120 Liters</option>
                        <option value="200">Max 200 Liters</option>
                      </select>
                    </div>

                    {/* Biotope Search */}
                    <div className="space-y-3 relative">
                      <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
                        <Droplets className="w-3 h-3 mr-1.5" /> Biotope
                      </label>
                      <input 
                        type="text" 
                        value={filterBiotopeTerm}
                        onChange={(e) => handleBiotopeInput(e.target.value)}
                        onFocus={() => filterBiotopeTerm.length >= 2 && setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                        placeholder="e.g. 'Mekong'..."
                        className="w-full bg-slate-50 dark:bg-stone-800 border border-slate-200 dark:border-stone-700 text-slate-700 dark:text-stone-300 text-sm rounded-lg p-2.5 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                      />
                      
                      {/* Autocomplete Dropdown */}
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

                      {/* Popular Chips */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {['Blackwater', 'Amazon', 'Rice Paddies'].map(tag => (
                           <button 
                             key={tag}
                             onClick={() => setFilterBiotopeTerm(tag)}
                             className="px-2.5 py-1 bg-slate-100 dark:bg-stone-800 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 text-slate-600 dark:text-stone-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-[10px] font-bold uppercase rounded-lg border border-slate-200 dark:border-stone-700 transition-all whitespace-nowrap"
                           >
                             {tag}
                           </button>
                        ))}\n                      </div>
                    </div>

                    {/* Category */}
                    <div className="space-y-3">
                      <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
                        <PawPrint className="w-3 h-3 mr-1.5" /> Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        <FilterChip label="Fish" isActive={filterCategory === 'fish'} onClick={() => setFilterCategory(filterCategory === 'fish' ? null : 'fish')} />
                        <FilterChip label="Invertebrates" isActive={filterCategory === 'invertebrate'} onClick={() => setFilterCategory(filterCategory === 'invertebrate' ? null : 'invertebrate')} />
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </aside>

          {/* 🌟 RESULTS COLUMN */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-slate-200 dark:border-stone-800 p-4 mb-6 transition-colors duration-300">
              {/* Active Filter Badges */}
              {activeFilters.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-slate-100 dark:border-stone-800 animate-in slide-in-from-top-2 duration-300">
                  {activeFilters.map((filter: any) => (
                    <FilterBadge
                      key={filter.key}
                      label={filter.label}
                      value={filter.value}
                      onRemove={filter.clear}
                    />
                  ))}
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <h2 className="text-base md:text-lg font-bold text-slate-800 dark:text-stone-100 flex items-center">
                  Found 
                  <span className="mx-2 px-3 py-1 bg-indigo-600 text-white rounded-lg font-black text-sm shadow-md shadow-indigo-200 dark:shadow-none animate-in zoom-in duration-300">
                    {resultCount}
                  </span> 
                  Species
                </h2>
                
                {hasActiveFilters && (
                  <button 
                    onClick={clearAllFilters} 
                    className="text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 dark:bg-rose-500/10 dark:text-rose-400 dark:hover:bg-rose-500/20 px-3 py-2 rounded-lg transition-colors flex items-center border border-rose-100 dark:border-rose-500/20"
                  >
                    <X className="w-3.5 h-3.5 mr-1.5" /> 
                    <span className="hidden sm:inline">Reset Filters</span>
                    <span className="sm:hidden">Reset</span>
                  </button>
                )}
              </div>
            </div>

            {/* 🔥 GRID with Suspense for lazy loading */}
            {resultCount > 0 ? (
              <Suspense fallback={<SpeciesGridSkeleton />}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {results.map(fish => <SpeciesCard key={fish.id} data={fish} />)}
                </div>
              </Suspense>
            ) : (
              /* Empty State */
              <div className="text-center py-20 bg-white dark:bg-stone-900 rounded-3xl border border-dashed border-slate-300 dark:border-stone-800 animate-in fade-in duration-500">
                <div className="animate-bounce-slow mb-4">
                  <div className="w-16 h-16 bg-slate-50 dark:bg-stone-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <Fish className="w-8 h-8 text-slate-300 dark:text-stone-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No swimmers found</h3>
                <p className="text-slate-500 dark:text-stone-400 max-w-xs mx-auto mb-6">
                  No species match your specific criteria. 
                  Try increasing the tank size limit or removing specific biotope keywords.
                </p>
                <button 
                  onClick={clearAllFilters}
                  className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-200 dark:shadow-none"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
      
      {/* Toast Container */}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none p-4 md:p-0">
        {toasts.map(toast => (
          <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </div>
  );
};

// Helper Component
const FilterChip = ({ label, isActive, onClick, colorClass = "text-slate-600 bg-slate-50 dark:text-stone-400 dark:bg-stone-800 border-slate-200 dark:border-stone-700 hover:bg-slate-100 dark:hover:bg-stone-700", activeClass = "bg-slate-800 text-white border-slate-900 dark:bg-stone-700 dark:text-white dark:border-stone-600 shadow-md" }: any) => (
  <button
    onClick={onClick}
    className={cn(
      "px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wide border transition-all duration-200",
      isActive ? activeClass : colorClass
    )}
  >
    {label}
  </button>
);

export default HomePage;
