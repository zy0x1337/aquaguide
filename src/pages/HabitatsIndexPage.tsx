import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Droplets, Thermometer, MapPin, Fish } from 'lucide-react';
import habitatsData from '../data/habitats.json';
import { allSpecies } from '../data/species';
import PageHeader from '../components/ui/PageHeader';
import AnimatedTransition from '../components/ui/AnimatedTransition';

export const HabitatsIndexPage: React.FC = () => {
  
  // Calculate how many species live in a habitat
  const getSpeciesCount = (habitatId: string) => {
    const habitat = habitatsData.find(h => h.id === habitatId);
    if (!habitat) return 0;
    return allSpecies.filter(s => habitat.speciesIds.includes(s.slug)).length;
  };

  return (
    <AnimatedTransition>
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen pb-24">
        
        {/* Modern Header Section */}
        <div className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <PageHeader 
            title="Explore Natural Habitats" 
            description="Journey to the wild origins of your aquarium fish. Discover the exact water parameters, ecology, and native tank mates of the world's most fascinating aquatic ecosystems."
          />
        </div>
        
        {/* Habitats Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {habitatsData.map((habitat, index) => {
              const speciesCount = getSpeciesCount(habitat.id);
              
              return (
                <motion.div
                  key={habitat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    to={`/habitats/${habitat.id}`}
                    className="group block relative rounded-[2rem] overflow-hidden bg-white dark:bg-gray-900 shadow-sm hover:shadow-2xl dark:shadow-none transition-all duration-500 ease-out border border-gray-100 dark:border-gray-800 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 flex flex-col h-full"
                  >
                    {/* Image Container */}
                    <div className="relative h-72 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                      {/* Dark Gradient Overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
                      
                      <img 
                        src={habitat.imageUrl} 
                        alt={habitat.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out will-change-transform"
                        loading="lazy"
                      />
                      
                      {/* Floating Badge: Fish Count */}
                      <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-white shadow-lg">
                        <Fish className="w-3.5 h-3.5 text-indigo-400" />
                        <span className="text-xs font-bold tracking-wide">
                          {speciesCount} Species
                        </span>
                      </div>

                      {/* Title overlays the image */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                          <span className="text-[10px] font-bold text-indigo-200 uppercase tracking-widest">
                            Wild Origin
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1 tracking-tight">
                          {habitat.title}
                        </h3>
                        <p className="text-gray-200 text-sm font-medium line-clamp-1 opacity-90">
                          {habitat.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Content Section below image */}
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6">
                        {habitat.description}
                      </p>
                      
                      {/* Quick Stats Grid */}
                      <div className="mt-auto grid grid-cols-2 gap-3 pt-5 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <Droplets className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500">pH Level</span>
                            <span className="text-xs font-semibold">{habitat.waterParameters?.ph || 'Varies'}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <Thermometer className="w-4 h-4 text-rose-500 flex-shrink-0" />
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500">Temp</span>
                            <span className="text-xs font-semibold truncate">{habitat.conditions.temperature}</span>
                          </div>
                        </div>
                      </div>

                      {/* CTA Arrow */}
                      <div className="absolute bottom-6 right-6 w-10 h-10 bg-indigo-50 dark:bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};
