import { Link } from 'react-router-dom';
import {
  Thermometer,
  Droplets,
  Ruler,
  Fish,
  Users,
  Utensils,
  ArrowRight
} from 'lucide-react';
import type { Species } from '../../types/species';

interface Props {
  data: Species;
}

export const SpeciesCard = ({ data }: Props) => {
  // LOGIK: Nutze das Bild aus den Daten, oder einen hochwertigen Fallback
  const fallbackImage = "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=800";
  const imageSrc = data.imageUrl || fallbackImage;

  return (
    <Link
      to={`/species/${data.slug}`}
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-3xl"
      aria-label={`Open care guide for ${data.taxonomy.commonName}`}
    >
      <article className="relative h-full flex flex-col bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 overflow-hidden">
        
        {/* --- HERO IMAGE SECTION --- */}
        <div className="relative h-48 overflow-hidden bg-slate-100">
          
          {/* Das Bild (Zoomt beim Hover) */}
          <img 
            src={imageSrc}
            alt={data.taxonomy.commonName}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              // Falls das lokale Bild nicht gefunden wird, lade den Fallback
              e.currentTarget.src = fallbackImage;
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-slate-700 uppercase tracking-wide shadow-sm">
               <span className={`w-1.5 h-1.5 rounded-full ${
                 data.environment.type === 'freshwater' ? 'bg-blue-500' : 'bg-teal-500'
               }`} />
              {data.environment.type}
            </span>

            <span
              className={[
                'inline-flex items-center rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-sm',
                data.care.difficulty === 'beginner'
                  ? 'bg-emerald-500/90 text-white'
                  : data.care.difficulty === 'medium'
                    ? 'bg-amber-500/90 text-white'
                    : 'bg-rose-500/90 text-white',
              ].join(' ')}
            >
              {data.care.difficulty}
            </span>
          </div>
        </div>

        {/* --- CONTENT BODY --- */}
        <div className="p-6 flex-1 flex flex-col">
          
          {/* Title */}
          <header className="mb-6">
            <h3 className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
              {data.taxonomy.commonName}
            </h3>
            <p className="text-sm font-medium text-slate-500 italic mt-1 font-serif">
              {data.taxonomy.scientificName}
            </p>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-y-4 gap-x-2 mb-6">
            <StatItem 
              icon={<Ruler className="w-4 h-4 text-indigo-500" />} 
              label="Size" 
              value={`${data.visuals.adultSizeCM} cm`} 
            />
            <StatItem 
              icon={<Fish className="w-4 h-4 text-blue-500" />} 
              label="Min Tank" 
              value={`${data.environment.minTankSizeLiters} L`} 
            />
            <StatItem 
              icon={<Thermometer className="w-4 h-4 text-rose-500" />} 
              label="Temp" 
              value={`${data.environment.tempC.min}-${data.environment.tempC.max}°C`} 
            />
            <StatItem 
              icon={<Users className="w-4 h-4 text-emerald-500" />} 
              label="Group" 
              value={data.behavior.minGroupSize === 1 ? 'Solo' : `${data.behavior.minGroupSize}+`} 
            />
            <StatItem 
              icon={<Droplets className="w-4 h-4 text-cyan-500" />} 
              label="pH" 
              value={`${data.environment.ph.min}-${data.environment.ph.max}`} 
            />
             <StatItem 
              icon={<Utensils className="w-4 h-4 text-amber-500" />} 
              label="Diet" 
              value={data.care.diet} 
            />
          </div>

          <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
            {/* Tags Row - Jetzt mit schönen Farben! */}
            <div className="flex flex-wrap gap-1.5 overflow-hidden h-6">
               {data.behavior.tags.slice(0, 2).map(tag => (
                 <SimpleTag key={tag} tag={tag} />
               ))}
               {data.behavior.tags.length > 2 && (
                 <span className="text-[10px] font-bold text-slate-400 self-center px-1">
                   +{data.behavior.tags.length - 2}
                 </span>
               )}
            </div>

            {/* Action Arrow */}
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
               <ArrowRight className="w-4 h-4" />
            </div>
          </div>

        </div>
      </article>
    </Link>
  );
};

// --- SUB COMPONENTS ---

const StatItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-1.5 mb-0.5 opacity-80">
      {icon}
      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{label}</span>
    </div>
    <span className="text-xs font-bold text-slate-700 capitalize pl-0.5">{value}</span>
  </div>
);

// UPDATE: Jetzt mit Farblogik passend zur Detailseite
const SimpleTag = ({ tag }: { tag: string }) => {
  const label = tag.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  // Default Style (Grau)
  let colorClass = "text-slate-600 bg-slate-100 border border-slate-200";

  // Farben zuweisen
  switch (tag) {
    // Warnungen (Rot)
    case 'jumper':
    case 'territorial':
    case 'fin_nipper':
    case 'predator':
      colorClass = "text-rose-700 bg-rose-50 border border-rose-100";
      break;
      
    // Friedlich (Grün)
    case 'peaceful':
      colorClass = "text-emerald-700 bg-emerald-50 border border-emerald-100";
      break;

    // Social / Gruppe (Teal & Blau)
    case 'social':
      colorClass = "text-teal-700 bg-teal-50 border border-teal-100";
      break;
    case 'shoaler':
    case 'schooler':
      colorClass = "text-blue-700 bg-blue-50 border border-blue-100";
      break;

    // Aktiv (Amber/Orange)
    case 'active':
      colorClass = "text-amber-700 bg-amber-50 border border-amber-100";
      break;

    // Scheu (Lila)
    case 'shy':
      colorClass = "text-purple-700 bg-purple-50 border border-purple-100";
      break;
  }

  return (
    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${colorClass} truncate max-w-[80px]`}>
      {label}
    </span>
  );
};
