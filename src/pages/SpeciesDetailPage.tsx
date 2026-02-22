import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft, Thermometer, Droplets, Fish, Ruler, Users,
  MapPin, AlertTriangle, Activity, Heart, Sprout, 
  Mountain, Box, Sparkles, Microscope, Egg, Utensils,
  Lightbulb, XCircle, CheckCircle, Info, Clock, 
  Calendar, DollarSign, TrendingUp, Target,
  Wind, Wrench, CircleDot, Beaker, Pill, Apple
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { allSpecies } from '../data/species';
import { tagDescriptions } from '../data/glossary';
import { Species } from '../types/species';
import { SEOHead } from '../components/seo/SEOHead';
import { ParameterScale } from '../components/ui/ParameterScale';
import { DiseaseList } from '../components/species/DiseaseList';
import { ImageAttribution } from '../components/ui/ImageAttribution';

// NEW: Import advanced visualization components
import { SwimmingZoneVisualizer } from '../components/species/SwimmingZoneVisualizer';
import { ActivityPatternTimeline } from '../components/species/ActivityPatternTimeline';
import { SocialStructureCard } from '../components/species/SocialStructureCard';
import { SpaceNeedsIndicator } from '../components/species/SpaceNeedsIndicator';
import { FinNippingWarning } from '../components/species/FinNippingWarning';

const SpeciesDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = allSpecies.find(s => s.slug === slug);
  const [activeTab, setActiveTab] = useState<'overview' | 'care' | 'habitat' | 'compatibility' | 'advanced'>('overview');

  if (!data) return <NotFound />;

  const seoTitle = `${data.taxonomy.commonName} Care Guide`;
  const seoDesc = `Complete care guide for ${data.taxonomy.commonName}. Habitat, tank mates, breeding, and scientific background.`;
  const headerImageUrl = resolveHeaderImageUrl(data.imageUrl, data.slug);

  // ==================== HELPERS ====================
  
  const capitalize = (s?: string) => s ? s[0].toUpperCase() + s.slice(1) : '';

  const getFeedingAdvice = (): string[] => {
    const advice: string[] = [];
    const { diet } = data.care;
    const { tags } = data.behavior;
    const size = data.visuals.adultSizeCM;
    const shape = data.visuals.iconShape;

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

  const getTankSetupRecommendations = () => {
    const items = [];
    items.push({ title: `${data.environment.minTankSizeLiters}L+ Tank`, description: `Minimum ${data.environment.minTankSizeLiters}L for ${data.behavior.minGroupSize} fish` });
    if (data.habitat.planting === 'dense') items.push({ title: 'Dense Plants', description: 'Heavy planting provides security and reduces stress' });
    else if (data.habitat.planting === 'medium') items.push({ title: 'Moderate Plants', description: 'Balance plants with open swimming space' });
    if (data.environment.substrate) items.push({ title: `${capitalize(data.environment.substrate)} Substrate`, description: 'Recommended substrate type for this species' });
    if (data.environment.flow === 'low') items.push({ title: 'Gentle Flow', description: 'Use low current filtration (sponge filter ideal)' });
    if (data.behavior.tags.includes('jumper')) items.push({ title: 'Secure Lid', description: 'Tight-fitting lid mandatory to prevent jumping' });
    if (data.habitat.hardscape.includes('Caves')) items.push({ title: 'Hiding Spots', description: 'Provide caves and shelters for security' });
    return items;
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

  const findCompatibleSpecies = (): Species[] => {
    type ScoredSpecies = { species: Species; score: number };
    
    const candidates: ScoredSpecies[] = allSpecies
      .filter(s => s.id !== data.id)
      .map(s => ({ species: s, score: calculateCompatibilityScore(data, s) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score);
    
    return candidates.slice(0, 12).map(c => c.species);
  };

  const compatibleSpecies = findCompatibleSpecies();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <SEOHead title={seoTitle} description={seoDesc} />

      {/* HERO SECTION */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={headerImageUrl} 
            alt={data.taxonomy.commonName} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-cyan-900/30" />
        </div>
        
        <ImageAttribution credit={data.imageCredit} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <Link 
            to="/species" 
            className="inline-flex items-center gap-2 text-slate-200 hover:text-white mb-6 md:mb-8 transition-colors text-sm font-bold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20 hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Database
          </Link>
          
          <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
            <div className="lg:col-span-3 space-y-5 md:space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge text={data.environment.type} color="brand" size="md" />
                <Badge text={data.care.difficulty} color={data.care.difficulty} size="md" />
              </div>
              
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 leading-tight">
                  {data.taxonomy.commonName}
                </h1>
                <p className="text-lg md:text-xl text-slate-300 italic font-medium">
                  {data.taxonomy.scientificName}
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
                <QuickStat icon={<Ruler className="w-4 h-4" />} label="Size" value={`${data.visuals.adultSizeCM}cm`} />
                <QuickStat icon={<Box className="w-4 h-4" />} label="Tank" value={`${data.environment.minTankSizeLiters}L`} />
                <QuickStat icon={<Users className="w-4 h-4" />} label="Group" value={`${data.behavior.minGroupSize}+`} />
                <QuickStat icon={<Heart className="w-4 h-4" />} label="Life expectancy" value={`${data.health.lifespanYears}y`} />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 md:p-6 border-2 border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-5 pb-5 border-b border-white/20">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs uppercase font-black text-slate-300 tracking-wider mb-1">Origin</div>
                    <div className="text-base md:text-lg font-bold text-white">{data.taxonomy.origin}</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <InfoRow icon={<Activity className="w-4 h-4 text-emerald-400" />} label="Difficulty" value={capitalize(data.care.difficulty)} />
                  <InfoRow icon={<Heart className="w-4 h-4 text-rose-400" />} label="Temperament" value={data.behavior.tags.includes('peaceful') ? 'Peaceful' : data.behavior.tags.includes('semi-aggressive') ? 'Semi-Aggressive' : 'Varies'} />
                  <InfoRow icon={<Utensils className="w-4 h-4 text-amber-400" />} label="Diet" value={capitalize(data.care.diet)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MAIN CONTENT */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Fun Fact */}
        {data.funFact && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 md:mb-8"
          >
            <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-5 md:p-6 overflow-hidden shadow-xl">
              <Sparkles className="absolute top-3 right-3 w-16 h-16 md:w-24 md:h-24 text-white/10" />
              <div className="relative">
                <div className="text-indigo-200 font-black uppercase text-[10px] md:text-xs tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Did You Know?
                </div>
                <p className="text-white text-base md:text-lg leading-relaxed font-medium">
                  "{data.funFact}"
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Fin Nipping Warning */}
        {data.behavior.finNipping && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 md:mb-8"
          >
            <FinNippingWarning finNipping={data.behavior.finNipping} />
          </motion.div>
        )}

        {/* Key Warnings */}
        {(data.behavior.tags.includes('jumper') || (data.experienceData?.commonFailures && data.experienceData.commonFailures.length > 0)) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 md:mb-8"
          >
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {data.behavior.tags.includes('jumper') && (
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-300 dark:border-amber-700 p-4 md:p-5 rounded-xl shadow-lg">
                  <div className="flex gap-3 items-start">
                    <div className="p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="font-black text-amber-900 dark:text-amber-200 text-sm md:text-base mb-1">Jump Risk!</p>
                      <p className="text-xs md:text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                        Secure lid required - known to jump out of open tanks
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {data.experienceData?.commonFailures && data.experienceData.commonFailures.length > 0 && (
                <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border-2 border-red-300 dark:border-red-700 p-4 md:p-5 rounded-xl shadow-lg">
                  <div className="flex gap-3 items-start">
                    <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-lg flex-shrink-0">
                      <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <p className="font-black text-red-900 dark:text-red-200 text-sm md:text-base mb-1">Common Mistake</p>
                      <p className="text-xs md:text-sm text-red-800 dark:text-red-300 leading-relaxed">
                        {data.experienceData.commonFailures[0].issue.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} 
                        <span className="inline-block ml-1 px-2 py-0.5 bg-red-200 dark:bg-red-900 text-red-900 dark:text-red-200 rounded text-[10px] font-bold">
                          {Math.round(data.experienceData.commonFailures[0].frequency * 100)}% affected
                        </span>
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
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="flex border-b-2 border-slate-200 dark:border-slate-700 overflow-x-auto scrollbar-hide">
              <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} icon={<Target className="w-4 h-4" />}>
                Overview
              </TabButton>
              <TabButton active={activeTab === 'care'} onClick={() => setActiveTab('care')} icon={<Heart className="w-4 h-4" />}>
                Care
              </TabButton>
              <TabButton active={activeTab === 'habitat'} onClick={() => setActiveTab('habitat')} icon={<Mountain className="w-4 h-4" />}>
                Habitat
              </TabButton>
              <TabButton active={activeTab === 'compatibility'} onClick={() => setActiveTab('compatibility')} icon={<Fish className="w-4 h-4" />}>
                Mates
              </TabButton>
              <TabButton active={activeTab === 'advanced'} onClick={() => setActiveTab('advanced')} icon={<Microscope className="w-4 h-4" />}>
                Advanced
              </TabButton>
            </div>

            {/* Tab Content */}
            <div className="p-4 md:p-6 lg:p-8">
              {/* OVERVIEW TAB */}
              {activeTab === 'overview' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 md:space-y-8">
                  {/* Parameters Grid */}
                  <div>
                    <SectionHeader title="Water Parameters" icon={<Droplets className="w-5 h-5" />} />
                    <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                      <ParameterCard 
                        icon={<Thermometer className="w-5 h-5 text-rose-500" />}
                        label="Temperature"
                        value={`${data.environment.tempC.min}-${data.environment.tempC.max}°C`}
                      />
                      <ParameterCard 
                        icon={<Droplets className="w-5 h-5 text-cyan-500" />}
                        label="pH Level"
                        value={`${data.environment.ph.min}-${data.environment.ph.max}`}

                      />
                      <ParameterCard 
                        icon={<Activity className="w-5 h-5 text-blue-500" />}
                        label="Water Flow"
                        value={capitalize(data.environment.flow)}
                      />
                      <ParameterCard 
                        icon={<Box className="w-5 h-5 text-amber-500" />}
                        label="Substrate"
                        value={capitalize(data.environment.substrate || 'Any')}
                      />
                    </div>
                  </div>

                  {/* Swimming Zone & Activity Pattern */}
                  {(data.environment.swimmingZone || data.behavior.activity) && (
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      {data.environment.swimmingZone && <SwimmingZoneVisualizer swimmingZone={data.environment.swimmingZone} />}
                      {data.behavior.activity && <ActivityPatternTimeline activity={data.behavior.activity} />}
                    </div>
                  )}

                  {/* Social Structure & Space Needs */}
                  {(data.behavior.socialStructure || data.environment.spaceNeeds) && (
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      {data.behavior.socialStructure && (
                        <SocialStructureCard 
                          socialStructure={data.behavior.socialStructure} 
                          minGroupSize={data.behavior.minGroupSize} 
                        />
                      )}
                      {data.environment.spaceNeeds && (
                        <SpaceNeedsIndicator 
                          spaceNeeds={data.environment.spaceNeeds} 
                          tankSize={data.environment.minTankSizeLiters} 
                        />
                      )}
                    </div>
                  )}

                  {/* Behavior Overview */}
                  <div>
                    <SectionHeader title="Behavior & Temperament" icon={<Activity className="w-5 h-5" />} />
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-900/50 dark:to-blue-950/20 rounded-xl p-5 md:p-6 border-2 border-slate-200 dark:border-slate-700">
                      <p className="text-slate-700 dark:text-slate-300 mb-4 md:mb-5 leading-relaxed text-sm md:text-base">
                        {data.behavior.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {data.behavior.tags.map((tag: string) => (
                          <TagBadge key={tag} tag={tag} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats & Costs */}
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-xl p-5 md:p-6 border-2 border-indigo-200 dark:border-indigo-800 shadow-lg">
                      <h4 className="text-xs md:text-sm font-black text-indigo-900 dark:text-indigo-300 uppercase mb-4 md:mb-5 flex items-center gap-2 tracking-wider">
                        <TrendingUp className="w-4 h-4" /> Ownership Stats
                      </h4>
                      <div className="space-y-4">
                        <StatBar label="Difficulty" value={data.care.difficulty} color="indigo" />
                        <StatBar label="Maintenance" value={data.care.effort} color="blue" />
                        <StatBar label="Cost" value={data.care.cost} color="emerald" />
                      </div>
                    </div>

                    {data.experienceData?.estimatedCosts && (
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl p-5 md:p-6 border-2 border-emerald-200 dark:border-emerald-800 shadow-lg">
                        <h4 className="text-xs md:text-sm font-black text-emerald-900 dark:text-emerald-300 uppercase mb-4 md:mb-5 flex items-center gap-2 tracking-wider">
                          <DollarSign className="w-4 h-4" /> Est. Costs
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <div className="text-[10px] md:text-xs text-emerald-700 dark:text-emerald-400 font-bold mb-2 uppercase tracking-wide">Initial Setup</div>
                            <div className="text-2xl md:text-3xl font-black text-emerald-900 dark:text-emerald-200">
                              {data.experienceData.estimatedCosts.initial.min}-{data.experienceData.estimatedCosts.initial.max}
                              <span className="text-sm md:text-base ml-1 font-bold">{data.experienceData.estimatedCosts.initial.currency}</span>
                            </div>
                          </div>
                          <div>
                            <div className="text-[10px] md:text-xs text-emerald-700 dark:text-emerald-400 font-bold mb-2 uppercase tracking-wide">Monthly</div>
                            <div className="text-2xl md:text-3xl font-black text-emerald-900 dark:text-emerald-200">
                              {data.experienceData.estimatedCosts.monthly.min}-{data.experienceData.estimatedCosts.monthly.max}
                              <span className="text-sm md:text-base ml-1 font-bold">{data.experienceData.estimatedCosts.monthly.currency}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* CARE TAB */}
              {activeTab === 'care' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 md:space-y-8">
                  {/* Care Level Overview */}
                  <div className="grid sm:grid-cols-3 gap-3 md:gap-4">
                    <CareLevelCard 
                      label="Difficulty" 
                      value={data.care.difficulty}
                      icon={<Target className="w-5 h-5" />}
                      colors={{
                        easy: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-700 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800' },
                        medium: { bg: 'bg-amber-50 dark:bg-amber-950/30', text: 'text-amber-700 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-800' },
                        hard: { bg: 'bg-rose-50 dark:bg-rose-950/30', text: 'text-rose-700 dark:text-rose-400', border: 'border-rose-200 dark:border-rose-800' },
                        expert: { bg: 'bg-purple-50 dark:bg-purple-950/30', text: 'text-purple-700 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800' }
                      }}
                    />
                    <CareLevelCard 
                      label="Time Effort" 
                      value={data.care.effort}
                      icon={<Clock className="w-5 h-5" />}
                      colors={{
                        low: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-700 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800' },
                        medium: { bg: 'bg-amber-50 dark:bg-amber-950/30', text: 'text-amber-700 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-800' },
                        high: { bg: 'bg-rose-50 dark:bg-rose-950/30', text: 'text-rose-700 dark:text-rose-400', border: 'border-rose-200 dark:border-rose-800' }
                      }}
                    />
                    <CareLevelCard 
                      label="Cost" 
                      value={data.care.cost}
                      icon={<DollarSign className="w-5 h-5" />}
                      colors={{
                        low: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-700 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800' },
                        medium: { bg: 'bg-amber-50 dark:bg-amber-950/30', text: 'text-amber-700 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-800' },
                        high: { bg: 'bg-rose-50 dark:bg-rose-950/30', text: 'text-rose-700 dark:text-rose-400', border: 'border-rose-200 dark:border-rose-800' }
                      }}
                    />
                  </div>

                  {/* Feeding Guide */}
                  <div>
                    <SectionHeader title="Feeding Guide" icon={<Utensils className="w-5 h-5" />} />
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl p-5 md:p-6 border-2 border-emerald-200 dark:border-emerald-800 shadow-lg space-y-5">
                      
                      {/* Diet Type Badge */}
                      <div className="flex items-center gap-3 pb-4 border-b-2 border-emerald-200 dark:border-emerald-800">
                        <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl">
                          <Utensils className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-[10px] md:text-xs font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-wider mb-1">
                            Diet Type
                          </div>
                          <div className="text-xl md:text-2xl font-black text-emerald-900 dark:text-emerald-300 capitalize">
                            {data.care.diet}
                          </div>
                        </div>
                      </div>

                      {/* Feeding Schedule */}
                      {data.care.feeding && (
                        <>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border-2 border-emerald-200 dark:border-emerald-800">
                              <div className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                                Frequency
                              </div>
                              <div className="text-lg md:text-xl font-black text-slate-900 dark:text-white capitalize">
                                {data.care.feeding.frequency.replace(/-/g, ' ')}
                              </div>
                            </div>
                            
                            {data.care.feeding.fastingDay && data.care.feeding.fastingDay !== 'none' && (
                              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border-2 border-amber-200 dark:border-amber-800">
                                <div className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                                  Fasting Day
                                </div>
                                <div className="text-lg md:text-xl font-black text-amber-900 dark:text-amber-300 capitalize">
                                  {data.care.feeding.fastingDay}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Food Types */}
                          <div>
                            <h4 className="text-sm font-black text-emerald-900 dark:text-emerald-300 mb-3 flex items-center gap-2">
                              <Apple className="w-4 h-4" />
                              Primary Foods
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {data.care.feeding.primaryFoods.map((food) => (
                                <span 
                                  key={food}
                                  className="px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border-2 border-emerald-300 dark:border-emerald-700 capitalize"
                                >
                                  {food.replace(/-/g, ' ')}
                                </span>
                              ))}
                            </div>
                          </div>

                          {data.care.feeding.supplements && data.care.feeding.supplements.length > 0 && (
                            <div>
                              <h4 className="text-sm font-black text-emerald-900 dark:text-emerald-300 mb-3 flex items-center gap-2">
                                <Pill className="w-4 h-4" />
                                Supplements
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {data.care.feeding.supplements.map((supplement) => (
                                  <span 
                                    key={supplement}
                                    className="px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 border-2 border-teal-300 dark:border-teal-700 capitalize"
                                  >
                                    {supplement.replace(/-/g, ' ')}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Live Food Requirement */}
                          {data.care.feeding.liveFood && (
                            <div className={`p-4 rounded-xl border-2 ${
                              data.care.feeding.liveFood.required 
                                ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800' 
                                : 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800'
                            }`}>
                              <div className="flex items-center gap-2 text-sm font-bold">
                                {data.care.feeding.liveFood.required ? (
                                  <>
                                    <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                                    <span className="text-rose-800 dark:text-rose-300">
                                      Live food required
                                    </span>
                                  </>
                                ) : data.care.feeding.liveFood.recommended ? (
                                  <>
                                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    <span className="text-blue-800 dark:text-blue-300">
                                      Live food recommended for optimal health
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                    <span className="text-emerald-800 dark:text-emerald-300">
                                      Live food optional
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      {/* Fallback to generated advice */}
                      {!data.care.feeding && (
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border-2 border-emerald-200 dark:border-emerald-800">
                          <ul className="space-y-3">
                            {getFeedingAdvice().map((tip, i) => (
                              <li key={i} className="flex gap-3 text-sm md:text-base text-slate-700 dark:text-slate-300">
                                <span className="text-emerald-500 dark:text-emerald-400 font-black text-lg">•</span>
                                <span className="leading-relaxed">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Maintenance Schedule */}
                  {data.care.maintenance && (
                    <div>
                      <SectionHeader title="Maintenance Schedule" icon={<Calendar className="w-5 h-5" />} />
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl p-5 md:p-6 border-2 border-blue-200 dark:border-blue-800 shadow-lg space-y-4">
                        
                        {/* Water Changes */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 md:p-5 border-2 border-blue-200 dark:border-blue-800">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                              <Droplets className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                Water Changes
                              </div>
                              <div className="text-lg md:text-xl font-black text-blue-900 dark:text-blue-300">
                                {data.care.maintenance.waterChangePercentage}% {data.care.maintenance.waterChangeFrequency}
                              </div>
                            </div>
                          </div>
                          {data.care.maintenance.notes && (
                            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                              {data.care.maintenance.notes}
                            </p>
                          )}
                        </div>

                        {/* Vacuuming */}
                        {data.care.maintenance.vacuumingNeeded && (
                          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border-2 border-amber-200 dark:border-amber-800">
                            <div className="flex items-center gap-2 text-sm font-bold text-amber-800 dark:text-amber-300">
                              <Wind className="w-4 h-4" />
                              <span>Regular substrate vacuuming required</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Equipment Checklist */}
{data.care.equipment && (
  <div>
    <SectionHeader title="Required Equipment" icon={<Wrench className="w-5 h-5" />} />
    <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
      
      {/* Heater */}
      {data.care.equipment.heater && (
        <EquipmentCardNew 
          icon={<Thermometer className="w-5 h-5" />}
          label="Heater"
          required={data.care.equipment.heater.required}
          details={data.care.equipment.heater.watts ? `${data.care.equipment.heater.watts}W recommended` : undefined}
          color="rose"
        />
      )}

      {/* Filter */}
      {data.care.equipment.filter && (
        <EquipmentCardNew 
          icon={<Wind className="w-5 h-5" />}
          label="Filter"
          required={data.care.equipment.filter.required}
          details={data.care.equipment.filter.type ? `${data.care.equipment.filter.type} - ${data.care.equipment.filter.flowRate || 'standard'}` : undefined}
          color="blue"
        />
      )}

      {/* Airstone */}
      {data.care.equipment.airstone !== undefined && (
        <EquipmentCardNew 
          icon={<CircleDot className="w-5 h-5" />}
          label="Airstone"
          required={data.care.equipment.airstone}
          color="cyan"
        />
      )}

      {/* Lighting */}
      {data.care.equipment.lighting && (
        <EquipmentCardNew 
          icon={<Lightbulb className="w-5 h-5" />}
          label="Lighting"
          required={true}
          details={`${data.care.equipment.lighting} intensity`}
          color="amber"
        />
      )}

      {/* CO2 */}
      {data.care.equipment.co2 !== undefined && (
        <EquipmentCardNew 
          icon={<Beaker className="w-5 h-5" />}
          label="CO₂ System"
          required={data.care.equipment.co2}
          color="emerald"
        />
      )}
    </div>
  </div>
)}

                  {/* Special Requirements */}
                  {data.care.specialRequirements && data.care.specialRequirements.length > 0 && (
                    <div>
                      <SectionHeader title="Special Requirements" icon={<AlertTriangle className="w-5 h-5" />} />
                      <div className="space-y-3">
                        {data.care.specialRequirements.map((requirement, index) => (
                          <div 
                            key={index}
                            className="bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950/30 dark:to-orange-950/30 rounded-xl p-4 md:p-5 border-2 border-rose-200 dark:border-rose-800 flex gap-3 shadow-lg"
                          >
                            <div className="p-2 bg-rose-100 dark:bg-rose-900/50 rounded-lg flex-shrink-0">
                              <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                            </div>
                            <p className="text-sm md:text-base text-rose-900 dark:text-rose-300 font-semibold leading-relaxed">
                              {requirement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Aggression Profile */}
                  {data.behavior.aggressionLevel && (
                    <div>
                      <SectionHeader title="Aggression Profile" icon={<AlertTriangle className="w-5 h-5" />} />
                      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 md:p-6 border-2 border-slate-200 dark:border-slate-700 space-y-4 md:space-y-5">
                        <AggressionBar label="Intraspecific (Same Species)" level={data.behavior.aggressionLevel.intraspecific} />
                        <AggressionBar label="Interspecific (Other Species)" level={data.behavior.aggressionLevel.interspecific} />
                        <AggressionBar label="Territorial Behavior" level={data.behavior.aggressionLevel.territorial} />
                      </div>
                    </div>
                  )}

                  {/* Health */}
                  <div>
                    <SectionHeader title="Health & Disease Prevention" icon={<Heart className="w-5 h-5" />} />
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 md:p-6 border-2 border-slate-200 dark:border-slate-700 space-y-5">
                      <div>
                        <h5 className="text-xs md:text-sm font-black text-slate-700 dark:text-slate-300 uppercase mb-3 md:mb-4 tracking-wider">Common Diseases</h5>
                        <DiseaseList diseases={data.health.commonDiseases} />
                      </div>
                      {data.health.sensitivities && data.health.sensitivities.length > 0 && (
                        <div>
                          <h5 className="text-xs md:text-sm font-black text-slate-700 dark:text-slate-300 uppercase mb-3 md:mb-4 tracking-wider">Sensitivities</h5>
                          <div className="flex flex-wrap gap-2">
                            {data.health.sensitivities.map((s: string) => (
                              <span key={s} className="text-xs md:text-sm bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-3 py-2 rounded-lg border-2 border-amber-200 dark:border-amber-800 font-bold">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pro Tips & Common Mistakes */}
                  {(data.care.proTips || data.care.commonMistakes) && (
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      {data.care.proTips && (
                        <TipsCard title="Pro Tips" icon={<Lightbulb className="w-4 h-4" />} items={data.care.proTips} variant="success" />
                      )}
                      {data.care.commonMistakes && (
                        <TipsCard title="Avoid These" icon={<XCircle className="w-4 h-4" />} items={data.care.commonMistakes} variant="danger" />
                      )}
                    </div>
                  )}

                  {/* Common Failures */}
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
                </motion.div>
              )}

              {/* HABITAT TAB */}
              {activeTab === 'habitat' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 md:space-y-8">
                  {/* Water Parameters Detailed */}
                  <div>
                    <SectionHeader title="Water Parameters" icon={<Droplets className="w-5 h-5" />} />
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-900/50 dark:to-blue-950/20 p-5 md:p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-lg space-y-5 md:space-y-6">
                      
                      <div>
                        <ParameterScale 
                          label="Temperature" 
                          unit="°C" 
                          min={15} 
                          max={35} 
                          valueMin={data.environment.tempC.min} 
                          valueMax={data.environment.tempC.max}
                          ideal={data.environment.tempC.ideal}
                          color="rose" 
                        />
                      </div>

                      <div>
                        <ParameterScale 
                          label="pH" 
                          unit="" 
                          min={4.0} 
                          max={9.0} 
                          valueMin={data.environment.ph.min} 
                          valueMax={data.environment.ph.max}
                          ideal={data.environment.ph.ideal}
                          color="cyan" 
                        />
                      </div>

                      {data.environment.gh && (
                        <div>
                          <ParameterScale 
                            label="GH (General Hardness)" 
                            unit="°dH" 
                            min={0} 
                            max={30} 
                            valueMin={data.environment.gh.min} 
                            valueMax={data.environment.gh.max}
                            color="indigo" 
                          />
                        </div>
                      )}

                      {data.environment.kh && (
                        <div>
                          <ParameterScale 
                            label="KH (Carbonate Hardness)" 
                            unit="°dH" 
                            min={0} 
                            max={20} 
                            valueMin={data.environment.kh.min} 
                            valueMax={data.environment.kh.max}
                            color="purple" 
                          />
                        </div>
                      )}

                      {/* Quick Reference Grid */}
                      <div className="pt-4 border-t-2 border-slate-200 dark:border-slate-700">
                        <div className="grid grid-cols-2 gap-3">
                          {data.environment.tempC.ideal && (
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border-2 border-rose-200 dark:border-rose-800">
                              <div className="text-[10px] md:text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                                Ideal Temp
                              </div>
                              <div className="text-base md:text-xl font-black text-rose-600 dark:text-rose-400">
                                {data.environment.tempC.ideal}°C
                              </div>
                            </div>
                          )}

                          {data.environment.ph.ideal && (
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border-2 border-cyan-200 dark:border-cyan-800">
                              <div className="text-[10px] md:text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                                Ideal pH
                              </div>
                              <div className="text-base md:text-xl font-black text-cyan-600 dark:text-cyan-400">
                                {data.environment.ph.ideal}
                              </div>
                            </div>
                          )}

                          {data.environment.flow && (
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border-2 border-blue-200 dark:border-blue-800">
                              <div className="text-[10px] md:text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                                Flow Rate
                              </div>
                              <div className="text-base md:text-xl font-black text-blue-600 dark:text-blue-400 capitalize">
                                {data.environment.flow}
                              </div>
                            </div>
                          )}

                          {data.environment.substrate && (
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border-2 border-amber-200 dark:border-amber-800">
                              <div className="text-[10px] md:text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                                Substrate
                              </div>
                              <div className="text-base md:text-xl font-black text-amber-600 dark:text-amber-400 capitalize">
                                {data.environment.substrate}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tank Setup */}
                  <div>
                    <SectionHeader title="Tank Setup Recommendations" icon={<Mountain className="w-5 h-5" />} />
                    <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                      {getTankSetupRecommendations().map((item, i) => (
                        <SetupCard key={i} title={item.title} description={item.description} />
                      ))}
                    </div>
                  </div>

                  {/* Planting & Hardscape */}
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <SectionHeader title="Planting Density" icon={<Sprout className="w-5 h-5" />} />
                      <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-xl p-5 md:p-6 border-2 border-emerald-200 dark:border-emerald-800">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs md:text-sm font-black text-emerald-900 dark:text-emerald-300 uppercase tracking-wider">{data.habitat.planting}</span>
                          <BarIndicator level={data.habitat.planting} color="emerald" />
                        </div>
                        <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">{data.habitat.plantingNotes}</p>
                      </div>
                    </div>
                    
                    <div>
                      <SectionHeader title="Hardscape Elements" icon={<Mountain className="w-5 h-5" />} />
                      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 md:p-6 border-2 border-slate-200 dark:border-slate-700">
                        <div className="flex flex-wrap gap-2">
                          {data.habitat.hardscape.map((item: string) => (
                            <span key={item} className="text-sm md:text-base bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-2 rounded-lg border-2 border-slate-300 dark:border-slate-600 font-bold">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* COMPATIBILITY TAB */}
              {activeTab === 'compatibility' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 md:space-y-8">
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

                  <div>
                    <SectionHeader title="Tank Mate Guidelines" icon={<Fish className="w-5 h-5" />} />
                    <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                          <h4 className="font-black text-emerald-700 dark:text-emerald-400 text-base md:text-lg">Compatible With</h4>
                        </div>
                        <div className="space-y-2">
                          {data.behavior.compatibility.goodMates.map((m: string) => (
                            <div key={m} className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 px-4 py-3 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 font-bold text-sm md:text-base">
                              {m}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <XCircle className="w-5 h-5 md:w-6 md:h-6 text-rose-500" />
                          <h4 className="font-black text-rose-700 dark:text-rose-400 text-base md:text-lg">Avoid Mixing With</h4>
                        </div>
                        <div className="space-y-2">
                          {data.behavior.compatibility.badMates.map((m: string) => (
                            <div key={m} className="bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300 px-4 py-3 rounded-xl border-2 border-rose-200 dark:border-rose-800 font-bold text-sm md:text-base">
                              {m}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {data.behavior.compatibility.notes && (
                      <div className="mt-4 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-4 md:p-5">
                        <p className="text-sm md:text-base text-blue-900 dark:text-blue-300 leading-relaxed">
                          <strong className="font-black">Important Note:</strong> {data.behavior.compatibility.notes}
                        </p>
                      </div>
                    )}
                  </div>

                  {compatibleSpecies.length > 0 && (
                    <div>
                      <SectionHeader title="Suggested Compatible Species" icon={<Fish className="w-5 h-5" />} />
                      <div className="mb-4 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-4 md:p-5 flex gap-3">
                        <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs md:text-sm text-blue-900 dark:text-blue-300 leading-relaxed">
                          <strong className="font-black">Algorithm-based suggestions:</strong> These species match water parameters, size, and temperament. Always verify compatibility based on your specific tank size and setup.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
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
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 md:space-y-8">
                  {data.scientificContext && (
                    <div>
                      <SectionHeader title="Scientific Background" icon={<Microscope className="w-5 h-5" />} />
                      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 md:p-6 border-2 border-slate-200 dark:border-slate-700 space-y-5">
                        <div>
                          <h5 className="font-black text-slate-900 dark:text-slate-100 mb-2 text-sm md:text-base">Wild Habitat</h5>
                          <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">{data.scientificContext.wildHabitat}</p>
                        </div>
                        <div>
                          <h5 className="font-black text-slate-900 dark:text-slate-100 mb-2 text-sm md:text-base">Sexual Dimorphism</h5>
                          <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">{data.scientificContext.sexualDimorphism}</p>
                        </div>
                        {data.scientificContext.variants && data.scientificContext.variants.length > 0 && (
                          <div>
                            <h5 className="font-black text-slate-900 dark:text-slate-100 mb-3 md:mb-4 text-sm md:text-base">Known Variants</h5>
                            <div className="flex flex-wrap gap-2">
                              {data.scientificContext.variants.map((v: string) => (
                                <span key={v} className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 px-3 py-2 rounded-lg text-sm md:text-base border-2 border-indigo-200 dark:border-indigo-800 font-bold">
                                  {v}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {data.breeding && (
                    <div>
                      <SectionHeader title="Breeding Guide" icon={<Egg className="w-5 h-5" />} />
                      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 md:p-6 border-2 border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-3 mb-5">
                          <Badge text={data.breeding.difficulty} color={data.breeding.difficulty} size="md" />
                          <span className="text-sm md:text-base text-slate-600 dark:text-slate-400 capitalize font-semibold">{data.breeding.method.replace(/_/g, ' ')}</span>
                        </div>
                        
                        <div className="space-y-4">
                          {data.breeding.trigger && (
                            <div>
                              <h5 className="font-black text-slate-900 dark:text-slate-100 mb-2 text-sm md:text-base">Breeding Trigger</h5>
                              <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">{data.breeding.trigger}</p>
                            </div>
                          )}
                          {data.breeding.fryCare && (
                            <div>
                              <h5 className="font-black text-slate-900 dark:text-slate-100 mb-2 text-sm md:text-base">Fry Care</h5>
                              <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">{data.breeding.fryCare}</p>
                            </div>
                          )}
                          {data.breeding.notes && (
                            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 italic bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 leading-relaxed">
                              {data.breeding.notes}
                            </p>
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
    </div>
  );
};

// ==================== HELPER COMPONENTS ====================

const QuickStat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border-2 border-white/20 hover:bg-white/20 transition-all shadow-lg">
    <div className="flex items-center gap-2 mb-1.5">
      <div className="text-cyan-400">{icon}</div>
      <span className="text-[10px] md:text-xs text-slate-300 font-bold uppercase tracking-wide">{label}</span>
    </div>
    <div className="text-lg md:text-xl font-black text-white">{value}</div>
  </div>
);

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-xs md:text-sm text-slate-300 font-semibold">{label}</span>
    </div>
    <span className="text-sm md:text-base text-white font-bold">{value}</span>
  </div>
);

const SectionHeader = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-slate-100 mb-4 md:mb-5 flex items-center gap-2 md:gap-3">
    <div className="text-indigo-600 dark:text-indigo-400">{icon}</div>
    {title}
  </h3>
);

const ParameterCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 md:p-5 border border-slate-200 dark:border-slate-700 shadow-sm">
    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
      <div className="text-slate-600 dark:text-slate-400">{icon}</div>
      <span className="text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">{label}</span>
    </div>
    <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">{value}</div>
  </div>
);

const StatBar = ({ label, value, color }: { label: string; value: string; color: string }) => {
  const steps = value === 'low' || value === 'beginner' ? 1 : value === 'medium' || value === 'intermediate' ? 2 : 3;
  const colors = {
    indigo: 'bg-indigo-600',
    blue: 'bg-blue-600',
    emerald: 'bg-emerald-600'
  }[color];
  
  return (
    <div>
      <div className="flex items-center justify-between mb-2 md:mb-3">
        <span className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-bold">{label}</span>
        <span className="text-xs md:text-sm font-black text-slate-900 dark:text-slate-100 uppercase">{value}</span>
      </div>
      <div className="flex gap-2">
        {[1, 2, 3].map(i => (
          <div key={i} className={`h-2.5 md:h-3 flex-1 rounded-full transition-all ${i <= steps ? colors : 'bg-slate-200 dark:bg-slate-700'}`} />
        ))}
      </div>
    </div>
  );
};

const TipsCard = ({ title, icon, items, variant }: { title: string; icon: React.ReactNode; items: string[]; variant: 'success' | 'danger' }) => (
  <div className={`bg-gradient-to-br ${ 
    variant === 'success' ? 'from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800' : 'from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 border-rose-200 dark:border-rose-800'
  } rounded-xl p-5 md:p-6 border-2 shadow-lg`}>
    <h4 className={`text-xs md:text-sm font-black mb-3 md:mb-4 flex items-center gap-2 uppercase tracking-wider ${ 
      variant === 'success' ? 'text-amber-900 dark:text-amber-300' : 'text-rose-900 dark:text-rose-300'
    }`}>
      {icon} {title}
    </h4>
    <ul className="space-y-3">
      {items.map((item: string, i: number) => (
        <li key={i} className={`flex gap-3 text-xs md:text-sm leading-relaxed ${ 
          variant === 'success' ? 'text-amber-900 dark:text-amber-200' : 'text-rose-900 dark:text-rose-200'
        }`}>
          <span className={`w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0 ${ 
            variant === 'success' ? 'bg-amber-600 dark:bg-amber-500' : 'bg-rose-600 dark:bg-rose-500'
          }`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SetupCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-indigo-50 dark:bg-indigo-950/30 rounded-xl p-4 md:p-5 border-2 border-indigo-200 dark:border-indigo-800 flex gap-3 shadow-lg hover:shadow-xl transition-shadow">
    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex-shrink-0">
      <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
    </div>
    <div>
      <h5 className="font-black text-slate-900 dark:text-slate-100 mb-1 md:mb-2 text-sm md:text-base">{title}</h5>
      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

const CompatibilityRuleCard = ({ rule }: { rule: any }) => (
  <div className={`flex gap-3 p-4 md:p-5 rounded-xl border-2 shadow-lg ${ 
    rule.severity === 'critical' ? 'bg-red-50 dark:bg-red-950/30 border-red-300 dark:border-red-700' :
    rule.severity === 'high' ? 'bg-orange-50 dark:bg-orange-950/30 border-orange-300 dark:border-orange-700' :
    rule.severity === 'medium' ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700' :
    'bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700'
  }`}>
    <div className="p-2 rounded-lg flex-shrink-0">
      <AlertTriangle className={`w-5 h-5 ${ 
        rule.severity === 'critical' ? 'text-red-600 dark:text-red-400' :
        rule.severity === 'high' ? 'text-orange-600 dark:text-orange-400' :
        rule.severity === 'medium' ? 'text-amber-600 dark:text-amber-400' :
        'text-blue-600 dark:text-blue-400'
      }`} />
    </div>
    <div className="flex-1">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className={`font-black uppercase text-[10px] md:text-xs tracking-wider ${ 
          rule.severity === 'critical' ? 'text-red-700 dark:text-red-300' :
          rule.severity === 'high' ? 'text-orange-700 dark:text-orange-300' :
          rule.severity === 'medium' ? 'text-amber-700 dark:text-amber-300' :
          'text-blue-700 dark:text-blue-300'
        }`}>{rule.type}</span>
        {rule.target && <span className="text-xs text-slate-600 dark:text-slate-400">• {rule.target}</span>}
        {rule.condition && <span className="text-xs text-slate-600 dark:text-slate-400">• {rule.condition}</span>}
      </div>
      <p className={`text-xs md:text-sm leading-relaxed ${ 
        rule.severity === 'critical' ? 'text-red-900 dark:text-red-200' :
        rule.severity === 'high' ? 'text-orange-900 dark:text-orange-200' :
        rule.severity === 'medium' ? 'text-amber-900 dark:text-amber-200' :
        'text-blue-900 dark:text-blue-200'
      }`}>{rule.reason}</p>
    </div>
  </div>
);

const SpeciesCard = ({ species }: { species: Species }) => (
  <Link to={`/species/${species.slug}`} className="group bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-xl p-4 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-md hover:shadow-xl">
    <h5 className="font-black text-slate-900 dark:text-slate-100 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 mb-1 text-sm md:text-base line-clamp-1">
      {species.taxonomy.commonName}
    </h5>
    <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 italic mb-2 md:mb-3 line-clamp-1">{species.taxonomy.scientificName}</p>
    <div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-600 dark:text-slate-400 font-semibold">
      <span>{species.visuals.adultSizeCM}cm</span>
      <span>•</span>
      <span>{species.environment.minTankSizeLiters}L</span>
    </div>
  </Link>
);

const AggressionBar = ({ label, level }: { label: string; level: number }) => (
  <div>
    <div className="flex items-center justify-between mb-2 md:mb-3">
      <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-bold">{label}</span>
      <span className="text-sm md:text-base font-black text-slate-900 dark:text-slate-100">{level}/10</span>
    </div>
    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 md:h-4 overflow-hidden">
      <div 
        className={`h-full rounded-full transition-all shadow-inner ${ 
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

const MistakeCard = ({ issue, cause, frequency }: { issue: string; cause: string; frequency: number }) => (
  <div className="bg-red-50 dark:bg-red-950/30 rounded-xl p-4 md:p-5 border-2 border-red-200 dark:border-red-800 shadow-lg">
    <div className="flex items-center justify-between mb-2 md:mb-3">
      <h5 className="font-black text-red-900 dark:text-red-200 capitalize text-sm md:text-base">{issue.replace(/-/g, ' ')}</h5>
      <span className="text-[10px] md:text-xs font-black text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/50 px-2 md:px-3 py-1 md:py-1.5 rounded-lg">
        {Math.round(frequency * 100)}% affected
      </span>
    </div>
    <p className="text-xs md:text-sm text-red-800 dark:text-red-300 leading-relaxed">
      <strong className="font-bold">Cause:</strong> {cause.replace(/-/g, ' ')}
    </p>
  </div>
);

const TabButton = ({ active, onClick, icon, children }: { active: boolean; onClick: () => void; icon: React.ReactNode; children: React.ReactNode }) => (
  <button 
    onClick={onClick} 
    className={`flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-black transition-all whitespace-nowrap ${ 
      active 
        ? 'bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-400 border-b-4 border-indigo-600 dark:border-indigo-500' 
        : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border-b-4 border-transparent'
    }`}
  >
    {icon}
    <span className="hidden sm:inline">{children}</span>
  </button>
);

const BarIndicator = ({ level, color }: { level: string; color: 'indigo' | 'emerald' }) => {
  const steps = level === 'low' || level === 'sparse' ? 1 : level === 'medium' ? 2 : 3;
  const colorClasses = {
    indigo: { active: 'bg-indigo-600', inactive: 'bg-slate-200 dark:bg-slate-700' },
    emerald: { active: 'bg-emerald-600', inactive: 'bg-slate-200 dark:bg-slate-700' },
  }[color];
  
  return (
    <div className="flex gap-2 flex-1 max-w-[100px] md:max-w-[120px]">
      {[1, 2, 3].map(i => (
        <div key={i} className={`h-2 md:h-2.5 flex-1 rounded-full ${i <= steps ? colorClasses.active : colorClasses.inactive}`} />
      ))}
    </div>
  );
};

const TagBadge = ({ tag }: { tag: string }) => {
  const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1);
  return (
    <div className="group relative">
      <span className="cursor-help inline-flex items-center px-3 py-2 rounded-lg text-xs md:text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors">
        {tag === 'jumper' && <AlertTriangle className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1.5 text-amber-500" />}
        {capitalize(tag.replace(/_/g, ' '))}
      </span>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-slate-900 dark:bg-slate-950 text-white text-xs p-3 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-xl border border-slate-700">
        <span className="font-bold block mb-1 capitalize">{tag.replace(/_/g, ' ')}:</span>
        {tagDescriptions[tag as keyof typeof tagDescriptions] || "No description available."}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-950"></div>
      </div>
    </div>
  );
};

const Badge = ({ text, color, size = 'md' }: { text: string; color: string; size?: 'sm' | 'md' }) => {
  const styles = {
    brand: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
    enhanced: 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    beginner: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    medium: 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    intermediate: 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    expert: 'bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800',
  }[color === 'brand' || color === 'enhanced' ? color : text] || 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
  
  const sizeClasses = size === 'sm' ? 'px-2 py-1 text-[10px]' : 'px-3 py-1.5 text-xs';
  
  return <span className={`inline-flex items-center rounded-lg font-black uppercase tracking-wide border-2 ${styles} ${sizeClasses}`}>{text}</span>;
};

// NEW: CareLevelCard Component
interface CareLevelCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  colors: Record<string, { bg: string; text: string; border: string }>;
}

const CareLevelCard = ({ label, value, icon, colors }: CareLevelCardProps) => {
  const colorConfig = colors[value] || colors.medium || colors.low;
  
  return (
    <div className={`${colorConfig.bg} rounded-xl p-4 border-2 ${colorConfig.border} shadow-lg`}>
      <div className="flex items-center gap-2 mb-2">
        <div className={`p-1.5 rounded-lg ${colorConfig.text}`}>
          {icon}
        </div>
        <div className="text-[10px] md:text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {label}
        </div>
      </div>
      <div className={`text-xl md:text-2xl font-black ${colorConfig.text} capitalize`}>
        {value}
      </div>
    </div>
  );
};

// NEW: EquipmentCardNew Component
interface EquipmentCardNewProps {
  icon: React.ReactNode;
  label: string;
  required: boolean;
  details?: string;
  color: 'rose' | 'blue' | 'cyan' | 'amber' | 'emerald';
}

const EquipmentCardNew = ({ icon, label, required, details, color }: EquipmentCardNewProps) => {
  const colorConfig = {
    rose: { bg: 'bg-rose-50 dark:bg-rose-950/30', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-200 dark:border-rose-800' },
    blue: { bg: 'bg-blue-50 dark:bg-blue-950/30', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
    cyan: { bg: 'bg-cyan-50 dark:bg-cyan-950/30', text: 'text-cyan-600 dark:text-cyan-400', border: 'border-cyan-200 dark:border-cyan-800' },
    amber: { bg: 'bg-amber-50 dark:bg-amber-950/30', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-800' },
    emerald: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800' }
  };
  
  const colors = colorConfig[color];
  
  return (
    <div className={`${colors.bg} rounded-xl p-4 border-2 ${colors.border} ${required ? 'shadow-lg' : 'opacity-60'}`}>
      <div className="flex items-center gap-2 mb-2">
        <div className={`p-1.5 rounded-lg ${colors.text}`}>
          {icon}
        </div>
        <div className="text-sm md:text-base font-black text-slate-900 dark:text-white">
          {label}
        </div>
        {required && (
          <span className="ml-auto px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase">
            Required
          </span>
        )}
      </div>
      {details && (
        <p className="text-xs text-slate-600 dark:text-slate-400 capitalize">
          {details}
        </p>
      )}
      {!required && (
        <p className="text-xs text-slate-500 dark:text-slate-500 italic mt-1">
          Optional
        </p>
      )}
    </div>
  );
};

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6">
    <div className="text-center max-w-md mx-auto bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-2xl border-2 border-slate-200 dark:border-slate-700">
      <div className="w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-2xl mx-auto mb-6 flex items-center justify-center">
        <span className="text-4xl font-black text-slate-400 dark:text-slate-500">404</span>
      </div>
      <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Species Not Found</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6">The species you're looking for doesn't exist in our database.</p>
      <Link to="/species" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-bold bg-indigo-50 dark:bg-indigo-950/30 px-6 py-3 rounded-xl border-2 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-all">
        <ArrowLeft className="w-4 h-4" /> Return to Database
      </Link>
    </div>
  </div>
);

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
