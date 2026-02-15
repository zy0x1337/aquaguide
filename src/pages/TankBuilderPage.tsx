import { useState, useEffect } from 'react';
import { Ruler, AlertTriangle, Download, Trash2, Grid3x3, Share2, Check, Skull } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEOHead } from '../components/seo/SEOHead';
import { Tank3DView } from '../components/tank-builder/Tank3DView';
import { AssetBrowser } from '../components/tank-builder/AssetBrowser';
import { TankStats } from '../components/tank-builder/TankStats';
import { calculateTankStats } from '../utils/tank-calculations';
import { generateShareURL, copyToClipboard, decodeTankFromURL } from '../utils/tank-share';
import { PRESET_TANKS } from '../data/builder';
import { TANK_PRESETS } from '../data/presets';
import { allSpecies } from '../data/species';
import { TankConfig, TankItem, HardscapeItem } from '../types/builder';
import { Species } from '../types/species';
import { Plant } from '../types/plant';

const AUTOSAVE_KEY = 'tankBuilder_autosave';

export const TankBuilderPage = () => {
  const [tankConfig, setTankConfig] = useState<TankConfig>(PRESET_TANKS[2]);
  const [customDimensions, setCustomDimensions] = useState({ length: 80, width: 40, height: 40 });
  const [items, setItems] = useState<TankItem[]>([]);
  const [showCompatibility, setShowCompatibility] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

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

  // Load from URL on mount
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
          if (data.tankConfig.aspectRatio === undefined) {
             data.tankConfig.aspectRatio = data.tankConfig.length / data.tankConfig.height;
          }
          if (!data.tankConfig.name) {
             data.tankConfig.name = 'Custom Tank';
          }
          setTankConfig(data.tankConfig);
        }
        if (data.items) setItems(data.items);
        if (data.customDimensions) setCustomDimensions(data.customDimensions);
      } catch (e) {
        console.error('Failed to load autosave', e);
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(AUTOSAVE_KEY, JSON.stringify({ tankConfig, items, customDimensions, timestamp: Date.now() }));
    }, 1000);
    return () => clearTimeout(timer);
  }, [tankConfig, items, customDimensions]);

  const updateCustomTank = () => {
    const volume = (customDimensions.length * customDimensions.width * customDimensions.height) / 1000;
    const aspectRatio = customDimensions.length / customDimensions.height;
    setTankConfig({ ...PRESET_TANKS[7], name: 'Custom Tank', ...customDimensions, volume: Math.round(volume), aspectRatio });
  };

  //  const loadPreset = (presetId: string) => {
  //  const preset = TANK_PRESETS.find(p => p.id === presetId);
  //  if (!preset) return;

  //    setTankConfig(preset.tankConfig);
  //  const loadedItems: TankItem[] = preset.items.map((item, idx) => ({
  //    ...item,
  //    id: `${item.type}-${Date.now()}-${idx}`
  //  }));
  //  setItems(loadedItems);
  // };

  const clearAll = () => {
    if (confirm('Clear entire tank?')) {
      setItems([]);
      window.history.replaceState({}, '', window.location.pathname);
    }
  };

  const addItem = (data: Species | Plant | HardscapeItem, type: 'fish' | 'plant' | 'hardscape') => {
    let itemId: string;
    if ('id' in data) { itemId = data.id; } else { itemId = (data as HardscapeItem).name; }
    
    let defaultY = 50;
    if (type === 'plant') {
        const plant = data as Plant;
        const isFloating = plant.specs?.placement?.includes('floating') || plant.specs?.type === 'float';
        defaultY = isFloating ? 5 : 82;
    } else if (type === 'hardscape') {
        defaultY = 85;
    } else {
        defaultY = Math.random() * 50 + 25;
    }

    const newItem: TankItem = {
      id: `${type}-${itemId}-${Date.now()}`,
      type, data,
      position: { x: Math.random() * 60 + 20, y: defaultY, z: Math.random() * 60 + 20 },
      count: type === 'fish' ? 1 : undefined,
      locked: false,
      visuals: { rotation: type === 'hardscape' ? Math.random() * 360 : 0, flipX: type === 'fish' ? Math.random() > 0.5 : false, swayDelay: Math.random() * 2, floatSpeed: 3 + Math.random() * 2 }
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => { 
    setItems(items.filter(item => item.id !== id)); 
    if (selectedItem === id) setSelectedItem(null); 
  };
  const toggleLock = (id: string) => { setItems(items.map(item => item.id === id ? { ...item, locked: !item.locked } : item)); };
  const updatePosition = (id: string, x: number, y: number) => { setItems(items.map(item => item.id === id ? { ...item, position: { ...item.position, x, y } } : item)); };
  const updateCount = (id: string, delta: number) => { setItems(items.map(item => { if (item.id === id && item.type === 'fish') { const newCount = Math.max(1, (item.count || 1) + delta); return { ...item, count: newCount }; } return item; })); };

  const handleShare = async () => {
    const url = generateShareURL(tankConfig, items);
    const success = await copyToClipboard(url);
    if (success) {
      setCopySuccess(true);
      window.history.replaceState({}, '', url);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const stats = calculateTankStats(items, tankConfig);
  const warnings = [...stats.criticalWarnings, ...stats.warnings];
  const hasCritical = stats.criticalWarnings.length > 0;

  const fishItems = items.filter(i => i.type === 'fish');
  
  if (fishItems.length > 1) {
    const temps = fishItems.map(item => { const species = item.data as Species; return { min: species.environment.tempC.min, max: species.environment.tempC.max, name: species.taxonomy.commonName }; });
    const overallMin = Math.max(...temps.map(t => t.min)); const overallMax = Math.min(...temps.map(t => t.max));
    if (overallMin > overallMax) { warnings.push('🌡️ Temperature conflict: No overlap between species'); } else { const rangeWarning = `Recommended: ${overallMin}°C - ${overallMax}°C`; if (overallMax - overallMin < 2) { warnings.push(`⚠️ ${rangeWarning} (narrow range!)`); } }
  }

  if (fishItems.length > 1) {
    const phs = fishItems.map(item => { const species = item.data as Species; return { min: species.environment.ph.min, max: species.environment.ph.max, name: species.taxonomy.commonName }; });
    const overallMin = Math.max(...phs.map(p => p.min)); const overallMax = Math.min(...phs.map(p => p.max));
    if (overallMin > overallMax) { warnings.push('💧 pH conflict: No compatible range'); }
  }

  fishItems.forEach(item => {
    const species = item.data as Species;
    if (species.environment.minTankSizeLiters > tankConfig.volume) { warnings.push(`📏 ${species.taxonomy.commonName} needs minimum ${species.environment.minTankSizeLiters}L (you have ${tankConfig.volume}L)`); }
    const minLengthNeeded = species.visuals.adultSizeCM * 6;
    if (minLengthNeeded > tankConfig.length) { warnings.push(`🏊 ${species.taxonomy.commonName} needs ${minLengthNeeded}cm tank length (you have ${tankConfig.length}cm)`); }
  });

  const speciesGroups = new Map<string, number>();
  fishItems.forEach(item => { const species = item.data as Species; const current = speciesGroups.get(species.id) || 0; speciesGroups.set(species.id, current + (item.count || 1)); });
  speciesGroups.forEach((totalCount, speciesId) => { const speciesData = allSpecies.find(s => s.id === speciesId); if (speciesData && speciesData.behavior.minGroupSize > 1 && totalCount < speciesData.behavior.minGroupSize) { warnings.push(`👥 ${speciesData.taxonomy.commonName}: Keep at least ${speciesData.behavior.minGroupSize} (you have ${totalCount})`); } });

  const totalPlants = items.filter(i => i.type === 'plant').length;
  const plantDensityPerLiter = totalPlants / tankConfig.volume;
  if (totalPlants > 0 && plantDensityPerLiter < 0.1) { warnings.push(`🌿 Consider adding more plants (${totalPlants} plants for ${tankConfig.volume}L)`); }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 pb-20">
      <SEOHead title="Tank Builder - Plan Your Aquarium" description="Interactive 3D aquarium planner with realistic dimensions. Plan your perfect tank setup." />
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white pt-24 pb-12 px-6"><div className="max-w-7xl mx-auto"><h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">🐠 Tank Builder</h1><p className="text-lg text-blue-100 max-w-2xl">Design your dream aquarium with realistic dimensions and stocking calculations.</p></div></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-8">
        {/* PRESETS HIDDEN - Will be enabled later */}
        {false && TANK_PRESETS.length > 0 && (
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-6 mb-6">
            {/* Preset UI here */}
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6"><h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center"><Ruler className="w-5 h-5 mr-2 text-indigo-600" /> Tank Dimensions</h3><div className="space-y-3 max-h-80 overflow-y-auto">{PRESET_TANKS.slice(0, -1).map((preset, idx) => (<button key={idx} onClick={() => setTankConfig(preset)} className={`w-full text-left p-4 rounded-xl border-2 transition-all ${tankConfig.volume === preset.volume && tankConfig.length === preset.length ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-blue-50 shadow-md' : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50'}`}><div className="flex items-center justify-between"><div><div className="font-bold text-slate-900">{preset.name}</div><div className="text-xs text-slate-500">{preset.length}×{preset.width}×{preset.height}cm</div></div>{tankConfig.volume === preset.volume && tankConfig.length === preset.length && (<div className="w-3 h-3 bg-indigo-500 rounded-full" />)}</div></button>))}
                <div className="border-t-2 border-slate-200 pt-3 mt-3"><div className="font-bold text-slate-900 mb-3 flex items-center justify-between"><span>Custom Dimensions</span><button onClick={updateCustomTank} className="text-xs px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">Apply</button></div><div className="space-y-2"><div><label className="text-xs text-slate-600">Length (cm)</label><input type="number" value={customDimensions.length} onChange={(e) => setCustomDimensions({ ...customDimensions, length: Number(e.target.value) })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" min="20" max="300" /></div><div><label className="text-xs text-slate-600">Width (cm)</label><input type="number" value={customDimensions.width} onChange={(e) => setCustomDimensions({ ...customDimensions, width: Number(e.target.value) })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" min="20" max="100" /></div><div><label className="text-xs text-slate-600">Height (cm)</label><input type="number" value={customDimensions.height} onChange={(e) => setCustomDimensions({ ...customDimensions, height: Number(e.target.value) })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" min="20" max="100" /></div></div></div></div></div>

            <TankStats items={items} tankConfig={tankConfig} />

            {showCompatibility && warnings.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className={`rounded-2xl p-5 shadow-lg border-2 ${
                  hasCritical 
                    ? 'bg-gradient-to-br from-red-100 to-rose-100 border-red-400' 
                    : 'bg-gradient-to-br from-rose-50 to-red-50 border-rose-300'
                }`}
              >
                <h3 className={`text-sm font-bold mb-3 flex items-center ${
                  hasCritical ? 'text-red-900' : 'text-rose-900'
                }`}>
                  {hasCritical ? <Skull className="w-4 h-4 mr-2" /> : <AlertTriangle className="w-4 h-4 mr-2" />}
                  {hasCritical ? 'CRITICAL CONFLICTS' : 'Compatibility Issues'} ({warnings.length})
                </h3>
                <ul className="space-y-2 max-h-48 overflow-y-auto">
                  {warnings.map((warning, i) => {
                    const isCritical = warning.includes('CRITICAL') || warning.includes('🚫');
                    return (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ delay: i * 0.05 }} 
                        className={`text-xs flex items-start rounded-lg p-2 ${
                          isCritical 
                            ? 'bg-red-200/70 text-red-900 font-bold border border-red-400' 
                            : 'bg-white/50 text-rose-800'
                        }`}
                      >
                        <span className="mr-2 flex-shrink-0">•</span>
                        {warning}
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            )}

            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 space-y-3">
              <button 
                onClick={handleShare} 
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg relative overflow-hidden group"
              >
                <AnimatePresence mode="wait">
                  {copySuccess ? (
                    <motion.div
                      key="success"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Link Copied!
                    </motion.div>
                  ) : (
                    <motion.div
                      key="share"
                      initial={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Share2 className="w-4 h-4" />
                      Share Tank
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <button onClick={() => { const text = generateShoppingList(items, tankConfig, stats); const blob = new Blob([text], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'aquarium-setup.txt'; a.click(); }} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg"><Download className="w-4 h-4" /> Export Setup</button>
              <button onClick={clearAll} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors"><Trash2 className="w-4 h-4" /> Clear All</button>
            </div>
          </div>

          <div className="xl:col-span-2 space-y-6"><div className="bg-white rounded-2xl shadow-xl border border-slate-200"><div className="bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-200 px-6 py-4 flex items-center justify-between"><div><h3 className="text-lg font-bold text-slate-900">3D Preview</h3><p className="text-xs text-slate-500 mt-1">Aspect Ratio: {tankConfig.aspectRatio?.toFixed(2) || 'N/A'} • Surface: {tankConfig.length * tankConfig.width}cm²</p></div><div className="flex items-center gap-4"><label className="flex items-center gap-2 text-xs cursor-pointer"><input type="checkbox" checked={showGrid} onChange={(e) => setShowGrid(e.target.checked)} className="rounded" /><Grid3x3 className="w-3 h-3" /></label><label className="flex items-center gap-2 text-xs cursor-pointer"><input type="checkbox" checked={showCompatibility} onChange={(e) => setShowCompatibility(e.target.checked)} className="rounded" /><span className="text-slate-600 font-medium">Warnings</span></label></div></div>
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
      </div>
    </div>
  );
};

const generateShoppingList = (items: TankItem[], config: TankConfig, stats: any): string => {
  const fish = items.filter(i => i.type === 'fish');
  const plants = items.filter(i => i.type === 'plant');
  const hardscape = items.filter(i => i.type === 'hardscape');
  let text = '🐠 AQUARIUM SETUP PLAN\n══════════════════════════════════\n\n📐 TANK SPECIFICATIONS:\nVolume: ' + config.volume + 'L\nDimensions: ' + config.length + '×' + config.width + '×' + config.height + 'cm (L×W×H)\nSurface Area: ' + (config.length * config.width).toFixed(0) + 'cm²\n\n';
  
  if (fish.length > 0) {
    text += '🐟 FISH STOCKING:\n';
    const fishGroups = new Map<string, number>();
    fish.forEach(item => {
      const species = item.data as Species;
      const current = fishGroups.get(species.taxonomy.commonName) || 0;
      fishGroups.set(species.taxonomy.commonName, current + (item.count || 1));
    });
    fishGroups.forEach((count, name) => {
      const fItem = fish.find(f => (f.data as Species).taxonomy.commonName === name);
      const s = fItem?.data as Species;
      text += '  ' + count + 'x ' + name + '\n     Scientific: ' + s.taxonomy.scientificName + '\n     Adult Size: ' + s.visuals.adultSizeCM + 'cm\n\n';
    });
  }
  
  if (plants.length > 0) {
    text += '🌿 PLANTS:\n';
    plants.forEach(item => {
      const p = item.data as Plant;
      text += '  • ' + p.taxonomy.commonName + ' (' + p.taxonomy.scientificName + ')\n';
    });
    text += '\n';
  }
  
  if (hardscape.length > 0) {
    text += '🪨 HARDSCAPE:\n';
    hardscape.forEach(item => {
      const hs = item.data as HardscapeItem;
      text += '  • ' + hs.name + ' (~' + hs.size + 'cm)\n';
    });
    text += '\n';
  }
  
  text += '📊 STOCKING ANALYSIS:\nStocking Level: ' + stats.stockingPercentage + '%\n';
  
  text += '\n🛠️ RECOMMENDED HARDWARE:\n';
  text += '• Filter: ' + stats.filterRate + ' L/h flow rate\n';
  text += '• Heater: ' + stats.heaterWattage + ' Watts\n';
  text += '• Lighting: ' + stats.lightingLumens + '+ Lumens\n';

  text += '\nGenerated by AquaGuide Tank Builder\n' + new Date().toLocaleDateString() + '\n';
  return text;
};
