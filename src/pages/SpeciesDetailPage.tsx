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

  // Sidebar info panel content (reused in header on mobile, sticky on desktop)
  const SidebarInfoPanel = () => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-xl">
      {/* Origin header */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl">
          <MapPin className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-black text-gray-400 dark:text-gray-500 tracking-wider mb-0.5">Origin</div>
          <div className="text-base font-bold text-gray-900 dark:text-gray-100">{data.taxonomy.origin}</div>
        </div>
      </div>

      {/* Core rows */}
      <div className="space-y-1 mb-4">
        <SidebarInfoRow icon={<Activity className="w-4 h-4 text-emerald-500" />} label="Difficulty" value={capitalize(data.care.difficulty)} />
        <SidebarInfoRow icon={<Heart className="w-4 h-4 text-rose-500" />} label="Temperament" value={data.behavior.tags.includes('peaceful') ? 'Peaceful' : data.behavior.tags.includes('semi-aggressive') ? 'Semi-Aggressive' : 'Varies'} />
        <SidebarInfoRow icon={<Utensils className="w-4 h-4 text-amber-500" />} label="Diet" value={capitalize(data.care.diet)} />
        <SidebarInfoRow icon={<Box className="w-4 h-4 text-blue-500" />} label="Min. Tank" value={`${data.environment.minTankSizeLiters} L`} />
        <SidebarInfoRow icon={<Users className="w-4 h-4 text-violet-500" />} label="Group Size" value={`${data.behavior.minGroupSize}+ fish`} />
        <SidebarInfoRow icon={<Clock className="w-4 h-4 text-cyan-500" />} label="Lifespan" value={`${data.health.lifespanYears} yrs`} />
      </div>

      {/* Estimated costs – shown only if data exists */}
      {data.experienceData?.estimatedCosts && (
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-[10px] uppercase font-black text-gray-400 dark:text-gray-500 tracking-wider mb-3">
            Est. Costs
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
              <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Setup</div>
              <div className="text-sm font-black text-gray-900 dark:text-gray-100">
                {data.experienceData.estimatedCosts.initial.min}–{data.experienceData.estimatedCosts.initial.max}
                <span className="text-[10px] ml-0.5 font-bold text-gray-500 dark:text-gray-400">
                  {data.experienceData.estimatedCosts.initial.currency}
                </span>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
              <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Monthly</div>
              <div className="text-sm font-black text-gray-900 dark:text-gray-100">
                {data.experienceData.estimatedCosts.monthly.min}–{data.experienceData.estimatedCosts.monthly.max}
                <span className="text-[10px] ml-0.5 font-bold text-gray-500 dark:text-gray-400">
                  {data.experienceData.estimatedCosts.monthly.currency}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <SEOHead title={seoTitle} description={seoDesc} />

      {/* ========== HERO SECTION ========== */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden min-h-[340px] md:min-h-[420px]"
      >
        {/* Background image + single diagonal overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={headerImageUrl} 
            alt={data.taxonomy.commonName} 
            className="w-full h-full object-cover" 
          />
          {/* Replaced dual heavy overlays with one subtle diagonal gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/80 via-gray-900/35 to-gray-900/5" />
        </div>
        
        <ImageAttribution credit={data.imageCredit} />

        {/* Back button – absolute, outside content flow */}
        <Link 
          to="/species" 
          className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-bold bg-black/25 hover:bg-black/45 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/15 transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>

        {/* Hero content – left-aligned, compact */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8 md:pt-16 md:pb-10">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge text={data.environment.type} color="brand" size="md" />
            <Badge text={data.care.difficulty} color={data.care.difficulty} size="md" />
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 leading-tight drop-shadow-lg">
            {data.taxonomy.commonName}
          </h1>
          <p className="text-base md:text-lg text-white/70 italic font-medium mb-5 drop-shadow">
            {data.taxonomy.scientificName}
          </p>

          {/* Quick stat pills – compact, minimal footprint */}
          <div className="flex flex-wrap gap-2">
            {[
              { icon: <Ruler className="w-3.5 h-3.5" />, label: `${data.visuals.adultSizeCM} cm` },
              { icon: <Box className="w-3.5 h-3.5" />,   label: `${data.environment.minTankSizeLiters} L` },
              { icon: <Users className="w-3.5 h-3.5" />, label: `${data.behavior.minGroupSize}+ Tiere` },
              { icon: <Heart className="w-3.5 h-3.5" />, label: `${data.health.lifespanYears} Jahre` },
            ].map(({ icon, label }, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-bold border border-white/20"
              >
                <span className="text-cyan-300">{icon}</span>
                {label}
              </span>
            ))}
          </div>
        </div>
      </motion.header>

      {/* ========== MAIN CONTENT ========== */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 lg:items-start">

        {/* ---- Left column: all tab content ---- */}
        <div>
          {/* Fun Fact - COMPLETELY REDESIGNED WITH VIBRANT GRADIENT */}
          {data.funFact && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mb-6 md:mb-8"
            >
              <div className="relative group">
                {/* Gradient background with blur effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-purple-500 to-indigo-600 rounded-2xl blur-sm opacity-70 group-hover:opacity-90 transition-opacity" />
                
                {/* Main card */}
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-7 border-2 border-white/20 dark:border-gray-700/50 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-start gap-4 md:gap-5">
                    {/* Icon with glow effect */}
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="flex-shrink-0"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl blur-md opacity-50" />
                        <div className="relative p-3.5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-lg">
                          <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-purple-600 to-indigo-600 dark:from-amber-400 dark:via-purple-400 dark:to-indigo-400 uppercase tracking-wider">
                          Did You Know?
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-purple-300 to-transparent dark:from-purple-700" />
                      </div>
                      <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base leading-relaxed font-medium">
                        {data.funFact}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-400/20 to-transparent dark:from-amber-400/10 rounded-tr-2xl" />
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

          {/* Mobile-only info panel (visible below lg) */}
          <div className="lg:hidden mb-6">
            <SidebarInfoPanel />
          </div>

          {/* TAB NAVIGATION - OPTIMIZED */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Desktop: Horizontal tabs */}
              <div className="hidden md:flex border-b-2 border-gray-200 dark:border-gray-700">
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
                  Tank Mates
                </TabButton>
                <TabButton active={activeTab === 'advanced'} onClick={() => setActiveTab('advanced')} icon={<Microscope className="w-4 h-4" />}>
                  Advanced
                </TabButton>
              </div>

              {/* Mobile: Scrollable horizontal tabs */}
              <div className="md:hidden border-b-2 border-gray-200 dark:border-gray-700 overflow-x-auto scrollbar-hide">
                <div className="flex min-w-max">
                  <TabButtonMobile active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} icon={<Target className="w-4 h-4" />}>
                    Overview
                  </TabButtonMobile>
                  <TabButtonMobile active={activeTab === 'care'} onClick={() => setActiveTab('care')} icon={<Heart className="w-4 h-4" />}>
                    Care
                  </TabButtonMobile>
                  <TabButtonMobile active={activeTab === 'habitat'} onClick={() => setActiveTab('habitat')} icon={<Mountain className="w-4 h-4" />}>
                    Habitat
                  </TabButtonMobile>
                  <TabButtonMobile active={activeTab === 'compatibility'} onClick={() => setActiveTab('compatibility')} icon={<Fish className="w-4 h-4" />}>
                    Mates
                  </TabButtonMobile>
                  <TabButtonMobile active={activeTab === 'advanced'} onClick={() => setActiveTab('advanced')} icon={<Microscope className="w-4 h-4" />}>
                    Advanced
                  </TabButtonMobile>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-4 md:p-6 lg:p-8">
                {/* OVERVIEW TAB */}
                {activeTab === 'overview' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 md:space-y-8">
                    {/* Parameters Grid - PROFESSIONAL REDESIGN */}
                    <div>
                      <SectionHeader title="Water Parameters" icon={<Droplets className="w-5 h-5" />} />
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Temperature Card */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2.5 bg-white dark:bg-gray-950/50 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                                <Thermometer className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Temperature</div>
                                <div className="text-2xl font-black text-gray-900 dark:text-gray-100">
                                  {data.environment.tempC.min}–{data.environment.tempC.max}°C
                                </div>
                              </div>
                            </div>
                          </div>
                          {data.environment.tempC.ideal && (
                            <div className="flex items-center gap-2 text-xs">
                              <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-rose-500"
                                  style={{ 
                                    width: `${((data.environment.tempC.ideal - 15) / (35 - 15)) * 100}%`,
                                  }}
                                />
                              </div>
                              <span className="font-bold text-gray-600 dark:text-gray-400">Ideal: {data.environment.tempC.ideal}°C</span>
                            </div>
                          )}
                        </div>

                        {/* pH Card */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2.5 bg-white dark:bg-gray-950/50 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                                <Droplets className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">pH Level</div>
                                <div className="text-2xl font-black text-gray-900 dark:text-gray-100">
                                  {data.environment.ph.min}–{data.environment.ph.max}
                                </div>
                              </div>
                            </div>
                          </div>
                          {data.environment.ph.ideal && (
                            <div className="flex items-center gap-2 text-xs">
                              <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-rose-500 via-emerald-500 to-blue-500"
                                  style={{ 
                                    width: `${((data.environment.ph.ideal - 4) / (9 - 4)) * 100}%`,
                                  }}
                                />
                              </div>
                              <span className="font-bold text-gray-600 dark:text-gray-400">Ideal: {data.environment.ph.ideal}</span>
                            </div>
                          )}
                        </div>

                        {/* Water Flow Card */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-white dark:bg-gray-950/50 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                              <Activity className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Water Flow</div>
                              <div className="text-xl font-black text-gray-900 dark:text-gray-100 capitalize">{data.environment.flow}</div>
                            </div>
                            <div className="flex gap-1">
                              {[1, 2, 3].map(i => (
                                <div 
                                  key={i} 
                                  className={`w-1.5 h-8 rounded-full ${
                                    (data.environment.flow === 'low' && i <= 1) ||
                                    (data.environment.flow === 'medium' && i <= 2) ||
                                    (data.environment.flow === 'high' && i <= 3)
                                      ? 'bg-gray-700 dark:bg-gray-300'
                                      : 'bg-gray-300 dark:bg-gray-700'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Substrate Card */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-white dark:bg-gray-950/50 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                              <Box className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Substrate</div>
                              <div className="text-xl font-black text-gray-900 dark:text-gray-100 capitalize">{data.environment.substrate || 'Any'}</div>
                            </div>
                          </div>
                        </div>
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
                      <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900/50 dark:to-blue-950/20 rounded-xl p-5 md:p-6 border-2 border-gray-200 dark:border-gray-700">
                        <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-5 leading-relaxed text-sm md:text-base">
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
                      {/* Ownership Stats */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-5 md:p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-gray-600 dark:text-gray-400" /> Ownership Stats
                        </h4>
                        <div className="space-y-4">
                          <StatBar label="Difficulty" value={data.care.difficulty} />
                          <StatBar label="Maintenance" value={data.care.effort} />
                          <StatBar label="Cost" value={data.care.cost} />
                        </div>
                      </div>

                      {/* Est. Costs */}
                      {data.experienceData?.estimatedCosts && (
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 md:p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-gray-600 dark:text-gray-400" /> Est. Costs
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium mb-2">Initial Setup</div>
                              <div className="text-2xl md:text-3xl font-black text-gray-900 dark:text-gray-100">
                                {data.experienceData.estimatedCosts.initial.min}-{data.experienceData.estimatedCosts.initial.max}
                                <span className="text-sm md:text-base ml-1 font-bold text-gray-600 dark:text-gray-400">
                                  {data.experienceData.estimatedCosts.initial.currency}
                                </span>
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium mb-2">Monthly</div>
                              <div className="text-2xl md:text-3xl font-black text-gray-900 dark:text-gray-100">
                                {data.experienceData.estimatedCosts.monthly.min}-{data.experienceData.estimatedCosts.monthly.max}
                                <span className="text-sm md:text-base ml-1 font-bold text-gray-600 dark:text-gray-400">
                                  {data.experienceData.estimatedCosts.monthly.currency}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* CARE TAB - STREAMLINED */}
                {activeTab === 'care' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    {/* Care Level Overview - Compact */}
                    <div className="grid sm:grid-cols-3 gap-3">
                      <CareLevelCard 
                        label="Difficulty" 
                        value={data.care.difficulty}
                        icon={<Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                        colors={{
                          easy: { bg: 'bg-white dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-700' },
                          medium: { bg: 'bg-white dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-700' },
                          hard: { bg: 'bg-white dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-700' },
                          expert: { bg: 'bg-white dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-700' }
                        }}
                      />
                      <CareLevelCard 
                        label="Time Effort" 
                        value={data.care.effort}
                        icon={<Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />}
                        colors={{
                          low: { bg: 'bg-white dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-700' },
                          medium: { bg: 'bg-white dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-700' },
                          high: { bg: 'bg-white dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-700' }
                        }}
                      />
                      <CareLevelCard 
                        label="Cost" 
                        value={data.care.cost}
                        icon={<DollarSign className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />}
                        colors={{
                          low: { bg: 'bg-white dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-700' },
                          medium: { bg: 'bg-white dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-700' },
                          high: { bg: 'bg-white dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-700' }
                        }}
                      />
                    </div>

                    {/* Feeding Guide - Streamlined */}
                    <div>
                      <SectionHeader title="Feeding Guide" icon={<Utensils className="w-5 h-5" />} />
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-5 border border-gray-200 dark:border-gray-700 shadow-sm space-y-5">
                        
                        <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-gray-700">
                          <div className="p-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg">
                            <Utensils className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Diet Type</div>
                            <div className="text-xl font-black text-gray-900 dark:text-gray-100 capitalize">{data.care.diet}</div>
                          </div>
                        </div>

                        {data.care.feeding && (
                          <>
                            <div className="grid sm:grid-cols-2 gap-3">
                              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-1">
                                  <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                  <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Frequency</div>
                                </div>
                                <div className="text-base font-bold text-gray-900 dark:text-gray-100 capitalize">{data.care.feeding.frequency.replace(/-/g, ' ')}</div>
                              </div>
                              
                              {data.care.feeding.fastingDay && data.care.feeding.fastingDay !== 'none' && (
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                    <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Fasting Day</div>
                                  </div>
                                  <div className="text-base font-bold text-gray-900 dark:text-gray-100 capitalize">{data.care.feeding.fastingDay}</div>
                                </div>
                              )}
                            </div>

                            <div>
                              <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                                <Apple className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Primary Foods
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {data.care.feeding.primaryFoods.map((food) => (
                                  <span key={food} className="px-3 py-1.5 rounded-md text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 capitalize">
                                    {food.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {data.care.feeding.supplements && data.care.feeding.supplements.length > 0 && (
                              <div>
                                <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                                  <Pill className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" /> Supplements
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {data.care.feeding.supplements.map((supplement) => (
                                    <span key={supplement} className="px-3 py-1.5 rounded-md text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 capitalize">
                                      {supplement.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {data.care.feeding.liveFood && (
                              <div className={`p-3 border border-gray-200 dark:border-gray-700 rounded-lg ${
                                data.care.feeding.liveFood.required ? 'bg-rose-50/50 dark:bg-rose-950/10' : 
                                data.care.feeding.liveFood.recommended ? 'bg-blue-50/50 dark:bg-blue-950/10' : 
                                'bg-emerald-50/50 dark:bg-emerald-950/10'
                              }`}>
                                <div className="flex items-center gap-2 text-xs font-semibold">
                                  {data.care.feeding.liveFood.required ? (
                                    <><AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" /><span className="text-gray-900 dark:text-gray-100">Live food required</span></>
                                  ) : data.care.feeding.liveFood.recommended ? (
                                    <><Info className="w-4 h-4 text-blue-600 dark:text-blue-400" /><span className="text-gray-900 dark:text-gray-100">Live food recommended</span></>
                                  ) : (
                                    <><CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /><span className="text-gray-900 dark:text-gray-100">Live food optional</span></>
                                  )}
                                </div>
                              </div>
                            )}
                          </>
                        )}

                        {!data.care.feeding && (
                          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <ul className="space-y-2">
                              {getFeedingAdvice().map((tip, i) => (
                                <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                                  <span className="text-emerald-500 dark:text-emerald-400 font-bold mt-0.5 flex-shrink-0">→</span>
                                  <span className="leading-relaxed">{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Maintenance Schedule - Compact */}
                    {data.care.maintenance && (
                      <div>
                        <SectionHeader title="Maintenance" icon={<Calendar className="w-5 h-5" />} />
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm space-y-3">
                          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                            <div className="flex items-center gap-2 mb-2">
                              <Droplets className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                              <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Water Changes</div>
                            </div>
                            <div className="text-base font-bold text-blue-900 dark:text-blue-300">
                              {data.care.maintenance.waterChangePercentage}% {data.care.maintenance.waterChangeFrequency}
                            </div>
                            {data.care.maintenance.notes && (
                              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mt-2">{data.care.maintenance.notes}</p>
                            )}
                          </div>
                          {data.care.maintenance.vacuumingNeeded && (
                            <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-3 border border-amber-200 dark:border-amber-800">
                              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                                <Wind className="w-4 h-4" />
                                <span>Regular substrate vacuuming required</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Equipment Checklist - Compact */}
                    {data.care.equipment && (
                      <div>
                        <SectionHeader title="Equipment" icon={<Wrench className="w-5 h-5" />} />
                        <div className="grid sm:grid-cols-2 gap-3">
                          {data.care.equipment.heater && (
                            <EquipmentCardNew icon={<Thermometer className="w-4 h-4 text-rose-600 dark:text-rose-400" />} label="Heater" required={data.care.equipment.heater.required} details={data.care.equipment.heater.watts ? `${data.care.equipment.heater.watts}W recommended` : undefined} color="rose" />
                          )}
                          {data.care.equipment.filter && (
                            <EquipmentCardNew icon={<Wind className="w-4 h-4 text-blue-600 dark:text-blue-400" />} label="Filter" required={data.care.equipment.filter.required} details={data.care.equipment.filter.type ? `${data.care.equipment.filter.type} - ${data.care.equipment.filter.flowRate || 'standard'}` : undefined} color="blue" />
                          )}
                          {data.care.equipment.airstone !== undefined && (
                            <EquipmentCardNew icon={<CircleDot className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />} label="Airstone" required={data.care.equipment.airstone} color="cyan" />
                          )}
                          {data.care.equipment.lighting && (
                            <EquipmentCardNew icon={<Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />} label="Lighting" required={true} details={`${data.care.equipment.lighting} intensity`} color="amber" />
                          )}
                          {data.care.equipment.co2 !== undefined && (
                            <EquipmentCardNew icon={<Beaker className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />} label="CO₂ System" required={data.care.equipment.co2} color="emerald" />
                          )}
                        </div>
                      </div>
                    )}

                    {/* Special Requirements - Compact */}
                    {data.care.specialRequirements && data.care.specialRequirements.length > 0 && (
                      <div>
                        <SectionHeader title="Special Requirements" icon={<AlertTriangle className="w-5 h-5" />} />
                        <div className="space-y-2">
                          {data.care.specialRequirements.map((requirement, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 flex gap-2 shadow-sm">
                              <div className="p-1.5 bg-rose-50 dark:bg-rose-950/30 rounded-md flex-shrink-0">
                                <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                              </div>
                              <p className="text-xs md:text-sm text-gray-900 dark:text-gray-100 font-semibold leading-relaxed">{requirement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Aggression Profile */}
                    {data.behavior.aggressionLevel && (
                      <div>
                        <SectionHeader title="Aggression Profile" icon={<AlertTriangle className="w-5 h-5" />} />
                        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 md:p-5 border border-gray-200 dark:border-gray-700 space-y-4">
                          <AggressionBar label="Intraspecific (Same Species)" level={data.behavior.aggressionLevel.intraspecific} />
                          <AggressionBar label="Interspecific (Other Species)" level={data.behavior.aggressionLevel.interspecific} />
                          <AggressionBar label="Territorial Behavior" level={data.behavior.aggressionLevel.territorial} />
                        </div>
                      </div>
                    )}

                    {/* Health */}
                    <div>
                      <SectionHeader title="Health & Disease Prevention" icon={<Heart className="w-5 h-5" />} />
                      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 md:p-5 border border-gray-200 dark:border-gray-700 space-y-4">
                        <div>
                          <h5 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-3 tracking-wider">Common Diseases</h5>
                          <DiseaseList diseases={data.health.commonDiseases} />
                        </div>
                        {data.health.sensitivities && data.health.sensitivities.length > 0 && (
                          <div>
                            <h5 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-3 tracking-wider">Sensitivities</h5>
                            <div className="flex flex-wrap gap-2">
                              {data.health.sensitivities.map((s: string) => (
                                <span key={s} className="text-xs bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-2.5 py-1.5 rounded-md border border-amber-200 dark:border-amber-800 font-bold">{s}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Pro Tips & Common Mistakes */}
                    {(data.care.proTips || data.care.commonMistakes) && (
                      <div className="grid md:grid-cols-2 gap-4">
                        {data.care.proTips && <TipsCard title="Pro Tips" icon={<Lightbulb className="w-4 h-4" />} items={data.care.proTips} variant="success" />}
                        {data.care.commonMistakes && <TipsCard title="Avoid These" icon={<XCircle className="w-4 h-4" />} items={data.care.commonMistakes} variant="danger" />}
                      </div>
                    )}

                    {/* Common Failures - Compact */}
                    {data.experienceData?.commonFailures && data.experienceData.commonFailures.length > 0 && (
                      <div>
                        <SectionHeader title="Common Mistakes to Avoid" icon={<XCircle className="w-5 h-5" />} />
                        <div className="space-y-2">
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

                {/* HABITAT TAB - SIMPLIFIED (Water Parameters removed) */}
                {activeTab === 'habitat' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 md:space-y-8">
                    <div>
                      <SectionHeader title="Tank Setup Recommendations" icon={<Mountain className="w-5 h-5" />} />
                      <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                        {getTankSetupRecommendations().map((item, i) => (
                          <SetupCard key={i} title={item.title} description={item.description} />
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <SectionHeader title="Planting Density" icon={<Sprout className="w-5 h-5" />} />
                        <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-xl p-5 md:p-6 border-2 border-emerald-200 dark:border-emerald-800">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs md:text-sm font-black text-emerald-900 dark:text-emerald-300 uppercase tracking-wider">{data.habitat.planting}</span>
                            <BarIndicator level={data.habitat.planting} color="emerald" />
                          </div>
                          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{data.habitat.plantingNotes}</p>
                        </div>
                      </div>
                      <div>
                        <SectionHeader title="Hardscape Elements" icon={<Mountain className="w-5 h-5" />} />
                        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-5 md:p-6 border-2 border-gray-200 dark:border-gray-700">
                          <div className="flex flex-wrap gap-2">
                            {data.habitat.hardscape.map((item: string) => (
                              <span key={item} className="text-sm md:text-base bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 font-bold">{item}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* COMPATIBILITY TAB - REORDERED */}
                {activeTab === 'compatibility' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 md:space-y-8">
                    {/* Tank Mate Guidelines - NOW FIRST */}
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
                              <div key={m} className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 px-4 py-3 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 font-bold text-sm md:text-base">{m}</div>
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
                              <div key={m} className="bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300 px-4 py-3 rounded-xl border-2 border-rose-200 dark:border-rose-800 font-bold text-sm md:text-base">{m}</div>
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

                    {/* Suggested Compatible Species */}
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

                    {/* Compatibility Rules - NOW AT THE END */}
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
                  </motion.div>
                )}

                {/* ADVANCED TAB */}
                {activeTab === 'advanced' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 md:space-y-8">
                    {data.scientificContext && (
                      <div>
                        <SectionHeader title="Scientific Background" icon={<Microscope className="w-5 h-5" />} />
                        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-5 md:p-6 border-2 border-gray-200 dark:border-gray-700 space-y-5">
                          <div>
                            <h5 className="font-black text-gray-900 dark:text-gray-100 mb-2 text-sm md:text-base">Wild Habitat</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">{data.scientificContext.wildHabitat}</p>
                          </div>
                          <div>
                            <h5 className="font-black text-gray-900 dark:text-gray-100 mb-2 text-sm md:text-base">Sexual Dimorphism</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">{data.scientificContext.sexualDimorphism}</p>
                          </div>
                          {data.scientificContext.variants && data.scientificContext.variants.length > 0 && (
                            <div>
                              <h5 className="font-black text-gray-900 dark:text-gray-100 mb-3 md:mb-4 text-sm md:text-base">Known Variants</h5>
                              <div className="flex flex-wrap gap-2">
                                {data.scientificContext.variants.map((v: string) => (
                                  <span key={v} className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 px-3 py-2 rounded-lg text-sm md:text-base border-2 border-indigo-200 dark:border-indigo-800 font-bold">{v}</span>
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
                        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-5 md:p-6 border-2 border-gray-200 dark:border-gray-700">
                          <div className="flex items-center gap-3 mb-5">
                            <Badge text={data.breeding.difficulty} color={data.breeding.difficulty} size="md" />
                            <span className="text-sm md:text-base text-gray-600 dark:text-gray-400 capitalize font-semibold">{data.breeding.method.replace(/_/g, ' ')}</span>
                          </div>
                          <div className="space-y-4">
                            {data.breeding.trigger && (
                              <div>
                                <h5 className="font-black text-gray-900 dark:text-gray-100 mb-2 text-sm md:text-base">Breeding Trigger</h5>
                                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">{data.breeding.trigger}</p>
                              </div>
                            )}
                            {data.breeding.fryCare && (
                              <div>
                                <h5 className="font-black text-gray-900 dark:text-gray-100 mb-2 text-sm md:text-base">Fry Care</h5>
                                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">{data.breeding.fryCare}</p>
                              </div>
                            )}
                            {data.breeding.notes && (
                              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 italic bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 leading-relaxed">{data.breeding.notes}</p>
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
        </div>

        {/* ---- Right column: sticky sidebar (desktop only) ---- */}
        <aside className="hidden lg:block">
          <div className="sticky top-20 space-y-4">
            <SidebarInfoPanel />
          </div>
        </aside>

      </main>
    </div>
  );
};

// ==================== HELPER COMPONENTS ====================

// Sidebar info row (light, for white card)
const SidebarInfoRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{label}</span>
    </div>
    <span className="text-sm text-gray-900 dark:text-gray-100 font-bold">{value}</span>
  </div>
);

const SectionHeader = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <h3 className="text-lg md:text-xl font-black text-gray-800 dark:text-gray-100 mb-4 md:mb-5 flex items-center gap-2 md:gap-3">
    <div className="text-indigo-600 dark:text-indigo-400">{icon}</div>
    {title}
  </h3>
);

const StatBar = ({ label, value }: { label: string; value: string }) => {
  const steps = value === 'low' || value === 'beginner' ? 1 : 
               value === 'medium' || value === 'intermediate' ? 2 : 3;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{label}</span>
        <span className="text-sm font-semibold text-gray-900 dark:text-white capitalize">{value}</span>
      </div>
      <div className="flex gap-1.5">
        {[1, 2, 3].map(i => (
          <div key={i} className={`h-2 flex-1 rounded-full ${i <= steps ? 'bg-gray-800 dark:bg-gray-300' : 'bg-gray-200 dark:bg-gray-700'}`} />
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
      <h5 className="font-black text-gray-900 dark:text-gray-100 mb-1 md:mb-2 text-sm md:text-base">{title}</h5>
      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
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
        {rule.target && <span className="text-xs text-gray-600 dark:text-gray-400">• {rule.target}</span>}
        {rule.condition && <span className="text-xs text-gray-600 dark:text-gray-400">• {rule.condition}</span>}
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
  <Link to={`/species/${species.slug}`} className="group bg-gray-50 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-md hover:shadow-xl">
    <h5 className="font-black text-gray-900 dark:text-gray-100 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 mb-1 text-sm md:text-base line-clamp-1">{species.taxonomy.commonName}</h5>
    <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 italic mb-2 md:mb-3 line-clamp-1">{species.taxonomy.scientificName}</p>
    <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-600 dark:text-gray-400 font-semibold">
      <span>{species.visuals.adultSizeCM}cm</span>
      <span>•</span>
      <span>{species.environment.minTankSizeLiters}L</span>
    </div>
  </Link>
);

const AggressionBar = ({ label, level }: { label: string; level: number }) => (
  <div>
    <div className="flex items-center justify-between mb-2 md:mb-3">
      <span className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-bold">{label}</span>
      <span className="text-sm md:text-base font-black text-gray-900 dark:text-gray-100">{level}/10</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 md:h-4 overflow-hidden">
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
  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 md:p-4 border border-red-200/60 dark:border-red-800/40 shadow-sm">
    <div className="flex items-center justify-between mb-2">
      <h5 className="font-bold text-gray-900 dark:text-gray-100 capitalize text-xs md:text-sm">{issue.replace(/-/g, ' ')}</h5>
      <span className="text-[10px] font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 px-2 py-1 rounded-md border border-red-200/50 dark:border-red-800/50">
        {Math.round(frequency * 100)}%
      </span>
    </div>
    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
      <strong className="font-bold text-red-800 dark:text-red-300">Cause:</strong> {cause.replace(/-/g, ' ')}
    </p>
  </div>
);

// Desktop Tab Button
const TabButton = ({ active, onClick, icon, children }: { active: boolean; onClick: () => void; icon: React.ReactNode; children: React.ReactNode }) => (
  <button 
    onClick={onClick} 
    className={`flex-1 flex items-center justify-center gap-2.5 px-4 py-4 text-sm font-black transition-all whitespace-nowrap ${ 
      active 
        ? 'bg-white dark:bg-gray-900 text-indigo-700 dark:text-indigo-400 border-b-4 border-indigo-600 dark:border-indigo-500' 
        : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border-b-4 border-transparent'
    }`}
  >
    <span className={`${active ? 'scale-110' : ''} transition-transform`}>{icon}</span>
    <span>{children}</span>
  </button>
);

// Mobile Tab Button
const TabButtonMobile = ({ active, onClick, icon, children }: { active: boolean; onClick: () => void; icon: React.ReactNode; children: React.ReactNode }) => (
  <button 
    onClick={onClick} 
    className={`flex flex-col items-center justify-center gap-1.5 px-5 py-3 text-xs font-black transition-all whitespace-nowrap min-w-[80px] ${ 
      active 
        ? 'bg-white dark:bg-gray-900 text-indigo-700 dark:text-indigo-400 border-b-4 border-indigo-600 dark:border-indigo-500' 
        : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border-b-4 border-transparent'
    }`}
  >
    <span className={`${active ? 'scale-110' : ''} transition-transform`}>{icon}</span>
    <span className="leading-tight">{children}</span>
  </button>
);

const BarIndicator = ({ level, color }: { level: string; color: 'indigo' | 'emerald' }) => {
  const steps = level === 'low' || level === 'sparse' ? 1 : level === 'medium' ? 2 : 3;
  const colorClasses = {
    indigo: { active: 'bg-indigo-600', inactive: 'bg-gray-200 dark:bg-gray-700' },
    emerald: { active: 'bg-emerald-600', inactive: 'bg-gray-200 dark:bg-gray-700' },
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
      <span className="cursor-help inline-flex items-center px-3 py-2 rounded-lg text-xs md:text-sm font-bold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors">
        {tag === 'jumper' && <AlertTriangle className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1.5 text-amber-500" />}
        {capitalize(tag.replace(/_/g, ' '))}
      </span>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-gray-900 dark:bg-gray-950 text-white text-xs p-3 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-xl border border-gray-700">
        <span className="font-bold block mb-1 capitalize">{tag.replace(/_/g, ' ')}:</span>
        {tagDescriptions[tag as keyof typeof tagDescriptions] || "No description available."}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-950"></div>
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
  }[color === 'brand' || color === 'enhanced' ? color : text] || 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700';
  const sizeClasses = size === 'sm' ? 'px-2 py-1 text-[10px]' : 'px-3 py-1.5 text-xs';
  return <span className={`inline-flex items-center rounded-lg font-black uppercase tracking-wide border-2 ${styles} ${sizeClasses}`}>{text}</span>;
};

// CareLevelCard Component
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
        <div className={`p-1.5 rounded-lg ${colorConfig.text}`}>{icon}</div>
        <div className="text-[10px] md:text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-wider">{label}</div>
      </div>
      <div className={`text-xl md:text-2xl font-black ${colorConfig.text} capitalize`}>{value}</div>
    </div>
  );
};

// EquipmentCardNew Component - STREAMLINED
interface EquipmentCardNewProps {
  icon: React.ReactNode;
  label: string;
  required: boolean;
  details?: string;
  color: 'rose' | 'blue' | 'cyan' | 'amber' | 'emerald';
}

const EquipmentCardNew = ({ icon, label, required, details, color }: EquipmentCardNewProps) => {
  const colorConfig = {
    rose:    { bg: 'bg-white dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-700' },
    blue:    { bg: 'bg-white dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-700' },
    cyan:    { bg: 'bg-white dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-700' },
    amber:   { bg: 'bg-white dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-700' },
    emerald: { bg: 'bg-white dark:bg-gray-800', text: 'text-gray-900 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-700' },
  };
  const colors = colorConfig[color];
  return (
    <div className={`${colors.bg} rounded-lg p-3 border ${colors.border} ${required ? 'shadow-sm' : 'opacity-60'}`}>
      <div className="flex items-center gap-2 mb-1">
        <div className={`${colors.text}`}>{icon}</div>
        <div className="text-sm font-bold text-gray-900 dark:text-white">{label}</div>
        {required && (
          <span className="ml-auto px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-[9px] font-black uppercase">Req</span>
        )}
      </div>
      {details && <p className="text-[10px] text-gray-600 dark:text-gray-400 capitalize">{details}</p>}
      {!required && <p className="text-[10px] text-gray-500 dark:text-gray-500 italic">Optional</p>}
    </div>
  );
};

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-6">
    <div className="text-center max-w-md mx-auto bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl border-2 border-gray-200 dark:border-gray-700">
      <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-2xl mx-auto mb-6 flex items-center justify-center">
        <span className="text-4xl font-black text-gray-400 dark:text-gray-500">404</span>
      </div>
      <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Species Not Found</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">The species you're looking for doesn't exist in our database.</p>
      <Link to="/species" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-bold bg-indigo-50 dark:bg-indigo-950/30 px-6 py-3 rounded-xl border-2 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-all">
        <ArrowLeft className="w-4 h-4" /> Return to Database
      </Link>
    </div>
  </div>
);

const resolveHeaderImageUrl = (imageUrl?: string, slug?: string) => {
  if (imageUrl) {
    // Pass through any external URL (http/https) or absolute path as-is
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) return imageUrl;
    if (imageUrl.startsWith('/images/species/')) return imageUrl;
    if (imageUrl.startsWith('images/species/')) return `/${imageUrl}`;
    if (imageUrl.startsWith('/')) return imageUrl;
    return `/images/species/${imageUrl}`;
  }
  if (slug) return `/images/species/${slug}.jpg`;
  return '';
};

export default SpeciesDetailPage;