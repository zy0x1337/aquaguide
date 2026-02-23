import { Link } from 'react-router-dom';
import { Box, Globe2, Droplets, Thermometer } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Species } from '../../types/species';
import { CompareButton } from '../comparison/CompareButton';

interface SpeciesCardProps {
  data: Species;
}

export const SpeciesCard = ({ data }: SpeciesCardProps) => {
  return (
    <div className="relative group">
      <Link 
        to={`/species/${data.slug}`}
        className={cn(
          "relative flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden",
          "shadow-sm hover:shadow-2xl dark:shadow-dark-md dark:hover:shadow-dark-lg transition-all duration-500 ease-out",
          "border border-gray-200 dark:border-gray-800",
          "hover:-translate-y-1 hover:border-coral-200 dark:hover:border-coral-800",
          "focus-visible:ring-2 focus-visible:ring-coral-500 dark:focus-visible:ring-coral-400 focus-visible:outline-none block"
        )}
        aria-label={`View details for ${data.taxonomy.commonName}`}
      >
        {/* Image Container with Zoom Effect */}
        <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          
          <img 
            src={data.imageUrl} 
            alt={`${data.taxonomy.commonName} (${data.taxonomy.scientificName})`}
            className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out will-change-transform"
            loading="lazy"
          />
          
          {/* Difficulty Badge */}
          <div className={cn(
            "absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide backdrop-blur-md shadow-sm border border-white/10",
            data.care.difficulty === 'beginner' && "bg-emerald-500/90 text-white",
            data.care.difficulty === 'medium' && "bg-amber-500/90 text-white",
            data.care.difficulty === 'expert' && "bg-rose-500/90 text-white"
          )}>
            {data.care.difficulty}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="mb-auto">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1 group-hover:text-coral-600 dark:group-hover:text-coral-400 transition-colors line-clamp-1">
              {data.taxonomy.commonName}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 italic font-medium">
              {data.taxonomy.scientificName}
            </p>
          </div>
          
          {/* Info Grid - 4 Stats with Icons */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1.5">
              <Box className="w-3.5 h-3.5 text-coral-500 dark:text-coral-400 flex-shrink-0" />
              <span className="font-semibold">{data.environment.minTankSizeLiters}L</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
              <span className="font-semibold truncate">{data.taxonomy.region}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Droplets className="w-3.5 h-3.5 text-sapphire-500 dark:text-sapphire-400 flex-shrink-0" />
              <span className="font-semibold">pH {data.environment.ph.ideal}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Thermometer className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 flex-shrink-0" />
              <span className="font-semibold">{data.environment.tempC.ideal}°C</span>
            </div>
          </div>

          {/* Behavior Tags (Chips) - Below Stats */}
          {data.behavior.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-200 dark:border-gray-800">
              {data.behavior.tags.slice(0, 3).map(tag => (
                <span 
                  key={tag}
                  className="px-2 py-0.5 bg-coral-50 dark:bg-coral-900/20 text-coral-700 dark:text-coral-300 text-[10px] font-bold uppercase tracking-wide rounded-full border border-coral-200 dark:border-coral-800"
                >
                  {tag.replace('_', ' ')}
                </span>
              ))}
            </div>
          )}

          {/* CTA Arrow (Hidden by default, slides up on hover) */}
          <div className="absolute bottom-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-coral-600 dark:text-coral-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>

      {/* Compare Button - Positioned absolutely outside card */}
      <div className="absolute top-3 left-3 z-30">
        <CompareButton species={data} size="sm" />
      </div>
    </div>
  );
};
