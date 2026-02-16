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
  
  // Check if this is an enhanced species (has new intelligence data)
  const isEnhanced = !!(data.behavior.aggressionLevel || data.care.feeding || data.experienceData);

  // ==================== HELPERS INSIDE COMPONENT (AFTER NULL CHECK) ====================
  
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
          
          {/* Remaining 50,000+ characters of the original file - truncated for brevity */}
        </div>
      </motion.header>

      {/* Rest of the component... */}
    </div>
  );
};

// All helper components...

export default SpeciesDetailPage;
