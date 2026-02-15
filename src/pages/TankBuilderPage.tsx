import { useState, useEffect } from 'react';
import { Download, Share2, Check, Settings, Lightbulb, TrendingUp } from 'lucide-react';
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

  // Calculate stats and suggestions
  const stats = calculateTankStats(items, tankConfig);
  const suggestions = generateSmartSuggestions(items, tankConfig);
  const compatibilityIssues = checkCompatibility(items, tankConfig);

  const fishItems = items.filter(i => i.type === 'fish');
  const plantItems = items.filter(i => i.type === 'plant');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-stone-950 pb-20 font-sans">
      <SEOHead title="Tank Builder - Smart Aquarium Planner" description="Plan your aquarium with intelligent compatibility checks, equipment recommendations, and shopping lists." />
      
      {/* Header */}
      <header className="bg-white dark:bg-stone-900 border-b border-slate-200 dark:border-stone-800 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-lg text-slate-900 dark:text-white">
              {tankConfig.name} <span className="text-slate-400 text-sm font-normal">({tankConfig.volume}L)</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
             <button onClick={() => setShowSetup(true)} className="px-3 py-1.5 text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1">
               <Settings className="w-3 h-3" /> Setup
             </button>
             <button onClick={() => setShowPresets(true)} className="px-3 py-1.5 text-xs font-bold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-lg transition-colors">
               Load Preset
             </button>
             <button onClick={handleShare} className="px-3 py-1.5 text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1">
               {copySuccess ? <Check className="w-3 h-3" /> : <Share2 className="w-3 h-3" />}
               {copySuccess ? 'Copied' : 'Share'}
             </button>
             <button onClick={handleExport} className="px-3 py-1.5 text-xs font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg transition-colors flex items-center gap-1">
               <Download className="w-3 h-3" /> Export
             </button>
          </div>
        </div>
      </header>

      {/* Main 2-Panel Layout */}
      <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT PANEL: Tank Setup & Stats */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Live Stats Card */}
          <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-slate-200 dark:border-stone-800 p-5">
             <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-indigo-500" /> Live Stats
             </h3>

             <div className="space-y-3">
               {/* Stocking Level */}
               <div>
                 <div className="flex justify-between text-xs mb-1">
                   <span className="text-slate-600 dark:text-slate-400">Stocking Level</span>
                   <span className={`font-bold ${
                     stats.stockingPercentage > 100 ? 'text-red-600' : 
                     stats.stockingPercentage > 80 ? 'text-amber-600' : 'text-emerald-600'
                   }`}>{stats.stockingPercentage}%</span>
                 </div>
                 <div className="w-full bg-slate-100 dark:bg-stone-800 rounded-full h-2 overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: `${Math.min(stats.stockingPercentage, 100)}%` }}
                     className={`h-full rounded-full ${
                       stats.stockingPercentage > 100 ? 'bg-red-500' : 
                       stats.stockingPercentage > 80 ? 'bg-amber-500' : 'bg-emerald-500'
                     }`}
                   />
                 </div>
               </div>

               {/* Parameters */}
               {fishItems.length > 0 && stats.tempRange && stats.phRange && (
                 <>
                   <div className="flex justify-between items-center py-2 border-t border-slate-100 dark:border-stone-800">
                     <span className="text-xs text-slate-600 dark:text-slate-400">Temperature Range</span>
                     <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                       {stats.tempRange.min}-{stats.tempRange.max}°C
                     </span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-t border-slate-100 dark:border-stone-800">
                     <span className="text-xs text-slate-600 dark:text-slate-400">pH Range</span>
                     <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                       {stats.phRange.min}-{stats.phRange.max}
                     </span>
                   </div>
                 </>
               )}

               {/* Counts */}
               <div className="flex justify-between items-center py-2 border-t border-slate-100 dark:border-stone-800">
                 <span className="text-xs text-slate-600 dark:text-slate-400">Total Fish</span>
                 <span className="text-xs font-bold text-slate-900 dark:text-white">
                   {fishItems.reduce((sum, item) => sum + (item.count || 0), 0)}
                 </span>
               </div>
               <div className="flex justify-between items-center py-2 border-t border-slate-100 dark:border-stone-800">
                 <span className="text-xs text-slate-600 dark:text-slate-400">Plant Species</span>
                 <span className="text-xs font-bold text-slate-900 dark:text-white">{plantItems.length}</span>
               </div>
             </div>
          </div>

          {/* Smart Suggestions */}
          {suggestions.length > 0 && (
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800 p-5">
              <h3 className="font-bold text-indigo-900 dark:text-indigo-300 text-sm mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" /> Smart Suggestions
              </h3>
              <div className="space-y-2">
                {suggestions.slice(0, 5).map((suggestion) => (
                  <div key={suggestion.id} className="bg-white/50 dark:bg-stone-900/50 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        suggestion.priority === 'high' ? 'bg-red-100 text-red-700' :
                        suggestion.priority === 'medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {suggestion.priority.toUpperCase()}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white mt-2">{suggestion.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{suggestion.description}</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-500 mt-1 italic">{suggestion.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Equipment Needed */}
          <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-slate-200 dark:border-stone-800 p-5">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-3">Equipment Checklist</h3>
            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-stone-800 p-2 rounded">
                <input 
                  type="checkbox" 
                  checked={tankConfig.hasFilter || false}
                  onChange={(e) => setTankConfig({...tankConfig, hasFilter: e.target.checked})}
                  className="rounded"
                />
                <span>Filter ({stats.filterRate} L/h)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-stone-800 p-2 rounded">
                <input 
                  type="checkbox" 
                  checked={tankConfig.hasHeater || false}
                  onChange={(e) => setTankConfig({...tankConfig, hasHeater: e.target.checked})}
                  className="rounded"
                />
                <span>Heater ({stats.heaterWattage}W)</span>
              </label>
              <div className="pt-2 border-t border-slate-100 dark:border-stone-800">
                <span className="text-slate-600 dark:text-slate-400">Substrate:</span>
                <select 
                  value={tankConfig.substrate || 'gravel'}
                  onChange={(e) => setTankConfig({...tankConfig, substrate: e.target.value as any})}
                  className="ml-2 text-xs border-slate-200 dark:border-stone-700 rounded bg-white dark:bg-stone-950"
                >
                  <option value="sand">Sand</option>
                  <option value="gravel">Gravel</option>
                  <option value="soil">Aquasoil</option>
                  <option value="bare">Bare Bottom</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Current Tank & Browser */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Compatibility Issues */}
          {compatibilityIssues.length > 0 && (
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-xl p-4">
              <h3 className="font-bold text-red-900 dark:text-red-300 text-sm mb-2">⚠️ Compatibility Issues</h3>
              <ul className="space-y-2">
                {compatibilityIssues.map((issue, idx) => (
                  <li key={idx} className="text-xs">
                    <p className="text-red-800 dark:text-red-200 font-medium">{issue.message}</p>
                    {issue.solution && (
                      <p className="text-red-600 dark:text-red-400 mt-1">→ {issue.solution}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Current Stocking */}
          <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-slate-200 dark:border-stone-800">
            <div className="p-5 border-b border-slate-100 dark:border-stone-800">
              <h2 className="font-bold text-slate-900 dark:text-white">Current Tank ({items.length} items)</h2>
            </div>
            
            <div className="p-5 space-y-3">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Your tank is empty. Add species below to start planning!</p>
                </div>
              ) : (
                <AnimatePresence>
                  {items.map((item) => {
                    // Get item-specific warnings
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
              )}
            </div>
          </div>

          {/* Add Species Browser */}
          <AssetBrowser 
            onAddItem={addItem} 
            tankVolume={tankConfig.volume}
            filters={filters}
            onFiltersChange={setFilters}
            showAdvancedFilters={showAdvancedFilters}
            onToggleAdvancedFilters={() => setShowAdvancedFilters(!showAdvancedFilters)}
          />
        </div>
      </main>

      {/* Setup Modal */}
      {showSetup && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowSetup(false)}>
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             onClick={(e) => e.stopPropagation()}
             className="bg-white dark:bg-stone-900 rounded-2xl max-w-md w-full shadow-2xl"
           >
              <div className="p-6 border-b border-slate-100 dark:border-stone-800">
                 <h2 className="text-xl font-bold text-slate-900 dark:text-white">Tank Setup</h2>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 block">Tank Name</label>
                  <input 
                    type="text" 
                    value={tankConfig.name}
                    onChange={(e) => setTankConfig({...tankConfig, name: e.target.value})}
                    className="w-full border-slate-200 dark:border-stone-700 rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">Length (cm)</label>
                    <input 
                      type="number" 
                      value={customDimensions.length} 
                      onChange={e => setCustomDimensions({...customDimensions, length: +e.target.value})} 
                      className="w-full text-sm border-slate-200 rounded-lg bg-slate-50" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">Width (cm)</label>
                    <input 
                      type="number" 
                      value={customDimensions.width} 
                      onChange={e => setCustomDimensions({...customDimensions, width: +e.target.value})} 
                      className="w-full text-sm border-slate-200 rounded-lg bg-slate-50" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">Height (cm)</label>
                    <input 
                      type="number" 
                      value={customDimensions.height} 
                      onChange={e => setCustomDimensions({...customDimensions, height: +e.target.value})} 
                      className="w-full text-sm border-slate-200 rounded-lg bg-slate-50" 
                    />
                  </div>
                </div>

                <button 
                  onClick={() => { updateCustomTank(); setShowSetup(false); }}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors"
                >
                  Apply Changes
                </button>
              </div>
           </motion.div>
        </div>
      )}

      {/* Preset Modal */}
      {showPresets && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowPresets(false)}>
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             onClick={(e) => e.stopPropagation()}
             className="bg-white dark:bg-stone-900 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl flex flex-col"
           >
              <div className="p-6 border-b border-slate-100 dark:border-stone-800">
                 <h2 className="text-xl font-bold text-slate-900 dark:text-white">Load Template</h2>
                 <p className="text-sm text-slate-500 mt-1">Start with a professionally designed setup</p>
              </div>
              
              <div className="overflow-y-auto p-6 grid md:grid-cols-2 gap-4">
                 {TANK_PRESETS.map((preset) => (
                    <button 
                      key={preset.id}
                      onClick={() => loadPreset(preset.id)}
                      className="text-left bg-white dark:bg-stone-950 border border-slate-200 dark:border-stone-800 p-5 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all group"
                    >
                       <div className="flex justify-between items-start mb-2">
                          <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                             preset.difficulty === 'beginner' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                          }`}>
                             {preset.difficulty}
                          </span>
                          <span className="text-xs font-mono text-slate-500">{preset.tankConfig.volume}L</span>
                       </div>
                       <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors mb-1">{preset.name}</h3>
                       <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{preset.description}</p>
                    </button>
                 ))}
              </div>
           </motion.div>
        </div>
      )}

    </div>
  );
};

// Enhanced shopping list generator
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

  // Equipment first
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
