import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft, Thermometer, Droplets, Fish, Ruler, Users,
  MapPin, AlertTriangle, Activity, Heart, Sprout, 
  Mountain, Box, Sparkles, Microscope, Egg, Utensils,
  Lightbulb, XCircle, CheckCircle, Info, Clock, Zap,
  Filter, Flame, Calendar, DollarSign, TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { allSpecies } from '../data/species';
import { tagDescriptions } from '../data/glossary';
import { Species } from '../types/species';
import { SEOHead } from '../components/seo/SEOHead';
import { TankSimulator } from '../components/species/TankSimulator';
import { ParameterScale } from '../components/ui/ParameterScale';
import { DiseaseList } from '../components/species/DiseaseList';
import { ImageAttribution } from '../components/ui/ImageAttribution';

const SpeciesDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = allSpecies.find(s => s.slug === slug);
  const [activeTab, setActiveTab] = useState<'care' | 'habitat' | 'advanced'>('care');

  if (!data) return <NotFound />;

  const seoTitle = `${data.taxonomy.commonName} Care Guide`;
  const seoDesc = `Complete care guide for ${data.taxonomy.commonName}. Habitat, tank mates, breeding, and scientific background.`;
  const headerImageUrl = resolveHeaderImageUrl(data.imageUrl, data.slug);
  const compatibleSpecies = findCompatibleSpecies(data);
  
  // Check if this is an enhanced species (has new intelligence data)
  const isEnhanced = !!(data.behavior.aggressionLevel || data.care.feeding || data.experienceData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <SEOHead title={seoTitle} description={seoDesc} />

      {/* COMPACT HERO */}
      <motion.header 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden pt-12 pb-16"
      >
        <div className="absolute inset-0 z-0">
          <img src={headerImageUrl} alt={data.taxonomy.commonName} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>
        <ImageAttribution credit={data.imageCredit} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <Link to="/species" className="inline-flex items-center text-slate-300 hover:text-white mb-4 transition-colors text-sm font-semibold">
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Database
          </Link>
          
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge text={data.environment.type} color="brand" size="sm" />
                <Badge text={data.care.difficulty} color={data.care.difficulty} size="sm" />
                {isEnhanced && <Badge text="Enhanced" color="enhanced" size="sm" />}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{data.taxonomy.commonName}</h1>
              <p className="text-lg text-slate-300 italic">{data.taxonomy.scientificName}</p>
            </div>
            
            <div className="hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Origin</div>
                <div className="font-semibold text-sm">{data.taxonomy.origin}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MAIN CONTENT */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 -mt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT: Quick Stats */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-4"
          >
            {/* Quick Parameters Card */}
            <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5">
              <h3 className="text-sm font-bold text-slate-500 uppercase mb-4">Key Parameters</h3>
              <div className="space-y-3">
                <StatRow icon={<Thermometer size={16} className="text-rose-500" />} label="Temperature" value={`${data.environment.tempC.min}-${data.environment.tempC.max}°C`} />
                <StatRow icon={<Droplets size={16} className="text-cyan-500" />} label="pH" value={`${data.environment.ph.min}-${data.environment.ph.max}`} />
                <StatRow icon={<Fish size={16} className="text-blue-500" />} label="Min Tank" value={`${data.environment.minTankSizeLiters}L`} />
                <StatRow icon={<Ruler size={16} className="text-indigo-500" />} label="Size" value={`${data.visuals.adultSizeCM}cm`} />
                <StatRow icon={<Users size={16} className="text-slate-600" />} label="Group" value={`${data.behavior.minGroupSize}+`} />
                <StatRow icon={<Utensils size={16} className="text-amber-500" />} label="Diet" value={capitalize(data.care.diet)} />
              </div>
            </div>

            {/* NEW: Estimated Costs (if available) */}
            {data.experienceData?.estimatedCosts && (
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-5">
                <h3 className="text-sm font-bold text-emerald-900 uppercase mb-4 flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4" /> Estimated Costs
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-emerald-700">Initial Setup</span>
                      <span className="text-sm font-bold text-emerald-900">
                        {data.experienceData.estimatedCosts.initial.min}-{data.experienceData.estimatedCosts.initial.max} {data.experienceData.estimatedCosts.initial.currency}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-emerald-700">Monthly</span>
                      <span className="text-sm font-bold text-emerald-900">
                        {data.experienceData.estimatedCosts.monthly.min}-{data.experienceData.estimatedCosts.monthly.max} {data.experienceData.estimatedCosts.monthly.currency}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* NEW: Success Rates (if available) */}
            {data.experienceData && (data.experienceData.successRate || data.experienceData.survivalRate) && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-5">
                <h3 className="text-sm font-bold text-blue-900 uppercase mb-4 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" /> Community Stats
                </h3>
                <div className="space-y-3">
                  {data.experienceData.successRate && (
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-blue-700">Success Rate</span>
                        <span className="text-sm font-bold text-blue-900">{Math.round(data.experienceData.successRate * 100)}%</span>
                      </div>
                      <div className="w-full bg-blue-100 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${data.experienceData.successRate * 100}%` }} />
                      </div>
                    </div>
                  )}
                  {data.experienceData.survivalRate && (
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-blue-700">1+ Year Survival</span>
                        <span className="text-sm font-bold text-blue-900">{Math.round(data.experienceData.survivalRate * 100)}%</span>
                      </div>
                      <div className="w-full bg-blue-100 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${data.experienceData.survivalRate * 100}%` }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Cost/Effort Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-200 p-5">
              <h3 className="text-sm font-bold text-slate-700 uppercase mb-4">Ownership</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-slate-600">Maintenance</span>
                    <span className="text-xs font-bold text-indigo-700 uppercase">{data.care.effort}</span>
                  </div>
                  <BarIndicator level={data.care.effort} color="indigo" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-slate-600">Cost</span>
                    <span className="text-xs font-bold text-emerald-700 uppercase">{data.care.cost}</span>
                  </div>
                  <BarIndicator level={data.care.cost} color="emerald" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-slate-600">Lifespan</span>
                    <span className="text-xs font-bold text-slate-700">{data.health.lifespanYears} years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tank Simulator - Hidden on mobile */}
            <div className="hidden lg:block">
              <TankSimulator 
                fishLengthCM={data.visuals.adultSizeCM} 
                fishShape={data.visuals.iconShape} 
                minGroupSize={data.behavior.minGroupSize}
                minTankSizeLiters={data.environment.minTankSizeLiters}
              />
            </div>

            {data.behavior.tags.includes('jumper') && (
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 p-4 rounded-xl">
                <div className="flex gap-2 items-start">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-amber-900 text-sm mb-0.5">Jump Risk</p>
                    <p className="text-xs text-amber-800">Secure lid mandatory</p>
                  </div>
                </div>
              </div>
            )}
          </motion.aside>

          {/* RIGHT: Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Fun Fact */}
            {data.funFact && (
              <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-5 overflow-hidden">
                <Sparkles className="absolute top-2 right-2 w-16 h-16 text-white/10" />
                <div className="relative">
                  <div className="text-indigo-200 font-bold uppercase text-[10px] tracking-wider mb-1 flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" /> Did you know?
                  </div>
                  <p className="text-white text-sm leading-relaxed italic">"{data.funFact}"</p>
                </div>
              </div>
            )}

            {/* Tab Navigation */}
            <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
              <div className="flex border-b border-slate-200">
                <TabButton active={activeTab === 'care'} onClick={() => setActiveTab('care')}>Care & Behavior</TabButton>
                <TabButton active={activeTab === 'habitat'} onClick={() => setActiveTab('habitat')}>Habitat & Setup</TabButton>
                <TabButton active={activeTab === 'advanced'} onClick={() => setActiveTab('advanced')}>Advanced</TabButton>
              </div>

              <div className="p-5">
                {activeTab === 'care' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                    {/* Behavior */}
                    <Section title="Behavior & Temperament" icon={<Activity className="w-4 h-4" />}>
                      <p className="text-sm text-slate-700 mb-3">{data.behavior.description}</p>
                      
                      {/* NEW: Aggression Levels */}
                      {data.behavior.aggressionLevel && (
                        <div className="bg-slate-50 rounded-lg p-4 mb-3">
                          <h5 className="text-xs font-bold text-slate-700 uppercase mb-3">Aggression Profile</h5>
                          <div className="space-y-2">
                            <AggressionBar label="Intraspecific (Same Species)" level={data.behavior.aggressionLevel.intraspecific} />
                            <AggressionBar label="Interspecific (Other Species)" level={data.behavior.aggressionLevel.interspecific} />
                            <AggressionBar label="Territorial Behavior" level={data.behavior.aggressionLevel.territorial} />
                          </div>
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-2">
                        {data.behavior.tags.map((tag: string) => (
                          <TagBadge key={tag} tag={tag} />
                        ))}
                      </div>
                    </Section>

                    {/* NEW: Enhanced Feeding Schedule */}
                    <Section title="Diet & Feeding" icon={<Utensils className="w-4 h-4" />}>
                      {data.care.feeding ? (
                        <div className="space-y-3">
                          <div className="grid sm:grid-cols-2 gap-3">
                            <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                              <div className="flex items-center gap-2 mb-1">
                                <Clock className="w-3.5 h-3.5 text-amber-600" />
                                <span className="text-xs font-bold text-amber-900 uppercase">Frequency</span>
                              </div>
                              <p className="text-sm text-amber-800 capitalize">{data.care.feeding.frequency.replace('-', ' ')}</p>
                            </div>
                            <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                              <div className="flex items-center gap-2 mb-1">
                                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                                <span className="text-xs font-bold text-amber-900 uppercase">Fasting Day</span>
                              </div>
                              <p className="text-sm text-amber-800 capitalize">{data.care.feeding.fastingDay || 'Optional'}</p>
                            </div>
                          </div>
                          
                          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                            <span className="text-xs font-bold text-amber-900 uppercase block mb-2">Primary Foods</span>
                            <div className="flex flex-wrap gap-1.5">
                              {data.care.feeding.primaryFoods.map(food => (
                                <span key={food} className="text-xs bg-white text-amber-800 px-2 py-1 rounded border border-amber-200 font-semibold capitalize">
                                  {food.replace('-', ' ')}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {data.care.feeding.supplements && data.care.feeding.supplements.length > 0 && (
                            <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                              <span className="text-xs font-bold text-amber-900 uppercase block mb-2">Supplements & Treats</span>
                              <div className="flex flex-wrap gap-1.5">
                                {data.care.feeding.supplements.map(food => (
                                  <span key={food} className="text-xs bg-white text-amber-700 px-2 py-1 rounded border border-amber-200 capitalize">
                                    {food.replace('-', ' ')}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-bold text-sm capitalize">{data.care.diet}</span>
                            <span className="text-[10px] uppercase bg-white px-2 py-0.5 rounded border text-amber-700 font-bold">Diet Type</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-700">
                            {getFeedingAdvice(data).map((tip, i) => (
                              <li key={i} className="flex gap-1.5">
                                <span className="text-amber-500">•</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </Section>

                    {/* NEW: Equipment Requirements */}
                    {data.care.equipment && (
                      <Section title="Essential Equipment" icon={<Zap className="w-4 h-4" />}>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {data.care.equipment.heater?.required && (
                            <div className="bg-rose-50 rounded-lg p-3 border border-rose-200 flex gap-3">
                              <Flame className="w-5 h-5 text-rose-600 flex-shrink-0" />
                              <div>
                                <div className="font-bold text-sm text-rose-900">Heater Required</div>
                                <div className="text-xs text-rose-700">{data.care.equipment.heater.watts}W recommended</div>
                              </div>
                            </div>
                          )}
                          {data.care.equipment.filter?.required && (
                            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 flex gap-3">
                              <Filter className="w-5 h-5 text-blue-600 flex-shrink-0" />
                              <div>
                                <div className="font-bold text-sm text-blue-900">Filter Required</div>
                                <div className="text-xs text-blue-700 capitalize">
                                  {data.care.equipment.filter.type} • {data.care.equipment.filter.flowRate} flow
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </Section>
                    )}

                    {/* Compatibility */}
                    <Section title="Tank Mates" icon={<Fish className="w-4 h-4" />}>
                      {/* NEW: Compatibility Rules (if available) */}
                      {data.behavior.compatibility.rules && data.behavior.compatibility.rules.length > 0 && (
                        <div className="mb-4 space-y-2">
                          {data.behavior.compatibility.rules.map((rule, idx) => (
                            <div key={idx} className={`flex gap-2 p-3 rounded-lg border ${
                              rule.severity === 'critical' ? 'bg-red-50 border-red-300' :
                              rule.severity === 'high' ? 'bg-orange-50 border-orange-300' :
                              rule.severity === 'medium' ? 'bg-amber-50 border-amber-300' :
                              'bg-blue-50 border-blue-300'
                            }`}>
                              <AlertTriangle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                rule.severity === 'critical' ? 'text-red-600' :
                                rule.severity === 'high' ? 'text-orange-600' :
                                rule.severity === 'medium' ? 'text-amber-600' :
                                'text-blue-600'
                              }`} />
                              <div className="text-xs">
                                <span className={`font-bold uppercase text-[10px] ${
                                  rule.severity === 'critical' ? 'text-red-700' :
                                  rule.severity === 'high' ? 'text-orange-700' :
                                  rule.severity === 'medium' ? 'text-amber-700' :
                                  'text-blue-700'
                                }`}>{rule.type}</span>
                                {rule.target && <span className="text-slate-700 ml-1">• {rule.target}</span>}
                                {rule.condition && <span className="text-slate-700 ml-1">• {rule.condition}</span>}
                                <p className={`mt-1 ${
                                  rule.severity === 'critical' ? 'text-red-800' :
                                  rule.severity === 'high' ? 'text-orange-800' :
                                  rule.severity === 'medium' ? 'text-amber-800' :
                                  'text-blue-800'
                                }`}>{rule.reason}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="grid sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <div className="flex items-center gap-1.5 mb-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="font-bold text-emerald-700">Compatible</span>
                          </div>
                          <div className="space-y-1.5">
                            {data.behavior.compatibility.goodMates.map((m: string) => (
                              <div key={m} className="bg-emerald-50 text-emerald-800 px-2 py-1.5 rounded border border-emerald-100">{m}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-2">
                            <XCircle className="w-3.5 h-3.5 text-rose-500" />
                            <span className="font-bold text-rose-700">Avoid</span>
                          </div>
                          <div className="space-y-1.5">
                            {data.behavior.compatibility.badMates.map((m: string) => (
                              <div key={m} className="bg-rose-50 text-rose-800 px-2 py-1.5 rounded border border-rose-100">{m}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {data.behavior.compatibility.notes && (
                        <p className="mt-3 text-xs text-slate-600 bg-slate-50 p-3 rounded border border-slate-200">
                          <strong>Note:</strong> {data.behavior.compatibility.notes}
                        </p>
                      )}
                    </Section>

                    {/* Pro Tips & Mistakes */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {data.care.proTips && (
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200">
                          <h4 className="text-xs font-bold text-amber-900 mb-2 flex items-center">
                            <Lightbulb className="w-3.5 h-3.5 mr-1" /> Pro Tips
                          </h4>
                          <ul className="space-y-1.5 text-xs text-amber-900">
                            {data.care.proTips.map((tip: string, i: number) => (
                              <li key={i} className="flex gap-1.5">
                                <span className="w-1 h-1 mt-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {data.care.commonMistakes && (
                        <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-lg p-4 border border-rose-200">
                          <h4 className="text-xs font-bold text-rose-900 mb-2 flex items-center">
                            <XCircle className="w-3.5 h-3.5 mr-1" /> Avoid
                          </h4>
                          <ul className="space-y-1.5 text-xs text-rose-900">
                            {data.care.commonMistakes.map((mistake: string, i: number) => (
                              <li key={i} className="flex gap-1.5">
                                <span className="w-1 h-1 mt-1.5 bg-rose-500 rounded-full flex-shrink-0" />
                                <span>{mistake}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* NEW: Common Failures (if available) */}
                    {data.experienceData?.commonFailures && data.experienceData.commonFailures.length > 0 && (
                      <Section title="Common Mistakes" icon={<AlertTriangle className="w-4 h-4" />}>
                        <div className="space-y-2">
                          {data.experienceData.commonFailures
                            .sort((a, b) => b.frequency - a.frequency)
                            .map((failure, idx) => (
                            <div key={idx} className="bg-red-50 rounded-lg p-3 border border-red-200">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-bold text-red-900 capitalize">{failure.issue.replace('-', ' ')}</span>
                                <span className="text-xs font-bold text-red-700">{Math.round(failure.frequency * 100)}% affected</span>
                              </div>
                              <p className="text-xs text-red-800">
                                <strong>Cause:</strong> {failure.cause.replace('-', ' ')}
                              </p>
                            </div>
                          ))}
                        </div>
                      </Section>
                    )}

                    {/* Health */}
                    <Section title="Health & Diseases" icon={<Heart className="w-4 h-4" />}>
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs font-bold text-slate-500 uppercase block mb-1.5">Common Diseases</span>
                          <DiseaseList diseases={data.health.commonDiseases} />
                        </div>
                        {data.health.sensitivities && data.health.sensitivities.length > 0 && (
                          <div>
                            <span className="text-xs font-bold text-slate-500 uppercase block mb-1.5">Sensitivities</span>
                            <div className="flex flex-wrap gap-1.5">
                              {data.health.sensitivities.map((s: string) => (
                                <span key={s} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded border border-amber-100">{s}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </Section>
                  </motion.div>
                )}

                {activeTab === 'habitat' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                    {/* Parameters */}
                    <Section title="Water Parameters" icon={<Droplets className="w-4 h-4" />}>
                      <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                        <ParameterScale label="Temperature" unit="°C" min={15} max={35} valueMin={data.environment.tempC.min} valueMax={data.environment.tempC.max} color="rose" />
                        <ParameterScale label="pH" unit="" min={4.0} max={9.0} valueMin={data.environment.ph.min} valueMax={data.environment.ph.max} color="cyan" />
                      </div>
                    </Section>

                    {/* Tank Setup */}
                    <Section title="Tank Setup" icon={<Mountain className="w-4 h-4" />}>
                      <div className="grid sm:grid-cols-2 gap-3 mb-4">
                        <InfoCard label="Flow" value={capitalize(data.environment.flow)} icon={<Activity className="w-4 h-4 text-blue-600" />} />
                        <InfoCard label="Substrate" value={capitalize(data.environment.substrate || 'Any')} icon={<Box className="w-4 h-4 text-amber-600" />} />
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                              <Sprout className="w-3.5 h-3.5 text-emerald-500" /> Planting
                            </span>
                            <span className="text-xs font-bold uppercase text-emerald-700">{data.habitat.planting}</span>
                          </div>
                          <BarIndicator level={data.habitat.planting} color="emerald" />
                          <p className="text-xs text-slate-600 mt-2">{data.habitat.plantingNotes}</p>
                        </div>
                        
                        <div>
                          <span className="text-xs font-bold text-slate-600 block mb-2">Hardscape</span>
                          <div className="flex flex-wrap gap-2">
                            {data.habitat.hardscape.map((item: string) => (
                              <span key={item} className="text-xs bg-amber-50 text-amber-800 px-2 py-1 rounded border border-amber-100 font-semibold">{item}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Section>

                    {/* Recommended Setup */}
                    <Section title="Recommended Setup" icon={<CheckCircle className="w-4 h-4" />}>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {getTankSetupRecommendations(data).map((item, i) => (
                          <div key={i} className="flex gap-2 bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                            <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-bold text-xs text-slate-900 mb-0.5">{item.title}</div>
                              <div className="text-xs text-slate-600">{item.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Section>

                    {/* Compatible Species */}
                    {compatibleSpecies.length > 0 && (
                      <Section title="Compatible Species" icon={<Fish className="w-4 h-4" />}>
                        {/* Disclaimer */}
                        <div className="mb-3 bg-blue-50 border border-blue-200 rounded-lg p-3 flex gap-2">
                          <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-blue-900 leading-relaxed">
                            <strong>Algorithm-based suggestions:</strong> These species match water parameters, size, and temperament. However, compatibility depends on tank size, individual behavior, and setup. Always verify before mixing species.
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {compatibleSpecies.slice(0, 6).map((species) => (
                            <Link key={species.id} to={`/species/${species.slug}`} className="group p-2 bg-slate-50 hover:bg-indigo-50 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all">
                              <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-700 truncate">{species.taxonomy.commonName}</div>
                              <div className="text-[10px] text-slate-500 italic truncate">{species.taxonomy.scientificName}</div>
                            </Link>
                          ))}
                        </div>
                      </Section>
                    )}
                  </motion.div>
                )}

                {activeTab === 'advanced' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                    {/* Scientific Context */}
                    {data.scientificContext && (
                      <Section title="Scientific Background" icon={<Microscope className="w-4 h-4" />}>
                        <div className="space-y-3 text-sm text-slate-700">
                          <div>
                            <span className="font-bold text-slate-900 block mb-1">Wild Habitat</span>
                            <p>{data.scientificContext.wildHabitat}</p>
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block mb-1">Sexual Dimorphism</span>
                            <p>{data.scientificContext.sexualDimorphism}</p>
                          </div>
                          {data.scientificContext.variants && data.scientificContext.variants.length > 0 && (
                            <div>
                              <span className="font-bold text-slate-900 block mb-2">Variants</span>
                              <div className="flex flex-wrap gap-2">
                                {data.scientificContext.variants.map((v: string) => (
                                  <span key={v} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs border border-indigo-100 font-semibold">{v}</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </Section>
                    )}

                    {/* Breeding */}
                    {data.breeding && (
                      <Section title="Breeding Guide" icon={<Egg className="w-4 h-4" />}>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Badge text={data.breeding.difficulty} color={data.breeding.difficulty} size="sm" />
                            <span className="text-xs text-slate-500 capitalize">{data.breeding.method.replace(/_/g, ' ')}</span>
                          </div>
                          
                          <div className="space-y-2 text-sm text-slate-700">
                            {data.breeding.trigger && (
                              <div className="bg-slate-50 p-3 rounded-lg">
                                <span className="font-bold text-slate-900 block mb-1 text-xs">Trigger</span>
                                <p className="text-xs">{data.breeding.trigger}</p>
                              </div>
                            )}
                            {data.breeding.fryCare && (
                              <div className="bg-slate-50 p-3 rounded-lg">
                                <span className="font-bold text-slate-900 block mb-1 text-xs">Fry Care</span>
                                <p className="text-xs">{data.breeding.fryCare}</p>
                              </div>
                            )}
                            {data.breeding.notes && (
                              <p className="text-xs text-slate-600 italic">{data.breeding.notes}</p>
                            )}
                          </div>
                        </div>
                      </Section>
                    )}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Tank Simulator - Shown on mobile below tabs */}
            <div className="lg:hidden">
              <TankSimulator 
                fishLengthCM={data.visuals.adultSizeCM} 
                fishShape={data.visuals.iconShape} 
                minGroupSize={data.behavior.minGroupSize}
                minTankSizeLiters={data.environment.minTankSizeLiters}
              />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

// --- NEW COMPONENT: Aggression Bar ---
const AggressionBar = ({ label, level }: { label: string; level: number }) => (
  <div>
    <div className="flex items-center justify-between mb-1">
      <span className="text-xs text-slate-600">{label}</span>
      <span className="text-xs font-bold text-slate-900">{level}/10</span>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2">
      <div 
        className={`h-2 rounded-full ${
          level >= 8 ? 'bg-red-600' :
          level >= 6 ? 'bg-orange-500' :
          level >= 4 ? 'bg-amber-500' :
          'bg-emerald-500'
        }`}
        style={{ width: `${level * 10}%` }}
      />
    </div>
  </div>
);

// --- COMPONENTS ---
const TabButton = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button onClick={onClick} className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
    active 
      ? 'bg-white text-indigo-700 border-b-2 border-indigo-600' 
      : 'bg-slate-50 text-slate-600 hover:text-slate-900 border-b-2 border-transparent'
  }`}>
    {children}
  </button>
);

const Section = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
  <div>
    <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">{icon} {title}</h3>
    <div>{children}</div>
  </div>
);

const StatRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center justify-between py-1">
    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
      {icon}
      <span>{label}</span>
    </div>
    <span className="text-sm font-bold text-slate-900">{value}</span>
  </div>
);

const InfoCard = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => (
  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
    <div className="flex items-center gap-2 mb-1">
      {icon}
      <span className="text-xs font-bold text-slate-500 uppercase">{label}</span>
    </div>
    <p className="text-sm font-bold text-slate-900">{value}</p>
  </div>
);

const BarIndicator = ({ level, color }: { level: string; color: 'indigo' | 'emerald' }) => {
  const steps = level === 'low' || level === 'sparse' ? 1 : level === 'medium' ? 2 : 3;
  const colorClasses = {
    indigo: { active: 'bg-indigo-500', inactive: 'bg-slate-200' },
    emerald: { active: 'bg-emerald-500', inactive: 'bg-slate-200' },
  }[color];
  
  return (
    <div className="flex gap-1.5">
      {[1, 2, 3].map(i => (
        <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= steps ? colorClasses.active : colorClasses.inactive}`} />
      ))}
    </div>
  );
};

const TagBadge = ({ tag }: { tag: string }) => (
  <div className="group relative">
    <span className="cursor-help inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors">
      {tag === 'jumper' && <AlertTriangle className="w-3 h-3 mr-1 text-amber-500" />}
      {capitalize(tag.replace(/_/g, ' '))}
    </span>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-900 text-white text-xs p-2.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
      <span className="font-semibold block mb-1 capitalize">{tag.replace(/_/g, ' ')}:</span>
      {tagDescriptions[tag as keyof typeof tagDescriptions] || "No description available."}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
    </div>
  </div>
);

const Badge = ({ text, color, size = 'md' }: { text: string; color: string; size?: 'sm' | 'md' }) => {
  const styles = {
    brand: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    enhanced: 'bg-purple-100 text-purple-700 border-purple-200',
    beginner: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    medium: 'bg-amber-100 text-amber-700 border-amber-200',
    intermediate: 'bg-amber-100 text-amber-700 border-amber-200',
    expert: 'bg-rose-100 text-rose-700 border-rose-200',
  }[color === 'brand' || color === 'enhanced' ? color : text] || 'bg-slate-100 text-slate-700 border-slate-200';
  
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs';
  
  return <span className={`inline-flex items-center rounded-lg font-bold uppercase tracking-wide border ${styles} ${sizeClasses}`}>{text}</span>;
};

// --- HELPERS ---
const getTankSetupRecommendations = (species: Species) => {
  const items = [];
  items.push({ title: `${species.environment.minTankSizeLiters}L+ Tank`, description: `Min ${species.environment.minTankSizeLiters}L for ${species.behavior.minGroupSize} fish` });
  if (species.habitat.planting === 'dense') items.push({ title: 'Dense Plants', description: 'Heavy planting for security' });
  else if (species.habitat.planting === 'medium') items.push({ title: 'Moderate Plants', description: 'Balance plants & open space' });
  if (species.environment.substrate) items.push({ title: `${capitalize(species.environment.substrate)} Substrate`, description: 'Recommended substrate type' });
  if (species.environment.flow === 'low') items.push({ title: 'Gentle Flow', description: 'Low current filtration' });
  if (species.behavior.tags.includes('jumper')) items.push({ title: 'Secure Lid', description: 'Prevents jumping escapes' });
  return items;
};

/**
 * Enhanced compatibility algorithm with scoring system
 * Returns species sorted by compatibility score (best matches first)
 */
const findCompatibleSpecies = (currentSpecies: Species): Species[] => {
  type ScoredSpecies = { species: Species; score: number };
  
  const candidates: ScoredSpecies[] = allSpecies
    .filter(s => s.id !== currentSpecies.id)
    .map(s => ({ species: s, score: calculateCompatibilityScore(currentSpecies, s) }))
    .filter(({ score }) => score > 0) // Only species with positive compatibility
    .sort((a, b) => b.score - a.score); // Sort by score descending
  
  return candidates.slice(0, 12).map(c => c.species);
};

/**
 * Calculate compatibility score between two species
 * Higher score = better compatibility
 * Score of 0 or less = incompatible
 */
const calculateCompatibilityScore = (current: Species, candidate: Species): number => {
  let score = 0;
  
  // --- MANDATORY CHECKS (return 0 if failed) ---
  
  // 1. Must be same water type (freshwater/saltwater/brackish)
  if (current.environment.type !== candidate.environment.type) return 0;
  
  // 2. Temperature overlap required
  const tempOverlap = candidate.environment.tempC.min <= current.environment.tempC.max && 
                      candidate.environment.tempC.max >= current.environment.tempC.min;
  if (!tempOverlap) return 0;
  
  // 3. pH overlap required
  const phOverlap = candidate.environment.ph.min <= current.environment.ph.max && 
                    candidate.environment.ph.max >= current.environment.ph.min;
  if (!phOverlap) return 0;
  
  // 4. Size ratio check - prevent huge mismatches (e.g. 7cm Betta with 35cm Oscar)
  const sizeRatio = Math.max(current.visuals.adultSizeCM, candidate.visuals.adultSizeCM) / 
                    Math.min(current.visuals.adultSizeCM, candidate.visuals.adultSizeCM);
  if (sizeRatio > 3) return 0; // One is 3x+ larger = bullying/predation risk
  
  // 5. Predator checks - stricter than before
  const currentIsPredator = current.behavior.tags.includes('predator');
  const candidateIsPredator = candidate.behavior.tags.includes('predator');
  
  // Don't put predators with ANY fish under 10cm (not just 5cm)
  if (currentIsPredator && candidate.visuals.adultSizeCM < 10) return 0;
  if (candidateIsPredator && current.visuals.adultSizeCM < 10) return 0;
  
  // 6. Tank size compatibility - exclude if candidate needs much larger tank
  const tankSizeRatio = candidate.environment.minTankSizeLiters / current.environment.minTankSizeLiters;
  if (tankSizeRatio > 5) return 0; // Candidate needs 5x+ larger tank = incompatible
  
  // 7. Aggression checks (using 'territorial' and 'semi-aggressive' tags)
  const currentIsAggressive = current.behavior.tags.includes('territorial') || current.behavior.tags.includes('semi-aggressive');
  const candidateIsAggressive = candidate.behavior.tags.includes('territorial') || candidate.behavior.tags.includes('semi-aggressive');
  const currentIsPeaceful = current.behavior.tags.includes('peaceful');
  const candidateIsPeaceful = candidate.behavior.tags.includes('peaceful');
  
  // Don't mix aggressive with peaceful unless both are aggressive
  if (currentIsAggressive && candidateIsPeaceful) return 0;
  if (candidateIsAggressive && currentIsPeaceful) return 0;
  
  // --- SCORING (positive factors) ---
  
  // Base score for passing mandatory checks
  score = 50;
  
  // Bonus: Both peaceful (+30 points)
  if (currentIsPeaceful && candidateIsPeaceful) score += 30;
  
  // Bonus: Similar size range (+20 if within 2cm, +10 if within 4cm)
  const sizeDiff = Math.abs(current.visuals.adultSizeCM - candidate.visuals.adultSizeCM);
  if (sizeDiff <= 2) score += 20;
  else if (sizeDiff <= 4) score += 10;
  
  // Bonus: Compatible tank sizes (+15 if similar requirements)
  const tankDiff = Math.abs(current.environment.minTankSizeLiters - candidate.environment.minTankSizeLiters);
  if (tankDiff <= 20) score += 15;
  else if (tankDiff <= 50) score += 5;
  
  // Bonus: Different swimming zones to avoid competition (+15)
  const currentIsBottom = current.behavior.tags.includes('bottom_dweller');
  const candidateIsBottom = candidate.behavior.tags.includes('bottom_dweller');
  const currentIsSurface = current.behavior.tags.includes('surface_dweller') || current.behavior.tags.includes('surface');
  const candidateIsSurface = candidate.behavior.tags.includes('surface_dweller') || candidate.behavior.tags.includes('surface');
  
  if ((currentIsBottom && candidateIsSurface) || (currentIsSurface && candidateIsBottom)) {
    score += 15; // Perfect zone separation
  } else if (currentIsBottom !== candidateIsBottom || currentIsSurface !== candidateIsSurface) {
    score += 8; // Some zone separation
  }
  
  // Bonus: Similar temperature preference (+10 for close match)
  const tempMidCurrent = (current.environment.tempC.min + current.environment.tempC.max) / 2;
  const tempMidCandidate = (candidate.environment.tempC.min + candidate.environment.tempC.max) / 2;
  if (Math.abs(tempMidCurrent - tempMidCandidate) <= 2) score += 10;
  
  // Bonus: Similar pH preference (+10 for close match)
  const phMidCurrent = (current.environment.ph.min + current.environment.ph.max) / 2;
  const phMidCandidate = (candidate.environment.ph.min + candidate.environment.ph.max) / 2;
  if (Math.abs(phMidCurrent - phMidCandidate) <= 0.5) score += 10;
  
  // Bonus: Both schooling species (+10) - they create dynamic together
  if (current.behavior.minGroupSize >= 6 && candidate.behavior.minGroupSize >= 6) score += 10;
  
  // Bonus: Similar activity level (+5) - using 'active' tag
  const currentIsActive = current.behavior.tags.includes('active');
  const candidateIsActive = candidate.behavior.tags.includes('active');
  if (currentIsActive === candidateIsActive) score += 5;
  
  // Penalty: Very different care difficulty (-10)
  const difficultyMap = { beginner: 1, medium: 2, intermediate: 2, expert: 3 };
  const currentDiff = difficultyMap[current.care.difficulty as keyof typeof difficultyMap] || 2;
  const candidateDiff = difficultyMap[candidate.care.difficulty as keyof typeof difficultyMap] || 2;
  if (Math.abs(currentDiff - candidateDiff) >= 2) score -= 10;
  
  return score;
};

const getFeedingAdvice = (species: Species): string[] => {
  const advice: string[] = [];
  const { diet } = species.care;
  const { tags } = species.behavior;
  const size = species.visuals.adultSizeCM;
  const shape = species.visuals.iconShape;

  if (shape === 'shrimp') advice.push("Staple: Shrimp pellets or biofilm");
  else if (size < 5) advice.push("Staple: Micro-pellets or crushed flakes");
  else advice.push("Staple: Quality granules or flakes");

  if (tags.includes('bottom_dweller') || shape === 'depressed') advice.push("Sinking wafers for bottom feeders");
  if (tags.includes('algae_eater') || diet === 'herbivore') advice.push("Supplements: Algae wafers, blanched veggies (2-3x/week)");
  if (diet === 'carnivore' || diet === 'omnivore') advice.push("Treats: Frozen/live foods (bloodworms, brine shrimp) 1-2x/week");
  if (tags.includes('surface_dweller')) advice.push("Placement: Floating foods preferred");
  if (tags.includes('nocturnal')) advice.push("Timing: Feed after lights out");

  return advice;
};

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
    <div className="text-center max-w-md mx-auto bg-white rounded-2xl p-12 shadow-lg border border-slate-200">
      <div className="w-24 h-24 bg-slate-200 rounded-2xl mx-auto mb-6 flex items-center justify-center">
        <span className="text-4xl font-bold text-slate-400">404</span>
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Species Not Found</h1>
      <Link to="/species" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold">
        ← Return to Database
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