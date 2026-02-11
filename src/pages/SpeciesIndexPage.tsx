import { Search, SlidersHorizontal, Fish } from 'lucide-react';
import { speciesRepository } from '../data/species';
import { SpeciesCard } from '../components/species/SpeciesCard';
import { useSpeciesSearch } from '../hooks/useSpeciesSearch';

const SpeciesIndexPage = () => {
  // Wir holen uns ALLE Fische aus dem Repo
  const allSpecies = speciesRepository.getAll();
  
  // Wir füttern unseren Hook damit
  const { 
    searchTerm, 
    setSearchTerm, 
    filterDifficulty, 
    setFilterDifficulty, 
    results,
    resultCount,
    totalCount
  } = useSpeciesSearch(allSpecies);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 pt-8 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* --- HEADER & SEARCH --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
              Freshwater Database
            </h1>
            <p className="text-slate-500">
              Exploring <strong className="text-indigo-600">{totalCount}</strong> species profiles.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm hover:shadow-md"
              placeholder="Search fish, scientific names..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* --- FILTERS --- */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
            <SlidersHorizontal className="w-4 h-4" /> Filters:
          </div>
          
          {/* Reset Filter */}
          <FilterChip 
            label="All" 
            isActive={filterDifficulty === null} 
            onClick={() => setFilterDifficulty(null)} 
          />
          
          {/* Difficulty Filters */}
          <FilterChip 
            label="Beginner" 
            isActive={filterDifficulty === 'beginner'} 
            onClick={() => setFilterDifficulty(filterDifficulty === 'beginner' ? null : 'beginner')} 
            colorClass="text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100"
            activeClass="bg-emerald-500 text-white border-emerald-600"
          />
           <FilterChip 
            label="Medium" 
            isActive={filterDifficulty === 'medium'} 
            onClick={() => setFilterDifficulty(filterDifficulty === 'medium' ? null : 'medium')} 
            colorClass="text-amber-700 bg-amber-50 border-amber-200 hover:bg-amber-100"
            activeClass="bg-amber-500 text-white border-amber-600"
          />
           <FilterChip 
            label="Expert" 
            isActive={filterDifficulty === 'expert'} 
            onClick={() => setFilterDifficulty(filterDifficulty === 'expert' ? null : 'expert')} 
            colorClass="text-rose-700 bg-rose-50 border-rose-200 hover:bg-rose-100"
            activeClass="bg-rose-500 text-white border-rose-600"
          />
        </div>

        {/* --- RESULTS GRID --- */}
        {resultCount > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map(fish => (
              // Wir nutzen hier unsere existierende Card Component!
              <div key={fish.id} className="h-full">
                <SpeciesCard data={fish} />
              </div>
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Fish className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">No fish found</h3>
            <p className="text-slate-500 max-w-xs mx-auto">
              We couldn't find anything matching "{searchTerm}". Try checking the spelling or use fewer keywords.
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setFilterDifficulty(null); }}
              className="mt-6 text-indigo-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

// Kleine Helper Component für die Filter Buttons
const FilterChip = ({ label, isActive, onClick, colorClass = "text-slate-600 bg-white border-slate-200 hover:bg-slate-50", activeClass = "bg-slate-800 text-white border-slate-900" }: any) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border transition-all
      ${isActive ? activeClass : colorClass}
    `}
  >
    {label}
  </button>
);

export default SpeciesIndexPage;
