import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import { Heart, Fish, Leaf, Loader2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFavorites } from '../hooks/useFavorites';
import { supabase } from '../lib/supabase';

interface SpeciesData {
  slug: string;
  common_name: string;
  scientific_name: string;
  image_url?: string;
}

interface PlantData {
  slug: string;
  common_name: string;
  scientific_name: string;
  image_url?: string;
}

const FavoritesPage = () => {
  const { favorites, loading: favoritesLoading, toggleFavorite, isFavorite } = useFavorites();
  const [speciesData, setSpeciesData] = useState<Record<string, SpeciesData>>({});
  const [plantsData, setPlantsData] = useState<Record<string, PlantData>>({});
  const [dataLoading, setDataLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'species' | 'plants'>('all');

  const favSpecies = favorites.filter((f) => f.item_type === 'species');
  const favPlants = favorites.filter((f) => f.item_type === 'plant');

  useEffect(() => {
    fetchFavoriteDetails();
  }, [favorites]);

  const fetchFavoriteDetails = async () => {
    setDataLoading(true);

    try {
      // Fetch species details
      if (favSpecies.length > 0) {
        const { data: species } = await supabase
          .from('species')
          .select('slug, common_name, scientific_name, image_url')
          .in(
            'slug',
            favSpecies.map((f) => f.item_slug)
          );

        if (species) {
          const speciesMap: Record<string, SpeciesData> = {};
          species.forEach((s) => {
            speciesMap[s.slug] = s;
          });
          setSpeciesData(speciesMap);
        }
      }

      // Fetch plant details
      if (favPlants.length > 0) {
        const { data: plants } = await supabase
          .from('plants')
          .select('slug, common_name, scientific_name, image_url')
          .in(
            'slug',
            favPlants.map((f) => f.item_slug)
          );

        if (plants) {
          const plantsMap: Record<string, PlantData> = {};
          plants.forEach((p) => {
            plantsMap[p.slug] = p;
          });
          setPlantsData(plantsMap);
        }
      }
    } catch (error) {
      console.error('Error fetching favorite details:', error);
    } finally {
      setDataLoading(false);
    }
  };

  const filteredFavorites = () => {
    if (activeTab === 'species') return favSpecies;
    if (activeTab === 'plants') return favPlants;
    return favorites;
  };

  const loading = favoritesLoading || dataLoading;

  return (
    <PageTransition>
      <SEOHead
        title="My Favorites - AquaGuide"
        description="Your favorite fish species and plants."
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl mb-6">
              <Heart className="w-8 h-8 text-white" fill="currentColor" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              My Favorites
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Your personally curated collection of fish species and aquatic plants
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex bg-white dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              {[
                { value: 'all', label: 'All', count: favorites.length },
                { value: 'species', label: 'Fish', count: favSpecies.length, icon: Fish },
                { value: 'plants', label: 'Plants', count: favPlants.length, icon: Leaf },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value as any)}
                    className={`relative flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                      activeTab === tab.value
                        ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" strokeWidth={2.5} />}
                    {tab.label}
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        activeTab === tab.value
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Content */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-rose-500" />
            </div>
          ) : filteredFavorites().length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full mb-6">
                <Heart className="w-10 h-10 text-slate-400 dark:text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                No Favorites Yet
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Start exploring and add your favorite species and plants
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  to="/species"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  <Fish className="w-5 h-5" strokeWidth={2.5} />
                  Browse Fish
                </Link>
                <Link
                  to="/plants"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 rounded-xl font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                >
                  <Leaf className="w-5 h-5" strokeWidth={2.5} />
                  Browse Plants
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredFavorites().map((favorite, idx) => {
                const isSpecies = favorite.item_type === 'species';
                const data = isSpecies
                  ? speciesData[favorite.item_slug]
                  : plantsData[favorite.item_slug];

                if (!data) return null;

                return (
                  <motion.div
                    key={favorite.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={`/${isSpecies ? 'species' : 'plants'}/${data.slug}`}
                      className="group block bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-700 overflow-hidden transition-all hover:shadow-xl"
                    >
                      {/* Image */}
                      <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        {data.image_url ? (
                          <img
                            src={data.image_url}
                            alt={data.common_name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            {isSpecies ? (
                              <Fish className="w-16 h-16 text-slate-300 dark:text-slate-700" />
                            ) : (
                              <Leaf className="w-16 h-16 text-slate-300 dark:text-slate-700" />
                            )}
                          </div>
                        )}

                        {/* Favorite Button */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleFavorite(favorite.item_type, favorite.item_slug);
                          }}
                          className="absolute top-3 right-3 p-2 bg-white dark:bg-slate-900 rounded-full shadow-lg hover:scale-110 transition-transform"
                        >
                          <Heart
                            className="w-5 h-5 text-rose-500"
                            fill="currentColor"
                            strokeWidth={2.5}
                          />
                        </button>

                        {/* Type Badge */}
                        <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full">
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                            {isSpecies ? (
                              <Fish className="w-3.5 h-3.5" strokeWidth={2.5} />
                            ) : (
                              <Leaf className="w-3.5 h-3.5" strokeWidth={2.5} />
                            )}
                            {isSpecies ? 'Fish' : 'Plant'}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                          {data.common_name}
                        </h3>
                        <p className="text-sm italic text-slate-500 dark:text-slate-400">
                          {data.scientific_name}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default FavoritesPage;
