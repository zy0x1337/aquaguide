import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Sun, Wind, Ruler, Layers, Thermometer, Droplets,
  Sprout, Scissors, AlertTriangle, Sparkles, Target, Leaf, Beaker,
  MapPin, CheckCircle, XCircle, Mountain, Fish, FlaskConical,
  Clock, Lightbulb, Info, Waves, Dna
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { plantRepository } from '../data/plants';
import { SEOHead } from '../components/seo/SEOHead';
import { ImageAttribution } from '../components/ui/ImageAttribution';
import type { Plant } from '../types/plant';

// ─── helpers ────────────────────────────────────────────────────────────────
const cap = (s?: string) => (s ? s[0].toUpperCase() + s.slice(1) : '');

const AQUASCAPE_STYLE_LABELS: Record<string, string> = {
  dutch: 'Dutch Style',
  nature_aquarium: 'Nature Aquarium',
  iwagumi: 'Iwagumi',
  biotope: 'Biotope',
  jungle: 'Jungle Style',
  low_tech: 'Low-Tech',
  walstad: 'Walstad Method',
};

const AQUASCAPE_STYLE_COLORS: Record<string, string> = {
  dutch: 'bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800',
  nature_aquarium: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  iwagumi: 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600',
  biotope: 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
  jungle: 'bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
  low_tech: 'bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
  walstad: 'bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
};

const difficultyStyles = {
  easy: 'bg-emerald-600 text-white border-emerald-700 shadow-lg',
  medium: 'bg-amber-600 text-white border-amber-700 shadow-lg',
  advanced: 'bg-rose-600 text-white border-rose-700 shadow-lg',
};

const nutrientBadgeColors: Record<'low' | 'medium' | 'high', string> = {
  low: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
  medium: 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
  high: 'bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800',
};

type Tab = 'overview' | 'care' | 'aquascape' | 'problems' | 'advanced';

// ─── page ────────────────────────────────────────────────────────────────────
export const PlantDetailPage = () => {
  const { slug } = useParams();
  const plant = plantRepository.getBySlug(slug || '');
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  if (!plant) return <NotFound />;

  const hasProblems = (plant.commonProblems?.length ?? 0) > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <SEOHead
        title={`${plant.taxonomy.commonName} Care Guide`}
        description={`Learn how to grow ${plant.taxonomy.commonName} in your aquarium.`}
      />

      {/* ── HERO ── */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden min-h-[340px] flex items-end"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={plant.imageUrl}
            alt={plant.taxonomy.commonName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/85 via-slate-900/40 to-slate-900/10" />
        </div>

        <ImageAttribution credit={plant.imageCredit} />

        <Link
          to="/plants"
          className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors text-sm font-bold bg-black/30 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20 hover:bg-black/50"
        >
          <ArrowLeft className="w-4 h-4" /> Plants
        </Link>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-8 pt-16">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider border-2 ${difficultyStyles[plant.difficulty]}`}>
              {plant.difficulty}
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-black/30 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider border border-white/20">
              {plant.taxonomy.family}
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-black/30 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider border border-white/20">
              {cap(plant.specs.type)}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1 leading-tight">
            {plant.taxonomy.commonName}
          </h1>
          <p className="text-base md:text-lg text-slate-300 italic font-medium mb-4">
            {plant.taxonomy.scientificName}
          </p>

          <div className="flex flex-wrap gap-2">
            <HeroPill icon={<Sun className="w-3.5 h-3.5 text-amber-300" />} label={`${cap(plant.specs.light)} Light`} />
            <HeroPill icon={<Wind className="w-3.5 h-3.5 text-cyan-300" />} label={`CO₂: ${cap(plant.specs.co2)}`} />
            <HeroPill icon={<Sprout className="w-3.5 h-3.5 text-emerald-300" />} label={`${cap(plant.specs.growthRate)} Growth`} />
            <HeroPill icon={<Ruler className="w-3.5 h-3.5 text-violet-300" />} label={`${plant.specs.heightCM.min}–${plant.specs.heightCM.max} cm`} />
            <HeroPill icon={<Thermometer className="w-3.5 h-3.5 text-rose-300" />} label={`${plant.parameters.tempC.min}–${plant.parameters.tempC.max} °C`} />
          </div>
        </div>
      </motion.header>

      {/* ── MAIN ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10">
        <div className="lg:grid lg:grid-cols-[1fr_290px] lg:gap-8 lg:items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="space-y-5">

            {plant.funFact && <FunFactBanner text={plant.funFact} />}

            {plant.planting.notes && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-200 dark:border-rose-800 shadow-md"
              >
                <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-black text-rose-600 dark:text-rose-400 uppercase tracking-wide mb-0.5">Important</p>
                  <p className="text-sm text-rose-800 dark:text-rose-300 leading-relaxed">{plant.planting.notes}</p>
                </div>
              </motion.div>
            )}

            {/* ── TAB CARD ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              {/* Desktop tabs */}
              <div className="hidden sm:flex border-b-2 border-slate-200 dark:border-slate-700 overflow-x-auto scrollbar-hide">
                <TabBtn id="overview" active={activeTab} onClick={setActiveTab} icon={<Target className="w-4 h-4" />}>Overview</TabBtn>
                <TabBtn id="care" active={activeTab} onClick={setActiveTab} icon={<Leaf className="w-4 h-4" />}>Care Guide</TabBtn>
                <TabBtn id="aquascape" active={activeTab} onClick={setActiveTab} icon={<Mountain className="w-4 h-4" />}>Aquascape</TabBtn>
                <TabBtn id="problems" active={activeTab} onClick={setActiveTab} icon={<AlertTriangle className="w-4 h-4" />}>
                  Problems{hasProblems && <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-black">{plant.commonProblems!.length}</span>}
                </TabBtn>
                <TabBtn id="advanced" active={activeTab} onClick={setActiveTab} icon={<Beaker className="w-4 h-4" />}>Advanced</TabBtn>
              </div>

              {/* Mobile tabs */}
              <div className="sm:hidden grid grid-cols-5 border-b-2 border-slate-200 dark:border-slate-700">
                <MobileTabBtn id="overview" active={activeTab} onClick={setActiveTab} icon={<Target className="w-4 h-4" />} label="Overview" />
                <MobileTabBtn id="care" active={activeTab} onClick={setActiveTab} icon={<Leaf className="w-4 h-4" />} label="Care" />
                <MobileTabBtn id="aquascape" active={activeTab} onClick={setActiveTab} icon={<Mountain className="w-4 h-4" />} label="Scape" />
                <MobileTabBtn id="problems" active={activeTab} onClick={setActiveTab} icon={<AlertTriangle className="w-4 h-4" />} label="Issues" />
                <MobileTabBtn id="advanced" active={activeTab} onClick={setActiveTab} icon={<Beaker className="w-4 h-4" />} label="Advanced" />
              </div>

              <div className="p-4 md:p-6 lg:p-8">

                {/* ── OVERVIEW ── */}
                {activeTab === 'overview' && (
                  <motion.div key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-7">

                    <div>
                      <SectionHeader title="About this Plant" icon={<Sparkles className="w-5 h-5" />} />
                      <div className="bg-gradient-to-br from-slate-50 to-emerald-50/40 dark:from-slate-900/50 dark:to-emerald-950/20 rounded-xl p-5 border-2 border-slate-200 dark:border-slate-700">
                        <p className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">{plant.description}</p>
                      </div>
                    </div>

                    <div>
                      <SectionHeader title="Plant Specifications" icon={<Layers className="w-5 h-5" />} />
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <SpecCard icon={<Layers className="w-5 h-5 text-indigo-500" />} label="Type" value={cap(plant.specs.type)} gradient="from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30" borderColor="border-indigo-200 dark:border-indigo-800" />
                        <SpecCard icon={<Sun className="w-5 h-5 text-amber-500" />} label="Light" value={cap(plant.specs.light)} gradient="from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30" borderColor="border-amber-200 dark:border-amber-800" />
                        <SpecCard icon={<Wind className="w-5 h-5 text-cyan-500" />} label="CO₂" value={cap(plant.specs.co2)} gradient="from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30" borderColor="border-cyan-200 dark:border-cyan-800" />
                        <SpecCard icon={<Sprout className="w-5 h-5 text-emerald-500" />} label="Growth Rate" value={cap(plant.specs.growthRate)} gradient="from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30" borderColor="border-emerald-200 dark:border-emerald-800" />
                        <SpecCard icon={<Ruler className="w-5 h-5 text-purple-500" />} label="Height" value={`${plant.specs.heightCM.min}–${plant.specs.heightCM.max} cm`} gradient="from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30" borderColor="border-purple-200 dark:border-purple-800" />
                        <SpecCard icon={<Layers className="w-5 h-5 text-violet-500" />} label="Placement" value={plant.specs.placement.join(', ')} gradient="from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/30" borderColor="border-violet-200 dark:border-violet-800" />
                      </div>
                    </div>

                    {/* Variants & cultivars – shown here so it's immediately discoverable */}
                    {plant.variants && plant.variants.length > 0 && (
                      <div>
                        <SectionHeader title="Known Varieties & Cultivars" icon={<Dna className="w-5 h-5" />} />
                        <div className="flex flex-wrap gap-2">
                          {plant.variants.map((v, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-xl bg-violet-50 dark:bg-violet-950/30 border-2 border-violet-200 dark:border-violet-800 text-xs font-bold text-violet-800 dark:text-violet-300 italic">
                              {v}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <SectionHeader title="Water Parameters" icon={<Thermometer className="w-5 h-5" />} />
                      <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border-2 border-slate-200 dark:border-slate-700 space-y-5">
                        <ParamBar
                          label="Temperature"
                          min={plant.parameters.tempC.min}
                          max={plant.parameters.tempC.max}
                          ideal={plant.parameters.tempC.ideal}
                          unit="°C"
                          scaleMin={10} scaleMax={32}
                          scaleLabels={['10°C', '20°C', '26°C', '32°C']}
                          colorClass="bg-gradient-to-r from-sky-400 to-rose-400"
                          badgeClass="bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800"
                        />
                        <ParamBar
                          label="pH Range"
                          min={plant.parameters.ph.min}
                          max={plant.parameters.ph.max}
                          ideal={plant.parameters.ph.ideal}
                          unit=""
                          scaleMin={5} scaleMax={9}
                          scaleLabels={['5.0', '6.5', '7.5', '9.0']}
                          colorClass="bg-gradient-to-r from-rose-400 via-amber-300 to-sky-400"
                          badgeClass="bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800"
                        />
                        {(plant.parameters.kh || plant.parameters.gh || plant.parameters.flow || plant.parameters.photoperiodHours) && (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-200 dark:border-slate-700">
                            {plant.parameters.kh && (
                              <MiniParamCard icon={<Droplets className="w-4 h-4 text-blue-500" />} label="KH" value={`${plant.parameters.kh.min}–${plant.parameters.kh.max} °dKH`} />
                            )}
                            {plant.parameters.gh && (
                              <MiniParamCard icon={<Droplets className="w-4 h-4 text-indigo-500" />} label="GH" value={`${plant.parameters.gh.min}–${plant.parameters.gh.max} °dGH`} />
                            )}
                            {plant.parameters.flow && (
                              <MiniParamCard icon={<Waves className="w-4 h-4 text-cyan-500" />} label="Flow" value={cap(plant.parameters.flow)} />
                            )}
                            {plant.parameters.photoperiodHours && (
                              <MiniParamCard icon={<Clock className="w-4 h-4 text-amber-500" />} label="Photoperiod" value={`${plant.parameters.photoperiodHours.min}–${plant.parameters.photoperiodHours.max} h`} />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ── CARE GUIDE ── */}
                {activeTab === 'care' && (
                  <motion.div key="care" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-7">

                    <div>
                      <SectionHeader title="Planting & Propagation" icon={<Sprout className="w-5 h-5" />} />
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl p-5 border-2 border-emerald-200 dark:border-emerald-800 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <BooleanCard label="Substrate Required?" value={plant.planting.substrate} trueText="Yes – needs soil / gravel" falseText="No (Epiphyte / Floating)" />
                          <BooleanCard label="Root Feeder?" value={plant.planting.soilTabs} trueText="Yes – use Root Tabs" falseText="No – liquid ferts sufficient" />
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md border-2 border-emerald-100 dark:border-emerald-900">
                          <h4 className="font-black text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-2 text-xs uppercase tracking-wide">
                            <Scissors className="w-4 h-4" /> Propagation Method
                          </h4>
                          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{plant.planting.propagation}</p>
                        </div>
                        {plant.planting.trimming && (
                          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md border-2 border-teal-100 dark:border-teal-900">
                            <h4 className="font-black text-teal-700 dark:text-teal-400 flex items-center gap-2 mb-2 text-xs uppercase tracking-wide">
                              <Scissors className="w-4 h-4" /> Trimming
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{plant.planting.trimming}</p>
                          </div>
                        )}
                        {plant.planting.senescenceNotes && (
                          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md border-2 border-slate-200 dark:border-slate-700">
                            <h4 className="font-black text-slate-600 dark:text-slate-400 flex items-center gap-2 mb-2 text-xs uppercase tracking-wide">
                              <Clock className="w-4 h-4" /> Ageing & Senescence
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{plant.planting.senescenceNotes}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {plant.nutrients && (
                      <div>
                        <SectionHeader title="Nutrient Requirements" icon={<Droplets className="w-5 h-5" />} />
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-lg border-2 border-slate-200 dark:border-slate-700">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <NutrientBox label="Nitrogen (N)" desc="Leaf mass & shoot development" level={plant.nutrients.nitrogen} colors={nutrientBadgeColors} />
                            <NutrientBox label="Phosphate (P)" desc="Cell energy & root growth" level={plant.nutrients.phosphate} colors={nutrientBadgeColors} />
                            <NutrientBox label="Potassium (K)" desc="Water balance & enzyme activity" level={plant.nutrients.potassium} colors={nutrientBadgeColors} />
                            <NutrientBox label="Iron (Fe)" desc="Chlorophyll synthesis & leaf colour" level={plant.nutrients.iron} colors={nutrientBadgeColors} />
                          </div>
                        </div>
                      </div>
                    )}

                    {plant.proTips && plant.proTips.length > 0 && (
                      <div>
                        <SectionHeader title="Pro Tips" icon={<Lightbulb className="w-5 h-5" />} />
                        <div className="space-y-2">
                          {plant.proTips.map((tip, i) => (
                            <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800">
                              <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">{tip}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {plant.commonMistakes && plant.commonMistakes.length > 0 && (
                      <div>
                        <SectionHeader title="Common Mistakes" icon={<XCircle className="w-5 h-5" />} />
                        <div className="space-y-2">
                          {plant.commonMistakes.map((mistake, i) => (
                            <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border-2 border-rose-200 dark:border-rose-800">
                              <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-rose-900 dark:text-rose-200 leading-relaxed">{mistake}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* ── AQUASCAPE ── */}
                {activeTab === 'aquascape' && (
                  <motion.div key="aquascape" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-7">
                    {plant.aquascapeContext ? (
                      <>
                        {plant.aquascapeContext.styles.length > 0 && (
                          <div>
                            <SectionHeader title="Suitable Aquascape Styles" icon={<Mountain className="w-5 h-5" />} />
                            <div className="flex flex-wrap gap-2">
                              {plant.aquascapeContext.styles.map(style => (
                                <span
                                  key={style}
                                  className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wide border-2 ${AQUASCAPE_STYLE_COLORS[style] ?? 'bg-slate-100 text-slate-700 border-slate-300'}`}
                                >
                                  {AQUASCAPE_STYLE_LABELS[style] ?? style}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {plant.aquascapeContext.roleInTank && (
                          <div>
                            <SectionHeader title="Role in the Tank" icon={<Target className="w-5 h-5" />} />
                            <div className="bg-indigo-50 dark:bg-indigo-950/30 border-2 border-indigo-200 dark:border-indigo-800 rounded-xl p-4">
                              <p className="text-sm text-indigo-900 dark:text-indigo-200 leading-relaxed">{plant.aquascapeContext.roleInTank}</p>
                            </div>
                          </div>
                        )}

                        <div>
                          <SectionHeader title="Placement Zones" icon={<Layers className="w-5 h-5" />} />
                          <PlacementVisualizer placements={plant.specs.placement} />
                        </div>

                        {plant.aquascapeContext.substrateRecommendations && plant.aquascapeContext.substrateRecommendations.length > 0 && (
                          <div>
                            <SectionHeader title="Substrate Recommendations" icon={<Layers className="w-5 h-5" />} />
                            <div className="space-y-2">
                              {plant.aquascapeContext.substrateRecommendations.map((rec, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800">
                                  <Layers className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                  <p className="text-sm text-amber-900 dark:text-amber-200">{rec}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {plant.aquascapeContext.companionFish && plant.aquascapeContext.companionFish.length > 0 && (
                          <div>
                            <SectionHeader title="Good Tankmates" icon={<Fish className="w-5 h-5" />} />
                            <div className="flex flex-wrap gap-2">
                              {plant.aquascapeContext.companionFish.map(fish => (
                                <span key={fish} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                                  <CheckCircle className="w-3 h-3" /> {fish}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {plant.aquascapeContext.incompatibleFish && plant.aquascapeContext.incompatibleFish.length > 0 && (
                          <div>
                            <SectionHeader title="Incompatible Fish" icon={<Fish className="w-5 h-5" />} />
                            <div className="flex flex-wrap gap-2">
                              {plant.aquascapeContext.incompatibleFish.map(fish => (
                                <span key={fish} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-200 dark:border-rose-800 text-xs font-bold text-rose-800 dark:text-rose-300">
                                  <XCircle className="w-3 h-3" /> {fish}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Similar Plants – contextually fits here: "what else works in a similar setup?" */}
                        {plant.relatedPlants && plant.relatedPlants.length > 0 && (
                          <div>
                            <SectionHeader title="Similar Plants" icon={<Leaf className="w-5 h-5" />} />
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {plant.relatedPlants.map(relSlug => {
                                const rel = plantRepository.getBySlug(relSlug);
                                return (
                                  <Link
                                    key={relSlug}
                                    to={`/plants/${relSlug}`}
                                    className="group rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden hover:border-emerald-400 dark:hover:border-emerald-600 transition-all shadow-md hover:shadow-lg"
                                  >
                                    {rel?.imageUrl && (
                                      <div className="h-24 overflow-hidden">
                                        <img src={rel.imageUrl} alt={rel.taxonomy.commonName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                      </div>
                                    )}
                                    <div className="p-2.5 bg-white dark:bg-slate-800">
                                      <p className="text-xs font-black text-slate-800 dark:text-slate-100 truncate">{rel?.taxonomy.commonName ?? relSlug}</p>
                                      <p className="text-[10px] text-slate-400 dark:text-slate-500 italic truncate">{rel?.taxonomy.scientificName ?? ''}</p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600">
                        <Mountain className="w-12 h-12 mb-3 opacity-40" />
                        <p className="text-sm font-bold">No aquascape data available yet.</p>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* ── PROBLEMS ── */}
                {activeTab === 'problems' && (
                  <motion.div key="problems" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    {hasProblems ? (
                      plant.commonProblems!.map((p, i) => (
                        <div key={i} className="rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md overflow-hidden">
                          <div className="flex items-center gap-3 px-5 py-3 bg-rose-50 dark:bg-rose-950/30 border-b-2 border-rose-200 dark:border-rose-800">
                            <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                            <h4 className="font-black text-rose-700 dark:text-rose-400 text-sm">{p.title}</h4>
                          </div>
                          <div className="px-5 py-4 space-y-2">
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.desc}</p>
                            <div className="flex items-start gap-2 pt-1">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400 leading-relaxed">{p.solution}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-col items-center justify-center py-16 text-slate-400">
                        <CheckCircle className="w-12 h-12 mb-3 opacity-40" />
                        <p className="text-sm font-bold">No common problems documented yet.</p>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* ── ADVANCED ── */}
                {activeTab === 'advanced' && (
                  <motion.div key="advanced" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-7">

                    {/* Scientific classification – the one thing genuinely unique to this tab */}
                    <div>
                      <SectionHeader title="Scientific Classification" icon={<FlaskConical className="w-5 h-5" />} />
                      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden">
                        <ClassRow label="Family" value={plant.taxonomy.family} />
                        <ClassRow label="Scientific Name" value={plant.taxonomy.scientificName} italic />
                        <ClassRow label="Common Name" value={plant.taxonomy.commonName} />
                        <ClassRow label="Origin" value={plant.taxonomy.origin} />
                        {plant.taxonomy.nativeRegion && (
                          <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Native Habitat</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{plant.taxonomy.nativeRegion}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Fertilisation approach – unique factual info not shown elsewhere */}
                    <div>
                      <SectionHeader title="Fertilisation Approach" icon={<Info className="w-5 h-5" />} />
                      <div className="grid sm:grid-cols-2 gap-3">
                        <BooleanCard label="Root Tabs Beneficial?" value={plant.planting.soilTabs} trueText="Yes – place tabs near roots" falseText="Not necessary" />
                        <BooleanCard label="Liquid Fertiliser?" value={plant.planting.liquidFertilizer} trueText="Yes – dose weekly" falseText="Optional / not required" />
                      </div>
                    </div>

                  </motion.div>
                )}

              </div>
            </motion.div>
          </div>

          {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-4 space-y-4">
              <SidebarCard plant={plant} />
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
};

// ════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ════════════════════════════════════════════════════════════

const HeroPill = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-bold border border-white/20">
    {icon}{label}
  </span>
);

const FunFactBanner = ({ text }: { text: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.15 }}
    whileHover={{ scale: 1.015 }}
    className="relative overflow-hidden rounded-2xl p-5 border-2 border-emerald-200 dark:border-emerald-800 shadow-lg cursor-default"
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-cyan-500/10 dark:from-emerald-500/20 dark:via-teal-500/20 dark:to-cyan-500/20" />
    <div className="relative flex items-start gap-3">
      <div className="p-2 bg-emerald-100 dark:bg-emerald-900/60 rounded-xl flex-shrink-0">
        <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      </div>
      <div>
        <p className="text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">Did you know?</p>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{text}</p>
      </div>
    </div>
  </motion.div>
);

const SidebarCard = ({ plant }: { plant: Plant }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-lg">
    {/* Origin header */}
    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
      <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl">
        <MapPin className="w-4 h-4 text-emerald-500" />
      </div>
      <div>
        <div className="text-[10px] uppercase font-black text-gray-400 tracking-wider mb-0.5">Origin</div>
        <div className="text-sm font-bold text-gray-900 dark:text-gray-100">{plant.taxonomy.origin}</div>
      </div>
    </div>

    {/* Core care rows */}
    <div className="space-y-0.5">
      <SidebarRow icon={<Target className="w-4 h-4 text-indigo-500" />} label="Difficulty" value={cap(plant.difficulty)} />
      <SidebarRow icon={<Sun className="w-4 h-4 text-amber-500" />} label="Light" value={cap(plant.specs.light)} />
      <SidebarRow icon={<Wind className="w-4 h-4 text-cyan-500" />} label="CO₂" value={cap(plant.specs.co2)} />
      <SidebarRow icon={<Sprout className="w-4 h-4 text-emerald-500" />} label="Growth" value={cap(plant.specs.growthRate)} />
      <SidebarRow icon={<Ruler className="w-4 h-4 text-purple-500" />} label="Height" value={`${plant.specs.heightCM.min}–${plant.specs.heightCM.max} cm`} />
      <SidebarRow icon={<Thermometer className="w-4 h-4 text-rose-500" />} label="Temp" value={`${plant.parameters.tempC.min}–${plant.parameters.tempC.max} °C${plant.parameters.tempC.ideal ? ` (${plant.parameters.tempC.ideal} °C ideal)` : ''}`} />
      <SidebarRow icon={<Droplets className="w-4 h-4 text-blue-500" />} label="pH" value={`${plant.parameters.ph.min}–${plant.parameters.ph.max}${plant.parameters.ph.ideal ? ` (${plant.parameters.ph.ideal} ideal)` : ''}`} />
      {plant.parameters.flow && (
        <SidebarRow icon={<Waves className="w-4 h-4 text-teal-500" />} label="Flow" value={cap(plant.parameters.flow)} />
      )}
    </div>

    {/* Placement */}
    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
      <p className="text-[10px] uppercase font-black text-gray-400 tracking-wider mb-2">Placement</p>
      <div className="flex flex-wrap gap-1.5">
        {plant.specs.placement.map(p => (
          <span key={p} className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 capitalize">
            {p}
          </span>
        ))}
      </div>
    </div>

    {/* Taxonomy – the classification bits not shown anywhere else on mobile */}
    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-1.5">
      <p className="text-[10px] uppercase font-black text-gray-400 tracking-wider mb-2">Classification</p>
      <div className="flex items-start justify-between gap-2">
        <span className="text-[11px] text-gray-400 font-semibold shrink-0">Family</span>
        <span className="text-[11px] font-black text-gray-700 dark:text-gray-300 text-right">{plant.taxonomy.family}</span>
      </div>
      <div className="flex items-start justify-between gap-2">
        <span className="text-[11px] text-gray-400 font-semibold shrink-0">Scientific</span>
        <span className="text-[11px] font-black text-gray-700 dark:text-gray-300 italic text-right">{plant.taxonomy.scientificName}</span>
      </div>
      {plant.taxonomy.nativeRegion && (
        <div className="pt-1.5">
          <span className="text-[10px] text-gray-400 font-semibold block mb-0.5">Native habitat</span>
          <span className="text-[11px] text-gray-600 dark:text-gray-400 leading-snug">{plant.taxonomy.nativeRegion}</span>
        </div>
      )}
    </div>

    {/* Aquascape styles */}
    {plant.aquascapeContext?.styles && plant.aquascapeContext.styles.length > 0 && (
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-[10px] uppercase font-black text-gray-400 tracking-wider mb-2">Aquascape Styles</p>
        <div className="flex flex-wrap gap-1.5">
          {plant.aquascapeContext.styles.map(s => (
            <span key={s} className={`px-2 py-0.5 rounded-lg border text-[10px] font-bold ${AQUASCAPE_STYLE_COLORS[s] ?? ''}`}>
              {AQUASCAPE_STYLE_LABELS[s] ?? s}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

const SidebarRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center justify-between py-2.5 border-b border-gray-100 dark:border-gray-700/60 last:border-0">
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{label}</span>
    </div>
    <span className="text-xs font-black text-gray-800 dark:text-gray-200 text-right max-w-[140px] truncate capitalize">{value}</span>
  </div>
);

const ParamBar = ({
  label, min, max, ideal, unit, scaleMin, scaleMax, scaleLabels, colorClass, badgeClass
}: {
  label: string; min: number; max: number; ideal?: number; unit: string;
  scaleMin: number; scaleMax: number; scaleLabels: string[];
  colorClass: string; badgeClass: string;
}) => {
  const scale = scaleMax - scaleMin;
  const leftPct = ((min - scaleMin) / scale) * 100;
  const widthPct = ((max - min) / scale) * 100;
  const idealPct = ideal !== undefined ? ((ideal - scaleMin) / scale) * 100 : null;

  return (
    <div>
      <div className="flex justify-between items-center mb-2.5">
        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{label}</span>
        <span className={`text-xs font-black px-3 py-1.5 rounded-full border-2 ${badgeClass}`}>
          {min}–{max}{unit}{ideal !== undefined ? ` · ${ideal}${unit} ideal` : ''}
        </span>
      </div>
      <div className="relative w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-visible">
        <div className={`absolute h-full rounded-full ${colorClass}`} style={{ left: `${leftPct}%`, width: `${widthPct}%` }} />
        {idealPct !== null && (
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2.5 h-4 rounded-sm bg-white dark:bg-slate-900 border-2 border-emerald-500 shadow-md z-10"
            style={{ left: `calc(${idealPct}% - 5px)` }}
            title={`Ideal: ${ideal}${unit}`}
          />
        )}
      </div>
      <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-semibold">
        {scaleLabels.map(l => <span key={l}>{l}</span>)}
      </div>
    </div>
  );
};

const PlacementVisualizer = ({ placements }: { placements: string[] }) => {
  const zones = ['floating', 'background', 'midground', 'foreground', 'carpet', 'epiphyte'];
  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border-2 border-slate-200 dark:border-slate-700 p-4">
      <div className="space-y-2">
        {zones.map(zone => {
          const active = placements.includes(zone as any);
          return (
            <div
              key={zone}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg border-2 transition-all ${
                active
                  ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 opacity-40'
              }`}
            >
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${active ? 'bg-emerald-500' : 'bg-slate-300'}`} />
              <span className={`text-sm font-bold capitalize ${active ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-400'}`}>
                {zone}
              </span>
              {active && <CheckCircle className="w-4 h-4 text-emerald-500 ml-auto" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MiniParamCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-white dark:bg-slate-800 rounded-xl p-3 border-2 border-slate-200 dark:border-slate-700 shadow-sm">
    <div className="flex items-center gap-1.5 mb-1.5 text-slate-500 dark:text-slate-400">
      {icon}
      <span className="text-[10px] font-black uppercase tracking-wide">{label}</span>
    </div>
    <div className="text-sm font-black text-slate-800 dark:text-slate-100">{value}</div>
  </div>
);

const SectionHeader = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
    <span className="text-emerald-600 dark:text-emerald-400">{icon}</span>
    {title}
  </h3>
);

const SpecCard = ({ icon, label, value, gradient, borderColor }: { icon: React.ReactNode; label: string; value: string; gradient: string; borderColor: string }) => (
  <div className={`bg-gradient-to-br ${gradient} rounded-xl p-4 border-2 ${borderColor} shadow-lg`}>
    <div className="flex items-center gap-2 mb-2">{icon}<span className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wide">{label}</span></div>
    <div className="text-lg font-black text-slate-900 dark:text-slate-100 capitalize">{value}</div>
  </div>
);

const BooleanCard = ({ label, value, trueText, falseText }: any) => (
  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md border-2 border-slate-200 dark:border-slate-700">
    <div className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-wide">{label}</div>
    <div className={`font-black text-sm flex items-center gap-2 ${value ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-400'}`}>
      {value ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
      {value ? trueText : falseText}
    </div>
  </div>
);

const NutrientBox = ({ label, desc, level, colors }: { label: string; desc: string; level: 'low' | 'medium' | 'high'; colors: Record<'low' | 'medium' | 'high', string> }) => (
  <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700">
    <div className="flex items-center justify-between mb-1">
      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{label}</span>
      <span className={`px-2.5 py-0.5 rounded-lg border-2 text-xs font-black capitalize ${colors[level]}`}>{level}</span>
    </div>
    <p className="text-[11px] text-slate-400 dark:text-slate-500 mb-2.5">{desc}</p>
    <div className="flex gap-1">
      {[1, 2, 3].map(i => (
        <div key={i} className={`h-2 flex-1 rounded-full ${
          i <= (level === 'low' ? 1 : level === 'medium' ? 2 : 3)
            ? level === 'low' ? 'bg-emerald-500' : level === 'medium' ? 'bg-amber-500' : 'bg-rose-500'
            : 'bg-slate-200 dark:bg-slate-700'
        }`} />
      ))}
    </div>
  </div>
);

const ClassRow = ({ label, value, italic }: { label: string; value: string; italic?: boolean }) => (
  <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 dark:border-slate-700 last:border-0 bg-white dark:bg-slate-800 first:rounded-t-xl">
    <span className="text-sm font-bold text-slate-500 dark:text-slate-400 shrink-0">{label}</span>
    <span className={`text-sm font-black text-slate-900 dark:text-slate-100 text-right max-w-[220px] ${italic ? 'italic' : ''}`}>{value}</span>
  </div>
);

const TabBtn = ({ id, active, onClick, icon, children }: { id: Tab; active: Tab; onClick: (t: Tab) => void; icon: React.ReactNode; children: React.ReactNode }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center gap-2 px-4 md:px-5 py-3.5 text-xs font-black transition-all whitespace-nowrap ${
      active === id
        ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 border-b-4 border-emerald-600'
        : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border-b-4 border-transparent'
    }`}
  >
    {icon}{children}
  </button>
);

const MobileTabBtn = ({ id, active, onClick, icon, label }: { id: Tab; active: Tab; onClick: (t: Tab) => void; icon: React.ReactNode; label: string }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex flex-col items-center gap-1 py-3 text-[10px] font-black transition-all ${
      active === id
        ? 'text-emerald-700 dark:text-emerald-400 border-b-4 border-emerald-600'
        : 'text-slate-500 dark:text-slate-400 border-b-4 border-transparent'
    }`}
  >
    {icon}{label}
  </button>
);

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6">
    <div className="text-center max-w-md mx-auto bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-2xl border-2 border-slate-200 dark:border-slate-700">
      <div className="w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-2xl mx-auto mb-6 flex items-center justify-center">
        <Sprout className="w-12 h-12 text-slate-400" />
      </div>
      <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Plant Not Found</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6">This plant does not exist in our database.</p>
      <Link to="/plants" className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/30 px-6 py-3 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-all">
        <ArrowLeft className="w-4 h-4" /> Return to Database
      </Link>
    </div>
  </div>
);

export default PlantDetailPage;
