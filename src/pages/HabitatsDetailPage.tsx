import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, Share2, MapPin, Fish, Check, Leaf, Activity,
  TestTube, ShieldAlert, Zap, Layers, Beaker, Lightbulb
} from 'lucide-react';
import { allSpecies } from '../data/species';
import habitatsDataRaw from '../data/habitats.json';
import AnimatedTransition from '../components/ui/AnimatedTransition';
import { SpeciesCard } from '../components/species/SpeciesCard';
import { ImageAttribution } from '../components/ui/ImageAttribution';
import type { ImageCredit } from '../types/common';

// --- TYPE DEFINITIONS ---
interface Habitat {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageCredit?: ImageCredit;
  description: string;
  ecology: string;
  conditions: any;
  waterParameters: any;
  setupGuide: any;
  speciesIds: string[];
}

const habitatsData = habitatsDataRaw as Habitat[];

// --- THEME & SVG KONFIGURATION ---
const habitatThemes: Record<string, any> = {
  'amazon-blackwater': {
    heroGradient: 'from-amber-950/90 via-stone-900/60',
    pillBg: 'bg-amber-500/20', pillText: 'text-amber-200', pillBorder: 'border-amber-500/30',
    buttonBg: 'bg-amber-600 hover:bg-amber-500', buttonShadow: 'shadow-amber-600/30',
    iconBg: 'bg-amber-100 dark:bg-amber-500/20', iconText: 'text-amber-600 dark:text-amber-400',
    dropCap: 'first-letter:text-amber-600 dark:first-letter:text-amber-500',
    glowBg: 'bg-amber-500/10',
    sidebarGradient: 'from-amber-500/10',
    svgPattern: (
      <svg className="absolute inset-0 w-full h-[120%] opacity-[0.03] dark:opacity-[0.04] text-amber-900 dark:text-amber-500 pointer-events-none z-0 hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,40 Q25,20 50,40 T100,40 L100,100 L0,100 Z" opacity="0.5"/>
        <path d="M0,60 Q30,40 60,60 T100,60 L100,100 L0,100 Z" opacity="0.3"/>
        <path d="M20,15 C25,10 30,15 25,20 C20,25 15,20 20,15 Z" />
        <path d="M80,30 C85,25 90,30 85,35 C80,40 75,35 80,30 Z" />
        <path d="M40,80 C48,75 50,85 45,90 C40,95 32,85 40,80 Z" />
      </svg>
    )
  },
  'lake-tanganyika-rocky': {
    heroGradient: 'from-cyan-950/90 via-slate-900/60',
    pillBg: 'bg-cyan-500/20', pillText: 'text-cyan-200', pillBorder: 'border-cyan-500/30',
    buttonBg: 'bg-cyan-600 hover:bg-cyan-500', buttonShadow: 'shadow-cyan-600/30',
    iconBg: 'bg-cyan-100 dark:bg-cyan-500/20', iconText: 'text-cyan-600 dark:text-cyan-400',
    dropCap: 'first-letter:text-cyan-600 dark:first-letter:text-cyan-500',
    glowBg: 'bg-cyan-500/10',
    sidebarGradient: 'from-cyan-500/10',
    svgPattern: (
      <svg className="absolute inset-0 w-full h-[120%] opacity-[0.03] dark:opacity-[0.04] text-cyan-900 dark:text-cyan-500 pointer-events-none z-0 hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
        <polygon points="0,100 15,60 35,85 50,40 75,70 100,20 100,100" opacity="0.6"/>
        <polygon points="0,100 10,80 25,95 40,65 60,90 85,50 100,80 100,100" opacity="0.4"/>
        <polygon points="20,100 30,50 45,75 65,30 80,60 100,45 100,100" opacity="0.2"/>
      </svg>
    )
  },
  'se-asia-peat-swamp': {
    heroGradient: 'from-emerald-950/90 via-stone-900/60',
    pillBg: 'bg-emerald-500/20', pillText: 'text-emerald-200', pillBorder: 'border-emerald-500/30',
    buttonBg: 'bg-emerald-600 hover:bg-emerald-500', buttonShadow: 'shadow-emerald-600/30',
    iconBg: 'bg-emerald-100 dark:bg-emerald-500/20', iconText: 'text-emerald-600 dark:text-emerald-400',
    dropCap: 'first-letter:text-emerald-600 dark:first-letter:text-emerald-500',
    glowBg: 'bg-emerald-500/10',
    sidebarGradient: 'from-emerald-500/10',
    svgPattern: (
      <svg className="absolute inset-0 w-full h-[120%] opacity-[0.03] dark:opacity-[0.04] text-emerald-900 dark:text-emerald-500 pointer-events-none z-0 hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10,0 Q15,30 5,60 T15,100" />
        <path d="M25,0 Q20,40 30,70 T20,100" />
        <path d="M45,0 Q55,20 40,50 T50,100" />
        <path d="M65,0 Q60,35 75,65 T65,100" />
        <path d="M85,0 Q95,25 80,55 T90,100" />
        <path d="M70,80 C80,75 90,80 85,90 C80,100 65,95 70,80 Z" fill="currentColor" opacity="0.3" stroke="none" />
        <path d="M30,20 C40,15 45,25 35,30 C25,35 20,25 30,20 Z" fill="currentColor" opacity="0.3" stroke="none" />
      </svg>
    )
  },
  'central-american-river': {
    heroGradient: 'from-orange-950/90 via-stone-900/60',
    pillBg: 'bg-orange-500/20', pillText: 'text-orange-200', pillBorder: 'border-orange-500/30',
    buttonBg: 'bg-orange-600 hover:bg-orange-500', buttonShadow: 'shadow-orange-600/30',
    iconBg: 'bg-orange-100 dark:bg-orange-500/20', iconText: 'text-orange-600 dark:text-orange-400',
    dropCap: 'first-letter:text-orange-600 dark:first-letter:text-orange-500',
    glowBg: 'bg-orange-500/10',
    sidebarGradient: 'from-orange-500/10',
    svgPattern: (
      <svg className="absolute inset-0 w-full h-[120%] opacity-[0.03] dark:opacity-[0.04] text-orange-900 dark:text-orange-500 pointer-events-none z-0 hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" opacity="0.4"/>
        <path d="M0,70 Q30,50 60,70 T100,70 L100,100 L0,100 Z" opacity="0.2"/>
        <circle cx="20" cy="20" r="15" opacity="0.1" />
      </svg>
    )
  },
  'asian-hillstream': {
    heroGradient: 'from-slate-900/90 via-slate-800/60',
    pillBg: 'bg-slate-500/20', pillText: 'text-slate-200', pillBorder: 'border-slate-500/30',
    buttonBg: 'bg-slate-700 hover:bg-slate-600', buttonShadow: 'shadow-slate-700/30',
    iconBg: 'bg-slate-200 dark:bg-slate-700/50', iconText: 'text-slate-700 dark:text-slate-300',
    dropCap: 'first-letter:text-slate-700 dark:first-letter:text-slate-400',
    glowBg: 'bg-slate-500/10',
    sidebarGradient: 'from-slate-500/10',
    svgPattern: (
      <svg className="absolute inset-0 w-full h-[120%] opacity-[0.03] dark:opacity-[0.04] text-slate-900 dark:text-slate-400 pointer-events-none z-0 hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
        <ellipse cx="20" cy="80" rx="30" ry="15" opacity="0.5"/>
        <ellipse cx="80" cy="90" rx="40" ry="20" opacity="0.3"/>
        <ellipse cx="50" cy="100" rx="35" ry="18" opacity="0.4"/>
      </svg>
    )
  },
  'lake-kutubu': {
    heroGradient: 'from-blue-950/90 via-slate-900/60',
    pillBg: 'bg-blue-500/20', pillText: 'text-blue-200', pillBorder: 'border-blue-500/30',
    buttonBg: 'bg-blue-600 hover:bg-blue-500', buttonShadow: 'shadow-blue-600/30',
    iconBg: 'bg-blue-100 dark:bg-blue-500/20', iconText: 'text-blue-600 dark:text-blue-400',
    dropCap: 'first-letter:text-blue-600 dark:first-letter:text-blue-500',
    glowBg: 'bg-blue-500/10',
    sidebarGradient: 'from-blue-500/10',
    svgPattern: (
      <svg className="absolute inset-0 w-full h-[120%] opacity-[0.03] dark:opacity-[0.04] text-blue-900 dark:text-blue-500 pointer-events-none z-0 hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20,100 L20,30 M25,100 L25,40 M30,100 L30,20" opacity="0.5"/>
        <path d="M70,100 L70,30 M75,100 L75,50 M80,100 L80,25" opacity="0.5"/>
      </svg>
    )
  },
  'default': {
    heroGradient: 'from-indigo-950/90 via-slate-900/60',
    pillBg: 'bg-indigo-500/20', pillText: 'text-indigo-200', pillBorder: 'border-indigo-500/30',
    buttonBg: 'bg-indigo-600 hover:bg-indigo-500', buttonShadow: 'shadow-indigo-600/30',
    iconBg: 'bg-indigo-100 dark:bg-indigo-500/20', iconText: 'text-indigo-600 dark:text-indigo-400',
    dropCap: 'first-letter:text-indigo-600 dark:first-letter:text-indigo-400',
    glowBg: 'bg-indigo-500/10',
    sidebarGradient: 'from-indigo-500/10',
    svgPattern: null
  }
};
// ------------------------------

export const HabitatsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const habitat = useMemo(() => habitatsData.find((h) => h.id === slug), [slug]);
  const theme = habitat ? (habitatThemes[habitat.id] || habitatThemes['default']) : habitatThemes['default'];

  const habitatSpecies = useMemo(() => {
    if (!habitat || !allSpecies) return [];
    return allSpecies.filter((s) => habitat.speciesIds.includes(s.slug));
  }, [habitat]);

  if (!habitat) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Habitat not found</h2>
        <Link to="/habitats" className="mt-4 text-indigo-600 hover:underline font-medium">
          Back to Explore
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSpecies = () => {
    const yOffset = -80; 
    const element = document.getElementById('species-list');
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <AnimatedTransition>
      <div className="bg-slate-50 dark:bg-[#0c0a09] min-h-screen pb-16 md:pb-20 font-sans relative overflow-hidden">
        
        {theme.svgPattern}

        {/* 1. Immersive Hero Section - Mobile Optimized */}
        <div className="relative h-[55vh] min-h-[450px] md:h-[70vh] w-full flex items-end z-10">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={habitat.imageUrl} 
              alt={habitat.title}
              className="w-full h-full object-cover transform scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${theme.heroGradient} to-transparent`} />
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Image Attribution - reusing existing component */}
            <ImageAttribution credit={habitat.imageCredit} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 md:pb-24">
            <Link 
              to="/habitats"
              className="inline-flex items-center text-white/90 hover:text-white mb-4 md:mb-6 w-fit transition-colors backdrop-blur-md bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium border border-white/20 hover:bg-white/20"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              All Habitats
            </Link>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6"
            >
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2.5 py-1 ${theme.pillBg} ${theme.pillText} border ${theme.pillBorder} rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1`}>
                    <MapPin className="w-3 h-3" /> Wild Origin
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 md:mb-4 tracking-tight leading-tight">
                  {habitat.title}
                </h1>
                <p className="text-base sm:text-lg md:text-2xl text-slate-200 font-light leading-relaxed line-clamp-2 md:line-clamp-none">
                  {habitat.subtitle}
                </p>
              </div>
              
              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <button 
                  onClick={scrollToSpecies}
                  className={`flex-1 md:flex-none flex justify-center items-center gap-2 ${theme.buttonBg} text-white px-5 md:px-6 py-2.5 md:py-3 rounded-xl text-sm md:text-base font-semibold transition-all shadow-lg ${theme.buttonShadow}`}
                >
                  <Fish className="w-4 h-4 md:w-5 md:h-5" />
                  View Species
                </button>
                <button 
                  onClick={handleShare}
                  className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white w-10 h-10 md:w-12 md:h-12 rounded-xl transition-all"
                >
                  {copied ? <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" /> : <Share2 className="w-4 h-4 md:w-5 md:h-5" />}
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2. Scientific Water Parameters Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-6 md:-mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-stone-900 rounded-2xl shadow-xl border border-slate-200 dark:border-stone-800 p-3 md:p-3 grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-2 md:gap-2 divide-x-0 md:divide-x divide-slate-100 dark:divide-stone-800"
          >
            <div className="px-2 md:px-4 flex flex-row items-center gap-3">
              <div className={`${theme.iconBg} p-2 md:p-2.5 rounded-full ${theme.iconText} shrink-0`}>
                <TestTube className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] md:text-[10px] font-bold text-slate-500 dark:text-stone-400 uppercase tracking-widest mb-0.5 truncate">Acidity (pH)</p>
                <p className="font-bold text-sm md:text-base text-slate-900 dark:text-white truncate">{habitat.waterParameters?.ph || 'N/A'}</p>
              </div>
            </div>
            <div className="px-2 md:px-4 flex flex-row items-center gap-3 border-l border-slate-100 dark:border-stone-800">
              <div className={`${theme.iconBg} p-2 md:p-2.5 rounded-full ${theme.iconText} shrink-0`}>
                <ShieldAlert className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] md:text-[10px] font-bold text-slate-500 dark:text-stone-400 uppercase tracking-widest mb-0.5 truncate">Hardness</p>
                <p className="font-bold text-sm md:text-base text-slate-900 dark:text-white truncate">{habitat.waterParameters?.gh || 'N/A'}</p>
              </div>
            </div>
            
            <div className="col-span-2 h-px bg-slate-100 dark:bg-stone-800 md:hidden" />

            <div className="px-2 md:px-4 flex flex-row items-center gap-3">
              <div className={`${theme.iconBg} p-2 md:p-2.5 rounded-full ${theme.iconText} shrink-0`}>
                <Activity className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] md:text-[10px] font-bold text-slate-500 dark:text-stone-400 uppercase tracking-widest mb-0.5 truncate">Buffer (KH)</p>
                <p className="font-bold text-sm md:text-base text-slate-900 dark:text-white truncate">{habitat.waterParameters?.kh || 'N/A'}</p>
              </div>
            </div>
            <div className="px-2 md:px-4 flex flex-row items-center gap-3 border-l border-slate-100 dark:border-stone-800">
              <div className={`${theme.iconBg} p-2 md:p-2.5 rounded-full ${theme.iconText} shrink-0`}>
                <Zap className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] md:text-[10px] font-bold text-slate-500 dark:text-stone-400 uppercase tracking-widest mb-0.5 truncate">Conductivity</p>
                <p className="font-bold text-sm md:text-base text-slate-900 dark:text-white truncate">{habitat.waterParameters?.tds || 'N/A'}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. Deep Dive Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            
            <div className="lg:col-span-7 space-y-10 md:space-y-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className={`${theme.iconBg} p-2 md:p-2.5 rounded-xl`}>
                    <MapPin className={`w-5 h-5 md:w-6 md:h-6 ${theme.iconText}`} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white m-0">The Environment</h2>
                </div>
                <p className={`text-slate-600 dark:text-stone-300 leading-relaxed text-base md:text-lg whitespace-pre-line first-letter:text-5xl md:first-letter:text-6xl first-letter:font-black ${theme.dropCap} first-letter:mr-2 md:first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]`}>
                  {habitat.description}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200/50 dark:border-stone-800/50 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 ${theme.glowBg} rounded-bl-full -mr-4 -mt-4 blur-2xl md:blur-3xl`} />
                <div className="flex items-center gap-3 mb-4 md:mb-6 relative z-10">
                  <div className={`${theme.iconBg} p-2 md:p-2.5 rounded-xl`}>
                    <Leaf className={`w-5 h-5 md:w-6 md:h-6 ${theme.iconText}`} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white m-0">Ecology & Survival</h2>
                </div>
                <p className="text-slate-600 dark:text-stone-300 leading-relaxed text-base md:text-lg whitespace-pre-line relative z-10">
                  {habitat.ecology}
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:sticky lg:top-24 bg-slate-900 dark:bg-stone-900 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-slate-800 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.sidebarGradient} to-transparent pointer-events-none`} />
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center gap-2 md:gap-3 relative z-10">
                  <Beaker className={`w-5 h-5 md:w-6 md:h-6 ${theme.iconText}`} />
                  Aquarium Setup Guide
                </h3>
                
                <ul className="space-y-6 md:space-y-8 relative z-10">
                  <li className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <Layers className={`w-5 h-5 md:w-6 md:h-6 ${theme.iconText}`} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-0.5 md:mb-1 text-sm md:text-base">Substrate</h4>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{habitat.setupGuide?.substrate}</p>
                    </div>
                  </li>
                  <li className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`md:w-6 md:h-6 ${theme.iconText}`}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-0.5 md:mb-1 text-sm md:text-base">Hardscape</h4>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{habitat.setupGuide?.hardscape}</p>
                    </div>
                  </li>
                  <li className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <Leaf className={`w-5 h-5 md:w-6 md:h-6 ${theme.iconText}`} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-0.5 md:mb-1 text-sm md:text-base">Flora</h4>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{habitat.setupGuide?.flora}</p>
                    </div>
                  </li>
                  <li className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <Lightbulb className={`w-5 h-5 md:w-6 md:h-6 ${theme.iconText}`} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-0.5 md:mb-1 text-sm md:text-base">Lighting</h4>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{habitat.setupGuide?.lighting}</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>

          </div>
        </div>

        {/* 4. Species Grid Section */}
        <div id="species-list" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 pt-10 md:pt-16 border-t border-slate-200 dark:border-stone-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-10">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3">
                Native Inhabitants
              </h2>
              <p className="text-sm md:text-lg text-slate-600 dark:text-stone-400 max-w-2xl">
                Discover {habitatSpecies.length} species from our database that naturally occur in this biotope.
              </p>
            </div>
          </div>
          
          {habitatSpecies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {habitatSpecies.map((s, index) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <SpeciesCard data={s as any} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-stone-900 rounded-2xl md:rounded-3xl p-10 md:p-16 text-center shadow-sm border border-slate-200 dark:border-stone-800">
              <Fish className="w-12 h-12 md:w-16 md:h-16 text-slate-300 dark:text-stone-700 mx-auto mb-4 md:mb-6" />
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">No species found</h3>
              <p className="text-sm md:text-base text-slate-500 dark:text-stone-400 max-w-md mx-auto">
                We haven't added any species native to this habitat to our database yet. Check back later!
              </p>
            </div>
          )}
        </div>

      </div>
    </AnimatedTransition>
  );
};
