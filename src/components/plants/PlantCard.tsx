import { Link } from 'react-router-dom';
import { Sun, Wind, Ruler, Layers, Zap, Sprout, Droplets, Globe } from 'lucide-react'; 
import type { Plant } from '../../types/plant';
import { cn } from '../../lib/utils';

interface PlantCardProps {
  data: Plant;
}

export const PlantCard = ({ data }: PlantCardProps) => {
  const fallbackImage = "https://images.unsplash.com/photo-1520302669765-227891896796?auto=format&fit=crop&q=80&w=800";
  let imageSrc = data.imageUrl || fallbackImage;
  if (imageSrc.startsWith('images/')) imageSrc = `/${imageSrc}`;

  const difficultyColors = {
    easy: 'bg-emerald-500/90 text-white border-emerald-400/50 shadow-emerald-500/30',
    medium: 'bg-coral-500/90 text-white border-coral-400/50 shadow-coral-500/30',
    advanced: 'bg-sapphire-500/90 text-white border-sapphire-400/50 shadow-sapphire-500/30'
  };

  // Type Icons & Colors
  const typeConfig: Record<string, { icon: any; color: string; bgLight: string; bgDark: string }> = {
    stem: { icon: Sprout, color: 'text-indigo-500 dark:text-indigo-400', bgLight: 'bg-indigo-50', bgDark: 'dark:bg-indigo-900/20' },
    rosette: { icon: Sprout, color: 'text-emerald-500 dark:text-emerald-400', bgLight: 'bg-emerald-50', bgDark: 'dark:bg-emerald-900/20' },
    rhizome: { icon: Layers, color: 'text-purple-500 dark:text-purple-400', bgLight: 'bg-purple-50', bgDark: 'dark:bg-purple-900/20' },
    moss: { icon: Sprout, color: 'text-green-500 dark:text-green-400', bgLight: 'bg-green-50', bgDark: 'dark:bg-green-900/20' },
    float: { icon: Droplets, color: 'text-blue-500 dark:text-blue-400', bgLight: 'bg-blue-50', bgDark: 'dark:bg-blue-900/20' },
    bulb: { icon: Zap, color: 'text-orange-500 dark:text-orange-400', bgLight: 'bg-orange-50', bgDark: 'dark:bg-orange-900/20' },
    carpet: { icon: Layers, color: 'text-pink-500 dark:text-pink-400', bgLight: 'bg-pink-50', bgDark: 'dark:bg-pink-900/20' },
    fern: { icon: Wind, color: 'text-amber-500 dark:text-amber-400', bgLight: 'bg-amber-50', bgDark: 'dark:bg-amber-900/20' },
    epiphyte: { icon: Globe, color: 'text-violet-500 dark:text-violet-400', bgLight: 'bg-violet-50', bgDark: 'dark:bg-violet-900/20' },
    default: { icon: Layers, color: 'text-gray-500 dark:text-gray-400', bgLight: 'bg-gray-50', bgDark: 'dark:bg-gray-800' }
  };

  const typeInfo = typeConfig[data.specs.type as keyof typeof typeConfig] || typeConfig.default;

  return (
    <Link 
      to={`/plants/${data.slug}`}
      className={cn(
        "group relative flex flex-col",
        "bg-white dark:bg-gray-900",
        "rounded-2xl shadow-sm dark:shadow-dark-md",
        "border border-gray-200 dark:border-gray-800",
        "overflow-hidden",
        "hover:shadow-xl dark:hover:shadow-dark-lg hover:-translate-y-1",
        "transition-all duration-300 h-full"
      )}
    >
      {/* Hero Image + Difficulty Badge */}
      <div className="aspect-[4/3] w-full relative overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img 
          src={imageSrc} 
          alt={data.taxonomy.commonName} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          loading="lazy" 
        />
        <div className="absolute top-2 right-2">
          <span className={cn(
            "px-1.5 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider",
            "backdrop-blur-md shadow-sm border",
            difficultyColors[data.difficulty]
          )}>
            {data.difficulty}
          </span>
        </div>
      </div>

      <div className="p-3 md:p-4 flex-1 flex flex-col">
        {/* Title */}
        <div className="mb-2">
          <h3 className="font-bold text-gray-900 dark:text-white leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1 text-sm md:text-base">
            {data.taxonomy.commonName}
          </h3>
          <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 italic truncate font-serif mt-0.5">
            {data.taxonomy.scientificName}
          </p>
        </div>

        {/* TYPE */}
        <div className="mb-3 pt-1 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-1.5">
            <div className={cn("p-1 rounded shrink-0", typeInfo.bgLight, typeInfo.bgDark)}>
              <typeInfo.icon className={cn("w-3.5 h-3.5", typeInfo.color)} />
            </div>
            <span className="text-[10px] md:text-xs font-bold uppercase text-gray-700 dark:text-gray-200">
              {data.specs.type}
            </span>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 gap-2 mb-3 pt-2 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-1.5">
            <div className="p-1 bg-amber-50 dark:bg-amber-900/20 rounded text-amber-500 dark:text-amber-400 shrink-0">
              <Sun className="w-3 h-3" />
            </div>
            <span className="text-[9px] md:text-xs font-medium text-gray-600 dark:text-gray-400 capitalize truncate">
              {data.specs.light} Light
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="p-1 bg-sapphire-50 dark:bg-sapphire-900/20 rounded text-sapphire-500 dark:text-sapphire-400 shrink-0">
              <Wind className="w-3 h-3" />
            </div>
            <span className="text-[9px] md:text-xs font-medium text-gray-600 dark:text-gray-400 capitalize truncate">
              {data.specs.co2} CO2
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="p-1 bg-emerald-50 dark:bg-emerald-900/20 rounded text-emerald-500 dark:text-emerald-400 shrink-0">
              <Ruler className="w-3 h-3" />
            </div>
            <span className="text-[9px] md:text-xs font-medium text-gray-600 dark:text-gray-400 truncate">
              {data.specs.heightCM.max} cm
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="p-1 bg-emerald-50 dark:bg-emerald-900/20 rounded text-emerald-500 dark:text-emerald-400 shrink-0">
              <Zap className="w-3 h-3" />
            </div>
            <span className="text-[9px] md:text-xs font-medium text-gray-600 dark:text-gray-400 capitalize truncate">
              {data.specs.growthRate}
            </span>
          </div>
        </div>

        {/* Placement Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-gray-200 dark:border-gray-800">
          {data.specs.placement.slice(0, 2).map(tag => (
            <span 
              key={tag} 
              className="px-2 py-0.5 rounded-full text-[8px] font-bold uppercase border bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
