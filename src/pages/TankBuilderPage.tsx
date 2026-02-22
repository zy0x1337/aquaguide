import { useState, useEffect } from 'react';
import { Download, Share2, Check, Settings, Lightbulb, TrendingUp, Plus, Filter as FilterIcon, X, CheckCircle, AlertTriangle, Zap, Droplets, Wind, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEOHead } from '../components/seo/SEOHead';
import { TankItemCard } from '../components/tank-builder/TankItemCard';
import { AssetBrowser } from '../components/tank-builder/AssetBrowser';
import { calculateTankStats } from '../utils/tank-calculations';
import { generateSmartSuggestions, checkCompatibility } from '../utils/smart-suggestions';
import { generateShareURL, copyToClipboard, decodeTankFromURL } from '../utils/tank-share';
import { PRESET_TANKS } from '../data/builder';
import { TANK_PRESETS } from '../data/presets';
import { TankConfig, TankItem, HardscapeItem, SmartSuggestion } from '../types/builder';
import { Species } from '../types/species';
import { Plant } from '../types/plant';

const AUTOSAVE_KEY = 'tankBuilder_autosave';

export const TankBuilderPage = () => {
  const [tankConfig, setTankConfig] = useState<TankConfig>({
    ...PRESET_TANKS[2],
    substrate: 'gravel',
    hasFilter: false,
    hasHeater: false
  });
  const [customDimensions, setCustomDimensions] = useState({ length: 60, width: 30, height: 30 });
  const [items, setItems] = useState<TankItem[]>([]);
  const [copySuccess, setCopySuccess] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [showPresets, setShowPresets] = useState(false);
  const [showSetup, setShowSetup] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'equipment' | 'suggestions'>('overview');

  const [filters, setFilters] = useState({
    tempMin: 20,
    tempMax: 28,
    phMin: 6.0,
    phMax: 8.0,
    maxSize: 15,
    diet: 'all' as 'all' | 'carnivore' | 'herbivore' | 'omnivore',
    temperament: 'all' as 'all' | 'peaceful' | 'semi-aggressive',
    difficulty: 'all' as 'all' | 'beginner' | 'medium' | 'expert'
  });

  // Load from URL or LocalStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tankParam = params.get('tank');
    
    if (tankParam) {
      const decoded = decodeTankFromURL(tankParam);
      if (decoded) {
        setTankConfig(decoded.tankConfig);
        setItems(decoded.items);
        return;
      }
    }

    const saved = localStorage.getItem(AUTOSAVE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.tankConfig) setTankConfig(data.tankConfig);
        if (data.items) setItems(data.items);
        if (data.customDimensions) setCustomDimensions(data.customDimensions);
      } catch (e) {
        console.error('Failed to load autosave', e);
      }
    }
  }, []);

  // Autosave
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(AUTOSAVE_KEY, JSON.stringify({ tankConfig, items, customDimensions, timestamp: Date.now() }));
    }, 1000);
    return () => clearTimeout(timer);
  }, [tankConfig, items, customDimensions]);

  const updateCustomTank = () => {
    const volume = (customDimensions.length * customDimensions.width * customDimensions.height) / 1000;
    const aspectRatio = customDimensions.length / customDimensions.height;
    setTankConfig({ 
      ...tankConfig,
      name: 'Custom Tank', 
      ...customDimensions, 
      volume: Math.round(volume), 
      aspectRatio 
    });
  };

  const loadPreset = (presetId: string) => {
    const preset = TANK_PRESETS.find(p => p.id === presetId);
    if (!preset) return;

    setTankConfig({ ...preset.tankConfig, substrate: 'sand', hasFilter: false, hasHeater: false });
    const loadedItems: TankItem[] = preset.items.map((item, idx) => ({
      ...item,
      id: `${item.type}-${Date.now()}-${idx}`
    }));
    setItems(loadedItems);
    setShowPresets(false);
  };

  const addItem = (data: Species | Plant | HardscapeItem, type: 'fish' | 'plant' | 'hardscape') => {
    let itemId: string;
    if ('id' in data) { itemId = data.id; } else { itemId = (data as HardscapeItem).name; }
    
    // Smart default count for schooling fish
    let defaultCount = 1;
    if (type === 'fish') {
      const fish = data as Species;
      if (fish.behavior.minGroupSize && fish.behavior.minGroupSize > 1) {
        defaultCount = fish.behavior.minGroupSize;
      }
    }

    const newItem: TankItem = {
      id: `${type}-${itemId}-${Date.now()}`,
      type, 
      data,
      position: { x: 50, y: 50, z: 50 },
      count: type === 'fish' ? defaultCount : undefined,
      locked: false,
      notes: '',
      visuals: { rotation: 0, flipX: false, swayDelay: 0, floatSpeed: 3 }
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => setItems(items.filter(item => item.id !== id));
  
  const updateCount = (id: string, delta: number) => { 
    setItems(items.map(item => { 
      if (item.id === id && item.type === 'fish') { 
        const newCount = Math.max(1, (item.count || 1) + delta); 
        return { ...item, count: newCount }; 
      } 
      return item; 
    })); 
  };

  const updateNotes = (id: string, notes: string) => {
    setItems(items.map(item => item.id === id ? { ...item, notes } : item));
  };

  const handleShare = async () => {
    const url = generateShareURL(tankConfig, items);
    const success = await copyToClipboard(url);
    if (success) {
      setCopySuccess(true);
      window.history.replaceState({}, '', url);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const handleExport = () => {
    const text = generateShoppingList(items, tankConfig, stats, suggestions);
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `aquaguide-${tankConfig.name.replace(/\s+/g, '-').toLowerCase()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearAll = () => {
    if (confirm('Clear all items from your tank? This cannot be undone.')) {
      setItems([]);
    }
  };

  // Calculate stats and suggestions
  const stats = calculateTankStats(items, tankConfig);
  const suggestions = generateSmartSuggestions(items, tankConfig);
  const compatibilityIssues = checkCompatibility(items, tankConfig);

  const fishItems = items.filter(i => i.type === 'fish');
  const plantItems = items.filter(i => i.type === 'plant');
  const hardscapeItems = items.filter(i => i.type === 'hardscape');

  const setupProgress = [
    { label: 'Tank size set', done: tankConfig.volume > 0 },
    { label: 'Substrate chosen', done: !!tankConfig.substrate },
    { label: 'Filter added', done: tankConfig.hasFilter },
    { label: 'Heater added', done: tankConfig.hasHeater },
    { label: 'Fish added', done: fishItems.length > 0 },
  ];
  const progressPercentage = (setupProgress.filter(s => s.done).length / setupProgress.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pb-20">
      <SEOHead title="Tank Builder - Smart Aquarium Planner" description="Plan your aquarium with intelligent compatibility checks, equipment recommendations, and shopping lists." />
      
      {/* Enhanced Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="hidden sm:block w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-black text-base sm:text-lg text-slate-900 dark:text-white">
                  {tankConfig.name}
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {tankConfig.volume}L • {items.length} items • {progressPercentage.toFixed(0)}% complete
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowSetup(true)} 
                className="px-3 py-2 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Settings className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Setup</span>
              </button>
              <button 
                onClick={() => setShowPresets(true)} 
                className="px-3 py-2 text-xs font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 rounded-lg transition-colors shadow-lg flex items-center gap-1.5"
              >
                <Package className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Templates</span>
              </button>
              <button 
                onClick={handleShare} 
                className="px-3 py-2 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                {copySuccess ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copySuccess ? 'Copied!' : 'Share'}</span>
              </button>
              <button 
                onClick={handleExport} 
                className="px-3 py-2 text-xs font-bold bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Setup Progress */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 p-5 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-black text-slate-900 dark:text-white text-sm">Setup Progress</h3>
                <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {progressPercentage.toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-3 overflow-hidden mb-4">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                />
              </div>
              <div className="space-y-2">
                {setupProgress.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      step.done ? 'bg-gradient-to-br from-emerald-500 to-green-500' : 'bg-slate-300 dark:bg-slate-700'
                    }`}>
                      {step.done && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className={step.done ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-500 dark:text-slate-500'}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="flex border-b border-slate-200 dark:border-slate-800">
                {(['overview', 'equipment', 'suggestions'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 text-xs font-bold capitalize transition-colors ${
                      activeTab === tab 
                        ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-5">
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    {/* Stocking Level */}
                    <div>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-slate-600 dark:text-slate-400 font-semibold">Stocking Level</span>
                        <span className={`font-black text-lg ${
                          stats.stockingPercentage > 100 ? 'text-red-600' : 
                          stats.stockingPercentage > 80 ? 'text-amber-600' : 'text-emerald-600'
                        }`}>{stats.stockingPercentage}%</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(stats.stockingPercentage, 100)}%` }}
                          className={`h-full rounded-full ${
                            stats.stockingPercentage > 100 ? 'bg-gradient-to-r from-red-500 to-rose-500' : 
                            stats.stockingPercentage > 80 ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-emerald-500 to-green-500'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {fishItems.length > 0 && stats.tempRange && (
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                              <TrendingUp className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Temp</span>
                          </div>
                          <div className="text-sm font-black text-slate-900 dark:text-white">
                            {stats.tempRange.min}-{stats.tempRange.max}°C
                          </div>
                        </div>
                      )}
                      {fishItems.length > 0 && stats.phRange && (
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                              <Droplets className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">pH</span>
                          </div>
                          <div className="text-sm font-black text-slate-900 dark:text-white">
                            {stats.phRange.min}-{stats.phRange.max}
                          </div>
                        </div>
                      )}
                      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block mb-1">Fish</span>
                        <div className="text-sm font-black text-slate-900 dark:text-white">
                          {fishItems.reduce((sum, item) => sum + (item.count || 0), 0)}
                        </div>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block mb-1">Plants</span>
                        <div className="text-sm font-black text-slate-900 dark:text-white">
                          {plantItems.length}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'equipment' && (
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <input 
                        type="checkbox" 
                        checked={tankConfig.hasFilter || false}
                        onChange={(e) => setTankConfig({...tankConfig, hasFilter: e.target.checked})}
                        className="w-5 h-5 rounded text-indigo-600"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Wind className="w-4 h-4 text-indigo-600" />
                          <span className="font-bold text-sm text-slate-900 dark:text-white">Filter</span>
                        </div>
                        <span className="text-xs text-slate-500">{stats.filterRate} L/h recommended</span>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <input 
                        type="checkbox" 
                        checked={tankConfig.hasHeater || false}
                        onChange={(e) => setTankConfig({...tankConfig, hasHeater: e.target.checked})}
                        className="w-5 h-5 rounded text-indigo-600"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-amber-600" />
                          <span className="font-bold text-sm text-slate-900 dark:text-white">Heater</span>
                        </div>
                        <span className="text-xs text-slate-500">{stats.heaterWattage}W for this tank</span>
                      </div>
                    </label>

                    <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                      <label className="text-xs font-bold text-slate-600 dark:text-slate-400 mb-2 block">Substrate Type</label>
                      <select 
                        value={tankConfig.substrate || 'gravel'}
                        onChange={(e) => setTankConfig({...tankConfig, substrate: e.target.value as any})}
                        className="w-full px-3 py-2 text-sm font-semibold border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-950"
                      >
                        <option value="sand">Fine Sand</option>
                        <option value="gravel">Gravel</option>
                        <option value="soil">Aqua Soil</option>
                        <option value="bare">Bare Bottom</option>
                      </select>
                    </div>
                  </div>
                )}

                {activeTab === 'suggestions' && (
                  <div className="space-y-3">
                    {suggestions.length === 0 ? (
                      <div className="text-center py-8">
                        <Lightbulb className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-2" />
                        <p className="text-xs text-slate-500 dark:text-slate-400">Add fish to get smart suggestions</p>
                      </div>
                    ) : (
                      suggestions.slice(0, 5).map((suggestion) => (
                        <div key={suggestion.id} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
                          <div className="flex items-start gap-2 mb-2">
                            <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                              suggestion.priority === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                              suggestion.priority === 'medium' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                              'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                            }`}>
                              {suggestion.priority}
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">{suggestion.title}</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400">{suggestion.description}</p>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Compatibility Warnings */}
            {compatibilityIssues.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-2 border-red-300 dark:border-red-800 rounded-2xl p-5 shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-red-900 dark:text-red-300 mb-2">Compatibility Issues Detected</h3>
                    <div className="space-y-2">
                      {compatibilityIssues.map((issue, idx) => (
                        <div key={idx} className="bg-white/60 dark:bg-slate-900/60 rounded-lg p-3">
                          <p className="text-sm font-semibold text-red-800 dark:text-red-200">{issue.message}</p>
                          {issue.solution && (
                            <p className="text-xs text-red-600 dark:text-red-400 mt-1">💡 {issue.solution}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Current Tank */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center justify-between">
                  <h2 className="font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-indigo-600" />
                    Current Tank
                    <span className="text-sm text-slate-500 font-normal">({items.length} items)</span>
                  </h2>
                  {items.length > 0 && (
                    <button
                      onClick={clearAll}
                      className="text-xs font-bold text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                    >
                      Clear All
                    </button>
                  )}
                </div>
              </div>
              
              <div className="p-5">
                {items.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 mx-auto mb-4 flex items-center justify-center">
                      <Plus className="w-10 h-10 text-indigo-400 dark:text-indigo-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Your tank is empty</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Start adding fish, plants, and decorations below!</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <AnimatePresence>
                      {items.map((item) => {
                        const itemWarnings: string[] = [];
                        const itemSuggestions: string[] = [];

                        if (item.type === 'fish') {
                          const fish = item.data as Species;
                          if (fish.environment.minTankSizeLiters > tankConfig.volume) {
                            itemWarnings.push(`Needs minimum ${fish.environment.minTankSizeLiters}L tank`);
                          }
                          if (fish.behavior.minGroupSize && (item.count || 1) < fish.behavior.minGroupSize) {
                            itemSuggestions.push(`Schooling fish - increase to ${fish.behavior.minGroupSize}+ for natural behavior`);
                          }
                          if (tankConfig.substrate === 'gravel' && fish.taxonomy.scientificName.toLowerCase().includes('corydoras')) {
                            itemWarnings.push('Needs sand substrate to prevent barbel damage');
                          }
                        }

                        return (
                          <TankItemCard
                            key={item.id}
                            item={item}
                            onRemove={removeItem}
                            onUpdateCount={updateCount}
                            onUpdateNotes={updateNotes}
                            warnings={itemWarnings}
                            suggestions={itemSuggestions}
                          />
                        );
                      })}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>

            {/* Asset Browser */}
            <AssetBrowser 
              onAddItem={addItem} 
              tankVolume={tankConfig.volume}
              filters={filters}
              onFiltersChange={setFilters}
              showAdvancedFilters={showAdvancedFilters}
              onToggleAdvancedFilters={() => setShowAdvancedFilters(!showAdvancedFilters)}
            />
          </div>
        </div>
      </main>

      {/* Enhanced Setup Modal */}
      <AnimatePresence>
        {showSetup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4" 
            onClick={() => setShowSetup(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6">
                <h2 className="text-2xl font-black text-white">Tank Setup</h2>
                <p className="text-indigo-100 text-sm mt-1">Configure your aquarium</p>
              </div>
              
              <div className="p-6 space-y-5">
                <div>
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 block">Tank Name</label>
                  <input 
                    type="text" 
                    value={tankConfig.name}
                    onChange={(e) => setTankConfig({...tankConfig, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl font-semibold focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all"
                    placeholder="My Awesome Tank"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 block">Dimensions (cm)</label>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Length</label>
                      <input 
                        type="number" 
                        value={customDimensions.length} 
                        onChange={e => setCustomDimensions({...customDimensions, length: +e.target.value})} 
                        className="w-full px-3 py-2 text-center text-lg font-black border-2 border-slate-200 rounded-xl bg-slate-50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Width</label>
                      <input 
                        type="number" 
                        value={customDimensions.width} 
                        onChange={e => setCustomDimensions({...customDimensions, width: +e.target.value})} 
                        className="w-full px-3 py-2 text-center text-lg font-black border-2 border-slate-200 rounded-xl bg-slate-50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Height</label>
                      <input 
                        type="number" 
                        value={customDimensions.height} 
                        onChange={e => setCustomDimensions({...customDimensions, height: +e.target.value})} 
                        className="w-full px-3 py-2 text-center text-lg font-black border-2 border-slate-200 rounded-xl bg-slate-50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all" 
                      />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 text-center">
                    Volume: <span className="font-bold text-indigo-600">
                      {Math.round((customDimensions.length * customDimensions.width * customDimensions.height) / 1000)}L
                    </span>
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={() => setShowSetup(false)}
                    className="flex-1 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => { updateCustomTank(); setShowSetup(false); }}
                    className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black rounded-xl transition-all shadow-lg"
                  >
                    Apply Changes
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Preset Modal */}
      <AnimatePresence>
        {showPresets && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4" 
            onClick={() => setShowPresets(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-5xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-6">
                <h2 className="text-2xl font-black text-white">Load Template</h2>
                <p className="text-indigo-100 text-sm mt-1">Start with a professionally designed setup</p>
              </div>
              
              <div className="overflow-y-auto p-6 flex-1">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {TANK_PRESETS.map((preset) => (
                    <motion.button 
                      key={preset.id}
                      onClick={() => loadPreset(preset.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="text-left bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 p-5 rounded-2xl hover:border-indigo-500 hover:shadow-xl transition-all"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${
                          preset.difficulty === 'beginner' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {preset.difficulty}
                        </span>
                        <div className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
                          <span className="text-xs font-black text-indigo-600 dark:text-indigo-400">{preset.tankConfig.volume}L</span>
                        </div>
                      </div>
                      <h3 className="font-black text-slate-900 dark:text-white mb-2 text-lg">{preset.name}</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">{preset.description}</p>
                      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                        <div className="flex gap-4 text-xs">
                          <div>
                            <span className="text-slate-500 block">Fish</span>
                            <span className="font-bold text-slate-900 dark:text-white">
                              {preset.items.filter(i => i.type === 'fish').length}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">Plants</span>
                            <span className="font-bold text-slate-900 dark:text-white">
                              {preset.items.filter(i => i.type === 'plant').length}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Shopping list generator (unchanged)
const generateShoppingList = (
  items: TankItem[], 
  config: TankConfig, 
  stats: any,
  suggestions: SmartSuggestion[]
): string => {
  const fish = items.filter(i => i.type === 'fish');
  const plants = items.filter(i => i.type === 'plant');
  const hardscape = items.filter(i => i.type === 'hardscape');

  const today = new Date().toLocaleDateString('en-US', { dateStyle: 'full' });

  let text = `
🐠 AQUAGUIDE TANK PLAN
=========================================
Date: ${today}
Tank: ${config.name}

📐 TANK SPECIFICATIONS
-----------------------------------------
Volume:       ${config.volume} Liters
Dimensions:   ${config.length}cm × ${config.width}cm × ${config.height}cm
Substrate:    ${config.substrate || 'Not specified'}

🔴 HIGH PRIORITY (Buy First)
-----------------------------------------
`;

  if (!config.hasFilter) {
    text += `[ ] Filter (${stats.filterRate} L/h) - Essential\n`;
  }
  if (!config.hasHeater) {
    text += `[ ] Heater (${stats.heaterWattage}W) - For tropical fish\n`;
  }
  text += `[ ] Water Test Kit - Track cycling\n`;

  text += `\n🟡 MEDIUM PRIORITY (Livestock)\n-----------------------------------------\n`;
  
  if (fish.length === 0) {
    text += "No fish selected.\n";
  } else {
    const fishGroups = new Map<string, number>();
    fish.forEach(item => {
      const s = item.data as Species;
      const current = fishGroups.get(s.taxonomy.commonName) || 0;
      fishGroups.set(s.taxonomy.commonName, current + (item.count || 1));
    });
    fishGroups.forEach((count, name) => {
      text += `[ ] ${count}x ${name}\n`;
    });
  }

  text += `\n🟢 LOW PRIORITY (Plants & Decor)\n-----------------------------------------\n`;
  
  if (plants.length > 0) {
    const plantCounts = new Map<string, number>();
    plants.forEach(item => {
      const p = item.data as Plant;
      plantCounts.set(p.taxonomy.commonName, (plantCounts.get(p.taxonomy.commonName) || 0) + 1);
    });
    plantCounts.forEach((count, name) => {
      text += `[ ] ${count}x ${name}\n`;
    });
  }

  if (hardscape.length > 0) {
    hardscape.forEach(item => {
      const h = item.data as any;
      text += `[ ] 1x ${h.name}\n`;
    });
  }

  text += `\n💡 RECOMMENDATIONS\n-----------------------------------------\n`;
  suggestions.slice(0, 3).forEach(s => {
    text += `• ${s.title}: ${s.description}\n`;
  });

  text += `\n📊 SYSTEM SUMMARY\n-----------------------------------------\n`;
  text += `Stocking: ${stats.stockingPercentage}% ${stats.stockingPercentage > 100 ? '(OVERSTOCKED!)' : '(Safe)'}\n`;
  text += `Temp Range: ${stats.tempRange?.min}-${stats.tempRange?.max}°C\n`;
  text += `pH Range: ${stats.phRange?.min}-${stats.phRange?.max}\n`;
  text += `\nGenerated by AquaGuide\nhttps://aquaguide.app/tank-builder\n`;

  return text;
};

export default TankBuilderPage;
