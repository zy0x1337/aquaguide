import { Link } from 'react-router-dom';
import { Thermometer, Droplets, Ruler, Users } from 'lucide-react';
import type { Species } from '../../types/species';

interface Props {
  data: Species;
}

export const SpeciesCard = ({ data }: Props) => {
  const fallbackImage = "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=800";
  let imageSrc = data.imageUrl || fallbackImage;
  
  if (imageSrc.startsWith('images/')) {
    imageSrc = `/${imageSrc}`;
  }

  // 🔥 CHIPS: Wir zeigen max. 2 Tags an, um Mobile nicht zu überladen
  const displayTags = data.behavior.tags.slice(0, 2);

  // Chip Farben basierend auf Tag-Namen
  const getChipColor = (tag: string) => {
    if (tag.includes('shy') || tag.includes('peaceful')) return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    if (tag.includes('active') || tag.includes('jumper')) return 'bg-amber-100 text-amber-700 border-amber-200';
    if (tag.includes('shoaler') || tag.includes('schooler') || tag.includes('social')) return 'bg-indigo-100 text-indigo-700 border-indigo-200';
    if (tag.includes('predator') || tag.includes('fin_nipper') || tag.includes('territorial')) return 'bg-rose-100 text-rose-700 border-rose-200';
    if (tag.includes('bottom')) return 'bg-slate-100 text-slate-700 border-slate-200';
    if (tag.includes('surface')) return 'bg-cyan-100 text-cyan-700 border-cyan-200';
    return 'bg-slate-100 text-slate-700 border-slate-200';
  };

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
           <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider backdrop-blur-md shadow-sm border ${
             data.care.difficulty === 'beginner' ? 'bg-emerald-500/90 text-white border-emerald-400' :
             data.care.difficulty === 'medium' ? 'bg-amber-500/90 text-white border-amber-400' :
             'bg-rose-500/90 text-white border-rose-400'
           }`}>
             {data.care.difficulty}
           </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 md:p-4 flex-1 flex flex-col">
        {/* Title & Scientific Name */}
        <div className="mb-2">
          <h3 className="font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-1 text-sm md:text-base">
            {data.taxonomy.commonName}
          </h3>
          <p className="text-[10px] md:text-xs text-slate-400 italic truncate font-serif mt-0.5">
            {data.taxonomy.scientificName}
          </p>
        </div>

        {/* Stats Grid (4 Spalten: Temp, pH, Size, Group) */}
        <div className="grid grid-cols-2 gap-2 mb-3 pt-2 border-t border-slate-50">
          {/* Temp */}
          <div className="flex items-center gap-1.5">
            <div className="p-1 bg-rose-50 rounded text-rose-500 shrink-0">
              <Thermometer className="w-3 h-3" />
            </div>
            <span className="text-[9px] md:text-xs font-medium text-slate-600 truncate">
              {data.environment.tempC.ideal}°C
            </span>
          </div>

          {/* pH */}
          <div className="flex items-center gap-1.5">
            <div className="p-1 bg-cyan-50 rounded text-cyan-500 shrink-0">
              <Droplets className="w-3 h-3" />
            </div>
            <span className="text-[9px] md:text-xs font-medium text-slate-600 truncate">
              pH {data.environment.ph.ideal}
            </span>
          </div>

          {/* Size */}
          <div className="flex items-center gap-1.5">
            <div className="p-1 bg-purple-50 rounded text-purple-500 shrink-0">
              <Ruler className="w-3 h-3" />
            </div>
            <span className="text-[9px] md:text-xs font-medium text-slate-600 truncate">
              {data.visuals.adultSizeCM}cm
            </span>
          </div>

          {/* Group */}
          <div className="flex items-center gap-1.5">
            <div className="p-1 bg-emerald-50 rounded text-emerald-500 shrink-0">
              <Users className="w-3 h-3" />
            </div>
            <span className="text-[9px] md:text-xs font-medium text-slate-600 truncate">
              {data.behavior.minGroupSize === 1 ? 'Solo' : `${data.behavior.minGroupSize}+`}
            </span>
          </div>
        </div>

        {/* 🔥 FARBIGE CHIPS (Tags) DARUNTER */}
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-50">
          {displayTags.map(tag => (
            <span 
              key={tag} 
              className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase border ${getChipColor(tag)}`}
            >
              {tag.replace('_', ' ')}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
