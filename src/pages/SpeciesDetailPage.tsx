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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 overflow-x-hidden">
      <SEOHead title={seoTitle} description={seoDesc} />

      {/* HERO HEADER */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-slate-900/95 text-white overflow-hidden pt-16 pb-32"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={headerImageUrl} 
            alt={data.taxonomy.commonName}
            className="w-full h-full object-cover opacity-40 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
        </div>

        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/60 to-purple-600/60 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/60 to-teal-500/60 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Link to="/" className="group inline-flex items-center text-slate-300 hover:text-white mb-8 transition-all duration-300 text-sm font-bold bg-black/30 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/10 shadow-2xl hover:shadow-emerald-500/25 hover:scale-[1.02]">
              <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" /> Back to Database
            </Link>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex-1"
            >
              <div className="flex flex-wrap gap-3 mb-8">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }}>
                  <Badge text={data.environment.type} color="brand" />
                </motion.div>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.45 }}>
                  <Badge text={data.care.difficulty} color={data.care.difficulty} />
                </motion.div>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-none drop-shadow-2xl bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                {data.taxonomy.commonName}
              </h1>
              <p className="text-2xl md:text-3xl text-slate-200/90 font-serif italic drop-shadow-xl bg-gradient-to-r from-slate-300 to-white bg-clip-text text-transparent">
                {data.taxonomy.scientificName} • {data.taxonomy.family}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex-shrink-0 bg-white/15 backdrop-blur-3xl px-8 py-6 rounded-3xl border border-white/30 shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-500"
            >
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl mb-3">
                <MapPin className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
              <div>
                <p className="text-xs uppercase font-black text-indigo-200 tracking-widest opacity-90">Origin</p>
                <p className="font-bold text-xl text-white drop-shadow-md">{data.taxonomy.origin}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* MAIN CONTENT */}
      <main className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-24">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 xl:gap-12">
          
          {/* LEFT COLUMN */}
          <div className="xl:col-span-3 space-y-10">
            
            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/40 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 p-8 lg:p-12"
            >
              <motion.div whileHover={{ scale: 1.02 }} className="text-2xl font-black text-slate-900 mb-8 flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
                <Info className="w-8 h-8 mr-3 text-indigo-500 drop-shadow-lg" /> Quick Parameters
              </motion.div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard icon={<Thermometer className="text-rose-500 drop-shadow-lg" />} label="Temperature" value={`${data.environment.tempC.min}-${data.environment.tempC.max}°C`} sub={`Ideal: ${data.environment.tempC.ideal}°C`} />
                <StatCard icon={<Droplets className="text-cyan-500 drop-shadow-lg" />} label="pH Level" value={`${data.environment.ph.min}-${data.environment.ph.max}`} sub={`Ideal: ${data.environment.ph.ideal}`} />
                <StatCard icon={<Fish className="text-blue-500 drop-shadow-lg" />} label="Min Tank" value={`${data.environment.minTankSizeLiters}L`} sub="Long footprint" />
                <StatCard icon={<Ruler className="text-indigo-500 drop-shadow-lg" />} label="Adult Size" value={`~${data.visuals.adultSizeCM}cm`} sub="Standard Length" />
                <StatCard icon={<Users className="text-slate-600 drop-shadow-lg" />} label="Group Size" value={`${data.behavior.minGroupSize}+`} sub={data.behavior.minGroupSize === 1 ? 'Solitary' : 'Shoaling'} />
                <StatCard icon={<Utensils className="text-amber-500 drop-shadow-lg" />} label="Diet" value={capitalize(data.care.diet)} sub="Varied" />
              </div>
            </motion.div>

            {/* Pro Tips & Mistakes */}
            {(data.care.proTips || data.care.commonMistakes) && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {data.care.proTips && (
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group bg-gradient-to-br from-amber-50/90 to-orange-50/90 backdrop-blur-xl rounded-3xl p-8 border border-amber-200/50 shadow-xl hover:shadow-2xl hover:border-amber-300/70 transition-all duration-500"
                  >
                    <h3 className="text-2xl font-black text-amber-900 mb-6 flex items-center gap-3">
                      <Lightbulb className="w-10 h-10 text-amber-500 drop-shadow-lg group-hover:scale-110 transition-transform" /> Pro Tips
                    </h3>
                    <ul className="space-y-4">
                      {data.care.proTips.map((tip, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          whileHover={{ x: 5 }}
                          className="flex gap-4 text-base text-amber-900/95 leading-relaxed font-semibold pl-2"
                        >
                          <span className="w-3 h-3 mt-2 bg-amber-500 rounded-full flex-shrink-0" />
                          {tip}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {data.care.commonMistakes && (
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group bg-gradient-to-br from-rose-50/90 to-red-50/90 backdrop-blur-xl rounded-3xl p-8 border border-rose-200/50 shadow-xl hover:shadow-2xl hover:border-rose-300/70 transition-all duration-500"
                  >
                    <h3 className="text-2xl font-black text-rose-900 mb-6 flex items-center gap-3">
                      <XCircle className="w-10 h-10 text-rose-500 drop-shadow-lg group-hover:scale-110 transition-transform" /> Common Mistakes
                    </h3>
                    <ul className="space-y-4">
                      {data.care.commonMistakes.map((mistake, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          whileHover={{ x: 5 }}
                          className="flex gap-4 text-base text-rose-900/95 leading-relaxed font-semibold pl-2"
                        >
                          <span className="w-3 h-3 mt-2 bg-rose-500 rounded-full flex-shrink-0" />
                          {mistake}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Fun Fact */}
            {data.funFact && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-gradient-to-r from-indigo-600/95 to-blue-600/95 p-1.5 rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl p-10 relative">
                  <motion.div 
                    className="absolute top-6 right-6 p-4 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-20 h-20 text-white drop-shadow-2xl" />
                  </motion.div>
                  <h3 className="text-indigo-300 font-black uppercase tracking-widest text-lg mb-6 flex items-center gap-3 drop-shadow-lg">
                    <Sparkles className="w-6 h-6" /> Did you know?
                  </h3>
                  <p className="text-white/95 font-semibold text-xl lg:text-2xl italic leading-relaxed drop-shadow-2xl relative z-10">
                    "{data.funFact}"
                  </p>
                </div>
              </motion.div>
            )}

            {/* Behavior & Temperament */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-10 hover:shadow-3xl hover:-translate-y-2 transition-all duration-700"
            >
              <h2 className="text-3xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-8 flex items-center">
                Behavior & Temperament
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-8">{data.behavior.description}</p>
              
              <div>
                <h4 className="text-sm font-black text-slate-500 uppercase tracking-wider mb-4">Key Traits</h4>
                <div className="flex flex-wrap gap-3">
                  {data.behavior.tags.map(tag => (
                    <div key={tag} className="group relative">
                      <motion.span 
                        whileHover={{ scale: 1.1 }}
                        className="cursor-help inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold bg-slate-100 text-slate-700 border-2 border-slate-200 hover:border-indigo-400 hover:text-indigo-700 hover:bg-indigo-50 transition-all shadow-md hover:shadow-xl"
                      >
                        {tag === 'jumper' && <AlertTriangle className="w-4 h-4 mr-2 text-amber-500" />}
                        {capitalize(tag.replace(/_/g, ' '))}
                      </motion.span>
                      
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-slate-900 text-white text-xs p-4 rounded-2xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none transition-all duration-300 shadow-2xl z-50 leading-relaxed border border-white/10">
                        <span className="font-bold block mb-2 text-indigo-300 capitalize">{tag.replace(/_/g, ' ')}:</span>
                        {tagDescriptions[tag] || "No description available."}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-900"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Habitat & Setup */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-10 hover:shadow-3xl hover:-translate-y-2 transition-all duration-700"
            >
              <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center">
                <Mountain className="w-8 h-8 mr-3 text-emerald-600" /> Habitat & Setup
              </h2>
              
              <div className="mb-8 bg-gradient-to-br from-slate-50 to-blue-50/50 p-8 rounded-2xl border border-slate-200 shadow-inner">
                <h4 className="text-sm font-black text-slate-500 uppercase tracking-wider mb-6">Target Parameters</h4>
                <div className="space-y-6">
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

              <div className="grid grid-cols-2 gap-6 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100 shadow-lg">
                  <span className="text-xs font-black text-slate-500 uppercase tracking-wider block mb-2">Flow</span>
                  <div className="flex items-center gap-3">
                    <Activity className="w-6 h-6 text-blue-500" />
                    <span className="font-black text-xl text-slate-700 capitalize">{data.environment.flow}</span>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100 shadow-lg">
                  <span className="text-xs font-black text-slate-500 uppercase tracking-wider block mb-2">Substrate</span>
                  <div className="flex items-center gap-3">
                    <Box className="w-6 h-6 text-amber-600" />
                    <span className="font-black text-xl text-slate-700 capitalize">{data.environment.substrate || 'Any'}</span>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center text-lg font-black text-slate-700 mb-4">
                    <Sprout className="w-5 h-5 mr-3 text-emerald-500" /> Vegetation
                  </h4>
                  <div className="pl-6 border-l-4 border-emerald-200">
                    <div className="flex items-center gap-2 mb-3">
                      {[1,2,3].map(i => (
                        <div key={i} className={`h-2 w-8 rounded-full ${
                          (data.habitat.planting === 'sparse' && i === 1) || 
                          (data.habitat.planting === 'medium' && i <= 2) || 
                          (data.habitat.planting === 'dense' && i <= 3) 
                          ? 'bg-emerald-500 shadow-md' : 'bg-slate-200'
                        }`} />
                      ))}
                      <span className="text-xs font-black text-emerald-700 uppercase ml-2">
                        {data.habitat.planting}
                      </span>
                    </div>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {data.habitat.plantingNotes}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="flex items-center text-lg font-black text-slate-700 mb-4">
                    <Trees className="w-5 h-5 mr-3 text-amber-700" /> Hardscape
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {data.habitat.hardscape.map(item => (
                      <motion.span 
                        key={item} 
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center px-4 py-2 rounded-xl text-sm bg-amber-50 text-amber-800 border-2 border-amber-100 font-bold shadow-md hover:shadow-lg transition-all"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Compatibility */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-10 hover:shadow-3xl hover:-translate-y-2 transition-all duration-700"
            >
              <h2 className="text-3xl font-black text-slate-900 mb-8">Compatibility & Tank Mates</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="flex items-center text-emerald-700 font-black mb-4 text-xl">
                    <span className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></span> Good Mates
                  </h4>
                  <ul className="space-y-3">
                    {data.behavior.compatibility.goodMates.map(m => (
                      <motion.li 
                        key={m} 
                        whileHover={{ x: 5 }}
                        className="text-base bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-800 px-4 py-3 rounded-xl border-2 border-emerald-100 font-semibold shadow-md hover:shadow-lg transition-all"
                      >
                        {m}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center text-rose-700 font-black mb-4 text-xl">
                    <span className="w-3 h-3 bg-rose-500 rounded-full mr-3"></span> Avoid (Risk)
                  </h4>
                  <ul className="space-y-3">
                    {data.behavior.compatibility.badMates.map(m => (
                      <motion.li 
                        key={m} 
                        whileHover={{ x: 5 }}
                        className="text-base bg-gradient-to-r from-rose-50 to-red-50 text-rose-800 px-4 py-3 rounded-xl border-2 border-rose-100 font-semibold shadow-md hover:shadow-lg transition-all"
                      >
                        {m}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              {data.behavior.compatibility.notes && (
                <p className="mt-8 text-base text-slate-700 bg-slate-50 p-6 rounded-2xl border border-slate-200 leading-relaxed font-medium">
                  💡 <strong>Note:</strong> {data.behavior.compatibility.notes}
                </p>
              )}
            </motion.div>

            {/* Health & Cost */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 hover:shadow-3xl transition-all duration-500"
              >
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-rose-500" /> Health Stats
                </h2>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-black block mb-2">Lifespan</span>
                    <p className="font-bold text-xl text-slate-900">{data.health.lifespanYears} Years (Average)</p>
                  </div>
                  
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-black block mb-2">Common Diseases</span>
                    <div className="mt-2">
                      <DiseaseList diseases={data.health.commonDiseases} />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-slate-500 uppercase font-black block mb-2">Sensitivities</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {(data.health.sensitivities || []).map(s => (
                        <span key={s} className="text-xs bg-amber-50 text-amber-700 px-3 py-1.5 rounded-lg border border-amber-100 font-bold">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 hover:shadow-3xl transition-all duration-500"
              >
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center">
                  <DollarSign className="w-6 h-6 mr-3 text-emerald-500" /> Ownership Cost
                </h2>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-black block mb-3">Maintenance Effort</span>
                    <div className="flex items-center mt-2">
                      {[1,2,3].map(i => (
                        <div key={i} className={`h-3 w-10 mr-2 rounded-full ${
                          (data.care.effort === 'low' && i<=1) || (data.care.effort === 'medium' && i<=2) || (data.care.effort === 'high') 
                          ? 'bg-indigo-500 shadow-md' : 'bg-slate-200'
                        }`}></div>
                      ))}
                      <span className="ml-2 text-sm font-black uppercase text-indigo-600">{data.care.effort}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-black block mb-3">Running Cost</span>
                    <div className="flex items-center mt-2">
                      {[1,2,3].map(i => (
                        <div key={i} className={`h-3 w-10 mr-2 rounded-full ${
                          (data.care.cost === 'low' && i<=1) || (data.care.cost === 'medium' && i<=2) || (data.care.cost === 'high') 
                          ? 'bg-emerald-500 shadow-md' : 'bg-slate-200'
                        }`}></div>
                      ))}
                      <span className="ml-2 text-sm font-black uppercase text-emerald-600">{data.care.cost}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Advanced Knowledge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12 pt-12 border-t-4 border-slate-200"
            >
              <h2 className="text-4xl font-black text-slate-900 mb-10 flex items-center">
                <BookOpen className="w-10 h-10 mr-4 text-indigo-600" />
                Deep Dive: Science & Breeding
              </h2>

              {data.scientificContext && (
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 p-10 mb-8 shadow-2xl hover:shadow-3xl transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-indigo-50 rounded-2xl shrink-0">
                      <Microscope className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-2xl text-slate-900 mb-6">Biological Background</h3>
                      <div className="space-y-6 text-slate-700 text-base leading-relaxed">
                        <div>
                          <span className="font-black text-slate-900 block mb-2 text-lg">Wild Habitat:</span>
                          {data.scientificContext.wildHabitat}
                        </div>
                        <div>
                          <span className="font-black text-slate-900 block mb-2 text-lg">Sexual Dimorphism:</span>
                          {data.scientificContext.sexualDimorphism}
                        </div>
                        {data.scientificContext.variants && data.scientificContext.variants.length > 0 && (
                          <div>
                            <span className="font-black text-slate-900 block mb-3 text-lg">Common Variants:</span>
                            <div className="flex flex-wrap gap-3">
                              {data.scientificContext.variants.map(v => (
                                <motion.span 
                                  key={v} 
                                  whileHover={{ scale: 1.05 }}
                                  className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl text-sm border-2 border-indigo-100 font-bold shadow-md"
                                >
                                  {v}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {data.breeding && (
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 p-10 shadow-2xl hover:shadow-3xl transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-pink-50 rounded-2xl shrink-0">
                      <Egg className="w-8 h-8 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-6">
                        <h3 className="font-black text-2xl text-slate-900">Breeding Guide</h3>
                        <span className={`text-xs font-black uppercase px-3 py-1.5 rounded-full border-2 ${
                          data.breeding.difficulty === 'beginner' 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                          data.breeding.difficulty === 'medium' 
                            ? 'bg-amber-50 text-amber-700 border-amber-200' :
                            'bg-rose-50 text-rose-700 border-rose-200'
                        }`}>
                          {data.breeding.difficulty}
                        </span>
                      </div>
                      
                      <div className="space-y-6 text-slate-700 text-base leading-relaxed">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                          <span className="text-xs font-black text-slate-500 uppercase block mb-2">Method</span>
                          <p className="font-bold text-xl text-slate-800 capitalize">{data.breeding.method.replace(/_/g, ' ')}</p>
                        </div>
                        
                        {data.breeding.trigger && (
                          <div>
                            <span className="font-black text-slate-900 block mb-2 text-lg">Breeding Triggers:</span>
                            {data.breeding.trigger}
                          </div>
                        )}
                        
                        {data.breeding.fryCare && (
                          <div>
                            <span className="font-black text-slate-900 block mb-2 text-lg">Fry Care:</span>
                            {data.breeding.fryCare}
                          </div>
                        )}

                        {data.breeding.notes && (
                          <div>
                            <span className="font-black text-slate-900 block mb-2 text-lg">Notes:</span>
                            {data.breeding.notes}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-8">
            <div className="xl:sticky xl:top-24 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
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
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-amber-50/90 to-orange-50/90 backdrop-blur-xl border-2 border-amber-300/60 p-6 rounded-3xl shadow-2xl hover:shadow-amber-500/30 transition-all duration-500"
                >
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shrink-0 shadow-lg">
                      <AlertTriangle className="w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                    <div>
                      <p className="font-black text-amber-900 text-xl mb-2 drop-shadow-sm">Jump Risk!</p>
                      <p className="text-amber-800 text-sm font-semibold leading-relaxed">
                        Tight-fitting lid is <strong className="text-amber-900">mandatory</strong>. This species is known to jump.
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
    brand: 'bg-gradient-to-r from-brand-500/30 to-purple-500/30 text-brand-100 border-brand-400/40 backdrop-blur-sm shadow-lg',
    beginner: 'bg-gradient-to-r from-emerald-500/30 to-teal-500/30 text-emerald-100 border-emerald-400/40 backdrop-blur-sm shadow-lg',
    medium: 'bg-gradient-to-r from-amber-500/30 to-orange-500/30 text-amber-100 border-amber-400/40 backdrop-blur-sm shadow-lg',
    intermediate: 'bg-gradient-to-r from-amber-500/30 to-orange-500/30 text-amber-100 border-amber-400/40 backdrop-blur-sm shadow-lg',
    expert: 'bg-gradient-to-r from-rose-500/30 to-red-500/30 text-rose-100 border-rose-400/40 backdrop-blur-sm shadow-lg',
  }[color === 'brand' ? 'brand' : text] || 'bg-slate-700/80 text-slate-200 backdrop-blur-sm shadow-lg';
  
  return (
    <span className={`inline-flex items-center px-5 py-3 rounded-2xl text-sm font-black uppercase tracking-widest border-2 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl ${styles}`}>
      {text}
    </span>
  );
};

const StatCard = ({ icon, label, value, sub }: any) => (
  <motion.div 
    whileHover={{ scale: 1.05, y: -5 }}
    className="group bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl hover:bg-white/80 transition-all duration-500 overflow-hidden hover:border-emerald-300/60"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-4 group-hover:scale-110 transition-transform bg-gradient-to-br from-white to-slate-50/50 rounded-2xl shadow-lg">
        {icon}
      </div>
      <span className="text-xs font-black text-slate-500 uppercase tracking-widest group-hover:text-slate-700">{label}</span>
    </div>
    <div>
      <p className="font-black text-2xl text-slate-900 drop-shadow-lg">{value}</p>
      {sub && <p className="text-sm text-slate-600 mt-1 font-semibold">{sub}</p>}
    </div>
  </motion.div>
);

const NotFound = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-6"
  >
    <div className="text-center max-w-md mx-auto backdrop-blur-xl bg-white/70 rounded-3xl p-16 shadow-2xl border border-slate-200/50">
      <div className="w-32 h-32 bg-gradient-to-r from-slate-300 to-slate-400 rounded-3xl mx-auto mb-8 shadow-xl flex items-center justify-center">
        <span className="text-5xl font-black text-slate-500">404</span>
      </div>
      <h1 className="text-4xl font-black text-slate-900 mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Species Not Found</h1>
      <Link to="/" className="inline-flex items-center text-brand-600 hover:text-brand-700 font-black text-xl bg-gradient-to-r from-brand-50 to-blue-50 px-8 py-4 rounded-2xl border border-brand-200 hover:shadow-lg transition-all duration-300">
        ← Return Home
      </Link>
    </div>
  </motion.div>
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