import { useState } from 'react';
import { Plus, Trash2, Layers, Ruler, Fish as FishIcon, Leaf, AlertTriangle, Download, Save, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { allSpecies } from '../data/species';
import { allPlants } from '../data/plants';
import { SEOHead } from '../components/seo/SEOHead';
import type { Species } from '../types/species';
import type { Plant } from '../types/plant';

interface TankItem {
  id: string;
  type: 'fish' | 'plant';
  data: Species | Plant;
  position: { x: number; y: number; z: number };
  count?: number;
}

interface TankConfig {
  length: number; // cm
  width: number;
  height: number;
  volume: number; // liters
}

const PRESET_TANKS = [
  { name: 'Nano (30L)', length: 30, width: 30, height: 35, volume: 30 },
  { name: 'Standard (60L)', length: 60, width: 30, height: 35, volume: 60 },
  { name: 'Medium (120L)', length: 80, width: 35, height: 45, volume: 120 },
  { name: 'Large (200L)', length: 100, width: 40, height: 50, volume: 200 },
  { name: 'XL (300L)', length: 120, width: 50, height: 50, volume: 300 },
];

export const TankBuilderPage = () => {
  const [tankConfig, setTankConfig] = useState<TankConfig>(PRESET_TANKS[1]);
  const [items, setItems] = useState<TankItem[]>([]);
  const [selectedTab, setSelectedTab] = useState<'fish' | 'plant'>('fish');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCompatibility, setShowCompatibility] = useState(true);

  // Filter species/plants
  const filteredSpecies = allSpecies.filter(s => 
    s.taxonomy.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.taxonomy.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 20);

  const filteredPlants = allPlants.filter(p => 
    p.taxonomy.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.taxonomy.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 20);

  // Add item to tank
  const addItem = (data: Species | Plant, type: 'fish' | 'plant') => {
    const newItem: TankItem = {
      id: `${type}-${data.id}-${Date.now()}`,
      type,
      data,
      position: { 
        x: Math.random() * 80 + 10, 
        y: type === 'plant' ? 85 : Math.random() * 40 + 30, 
        z: Math.random() * 60 + 20 
      },
      count: type === 'fish' ? 1 : undefined
    };
    setItems([...items, newItem]);
  };

  // Remove item
  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Calculate tank stats
  const totalFish = items.filter(i => i.type === 'fish').reduce((acc, item) => acc + (item.count || 1), 0);
  const totalPlants = items.filter(i => i.type === 'plant').length;
  const totalBioload = items.filter(i => i.type === 'fish').reduce((acc, item) => {
    const species = item.data as Species;
    return acc + (species.visuals.adultSizeCM * (item.count || 1));
  }, 0);
  
  // Compatibility warnings
  const warnings: string[] = [];
  const fishItems = items.filter(i => i.type === 'fish');
  
  // Check if tank is too small
  fishItems.forEach(item => {
    const species = item.data as Species;
    if (species.environment.minTankSizeLiters > tankConfig.volume) {
      warnings.push(`${species.taxonomy.commonName} needs minimum ${species.environment.minTankSizeLiters}L`);
    }
  });

  // Check bioload
  const bioloadLimit = tankConfig.volume * 2; // Rule of thumb: 2cm fish per liter
  if (totalBioload > bioloadLimit) {
    warnings.push(`Bioload too high! ${totalBioload}cm vs recommended ${bioloadLimit}cm`);
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
          <p className="text-lg text-indigo-100 max-w-2xl">Design your dream aquarium in 3D. Add species, check compatibility, and plan your setup.</p>
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
                <StatRow 
                  label="Bioload" 
                  value={`${totalBioload}/${bioloadLimit}cm`}
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
                <ul className="space-y-2">
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
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors">
                <Save className="w-4 h-4" /> Save Design
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors">
                <Download className="w-4 h-4" /> Export PDF
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
                tankConfig={tankConfig} 
                items={items}
                onRemoveItem={removeItem}
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
                  <FishIcon className="w-4 h-4" /> Add Fish ({allSpecies.length})
                </button>
                <button
                  onClick={() => setSelectedTab('plant')}
                  className={`flex-1 px-6 py-4 font-bold text-sm transition-colors flex items-center justify-center gap-2 ${
                    selectedTab === 'plant'
                      ? 'text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50/50'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Leaf className="w-4 h-4" /> Add Plants ({allPlants.length})
                </button>
              </div>

              {/* Search */}
              <div className="p-4 border-b border-slate-200">
                <input
                  type="text"
                  placeholder={`Search ${selectedTab === 'fish' ? 'fish' : 'plants'}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
              </div>

              {/* Items Grid */}
              <div className="p-4 max-h-[400px] overflow-y-auto">
                {selectedTab === 'fish' ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {filteredSpecies.map(species => (
                      <ItemCard
                        key={species.id}
                        name={species.taxonomy.commonName}
                        image={species.imageUrl}
                        onClick={() => addItem(species, 'fish')}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {filteredPlants.map(plant => (
                      <ItemCard
                        key={plant.id}
                        name={plant.taxonomy.commonName}
                        image={plant.imageUrl}
                        onClick={() => addItem(plant, 'plant')}
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

// 3D Tank View Component
const Tank3DView = ({ tankConfig, items, onRemoveItem }: { 
  tankConfig: TankConfig; 
  items: TankItem[];
  onRemoveItem: (id: string) => void;
}) => {
  const aspectRatio = tankConfig.length / tankConfig.height;
  
  return (
    <div className="relative bg-gradient-to-b from-cyan-100 via-blue-200 to-blue-400 aspect-[16/9] overflow-hidden">
      {/* Grid lines for depth */}
      <div className="absolute inset-0 opacity-10">
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
        {items.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: `${item.position.x}%`,
              y: `${item.position.y}%`,
            }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute group cursor-pointer"
            style={{ 
              transform: `scale(${1 + item.position.z / 200})`,
              zIndex: Math.round(item.position.z)
            }}
          >
            <div className="relative">
              {item.type === 'fish' ? (
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <FishIcon className="w-6 h-6" />
                </div>
              ) : (
                <div className="w-10 h-16 bg-emerald-500 rounded-t-full flex items-center justify-center text-white shadow-lg">
                  <Leaf className="w-5 h-5" />
                </div>
              )}
              
              {/* Hover overlay */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-slate-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
                  {'taxonomy' in item.data && item.data.taxonomy.commonName}
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={() => onRemoveItem(item.id)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 hover:bg-rose-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-lg"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Info overlay */}
      {items.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-slate-600 bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg border border-slate-200">
            <Info className="w-12 h-12 mx-auto mb-3 text-indigo-500" />
            <p className="font-bold text-lg mb-2">Empty Tank</p>
            <p className="text-sm">Add fish and plants from the browser below</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Item Card for selection
const ItemCard = ({ name, image, onClick }: { name: string; image?: string; onClick: () => void }) => (
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
    </div>
    <div className="absolute top-2 right-2 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
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
