import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft, Thermometer, Droplets, Fish, Ruler, Users,
  MapPin, AlertTriangle, Info, Activity, DollarSign, Heart, Sprout, 
  Mountain, Trees, Box, Sparkles, Microscope, Egg, BookOpen, Utensils,
  Lightbulb, XCircle
} from 'lucide-react';
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

  // Bild-URL auflösen
  const headerImageUrl = resolveHeaderImageUrl(data.imageUrl, data.slug);

  return (
    <div className="min-h-screen bg-surface-body pb-20 animate-fade-in">
      <SEOHead title={seoTitle} description={seoDesc} />

      {/* HEADER */}
      <header className="relative bg-slate-900 text-white overflow-hidden pb-32 pt-12">
        
        {/* 1. BACKGROUND IMAGE (NEU HINZUGEFÜGT) */}
        <div className="absolute inset-0 z-0">
          <img 
            src={headerImageUrl} 
            alt={data.taxonomy.commonName}
            className="w-full h-full object-cover opacity-50" // Opacity steuert Helligkeit des Bildes
          />
          {/* Gradient Overlay: Damit Text lesbar bleibt und weicher Übergang nach unten */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30"></div>
        </div>

        {/* 2. DECORATIVE BLURS (Bleibt erhalten für Atmosphere) */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
        </div>

        {/* 3. CONTENT (Layer z-10 liegt über dem Bild) */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-slate-300 hover:text-white mb-8 transition-colors text-sm font-bold bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Database
          </Link>
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <div className="flex gap-2 mb-4">
                <Badge text={data.environment.type} color="brand" />
                <Badge text={data.care.difficulty} color={data.care.difficulty} />
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-2 leading-none drop-shadow-lg">
                {data.taxonomy.commonName}
              </h1>
              <p className="text-lg text-slate-200 font-serif italic opacity-90 drop-shadow-md">
                {data.taxonomy.scientificName} • {data.taxonomy.family}
              </p>
            </div>
            
            {/* Origin Box */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 shadow-lg">
              <div className="p-2 bg-indigo-500 rounded-lg shadow-inner"><MapPin className="w-5 h-5 text-white" /></div>
              <div>
                <p className="text-[10px] uppercase font-bold text-indigo-200 tracking-wider">Origin</p>
                <p className="font-medium text-sm text-white">{data.taxonomy.origin}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT GRID */}
      <main className="relative z-20 max-w-6xl mx-auto px-4 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COL (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Quick Stats Grid */}
            <div className="bg-surface-card rounded-2xl shadow-soft border border-border-subtle p-6 md:p-8">
              <h2 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center">
                <Info className="w-5 h-5 mr-2 text-indigo-500" /> Quick Parameters
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <StatCard icon={<Thermometer className="text-rose-500" />} label="Temperature" value={`${data.environment.tempC.min}-${data.environment.tempC.max}°C`} sub={`Ideal: ${data.environment.tempC.ideal}°C`} />
                <StatCard icon={<Droplets className="text-cyan-500" />} label="pH Level" value={`${data.environment.ph.min}-${data.environment.ph.max}`} sub={`Ideal: ${data.environment.ph.ideal}`} />
                <StatCard icon={<Fish className="text-blue-500" />} label="Min Tank" value={`${data.environment.minTankSizeLiters} Liters`} sub="Long footprint" />
                <StatCard icon={<Ruler className="text-indigo-500" />} label="Adult Size" value={`~${data.visuals.adultSizeCM} cm`} sub="Standard Length" />
                <StatCard icon={<Users className="text-slate-600" />} label="Group Size" value={`${data.behavior.minGroupSize}+`} sub={data.behavior.minGroupSize === 1 ? 'Solitary' : 'Shoaling'} />
                <StatCard icon={<Utensils className="text-slate-600" />} label="Diet" value={capitalize(data.care.diet)} sub="Varied" />
              </div>
            </div>

            {/* PRO TIPS & MISTAKES */}
            {(data.care.proTips || data.care.commonMistakes) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Pro Tips */}
                {data.care.proTips && (
                  <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 shadow-sm">
                    <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-amber-500 fill-amber-500" /> Pro Tips
                    </h3>
                    <ul className="space-y-3">
                      {data.care.proTips.map((tip, i) => (
                        <li key={i} className="flex gap-3 text-sm text-amber-900/90 leading-relaxed font-medium">
                          <span className="font-bold text-amber-500 select-none">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Common Mistakes */}
                {data.care.commonMistakes && (
                  <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100 shadow-sm">
                    <h3 className="text-lg font-bold text-rose-900 mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-rose-500 fill-rose-500" /> Common Mistakes
                    </h3>
                    <ul className="space-y-3">
                      {data.care.commonMistakes.map((mistake, i) => (
                        <li key={i} className="flex gap-3 text-sm text-rose-900/90 leading-relaxed font-medium">
                          <span className="font-bold text-rose-500 select-none">×</span>
                          {mistake}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Fun Fact Card */}
            {data.funFact && (
               <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-1 rounded-2xl transform hover:scale-[1.01] transition-transform cursor-default shadow-lg group">
                 <div className="bg-slate-900 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Sparkles className="w-24 h-24 text-white" /></div>
                    <h3 className="text-indigo-300 font-bold uppercase tracking-widest text-xs mb-2 flex items-center">
                      <Sparkles className="w-3 h-3 mr-2" /> Did you know?
                    </h3>
                    <p className="text-white font-medium text-lg italic leading-relaxed">
                      "{data.funFact}"
                    </p>
                 </div>
               </div>
            )}

            {/* Behavior & Description */}
            <div className="bg-surface-card rounded-2xl shadow-soft border border-border-subtle p-6 md:p-8">
              <h2 className="text-lg font-extrabold text-slate-900 mb-4">Behavior & Temperament</h2>
              <p className="text-slate-600 leading-relaxed text-base mb-6">{data.behavior.description}</p>
              
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Traits (Hover for info)</h4>
                <div className="flex flex-wrap gap-2">
                  {data.behavior.tags.map(tag => (
                    <div key={tag} className="group relative">
                      <span className="cursor-help inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200 hover:border-indigo-300 hover:text-indigo-700 hover:bg-indigo-50 transition-all">
                        {tag === 'jumper' && <AlertTriangle className="w-4 h-4 mr-2 text-warning" />}
                        {capitalize(tag.replace(/_/g, ' '))}
                      </span>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-slate-800 text-white text-xs p-3 rounded-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none transition-all duration-200 shadow-xl z-50 leading-relaxed">
                        <span className="font-bold block mb-1 text-indigo-300 capitalize">{tag.replace(/_/g, ' ')}:</span>
                        {tagDescriptions[tag] || "No description available."}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Habitat & Setup */}
            <div className="bg-surface-card rounded-2xl shadow-soft border border-border-subtle p-6 md:p-8">
              <h2 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center">
                <Mountain className="w-5 h-5 mr-2 text-emerald-600" /> Habitat & Setup
              </h2>
              
              <div className="mb-8 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Target Parameters</h4>
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

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Flow</span>
                  <div className="flex items-center gap-2 mt-1">
                    <Activity className="w-4 h-4 text-blue-500" />
                    <span className="font-bold text-slate-700 capitalize">{data.environment.flow}</span>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Substrate</span>
                  <div className="flex items-center gap-2 mt-1">
                    <Box className="w-4 h-4 text-amber-600" />
                    <span className="font-bold text-slate-700 capitalize">{data.environment.substrate || 'Any'}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center text-sm font-bold text-slate-700 mb-3">
                    <Sprout className="w-4 h-4 mr-2 text-emerald-500" /> Vegetation
                  </h4>
                  <div className="pl-6 border-l-2 border-emerald-100">
                    <div className="flex items-center gap-2 mb-2">
                      {[1,2,3].map(i => (
                        <div key={i} className={`h-1.5 w-6 rounded-full ${
                          (data.habitat.planting === 'sparse' && i === 1) || 
                          (data.habitat.planting === 'medium' && i <= 2) || 
                          (data.habitat.planting === 'dense' && i <= 3) 
                          ? 'bg-emerald-500' : 'bg-slate-200'
                        }`} />
                      ))}
                      <span className="text-xs font-bold text-emerald-700 uppercase ml-2">
                        {data.habitat.planting}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {data.habitat.plantingNotes}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="flex items-center text-sm font-bold text-slate-700 mb-3">
                    <Trees className="w-4 h-4 mr-2 text-amber-700" /> Hardscape
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.habitat.hardscape.map(item => (
                      <span key={item} className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm bg-amber-50 text-amber-800 border border-amber-100 font-medium">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Compatibility */}
            <div className="bg-surface-card rounded-2xl shadow-soft border border-border-subtle p-6 md:p-8">
              <h2 className="text-lg font-extrabold text-slate-900 mb-6">Compatibility & Tank Mates</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="flex items-center text-emerald-700 font-bold mb-3">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span> Good Mates
                  </h4>
                  <ul className="space-y-2">
                    {data.behavior.compatibility.goodMates.map(m => (
                      <li key={m} className="text-sm bg-emerald-50 text-emerald-800 px-3 py-2 rounded-lg border border-emerald-100">{m}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center text-rose-700 font-bold mb-3">
                    <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span> Avoid (Risk)
                  </h4>
                  <ul className="space-y-2">
                    {data.behavior.compatibility.badMates.map(m => (
                      <li key={m} className="text-sm bg-rose-50 text-rose-800 px-3 py-2 rounded-lg border border-rose-100">{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {data.behavior.compatibility.notes && (
                <p className="mt-6 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  💡 <strong>Note:</strong> {data.behavior.compatibility.notes}
                </p>
              )}
            </div>

            {/* Health & Cost */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface-card rounded-2xl shadow-soft border border-border-subtle p-6">
                <h2 className="text-md font-extrabold text-slate-900 mb-4 flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-rose-500" /> Health Stats
                </h2>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold">Lifespan</span>
                    <p className="font-medium text-slate-900">{data.health.lifespanYears} Years (Average)</p>
                  </div>
                  
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold">Common Diseases</span>
                    <div className="mt-1">
                      <DiseaseList diseases={data.health.commonDiseases} />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold">Sensitivities</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {(data.health.sensitivities || []).map(s => (
                        <span key={s} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded border border-amber-100 font-medium">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-card rounded-2xl shadow-soft border border-border-subtle p-6">
                <h2 className="text-md font-extrabold text-slate-900 mb-4 flex items-center">
                  <DollarSign className="w-4 h-4 mr-2 text-emerald-500" /> Total Ownership Cost
                </h2>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold">Maintenance Effort</span>
                    <div className="flex items-center mt-2">
                      {[1,2,3].map(i => (
                        <div key={i} className={`h-2 w-8 mr-1 rounded-full ${
                          (data.care.effort === 'low' && i<=1) || (data.care.effort === 'medium' && i<=2) || (data.care.effort === 'high') 
                          ? 'bg-indigo-500' : 'bg-slate-200'
                        }`}></div>
                      ))}
                      <span className="ml-2 text-xs font-bold uppercase text-indigo-600">{data.care.effort}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold">Running Cost</span>
                    <div className="flex items-center mt-2">
                      {[1,2,3].map(i => (
                        <div key={i} className={`h-2 w-8 mr-1 rounded-full ${
                          (data.care.cost === 'low' && i<=1) || (data.care.cost === 'medium' && i<=2) || (data.care.cost === 'high') 
                          ? 'bg-emerald-500' : 'bg-slate-200'
                        }`}></div>
                      ))}
                      <span className="ml-2 text-xs font-bold uppercase text-emerald-600">{data.care.cost}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 🌟 ADVANCED KNOWLEDGE SECTION */}
            <div className="mt-12 pt-8 border-t-2 border-slate-200">
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-indigo-600" />
                Deep Dive: Science & Breeding
              </h2>

              {/* Scientific Context */}
              {data.scientificContext && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-indigo-50 rounded-lg shrink-0">
                      <Microscope className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-3">Biological Background</h3>
                      <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                        <div>
                          <span className="font-bold text-slate-700 block mb-1">Wild Habitat:</span>
                          {data.scientificContext.wildHabitat}
                        </div>
                        <div>
                          <span className="font-bold text-slate-700 block mb-1">Sexual Dimorphism:</span>
                          {data.scientificContext.sexualDimorphism}
                        </div>
                        {data.scientificContext.variants && data.scientificContext.variants.length > 0 && (
                          <div>
                            <span className="font-bold text-slate-700 block mb-2">Common Variants:</span>
                            <div className="flex flex-wrap gap-2">
                              {data.scientificContext.variants.map(v => (
                                <span key={v} className="bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded text-xs border border-indigo-100 font-medium">{v}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Breeding Info */}
              {data.breeding && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-pink-50 rounded-lg shrink-0">
                      <Egg className="w-5 h-5 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="font-bold text-slate-900">Breeding Guide</h3>
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${
                          data.breeding.difficulty === 'beginner' 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                          data.breeding.difficulty === 'medium' 
                            ? 'bg-amber-50 text-amber-700 border-amber-200' :
                            'bg-rose-50 text-rose-700 border-rose-200'
                        }`}>
                          {data.breeding.difficulty}
                        </span>
                      </div>
                      
                      <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Method</span>
                            <p className="font-medium text-slate-800 capitalize">{data.breeding.method.replace(/_/g, ' ')}</p>
                          </div>
                        </div>
                        
                        {data.breeding.trigger && (
                          <div>
                            <span className="font-bold text-slate-700 block mb-1">Breeding Triggers:</span>
                            {data.breeding.trigger}
                          </div>
                        )}
                        
                        {data.breeding.fryCare && (
                          <div>
                            <span className="font-bold text-slate-700 block mb-1">Fry Care:</span>
                            {data.breeding.fryCare}
                          </div>
                        )}

                        {data.breeding.notes && (
                          <div>
                            <span className="font-bold text-slate-700 block mb-1">Notes:</span>
                            {data.breeding.notes}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT COL: Tools */}
          <aside className="space-y-6">
            <div className="sticky top-24 space-y-6">
              <TankSimulator 
                fishLengthCM={data.visuals.adultSizeCM} 
                fishShape={data.visuals.iconShape} 
                minGroupSize={data.behavior.minGroupSize}
                minTankSizeLiters={data.environment.minTankSizeLiters}
              />
              
              {data.behavior.tags.includes('jumper') && (
                <div className="bg-warning-bg border border-warning/30 p-4 rounded-xl flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-warning shrink-0" />
                  <div>
                    <p className="font-bold text-warning-text text-sm">Jump Risk!</p>
                    <p className="text-warning-text/80 text-xs mt-1">Tight-fitting lid is mandatory.</p>
                  </div>
                </div>
              )}
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
};

// --- HELPERS ---

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-slate-300 mb-4">404</h1>
      <Link to="/" className="text-brand-600 font-bold hover:underline">Return Home</Link>
    </div>
  </div>
);

const Badge = ({ text, color }: { text: string, color: string }) => {
  const styles = {
    brand: 'bg-brand-500/20 text-brand-100 border-brand-400/20',
    beginner: 'bg-emerald-500/20 text-emerald-100 border-emerald-400/30',
    medium: 'bg-amber-500/20 text-amber-100 border-amber-400/30',
    intermediate: 'bg-amber-500/20 text-amber-100 border-amber-400/30',
    expert: 'bg-rose-500/20 text-rose-100 border-rose-400/30',
  }[color === 'brand' ? 'brand' : text] || 'bg-slate-700 text-slate-300';
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide border ${styles}`}>{text}</span>;
};

const StatCard = ({ icon, label, value, sub }: any) => (
  <div className="bg-surface-raised p-3 rounded-xl border border-border-subtle">
    <div className="flex items-center gap-2 mb-2">
      <div className="p-1.5 bg-white rounded-lg shadow-sm">{icon}</div>
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</span>
    </div>
    <div className="pl-1">
      <p className="font-bold text-slate-900 text-sm">{value}</p>
      {sub && <p className="text-xs text-slate-500 mt-0.5">{sub}</p>}
    </div>
  </div>
);

const capitalize = (s: string) => s ? s[0].toUpperCase() + s.slice(1) : s;

/**
 * Ensures the header image always resolves to /images/species/...
 * - Accepts absolute (/images/species/xxx.jpg)
 * - Accepts relative (images/species/xxx.jpg or xxx.jpg)
 * - Fallback: /images/species/{slug}.jpg
 */
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
