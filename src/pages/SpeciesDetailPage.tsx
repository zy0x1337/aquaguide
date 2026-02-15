import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft, Thermometer, Droplets, Fish, Ruler, Users,
  MapPin, AlertTriangle, Activity, Heart, Sprout, 
  Mountain, Box, Sparkles, Microscope, Egg, Utensils,
  Lightbulb, XCircle, CheckCircle, Info, Clock, Zap,
  Filter, Flame, Calendar, DollarSign, TrendingUp, Target
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
  const [activeTab, setActiveTab] = useState<'overview' | 'care' | 'habitat' | 'compatibility' | 'advanced'>('overview');

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

      {/* HERO SECTION */}
      <motion.header 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img src={headerImageUrl} alt={data.taxonomy.commonName} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>
        <ImageAttribution credit={data.imageCredit} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <Link to="/species" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors text-sm font-semibold">
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Database
          </Link>
          
          {/* Header Content */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left: Title & Badges */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge text={data.environment.type} color="brand" size="sm" />
                <Badge text={data.care.difficulty} color={data.care.difficulty} size="sm" />
                {isEnhanced && <Badge text="Enhanced Data" color="enhanced" size="sm" />}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-3">{data.taxonomy.commonName}</h1>
              <p className="text-xl text-slate-300 italic mb-6">{data.taxonomy.scientificName}</p>
              
              {/* Quick Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <QuickStat icon={<Ruler className="w-4 h-4" />} label="Max Size" value={`${data.visuals.adultSizeCM}cm`} />
                <QuickStat icon={<Fish className="w-4 h-4" />} label="Min Tank" value={`${data.environment.minTankSizeLiters}L`} />
                <QuickStat icon={<Users className="w-4 h-4" />} label="Min Group" value={`${data.behavior.minGroupSize}+`} />
                <QuickStat icon={<Heart className="w-4 h-4" />} label="Lifespan" value={`${data.health.lifespanYears} yrs`} />
              </div>
            </div>
            
            {/* Right: Origin Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-indigo-400" />
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">Native To</div>
                  <div className="text-lg font-bold">{data.taxonomy.origin}</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Difficulty</span>
                  <span className="font-semibold capitalize">{data.care.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Temperament</span>
                  <span className="font-semibold capitalize">{data.behavior.tags.includes('peaceful') ? 'Peaceful' : data.behavior.tags.includes('semi-aggressive') ? 'Semi-Aggressive' : 'Varies'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Diet</span>
                  <span className="font-semibold capitalize">{data.care.diet}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MAIN CONTENT */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Fun Fact */}
        {data.funFact && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 overflow-hidden">
              <Sparkles className="absolute top-3 right-3 w-20 h-20 text-white/10" />
              <div className="relative">
                <div className="text-indigo-200 font-bold uppercase text-xs tracking-wider mb-2 flex items-center">
                  <Sparkles className="w-4 h-4 mr-1.5" /> Did you know?
                </div>
                <p className="text-white text-lg leading-relaxed italic">"{data.funFact}"</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Key Warnings (Jumper, etc.) */}
        {(data.behavior.tags.includes('jumper') || (data.experienceData?.commonFailures && data.experienceData.commonFailures.length > 0)) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {data.behavior.tags.includes('jumper') && (
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 p-5 rounded-xl">
                  <div className="flex gap-3 items-start">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-amber-900 text-base mb-1">Jump Risk!</p>
                      <p className="text-sm text-amber-800">Requires secure lid - this species is known to jump out of open tanks</p>
                    </div>
                  </div>
                </div>
              )}
              
              {data.experienceData?.commonFailures && data.experienceData.commonFailures.length > 0 && (
                <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-300 p-5 rounded-xl">
                  <div className="flex gap-3 items-start">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-red-900 text-base mb-1">Common Mistake</p>
                      <p className="text-sm text-red-800">
                        {data.experienceData.commonFailures[0].issue.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} 
                        ({Math.round(data.experienceData.commonFailures[0].frequency * 100)}% of keepers affected)
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* TAB NAVIGATION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-slate-200 overflow-x-auto">
              <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} icon={<Target className="w-4 h-4" />}>
                Overview
              </TabButton>
              <TabButton active={activeTab === 'care'} onClick={() => setActiveTab('care')} icon={<Heart className="w-4 h-4" />}>
                Care Guide
              </TabButton>
              <TabButton active={activeTab === 'habitat'} onClick={() => setActiveTab('habitat')} icon={<Mountain className="w-4 h-4" />}>
                Habitat Setup
              </TabButton>
              <TabButton active={activeTab === 'compatibility'} onClick={() => setActiveTab('compatibility')} icon={<Fish className="w-4 h-4" />}>
                Tank Mates
              </TabButton>
              <TabButton active={activeTab === 'advanced'} onClick={() => setActiveTab('advanced')} icon={<Microscope className="w-4 h-4" />}>
                Advanced
              </TabButton>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {/* OVERVIEW TAB */}
              {activeTab === 'overview' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  {/* Parameters Grid */}
                  <div>
                    <SectionHeader title="Water Parameters" icon={<Droplets className="w-5 h-5" />} />
                    <div className="grid md:grid-cols-2 gap-6">
                      <ParameterCard 
                        icon={<Thermometer className="w-5 h-5 text-rose-500" />}
                        label="Temperature"
                        value={`${data.environment.tempC.min}-${data.environment.tempC.max}°C`}
                        gradient="from-rose-50 to-red-50"
                      />
                      <ParameterCard 
                        icon={<Droplets className="w-5 h-5 text-cyan-500" />}
                        label="pH Level"
                        value={`${data.environment.ph.min}-${data.environment.ph.max}`}
                        gradient="from-cyan-50 to-blue-50"
                      />
                      <ParameterCard 
                        icon={<Activity className="w-5 h-5 text-blue-500" />}
                        label="Water Flow"
                        value={capitalize(data.environment.flow)}
                        gradient="from-blue-50 to-indigo-50"
                      />
                      <ParameterCard 
                        icon={<Box className="w-5 h-5 text-amber-500" />}
                        label="Substrate"
                        value={capitalize(data.environment.substrate || 'Any')}
                        gradient="from-amber-50 to-orange-50"
                      />
                    </div>
                  </div>

                  {/* Behavior Overview */}
                  <div>
                    <SectionHeader title="Behavior & Temperament" icon={<Activity className="w-5 h-5" />} />
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <p className="text-slate-700 mb-4 leading-relaxed">{data.behavior.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {data.behavior.tags.map((tag: string) => (
                          <TagBadge key={tag} tag={tag} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats & Costs */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Ownership Stats */}
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
                      <h4 className="text-sm font-bold text-slate-700 uppercase mb-4 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-indigo-600" /> Ownership
                      </h4>
                      <div className="space-y-4">
                        <StatBar label="Difficulty" value={data.care.difficulty} color="indigo" />
                        <StatBar label="Maintenance" value={data.care.effort} color="blue" />
                        <StatBar label="Cost" value={data.care.cost} color="emerald" />
                      </div>
                    </div>

                    {/* Estimated Costs */}
                    {data.experienceData?.estimatedCosts && (
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                        <h4 className="text-sm font-bold text-slate-700 uppercase mb-4 flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-emerald-600" /> Est. Costs
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <div className="text-xs text-emerald-700 font-semibold mb-1">Initial Setup</div>
                            <div className="text-2xl font-bold text-emerald-900">
                              {data.experienceData.estimatedCosts.initial.min}-{data.experienceData.estimatedCosts.initial.max}
                              <span className="text-sm ml-1">{data.experienceData.estimatedCosts.initial.currency}</span>
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-emerald-700 font-semibold mb-1">Monthly</div>
                            <div className="text-2xl font-bold text-emerald-900">
                              {data.experienceData.estimatedCosts.monthly.min}-{data.experienceData.estimatedCosts.monthly.max}
                              <span className="text-sm ml-1">{data.experienceData.estimatedCosts.monthly.currency}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* CARE GUIDE TAB */}
              {activeTab === 'care' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  {/* Aggression Profile */}
                  {data.behavior.aggressionLevel && (
                    <div>
                      <SectionHeader title="Aggression Profile" icon={<AlertTriangle className="w-5 h-5" />} />
                      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
                        <AggressionBar label="Intraspecific (Same Species)" level={data.behavior.aggressionLevel.intraspecific} />
                        <AggressionBar label="Interspecific (Other Species)" level={data.behavior.aggressionLevel.interspecific} />
                        <AggressionBar label="Territorial Behavior" level={data.behavior.aggressionLevel.territorial} />
                      </div>
                    </div>
                  )}

                  {/* Feeding */}
                  <div>
                    <SectionHeader title="Diet & Feeding" icon={<Utensils className="w-5 h-5" />} />
                    {data.care.feeding ? (
                      <div className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <InfoBox icon={<Clock className="w-5 h-5 text-amber-600" />} label="Frequency" value={data.care.feeding.frequency.replace('-', ' ')} gradient="from-amber-50 to-orange-50" />
                          <InfoBox icon={<Calendar className="w-5 h-5 text-amber-600" />} label="Fasting Day" value={data.care.feeding.fastingDay || 'Optional'} gradient="from-amber-50 to-orange-50" />
                        </div>
                        
                        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                          <h5 className="text-sm font-bold text-amber-900 uppercase mb-3">Primary Foods</h5>
                          <div className="flex flex-wrap gap-2">
                            {data.care.feeding.primaryFoods.map(food => (
                              <FoodChip key={food} text={food} primary />
                            ))}
                          </div>
                        </div>
                        
                        {data.care.feeding.supplements && data.care.feeding.supplements.length > 0 && (
                          <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                            <h5 className="text-sm font-bold text-amber-800 uppercase mb-3">Supplements & Treats</h5>
                            <div className="flex flex-wrap gap-2">
                              {data.care.feeding.supplements.map(food => (
                                <FoodChip key={food} text={food} primary={false} />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                        <ul className="space-y-2">
                          {getFeedingAdvice(data).map((tip, i) => (
                            <li key={i} className="flex gap-3 text-sm text-slate-700">
                              <span className="text-amber-500 font-bold">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Equipment */}
                  {data.care.equipment && (
                    <div>
                      <SectionHeader title="Essential Equipment" icon={<Zap className="w-5 h-5" />} />
                      <div className="grid sm:grid-cols-2 gap-4">
                        {data.care.equipment.heater?.required && (
                          <EquipmentCard 
                            icon={<Flame className="w-6 h-6 text-rose-600" />}
                            title="Heater Required"
                            description={`${data.care.equipment.heater.watts}W recommended`}
                            gradient="from-rose-50 to-red-50"
                            borderColor="border-rose-200"
                          />
                        )}
                        {data.care.equipment.filter?.required && (
                          <EquipmentCard 
                            icon={<Filter className="w-6 h-6 text-blue-600" />}
                            title="Filter Required"
                            description={`${capitalize(data.care.equipment.filter.type)} • ${data.care.equipment.filter.flowRate} flow`}
                            gradient="from-blue-50 to-indigo-50"
                            borderColor="border-blue-200"
                          />
                        )}
                      </div>
                    </div>
                  )}

                  {/* Common Mistakes */}
                  {data.experienceData?.commonFailures && data.experienceData.commonFailures.length > 0 && (
                    <div>
                      <SectionHeader title="Common Mistakes to Avoid" icon={<XCircle className="w-5 h-5" />} />
                      <div className="space-y-3">
                        {data.experienceData.commonFailures
                          .sort((a, b) => b.frequency - a.frequency)
                          .map((failure, idx) => (
                          <MistakeCard key={idx} issue={failure.issue} cause={failure.cause} frequency={failure.frequency} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Health */}
                  <div>
                    <SectionHeader title="Health & Disease Prevention" icon={<Heart className="w-5 h-5" />} />
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
                      <div>
                        <h5 className="text-sm font-bold text-slate-700 uppercase mb-3">Common Diseases</h5>
                        <DiseaseList diseases={data.health.commonDiseases} />
                      </div>
                      {data.health.sensitivities && data.health.sensitivities.length > 0 && (
                        <div>
                          <h5 className="text-sm font-bold text-slate-700 uppercase mb-3">Sensitivities</h5>
                          <div className="flex flex-wrap gap-2">
                            {data.health.sensitivities.map((s: string) => (
                              <span key={s} className="text-xs bg-amber-100 text-amber-800 px-3 py-1.5 rounded-lg border border-amber-200 font-semibold">{s}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pro Tips & Common Mistakes */}
                  {(data.care.proTips || data.care.commonMistakes) && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {data.care.proTips && (
                        <TipsCard title="Pro Tips" icon={<Lightbulb className="w-4 h-4" />} items={data.care.proTips} variant="success" />
                      )}
                      {data.care.commonMistakes && (
                        <TipsCard title="Avoid These" icon={<XCircle className="w-4 h-4" />} items={data.care.commonMistakes} variant="danger" />
                      )}
                    </div>
                  )}
                </motion.div>
              )}

              {/* HABITAT TAB */}
              {activeTab === 'habitat' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  {/* Water Parameters Detailed */}
                  <div>
                    <SectionHeader title="Water Parameters" icon={<Droplets className="w-5 h-5" />} />
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-6">
                      <ParameterScale label="Temperature" unit="°C" min={15} max={35} valueMin={data.environment.tempC.min} valueMax={data.environment.tempC.max} color="rose" />
                      <ParameterScale label="pH" unit="" min={4.0} max={9.0} valueMin={data.environment.ph.min} valueMax={data.environment.ph.max} color="cyan" />
                    </div>
                  </div>

                  {/* Tank Setup */}
                  <div>
                    <SectionHeader title="Tank Setup Recommendations" icon={<Mountain className="w-5 h-5" />} />
                    <div className="grid sm:grid-cols-2 gap-4">
                      {getTankSetupRecommendations(data).map((item, i) => (
                        <SetupCard key={i} title={item.title} description={item.description} />
                      ))}
                    </div>
                  </div>

                  {/* Planting & Hardscape */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <SectionHeader title="Planting Density" icon={<Sprout className="w-5 h-5" />} />
                      <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-bold text-emerald-900 uppercase">{data.habitat.planting}</span>
                          <BarIndicator level={data.habitat.planting} color="emerald" />
                        </div>
                        <p className="text-sm text-slate-700">{data.habitat.plantingNotes}</p>
                      </div>
                    </div>
                    
                    <div>
                      <SectionHeader title="Hardscape Elements" icon={<Mountain className="w-5 h-5" />} />
                      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                        <div className="flex flex-wrap gap-2">
                          {data.habitat.hardscape.map((item: string) => (
                            <span key={item} className="text-sm bg-white text-slate-800 px-3 py-2 rounded-lg border border-slate-300 font-semibold">{item}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* COMPATIBILITY TAB */}
              {activeTab === 'compatibility' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  {/* Compatibility Rules */}
                  {data.behavior.compatibility.rules && data.behavior.compatibility.rules.length > 0 && (
                    <div>
                      <SectionHeader title="Compatibility Rules" icon={<AlertTriangle className="w-5 h-5" />} />
                      <div className="space-y-3">
                        {data.behavior.compatibility.rules.map((rule, idx) => (
                          <CompatibilityRuleCard key={idx} rule={rule} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Good/Bad Mates */}
                  <div>
                    <SectionHeader title="Tank Mate Guidelines" icon={<Fish className="w-5 h-5" />} />
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                          <h4 className="font-bold text-emerald-700 text-lg">Compatible With</h4>
                        </div>
                        <div className="space-y-2">
                          {data.behavior.compatibility.goodMates.map((m: string) => (
                            <div key={m} className="bg-emerald-50 text-emerald-800 px-4 py-3 rounded-lg border border-emerald-200 font-semibold">{m}</div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <XCircle className="w-5 h-5 text-rose-500" />
                          <h4 className="font-bold text-rose-700 text-lg">Avoid Mixing With</h4>
                        </div>
                        <div className="space-y-2">
                          {data.behavior.compatibility.badMates.map((m: string) => (
                            <div key={m} className="bg-rose-50 text-rose-800 px-4 py-3 rounded-lg border border-rose-200 font-semibold">{m}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {data.behavior.compatibility.notes && (
                      <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <p className="text-sm text-blue-900">
                          <strong className="font-bold">Important Note:</strong> {data.behavior.compatibility.notes}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Compatible Species */}
                  {compatibleSpecies.length > 0 && (
                    <div>
                      <SectionHeader title="Suggested Compatible Species" icon={<Fish className="w-5 h-5" />} />
                      <div className="mb-4 bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
                        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-900 leading-relaxed">
                          <strong>Algorithm-based suggestions:</strong> These species match water parameters, size, and temperament. Always verify compatibility based on your specific tank size and setup.
                        </p>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {compatibleSpecies.slice(0, 6).map((species) => (
                          <SpeciesCard key={species.id} species={species} />
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* ADVANCED TAB */}
              {activeTab === 'advanced' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  {/* Scientific Context */}
                  {data.scientificContext && (
                    <div>
                      <SectionHeader title="Scientific Background" icon={<Microscope className="w-5 h-5" />} />
                      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
                        <div>
                          <h5 className="font-bold text-slate-900 mb-2">Wild Habitat</h5>
                          <p className="text-slate-700">{data.scientificContext.wildHabitat}</p>
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 mb-2">Sexual Dimorphism</h5>
                          <p className="text-slate-700">{data.scientificContext.sexualDimorphism}</p>
                        </div>
                        {data.scientificContext.variants && data.scientificContext.variants.length > 0 && (
                          <div>
                            <h5 className="font-bold text-slate-900 mb-3">Known Variants</h5>
                            <div className="flex flex-wrap gap-2">
                              {data.scientificContext.variants.map((v: string) => (
                                <span key={v} className="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-lg text-sm border border-indigo-200 font-semibold">{v}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Breeding */}
                  {data.breeding && (
                    <div>
                      <SectionHeader title="Breeding Guide" icon={<Egg className="w-5 h-5" />} />
                      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge text={data.breeding.difficulty} color={data.breeding.difficulty} size="md" />
                          <span className="text-sm text-slate-600 capitalize">{data.breeding.method.replace(/_/g, ' ')}</span>
                        </div>
                        
                        <div className="space-y-4">
                          {data.breeding.trigger && (
                            <div>
                              <h5 className="font-bold text-slate-900 mb-2">Breeding Trigger</h5>
                              <p className="text-slate-700">{data.breeding.trigger}</p>
                            </div>
                          )}
                          {data.breeding.fryCare && (
                            <div>
                              <h5 className="font-bold text-slate-900 mb-2">Fry Care</h5>
                              <p className="text-slate-700">{data.breeding.fryCare}</p>
                            </div>
                          )}
                          {data.breeding.notes && (
                            <p className="text-sm text-slate-600 italic bg-white p-4 rounded-lg border border-slate-200">{data.breeding.notes}</p>
                          )}
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

      {/* HIDDEN: Tank Simulator */}
      {false && (
        <div className="hidden">
          <TankSimulator 
            fishLengthCM={data.visuals.adultSizeCM} 
            fishShape={data.visuals.iconShape} 
            minGroupSize={data.behavior.minGroupSize}
            minTankSizeLiters={data.environment.minTankSizeLiters}
          />
        </div>
      )}
    </div>
  );
};

// ==================== NEW COMPONENTS ====================

const QuickStat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
    <div className="flex items-center gap-2 mb-1">
      {icon}
      <span className="text-xs text-slate-300 font-semibold">{label}</span>
    </div>
    <div className="text-lg font-bold">{value}</div>
  </div>
);

const SectionHeader = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
    <div className="text-indigo-600">{icon}</div>
    {title}
  </h3>
);

const ParameterCard = ({ icon, label, value, gradient }: { icon: React.ReactNode; label: string; value: string; gradient: string }) => (
  <div className={`bg-gradient-to-br ${gradient} rounded-xl p-5 border border-slate-200`}>
    <div className="flex items-center gap-3 mb-2">
      {icon}
      <span className="text-sm font-bold text-slate-700 uppercase">{label}</span>
    </div>
    <div className="text-2xl font-bold text-slate-900">{value}</div>
  </div>
);

const StatBar = ({ label, value, color }: { label: string; value: string; color: string }) => {
  const steps = value === 'low' || value === 'beginner' ? 1 : value === 'medium' || value === 'intermediate' ? 2 : 3;
  const colors = {
    indigo: 'bg-indigo-500',
    blue: 'bg-blue-500',
    emerald: 'bg-emerald-500'
  }[color];
  
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-slate-600 font-semibold">{label}</span>
        <span className="text-xs font-bold text-slate-900 uppercase">{value}</span>
      </div>
      <div className="flex gap-1.5">
        {[1, 2, 3].map(i => (
          <div key={i} className={`h-2 flex-1 rounded-full ${i <= steps ? colors : 'bg-slate-200'}`} />
        ))}
      </div>
    </div>
  );
};

const InfoBox = ({ icon, label, value, gradient }: { icon: React.ReactNode; label: string; value: string; gradient: string }) => (
  <div className={`bg-gradient-to-br ${gradient} rounded-xl p-4 border border-amber-200`}>
    <div className="flex items-center gap-2 mb-2">
      {icon}
      <span className="text-xs font-bold text-slate-700 uppercase">{label}</span>
    </div>
    <div className="text-lg font-bold text-slate-900 capitalize">{value}</div>
  </div>
);

const FoodChip = ({ text, primary }: { text: string; primary: boolean }) => (
  <span className={`text-sm px-3 py-1.5 rounded-lg font-semibold capitalize ${
    primary 
      ? 'bg-white text-amber-900 border-2 border-amber-300' 
      : 'bg-amber-100 text-amber-800 border border-amber-200'
  }`}>
    {text.replace('-', ' ')}
  </span>
);

const EquipmentCard = ({ icon, title, description, gradient, borderColor }: { icon: React.ReactNode; title: string; description: string; gradient: string; borderColor: string }) => (
  <div className={`bg-gradient-to-br ${gradient} rounded-xl p-5 border-2 ${borderColor} flex gap-4`}>
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h5 className="font-bold text-slate-900 mb-1">{title}</h5>
      <p className="text-sm text-slate-700">{description}</p>
    </div>
  </div>
);

const MistakeCard = ({ issue, cause, frequency }: { issue: string; cause: string; frequency: number }) => (
  <div className="bg-red-50 rounded-xl p-4 border border-red-200">
    <div className="flex items-center justify-between mb-2">
      <h5 className="font-bold text-red-900 capitalize">{issue.replace(/-/g, ' ')}</h5>
      <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-1 rounded">{Math.round(frequency * 100)}% affected</span>
    </div>
    <p className="text-sm text-red-800">
      <strong>Cause:</strong> {cause.replace(/-/g, ' ')}
    </p>
  </div>
);

const TipsCard = ({ title, icon, items, variant }: { title: string; icon: React.ReactNode; items: string[]; variant: 'success' | 'danger' }) => (
  <div className={`bg-gradient-to-br ${
    variant === 'success' ? 'from-amber-50 to-orange-50 border-amber-200' : 'from-rose-50 to-red-50 border-rose-200'
  } rounded-xl p-5 border`}>
    <h4 className={`text-sm font-bold mb-3 flex items-center gap-2 ${
      variant === 'success' ? 'text-amber-900' : 'text-rose-900'
    }`}>
      {icon} {title}
    </h4>
    <ul className="space-y-2">
      {items.map((item: string, i: number) => (
        <li key={i} className={`flex gap-2 text-sm ${
          variant === 'success' ? 'text-amber-900' : 'text-rose-900'
        }`}>
          <span className={`w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0 ${
            variant === 'success' ? 'bg-amber-500' : 'bg-rose-500'
          }`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SetupCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200 flex gap-3">
    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
    <div>
      <h5 className="font-bold text-slate-900 mb-1">{title}</h5>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  </div>
);

const CompatibilityRuleCard = ({ rule }: { rule: any }) => (
  <div className={`flex gap-3 p-4 rounded-xl border-2 ${
    rule.severity === 'critical' ? 'bg-red-50 border-red-300' :
    rule.severity === 'high' ? 'bg-orange-50 border-orange-300' :
    rule.severity === 'medium' ? 'bg-amber-50 border-amber-300' :
    'bg-blue-50 border-blue-300'
  }`}>
    <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
      rule.severity === 'critical' ? 'text-red-600' :
      rule.severity === 'high' ? 'text-orange-600' :
      rule.severity === 'medium' ? 'text-amber-600' :
      'text-blue-600'
    }`} />
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <span className={`font-bold uppercase text-xs tracking-wider ${
          rule.severity === 'critical' ? 'text-red-700' :
          rule.severity === 'high' ? 'text-orange-700' :
          rule.severity === 'medium' ? 'text-amber-700' :
          'text-blue-700'
        }`}>{rule.type}</span>
        {rule.target && <span className="text-xs text-slate-600">• {rule.target}</span>}
        {rule.condition && <span className="text-xs text-slate-600">• {rule.condition}</span>}
      </div>
      <p className={`text-sm ${
        rule.severity === 'critical' ? 'text-red-900' :
        rule.severity === 'high' ? 'text-orange-900' :
        rule.severity === 'medium' ? 'text-amber-900' :
        'text-blue-900'
      }`}>{rule.reason}</p>
    </div>
  </div>
);

const SpeciesCard = ({ species }: { species: Species }) => (
  <Link to={`/species/${species.slug}`} className="group bg-slate-50 hover:bg-indigo-50 rounded-xl p-4 border border-slate-200 hover:border-indigo-300 transition-all">
    <h5 className="font-bold text-slate-900 group-hover:text-indigo-700 mb-1">{species.taxonomy.commonName}</h5>
    <p className="text-xs text-slate-500 italic mb-2">{species.taxonomy.scientificName}</p>
    <div className="flex items-center gap-2 text-xs text-slate-600">
      <span>{species.visuals.adultSizeCM}cm</span>
      <span>•</span>
      <span>{species.environment.minTankSizeLiters}L</span>
    </div>
  </Link>
);

// ==================== EXISTING COMPONENTS ====================

const AggressionBar = ({ label, level }: { label: string; level: number }) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-slate-700 font-semibold">{label}</span>
      <span className="text-sm font-bold text-slate-900">{level}/10</span>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-3">
      <div 
        className={`h-3 rounded-full transition-all ${
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

const TabButton = ({ active, onClick, icon, children }: { active: boolean; onClick: () => void; icon: React.ReactNode; children: React.ReactNode }) => (
  <button onClick={onClick} className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold transition-all whitespace-nowrap ${
    active 
      ? 'bg-white text-indigo-700 border-b-2 border-indigo-600' 
      : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-b-2 border-transparent'
  }`}>
    {icon}
    {children}
  </button>
);

const BarIndicator = ({ level, color }: { level: string; color: 'indigo' | 'emerald' }) => {
  const steps = level === 'low' || level === 'sparse' ? 1 : level === 'medium' ? 2 : 3;
  const colorClasses = {
    indigo: { active: 'bg-indigo-500', inactive: 'bg-slate-200' },
    emerald: { active: 'bg-emerald-500', inactive: 'bg-slate-200' },
  }[color];
  
  return (
    <div className="flex gap-1.5 flex-1 max-w-[120px]">
      {[1, 2, 3].map(i => (
        <div key={i} className={`h-2 flex-1 rounded-full ${i <= steps ? colorClasses.active : colorClasses.inactive}`} />
      ))}
    </div>
  );
};

const TagBadge = ({ tag }: { tag: string }) => (
  <div className="group relative">
    <span className="cursor-help inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-semibold bg-slate-100 text-slate-700 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors">
      {tag === 'jumper' && <AlertTriangle className="w-3.5 h-3.5 mr-1.5 text-amber-500" />}
      {capitalize(tag.replace(/_/g, ' '))}
    </span>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-slate-900 text-white text-xs p-3 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-xl">
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

// ==================== HELPERS ====================

const getTankSetupRecommendations = (species: Species) => {
  const items = [];
  items.push({ title: `${species.environment.minTankSizeLiters}L+ Tank`, description: `Minimum ${species.environment.minTankSizeLiters}L for ${species.behavior.minGroupSize} fish` });
  if (species.habitat.planting === 'dense') items.push({ title: 'Dense Plants', description: 'Heavy planting provides security and reduces stress' });
  else if (species.habitat.planting === 'medium') items.push({ title: 'Moderate Plants', description: 'Balance plants with open swimming space' });
  if (species.environment.substrate) items.push({ title: `${capitalize(species.environment.substrate)} Substrate`, description: 'Recommended substrate type for this species' });
  if (species.environment.flow === 'low') items.push({ title: 'Gentle Flow', description: 'Use low current filtration (sponge filter ideal)' });
  if (species.behavior.tags.includes('jumper')) items.push({ title: 'Secure Lid', description: 'Tight-fitting lid mandatory to prevent jumping' });
  if (species.habitat.hardscape.includes('Caves')) items.push({ title: 'Hiding Spots', description: 'Provide caves and shelters for security' });
  return items;
};

const findCompatibleSpecies = (currentSpecies: Species): Species[] => {
  type ScoredSpecies = { species: Species; score: number };
  
  const candidates: ScoredSpecies[] = allSpecies
    .filter(s => s.id !== currentSpecies.id)
    .map(s => ({ species: s, score: calculateCompatibilityScore(currentSpecies, s) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);
  
  return candidates.slice(0, 12).map(c => c.species);
};

const calculateCompatibilityScore = (current: Species, candidate: Species): number => {
  let score = 0;
  
  if (current.environment.type !== candidate.environment.type) return 0;
  
  const tempOverlap = candidate.environment.tempC.min <= current.environment.tempC.max && 
                      candidate.environment.tempC.max >= current.environment.tempC.min;
  if (!tempOverlap) return 0;
  
  const phOverlap = candidate.environment.ph.min <= current.environment.ph.max && 
                    candidate.environment.ph.max >= current.environment.ph.min;
  if (!phOverlap) return 0;
  
  const sizeRatio = Math.max(current.visuals.adultSizeCM, candidate.visuals.adultSizeCM) / 
                    Math.min(current.visuals.adultSizeCM, candidate.visuals.adultSizeCM);
  if (sizeRatio > 3) return 0;
  
  const currentIsPredator = current.behavior.tags.includes('predator');
  const candidateIsPredator = candidate.behavior.tags.includes('predator');
  
  if (currentIsPredator && candidate.visuals.adultSizeCM < 10) return 0;
  if (candidateIsPredator && current.visuals.adultSizeCM < 10) return 0;
  
  const tankSizeRatio = candidate.environment.minTankSizeLiters / current.environment.minTankSizeLiters;
  if (tankSizeRatio > 5) return 0;
  
  const currentIsAggressive = current.behavior.tags.includes('territorial') || current.behavior.tags.includes('semi-aggressive');
  const candidateIsAggressive = candidate.behavior.tags.includes('territorial') || candidate.behavior.tags.includes('semi-aggressive');
  const currentIsPeaceful = current.behavior.tags.includes('peaceful');
  const candidateIsPeaceful = candidate.behavior.tags.includes('peaceful');
  
  if (currentIsAggressive && candidateIsPeaceful) return 0;
  if (candidateIsAggressive && currentIsPeaceful) return 0;
  
  score = 50;
  
  if (currentIsPeaceful && candidateIsPeaceful) score += 30;
  
  const sizeDiff = Math.abs(current.visuals.adultSizeCM - candidate.visuals.adultSizeCM);
  if (sizeDiff <= 2) score += 20;
  else if (sizeDiff <= 4) score += 10;
  
  const tankDiff = Math.abs(current.environment.minTankSizeLiters - candidate.environment.minTankSizeLiters);
  if (tankDiff <= 20) score += 15;
  else if (tankDiff <= 50) score += 5;
  
  const currentIsBottom = current.behavior.tags.includes('bottom_dweller');
  const candidateIsBottom = candidate.behavior.tags.includes('bottom_dweller');
  const currentIsSurface = current.behavior.tags.includes('surface_dweller') || current.behavior.tags.includes('surface');
  const candidateIsSurface = candidate.behavior.tags.includes('surface_dweller') || candidate.behavior.tags.includes('surface');
  
  if ((currentIsBottom && candidateIsSurface) || (currentIsSurface && candidateIsBottom)) {
    score += 15;
  } else if (currentIsBottom !== candidateIsBottom || currentIsSurface !== candidateIsSurface) {
    score += 8;
  }
  
  const tempMidCurrent = (current.environment.tempC.min + current.environment.tempC.max) / 2;
  const tempMidCandidate = (candidate.environment.tempC.min + candidate.environment.tempC.max) / 2;
  if (Math.abs(tempMidCurrent - tempMidCandidate) <= 2) score += 10;
  
  const phMidCurrent = (current.environment.ph.min + current.environment.ph.max) / 2;
  const phMidCandidate = (candidate.environment.ph.min + candidate.environment.ph.max) / 2;
  if (Math.abs(phMidCurrent - phMidCandidate) <= 0.5) score += 10;
  
  if (current.behavior.minGroupSize >= 6 && candidate.behavior.minGroupSize >= 6) score += 10;
  
  const currentIsActive = current.behavior.tags.includes('active');
  const candidateIsActive = candidate.behavior.tags.includes('active');
  if (currentIsActive === candidateIsActive) score += 5;
  
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

const capitalize = (s?: string) => s ? s[0].toUpperCase() + s.slice(1) : (s || '');

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