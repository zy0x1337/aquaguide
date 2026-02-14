import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft, Thermometer, Droplets, Fish, Ruler, Users,
  MapPin, AlertTriangle, Info, Activity, DollarSign, Heart, Sprout, 
  Mountain, Trees, Box, Sparkles, Microscope, Egg, BookOpen, Utensils,
  Lightbulb, XCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { speciesRepository } from '../data/species';
import { tagDescriptions } from '../data/glossary';
import { SEOHead } from '../components/seo/SEOHead';
import { TankSimulator } from '../components/species/TankSimulator';
import { ParameterScale } from '../components/ui/ParameterScale';
import { DiseaseList } from '../components/species/DiseaseList';

const SpeciesDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = speciesRepository.getBySlug(slug || '');

  if (!data) return <NotFound />;

  const seoTitle = `${data.taxonomy.commonName} Care Guide`;
  const seoDesc = `Complete care guide for ${data.taxonomy.commonName}. Habitat, tank mates, breeding, and scientific background.`;

  const headerImageUrl = resolveHeaderImageUrl(data.imageUrl, data.slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <SEOHead title={seoTitle} description={seoDesc} />

      {/* REFINED HERO HEADER */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden pt-16 pb-24"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={headerImageUrl} 
            alt={data.taxonomy.commonName}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        {/* Subtle decorative element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Link to="/" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors text-sm font-semibold">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Database
            </Link>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex-1"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge text={data.environment.type} color="brand" />
                <Badge text={data.care.difficulty} color={data.care.difficulty} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3 leading-tight">
                {data.taxonomy.commonName}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light italic">
                {data.taxonomy.scientificName} • {data.taxonomy.family}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Origin</span>
              </div>
              <p className="font-semibold text-lg text-white">{data.taxonomy.origin}</p>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* MAIN CONTENT */}
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 -mt-16 pb-20">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN - More compact */}
          <div className="xl:col-span-2 space-y-8">
            
            {/* Quick Stats - More compact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center">
                <Info className="w-5 h-5 mr-2 text-indigo-600" /> Key Parameters
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <CompactStatCard icon={<Thermometer className="text-rose-500" />} label="Temperature" value={`${data.environment.tempC.min}-${data.environment.tempC.max}°C`} />
                <CompactStatCard icon={<Droplets className="text-cyan-500" />} label="pH Level" value={`${data.environment.ph.min}-${data.environment.ph.max}`} />
                <CompactStatCard icon={<Fish className="text-blue-500" />} label="Min Tank" value={`${data.environment.minTankSizeLiters}L`} />
                <CompactStatCard icon={<Ruler className="text-indigo-500" />} label="Adult Size" value={`${data.visuals.adultSizeCM}cm`} />
                <CompactStatCard icon={<Users className="text-slate-600" />} label="Group Size" value={`${data.behavior.minGroupSize}+`} />
                <CompactStatCard icon={<Utensils className="text-amber-500" />} label="Diet" value={capitalize(data.care.diet)} />
              </div>
            </motion.div>

            {/* Pro Tips & Mistakes - More compact side by side */}
            {(data.care.proTips || data.care.commonMistakes) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {data.care.proTips && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-200"
                  >
                    <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2" /> Pro Tips
                    </h3>
                    <ul className="space-y-2.5">
                      {data.care.proTips.map((tip, i) => (
                        <li key={i} className="flex gap-2 text-sm text-amber-900 leading-snug">
                          <span className="w-1.5 h-1.5 mt-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {data.care.commonMistakes && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl p-5 border border-rose-200"
                  >
                    <h3 className="text-lg font-bold text-rose-900 mb-4 flex items-center">
                      <XCircle className="w-5 h-5 mr-2" /> Common Mistakes
                    </h3>
                    <ul className="space-y-2.5">
                      {data.care.commonMistakes.map((mistake, i) => (
                        <li key={i} className="flex gap-2 text-sm text-rose-900 leading-snug">
                          <span className="w-1.5 h-1.5 mt-1.5 bg-rose-500 rounded-full flex-shrink-0" />
                          <span>{mistake}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            )}

            {/* Fun Fact - More elegant */}
            {data.funFact && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 overflow-hidden"
              >
                <div className="absolute top-0 right-0 opacity-10">
                  <Sparkles className="w-32 h-32" />
                </div>
                <div className="relative">
                  <div className="text-indigo-200 font-bold uppercase text-xs tracking-wider mb-2 flex items-center">
                    <Sparkles className="w-4 h-4 mr-1.5" /> Did you know?
                  </div>
                  <p className="text-white text-lg leading-relaxed italic">
                    "{data.funFact}"
                  </p>
                </div>
              </motion.div>
            )}

            {/* Behavior - More compact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-4">Behavior & Temperament</h2>
              <p className="text-slate-700 leading-relaxed mb-5">{data.behavior.description}</p>
              
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Key Traits</h4>
                <div className="flex flex-wrap gap-2">
                  {data.behavior.tags.map(tag => (
                    <div key={tag} className="group relative">
                      <span className="cursor-help inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors">
                        {tag === 'jumper' && <AlertTriangle className="w-3.5 h-3.5 mr-1.5 text-amber-500" />}
                        {capitalize(tag.replace(/_/g, ' '))}
                      </span>
                      
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-slate-900 text-white text-xs p-3 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                        <span className="font-semibold block mb-1 capitalize">{tag.replace(/_/g, ' ')}:</span>
                        {tagDescriptions[tag] || "No description available."}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Habitat - More compact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center">
                <Mountain className="w-5 h-5 mr-2 text-emerald-600" /> Habitat & Setup
              </h2>
              
              <div className="bg-slate-50 p-5 rounded-xl mb-5">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Target Parameters</h4>
                <div className="space-y-4">
                  <ParameterScale 
                    label="Temperature" 
                    unit="°C" 
                    min={15} max={35} 
                    valueMin={data.environment.tempC.min} 
                    valueMax={data.environment.tempC.max} 
                    color="rose" 
                  />
                  <ParameterScale 
                    label="pH Value" 
                    unit="" 
                    min={4.0} max={9.0} 
                    valueMin={data.environment.ph.min} 
                    valueMax={data.environment.ph.max} 
                    color="cyan" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Flow</span>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-slate-900 capitalize">{data.environment.flow}</span>
                  </div>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Substrate</span>
                  <div className="flex items-center gap-2">
                    <Box className="w-4 h-4 text-amber-600" />
                    <span className="font-semibold text-slate-900 capitalize">{data.environment.substrate || 'Any'}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="flex items-center text-sm font-bold text-slate-700 mb-2">
                    <Sprout className="w-4 h-4 mr-2 text-emerald-500" /> Vegetation
                  </h4>
                  <div className="pl-4 border-l-2 border-emerald-200">
                    <div className="flex items-center gap-2 mb-2">
                      {[1,2,3].map(i => (
                        <div key={i} className={`h-1.5 w-6 rounded-full ${
                          (data.habitat.planting === 'sparse' && i === 1) || 
                          (data.habitat.planting === 'medium' && i <= 2) || 
                          (data.habitat.planting === 'dense' && i <= 3) 
                          ? 'bg-emerald-500' : 'bg-slate-200'
                        }`} />
                      ))}
                      <span className="text-xs font-bold text-emerald-700 uppercase ml-1">
                        {data.habitat.planting}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{data.habitat.plantingNotes}</p>
                  </div>
                </div>
                <div>
                  <h4 className="flex items-center text-sm font-bold text-slate-700 mb-2">
                    <Trees className="w-4 h-4 mr-2 text-amber-700" /> Hardscape
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.habitat.hardscape.map(item => (
                      <span key={item} className="px-3 py-1 rounded-lg text-xs bg-amber-50 text-amber-800 border border-amber-100 font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Compatibility - More compact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-5">Compatibility & Tank Mates</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="flex items-center text-emerald-700 font-bold mb-3">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span> Good Mates
                  </h4>
                  <ul className="space-y-2">
                    {data.behavior.compatibility.goodMates.map(m => (
                      <li key={m} className="text-sm bg-emerald-50 text-emerald-800 px-3 py-2 rounded-lg border border-emerald-100">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center text-rose-700 font-bold mb-3">
                    <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span> Avoid (Risk)
                  </h4>
                  <ul className="space-y-2">
                    {data.behavior.compatibility.badMates.map(m => (
                      <li key={m} className="text-sm bg-rose-50 text-rose-800 px-3 py-2 rounded-lg border border-rose-100">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {data.behavior.compatibility.notes && (
                <p className="mt-5 text-sm text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <strong>Note:</strong> {data.behavior.compatibility.notes}
                </p>
              )}
            </motion.div>

            {/* Health & Cost - More compact side by side */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
              >
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-rose-500" /> Health Stats
                </h2>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-bold block mb-1">Lifespan</span>
                    <p className="font-semibold text-slate-900">{data.health.lifespanYears} Years</p>
                  </div>
                  
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-bold block mb-2">Common Diseases</span>
                    <DiseaseList diseases={data.health.commonDiseases} />
                  </div>

                  {data.health.sensitivities && data.health.sensitivities.length > 0 && (
                    <div>
                      <span className="text-xs text-slate-500 uppercase font-bold block mb-2">Sensitivities</span>
                      <div className="flex flex-wrap gap-1.5">
                        {data.health.sensitivities.map(s => (
                          <span key={s} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded border border-amber-100 font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
              >
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-emerald-500" /> Ownership Cost
                </h2>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-bold block mb-2">Maintenance Effort</span>
                    <div className="flex items-center">
                      {[1,2,3].map(i => (
                        <div key={i} className={`h-2 w-8 mr-1.5 rounded-full ${
                          (data.care.effort === 'low' && i<=1) || (data.care.effort === 'medium' && i<=2) || (data.care.effort === 'high') 
                          ? 'bg-indigo-500' : 'bg-slate-200'
                        }`}></div>
                      ))}
                      <span className="ml-2 text-xs font-bold uppercase text-indigo-600">{data.care.effort}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-bold block mb-2">Running Cost</span>
                    <div className="flex items-center">
                      {[1,2,3].map(i => (
                        <div key={i} className={`h-2 w-8 mr-1.5 rounded-full ${
                          (data.care.cost === 'low' && i<=1) || (data.care.cost === 'medium' && i<=2) || (data.care.cost === 'high') 
                          ? 'bg-emerald-500' : 'bg-slate-200'
                        }`}></div>
                      ))}
                      <span className="ml-2 text-xs font-bold uppercase text-emerald-600">{data.care.cost}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Advanced Knowledge - More compact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 pt-8 border-t-2 border-slate-200"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-indigo-600" />
                Deep Dive: Science & Breeding
              </h2>

              {data.scientificContext && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-50 rounded-xl shrink-0">
                      <Microscope className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-4">Biological Background</h3>
                      <div className="space-y-4 text-slate-700 text-sm">
                        <div>
                          <span className="font-bold text-slate-900 block mb-1">Wild Habitat:</span>
                          {data.scientificContext.wildHabitat}
                        </div>
                        <div>
                          <span className="font-bold text-slate-900 block mb-1">Sexual Dimorphism:</span>
                          {data.scientificContext.sexualDimorphism}
                        </div>
                        {data.scientificContext.variants && data.scientificContext.variants.length > 0 && (
                          <div>
                            <span className="font-bold text-slate-900 block mb-2">Common Variants:</span>
                            <div className="flex flex-wrap gap-2">
                              {data.scientificContext.variants.map(v => (
                                <span key={v} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-xs border border-indigo-100 font-semibold">
                                  {v}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {data.breeding && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pink-50 rounded-xl shrink-0">
                      <Egg className="w-6 h-6 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="font-bold text-lg text-slate-900">Breeding Guide</h3>
                        <span className={`text-xs font-bold uppercase px-2 py-1 rounded border ${
                          data.breeding.difficulty === 'beginner' 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                          data.breeding.difficulty === 'medium' 
                            ? 'bg-amber-50 text-amber-700 border-amber-200' :
                            'bg-rose-50 text-rose-700 border-rose-200'
                        }`}>
                          {data.breeding.difficulty}
                        </span>
                      </div>
                      
                      <div className="space-y-4 text-slate-700 text-sm">
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Method</span>
                          <p className="font-semibold text-slate-800 capitalize">{data.breeding.method.replace(/_/g, ' ')}</p>
                        </div>
                        
                        {data.breeding.trigger && (
                          <div>
                            <span className="font-bold text-slate-900 block mb-1">Breeding Triggers:</span>
                            {data.breeding.trigger}
                          </div>
                        )}
                        
                        {data.breeding.fryCare && (
                          <div>
                            <span className="font-bold text-slate-900 block mb-1">Fry Care:</span>
                            {data.breeding.fryCare}
                          </div>
                        )}

                        {data.breeding.notes && (
                          <div>
                            <span className="font-bold text-slate-900 block mb-1">Notes:</span>
                            {data.breeding.notes}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* RIGHT SIDEBAR - Cleaner */}
          <aside className="space-y-6">
            <div className="xl:sticky xl:top-20 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <TankSimulator 
                  fishLengthCM={data.visuals.adultSizeCM} 
                  fishShape={data.visuals.iconShape} 
                  minGroupSize={data.behavior.minGroupSize}
                  minTankSizeLiters={data.environment.minTankSizeLiters}
                />
              </motion.div>
              
              {data.behavior.tags.includes('jumper') && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 p-5 rounded-2xl"
                >
                  <div className="flex gap-3 items-start">
                    <div className="p-2 bg-amber-500 rounded-lg shrink-0">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-amber-900 mb-1">Jump Risk!</p>
                      <p className="text-amber-800 text-sm">
                        Tight-fitting lid is <strong>mandatory</strong>. This species is known to jump.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

const Badge = ({ text, color }: { text: string, color: string }) => {
  const styles = {
    brand: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    beginner: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    medium: 'bg-amber-100 text-amber-700 border-amber-200',
    intermediate: 'bg-amber-100 text-amber-700 border-amber-200',
    expert: 'bg-rose-100 text-rose-700 border-rose-200',
  }[color === 'brand' ? 'brand' : text] || 'bg-slate-100 text-slate-700 border-slate-200';
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide border ${styles}`}>
      {text}
    </span>
  );
};

const CompactStatCard = ({ icon, label, value }: any) => (
  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
    <div className="flex items-center gap-2 mb-2">
      <div className="p-1.5 bg-white rounded-lg">
        {icon}
      </div>
      <span className="text-xs font-bold text-slate-500 uppercase">{label}</span>
    </div>
    <p className="font-bold text-lg text-slate-900">{value}</p>
  </div>
);

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
    <div className="text-center max-w-md mx-auto bg-white rounded-2xl p-12 shadow-lg border border-slate-200">
      <div className="w-24 h-24 bg-slate-200 rounded-2xl mx-auto mb-6 flex items-center justify-center">
        <span className="text-4xl font-bold text-slate-400">404</span>
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Species Not Found</h1>
      <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold">
        ← Return Home
      </Link>
    </div>
  </div>
);

const capitalize = (s: string) => s ? s[0].toUpperCase() + s.slice(1) : s;

const resolveHeaderImageUrl = (imageUrl?: string, slug?: string) => {
  if (imageUrl) {
    if (imageUrl.startsWith('/images/species/')) return imageUrl;
    if (imageUrl.startsWith('images/species/')) return `/${imageUrl}`;
    if (imageUrl.startsWith('/')) return imageUrl;
    return `/images/species/${imageUrl}`;
  }
  if (slug) return `/images/species/${slug}.jpg`;
  return '';
};

export default SpeciesDetailPage;