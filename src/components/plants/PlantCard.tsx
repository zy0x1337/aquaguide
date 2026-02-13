import { Link } from 'react-router-dom';
import { Sun, Wind, Ruler, Layers, Zap, Sprout, Droplets, Globe } from 'lucide-react'; 
import type { Plant } from '../../types/plant';

interface PlantCardProps {
  data: Plant;
}

export const PlantCard = ({ data }: PlantCardProps) => {
  const fallbackImage = "https://images.unsplash.com/photo-1520302669765-227891896796?auto=format&fit=crop&q=80&w=800";
  let imageSrc = data.imageUrl || fallbackImage;
  if (imageSrc.startsWith('images/')) imageSrc = `/${imageSrc}`;

  const difficultyColors = {
    easy: 'bg-emerald-500/90 text-white border-emerald-400 shadow-emerald-500/30',
    medium: 'bg-coral-500/90 text-white border-coral-400 shadow-coral-500/30',
    advanced: 'bg-sapphire-500/90 text-white border-sapphire-400 shadow-sapphire-500/30'
  };

  // Type Icons & Colors
  const typeConfig: Record<string, { icon: any; color: string; bg: string }> = {
  stem: { icon: Sprout, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  rosette: { icon: Sprout, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  rhizome: { icon: Layers, color: 'text-purple-500', bg: 'bg-purple-50' },
  moss: { icon: Sprout, color: 'text-green-500', bg: 'bg-green-50' },
  float: { icon: Droplets, color: 'text-blue-500', bg: 'bg-blue-50' },  // Wasser Tropfen
  bulb: { icon: Zap, color: 'text-orange-500', bg: 'bg-orange-50' },   // Energie/Bulbus
  carpet: { icon: Layers, color: 'text-pink-500', bg: 'bg-pink-50' },   // Schichten
  fern: { icon: Wind, color: 'text-amber-500', bg: 'bg-amber-50' },     // ← FERN: Wind (Farnwedel)
  epiphyte: { icon: Globe, color: 'text-violet-500', bg: 'bg-violet-50' }, // Globus (Epiphyt)
  default: { icon: Layers, color: 'text-slate-500', bg: 'bg-slate-50' }
};

  const typeInfo = (typeConfig[data.specs.type as keyof typeof typeConfig] || typeConfig.default)!;

  return (
    <Link 
      to={`/plants/${data.slug}`}
      className="group relative flex flex-col bg-white dark:bg-slate-900 data-[theme=aquarium]:bg-white rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 data-[theme=aquarium]:border-emerald-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
    >
      {/* Hero Image + Difficulty Badge */}
      <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img 
          src={imageSrc} 
          alt={data.taxonomy.commonName} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          loading="lazy" 
        />
        <div className="absolute top-2 right-2">
          <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider backdrop-blur-md shadow-sm border ${difficultyColors[data.difficulty]}`}>
            {data.difficulty}
          </span>
        </div>
      </div>

      <div className="p-3 md:p-4 flex-1 flex flex-col">
        {/* Title */}
        <div className="mb-2">
          <h3 className="font-bold text-slate-900 dark:text-white data-[theme=aquarium]:text-onyx-900 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 data-[theme=aquarium]:group-hover:text-emerald-500 transition-colors line-clamp-1 text-sm md:text-base">
            {data.taxonomy.commonName}
          </h3>
          <p className="text-[10px] md:text-xs text-slate-400 dark:text-slate-500 data-[theme=aquarium]:text-slate-500 italic truncate font-serif mt-0.5">
            {data.taxonomy.scientificName}
          </p>
        </div>

        {/* TYPE – NEU (darüber) */}
        <div className="mb-3 pt-1 border-t border-slate-50 dark:border-slate-700/50 data-[theme=aquarium]:border-emerald-50">
          <div className="flex items-center gap-1.5">
            <div className={`p-1 rounded ${typeInfo.bg} dark:bg-slate-700/30 shrink-0`}>
              <typeInfo.icon className={`w-3.5 h-3.5 ${typeInfo.color}`} />
            </div>
            <span className="text-[10px] md:text-xs font-bold uppercase text-slate-700 dark:text-slate-200 data-[theme=aquarium]:text-slate-800">
              {data.specs.type}
            </span>
          </div>
        </div>

        {/* STATS GRID – 4 Items (ORIGINAL) */}
        <div className="grid grid-cols-2 gap-2 mb-3 pt-2 border-t border-slate-50 dark:border-slate-700/50 data-[theme=aquarium]:border-emerald-50">
          <div className="flex items-center gap-1.5">
            <div className="p-1 bg-amber-50 dark:bg-amber-900/30 data-[theme=aquarium]:bg-coral-50 rounded text-amber-500 dark:text-amber-400 data-[theme=aquarium]:text-coral-500 shrink-0">
              <Sun className="w-3 h-3" />
            </div>
            <span className="text-[9px] md:text-xs font-medium text-slate-600 dark:text-slate-300 data-[theme=aquarium]:text-slate-700 capitalize truncate">
              {data.specs.light} Light
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="p-1 bg-sky-50 dark:bg-sky-900/30 data-[theme=aquarium]:bg-sapphire-50 rounded text-sky-500 dark:text-sky-400 data-[theme=aquarium]:text-sapphire-500 shrink-0">
              <Wind className="w-3 h-3" />
            </div>
            <span className="text-[9px] md:text-xs font-medium text-slate-600 dark:text-slate-300 data-[theme=aquarium]:text-slate-700 capitalize truncate">
              {data.specs.co2} CO2
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="p-1 bg-emerald-50 dark:bg-emerald-900/30 rounded text-emerald-500 dark:text-emerald-400 shrink-0">
              <Ruler className="w-3 h-3" />
            </div>
            <span className="text-[9px] md:text-xs font-medium text-slate-600 dark:text-slate-300 data-[theme=aquarium]:text-slate-700 truncate">
              {data.specs.heightCM.max} cm
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="p-1 bg-emerald-50 dark:bg-emerald-900/30 rounded text-emerald-500 dark:text-emerald-400 shrink-0">
              <Zap className="w-3 h-3" />
            </div>
            <span className="text-[9px] md:text-xs font-medium text-slate-600 dark:text-slate-300 data-[theme=aquarium]:text-slate-700 capitalize truncate">
              {data.specs.growthRate}
            </span>
          </div>
        </div>

        {/* Placement Chips (unverändert) */}
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-50 dark:border-slate-700/50 data-[theme=aquarium]:border-emerald-50">
          {data.specs.placement.slice(0, 2).map(tag => (
            <span 
              key={tag} 
              className="px-2 py-0.5 rounded-full text-[8px] font-bold uppercase border bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 data-[theme=aquarium]:bg-emerald-100 data-[theme=aquarium]:text-emerald-700 border-emerald-200 dark:border-emerald-800/50 data-[theme=aquarium]:border-emerald-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
