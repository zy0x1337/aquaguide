import { useState } from 'react';
import { Search, SlidersHorizontal, Fish, Globe2, Activity, Box, Droplets, PawPrint, X } from 'lucide-react';
import { speciesRepository } from '../data/species';
import { searchBiotopes } from '../data/biotopes';
import { SpeciesCard } from '../components/species/SpeciesCard';
import { useSpeciesSearch } from '../hooks/useSpeciesSearch';
import { SEOHead } from '../components/seo/SEOHead';

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
  };

  const hasActiveFilters = filterDifficulty || filterRegion || filterTankLiters || filterBiotopeTerm || filterCategory || searchTerm;

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <SEOHead 
        title="AquaGuide - The Modern Aquarium Database"
        description="Find the perfect fish for your aquarium. Filter by tank size, parameters, and biotope."
      />

      {/* 🌟 HERO SECTION */}
      <section className="bg-slate-900 text-white pt-20 pb-24 px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[100px] opacity-20 translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
            The Modern Aquarium Database
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none">
            Stop Guessing.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
              Start Scaping.
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover {allSpecies.length}+ detailed species profiles, scientifically accurate care guides, and biotope inspirations.
          </p>

          {/* MAIN SEARCH BAR */}
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-xl">
              <div className="pl-4 text-slate-400">
                <Search className="w-6 h-6" />
              </div>
              <input 
                type="text" 
                placeholder="Search for fish, shrimp, or snails..." 
                className="w-full p-4 text-lg text-slate-900 placeholder:text-slate-400 bg-transparent border-none focus:ring-0 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* 🌟 ADVANCED FILTER SECTION */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900 flex items-center">
                  <SlidersHorizontal className="w-5 h-5 mr-2 text-indigo-500" /> Filters
                </h3>
                {hasActiveFilters && (
                  <button onClick={clearAllFilters} className="text-xs text-rose-500 font-bold hover:underline">
                    Reset
                  </button>
                )}
              </div>
              
              <div className="space-y-8">
                {/* Row 1: Difficulty */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
                    <Activity className="w-3 h-3 mr-1.5" /> Level
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <FilterChip label="Beginner" isActive={filterDifficulty === 'beginner'} onClick={() => setFilterDifficulty(filterDifficulty === 'beginner' ? null : 'beginner')} colorClass="text-emerald-700 bg-emerald-50 border-emerald-100" activeClass="bg-emerald-500 text-white border-emerald-600" />
                    <FilterChip label="Medium" isActive={filterDifficulty === 'medium'} onClick={() => setFilterDifficulty(filterDifficulty === 'medium' ? null : 'medium')} colorClass="text-amber-700 bg-amber-50 border-amber-100" activeClass="bg-amber-500 text-white border-amber-600" />
                    <FilterChip label="Expert" isActive={filterDifficulty === 'expert'} onClick={() => setFilterDifficulty(filterDifficulty === 'expert' ? null : 'expert')} colorClass="text-rose-700 bg-rose-50 border-rose-100" activeClass="bg-rose-500 text-white border-rose-600" />
                  </div>
                </div>

                {/* Row 2: Region */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
                    <Globe2 className="w-3 h-3 mr-1.5" /> Region
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <FilterChip label="All" isActive={filterRegion === null} onClick={() => setFilterRegion(null)} />
                    <FilterChip label="South America" isActive={filterRegion === 'South America'} onClick={() => setFilterRegion(filterRegion === 'South America' ? null : 'South America')} />
                    <FilterChip label="Asia" isActive={filterRegion === 'Asia'} onClick={() => setFilterRegion(filterRegion === 'Asia' ? null : 'Asia')} />
                    <FilterChip label="Africa" isActive={filterRegion === 'Africa'} onClick={() => setFilterRegion(filterRegion === 'Africa' ? null : 'Africa')} />
                    <FilterChip label="Central America" isActive={filterRegion === 'Central America'} onClick={() => setFilterRegion(filterRegion === 'Central America' ? null : 'Central America')} />
                  </div>
                </div>

                {/* Row 3: Advanced (Tank, Biotope, Type) */}
                <div className="pt-6 border-t border-slate-100 space-y-6">
                   {/* Tank Size Filter */}
                   <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
                        <Box className="w-3 h-3 mr-1.5" /> Size
                      </label>
                      <select 
                        className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg p-2.5 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
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

                   {/* Biotope Search (mit Autocomplete & Chips) */}
                   <div className="space-y-3 relative">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
                        <Droplets className="w-3 h-3 mr-1.5" /> Biotope
                      </label>
                      <input 
                        type="text" 
                        value={filterBiotopeTerm}
                        onChange={(e) => handleBiotopeInput(e.target.value)}
                        onFocus={() => filterBiotopeTerm.length >= 2 && setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                        placeholder="e.g. 'Mekong', 'Blackwater'..."
                        className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg p-2.5 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      
                      {/* Autocomplete Dropdown */}
                      {showSuggestions && biotopeSuggestions.length > 0 && (
                        <div className="absolute z-50 w-full bg-white border border-slate-200 rounded-lg shadow-xl mt-1 max-h-60 overflow-y-auto">
                          {biotopeSuggestions.map((b) => (
                            <button
                              key={b.id}
                              onClick={() => selectBiotope(b)}
                              className="w-full text-left px-4 py-3 hover:bg-indigo-50 transition-colors border-b border-slate-100 last:border-0 group"
                            >
                              <div className="font-bold text-slate-800 text-sm group-hover:text-indigo-700">{b.label}</div>
                              <div className="text-xs text-slate-500 truncate">{b.description}</div>
                              <div className="flex gap-1 mt-1">
                                {b.regions.slice(0, 2).map((r: string) => (
                                  <span key={r} className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">{r}</span>
                                ))}
                              </div>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Popular Chips (unter Searchbar) */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase py-1">Popular:</span>
                        {['Blackwater', 'Amazon', 'Mekong', 'Rice Paddies', 'Fast-Flowing'].map(tag => (
                           <button 
                             key={tag}
                             onClick={() => setFilterBiotopeTerm(tag)}
                             className="px-2.5 py-1 bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-700 text-[10px] font-bold uppercase rounded-lg border border-slate-200 hover:border-indigo-200 transition-all whitespace-nowrap"
                           >
                             {tag}
                           </button>
                        ))}
                      </div>
                   </div>

                   {/* Category / Type - OHNE FROG */}
                   <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
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
            {/* Results Header (High Contrast Box) */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-800 flex items-center">
                Found 
                <span className="mx-2 px-3 py-1 bg-indigo-600 text-white rounded-lg font-black text-sm shadow-md shadow-indigo-200">
                  {resultCount}
                </span> 
                Species
              </h2>
              
              {hasActiveFilters && (
                <button 
                  onClick={clearAllFilters} 
                  className="text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-2 rounded-lg transition-colors flex items-center border border-rose-100"
                >
                  <X className="w-3.5 h-3.5 mr-1.5" /> 
                  Reset Filters
                </button>
              )}
            </div>

            {/* RESULTS GRID - MOBILE OPTIMIZED */}
            {resultCount > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {results.map(fish => <SpeciesCard key={fish.id} data={fish} />)}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Fish className="w-8 h-8 text-slate-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">No swimmers found</h3>
                <p className="text-slate-500 max-w-xs mx-auto mb-6">
                  No species match your specific criteria. 
                  Try increasing the tank size limit or removing specific biotope keywords.
                </p>
                <button 
                  onClick={clearAllFilters}
                  className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-200"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

// Helper Component
const FilterChip = ({ label, isActive, onClick, colorClass = "text-slate-600 bg-slate-50 border-slate-200 hover:bg-slate-100", activeClass = "bg-slate-800 text-white border-slate-900 shadow-md" }: any) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide border transition-all duration-200 ${isActive ? activeClass : colorClass}`}
  >
    {label}
  </button>
);

export default HomePage;
