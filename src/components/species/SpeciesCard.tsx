import { Link } from 'react-router-dom';
import { Thermometer, Droplets, Ruler, Users } from 'lucide-react';
import type { Species } from '../../types/species';

interface Props {
  data: Species;
}

export const SpeciesCard = ({ data }: Props) => {
  // LOGIK: Nutze das Bild aus den Daten, oder einen hochwertigen Fallback
  // + Safe Path Resolver (falls / fehlt)
  const fallbackImage = "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=800";
  let imageSrc = data.imageUrl || fallbackImage;
  
  if (imageSrc.startsWith('images/')) {
    imageSrc = `/${imageSrc}`;
  }

  return (
    <Link 
      to={`/species/${data.slug}`}
      className="group relative flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
    >
      {/* Image Container - Aspect Ratio Fix (4:3) */}
      <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-100">
        <img 
          src={imageSrc} 
          alt={data.taxonomy.commonName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Difficulty Badge (Top Right) */}
        <div className="absolute top-2 right-2">
           <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-wider backdrop-blur-md shadow-sm border ${
             data.care.difficulty === 'beginner' ? 'bg-emerald-500/90 text-white border-emerald-400' :
             data.care.difficulty === 'medium' ? 'bg-amber-500/90 text-white border-amber-400' :
             'bg-rose-500/90 text-white border-rose-400'
           }`}>
             {data.care.difficulty}
           </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-1 text-base">
            {data.taxonomy.commonName}
          </h3>
          <p className="text-xs text-slate-400 italic truncate font-serif mt-0.5">
            {data.taxonomy.scientificName}
          </p>
        </div>

        {/* Detailed Stats Grid */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-1 mt-auto pt-3 border-t border-slate-50">
          
          {/* Row 1: Water Params */}
          <div className="flex items-center gap-1.5">
            <Thermometer className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span className="text-xs font-medium text-slate-600 truncate">
              {data.environment.tempC.ideal}°C
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Droplets className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-xs font-medium text-slate-600 truncate">
              pH {data.environment.ph.ideal}
            </span>
          </div>

          {/* Row 2: Physical Specs (NEW) */}
          <div className="flex items-center gap-1.5">
            <Ruler className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span className="text-xs font-medium text-slate-600 truncate">
              {data.visuals.adultSizeCM} cm
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-xs font-medium text-slate-600 truncate">
              {data.behavior.minGroupSize === 1 ? 'Solo' : `${data.behavior.minGroupSize}+`}
            </span>
          </div>

        </div>
      </div>
    </Link>
  );
};
