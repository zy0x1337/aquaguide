import { useState, useMemo, Suspense, lazy } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, AlertCircle } from 'lucide-react';
import { allSpecies } from '../data/species';
import { SEOHead } from '../components/seo/SEOHead';
import { SpeciesGridSkeleton } from '../components/ui/Skeleton';
import { PageTransition } from '../components/layout/PageTransition';
import type { Difficulty, Species } from '../types/species';

const SpeciesCard = lazy(() => import('../components/species/SpeciesCard').then(module => ({ default: module.SpeciesCard })));

const SpeciesIndexPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState<Difficulty | 'all'>('all');
  const [sortOrder, setSortOrder] = useState<'name' | 'difficulty'>('name');

  const filteredSpecies = useMemo(() => {
    return allSpecies
      .filter((s: Species) => {
        const matchesSearch = s.taxonomy.commonName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              s.taxonomy.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDiff = filterDifficulty === 'all' || s.care.difficulty === filterDifficulty;
        return matchesSearch && matchesDiff;
      })
      .sort((a: Species, b: Species) => {
        if (sortOrder === 'name') return a.taxonomy.commonName.localeCompare(b.taxonomy.commonName);
        const diffMap: Record<Difficulty, number> = { beginner: 0, medium: 1, intermediate: 1, expert: 2 };
        return diffMap[a.care.difficulty] - diffMap[b.care.difficulty];
      });
  }, [searchTerm, filterDifficulty, sortOrder]);

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
          <div className="bg-white dark:bg-stone-900 rounded-xl shadow-lg border border-slate-100 dark:border-stone-800 p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between transition-colors duration-300">
            
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Filter by name..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-stone-800 border border-slate-200 dark:border-stone-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-colors dark:text-white"
              />
            </div>

            <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <select 
                  value={filterDifficulty}
                  onChange={(e) => setFilterDifficulty(e.target.value as Difficulty | 'all')}
                  className="bg-slate-50 dark:bg-stone-800 border border-slate-200 dark:border-stone-700 rounded-lg px-3 py-2 text-sm font-bold text-slate-700 dark:text-stone-300 outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-colors"
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="medium">Medium</option>
                  <option value="expert">Expert</option>
                </select>
              </div>

              <button 
                onClick={() => setSortOrder(prev => prev === 'name' ? 'difficulty' : 'name')}
                className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-stone-800 hover:bg-slate-100 dark:hover:bg-stone-700 border border-slate-200 dark:border-stone-700 rounded-lg text-sm font-bold text-slate-700 dark:text-stone-300 transition-colors whitespace-nowrap"
              >
                <ArrowUpDown className="w-4 h-4" />
                Sort: {sortOrder === 'name' ? 'Name' : 'Difficulty'}
              </button>
            </div>
          </div>

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
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default SpeciesIndexPage;