import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Droplets, Thermometer, Waves, Eye } from 'lucide-react';
import { allSpecies } from '../data/species';
import habitatsData from '../data/habitats.json';
import AnimatedTransition from '../components/ui/AnimatedTransition';

export const HabitatsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const habitat = useMemo(() => 
    habitatsData.find((h) => h.id === slug),
  [slug]);

  const habitatSpecies = useMemo(() => {
    if (!habitat || !allSpecies) return [];
    return allSpecies.filter((s) => habitat.speciesIds.includes(s.id));
  }, [habitat]);

  if (!habitat) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Habitat not found</h2>
        <Link to="/habitats" className="mt-4 text-blue-600 hover:underline">
          Back to Explore
        </Link>
      </div>
    );
  }

  return (
    <AnimatedTransition>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-12">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full">
          <img 
            src={habitat.imageUrl} 
            alt={habitat.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Link 
              to="/habitats"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 w-fit transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Explore
            </Link>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              {habitat.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light">
              {habitat.subtitle}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* The Story */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  The Environment
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                  {habitat.description}
                </p>
              </div>

              {/* The Ecology */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border-l-4 border-emerald-500">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Ecology & Survival
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                  {habitat.ecology}
                </p>
              </div>
            </div>

            {/* Sidebar: Wild Conditions */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Wild Conditions
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded-xl mr-4">
                      <Thermometer className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">Temperature</p>
                      <p className="text-gray-900 dark:text-white font-medium">{habitat.conditions.temperature}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl mr-4">
                      <Droplets className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">Water Chemistry</p>
                      <p className="text-gray-900 dark:text-white font-medium">{habitat.conditions.waterType}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cyan-50 dark:bg-cyan-900/30 p-3 rounded-xl mr-4">
                      <Waves className="w-6 h-6 text-cyan-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">Water Flow</p>
                      <p className="text-gray-900 dark:text-white font-medium">{habitat.conditions.flow}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-xl mr-4">
                      <Eye className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">Visibility</p>
                      <p className="text-gray-900 dark:text-white font-medium">{habitat.conditions.visibility}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Species Grid */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Who lives here?
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Discover the species that call this environment home.
                </p>
              </div>
            </div>
            
                                        {habitatSpecies.map((s) => {
                  const species = s as any; // TS-Workaround für Union Types
                  return (
                    <Link 
                      key={species.id} 
                      to={`/species/${species.slug || species.id}`}
                      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-500/30 flex flex-col h-full"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900">
                        <img 
                          src={species.imageUrl || species.visuals?.imageUrl || '/placeholder-fish.jpg'} 
                          alt={species.taxonomy?.commonName || species.name || 'Species Image'}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {species.care?.difficulty && (
                          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
                            {species.care.difficulty}
                          </div>
                        )}
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-emerald-600 transition-colors">
                          {species.taxonomy?.commonName || species.name || 'Unknown Species'}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">
                          {species.taxonomy?.scientificName}
                        </p>
                        
                        <div className="mt-auto flex flex-wrap gap-2">
                          {species.visuals?.adultSizeCM && (
                            <span className="inline-flex items-center text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md">
                              Up to {species.visuals.adultSizeCM}cm
                            </span>
                          )}
                          {species.environment?.minTankSizeLiters && (
                            <span className="inline-flex items-center text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md">
                              Min {species.environment.minTankSizeLiters}L
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 text-center shadow-sm">
                <p className="text-gray-500 dark:text-gray-400">
                  No species from this habitat are currently in our database.
                </p>
              </div>
            )`{'}'}`
          </div>
        </div>
    </AnimatedTransition>
  );
};
