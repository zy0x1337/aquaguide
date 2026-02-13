import { useState } from 'react';
import { Leaf, Search, Sprout } from 'lucide-react';
import { plantRepository } from '../data/plants';
import { PlantCard } from '../components/plants/PlantCard';
import { SEOHead } from '../components/seo/SEOHead';
import { usePlantSearch } from '../hooks/usePlantSearch';
import { PlantFilterBar, type PlantFilterType } from '../components/layout/FilterBar';

export const PlantsIndexPage = () => {
  const allPlants = plantRepository.getAll();
  const {
    searchTerm, setSearchTerm,
    filterDifficulty: _filterDifficulty,      // ← FIX: _
    setFilterDifficulty,
    filterType: _filterType,                 // ← FIX: _
    setFilterType,
    filterHeight: _filterHeight,             // ← FIX: _
    setFilterHeight,
    results
  } = usePlantSearch(allPlants);

  const [quickFilter, setQuickFilter] = useState<PlantFilterType>('all');

  const handleQuickFilter = (filter: PlantFilterType) => {
    setQuickFilter(filter);
    switch (filter) {
      case 'all':
        setFilterDifficulty(null);
        setFilterType(null);
        setFilterHeight(null);
        break;
      case 'easy':
        setFilterDifficulty('easy');
        setFilterType(null);
        setFilterHeight(null);
        break;
      case 'low-tech':
        setFilterDifficulty(null);
        setFilterType(null);
        setFilterHeight(null);
        break;
      case 'nano':
        setFilterDifficulty(null);
        setFilterType(null);
        setFilterHeight('nano');  // MAX 10cm!
        break;
      case 'stem':
        setFilterDifficulty(null);
        setFilterHeight(null);
        setFilterType('stem');
        break;
      case 'rhizome':
        setFilterDifficulty(null);
        setFilterHeight(null);
        setFilterType('rhizome');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0c0a09] font-sans pb-20">
      <SEOHead title="AquaGuide - Plant Database" description="Find the perfect aquatic plants for your aquascape." />
      
      {/* HERO HEADER */}
      <section className="bg-slate-900 text-white pt-16 pb-12 px-4 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-600 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-600 rounded-full blur-[80px] opacity-20 translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4">
            <Leaf className="w-3 h-3" /> Plant Database
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
            Lush <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Greenery.</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto">
            Discover the best plants for your aquascape. From low-tech epiphytes to high-demand carpeting plants.
          </p>
          
          {/* SEARCH BAR */}
          <div className="relative max-w-lg mx-auto mt-8 group">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center bg-white dark:bg-slate-800 rounded-xl p-1.5 shadow-xl border border-transparent dark:border-slate-700 group-focus-within:border-emerald-500/50 transition-colors">
              <Search className="ml-3 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search plants (e.g. 'Anubias', 'Fern')..." 
                className="w-full p-3 text-slate-900 dark:text-white bg-transparent border-none focus:ring-0 outline-none placeholder:text-slate-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR + GRID */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <PlantFilterBar 
          activeFilter={quickFilter}
          onFilterChange={handleQuickFilter}
        />

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            {results.length} of {allPlants.length} Plants
          </h2>
          {results.length < allPlants.length && (
            <button 
              onClick={() => {
                setSearchTerm('');
                handleQuickFilter('all');
              }}
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 flex items-center gap-1"
            >
              Clear All
            </button>
          )}
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
            {results.map(plant => (
              <PlantCard key={plant.id} data={plant} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-slate-100 dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sprout className="w-8 h-8 text-slate-300 dark:text-slate-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No plants found</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Try adjusting your search or filters.</p>
          </div>
        )}
      </main>
    </div>
  );
};
