import React from 'react';
import { Search, SlidersHorizontal, Fish, MapPin, Activity } from 'lucide-react';
import { speciesRepository } from '../data/species';
import { SpeciesCard } from '../components/species/SpeciesCard';
import { useSpeciesSearch } from '../hooks/useSpeciesSearch';
import { SEOHead } from '../components/seo/SEOHead';

const HomePage = () => {
  const allSpecies = speciesRepository.getAll();
  
  // Erweiterter Hook
  const { 
    searchTerm, setSearchTerm, 
    filterDifficulty, setFilterDifficulty, 
    filterRegion, setFilterRegion,
    results, resultCount, totalCount
  } = useSpeciesSearch(allSpecies);

  // Helper zum Resetten
  const clearAllFilters = () => {
    setSearchTerm('');
    setFilterDifficulty(null);
    setFilterRegion(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <SEOHead title="Find Compatible Aquarium Fish" description="..." />
      
      {/* 🌟 HERO (Unverändert gut) */}
      <div className="bg-white border-b border-slate-200 pt-16 pb-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-xs mb-4 block animate-fade-in">
            The Modern Aquarium Database
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Stop Guessing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              Start Scaping.
            </span>
          </h1>

          {/* SEARCH BAR */}
          <div className="max-w-md mx-auto relative group mt-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm text-lg"
              placeholder="Search fish (e.g. 'Neon', 'Cory')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* 🌟 FILTER SECTION (NEU & ERWEITERT) */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm mb-8">
          <div className="flex flex-col gap-4">
            
            {/* Row 1: Difficulty */}
            <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider w-24 shrink-0">
                <Activity className="w-3.5 h-3.5" /> Level
              </div>
              <FilterChip label="All" isActive={filterDifficulty === null} onClick={() => setFilterDifficulty(null)} />
              <FilterChip label="Beginner" isActive={filterDifficulty === 'beginner'} onClick={() => setFilterDifficulty(filterDifficulty === 'beginner' ? null : 'beginner')} colorClass="text-emerald-700 bg-emerald-50 border-emerald-100" activeClass="bg-emerald-500 text-white border-emerald-600" />
              <FilterChip label="Medium" isActive={filterDifficulty === 'medium'} onClick={() => setFilterDifficulty(filterDifficulty === 'medium' ? null : 'medium')} colorClass="text-amber-700 bg-amber-50 border-amber-100" activeClass="bg-amber-500 text-white border-amber-600" />
              <FilterChip label="Expert" isActive={filterDifficulty === 'expert'} onClick={() => setFilterDifficulty(filterDifficulty === 'expert' ? null : 'expert')} colorClass="text-rose-700 bg-rose-50 border-rose-100" activeClass="bg-rose-500 text-white border-rose-600" />
            </div>

            {/* Row 2: Region / Biotope */}
            <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide border-t border-slate-100 pt-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider w-24 shrink-0">
                <MapPin className="w-3.5 h-3.5" /> Region
              </div>
              <FilterChip label="Any" isActive={filterRegion === null} onClick={() => setFilterRegion(null)} />
              <FilterChip label="South America" isActive={filterRegion === 'South America'} onClick={() => setFilterRegion(filterRegion === 'South America' ? null : 'South America')} />
              <FilterChip label="Asia" isActive={filterRegion === 'Asia'} onClick={() => setFilterRegion(filterRegion === 'Asia' ? null : 'Asia')} />
              <FilterChip label="Africa" isActive={filterRegion === 'Africa'} onClick={() => setFilterRegion(filterRegion === 'Africa' ? null : 'Africa')} />
              <FilterChip label="Australia" isActive={filterRegion === 'Australia'} onClick={() => setFilterRegion(filterRegion === 'Australia' ? null : 'Australia')} />
            </div>

          </div>
        </div>

        {/* Info Line */}
        <div className="flex justify-between items-center mb-6 px-1">
           <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Found {resultCount} Species
           </p>
           {(filterDifficulty || filterRegion || searchTerm) && (
             <button onClick={clearAllFilters} className="text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:underline">
               Reset All Filters
             </button>
           )}
        </div>

        {/* GRID */}
        {resultCount > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {results.map(fish => <SpeciesCard key={fish.id} data={fish} />)}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-slate-200 mx-auto max-w-2xl">
            <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Fish className="w-10 h-10 text-slate-300" />
            </div>
            <p className="text-slate-900 text-lg font-bold mb-2">No fish match these specific filters.</p>
            <button onClick={clearAllFilters} className="mt-4 px-6 py-2 bg-indigo-50 text-indigo-600 font-bold rounded-full hover:bg-indigo-100 transition-colors">
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Verbesserte Filter Chip Component (Cleaner Look)
const FilterChip = ({ label, isActive, onClick, colorClass = "text-slate-600 bg-slate-50 border-slate-200 hover:bg-slate-100", activeClass = "bg-slate-800 text-white border-slate-900 shadow-md" }: any) => (
  <button
    onClick={onClick}
    className={`
      px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide border transition-all duration-200 whitespace-nowrap
      ${isActive ? activeClass : colorClass}
    `}
  >
    {label}
  </button>
);

export default HomePage;
