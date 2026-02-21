import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Sun, Wind, Ruler, Layers, Thermometer, Droplets, 
  Sprout, Scissors, AlertTriangle, Sparkles, Target, Leaf, Beaker
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { plantRepository } from '../data/plants';
import { SEOHead } from '../components/seo/SEOHead';
import { ImageAttribution } from '../components/ui/ImageAttribution';

export const PlantDetailPage = () => {
  const { slug } = useParams();
  const plant = plantRepository.getBySlug(slug || '');
  const [activeTab, setActiveTab] = useState<'overview' | 'care' | 'advanced'>('overview');

  if (!plant) {
    return <NotFound />;
  }

  const difficultyStyles = {
    easy: 'bg-emerald-600 text-white border-emerald-700 shadow-lg',
    medium: 'bg-amber-600 text-white border-amber-700 shadow-lg',
    advanced: 'bg-rose-600 text-white border-rose-700 shadow-lg'
  };

  const nutrientBadgeColors: Record<'low' | 'medium' | 'high', string> = {
    low: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
    medium: 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    high: 'bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <SEOHead 
        title={`${plant.taxonomy.commonName} Care Guide`} 
        description={`Learn how to grow ${plant.taxonomy.commonName} in your aquarium.`}
      />

      {/* Hero Header */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
      >
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={plant.imageUrl} 
            alt={plant.taxonomy.commonName} 
            className="w-full h-full object-cover" 
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-teal-900/30" />
        </div>
        
        <ImageAttribution credit={plant.imageCredit} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <Link 
            to="/plants" 
            className="inline-flex items-center gap-2 text-slate-200 hover:text-white mb-6 md:mb-8 transition-colors text-sm font-bold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20 hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Database
          </Link>
          
          {/* Header Content */}
          <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
            {/* Left: Title & Info */}
            <div className="lg:col-span-3 space-y-5 md:space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-black uppercase tracking-wider border-2 ${difficultyStyles[plant.difficulty]}`}>
                  {plant.difficulty}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md text-white font-bold text-xs md:text-sm uppercase tracking-wider border border-white/20">
                  {plant.taxonomy.family}
                </span>
              </div>
              
              {/* Title */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 leading-tight">
                  {plant.taxonomy.commonName}
                </h1>
                <p className="text-lg md:text-xl text-slate-300 italic font-medium">
                  {plant.taxonomy.scientificName}
                </p>
              </div>
              
              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
                <QuickStat icon={<Layers className="w-4 h-4" />} label="Type" value={plant.specs.type} />
                <QuickStat icon={<Ruler className="w-4 h-4" />} label="Height" value={`${plant.specs.heightCM.max}cm`} />
                <QuickStat icon={<Sun className="w-4 h-4" />} label="Light" value={plant.specs.light} />
                <QuickStat icon={<Wind className="w-4 h-4" />} label="CO₂" value={plant.specs.co2} />
              </div>
            </div>
            
            {/* Right: Parameters Card */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 md:p-6 border-2 border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-5 pb-5 border-b border-white/20">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Sprout className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs uppercase font-black text-slate-300 tracking-wider mb-1">Growth Rate</div>
                    <div className="text-base md:text-lg font-bold text-white capitalize">{plant.specs.growthRate}</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <InfoRow icon={<Thermometer className="w-4 h-4 text-rose-400" />} label="Temperature" value={`${plant.parameters.tempC.min}-${plant.parameters.tempC.max}°C`} />
                  <InfoRow icon={<Droplets className="w-4 h-4 text-cyan-400" />} label="pH Range" value={`${plant.parameters.ph.min}-${plant.parameters.ph.max}`} />
                  <InfoRow icon={<Layers className="w-4 h-4 text-indigo-400" />} label="Placement" value={plant.specs.placement.join(', ')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* TAB NAVIGATION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden">
            {/* Tabs - Scrollable on Mobile */}
            <div className="flex border-b-2 border-slate-200 dark:border-slate-700 overflow-x-auto scrollbar-hide">
              <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} icon={<Target className="w-4 h-4" />}>
                Overview
              </TabButton>
              <TabButton active={activeTab === 'care'} onClick={() => setActiveTab('care')} icon={<Leaf className="w-4 h-4" />}>
                Care Guide
              </TabButton>
              <TabButton active={activeTab === 'advanced'} onClick={() => setActiveTab('advanced')} icon={<Beaker className="w-4 h-4" />}>
                Advanced
              </TabButton>
            </div>

            {/* Tab Content */}
            <div className="p-4 md:p-6 lg:p-8">
              {/* OVERVIEW TAB */}
              {activeTab === 'overview' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 md:space-y-8">
                  {/* Description */}
                  <div>
                    <SectionHeader title="About this Plant" icon={<Sparkles className="w-5 h-5" />} />
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-900/50 dark:to-blue-950/20 rounded-xl p-5 md:p-6 border-2 border-slate-200 dark:border-slate-700">
                      <p className="text-sm md:text-base lg:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                        {plant.description}
                      </p>
                    </div>
                  </div>

                  {/* Specs Grid */}
                  <div>
                    <SectionHeader title="Plant Specifications" icon={<Layers className="w-5 h-5" />} />
                    <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                      <SpecCard 
                        icon={<Layers className="w-5 h-5 text-indigo-500" />}
                        label="Type"
                        value={plant.specs.type}
                        gradient="from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30"
                        borderColor="border-indigo-200 dark:border-indigo-800"
                      />
                      <SpecCard 
                        icon={<Sun className="w-5 h-5 text-amber-500" />}
                        label="Light Demand"
                        value={plant.specs.light}
                        gradient="from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30"
                        borderColor="border-amber-200 dark:border-amber-800"
                      />
                      <SpecCard 
                        icon={<Wind className="w-5 h-5 text-cyan-500" />}
                        label="CO₂ Demand"
                        value={plant.specs.co2}
                        gradient="from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30"
                        borderColor="border-cyan-200 dark:border-cyan-800"
                      />
                      <SpecCard 
                        icon={<Sprout className="w-5 h-5 text-emerald-500" />}
                        label="Growth Rate"
                        value={plant.specs.growthRate}
                        gradient="from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30"
                        borderColor="border-emerald-200 dark:border-emerald-800"
                      />
                      <SpecCard 
                        icon={<Ruler className="w-5 h-5 text-purple-500" />}
                        label="Height Range"
                        value={`${plant.specs.heightCM.min}-${plant.specs.heightCM.max} cm`}
                        gradient="from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30"
                        borderColor="border-purple-200 dark:border-purple-800"
                      />
                      <SpecCard 
                        icon={<Layers className="w-5 h-5 text-indigo-500" />}
                        label="Placement"
                        value={plant.specs.placement.join(', ')}
                        gradient="from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30"
                        borderColor="border-indigo-200 dark:border-indigo-800"
                      />
                    </div>
                  </div>

                  {/* Water Parameters */}
                  <div>
                    <SectionHeader title="Optimal Water Parameters" icon={<Thermometer className="w-5 h-5" />} />
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-5 md:p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 space-y-6">
                      {/* Temperature Range */}
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm md:text-base font-bold text-slate-700 dark:text-slate-300">Temperature</span>
                          <span className="text-xs md:text-sm font-black bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 px-3 py-1.5 rounded-full border-2 border-rose-200 dark:border-rose-800">
                            {plant.parameters.tempC.min}-{plant.parameters.tempC.max}°C
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 md:h-3.5 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-sky-400 to-rose-400"
                            style={{
                              width: `${((plant.parameters.tempC.max - plant.parameters.tempC.min) / 20) * 100}%`,
                              marginLeft: `${((plant.parameters.tempC.min - 20) / 20) * 100}%`
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-[10px] md:text-xs text-slate-400 dark:text-slate-500 mt-2 font-semibold">
                          <span>20°C</span>
                          <span>24°C</span>
                          <span>28°C</span>
                        </div>
                      </div>

                      {/* pH Range */}
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm md:text-base font-bold text-slate-700 dark:text-slate-300">pH Range</span>
                          <span className="text-xs md:text-sm font-black bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400 px-3 py-1.5 rounded-full border-2 border-cyan-200 dark:border-cyan-800">
                            {plant.parameters.ph.min}-{plant.parameters.ph.max}
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 md:h-3.5 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-rose-400 via-amber-300 to-sky-400"
                            style={{
                              width: `${((plant.parameters.ph.max - plant.parameters.ph.min) / 4) * 100}%`,
                              marginLeft: `${((plant.parameters.ph.min - 5) / 4) * 100}%`
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-[10px] md:text-xs text-slate-400 dark:text-slate-500 mt-2 font-semibold">
                          <span>5.0</span>
                          <span>7.0</span>
                          <span>9.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* CARE GUIDE TAB */}
              {activeTab === 'care' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 md:space-y-8">
                  {/* Planting & Propagation */}
                  <div>
                    <SectionHeader title="Planting & Propagation" icon={<Sprout className="w-5 h-5" />} />
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl p-5 md:p-6 border-2 border-emerald-200 dark:border-emerald-800 shadow-lg space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        <BooleanCard 
                          label="Substrate Required?" 
                          value={plant.planting.substrate} 
                          trueText="Yes, needs soil/gravel" 
                          falseText="No (Epiphyte/Floating)" 
                        />
                        <BooleanCard 
                          label="Root Feeder?" 
                          value={plant.planting.soilTabs} 
                          trueText="Yes, use Root Tabs" 
                          falseText="No, Liquid Ferts ok" 
                        />
                      </div>

                      <div className="bg-white dark:bg-slate-800 p-4 md:p-5 rounded-xl shadow-md border-2 border-emerald-100 dark:border-emerald-900">
                        <h4 className="font-black text-emerald-700 dark:text-emerald-400 flex items-center mb-2 text-xs md:text-sm uppercase tracking-wide">
                          <Scissors className="w-4 h-4 mr-2" /> Propagation Method
                        </h4>
                        <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">{plant.planting.propagation}</p>
                      </div>
                      
                      {plant.planting.notes && (
                        <div className="flex gap-3 md:gap-4 p-4 md:p-5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-200 dark:border-rose-800 shadow-md">
                          <div className="p-2 bg-rose-100 dark:bg-rose-900/50 rounded-lg flex-shrink-0">
                            <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                          </div>
                          <div>
                            <h4 className="font-black text-rose-700 dark:text-rose-400 text-sm md:text-base mb-1">Important Care Note</h4>
                            <p className="text-rose-800 dark:text-rose-300 text-xs md:text-sm leading-relaxed">{plant.planting.notes}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Nutrients */}
                  {plant.nutrients && (
                    <div>
                      <SectionHeader title="Nutrient Requirements" icon={<Droplets className="w-5 h-5" />} />
                      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 shadow-lg border-2 border-slate-200 dark:border-slate-700">
                        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                          <NutrientBox label="Nitrogen (N)" level={plant.nutrients.nitrogen} colors={nutrientBadgeColors} />
                          <NutrientBox label="Phosphate (P)" level={plant.nutrients.phosphate} colors={nutrientBadgeColors} />
                          <NutrientBox label="Potassium (K)" level={plant.nutrients.potassium} colors={nutrientBadgeColors} />
                          <NutrientBox label="Iron (Fe)" level={plant.nutrients.iron} colors={nutrientBadgeColors} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Common Problems */}
                  {plant.commonProblems && plant.commonProblems.length > 0 && (
                    <div>
                      <SectionHeader title="Common Problems & Solutions" icon={<AlertTriangle className="w-5 h-5" />} />
                      <div className="space-y-3 md:space-y-4">
                        {plant.commonProblems.map((problem, index) => (
                          <div 
                            key={index} 
                            className="p-4 md:p-5 rounded-xl border-2 border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/30 shadow-md"
                          >
                            <h4 className="font-black text-rose-700 dark:text-rose-400 text-sm md:text-base mb-2">{problem.title}</h4>
                            <p className="text-xs md:text-sm text-rose-800 dark:text-rose-300 mb-2 leading-relaxed">{problem.desc}</p>
                            <p className="text-xs md:text-sm font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                              <span className="text-emerald-500">✓</span> {problem.solution}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* ADVANCED TAB */}
              {activeTab === 'advanced' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 md:space-y-8">
                  {/* Scientific Classification */}
                  <div>
                    <SectionHeader title="Scientific Classification" icon={<Beaker className="w-5 h-5" />} />
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 md:p-6 border-2 border-slate-200 dark:border-slate-700 space-y-4">
                      <ClassificationRow label="Family" value={plant.taxonomy.family} />
                      <ClassificationRow label="Scientific Name" value={plant.taxonomy.scientificName} />
                      <ClassificationRow label="Common Name" value={plant.taxonomy.commonName} />
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div>
                    <SectionHeader title="Technical Details" icon={<Layers className="w-5 h-5" />} />
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                      <TechDetailCard 
                        label="Growth Pattern"
                        value={plant.specs.type}
                        description="How the plant grows and spreads"
                      />
                      <TechDetailCard 
                        label="Placement Zones"
                        value={plant.specs.placement.join(', ')}
                        description="Ideal positions in the aquarium"
                      />
                      <TechDetailCard 
                        label="Height Range"
                        value={`${plant.specs.heightCM.min}-${plant.specs.heightCM.max} cm`}
                        description="Expected size when fully grown"
                      />
                      <TechDetailCard 
                        label="Growth Speed"
                        value={plant.specs.growthRate}
                        description="Rate of vertical and lateral growth"
                      />
                    </div>
                  </div>

                  {/* Related Plants */}
                  {plant.relatedPlants && plant.relatedPlants.length > 0 && (
                    <div>
                      <SectionHeader title="Similar Plants" icon={<Leaf className="w-5 h-5" />} />
                      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 shadow-lg border-2 border-slate-200 dark:border-slate-700">
                        <div className="flex flex-wrap gap-2">
                          {plant.relatedPlants.map((relatedSlug) => {
                            const relatedPlant = plantRepository.getBySlug(relatedSlug);
                            return (
                              <Link
                                key={relatedSlug}
                                to={`/plants/${relatedSlug}`}
                                className="px-3 py-2 rounded-lg text-xs md:text-sm font-bold bg-slate-50 dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                                title={relatedPlant?.taxonomy.commonName || ''}
                              >
                                {relatedPlant?.taxonomy.commonName || relatedSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

// ==================== COMPONENTS ====================

const QuickStat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border-2 border-white/20 hover:bg-white/20 transition-all shadow-lg">
    <div className="flex items-center gap-2 mb-1.5">
      <div className="text-cyan-400">{icon}</div>
      <span className="text-[10px] md:text-xs text-slate-300 font-bold uppercase tracking-wide">{label}</span>
    </div>
    <div className="text-base md:text-lg font-black text-white capitalize truncate">{value}</div>
  </div>
);

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-xs md:text-sm text-slate-300 font-semibold">{label}</span>
    </div>
    <span className="text-sm md:text-base text-white font-bold capitalize truncate ml-2">{value}</span>
  </div>
);

const SectionHeader = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-slate-100 mb-4 md:mb-5 flex items-center gap-2 md:gap-3">
    <div className="text-emerald-600 dark:text-emerald-400">{icon}</div>
    {title}
  </h3>
);

const SpecCard = ({ icon, label, value, gradient, borderColor }: { icon: React.ReactNode; label: string; value: string; gradient: string; borderColor: string }) => (
  <div className={`bg-gradient-to-br ${gradient} rounded-xl p-4 md:p-5 border-2 ${borderColor} shadow-lg`}>
    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
      {icon}
      <span className="text-xs md:text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-wide">{label}</span>
    </div>
    <div className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 capitalize">{value}</div>
  </div>
);

const BooleanCard = ({ label, value, trueText, falseText }: any) => (
  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md border-2 border-slate-200 dark:border-slate-700">
    <div className="text-[10px] md:text-xs font-black text-slate-400 dark:text-slate-500 uppercase mb-2 tracking-wide">{label}</div>
    <div className={`font-black text-sm md:text-base ${value ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'}`}>
      {value ? trueText : falseText}
    </div>
  </div>
);

const NutrientBox = ({ label, level, colors }: { label: string; level: 'low' | 'medium' | 'high'; colors: Record<'low' | 'medium' | 'high', string> }) => (
  <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700">
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm md:text-base font-bold text-slate-700 dark:text-slate-300">{label}</span>
    </div>
    <div className="flex items-center gap-3">
      <div className="flex-1 flex gap-1">
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className={`h-2 md:h-2.5 flex-1 rounded-full transition-all ${
              i <= (level === 'low' ? 1 : level === 'medium' ? 2 : 3)
                ? level === 'low' ? 'bg-emerald-500' : level === 'medium' ? 'bg-amber-500' : 'bg-rose-500'
                : 'bg-slate-200 dark:bg-slate-700'
            }`}
          />
        ))}
      </div>
      <span className={`px-3 py-1 rounded-lg border-2 text-xs md:text-sm font-black capitalize ${colors[level]}`}>
        {level}
      </span>
    </div>
  </div>
);

const ClassificationRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between py-2 border-b border-slate-200 dark:border-slate-700 last:border-0">
    <span className="text-sm md:text-base font-bold text-slate-600 dark:text-slate-400">{label}</span>
    <span className="text-sm md:text-base font-black text-slate-900 dark:text-slate-100 capitalize">{value}</span>
  </div>
);

const TechDetailCard = ({ label, value, description }: { label: string; value: string; description: string }) => (
  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 md:p-5 border-2 border-slate-200 dark:border-slate-700 shadow-lg">
    <div className="text-xs md:text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">{label}</div>
    <div className="text-lg md:text-xl font-black text-slate-900 dark:text-slate-100 mb-2 capitalize">{value}</div>
    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const TabButton = ({ active, onClick, icon, children }: { active: boolean; onClick: () => void; icon: React.ReactNode; children: React.ReactNode }) => (
  <button 
    onClick={onClick} 
    className={`flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-black transition-all whitespace-nowrap ${ 
      active 
        ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 border-b-4 border-emerald-600 dark:border-emerald-500' 
        : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border-b-4 border-transparent'
    }`}
  >
    {icon}
    <span className="hidden sm:inline">{children}</span>
  </button>
);

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6">
    <div className="text-center max-w-md mx-auto bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-2xl border-2 border-slate-200 dark:border-slate-700">
      <div className="w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-2xl mx-auto mb-6 flex items-center justify-center">
        <Sprout className="w-12 h-12 text-slate-400 dark:text-slate-500" />
      </div>
      <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Plant Not Found</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6">The plant you're looking for doesn't exist in our database.</p>
      <Link to="/plants" className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold bg-emerald-50 dark:bg-emerald-950/30 px-6 py-3 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-all">
        <ArrowLeft className="w-4 h-4" /> Return to Database
      </Link>
    </div>
  </div>
);

export default PlantDetailPage;
