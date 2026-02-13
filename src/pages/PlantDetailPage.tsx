import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Sun, Wind, Ruler, Layers, Thermometer, Droplets, 
  Sprout, Scissors, AlertTriangle 
} from 'lucide-react';
import { plantRepository } from '../data/plants';
import { SEOHead } from '../components/seo/SEOHead';
import { ImageAttribution } from '../components/ui/ImageAttribution';

export const PlantDetailPage = () => {
  const { slug } = useParams();
  const plant = plantRepository.getBySlug(slug || '');

  if (!plant) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-400">
        <div className="text-center">
          <Sprout className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <h1 className="text-2xl font-bold mb-2">Plant not found</h1>
          <Link to="/plants" className="text-emerald-600 hover:underline">Back to Database</Link>
        </div>
      </div>
    );
  }

  const difficultyStyles = {
    easy: 'bg-emerald-500 shadow-emerald-500/30 text-white border-emerald-400',
    medium: 'bg-amber-500 shadow-amber-500/30 text-white border-amber-400',
    advanced: 'bg-rose-500 shadow-rose-500/30 text-white border-rose-400'
  };

  // Für Nutrient-Badges (low/medium/high)
  const nutrientBadgeColors: Record<'low' | 'medium' | 'high', string> = {
    low: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    medium: 'bg-amber-50 text-amber-700 border-amber-100',
    high: 'bg-rose-50 text-rose-700 border-rose-100'
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20 transition-colors duration-300">
      <SEOHead 
        title={`${plant.taxonomy.commonName} Care Guide`} 
        description={`Learn how to grow ${plant.taxonomy.commonName}.`}
      />

      {/* 🌟 HERO HEADER */}
      <header className="relative h-[45vh] min-h-[400px] overflow-hidden group">
        <div className="absolute inset-0">
          <img 
            src={plant.imageUrl} 
            alt={plant.taxonomy.commonName} 
            className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105"
          />
          {/* FADE GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        </div>

        {/* 
            👇👇👇 2. HIER WIRD DER CHIP EINGEFÜGT 
            Er hat z-30 (in der Komponente definiert), liegt also über allem anderen.
        */}
        <ImageAttribution credit={plant.imageCredit} />

        {/* Back Button */}
        <div className="absolute top-0 left-0 w-full p-4 md:p-6 z-10">
          <Link 
            to="/plants" 
            className="inline-flex items-center text-white/90 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold transition-all border border-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Link>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-lg border ${difficultyStyles[plant.difficulty]}`}>
                {plant.difficulty}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider border border-white/20">
                {plant.taxonomy.family}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-2 leading-tight drop-shadow-lg">
              {plant.taxonomy.commonName}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 italic font-serif opacity-90 drop-shadow-md">
              {plant.taxonomy.scientificName}
            </p>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 -mt-8 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Specs */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-6 flex items-center">
                <Sprout className="w-4 h-4 mr-2" /> Plant Specs
              </h3>
              
              <div className="space-y-6">
  <SpecRow icon={Layers} label="Type" value={plant.specs.type} color="text-indigo-500" bgColor="bg-indigo-50" />
  <SpecRow icon={Sun} label="Light" value={`${plant.specs.light} Demand`} color="text-amber-500" bgColor="bg-amber-50" />
  <SpecRow icon={Wind} label="CO2" value={`${plant.specs.co2} Demand`} color="text-cyan-500" bgColor="bg-cyan-50" />
  <SpecRow icon={Sprout} label="Growth" value={plant.specs.growthRate} color="text-emerald-500" bgColor="bg-emerald-50" />
  <SpecRow icon={Layers} label="Position" value={plant.specs.placement.join(', ')} color="text-indigo-500" bgColor="bg-indigo-50" />
  <SpecRow icon={Ruler} label="Height" value={`${plant.specs.heightCM.min}-${plant.specs.heightCM.max} cm`} color="text-purple-500" bgColor="bg-purple-50" />
</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <ParamBox icon={Thermometer} label="Temp" value={`${plant.parameters.tempC.min}-${plant.parameters.tempC.max}°C`} color="text-rose-500" bgColor="bg-rose-50" />
               <ParamBox icon={Droplets} label="pH" value={`${plant.parameters.ph.min}-${plant.parameters.ph.max}`} color="text-cyan-500" bgColor="bg-cyan-50" />
            </div>

            {/* OPTIONALE NÄHRSTOFFE (kompakt links) */}
            {plant.nutrients && (
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4 flex items-center">
                  <Droplets className="w-4 h-4 mr-2 text-emerald-500" /> Nutrient Demand
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Nitrogen (N)</span>
                    <span className={`px-2 py-0.5 rounded-full border text-[11px] font-semibold capitalize ${nutrientBadgeColors[plant.nutrients.nitrogen]}`}>
                      {plant.nutrients.nitrogen}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Phosphate (P)</span>
                    <span className={`px-2 py-0.5 rounded-full border text-[11px] font-semibold capitalize ${nutrientBadgeColors[plant.nutrients.phosphate]}`}>
                      {plant.nutrients.phosphate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Potassium (K)</span>
                    <span className={`px-2 py-0.5 rounded-full border text-[11px] font-semibold capitalize ${nutrientBadgeColors[plant.nutrients.potassium]}`}>
                      {plant.nutrients.potassium}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Iron (Fe)</span>
                    <span className={`px-2 py-0.5 rounded-full border text-[11px] font-semibold capitalize ${nutrientBadgeColors[plant.nutrients.iron]}`}>
                      {plant.nutrients.iron}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">About this Plant</h3>
              <p className="text-lg leading-relaxed text-slate-600">
                {plant.description}
              </p>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-800 mb-6 flex items-center">
                <Sprout className="w-6 h-6 mr-2" /> Planting & Propagation
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <BooleanCard label="Substrate Required?" value={plant.planting.substrate} trueText="Yes, needs soil/gravel" falseText="No (Epiphyte / Floating)" />
                <BooleanCard label="Root Feeder?" value={plant.planting.soilTabs} trueText="Yes, use Root Tabs" falseText="No, Liquid Ferts ok" />
              </div>

              <div className="space-y-4">
                 <div className="bg-white/80 dark:bg-black/20 p-4 rounded-xl shadow-sm border border-emerald-100/50 dark:border-transparent">
                   <h4 className="font-bold text-emerald-700 flex items-center mb-2 text-sm uppercase tracking-wide">
                     <Scissors className="w-4 h-4 mr-2" /> Propagation Method
                   </h4>
                   <p className="text-slate-700 dark:text-slate-300">{plant.planting.propagation}</p>
                 </div>
                 
                 {plant.planting.notes && (
                   <div className="flex gap-4 p-4 rounded-xl bg-rose-50 border border-rose-100">
                     <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                     <div>
                       <h4 className="font-bold text-rose-700 text-sm mb-1">Important Care Note</h4>
                       <p className="text-rose-800 text-sm leading-snug">{plant.planting.notes}</p>
                     </div>
                   </div>
                 )}
              </div>
            </div>

            {/* OPTIMAL PARAMETERS – NEU */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <Thermometer className="w-5 h-5 mr-2 text-rose-500" /> Optimal Parameters
              </h3>
              <div className="space-y-6">
                {/* Temperature Range */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700">Temperature</span>
                    <span className="text-xs font-bold bg-rose-50 text-rose-700 px-3 py-1 rounded-full border border-rose-100">
                      {plant.parameters.tempC.min}-{plant.parameters.tempC.max}°C
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-sky-400 to-rose-400"
                      style={{
                        width: `${((plant.parameters.tempC.max - plant.parameters.tempC.min) / 20) * 100}%`,
                        marginLeft: `${((plant.parameters.tempC.min - 20) / 20) * 100}%`
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>20°C</span>
                    <span>24°C</span>
                    <span>28°C</span>
                  </div>
                </div>

                {/* pH Range */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700">pH Range</span>
                    <span className="text-xs font-bold bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full border border-cyan-100">
                      {plant.parameters.ph.min}-{plant.parameters.ph.max}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-rose-400 via-amber-300 to-sky-400"
                      style={{
                        width: `${((plant.parameters.ph.max - plant.parameters.ph.min) / 4) * 100}%`,
                        marginLeft: `${((plant.parameters.ph.min - 5) / 4) * 100}%`
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>5.0</span>
                    <span>7.0</span>
                    <span>9.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* COMMON PROBLEMS – neu */}
            {plant.commonProblems && plant.commonProblems.length > 0 && (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-rose-500" /> Common Problems & Solutions
                </h3>
                <div className="space-y-4">
                  {plant.commonProblems.map((problem, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-xl border border-rose-100 bg-rose-50/60"
                    >
                      <h4 className="font-bold text-rose-700 text-sm mb-1">{problem.title}</h4>
                      <p className="text-sm text-rose-800 mb-1">{problem.desc}</p>
                      <p className="text-xs font-semibold text-emerald-700">
                        ✓ {problem.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* RELATED PLANTS */}
{plant.relatedPlants && plant.relatedPlants.length > 0 && (
  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
    <h3 className="text-xl font-bold text-slate-900 mb-4">Similar Plants</h3>
    <div className="flex flex-wrap gap-2">
      {plant.relatedPlants.map((relatedSlug) => {
        const relatedPlant = plantRepository.getBySlug(relatedSlug);
        return (
          <Link
            key={relatedSlug}
            to={`/plants/${relatedSlug}`}
            className="px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 text-slate-700 hover:text-emerald-700 transition-colors"
            title={relatedPlant?.taxonomy.commonName || ''}
          >
            {relatedPlant?.taxonomy.commonName || relatedSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </Link>
        );
      })}
    </div>
  </div>
)}

          </div>
        </div>
      </main>
    </div>
  );
};


// SUBCOMPONENTS
const SpecRow = ({ icon: Icon, label, value, color, bgColor }: any) => (
  <div className="flex items-center justify-between group">
    <div className="flex items-center text-slate-500">
      <div className={`p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform ${bgColor}`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <span className="font-medium text-sm">{label}</span>
    </div>
    <span className="font-bold text-slate-800 text-sm capitalize">{value}</span>
  </div>
);

const ParamBox = ({ icon: Icon, label, value, color, bgColor }: any) => (
  <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col items-center justify-center textcenter shadow-sm">
    <div className={`p-3 rounded-full mb-3 ${bgColor}`}>
      <Icon className={`w-6 h-6 ${color}`} />
    </div>
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</span>
    <span className="font-black text-slate-700 text-lg">{value}</span>
  </div>
);

const BooleanCard = ({ label, value, trueText, falseText }: any) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
     <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">{label}</div>
     <div className={`font-bold ${value ? 'text-emerald-600' : 'text-slate-600'}`}>
       {value ? trueText : falseText}
     </div>
  </div>
);
