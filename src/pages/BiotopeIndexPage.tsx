import { Link } from 'react-router-dom';
import { MapPin, Waves } from 'lucide-react';
import { biotopes } from '../data/biotopes';

const BiotopeIndexPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-[#1c1917] dark:via-stone-900 dark:to-[#1c1917] pt-20 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Waves className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-black text-stone-900 dark:text-white">
            Biotopes
          </h1>
        </div>
        <p className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl">
          Explore natural aquatic habitats from around the world. Each biotope represents a unique ecosystem with specific water parameters and species.
        </p>
      </div>

      {/* Biotopes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {biotopes.map(biotope => (
            <Link
              key={biotope.id}
              to={`/biotopes/${biotope.id}`}
              className="group bg-white dark:bg-stone-800/50 rounded-2xl p-6 border border-stone-200/60 dark:border-stone-700/40 hover:border-blue-300 dark:hover:border-blue-600/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {biotope.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-stone-600 dark:text-stone-400 mb-4 line-clamp-2">
                {biotope.description}
              </p>

              {/* Regions */}
              <div className="flex flex-wrap gap-2">
                {biotope.regions.map(region => (
                  <span
                    key={region}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold"
                  >
                    <MapPin className="w-3 h-3" />
                    {region}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiotopeIndexPage;