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

      {/* HERO SECTION - unchanged */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
      >
        {/* ... (Hero section unchanged) ... */}
      </motion.header>

      {/* MAIN CONTENT */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* ... (All other content sections - keeping original structure) ... */}
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
  <h3 className="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4 md:mb-5 flex items-center gap-2 md:gap-3">
    <div className="text-indigo-600 dark:text-indigo-400">{icon}</div>
    {title}
  </h3>
);

const ParameterCard = ({ icon, label, value, gradient, borderColor }: { icon: React.ReactNode; label: string; value: string; gradient: string; borderColor: string }) => (
  <div className={`bg-gradient-to-br ${gradient} rounded-xl p-4 md:p-5 border-2 ${borderColor} shadow-lg`}>
    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
      {icon}
      <span className="text-xs md:text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-wide">{label}</span>
    </div>
    <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100">{value}</div>
  </div>
);

const StatBar = ({ label, value }: { label: string; value: string }) => {
  const steps = value === 'low' || value === 'beginner' ? 1 : value === 'medium' || value === 'intermediate' ? 2 : 3;
  
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{label}</span>
        <span className="text-sm font-semibold text-slate-900 dark:text-white capitalize">{value}</span>
      </div>
      <div className="flex gap-1.5">
        {[1, 2, 3].map(i => (
          <div key={i} className={`h-2 flex-1 rounded-full ${
            i <= steps ? 'bg-slate-800 dark:bg-slate-300' : 'bg-slate-200 dark:bg-slate-700'
          }`} />
        ))}
      </div>
    </div>
  );
};

// ... (keeping all other helper components exactly as they were)

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
