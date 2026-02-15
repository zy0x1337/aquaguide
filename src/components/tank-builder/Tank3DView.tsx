import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fish as FishIcon, Leaf, Lock, Unlock, Trash2, ChevronUp, ChevronDown, Info } from 'lucide-react';
import { TankItem, TankConfig, HardscapeItem } from '../../types/builder';
import { Species } from '../../types/species';
import { Plant } from '../../types/plant';

interface Tank3DViewProps {
  items: TankItem[];
  tankConfig: TankConfig;
  showGrid: boolean;
  onRemoveItem: (id: string) => void;
  onToggleLock: (id: string) => void;
  onUpdatePosition: (id: string, x: number, y: number) => void;
  onUpdateCount: (id: string, delta: number) => void;
  selectedItem: string | null;
  setSelectedItem: (id: string | null) => void;
}

const getRealSize = (item: TankItem): number => {
  if (item.type === 'fish') {
    return (item.data as Species).visuals.adultSizeCM;
  } else if (item.type === 'plant') {
    return (item.data as Plant).specs.heightCM.max;
  } else {
    return (item.data as HardscapeItem).size;
  }
};

const getSwimZone = (item: TankItem): 'surface' | 'mid' | 'bottom' | null => {
  if (item.type !== 'fish') return null;
  const species = item.data as Species;
  if (species.behavior.tags.includes('surface') || species.behavior.tags.includes('surface_dweller')) return 'surface';
  if (species.behavior.tags.includes('bottom_dweller')) return 'bottom';
  return 'mid';
};

export const Tank3DView = ({ 
  items, 
  tankConfig, 
  showGrid, 
  onRemoveItem, 
  onToggleLock, 
  onUpdatePosition, 
  onUpdateCount,
  selectedItem,
  setSelectedItem
}: Tank3DViewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

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

  const handleMouseDown = (id: string, item: TankItem) => {
    if (!item.locked) {
      setDraggedItem(id);
      setSelectedItem(id);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedItem || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const clampedX = Math.max(0, Math.min(100, x));
    const clampedY = Math.max(0, Math.min(100, y));
    onUpdatePosition(draggedItem, clampedX, clampedY);
  };

  const handleMouseUp = () => {
    setDraggedItem(null);
  };

  const containerAspectRatio = Math.max(1.5, Math.min(3.5, tankConfig.aspectRatio || (tankConfig.length / tankConfig.height) || 2.0));

  return (
    <div 
      ref={containerRef} 
      className="relative bg-gradient-to-b from-cyan-50 via-blue-100 to-blue-300 cursor-crosshair" 
      style={{ aspectRatio: `${containerAspectRatio} / 1` }} 
      onMouseMove={handleMouseMove} 
      onMouseUp={handleMouseUp} 
      onMouseLeave={handleMouseUp} 
      onClick={() => setSelectedItem(null)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse pointer-events-none" />
      {showGrid && (
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
            backgroundSize: '10% 10%' 
          }} 
        />
      )}
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[20%] border-b border-dashed border-blue-400/30" />
        <div className="absolute bottom-[20%] left-0 right-0 h-[60%] border-b border-dashed border-blue-400/30" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-b from-amber-700 to-amber-900 opacity-90 pointer-events-none" />

      <AnimatePresence>
        {items.map(item => {
          const realSize = getRealSize(item);
          const style = getItemStyle(realSize, item);
          const zone = getSwimZone(item);
          const isSelected = selectedItem === item.id;
          const rotation = item.visuals?.rotation || 0;
          const flipX = item.visuals?.flipX || false;
          const swayDelay = item.visuals?.swayDelay || 0;
          const floatSpeed = item.visuals?.floatSpeed || 4;
          const isFar = item.position.z < 40;
          const depthFilter = isFar ? 'brightness(0.85) contrast(0.9) blur(0.5px)' : 'none';
          const zScale = 1 + (item.position.z - 50) / 200;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: isSelected ? zScale * 1.1 : zScale }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: zScale * 1.05 }}
              className={`absolute group ${item.locked ? 'cursor-not-allowed' : 'cursor-move'}`}
              style={{
                left: `${item.position.x}%`,
                top: `${item.position.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: Math.round(item.position.z) + (isSelected ? 100 : 0)
              }}
              onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(item.id, item); }}
            >
              <div className="relative">
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 -m-2 border-4 border-indigo-400 rounded-full"
                    style={{ zIndex: 50 }}
                  />
                )}
                
                <div style={{ filter: depthFilter, transition: 'filter 0.3s ease' }}>
                  {item.type === 'fish' ? (
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: floatSpeed, repeat: Infinity, ease: 'easeInOut', delay: swayDelay }}
                      className="relative"
                    >
                      <div
                        className="rounded-full overflow-hidden shadow-2xl border-4 border-white/90 relative bg-white transition-transform duration-500"
                        style={{ width: style.width, aspectRatio: style.aspectRatio, transform: flipX ? 'scaleX(-1)' : 'none' }}
                      >
                        {(item.data as Species).imageUrl ? (
                          <img src={(item.data as Species).imageUrl} alt={(item.data as Species).taxonomy.commonName} className="w-full h-full object-contain" draggable={false} />
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center text-white ${zone === 'surface' ? 'bg-gradient-to-br from-blue-400 to-blue-600' : zone === 'bottom' ? 'bg-gradient-to-br from-amber-500 to-amber-700' : 'bg-gradient-to-br from-indigo-400 to-indigo-600'}`}>
                            <FishIcon className="w-1/2 h-1/2" />
                          </div>
                        )}
                      </div>
                      {item.count && item.count > 1 && (
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-xl border-2 border-white z-20">
                          {item.count}
                        </div>
                      )}
                    </motion.div>
                  ) : item.type === 'plant' ? (
                    <motion.div
                      animate={{ rotate: [-2, 2, -2] }}
                      transition={{ duration: floatSpeed * 1.5, repeat: Infinity, ease: 'easeInOut', delay: swayDelay }}
                      style={{ transformOrigin: 'bottom center' }}
                    >
                      <div className="rounded-t-3xl overflow-hidden shadow-2xl border-4 border-white/90 relative bg-white" style={{ width: style.width, aspectRatio: style.aspectRatio }}>
                        {(item.data as Plant).imageUrl ? (
                          <img src={(item.data as Plant).imageUrl} alt={(item.data as Plant).taxonomy.commonName} className="w-full h-full object-cover" draggable={false} />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white">
                            <Leaf className="w-1/2 h-1/2" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <div
                      className="rounded-lg flex items-center justify-center shadow-xl text-4xl backdrop-blur-sm transition-transform"
                      style={{
                        width: style.width,
                        aspectRatio: style.aspectRatio,
                        backgroundColor: (item.data as HardscapeItem).color,
                        border: '3px solid rgba(255,255,255,0.4)',
                        transform: `rotate(${rotation}deg)`
                      }}
                    >
                      {(item.data as HardscapeItem).icon}
                    </div>
                  )}
                  
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/20 blur-md pointer-events-none" style={{ width: '100%', height: '20%', opacity: Math.max(0.1, 1 - (item.position.y / 100)) }} />
                </div>

                <div className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                  <div className="bg-slate-900 text-white text-xs px-4 py-3 rounded-xl whitespace-nowrap shadow-2xl border border-slate-700">
                    {'taxonomy' in item.data && (
                      <div>
                        <div className="font-bold text-sm">{item.data.taxonomy.commonName}</div>
                        <div className="text-slate-300 text-xs">{realSize}cm • Adult size</div>
                        {item.count && item.count > 1 && (<div className="text-indigo-300 text-xs mt-1">Quantity: {item.count}</div>)}
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

                <div className="absolute -top-3 -right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                  {item.type === 'fish' && (
                    <div className="flex flex-col gap-1">
                      <button onClick={(e) => { e.stopPropagation(); onUpdateCount(item.id, 1); }} className="w-7 h-7 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center shadow-lg transition-colors"><ChevronUp className="w-4 h-4" /></button>
                      <button onClick={(e) => { e.stopPropagation(); onUpdateCount(item.id, -1); }} className="w-7 h-7 bg-rose-500 hover:bg-rose-600 text-white rounded-lg flex items-center justify-center shadow-lg transition-colors"><ChevronDown className="w-4 h-4" /></button>
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <button onClick={(e) => { e.stopPropagation(); onToggleLock(item.id); }} className="w-7 h-7 bg-slate-700 hover:bg-slate-800 text-white rounded-lg flex items-center justify-center shadow-lg transition-colors">
                      {item.locked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); onRemoveItem(item.id); }} className="w-7 h-7 bg-rose-500 hover:bg-rose-600 text-white rounded-lg flex items-center justify-center shadow-lg transition-colors">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {item.locked && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-slate-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white z-40">
                    <Lock className="w-2.5 h-2.5 text-white" />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {items.length === 0 && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-slate-600 bg-white/90 backdrop-blur-sm px-10 py-8 rounded-2xl shadow-2xl border-2 border-slate-200">
            <Info className="w-14 h-14 mx-auto mb-4 text-indigo-500" />
            <p className="font-bold text-xl mb-2">Empty Tank</p>
            <p className="text-sm text-slate-500">Add fish, plants, and hardscape from below</p>
            <p className="text-xs text-slate-400 mt-2">💡 Drag items to position them</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};
