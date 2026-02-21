import { useState } from 'react';
import { Leaf, Search, Sprout, X, } from 'lucide-react';
import { motion } from 'framer-motion';
import { plantRepository } from '../data/plants';
import { PlantCard } from '../components/plants/PlantCard';
import { SEOHead } from '../components/seo/SEOHead';
import { PageTransition } from '../components/layout/PageTransition';
import { usePlantSearch } from '../hooks/usePlantSearch';
import { PlantFilterBar, type PlantFilterType } from '../components/layout/FilterBar';

// TODO: Replace with actual header image URL
const HEADER_IMAGE_URL = 'https://cdn.pixabay.com/photo/2020/05/24/15/40/abstract-5214770_1280.jpg';

export const PlantsIndexPage = () => {
  const allPlants = plantRepository.getAll();
  const {
    searchTerm, setSearchTerm,
    filterDifficulty: _filterDifficulty,
    setFilterDifficulty,
    filterType: _filterType,
    setFilterType,
    filterHeight: _filterHeight,
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
        setFilterHeight('nano');
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

  const hasActiveFilters = quickFilter !== 'all' || searchTerm.length > 0;

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pb-16 md:pb-20">
        <SEOHead 
          title="Plant Database - AquaGuide" 
          description="Discover aquatic plants for your aquascape. From beginner-friendly to advanced carpeting plants."
        />
        
        {/* Hero Section with Background Image */}
        <div className="relative h-[45vh] min-h-[400px] md:h-[55vh] md:min-h-[500px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={HEADER_IMAGE_URL}
              alt="Aquatic plants"
              className="w-full h-full object-cover"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90"></div>
            {/* Additional gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-teal-900/30"></div>
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-8 md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-4 md:mb-5 text-white/90 text-xs md:text-sm font-semibold shadow-lg">
                <Leaf className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>{allPlants.length} Plants</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 tracking-tight leading-[1.1]">
                Plant Database
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-slate-200 mb-6 md:mb-8 leading-relaxed max-w-2xl">
                Discover the perfect aquatic plants for your aquascape. From low-tech epiphytes to high-demand carpeting plants.
              </p>

              {/* Enhanced Search Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group max-w-2xl"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative flex items-center bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl p-1.5 md:p-2 shadow-2xl border border-white/50">
                  <div className="pl-3 md:pl-4 text-slate-400">
                    <Search className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search plants..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-slate-900 dark:text-slate-100 placeholder:text-slate-400 bg-transparent border-none focus:ring-0 outline-none font-medium"
                  />
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm('')} 
                      className="mr-1.5 md:mr-2 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" 
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 -mt-4 md:-mt-8 relative z-10">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-8"
          >
            <PlantFilterBar 
              activeFilter={quickFilter}
              onFilterChange={handleQuickFilter}
            />
          </motion.div>

          {/* Results Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl shadow-lg border-2 border-slate-200 dark:border-slate-700 p-3 md:p-5 mb-6 md:mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-400">Found</span>
                <span className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg md:rounded-xl font-black text-base md:text-lg shadow-lg">
                  {results.length}
                </span>
                <span className="text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-400 hidden sm:inline">Plants</span>
              </div>
              
              {hasActiveFilters && (
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    handleQuickFilter('all');
                  }}
                  className="text-xs md:text-sm font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 bg-rose-50 dark:bg-rose-950/30 hover:bg-rose-100 dark:hover:bg-rose-900/40 px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl transition-all flex items-center gap-1.5 md:gap-2 border-2 border-rose-200 dark:border-rose-800 shadow-sm hover:shadow-md self-start sm:self-auto"
                >
                  <X className="w-3.5 h-3.5 md:w-4 md:h-4" /> Clear Filters
                </button>
              )}
            </div>
          </motion.div>

          {/* Plants Grid */}
          {results.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5"
            >
              {results.map((plant, index) => (
                <motion.div
                  key={plant.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.5) }}
                >
                  <PlantCard data={plant} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12 md:py-20 bg-white dark:bg-slate-800 rounded-2xl md:rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700 shadow-lg"
            >
              <div className="animate-bounce mb-5 md:mb-6">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <Sprout className="w-7 h-7 md:w-10 md:h-10 text-slate-400 dark:text-slate-500" />
                </div>
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3">No Plants Found</h3>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-5 md:mb-6 px-4">
                Try adjusting your filters or search term.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  handleQuickFilter('all');
                }}
                className="px-5 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-sm md:text-base font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </main>
      </div>
    </PageTransition>
  );
};
