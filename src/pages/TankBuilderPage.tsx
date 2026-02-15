import { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, Layers, Ruler, Fish as FishIcon, Leaf, AlertTriangle, Download, Info, Lock, Unlock, Mountain, ChevronUp, ChevronDown, Droplets, Thermometer, Grid3x3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { allSpecies } from '../data/species';
import { allPlants } from '../data/plants';
import { SEOHead } from '../components/seo/SEOHead';
import type { Species } from '../types/species';
import type { Plant } from '../types/plant';

interface HardscapeItem {
  id: string;
  name: string;
  icon: string;
  size: number;
  color: string;
  type: 'rock' | 'wood' | 'decoration';
}

interface TankItem {
  id: string;
  type: 'fish' | 'plant' | 'hardscape';
  data: Species | Plant | HardscapeItem;
  position: { x: number; y: number; z: number };
  count?: number;
  locked?: boolean;
  visuals?: {
    rotation?: number;
    flipX?: boolean;
    swayDelay?: number;
    floatSpeed?: number;
  };
}

interface TankConfig {
  name: string;
  length: number;
  width: number;
  height: number;
  volume: number;
  aspectRatio: number;
}

const PRESET_TANKS: TankConfig[] = [
  { name: 'Nano (20L)', length: 40, width: 25, height: 25, volume: 20, aspectRatio: 1.6 },
  { name: 'Nano (30L)', length: 30, width: 30, height: 35, volume: 30, aspectRatio: 0.86 },
  { name: 'Standard (54L)', length: 60, width: 30, height: 30, volume: 54, aspectRatio: 2.0 },
  { name: 'Standard (112L)', length: 80, width: 35, height: 40, volume: 112, aspectRatio: 2.0 },
  { name: 'Medium (180L)', length: 100, width: 40, height: 45, volume: 180, aspectRatio: 2.22 },
  { name: 'Large (240L)', length: 120, width: 40, height: 50, volume: 240, aspectRatio: 2.4 },
  { name: 'XL (350L)', length: 150, width: 50, height: 50, volume: 350, aspectRatio: 3.0 },
  { name: 'Custom', length: 80, width: 40, height: 40, volume: 128, aspectRatio: 2.0 },
];

const HARDSCAPE_LIBRARY: HardscapeItem[] = [
  { id: 'rock-s', name: 'Small Rock', icon: '🪨', size: 5, color: '#666', type: 'rock' },
  { id: 'rock-m', name: 'Medium Rock', icon: '🪨', size: 10, color: '#555', type: 'rock' },
  { id: 'rock-l', name: 'Large Rock', icon: '🗿', size: 18, color: '#444', type: 'rock' },
  { id: 'seiryu', name: 'Seiryu Stone', icon: '⛰️', size: 15, color: '#5a5a5a', type: 'rock' },
  { id: 'dragon', name: 'Dragon Stone', icon: '🏔️', size: 12, color: '#7a6952', type: 'rock' },
  { id: 'wood-s', name: 'Driftwood', icon: '🪵', size: 12, color: '#8B4513', type: 'wood' },
  { id: 'wood-l', name: 'Large Wood', icon: '🪵', size: 25, color: '#654321', type: 'wood' },
  { id: 'spiderwood', name: 'Spiderwood', icon: '🌳', size: 20, color: '#8B7355', type: 'wood' },
  { id: 'manzanita', name: 'Manzanita', icon: '🌿', size: 22, color: '#A0522D', type: 'wood' },
  { id: 'cave', name: 'Cave', icon: '🏔️', size: 10, color: '#777', type: 'decoration' },
  { id: 'shell', name: 'Shell', icon: '🐚', size: 3, color: '#F5DEB3', type: 'decoration' },
  { id: 'coconut', name: 'Coconut Cave', icon: '🥥', size: 8, color: '#8B4513', type: 'decoration' },
  { id: 'bamboo', name: 'Bamboo Tube', icon: '🎋', size: 10, color: '#6B8E23', type: 'decoration' },
];

const AUTOSAVE_KEY = 'tankBuilder_autosave';

export const TankBuilderPage = () => {
  const [tankConfig, setTankConfig] = useState<TankConfig>(PRESET_TANKS[2]);
  const [customDimensions, setCustomDimensions] = useState({ length: 80, width: 40, height: 40 });
  const [items, setItems] = useState<TankItem[]>([]);
  const [selectedTab, setSelectedTab] = useState<'fish' | 'plant' | 'hardscape'>('fish');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCompatibility, setShowCompatibility] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
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

  const filteredSpecies = allSpecies.filter((s: Species) => 
    s.taxonomy.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.taxonomy.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 20);

  const filteredPlants = allPlants.filter((p: Plant) => 
    p.taxonomy.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.taxonomy.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 20);

  const filteredHardscape = HARDSCAPE_LIBRARY.filter(h => h.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const getItemStyle = (realSizeCM: number, item: TankItem) => {
    const tankL = tankConfig.length;
    let widthPercent = 0;
    let aspectRatio = '1/1';
    
    if (item.type === 'plant') {
        const plant = item.data as Plant;
        const isFloating = plant.specs.placement?.includes('floating') || plant.specs.type === 'float';
        
        if (isFloating) {
             widthPercent = (realSizeCM / tankL) * 100 * 2;
             aspectRatio = '2/1'; 
        } else {
             const visualWidthCM = realSizeCM * 0.4; 
             widthPercent = (visualWidthCM / tankL) * 100;
             aspectRatio = '1/2.5'; 
        }
    } else if (item.type === 'hardscape') {
        widthPercent = (realSizeCM / tankL) * 100;
        aspectRatio = '1/1';
    } else {
        widthPercent = (realSizeCM / tankL) * 100;
        const species = item.data as Species;
        switch(species.visuals.iconShape) {
          case 'fusiform': aspectRatio = '3/1'; break;
          case 'compressed': aspectRatio = '1/1.2'; break;
          case 'eel-like': aspectRatio = '8/1'; break;
          case 'depressed': aspectRatio = '3/1'; break;
          case 'globiform': aspectRatio = '1.5/1'; break;
          case 'shrimp': aspectRatio = '2/1'; break;
          case 'frog': aspectRatio = '1.2/1'; break;
          default: aspectRatio = '2/1';
        }
    }

    return {
        width: `${Math.max(2, widthPercent)}%`,
        aspectRatio
    };
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

  const removeItem = (id: string) => { setItems(items.filter(item => item.id !== id)); if (selectedItem === id) setSelectedItem(null); };
  const toggleLock = (id: string) => { setItems(items.map(item => item.id === id ? { ...item, locked: !item.locked } : item)); };
  const updatePosition = (id: string, x: number, y: number) => { setItems(items.map(item => item.id === id ? { ...item, position: { ...item.position, x, y } } : item)); };
  const updateCount = (id: string, delta: number) => { setItems(items.map(item => { if (item.id === id && item.type === 'fish') { const newCount = Math.max(1, (item.count || 1) + delta); return { ...item, count: newCount }; } return item; })); };

  const totalFish = items.filter(i => i.type === 'fish').reduce((acc, item) => acc + (item.count || 1), 0);
  const totalPlants = items.filter(i => i.type === 'plant').length;
  const totalHardscape = items.filter(i => i.type === 'hardscape').length;
  const totalBioload = items.filter(i => i.type === 'fish').reduce((acc, item) => { const species = item.data as Species; return acc + (species.visuals.adultSizeCM * (item.count || 1)); }, 0);
  
  const surfaceAreaCM2 = tankConfig.length * tankConfig.width;
  const surfaceAreaInches = surfaceAreaCM2 / 6.45;
  const stockingByInchRule = surfaceAreaInches;
  const stockingPercent = Math.round((totalBioload / stockingByInchRule) * 100);
  
  const warnings: string[] = [];
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

  if (stockingPercent > 100) { warnings.push(`⚖️ Overstocked! ${stockingPercent}% of recommended capacity`); } else if (stockingPercent > 80) { warnings.push(`⚠️ Near capacity at ${stockingPercent}%`); }

  const aggressiveFish = fishItems.filter(item => { const species = item.data as Species; return species.behavior.tags.includes('semi-aggressive') || species.behavior.tags.includes('territorial'); });
  if (aggressiveFish.length > 0 && fishItems.length > aggressiveFish.length) { const uniqueAggressive = new Set(aggressiveFish.map(item => (item.data as Species).taxonomy.commonName)); uniqueAggressive.forEach(name => { warnings.push(`⚠️ ${name} may be aggressive - monitor closely`); }); }

  const bottomDwellers = fishItems.filter(item => { const species = item.data as Species; return species.behavior.tags.includes('bottom_dweller'); });
  if (bottomDwellers.length > 1) { const uniqueBottom = new Set(bottomDwellers.map(item => (item.data as Species).taxonomy.commonName)); if (uniqueBottom.size > 1) { warnings.push('🏠 Multiple bottom dwellers - ensure enough hiding spots'); } }

  const plantDensityPerLiter = totalPlants / tankConfig.volume;
  if (totalPlants > 0 && plantDensityPerLiter < 0.1) { warnings.push(`🌿 Consider adding more plants (${totalPlants} plants for ${tankConfig.volume}L)`); }

  let tempRange = '', phRange = '';
  if (fishItems.length > 0) {
    const temps = fishItems.map(item => { const species = item.data as Species; return { min: species.environment.tempC.min, max: species.environment.tempC.max }; });
    const phs = fishItems.map(item => { const species = item.data as Species; return { min: species.environment.ph.min, max: species.environment.ph.max }; });
    const tempMin = Math.max(...temps.map(t => t.min)); const tempMax = Math.min(...temps.map(t => t.max));
    const phMin = Math.max(...phs.map(p => p.min)); const phMax = Math.min(...phs.map(p => p.max));
    if (tempMin <= tempMax) tempRange = `${tempMin}-${tempMax}°C`;
    if (phMin <= phMax) phRange = `${phMin.toFixed(1)}-${phMax.toFixed(1)}`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 pb-20">
      <SEOHead title="Tank Builder - Plan Your Aquarium" description="Interactive 3D aquarium planner with realistic dimensions. Plan your perfect tank setup." />
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white pt-24 pb-12 px-6"><div className="max-w-7xl mx-auto"><h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">🐠 Tank Builder</h1><p className="text-lg text-blue-100 max-w-2xl">Design your dream aquarium with realistic dimensions and stocking calculations.</p></div></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-8"><div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6"><h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center"><Ruler className="w-5 h-5 mr-2 text-indigo-600" /> Tank Dimensions</h3><div className="space-y-3 max-h-80 overflow-y-auto">{PRESET_TANKS.slice(0, -1).map((preset, idx) => (<button key={idx} onClick={() => setTankConfig(preset)} className={`w-full text-left p-4 rounded-xl border-2 transition-all ${tankConfig.volume === preset.volume && tankConfig.length === preset.length ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-blue-50 shadow-md' : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50'}`}><div className="flex items-center justify-between"><div><div className="font-bold text-slate-900">{preset.name}</div><div className="text-xs text-slate-500">{preset.length}×{preset.width}×{preset.height}cm</div></div>{tankConfig.volume === preset.volume && tankConfig.length === preset.length && (<div className="w-3 h-3 bg-indigo-500 rounded-full" />)}</div></button>))}
                <div className="border-t-2 border-slate-200 pt-3 mt-3"><div className="font-bold text-slate-900 mb-3 flex items-center justify-between"><span>Custom Dimensions</span><button onClick={updateCustomTank} className="text-xs px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">Apply</button></div><div className="space-y-2"><div><label className="text-xs text-slate-600">Length (cm)</label><input type="number" value={customDimensions.length} onChange={(e) => setCustomDimensions({ ...customDimensions, length: Number(e.target.value) })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" min="20" max="300" /></div><div><label className="text-xs text-slate-600">Width (cm)</label><input type="number" value={customDimensions.width} onChange={(e) => setCustomDimensions({ ...customDimensions, width: Number(e.target.value) })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" min="20" max="100" /></div><div><label className="text-xs text-slate-600">Height (cm)</label><input type="number" value={customDimensions.height} onChange={(e) => setCustomDimensions({ ...customDimensions, height: Number(e.target.value) })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" min="20" max="100" /></div></div></div></div></div>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6"><h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-emerald-600" /> Tank Stats</h3><div className="space-y-4"><StatRow label="💧 Volume" value={`${tankConfig.volume}L`} /><StatRow label="📐 Dimensions" value={`${tankConfig.length}×${tankConfig.width}×${tankConfig.height}cm`} /><StatRow label="🐟 Total Fish" value={totalFish.toString()} /><StatRow label="🌿 Plants" value={totalPlants.toString()} /><StatRow label="🪨 Hardscape" value={totalHardscape.toString()} />
                <div className="pt-2"><div className="flex items-center justify-between mb-2"><span className="text-sm text-slate-600">⚖️ Stocking Level</span><span className={`font-bold text-sm ${stockingPercent > 100 ? 'text-rose-600' : stockingPercent > 80 ? 'text-amber-600' : 'text-emerald-600'}`}>{stockingPercent}%</span></div><div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(100, stockingPercent)}%` }} className={`h-full ${stockingPercent > 100 ? 'bg-rose-500' : stockingPercent > 80 ? 'bg-amber-500' : 'bg-emerald-500'}`} /></div><div className="text-xs text-slate-500 mt-1">{totalBioload.toFixed(0)}cm / {stockingByInchRule.toFixed(0)}cm recommended</div></div>
                {tempRange && (<div className="flex items-center justify-between pt-2 border-t border-slate-200"><div className="flex items-center gap-2 text-sm text-slate-600"><Thermometer className="w-4 h-4" /><span>Temperature</span></div><span className="font-bold text-sm text-slate-900">{tempRange}</span></div>)}
                {phRange && (<div className="flex items-center justify-between"><div className="flex items-center gap-2 text-sm text-slate-600"><Droplets className="w-4 h-4" /><span>pH Range</span></div><span className="font-bold text-sm text-slate-900">{phRange}</span></div>)}</div></div>

            {showCompatibility && warnings.length > 0 && (<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-rose-50 to-red-50 border-2 border-rose-300 rounded-2xl p-5 shadow-lg"><h3 className="text-sm font-bold text-rose-900 mb-3 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" /> Compatibility Issues ({warnings.length})</h3><ul className="space-y-2 max-h-48 overflow-y-auto">{warnings.map((warning, i) => (<motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="text-xs text-rose-800 flex items-start bg-white/50 rounded-lg p-2"><span className="mr-2 flex-shrink-0">•</span>{warning}</motion.li>))}</ul></motion.div>)}

            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 space-y-3"><button onClick={() => { const text = generateShoppingList(items, tankConfig); const blob = new Blob([text], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'aquarium-setup.txt'; a.click(); }} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg"><Download className="w-4 h-4" /> Export Setup</button><button onClick={() => { if (confirm('Clear entire tank?')) { setItems([]); } }} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors"><Trash2 className="w-4 h-4" /> Clear All</button></div>
          </div>

          <div className="xl:col-span-2 space-y-6"><div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"><div className="bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-200 px-6 py-4 flex items-center justify-between"><div><h3 className="text-lg font-bold text-slate-900">3D Preview</h3><p className="text-xs text-slate-500 mt-1">Aspect Ratio: {tankConfig.aspectRatio?.toFixed(2) || 'N/A'} • Surface: {surfaceAreaCM2}cm²</p></div><div className="flex items-center gap-4"><label className="flex items-center gap-2 text-xs cursor-pointer"><input type="checkbox" checked={showGrid} onChange={(e) => setShowGrid(e.target.checked)} className="rounded" /><Grid3x3 className="w-3 h-3" /></label><label className="flex items-center gap-2 text-xs cursor-pointer"><input type="checkbox" checked={showCompatibility} onChange={(e) => setShowCompatibility(e.target.checked)} className="rounded" /><span className="text-slate-600 font-medium">Warnings</span></label></div></div>
              <Tank3DView items={items} tankConfig={tankConfig} showGrid={showGrid} getItemStyle={getItemStyle} onRemoveItem={removeItem} onToggleLock={toggleLock} onUpdatePosition={updatePosition} onUpdateCount={updateCount} draggedItem={draggedItem} setDraggedItem={setDraggedItem} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-200"><div className="flex border-b border-slate-200"><TabButton active={selectedTab === 'fish'} onClick={() => setSelectedTab('fish')} icon={<FishIcon className="w-4 h-4" />} label="Fish" count={allSpecies.length} color="indigo" /><TabButton active={selectedTab === 'plant'} onClick={() => setSelectedTab('plant')} icon={<Leaf className="w-4 h-4" />} label="Plants" count={allPlants.length} color="emerald" /><TabButton active={selectedTab === 'hardscape'} onClick={() => setSelectedTab('hardscape')} icon={<Mountain className="w-4 h-4" />} label="Hardscape" count={HARDSCAPE_LIBRARY.length} color="amber" /></div>
              <div className="p-4 border-b border-slate-200"><input type="text" placeholder={`Search ${selectedTab}...`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" /></div>
              <div className="p-4 max-h-[400px] overflow-y-auto">{selectedTab === 'fish' && (<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">{filteredSpecies.map((species: Species) => (<ItemCard key={species.id} name={species.taxonomy.commonName} image={species.imageUrl} subtitle={`${species.visuals.adultSizeCM}cm • Min: ${species.environment.minTankSizeLiters}L`} onClick={() => addItem(species, 'fish')} warning={species.environment.minTankSizeLiters > tankConfig.volume} />))}</div>)}
                {selectedTab === 'plant' && (<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">{filteredPlants.map((plant: Plant) => (<ItemCard key={plant.id} name={plant.taxonomy.commonName} image={plant.imageUrl} subtitle={`${plant.specs.heightCM.max}cm • ${plant.specs.growthRate}`} onClick={() => addItem(plant, 'plant')} />))}</div>)}
                {selectedTab === 'hardscape' && (<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">{filteredHardscape.map((item: HardscapeItem) => (<HardscapeCard key={item.id} item={item} onClick={() => addItem(item, 'hardscape')} />))}</div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, label, count, color }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string; count: number; color: 'indigo' | 'emerald' | 'amber'; }) => {
  const colors = { indigo: active ? 'text-indigo-600 border-indigo-600 bg-indigo-50/50' : '', emerald: active ? 'text-emerald-600 border-emerald-600 bg-emerald-50/50' : '', amber: active ? 'text-amber-600 border-amber-600 bg-amber-50/50' : '' };
  return (<button onClick={onClick} className={`flex-1 px-6 py-4 font-bold text-sm transition-all flex items-center justify-center gap-2 ${active ? `${colors[color]} border-b-2` : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}>{icon} {label} ({count})</button>);
};

const getRealSize = (item: TankItem): number => { if (item.type === 'fish') { return (item.data as Species).visuals.adultSizeCM; } else if (item.type === 'plant') { return (item.data as Plant).specs.heightCM.max; } else { return (item.data as HardscapeItem).size; } };
const getSwimZone = (item: TankItem): 'surface' | 'mid' | 'bottom' | null => { if (item.type !== 'fish') return null; const species = item.data as Species; if (species.behavior.tags.includes('surface') || species.behavior.tags.includes('surface_dweller')) return 'surface'; if (species.behavior.tags.includes('bottom_dweller')) return 'bottom'; return 'mid'; };

const Tank3DView = ({ items, tankConfig, showGrid, getItemStyle, onRemoveItem, onToggleLock, onUpdatePosition, onUpdateCount, draggedItem, setDraggedItem, selectedItem, setSelectedItem }: { items: TankItem[]; tankConfig: TankConfig; showGrid: boolean; getItemStyle: (size: number, item: TankItem) => { width: string; aspectRatio: string; }; onRemoveItem: (id: string) => void; onToggleLock: (id: string) => void; onUpdatePosition: (id: string, x: number, y: number) => void; onUpdateCount: (id: string, delta: number) => void; draggedItem: string | null; setDraggedItem: (id: string | null) => void; selectedItem: string | null; setSelectedItem: (id: string | null) => void; }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMouseDown = (id: string, item: TankItem) => { if (!item.locked) { setDraggedItem(id); setSelectedItem(id); } };
  const handleMouseMove = (e: React.MouseEvent) => { if (!draggedItem || !containerRef.current) return; const rect = containerRef.current.getBoundingClientRect(); const x = ((e.clientX - rect.left) / rect.width) * 100; const y = ((e.clientY - rect.top) / rect.height) * 100; const clampedX = Math.max(5, Math.min(95, x)); const clampedY = Math.max(5, Math.min(95, y)); onUpdatePosition(draggedItem, clampedX, clampedY); };
  const handleMouseUp = () => { setDraggedItem(null); };
  const containerAspectRatio = Math.max(1.5, Math.min(3.5, tankConfig.aspectRatio || (tankConfig.length / tankConfig.height) || 2.0));

  return (<div ref={containerRef} className="relative bg-gradient-to-b from-cyan-50 via-blue-100 to-blue-300 overflow-hidden cursor-crosshair" style={{ aspectRatio: `${containerAspectRatio} / 1` }} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onClick={() => setSelectedItem(null)}><div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse" />{showGrid && (<div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '10% 10%' }} />)}<div className="absolute inset-0 pointer-events-none"><div className="absolute top-0 left-0 right-0 h-[20%] border-b border-dashed border-blue-400/30" /><div className="absolute bottom-[20%] left-0 right-0 h-[60%] border-b border-dashed border-blue-400/30" /></div><div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-b from-amber-700 to-amber-900 opacity-90" /><AnimatePresence>{items.map(item => { const realSize = getRealSize(item); const style = getItemStyle(realSize, item); const zone = getSwimZone(item); const isSelected = selectedItem === item.id; const rotation = item.visuals?.rotation || 0; const flipX = item.visuals?.flipX || false; const swayDelay = item.visuals?.swayDelay || 0; const floatSpeed = item.visuals?.floatSpeed || 4; const isFar = item.position.z < 40; const depthFilter = isFar ? 'brightness(0.85) contrast(0.9) blur(0.5px)' : 'none'; const zScale = 1 + (item.position.z - 50) / 200; return (<motion.div key={item.id} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: isSelected ? zScale * 1.1 : zScale }} exit={{ opacity: 0, scale: 0 }} whileHover={{ scale: zScale * 1.05 }} className={`absolute group ${item.locked ? 'cursor-not-allowed' : 'cursor-move'}`} style={{ left: `${item.position.x}%`, top: `${item.position.y}%`, transform: 'translate(-50%, -50%)', zIndex: Math.round(item.position.z) + (isSelected ? 100 : 0) }} onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(item.id, item); }}><div className="relative">{isSelected && (<motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="absolute inset-0 -m-2 border-4 border-indigo-400 rounded-full" style={{ zIndex: 50 }} />)}<div style={{ filter: depthFilter, transition: 'filter 0.3s ease' }}>{item.type === 'fish' ? (<motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: floatSpeed, repeat: Infinity, ease: 'easeInOut', delay: swayDelay }} className="relative"><div className="rounded-full overflow-hidden shadow-2xl border-4 border-white/90 relative bg-white transition-transform duration-500" style={{ width: style.width, aspectRatio: style.aspectRatio, transform: flipX ? 'scaleX(-1)' : 'none' }}>{(item.data as Species).imageUrl ? (<img src={(item.data as Species).imageUrl} alt={(item.data as Species).taxonomy.commonName} className="w-full h-full object-contain" draggable={false} />) : (<div className={`w-full h-full flex items-center justify-center text-white ${zone === 'surface' ? 'bg-gradient-to-br from-blue-400 to-blue-600' : zone === 'bottom' ? 'bg-gradient-to-br from-amber-500 to-amber-700' : 'bg-gradient-to-br from-indigo-400 to-indigo-600'}`}><FishIcon className="w-1/2 h-1/2" /></div>)}</div>{item.count && item.count > 1 && (<div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-xl border-2 border-white z-20">{item.count}</div>)}</motion.div>) : item.type === 'plant' ? (<motion.div animate={{ rotate: [-2, 2, -2] }} transition={{ duration: floatSpeed * 1.5, repeat: Infinity, ease: 'easeInOut', delay: swayDelay }} style={{ transformOrigin: 'bottom center' }}><div className="rounded-t-3xl overflow-hidden shadow-2xl border-4 border-white/90 relative bg-white" style={{ width: style.width, aspectRatio: style.aspectRatio }}>{(item.data as Plant).imageUrl ? (<img src={(item.data as Plant).imageUrl} alt={(item.data as Plant).taxonomy.commonName} className="w-full h-full object-cover" draggable={false} />) : (<div className="w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white"><Leaf className="w-1/2 h-1/2" /></div>)}</div></motion.div>) : (<div className=\"rounded-lg flex items-center justify-center shadow-xl text-4xl backdrop-blur-sm transition-transform\" style={{ width: style.width, aspectRatio: style.aspectRatio, backgroundColor: (item.data as HardscapeItem).color, border: '3px solid rgba(255,255,255,0.4)', transform: `rotate(${rotation}deg)` }}>{(item.data as HardscapeItem).icon}</div>)}<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/20 blur-md pointer-events-none" style={{ width: '100%', height: '20%', opacity: Math.max(0.1, 1 - (item.position.y / 100)) }} /></div><div className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50"><div className="bg-slate-900 text-white text-xs px-4 py-3 rounded-xl whitespace-nowrap shadow-2xl border border-slate-700">{'taxonomy' in item.data && (<div><div className="font-bold text-sm">{item.data.taxonomy.commonName}</div><div className="text-slate-300 text-xs">{realSize}cm • Adult size</div>{item.count && item.count > 1 && (<div className="text-indigo-300 text-xs mt-1">Quantity: {item.count}</div>)}</div>)}{'name' in item.data && (<div><div className="font-bold">{item.data.name}</div><div className="text-slate-300">{realSize}cm</div></div>)}</div></div><div className="absolute -top-3 -right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-50">{item.type === 'fish' && (<div className="flex flex-col gap-1"><button onClick={(e) => { e.stopPropagation(); onUpdateCount(item.id, 1); }} className="w-7 h-7 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center shadow-lg transition-colors"><ChevronUp className="w-4 h-4" /></button><button onClick={(e) => { e.stopPropagation(); onUpdateCount(item.id, -1); }} className="w-7 h-7 bg-rose-500 hover:bg-rose-600 text-white rounded-lg flex items-center justify-center shadow-lg transition-colors"><ChevronDown className="w-4 h-4" /></button></div>)}<div className="flex flex-col gap-1"><button onClick={(e) => { e.stopPropagation(); onToggleLock(item.id); }} className="w-7 h-7 bg-slate-700 hover:bg-slate-800 text-white rounded-lg flex items-center justify-center shadow-lg transition-colors">{item.locked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}</button><button onClick={(e) => { e.stopPropagation(); onRemoveItem(item.id); }} className="w-7 h-7 bg-rose-500 hover:bg-rose-600 text-white rounded-lg flex items-center justify-center shadow-lg transition-colors"><Trash2 className="w-3 h-3" /></button></div></div>{item.locked && (<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-slate-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white z-40"><Lock className="w-2.5 h-2.5 text-white" /></div>)}</div></motion.div>); })}</AnimatePresence>{items.length === 0 && (<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="text-center text-slate-600 bg-white/90 backdrop-blur-sm px-10 py-8 rounded-2xl shadow-2xl border-2 border-slate-200"><Info className="w-14 h-14 mx-auto mb-4 text-indigo-500" /><p className="font-bold text-xl mb-2">Empty Tank</p><p className="text-sm text-slate-500">Add fish, plants, and hardscape from below</p><p className="text-xs text-slate-400 mt-2">💡 Drag items to position them</p></div></motion.div>)}</div>);
};

const ItemCard = ({ name, image, subtitle, onClick, warning }: { name: string; image?: string; subtitle?: string; onClick: () => void; warning?: boolean; }) => (<motion.button whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.95 }} onClick={onClick} className={`group relative bg-gradient-to-br from-slate-50 to-white hover:from-white hover:to-slate-50 border-2 rounded-xl overflow-hidden transition-all shadow-md hover:shadow-xl ${warning ? 'border-rose-300' : 'border-slate-200 hover:border-indigo-400'}`}>{warning && (<div className="absolute top-2 left-2 z-10 bg-rose-500 text-white px-2 py-1 rounded-md text-[10px] font-bold">Too big!</div>)}<div className="aspect-square bg-slate-200 overflow-hidden">{image ? (<img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />) : (<div className="w-full h-full flex items-center justify-center text-slate-400"><FishIcon className="w-10 h-10" /></div>)}</div><div className="p-3"><p className="text-xs font-bold text-slate-900 truncate">{name}</p>{subtitle && <p className="text-[10px] text-slate-500 font-medium">{subtitle}</p>}</div><div className="absolute top-2 right-2 w-7 h-7 bg-indigo-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg"><Plus className="w-4 h-4" /></div></motion.button>);

const HardscapeCard = ({ item, onClick }: { item: HardscapeItem; onClick: () => void }) => (<motion.button whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.95 }} onClick={onClick} className="group relative bg-gradient-to-br from-slate-50 to-white hover:from-white hover:to-slate-50 border-2 border-slate-200 hover:border-amber-400 rounded-xl overflow-hidden transition-all shadow-md hover:shadow-xl"><div className="aspect-square overflow-hidden flex items-center justify-center text-5xl" style={{ backgroundColor: item.color + '15' }}>{item.icon}</div><div className="p-3"><p className="text-xs font-bold text-slate-900 truncate">{item.name}</p><p className="text-[10px] text-slate-500 font-medium">{item.size}cm</p></div><div className="absolute top-2 right-2 w-7 h-7 bg-amber-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg"><Plus className="w-4 h-4" /></div></motion.button>);

const StatRow = ({ label, value, warning }: { label: string; value: string; warning?: boolean }) => (<div className="flex items-center justify-between"><span className="text-sm text-slate-600 font-medium">{label}</span><span className={`font-bold text-sm ${warning ? 'text-rose-600' : 'text-slate-900'}`}>{value}</span></div>);

const generateShoppingList = (items: TankItem[], config: TankConfig): string => {
  const fish = items.filter(i => i.type === 'fish');
  const plants = items.filter(i => i.type === 'plant');
  const hardscape = items.filter(i => i.type === 'hardscape');
  let text = '🐠 AQUARIUM SETUP PLAN\n═══════════════════════════════════\n\n📐 TANK SPECIFICATIONS:\nVolume: ' + config.volume + 'L\nDimensions: ' + config.length + '×' + config.width + '×' + config.height + 'cm (L×W×H)\nSurface Area: ' + (config.length * config.width).toFixed(0) + 'cm²\n\n';
  
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
  
  const bioload = fish.reduce((acc, item) => acc + ((item.data as Species).visuals.adultSizeCM * (item.count || 1)), 0);
  const surfaceAreaInches = (config.length * config.width) / 6.45;
  const stockingPercent = Math.round((bioload / surfaceAreaInches) * 100);
  
  text += '📊 STOCKING ANALYSIS:\nTotal Bioload: ' + bioload.toFixed(0) + 'cm of fish\nStocking Level: ' + stockingPercent + '%\n\nGenerated by AquaGuide Tank Builder\n' + new Date().toLocaleDateString() + '\n';
  return text;
};
