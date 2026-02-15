import { useState, useEffect } from 'react';
import { Ruler, AlertTriangle, Download, Trash2, Grid3x3, Share2, Check, Skull } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/seo/SEOHead';
import { Tank3DView } from '../components/tank-builder/Tank3DView';
import { AssetBrowser } from '../components/tank-builder/AssetBrowser';
import { TankStats } from '../components/tank-builder/TankStats';
import { calculateTankStats } from '../utils/tank-calculations';
import { generateShareURL, copyToClipboard, decodeTankFromURL } from '../utils/tank-share';
import { PRESET_TANKS } from '../data/builder';
import { TANK_PRESETS } from '../data/presets';
import { TankConfig, TankItem, HardscapeItem } from '../types/builder';
import { Species } from '../types/species';
import { Plant } from '../types/plant';

const AUTOSAVE_KEY = 'tankBuilder_autosave';

export const TankBuilderPage = () => {
  const [tankConfig, setTankConfig] = useState<TankConfig>(PRESET_TANKS[2]); // Default to 54L
  const [customDimensions, setCustomDimensions] = useState({ length: 60, width: 30, height: 30 });
  const [items, setItems] = useState<TankItem[]>([]);
  const [showGrid, setShowGrid] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [showPresets, setShowPresets] = useState(false);

  // Advanced Filter State
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

  // Load from URL or LocalStorage on mount
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
        if (data.tankConfig) {
           // Ensure legacy saves have all fields
           if (!data.tankConfig.aspectRatio) data.tankConfig.aspectRatio = data.tankConfig.length / data.tankConfig.height;
           setTankConfig(data.tankConfig);
        }
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
      name: 'Custom Tank', 
      ...customDimensions, 
      volume: Math.round(volume), 
      aspectRatio 
    });
  };

  const loadPreset = (presetId: string) => {
    const preset = TANK_PRESETS.find(p => p.id === presetId);
    if (!preset) return;

    setTankConfig(preset.tankConfig);
    const loadedItems: TankItem[] = preset.items.map((item, idx) => ({
      ...item,
      id: `${item.type}-${Date.now()}-${idx}` // Generate unique IDs
    }));
    setItems(loadedItems);
    setShowPresets(false);
  };

  const clearAll = () => {
    if (confirm('Clear entire tank layout? This cannot be undone.')) {
      setItems([]);
      window.history.replaceState({}, '', window.location.pathname);
    }
  };

  const addItem = (data: Species | Plant | HardscapeItem, type: 'fish' | 'plant' | 'hardscape') => {
    let itemId: string;
    if ('id' in data) { itemId = data.id; } else { itemId = (data as HardscapeItem).name; }
    
    // Smart positioning logic
    let defaultY = 50;
    if (type === 'plant') {
        const plant = data as Plant;
        const isFloating = plant.specs?.placement?.includes('floating') || plant.specs?.type === 'float';
        defaultY = isFloating ? 5 : 82; // Top or bottom
    } else if (type === 'hardscape') {
        defaultY = 85; // Bottom
    } else {
        // Fish spawn in random safe zone
        defaultY = Math.random() * 40 + 30; 
    }

    const newItem: TankItem = {
      id: `${type}-${itemId}-${Date.now()}`,
      type, data,
      position: { 
        x: Math.random() * 40 + 30, // Center-ish spawn
        y: defaultY, 
        z: Math.random() * 40 + 30 
      },
      count: type === 'fish' ? 1 : undefined,
      locked: false,
      visuals: { 
        rotation: type === 'hardscape' ? Math.random() * 360 : 0, 
        flipX: type === 'fish' ? Math.random() > 0.5 : false, 
        swayDelay: Math.random() * 2, 
        floatSpeed: 3 + Math.random() * 2 
      }
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => { 
    setItems(items.filter(item => item.id !== id)); 
    if (selectedItem === id) setSelectedItem(null); 
  };
  
  const toggleLock = (id: string) => { setItems(items.map(item => item.id === id ? { ...item, locked: !item.locked } : item)); };
  
  const updatePosition = (id: string, x: number, y: number) => { 
    setItems(items.map(item => item.id === id ? { ...item, position: { ...item.position, x, y } } : item)); 
  };
  
  const updateCount = (id: string, delta: number) => { 
    setItems(items.map(item => { 
      if (item.id === id && item.type === 'fish') { 
        const newCount = Math.max(1, (item.count || 1) + delta); 
        return { ...item, count: newCount }; 
      } 
      return item; 
    })); 
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
    const text = generateShoppingList(items, tankConfig, stats);
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `aquaguide-${tankConfig.name.replace(/\s+/g, '-').toLowerCase()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Calculations
  const stats = calculateTankStats(items, tankConfig);
  const warnings = [...stats.criticalWarnings, ...stats.warnings];
  const hasCritical = stats.criticalWarnings.length > 0;

  // Add dynamic warnings logic here (same as before but cleaner)
  const fishItems = items.filter(i => i.type === 'fish');
  
  // Temperature check
  if (fishItems.length > 1) {
    const temps = fishItems.map(item => { const s = item.data as Species; return { min: s.environment.tempC.min, max: s.environment.tempC.max }; });
    const overallMin = Math.max(...temps.map(t => t.min)); 
    const overallMax = Math.min(...temps.map(t => t.max));
    if (overallMin > overallMax) { 
      warnings.push('🌡️ Critical: Incompatible temperature ranges'); 
    }
  }

  // pH check
  if (fishItems.length > 1) {
    const phs = fishItems.map(item => { const s = item.data as Species; return { min: s.environment.ph.min, max: s.environment.ph.max }; });
    const overallMin = Math.max(...phs.map(p => p.min)); 
    const overallMax = Math.min(...phs.map(p => p.max));
    if (overallMin > overallMax) { 
      warnings.push('💧 Critical: Incompatible pH ranges'); 
    }
  }

  // Tank size check
  fishItems.forEach(item => {
    const s = item.data as Species;
    if (s.environment.minTankSizeLiters > tankConfig.volume) { 
      warnings.push(`📏 ${s.taxonomy.commonName} needs >${s.environment.minTankSizeLiters}L`); 
    }
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-stone-950 pb-20 font-sans">
      <SEOHead title="Tank Builder - Interactive Aquarium Planner" description="Design your dream aquarium with our interactive 3D planner. Check compatibility, stocking levels, and generate equipment lists." />
      
      {/* Header */}
      <header className="bg-white dark:bg-stone-900 border-b border-slate-200 dark:border-stone-800 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Grid3x3 className="w-5 h-5 text-white" />
             </div>
             <h1 className="font-bold text-lg text-slate-900 dark:text-white hidden sm:block">Tank Builder <span className="text-indigo-500 text-xs uppercase ml-2 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800">Beta</span></h1>
          </div>
          
          <div className="flex items-center gap-2">
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Controls & Stats (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Dimensions Card */}
          <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-slate-200 dark:border-stone-800 p-5">
             <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-indigo-500" /> Dimensions
                </h3>
                <span className="text-xs font-mono bg-slate-100 dark:bg-stone-800 px-2 py-1 rounded text-slate-600 dark:text-slate-400">
                  {tankConfig.volume}L
                </span>
             </div>

             <div className="space-y-3">
               <div className="grid grid-cols-3 gap-2">
                 <div>
                   <label className="text-[10px] font-bold text-slate-500 uppercase">Length</label>
                   <input type="number" value={customDimensions.length} onChange={e => setCustomDimensions({...customDimensions, length: +e.target.value})} className="w-full text-sm border-slate-200 rounded-lg bg-slate-50" />
                 </div>
                 <div>
                   <label className="text-[10px] font-bold text-slate-500 uppercase">Width</label>
                   <input type="number" value={customDimensions.width} onChange={e => setCustomDimensions({...customDimensions, width: +e.target.value})} className="w-full text-sm border-slate-200 rounded-lg bg-slate-50" />
                 </div>
                 <div>
                   <label className="text-[10px] font-bold text-slate-500 uppercase">Height</label>
                   <input type="number" value={customDimensions.height} onChange={e => setCustomDimensions({...customDimensions, height: +e.target.value})} className="w-full text-sm border-slate-200 rounded-lg bg-slate-50" />
                 </div>
               </div>
               <button onClick={updateCustomTank} className="w-full py-2 text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 rounded-lg transition-colors">
                 Apply Dimensions
               </button>
             </div>
          </div>

          {/* Warnings Card */}
          {warnings.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-xl p-4 border ${hasCritical ? 'bg-red-50 border-red-200' : 'bg-amber-50 border-amber-200'}`}
            >
              <h3 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2 ${hasCritical ? 'text-red-700' : 'text-amber-700'}`}>
                {hasCritical ? <Skull className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                {hasCritical ? 'Critical Issues' : 'Warnings'}
              </h3>
              <ul className="space-y-1.5">
                {warnings.map((w, i) => (
                  <li key={i} className="text-xs flex items-start gap-2 text-slate-700 leading-tight">
                    <span className="mt-0.5 text-slate-400">•</span> {w}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Stats Component */}
          <TankStats items={items} tankConfig={tankConfig} />

          {/* Clear Button */}
          {items.length > 0 && (
            <button onClick={clearAll} className="w-full py-3 flex items-center justify-center gap-2 text-xs font-bold text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-colors border border-transparent hover:border-rose-100">
              <Trash2 className="w-4 h-4" /> Clear Tank Layout
            </button>
          )}

        </div>

        {/* RIGHT COLUMN: Visualizer & Browser (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
           {/* 3D Viewport */}
           <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 relative group">
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                 <div className="bg-black/50 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10">
                    {items.length} Items
                 </div>
              </div>
              <div className="absolute top-4 right-4 z-10">
                 <label className="flex items-center gap-2 bg-black/50 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 cursor-pointer hover:bg-black/70 transition-colors">
                    <input type="checkbox" checked={showGrid} onChange={e => setShowGrid(e.target.checked)} className="rounded text-indigo-500 focus:ring-indigo-500 bg-white/10 border-transparent" />
                    <span className="text-[10px] font-bold text-white uppercase">Grid</span>
                 </label>
              </div>
              
              <Tank3DView 
                items={items} 
                tankConfig={tankConfig} 
                showGrid={showGrid} 
                onRemoveItem={removeItem} 
                onToggleLock={toggleLock} 
                onUpdatePosition={updatePosition} 
                onUpdateCount={updateCount} 
                selectedItem={selectedItem} 
                setSelectedItem={setSelectedItem} 
              />
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

      </main>

      {/* Preset Modal */}
      {showPresets && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="bg-white dark:bg-stone-900 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl flex flex-col"
           >
              <div className="p-6 border-b border-slate-100 dark:border-stone-800 flex justify-between items-center bg-slate-50 dark:bg-stone-800/50">
                 <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Start with a Template</h2>
                    <p className="text-sm text-slate-500">Choose a professionally designed setup to customize.</p>
                 </div>
                 <button onClick={() => setShowPresets(false)} className="text-slate-400 hover:text-slate-600">Close</button>
              </div>
              
              <div className="overflow-y-auto p-6 grid md:grid-cols-2 gap-4">
                 {TANK_PRESETS.map((preset) => (
                    <button 
                      key={preset.id}
                      onClick={() => loadPreset(preset.id)}
                      className="text-left bg-white dark:bg-stone-950 border border-slate-200 dark:border-stone-800 p-5 rounded-xl hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-md transition-all group"
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

// Generate clean text file for export
const generateShoppingList = (items: TankItem[], config: TankConfig, stats: any): string => {
  const fish = items.filter(i => i.type === 'fish');
  const plants = items.filter(i => i.type === 'plant');
  const hardscape = items.filter(i => i.type === 'hardscape');

  const today = new Date().toLocaleDateString('en-US', { dateStyle: 'full' });

  let text = `
🐠 AQUAGUIDE TANK PLAN
=========================================
Date: ${today}

📐 TANK SPECIFICATIONS
-----------------------------------------
Volume:       ${config.volume} Liters
Dimensions:   ${config.length}cm × ${config.width}cm × ${config.height}cm (L×W×H)
Surface Area: ${(config.length * config.width).toLocaleString()} cm²

🐟 LIVESTOCK (${fish.length} Species)
-----------------------------------------
`;

  if (fish.length === 0) text += "No fish selected.\n";
  else {
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

  text += `\n🌿 PLANTS (${plants.length} Items)\n-----------------------------------------\n`;
  if (plants.length === 0) text += "No plants selected.\n";
  else {
     const plantCounts = new Map<string, number>();
     plants.forEach(item => {
        const p = item.data as Plant;
        plantCounts.set(p.taxonomy.commonName, (plantCounts.get(p.taxonomy.commonName) || 0) + 1);
     });
     plantCounts.forEach((count, name) => {
        text += `[ ] ${count}x ${name}\n`;
     });
  }

  text += `\n🪨 HARDSCAPE\n-----------------------------------------\n`;
  if (hardscape.length === 0) text += "No hardscape selected.\n";
  else {
     hardscape.forEach(item => {
        const h = item.data as HardscapeItem;
        text += `[ ] 1x ${h.name} (${h.size}cm)\n`;
     });
  }

  text += `
🛠️ EQUIPMENT RECOMMENDATIONS
-----------------------------------------
Filter Flow:   Minimum ${stats.filterRate} L/h
Heater Power:  ${stats.heaterWattage} Watts
Lighting:      ${stats.lightingLumens}+ Lumens (for selected plants)

📊 SYSTEM ANALYSIS
-----------------------------------------
Stocking Level: ${stats.stockingPercentage}% ${stats.stockingPercentage > 100 ? '(OVERSTOCKED!)' : '(Safe)'}
Warnings:       ${stats.criticalWarnings.length + stats.warnings.length} issues detected

Generated by AquaGuide Tank Builder
https://aquaguide.app/tank-builder
`;

  return text;
};

export default TankBuilderPage;