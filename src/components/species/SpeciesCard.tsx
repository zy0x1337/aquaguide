import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Species } from '../../types/species';

interface SpeciesCardProps {
  data: Species;
}

export const SpeciesCard = ({ data }: SpeciesCardProps) => {
  return (
    <Link 
      to={`/species/${data.slug}`}
      className={cn(
        "relative flex flex-col bg-white dark:bg-stone-900 rounded-2xl overflow-hidden",
        "shadow-sm hover:shadow-2xl dark:shadow-none transition-all duration-500 ease-out group",
        "border border-slate-100 dark:border-stone-800",
        "hover:-translate-y-1 hover:border-indigo-200 dark:hover:border-indigo-500/30",
        "focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
      )}
      aria-label={`View details for ${data.taxonomy.commonName}`}
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-stone-800">
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
          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
            {data.taxonomy.commonName}
          </h3>
          <p className="text-xs text-slate-500 dark:text-stone-400 italic font-medium">
            {data.taxonomy.scientificName}
          </p>
        </div>
        
        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-4 pt-4 border-t border-slate-100 dark:border-stone-800 text-xs text-slate-600 dark:text-stone-400">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            {data.environment.minTankSizeLiters}L Min
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {data.taxonomy.region}
          </div>
        </div>

        {/* CTA Arrow (Hidden by default, slides up on hover) */}
        <div className="absolute bottom-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-indigo-600 dark:text-indigo-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};
