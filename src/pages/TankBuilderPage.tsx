import { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, Layers, Ruler, Fish as FishIcon, Leaf, AlertTriangle, Download, Save, Info, Lock, Unlock, Mountain } from 'lucide-react';
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
}

interface TankConfig {
  length: number;
  width: number;
  height: number;
  volume: number;
}

const PRESET_TANKS = [
  { name: 'Nano (30L)', length: 30, width: 30, height: 35, volume: 30 },
  { name: 'Standard (60L)', length: 60, width: 30, height: 35, volume: 60 },
  { name: 'Medium (120L)', length: 80, width: 35, height: 45, volume: 120 },
  { name: 'Large (200L)', length: 100, width: 40, height: 50, volume: 200 },
  { name: 'XL (300L)', length: 120, width: 50, height: 50, volume: 300 },
];

const HARDSCAPE_LIBRARY: HardscapeItem[] = [
  { id: 'rock-s', name: 'Small Rock', icon: '🪨', size: 8, color: '#666', type: 'rock' },
  { id: 'rock-m', name: 'Medium Rock', icon: '🪨', size: 15, color: '#555', type: 'rock' },
  { id: 'rock-l', name: 'Large Rock', icon: '🗿', size: 25, color: '#444', type: 'rock' },
  { id: 'wood-s', name: 'Driftwood', icon: '🪵', size: 15, color: '#8B4513', type: 'wood' },
  { id: 'wood-l', name: 'Large Wood', icon: '🪵', size: 30, color: '#654321', type: 'wood' },
  { id: 'cave', name: 'Cave', icon: '🏔️', size: 12, color: '#777', type: 'decoration' },
  { id: 'shell', name: 'Shell', icon: '🐚', size: 5, color: '#F5DEB3', type: 'decoration' },
  { id: 'coconut', name: 'Coconut Cave', icon: '🥥', size: 10, color: '#8B4513', type: 'decoration' },
];

const AUTOSAVE_KEY = 'tankBuilder_autosave';

export const TankBuilderPage = () => {
  const [tankConfig, setTankConfig] = useState<TankConfig>(PRESET_TANKS[1]);
  const [items, setItems] = useState<TankItem[]>([]);
  const [selectedTab, setSelectedTab] = useState<'fish' | 'plant' | 'hardscape'>('fish');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCompatibility, setShowCompatibility] = useState(true);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(AUTOSAVE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setTankConfig(data.tankConfig);
        setItems(data.items);
      } catch (e) {
        console.error('Failed to load autosave', e);
      }
    }
  }, []);

  // Auto-save to localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(AUTOSAVE_KEY, JSON.stringify({ tankConfig, items, timestamp: Date.now() }));
    }, 1000);
    return () => clearTimeout(timer);
  }, [tankConfig, items]);

  // Filter species/plants
  const filteredSpecies = allSpecies.filter((s: Species) => 
    s.taxonomy.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.taxonomy.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 20);

  const filteredPlants = allPlants.filter((p: Plant) => 
    p.taxonomy.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.taxonomy.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 20);

  const filteredHardscape = HARDSCAPE_LIBRARY.filter(h =>
    h.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add item to tank
  const addItem = (data: Species | Plant | HardscapeItem, type: 'fish' | 'plant' | 'hardscape') => {
    const newItem: TankItem = {
      id: `${type}-${('id' in data ? data.id : data.name)}-${Date.now()}`,
      type,
      data,
      position: { 
        x: Math.random() * 70 + 15, 
        y: type === 'plant' ? 80 : type === 'hardscape' ? 85 : Math.random() * 40 + 30, 
        z: Math.random() * 60 + 20 
      },
      count: type === 'fish' ? 1 : undefined,
      locked: false
    };
    setItems([...items, newItem]);
  };

  // Remove item
  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Toggle lock
  const toggleLock = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, locked: !item.locked } : item
    ));
  };

  // Update position
  const updatePosition = (id: string, x: number, y: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, position: { ...item.position, x, y } } : item
    ));
  };

  // Calculate stats
  const totalFish = items.filter(i => i.type === 'fish').reduce((acc, item) => acc + (item.count || 1), 0);
  const totalPlants = items.filter(i => i.type === 'plant').length;
  const totalHardscape = items.filter(i => i.type === 'hardscape').length;
  const totalBioload = items.filter(i => i.type === 'fish').reduce((acc, item) => {
    const species = item.data as Species;
    return acc + (species.visuals.adultSizeCM * (item.count || 1));
  }, 0);
  
  // Enhanced compatibility warnings
  const warnings: string[] = [];
  const fishItems = items.filter(i => i.type === 'fish');
  
  // Temperature range check
  if (fishItems.length > 1) {
    const temps = fishItems.map(item => {
      const species = item.data as Species;
      return { min: species.environment.tempC.min, max: species.environment.tempC.max, name: species.taxonomy.commonName };
    });
    const overallMin = Math.max(...temps.map(t => t.min));
    const overallMax = Math.min(...temps.map(t => t.max));
    if (overallMin > overallMax) {
      warnings.push(`Temperature conflict: No overlap between species`);
    }
  }

  // pH range check
  if (fishItems.length > 1) {
    const phs = fishItems.map(item => {
      const species = item.data as Species;
      return { min: species.environment.ph.min, max: species.environment.ph.max, name: species.taxonomy.commonName };
    });
    const overallMin = Math.max(...phs.map(p => p.min));
    const overallMax = Math.min(...phs.map(p => p.max));
    if (overallMin > overallMax) {
      warnings.push(`pH conflict: No compatible range`);
    }
  }

  // Tank size check
  fishItems.forEach(item => {
    const species = item.data as Species;
    if (species.environment.minTankSizeLiters > tankConfig.volume) {
      warnings.push(`${species.taxonomy.commonName} needs minimum ${species.environment.minTankSizeLiters}L`);
    }
  });

  // Group size check
  fishItems.forEach(item => {
    const species = item.data as Species;
    const count = item.count || 1;
    if (species.behavior.minGroupSize > 1 && count < species.behavior.minGroupSize) {
      warnings.push(`${species.taxonomy.commonName}: Keep at least ${species.behavior.minGroupSize} (you have ${count})`);
    }
  });

  // Bioload check
  const bioloadLimit = tankConfig.volume * 2;
  if (totalBioload > bioloadLimit) {
    warnings.push(`Bioload too high! ${totalBioload.toFixed(0)}cm vs recommended ${bioloadLimit}cm`);
  }

  // Aggressive fish check
  const aggressiveFish = fishItems.filter(item => {
    const species = item.data as Species;
    return species.behavior.tags.includes('aggressive') || species.behavior.tags.includes('territorial');
  });
  if (aggressiveFish.length > 0 && fishItems.length > aggressiveFish.length) {
    aggressiveFish.forEach(item => {
      const species = item.data as Species;
      warnings.push(`⚠️ ${species.taxonomy.commonName} is aggressive - check compatibility`);
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 pb-20">
      <SEOHead 
        title="Tank Builder - Plan Your Aquarium"
        description="Interactive 3D aquarium planner. Add fish and plants to visualize your perfect tank."
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Tank Builder</h1>
          <p className="text-lg text-indigo-100 max-w-2xl">Design your dream aquarium in 3D. Drag items to position them!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* LEFT: Tank Selector & Stats */}
          <div className="xl:col-span-1 space-y-6">
            {/* Tank Size Selector */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <Ruler className="w-5 h-5 mr-2 text-indigo-600" /> Tank Dimensions
              </h3>
              <div className="space-y-3">
                {PRESET_TANKS.map(preset => (
                  <button
                    key={preset.name}
                    onClick={() => setTankConfig(preset)}
                    className={`w-full text-left p-3 rounded-xl border-2 transition-all ${
                      tankConfig.volume === preset.volume
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-slate-200 hover:border-indigo-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold text-slate-900">{preset.name}</div>
                    <div className="text-xs text-slate-500">{preset.length}×{preset.width}×{preset.height}cm</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <Layers className="w-5 h-5 mr-2 text-emerald-600" /> Tank Stats
              </h3>
              <div className="space-y-4">
                <StatRow label="Volume" value={`${tankConfig.volume}L`} />
                <StatRow label="Total Fish" value={totalFish.toString()} />
                <StatRow label="Total Plants" value={totalPlants.toString()} />
                <StatRow label="Hardscape" value={totalHardscape.toString()} />
                <StatRow 
                  label="Bioload" 
                  value={`${totalBioload.toFixed(0)}/${bioloadLimit}cm`}
                  warning={totalBioload > bioloadLimit}
                />
              </div>
            </div>

            {/* Warnings */}
            {showCompatibility && warnings.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-5"
              >
                <h3 className="text-sm font-bold text-rose-900 mb-3 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" /> Compatibility Issues
                </h3>
                <ul className="space-y-2 max-h-48 overflow-y-auto">
                  {warnings.map((warning, i) => (
                    <li key={i} className="text-xs text-rose-800 flex items-start">
                      <span className="w-1 h-1 bg-rose-500 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                      {warning}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 space-y-3">
              <button 
                onClick={() => {
                  const text = generateShoppingList(items, tankConfig);
                  const blob = new Blob([text], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'tank-shopping-list.txt';
                  a.click();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors"
              >
                <Download className="w-4 h-4" /> Shopping List
              </button>
              <button 
                onClick={() => {
                  if (confirm('Clear entire tank?')) {
                    setItems([]);
                  }
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors"
              >
                <Trash2 className="w-4 h-4" /> Clear All
              </button>
            </div>
          </div>

          {/* CENTER: 3D Tank View */}
          <div className="xl:col-span-2 space-y-6">
            {/* 3D Canvas */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">3D Preview</h3>
                <label className="flex items-center gap-2 text-xs">
                  <input 
                    type="checkbox" 
                    checked={showCompatibility} 
                    onChange={(e) => setShowCompatibility(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-slate-600 font-medium">Show warnings</span>
                </label>
              </div>
              
              <Tank3DView 
                items={items}
                tankConfig={tankConfig}
                onRemoveItem={removeItem}
                onToggleLock={toggleLock}
                onUpdatePosition={updatePosition}
                draggedItem={draggedItem}
                setDraggedItem={setDraggedItem}
              />
            </div>

            {/* Item Browser */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200">
              {/* Tabs */}
              <div className="flex border-b border-slate-200">
                <button
                  onClick={() => setSelectedTab('fish')}
                  className={`flex-1 px-6 py-4 font-bold text-sm transition-colors flex items-center justify-center gap-2 ${
                    selectedTab === 'fish'
                      ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <FishIcon className="w-4 h-4" /> Fish ({allSpecies.length})
                </button>
                <button
                  onClick={() => setSelectedTab('plant')}
                  className={`flex-1 px-6 py-4 font-bold text-sm transition-colors flex items-center justify-center gap-2 ${
                    selectedTab === 'plant'
                      ? 'text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50/50'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Leaf className="w-4 h-4" /> Plants ({allPlants.length})
                </button>
                <button
                  onClick={() => setSelectedTab('hardscape')}
                  className={`flex-1 px-6 py-4 font-bold text-sm transition-colors flex items-center justify-center gap-2 ${
                    selectedTab === 'hardscape'
                      ? 'text-amber-600 border-b-2 border-amber-600 bg-amber-50/50'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Mountain className="w-4 h-4" /> Hardscape ({HARDSCAPE_LIBRARY.length})
                </button>
              </div>

              {/* Search */}
              <div className="p-4 border-b border-slate-200">
                <input
                  type="text"
                  placeholder={`Search ${selectedTab}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
              </div>

              {/* Items Grid */}
              <div className="p-4 max-h-[400px] overflow-y-auto">
                {selectedTab === 'fish' && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {filteredSpecies.map((species: Species) => (
                      <ItemCard
                        key={species.id}
                        name={species.taxonomy.commonName}
                        image={species.imageUrl}
                        subtitle={`${species.visuals.adultSizeCM}cm`}
                        onClick={() => addItem(species, 'fish')}
                      />
                    ))}
                  </div>
                )}
                {selectedTab === 'plant' && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {filteredPlants.map((plant: Plant) => (
                      <ItemCard
                        key={plant.id}
                        name={plant.taxonomy.commonName}
                        image={plant.imageUrl}
                        subtitle={`${plant.specs.heightCM.max}cm`}
                        onClick={() => addItem(plant, 'plant')}
                      />
                    ))}
                  </div>
                )}
                {selectedTab === 'hardscape' && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {filteredHardscape.map((item: HardscapeItem) => (
                      <HardscapeCard
                        key={item.id}
                        item={item}
                        onClick={() => addItem(item, 'hardscape')}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper: Get real size for visualization
const getRealSize = (item: TankItem): number => {
  if (item.type === 'fish') {
    return (item.data as Species).visuals.adultSizeCM;
  } else if (item.type === 'plant') {
    return (item.data as Plant).specs.heightCM.max;
  } else {
    return (item.data as HardscapeItem).size;
  }
};

// Helper: Get swim zone
const getSwimZone = (item: TankItem): 'surface' | 'mid' | 'bottom' | null => {
  if (item.type !== 'fish') return null;
  const species = item.data as Species;
  if (species.behavior.tags.includes('surface') || species.behavior.tags.includes('surface_dweller')) return 'surface';
  if (species.behavior.tags.includes('bottom_dweller')) return 'bottom';
  return 'mid';
};

// 3D Tank View Component with Drag & Drop
const Tank3DView = ({ 
  items, 
  tankConfig,
  onRemoveItem, 
  onToggleLock,
  onUpdatePosition,
  draggedItem,
  setDraggedItem
}: { 
  items: TankItem[];
  tankConfig: TankConfig;
  onRemoveItem: (id: string) => void;
  onToggleLock: (id: string) => void;
  onUpdatePosition: (id: string, x: number, y: number) => void;
  draggedItem: string | null;
  setDraggedItem: (id: string | null) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (id: string, item: TankItem) => {
    if (!item.locked) {
      setDraggedItem(id);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedItem || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Clamp to bounds
    const clampedX = Math.max(5, Math.min(95, x));
    const clampedY = Math.max(5, Math.min(95, y));
    
    onUpdatePosition(draggedItem, clampedX, clampedY);
  };

  const handleMouseUp = () => {
    setDraggedItem(null);
  };

  return (
    <div 
      ref={containerRef}
      className="relative bg-gradient-to-b from-cyan-100 via-blue-200 to-blue-400 aspect-[16/9] overflow-hidden cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Swim Zones */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[20%] border-b border-dashed border-white/20" />
        <div className="absolute bottom-[20%] left-0 right-0 h-[60%] border-b border-dashed border-white/20" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bottom-0 left-0 right-0 border-t border-slate-400"
            style={{ height: `${(i + 1) * 20}%` }}
          />
        ))}
      </div>

      {/* Substrate */}
      <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-b from-amber-800 to-amber-900 opacity-80" />

      {/* Items */}
      <AnimatePresence>
        {items.map(item => {
          const realSize = getRealSize(item);
          const displaySize = Math.max(20, Math.min(80, realSize * 2));
          const zone = getSwimZone(item);
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
              }}
              exit={{ opacity: 0, scale: 0 }}
              className={`absolute group ${
                item.locked ? 'cursor-not-allowed' : 'cursor-move'
              }`}
              style={{ 
                left: `${item.position.x}%`,
                top: `${item.position.y}%`,
                transform: `translate(-50%, -50%) scale(${1 + item.position.z / 200})`,
                zIndex: Math.round(item.position.z)
              }}
              onMouseDown={() => handleMouseDown(item.id, item)}
            >
              <div className="relative">
                {item.type === 'fish' ? (
                  <div 
                    className={`rounded-full flex items-center justify-center text-white shadow-lg ${
                      zone === 'surface' ? 'bg-blue-500' :
                      zone === 'bottom' ? 'bg-amber-600' :
                      'bg-indigo-500'
                    }`}
                    style={{ width: displaySize, height: displaySize }}
                  >
                    <FishIcon style={{ width: displaySize * 0.5, height: displaySize * 0.5 }} />
                  </div>
                ) : item.type === 'plant' ? (
                  <div 
                    className="bg-emerald-500 rounded-t-full flex items-center justify-center text-white shadow-lg"
                    style={{ width: displaySize * 0.6, height: displaySize }}
                  >
                    <Leaf style={{ width: displaySize * 0.3, height: displaySize * 0.3 }} />
                  </div>
                ) : (
                  <div 
                    className="rounded-lg flex items-center justify-center shadow-lg text-2xl"
                    style={{ 
                      width: displaySize, 
                      height: displaySize,
                      backgroundColor: (item.data as HardscapeItem).color
                    }}
                  >
                    {(item.data as HardscapeItem).icon}
                  </div>
                )}
                
                {/* Hover tooltip */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                  <div className="bg-slate-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
                    {'taxonomy' in item.data && (
                      <div>
                        <div className="font-bold">{item.data.taxonomy.commonName}</div>
                        <div className="text-slate-300">{realSize}cm</div>
                      </div>
                    )}
                    {'name' in item.data && (
                      <div>
                        <div className="font-bold">{item.data.name}</div>
                        <div className="text-slate-300">{realSize}cm</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Controls */}
                <div className="absolute -top-2 -right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => { e.stopPropagation(); onToggleLock(item.id); }}
                    className="w-6 h-6 bg-slate-700 hover:bg-slate-800 text-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    {item.locked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); onRemoveItem(item.id); }}
                    className="w-6 h-6 bg-rose-500 hover:bg-rose-600 text-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>

                {/* Lock indicator */}
                {item.locked && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-slate-700 rounded-full flex items-center justify-center">
                    <Lock className="w-2 h-2 text-white" />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Info overlay */}
      {items.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-slate-600 bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg border border-slate-200">
            <Info className="w-12 h-12 mx-auto mb-3 text-indigo-500" />
            <p className="font-bold text-lg mb-2">Empty Tank</p>
            <p className="text-sm">Add fish, plants, and hardscape from below</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Item Card
const ItemCard = ({ name, image, subtitle, onClick }: { 
  name: string; 
  image?: string; 
  subtitle?: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="group relative bg-slate-50 hover:bg-slate-100 border-2 border-slate-200 hover:border-indigo-400 rounded-xl overflow-hidden transition-all hover:shadow-lg active:scale-95"
  >
    <div className="aspect-square bg-slate-200 overflow-hidden">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-slate-400">
          <FishIcon className="w-8 h-8" />
        </div>
      )}
    </div>
    <div className="p-2">
      <p className="text-xs font-bold text-slate-900 truncate">{name}</p>
      {subtitle && <p className="text-[10px] text-slate-500">{subtitle}</p>}
    </div>
    <div className="absolute top-2 right-2 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
      <Plus className="w-4 h-4" />
    </div>
  </button>
);

// Hardscape Card
const HardscapeCard = ({ item, onClick }: { item: HardscapeItem; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="group relative bg-slate-50 hover:bg-slate-100 border-2 border-slate-200 hover:border-amber-400 rounded-xl overflow-hidden transition-all hover:shadow-lg active:scale-95"
  >
    <div className="aspect-square bg-slate-200 overflow-hidden flex items-center justify-center text-4xl" style={{ backgroundColor: item.color + '20' }}>
      {item.icon}
    </div>
    <div className="p-2">
      <p className="text-xs font-bold text-slate-900 truncate">{item.name}</p>
      <p className="text-[10px] text-slate-500">{item.size}cm</p>
    </div>
    <div className="absolute top-2 right-2 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
      <Plus className="w-4 h-4" />
    </div>
  </button>
);

// Stat Row
const StatRow = ({ label, value, warning }: { label: string; value: string; warning?: boolean }) => (
  <div className="flex items-center justify-between">
    <span className="text-sm text-slate-600">{label}</span>
    <span className={`font-bold text-sm ${
      warning ? 'text-rose-600' : 'text-slate-900'
    }`}>
      {value}
    </span>
  </div>
);

// Generate shopping list
const generateShoppingList = (items: TankItem[], tankConfig: TankConfig): string => {
  const fish = items.filter(i => i.type === 'fish');
  const plants = items.filter(i => i.type === 'plant');
  const hardscape = items.filter(i => i.type === 'hardscape');
  
  let text = `🐠 AQUARIUM SHOPPING LIST\n`;
  text += `Tank: ${tankConfig.volume}L (${tankConfig.length}×${tankConfig.width}×${tankConfig.height}cm)\n\n`;
  
  if (fish.length > 0) {
    text += `🐟 FISH:\n`;
    fish.forEach(item => {
      const species = item.data as Species;
      text += `- ${item.count || 1}x ${species.taxonomy.commonName} (${species.taxonomy.scientificName})\n`;
    });
    text += `\n`;
  }
  
  if (plants.length > 0) {
    text += `🌿 PLANTS:\n`;
    plants.forEach(item => {
      const plant = item.data as Plant;
      text += `- 1x ${plant.taxonomy.commonName} (${plant.taxonomy.scientificName})\n`;
    });
    text += `\n`;
  }
  
  if (hardscape.length > 0) {
    text += `🪨 HARDSCAPE:\n`;
    hardscape.forEach(item => {
      const hs = item.data as HardscapeItem;
      text += `- 1x ${hs.name} (~${hs.size}cm)\n`;
    });
    text += `\n`;
  }
  
  const bioload = fish.reduce((acc, item) => {
    const species = item.data as Species;
    return acc + (species.visuals.adultSizeCM * (item.count || 1));
  }, 0);
  
  text += `📊 EQUIPMENT RECOMMENDATIONS:\n`;
  text += `- Filter: ${tankConfig.volume * 5} L/h minimum\n`;
  text += `- Heater: ${Math.ceil(tankConfig.volume / 4) * 25}W\n`;
  text += `- Light: Check plant requirements\n`;
  text += `\n💡 Total Bioload: ${bioload.toFixed(0)}cm fish\n`;
  
  return text;
};
