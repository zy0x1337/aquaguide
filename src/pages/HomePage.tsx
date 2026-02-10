import { useState } from 'react';
import { SpeciesCard } from '../components/species/SpeciesCard';
import { speciesRepository } from '../data/species';
import { SEOHead } from '../components/seo/SEOHead';
import { FilterBar, type FilterType } from '../components/layout/FilterBar';

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Filter Logik: Wir casten den FilterType für das Repository
  const species = activeFilter === 'all'
    ? speciesRepository.getAll()
    : speciesRepository.filterByTag(activeFilter as any);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <SEOHead 
        title="Find Compatible Aquarium Fish" 
        description="Scientifically accurate care sheets and visual stocking simulator for aquarium hobbyists." 
      />
      
      {/* 🌟 HERO SECTION */}
      <div className="bg-white border-b border-slate-200 pt-20 pb-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-xs mb-4 block animate-fade-in">
            The Modern Aquarium Database
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Stop Guessing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              Start Scaping.
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Scientifically accurate care sheets with visual tank simulations. 
            Find compatible species for your tank in seconds.
          </p>

          {/* Filter Bar direkt im Hero */}
          <div className="flex justify-center">
            <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </div>
        </div>
      </div>
      
      {/* 🌟 CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
            {species.length} Species Found
          </p>
          {/* Optional: Sortier-Dropdown könnte hier hin */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {species.map(fish => (
            <SpeciesCard key={fish.id} data={fish} />
          ))}
        </div>
        
        {/* Empty State, falls Filter nichts findet */}
        {species.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 text-lg font-medium mb-2">No fish match this filter.</p>
            <p className="text-slate-400 text-sm mb-6">Try adjusting your search criteria.</p>
            <button 
              onClick={() => setActiveFilter('all')}
              className="px-6 py-2 bg-indigo-50 text-indigo-600 font-bold rounded-full hover:bg-indigo-100 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
