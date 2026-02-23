import { useState, useMemo, Suspense, lazy, useRef, useEffect, useCallback } from 'react';
import { Search, SlidersHorizontal, Fish, Globe2, Activity, Box, Droplets, PawPrint, X, Thermometer, TestTube, Sparkles, TrendingUp, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Fuse from 'fuse.js';
import { allSpecies } from '../data/species';
import { searchBiotopes } from '../data/biotopes';
import { SEOHead } from '../components/seo/SEOHead';
import { SpeciesGridSkeleton } from '../components/ui/Skeleton';
import { FilterBadge } from '../components/ui/FilterBadge';
import { PageTransition } from '../components/layout/PageTransition';
import { Slider } from '../components/ui/Slider';
import { CheckboxGroup } from '../components/ui/CheckboxGroup';
import { MobileFilterDrawer } from '../components/ui/MobileFilterDrawer';
import { MobileFilterButton } from '../components/ui/MobileFilterButton';
import { cn } from '../lib/utils';
import type { Difficulty, Species, Region, EthologyTag } from '../types/species';

const SpeciesCard = lazy(() => import('../components/species/SpeciesCard').then(module => ({ default: module.SpeciesCard })));

const HEADER_IMAGE_URL = 'https://images.unsplash.com/photo-1573472420143-0c68f179bdc7?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

// Pagination settings
const INITIAL_LOAD = 24; // First page load
const LOAD_MORE_INCREMENT = 12; // Load 12 more on each scroll

interface Filters {
  level: Difficulty | null;
  region: Region | null;
  tankSize: number | null;
  biotope: string;
  type: 'fish' | 'invertebrate' | null;
  tempMin: number;
  tempMax: number;
  phMin: number;
  phMax: number;
  maxBodySize: number;
  diet: 'all' | 'carnivore' | 'herbivore' | 'omnivore';
  temperament: 'all' | 'peaceful' | 'semi-aggressive';
  behaviorTags: EthologyTag[];
}

const SpeciesIndexPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [biotopeSuggestions, setBiotopeSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  // Lazy loading state
  const [displayCount, setDisplayCount] = useState(INITIAL_LOAD);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  
  const [filters, setFilters] = useState<Filters>({
    level: null,
    region: null,
    tankSize: null,
    biotope: '',
    type: null,
    tempMin: 15,
    tempMax: 30,
    phMin: 5.0,
    phMax: 9.0,
    maxBodySize: 100,
    diet: 'all',
    temperament: 'all',
    behaviorTags: []
  });

  const fuse = useMemo(() => {
    return new Fuse(allSpecies, {
      keys: [
        { name: 'taxonomy.commonName', weight: 2 },
        { name: 'taxonomy.scientificName', weight: 1.5 },
        { name: 'behavior.description', weight: 0.5 },
        { name: 'behavior.tags', weight: 1 },
        { name: 'taxonomy.origin', weight: 0.3 }
      ],
      threshold: 0.3,
      ignoreLocation: true,
      useExtendedSearch: true
    });
  }, []);

  const applyFilters = (species: Species): boolean => {
    if (filters.level && species.care.difficulty !== filters.level) return false;
    if (filters.region && species.taxonomy.region !== filters.region) return false;
    if (filters.tankSize && species.environment.minTankSizeLiters > filters.tankSize) return false;
    
    if (filters.biotope) {
      const bio = (species.taxonomy.biotope || '').toLowerCase();
      const term = filters.biotope.toLowerCase();
      if (!bio.includes(term)) return false;
    }

    if (filters.type) {
      const isShrimp = species.visuals.iconShape === 'shrimp';
      if (filters.type === 'invertebrate' && !isShrimp) return false;
      if (filters.type === 'fish' && isShrimp) return false;
    }

    // Advanced filters (always applied now)
    if (species.environment.tempC.min > filters.tempMax || species.environment.tempC.max < filters.tempMin) return false;
    if (species.environment.ph.min > filters.phMax || species.environment.ph.max < filters.phMin) return false;
    if (species.visuals.adultSizeCM > filters.maxBodySize) return false;
    if (filters.diet !== 'all' && species.care.diet !== filters.diet) return false;
    
    if (filters.temperament !== 'all') {
      if (filters.temperament === 'peaceful' && !species.behavior.tags.includes('peaceful')) return false;
      if (filters.temperament === 'semi-aggressive' && !species.behavior.tags.includes('semi-aggressive')) return false;
    }
    
    if (filters.behaviorTags.length > 0) {
      const hasAllTags = filters.behaviorTags.every(tag => species.behavior.tags.includes(tag));
      if (!hasAllTags) return false;
    }
    
    return true;
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.level) count++;
    if (filters.region) count++;
    if (filters.tankSize) count++;
    if (filters.biotope) count++;
    if (filters.type) count++;
    if (filters.diet !== 'all') count++;
    if (filters.temperament !== 'all') count++;
    if (filters.maxBodySize !== 100) count++;
    if (filters.tempMin !== 15 || filters.tempMax !== 30) count++;
    if (filters.phMin !== 5.0 || filters.phMax !== 9.0) count++;
    if (filters.behaviorTags.length > 0) count++;
    return count;
  }, [filters]);

  const filteredSpecies = useMemo(() => {
    let results: Species[] = allSpecies;

    if (searchTerm.trim()) {
      results = fuse.search(searchTerm).map(r => r.item);
    }

    const filtered = results.filter(applyFilters);
    const uniqueSpecies = Array.from(
      new Map(filtered.map(s => [s.id, s])).values()
    );
    
    return uniqueSpecies;
  }, [searchTerm, filters, fuse]);

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(INITIAL_LOAD);
  }, [filteredSpecies]);

  // Get the species to display (with lazy loading)
  const displayedSpecies = useMemo(() => {
    return filteredSpecies.slice(0, displayCount);
  }, [filteredSpecies, displayCount]);

  const hasMore = displayCount < filteredSpecies.length;

  // Load more handler
  const loadMore = useCallback(() => {
    if (!hasMore || isLoadingMore) return;
    
    setIsLoadingMore(true);
    // Simulate loading delay for smooth UX
    setTimeout(() => {
      setDisplayCount(prev => Math.min(prev + LOAD_MORE_INCREMENT, filteredSpecies.length));
      setIsLoadingMore(false);
    }, 300);
  }, [hasMore, isLoadingMore, filteredSpecies.length]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
          loadMore();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasMore, isLoadingMore, loadMore]);

  const resetFilters = () => {
    setFilters({
      level: null,
      region: null,
      tankSize: null,
      biotope: '',
      type: null,
      tempMin: 15,
      tempMax: 30,
      phMin: 5.0,
      phMax: 9.0,
      maxBodySize: 100,
      diet: 'all',
      temperament: 'all',
      behaviorTags: []
    });
    setSearchTerm('');
    setDisplayCount(INITIAL_LOAD);
  };

  const handleBiotopeInput = (value: string) => {
    setFilters({ ...filters, biotope: value });
    if (value.length >= 2) {
      const matches = searchBiotopes(value, 6);
      setBiotopeSuggestions(matches);
      setShowSuggestions(matches.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const selectBiotope = (biotope: any) => {
    setFilters({ ...filters, biotope: biotope.label });
    setShowSuggestions(false);
  };

  const activeFilters = [
    filters.level && { key: 'difficulty', label: 'Level', value: filters.level, clear: () => setFilters({ ...filters, level: null }) },
    filters.region && { key: 'region', label: 'Region', value: filters.region, clear: () => setFilters({ ...filters, region: null }) },
    filters.tankSize && { key: 'tank', label: 'Tank', value: `≤${filters.tankSize}L`, clear: () => setFilters({ ...filters, tankSize: null }) },
    filters.biotope && { key: 'biotope', label: 'Biotope', value: filters.biotope, clear: () => setFilters({ ...filters, biotope: '' }) },
    filters.type && { key: 'category', label: 'Type', value: filters.type, clear: () => setFilters({ ...filters, type: null }) },
    filters.diet !== 'all' && { key: 'diet', label: 'Diet', value: filters.diet, clear: () => setFilters({ ...filters, diet: 'all' }) },
    filters.temperament !== 'all' && { key: 'temperament', label: 'Temperament', value: filters.temperament, clear: () => setFilters({ ...filters, temperament: 'all' }) },
  ].filter(Boolean);

  const hasActiveFilters = activeFilters.length > 0 || searchTerm;
  const regions: Region[] = ['South America', 'Asia', 'Africa', 'Central America'];

  // Unified Filter Content
  const FilterContent = () => (
    <div className="space-y-6">
      {/* BASIC FILTERS */}
      <div className="space-y-5">
        <div className="flex items-center gap-2 pb-2 border-b-2 border-indigo-100 dark:border-indigo-900/50">
          <SlidersHorizontal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <h4 className="text-xs font-black text-indigo-900 dark:text-indigo-300 uppercase tracking-wider">Basic Filters</h4>
        </div>

        <div className="space-y-3">
          <label className="text-[11px] md:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center">
            <Activity className="w-3.5 h-3.5 mr-1.5 text-indigo-500" /> Level
          </label>
          <div className="flex flex-wrap gap-2">
            <FilterChip 
              label="Beginner" 
              icon={<Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5" />}
              isActive={filters.level === 'beginner'} 
              onClick={() => setFilters({ ...filters, level: filters.level === 'beginner' ? null : 'beginner' })} 
              colorClass="text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100 dark:text-emerald-300 dark:bg-emerald-950/30 dark:border-emerald-800" 
              activeClass="bg-emerald-600 text-white border-emerald-700 shadow-lg" 
            />
            <FilterChip 
              label="Medium" 
              icon={<TrendingUp className="w-3 h-3 md:w-3.5 md:h-3.5" />}
              isActive={filters.level === 'medium'} 
              onClick={() => setFilters({ ...filters, level: filters.level === 'medium' ? null : 'medium' })} 
              colorClass="text-amber-700 bg-amber-50 border-amber-200 hover:bg-amber-100 dark:text-amber-300 dark:bg-amber-950/30 dark:border-amber-800" 
              activeClass="bg-amber-600 text-white border-amber-700 shadow-lg" 
            />
            <FilterChip 
              label="Expert" 
              icon={<Activity className="w-3 h-3 md:w-3.5 md:h-3.5" />}
              isActive={filters.level === 'expert'} 
              onClick={() => setFilters({ ...filters, level: filters.level === 'expert' ? null : 'expert' })} 
              colorClass="text-rose-700 bg-rose-50 border-rose-200 hover:bg-rose-100 dark:text-rose-300 dark:bg-rose-950/30 dark:border-rose-800" 
              activeClass="bg-rose-600 text-white border-rose-700 shadow-lg" 
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[11px] md:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center">
            <Globe2 className="w-3.5 h-3.5 mr-1.5 text-indigo-500" /> Region
          </label>
          <div className="grid grid-cols-2 gap-2">
            {regions.map(region => (
              <FilterChip 
                key={region}
                label={region.replace(' ', '\n')}
                isActive={filters.region === region} 
                onClick={() => setFilters({ ...filters, region: filters.region === region ? null : region })} 
                className="text-center leading-tight py-2.5"
              />
            ))}
          </div>
        </div>

        <div className="space-y-2.5">
          <label className="text-[11px] md:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center">
            <Box className="w-3.5 h-3.5 mr-1.5 text-indigo-500" /> Tank Size
          </label>
          <select 
            className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm md:text-base rounded-xl px-3 md:px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all font-medium"
            value={filters.tankSize || ''}
            onChange={(e) => setFilters({ ...filters, tankSize: e.target.value === '' ? null : Number(e.target.value) })}
          >
            <option value="">Any Size</option>
            <option value="30">🪴 Max 30L (Nano)</option>
            <option value="60">🐠 Max 60L (Small)</option>
            <option value="120">🏠 Max 120L (Medium)</option>
            <option value="200">🏰 Max 200L (Large)</option>
          </select>
        </div>

        <div className="space-y-2.5 relative">
          <label className="text-[11px] md:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center">
            <Droplets className="w-3.5 h-3.5 mr-1.5 text-indigo-500" /> Biotope
          </label>
          <input 
            type="text" 
            value={filters.biotope}
            onChange={(e) => handleBiotopeInput(e.target.value)}
            onFocus={() => filters.biotope.length >= 2 && setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="e.g. 'Amazon'..."
            className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm md:text-base rounded-xl px-3 md:px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          />
          
          {showSuggestions && biotopeSuggestions.length > 0 && (
            <div className="absolute z-50 w-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl mt-1 max-h-60 overflow-y-auto">
              {biotopeSuggestions.map((b) => (
                <button
                  key={b.id}
                  onClick={() => selectBiotope(b)}
                  className="w-full text-left px-4 py-3 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-0 group"
                >
                  <div className="font-bold text-gray-800 dark:text-gray-200 text-sm group-hover:text-indigo-700 dark:group-hover:text-indigo-400">{b.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{b.description}</div>
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1">
            {['Blackwater', 'Amazon', 'Rice Paddies'].map(tag => (
              <button 
                key={tag}
                onClick={() => setFilters({ ...filters, biotope: tag })}
                className="px-2.5 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-600 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400 text-[10px] md:text-[11px] font-bold uppercase rounded-lg border border-gray-200 dark:border-gray-700 transition-all whitespace-nowrap"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2.5">
          <label className="text-[11px] md:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center">
            <PawPrint className="w-3.5 h-3.5 mr-1.5 text-indigo-500" /> Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            <FilterChip 
              label="Fish" 
              icon={<Fish className="w-3 h-3 md:w-3.5 md:h-3.5" />}
              isActive={filters.type === 'fish'} 
              onClick={() => setFilters({ ...filters, type: filters.type === 'fish' ? null : 'fish' })} 
              className="justify-center"
            />
            <FilterChip 
              label="Inverts" 
              icon={<PawPrint className="w-3 h-3 md:w-3.5 md:h-3.5" />}
              isActive={filters.type === 'invertebrate'} 
              onClick={() => setFilters({ ...filters, type: filters.type === 'invertebrate' ? null : 'invertebrate' })} 
              className="justify-center"
            />
          </div>
        </div>
      </div>

      {/* ADVANCED FILTERS */}
      <div className="space-y-5 pt-5 border-t-2 border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 pb-2 border-b-2 border-purple-100 dark:border-purple-900/50">
          <Thermometer className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <h4 className="text-xs font-black text-purple-900 dark:text-purple-300 uppercase tracking-wider">Water Parameters</h4>
        </div>

        <div className="bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-950/30 dark:to-orange-950/30 p-4 rounded-xl border-2 border-rose-200 dark:border-rose-800">
          <label className="text-xs font-bold text-rose-900 dark:text-rose-300 mb-3 block flex items-center">
            <Thermometer className="w-4 h-4 mr-2" /> Temperature
          </label>
          <Slider 
            min={15} 
            max={35} 
            step={0.5}
            value={[filters.tempMin, filters.tempMax]} 
            onChange={([tempMin, tempMax]) => setFilters({ ...filters, tempMin, tempMax })} 
            formatLabel={(v) => `${v}°C`} 
          />
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-4 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
          <label className="text-xs font-bold text-cyan-900 dark:text-cyan-300 mb-3 block flex items-center">
            <TestTube className="w-4 h-4 mr-2" /> pH Level
          </label>
          <Slider 
            min={4.0} 
            max={9.0} 
            step={0.1} 
            value={[filters.phMin, filters.phMax]} 
            onChange={([phMin, phMax]) => setFilters({ ...filters, phMin, phMax })} 
            formatLabel={(v) => v.toFixed(1)} 
          />
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 p-4 rounded-xl border-2 border-amber-200 dark:border-amber-800">
          <label className="text-xs font-bold text-amber-900 dark:text-amber-300 mb-3 block flex items-center">
            <Box className="w-4 h-4 mr-2" /> Max Body Size: {filters.maxBodySize}cm
          </label>
          <input 
            type="range" 
            min="2" 
            max="100" 
            step="1"
            value={filters.maxBodySize} 
            onChange={(e) => setFilters({ ...filters, maxBodySize: Number(e.target.value) })} 
            className="w-full h-2 bg-amber-200 dark:bg-amber-800/30 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />
        </div>

        <div className="space-y-2.5">
          <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center">
            <Activity className="w-4 h-4 mr-2" /> Diet
          </label>
          <select 
            value={filters.diet} 
            onChange={(e) => setFilters({ ...filters, diet: e.target.value as any })} 
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          >
            <option value="all">Any Diet</option>
            <option value="omnivore">🍽️ Omnivore</option>
            <option value="carnivore">🥩 Carnivore</option>
            <option value="herbivore">🌿 Herbivore</option>
          </select>
        </div>

        <div className="space-y-2.5">
          <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center">
            <Activity className="w-4 h-4 mr-2" /> Temperament
          </label>
          <select 
            value={filters.temperament} 
            onChange={(e) => setFilters({ ...filters, temperament: e.target.value as any })} 
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          >
            <option value="all">Any</option>
            <option value="peaceful">😌 Peaceful</option>
            <option value="semi-aggressive">⚡ Semi-Aggressive</option>
          </select>
        </div>

        <div className="space-y-2.5">
          <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center">
            <Activity className="w-4 h-4 mr-2" /> Behavior Tags
          </label>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700">
            <CheckboxGroup 
              options={['peaceful', 'schooler', 'bottom_dweller', 'surface_dweller', 'nocturnal', 'algae_eater', 'jumper', 'nano_safe']} 
              selected={filters.behaviorTags} 
              onChange={(behaviorTags) => setFilters({ ...filters, behaviorTags: behaviorTags as EthologyTag[] })} 
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-950 pb-16 md:pb-20">
        <SEOHead 
          title="Species Database - AquaGuide" 
          description="Browse our complete collection of aquarium fish and invertebrates."
        />

        {/* Hero Section with Background Image */}
        <div className="relative h-[45vh] min-h-[400px] md:h-[55vh] md:min-h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={HEADER_IMAGE_URL}
              alt="Aquarium species"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-cyan-900/30"></div>
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-8 md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-4 md:mb-5 text-white/90 text-xs md:text-sm font-semibold shadow-lg">
                <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>{allSpecies.length} Species</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 tracking-tight leading-[1.1]">
                Species Database
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-2xl">
                Discover detailed care guides and habitat requirements for freshwater fish and invertebrates.
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-2xl"
              >
                <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-1.5 md:p-2 shadow-2xl border-2 border-gray-200 dark:border-gray-700">
                  <div className="pl-3 md:pl-4 text-gray-400">
                    <Search className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search by name or region..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 dark:text-gray-100 placeholder:text-gray-400 bg-transparent border-none focus:ring-0 outline-none font-medium"
                  />
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm('')} 
                      className="mr-1.5 md:mr-2 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" 
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-4 md:-mt-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            
            {/* Desktop Unified Filter Sidebar */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-xl md:rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-700 sticky top-24">
                <div className="flex items-center justify-between mb-5 pb-4 border-b-2 border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-gray-900 dark:text-white flex items-center text-sm md:text-base">
                    <SlidersHorizontal className="w-4 h-4 md:w-5 md:h-5 mr-2 text-indigo-500" /> All Filters
                  </h3>
                  {hasActiveFilters && (
                    <button 
                      onClick={resetFilters} 
                      className="text-xs text-rose-600 dark:text-rose-400 font-bold hover:underline flex items-center gap-1"
                    >
                      <X className="w-3 h-3" /> Reset
                    </button>
                  )}
                </div>
                <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                  <FilterContent />
                </div>
              </div>
            </aside>

            {/* Mobile Filter Drawer */}
            <MobileFilterDrawer isOpen={isMobileDrawerOpen} onClose={() => setIsMobileDrawerOpen(false)}>
              <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg">All Filters</h3>
                {hasActiveFilters && (
                  <button 
                    onClick={resetFilters} 
                    className="text-xs text-rose-600 font-bold hover:underline flex items-center gap-1"
                  >
                    <X className="w-3 h-3" /> Reset
                  </button>
                )}
              </div>
              <FilterContent />
            </MobileFilterDrawer>

            {/* Mobile Filter Button */}
            <MobileFilterButton 
              onClick={() => setIsMobileDrawerOpen(true)} 
              activeFiltersCount={activeFilterCount} 
            />

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-4 md:space-y-6">
              {/* Results Header */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-700 p-3 md:p-5"
              >
                {activeFilters.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4 pb-3 md:pb-4 border-b-2 border-gray-200 dark:border-gray-700">
                    {activeFilters.map((filter: any) => (
                      <FilterBadge key={filter.key} label={filter.label} value={filter.value} onRemove={filter.clear} />
                    ))}
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">Found</span>
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg md:rounded-xl font-black text-base md:text-lg shadow-lg">
                      {filteredSpecies.length}
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400 hidden sm:inline">Species</span>
                  </div>
                  
                  {hasActiveFilters && (
                    <button 
                      onClick={resetFilters} 
                      className="text-xs md:text-sm font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 bg-rose-50 dark:bg-rose-950/30 hover:bg-rose-100 dark:hover:bg-rose-900/40 px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl transition-all flex items-center gap-1.5 md:gap-2 border-2 border-rose-200 dark:border-rose-800 shadow-sm hover:shadow-md self-start sm:self-auto"
                    >
                      <X className="w-3.5 h-3.5 md:w-4 md:h-4" /> Clear Filters
                    </button>
                  )}
                </div>
              </motion.div>

              {/* Species Grid */}
              {filteredSpecies.length > 0 ? (
                <>
                  <Suspense fallback={<SpeciesGridSkeleton />}>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5"
                    >
                      {displayedSpecies.map((s: Species, index: number) => (
                        <motion.div
                          key={s.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.5) }}
                        >
                          <SpeciesCard data={s} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </Suspense>

                  {/* Load More Trigger & Indicator */}
                  {hasMore && (
                    <div ref={loadMoreRef} className="py-8 flex justify-center">
                      {isLoadingMore && (
                        <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400">
                          <Loader2 className="w-6 h-6 animate-spin" />
                          <span className="text-sm font-semibold">Loading more species...</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Showing X of Y indicator */}
                  {displayedSpecies.length > 0 && (
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400 py-4">
                      Showing {displayedSpecies.length} of {filteredSpecies.length} species
                    </div>
                  )}
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12 md:py-20 bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl border-2 border-dashed border-gray-300 dark:border-gray-700 shadow-lg"
                >
                  <div className="animate-bounce mb-5 md:mb-6">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <Fish className="w-7 h-7 md:w-10 md:h-10 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">No Species Found</h3>
                  <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-5 md:mb-6 px-4">
                    Try adjusting your filters or search term.
                  </p>
                  <button 
                    onClick={resetFilters} 
                    className="px-5 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-sm md:text-base font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

const FilterChip = ({ 
  label, 
  icon,
  isActive, 
  onClick, 
  colorClass = "text-gray-700 bg-gray-50 border-gray-200 hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700", 
  activeClass = "bg-gradient-to-r from-indigo-600 to-blue-600 text-white border-indigo-700 shadow-lg",
  className = ""
}: any) => (
  <button 
    onClick={onClick} 
    className={cn(
      "px-3 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-wide border-2 transition-all duration-200 flex items-center gap-1.5 md:gap-2",
      isActive ? activeClass : colorClass,
      className
    )}
  >
    {icon}
    <span className="whitespace-nowrap">{label}</span>
  </button>
);

export default SpeciesIndexPage;