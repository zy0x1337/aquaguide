import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fish as FishIcon, Leaf, Lock, Unlock, Trash2, Info, LayoutTemplate, Box, AlertCircle } from 'lucide-react';
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

const getZoneWarning = (item: TankItem, y: number): string | null => {
  const zone = getSwimZone(item);
  if (!zone) return null;
  // y is 0 (top) to 100 (bottom)
  if (zone === 'surface' && y > 33) return 'Prefer surface';
  if (zone === 'bottom' && y < 66) return 'Prefer bottom';
  return null;
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
  const [containerWidth, setContainerWidth] = useState(0);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'front' | 'top'>('front');

  // ResizeObserver to track container width in pixels
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) setContainerWidth(entry.contentRect.width);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Calculate pixels per centimeter based on container width and real tank length
  const pxPerCm = containerWidth > 0 ? containerWidth / tankConfig.length : 0;

  const getItemStyle = (realSizeCM: number, item: TankItem) => {
    const widthPx = realSizeCM * pxPerCm;
    
    if (viewMode === 'top') {
      // Top view dimensions
      if (item.type === 'fish') {
        return { width: `${Math.max(15, widthPx)}px`, height: `${Math.max(8, widthPx * 0.3)}px`, borderRadius: '50%' };
      }
      if (item.type === 'plant') {
        // Assume spread is roughly half height for visualization
        const spreadPx = widthPx * 0.5;
        return { width: `${Math.max(15, spreadPx)}px`, height: `${Math.max(15, spreadPx)}px`, borderRadius: '50%' };
      }
      // Hardscape
      return { width: `${Math.max(15, widthPx)}px`, height: `${Math.max(15, widthPx)}px`, borderRadius: '20%' };
    }

    // Front view dimensions (existing logic)
    let aspectRatio = '1/1';
    let renderWidth = widthPx;

    if (item.type === 'plant') {
        const plant = item.data as Plant;
        const isFloating = plant.specs.placement?.includes('floating') || plant.specs.type === 'float';
        if (isFloating) { renderWidth = widthPx * 2; aspectRatio = '2/1'; } 
        else { renderWidth = widthPx * 0.4; aspectRatio = '1/2.5'; }
    } else if (item.type === 'hardscape') {
        aspectRatio = '1/1';
    } else {
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

    return { width: `${Math.max(20, renderWidth)}px`, aspectRatio, height: 'auto' };
  };

  const handleMouseDown = useCallback((id: string, item: TankItem) => {
    if (item.locked) return;
    setDraggedItem(id);
    setSelectedItem(id);
  }, [setSelectedItem]);

  useEffect(() => {
    if (!draggedItem) return;

    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      const clampedX = Math.max(0, Math.min(100, x));
      const clampedY = Math.max(0, Math.min(100, y));
      
      onUpdatePosition(draggedItem, clampedX, clampedY);
    };

    const handleWindowMouseUp = () => { setDraggedItem(null); };

    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseup', handleWindowMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, [draggedItem, onUpdatePosition]);

  const aspectRatio = viewMode === 'front' 
    ? (tankConfig.length / tankConfig.height) 
    : (tankConfig.length / tankConfig.width);
  
  const containerAspectRatio = Math.max(1.5, Math.min(3.5, aspectRatio || 2.0));

  return (
    <div className="relative">
      {/* View Toggle Controls */}
      <div className="absolute top-4 right-4 z-50 flex bg-white/90 backdrop-blur rounded-lg shadow-sm border border-slate-200 p-1">
        <button 
          onClick={() => setViewMode('front')}
          className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-2 transition-colors ${viewMode === 'front' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          <Box className="w-3.5 h-3.5" /> Front View
        </button>
        <button 
          onClick={() => setViewMode('top')}
          className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-2 transition-colors ${viewMode === 'top' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          <LayoutTemplate className="w-3.5 h-3.5" /> Blueprint
        </button>
      </div>

      <div 
        ref={containerRef} 
        className={`relative w-full transition-colors duration-500 cursor-crosshair select-none isolate ${viewMode === 'front' ? 'bg-gradient-to-b from-cyan-50 via-blue-100 to-blue-300' : 'bg-slate-50'}`} 
        style={{ aspectRatio: `${containerAspectRatio} / 1` }} 
        onClick={() => setSelectedItem(null)}
      >
        {/* Background Layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {viewMode === 'front' && (
            <>
               <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse" />
               <div className="absolute top-0 left-0 right-0 h-[20%] border-b border-dashed border-blue-400/30 flex items-end justify-end px-2 py-1"><span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">Surface Zone</span></div>
               <div className="absolute bottom-[20%] left-0 right-0 h-[60%] border-b border-dashed border-blue-400/30 flex items-end justify-end px-2 py-1"><span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">Mid Zone</span></div>
               <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-b from-amber-700 to-amber-900 opacity-90"><div className="w-full h-full flex items-start justify-end px-2 py-1"><span className="text-[10px] text-amber-200/50 font-bold uppercase tracking-wider">Substrate</span></div></div>
            </>
          )}
          {viewMode === 'top' && (
             <div 
                className="absolute inset-0 opacity-20" 
                style={{ 
                  backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }} 
              />
          )}
          {showGrid && (
            <div 
              className="absolute inset-0 opacity-30" 
              style={{ 
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', 
                backgroundSize: '10% 10%' 
              }} 
            />
          )}
        </div>

        {/* Items Layer */}
        <div className="absolute inset-0 z-10">
          <AnimatePresence>
            {items.map(item => {
              const realSize = getRealSize(item);
              const style = getItemStyle(realSize, item);
              const zoneWarning = viewMode === 'front' ? getZoneWarning(item, item.position.y) : null;
              
              const isSelected = selectedItem === item.id;
              const rotation = item.visuals?.rotation || 0;
              const flipX = item.visuals?.flipX || false;
              
              // Coordinates switch based on view mode
              const posX = item.position.x;
              const posY = viewMode === 'front' ? item.position.y : item.position.z;
              const zIndex = viewMode === 'front' ? Math.round(item.position.z) : Math.round(item.position.y); // In top view, Y (height) is Z-index

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: isSelected ? 1.1 : 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className={`absolute group ${item.locked ? 'cursor-not-allowed' : 'cursor-move'}`}
                  style={{
                    left: `${posX}%`,
                    top: `${posY}%`,
                    ...style,
                    transform: 'translate(-50%, -50%)',
                    zIndex: zIndex + (isSelected ? 100 : 0)
                  }}
                  onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(item.id, item); }}
                >
                  <div className="relative w-full h-full">
                    {isSelected && (
                      <div className={`absolute inset-0 -m-1 border-2 rounded-full pointer-events-none ${viewMode === 'top' ? 'border-indigo-500' : 'border-indigo-400'}`} style={{ zIndex: 50 }} />
                    )}
                    
                    {/* Visual Warning Badge */}
                    {zoneWarning && (
                       <div className="absolute -top-3 -right-3 z-50 bg-rose-500 text-white rounded-full p-0.5 shadow-sm animate-bounce">
                          <AlertCircle className="w-3 h-3" />
                       </div>
                    )}

                    {viewMode === 'front' ? (
                      // FRONT VIEW RENDER
                      <div className="w-full h-full" style={{ filter: (item.position.z < 40) ? 'brightness(0.9) blur(0.5px)' : 'none', transition: 'filter 0.3s ease' }}>
                        {item.type === 'fish' ? (
                          <div className="w-full h-full rounded-full overflow-hidden relative transition-transform duration-500" style={{ transform: flipX ? 'scaleX(-1)' : 'none' }}>
                             {(item.data as Species).imageUrl ? (
                               <img src={(item.data as Species).imageUrl} className="w-full h-full object-contain pointer-events-none" />
                             ) : (
                               <FishIcon className="w-full h-full text-indigo-500" />
                             )}
                          </div>
                        ) : item.type === 'plant' ? (
                           <div className="w-full h-full rounded-t-3xl overflow-hidden relative">
                             {(item.data as Plant).imageUrl ? (
                               <img src={(item.data as Plant).imageUrl} className="w-full h-full object-cover pointer-events-none" />
                             ) : (
                               <Leaf className="w-full h-full text-emerald-500" />
                             )}
                           </div>
                        ) : (
                           <div className="w-full h-full flex items-center justify-center text-2xl" style={{ transform: `rotate(${rotation}deg)` }}>
                             {(item.data as HardscapeItem).icon}
                           </div>
                        )}
                        {/* Shadow */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-black/20 rounded-full blur-[2px]" />
                      </div>
                    ) : (
                      // TOP VIEW RENDER (Blueprint)
                      <div className="w-full h-full flex items-center justify-center transition-all">
                        {item.type === 'fish' ? (
                           <div 
                             className="w-full h-full bg-indigo-500/80 rounded-full shadow-sm flex items-center justify-center"
                             style={{ transform: flipX ? 'rotate(180deg)' : 'rotate(0deg)' }}
                           >
                             <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[8px] border-l-white ml-1" />
                           </div>
                        ) : item.type === 'plant' ? (
                           <div className="w-full h-full bg-emerald-500/40 border border-emerald-600/60 rounded-full flex items-center justify-center">
                              <div className="w-1/3 h-1/3 bg-emerald-600 rounded-full" />
                           </div>
                        ) : (
                           <div 
                             className="w-full h-full bg-slate-400/80 border border-slate-600 rounded-lg flex items-center justify-center text-[10px]"
                             style={{ transform: `rotate(${rotation}deg)` }}
                           >
                             <div className="w-full h-full bg-stripes-slate opacity-50" />
                           </div>
                        )}
                        <div className="absolute -bottom-4 text-[8px] font-bold text-slate-500 whitespace-nowrap bg-white/80 px-1 rounded shadow-sm opacity-0 group-hover:opacity-100 pointer-events-none">
                           {Math.round(viewMode === 'top' ? item.position.y : item.position.z)}% H
                        </div>
                      </div>
                    )}

                    {/* Tooltip & Controls (Shared) */}
                    {zoneWarning && (
                       <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                          {zoneWarning}
                       </div>
                    )}
                    
                    <div className="absolute -top-8 -right-8 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-50 scale-75 origin-bottom-left">
                      <div className="flex flex-col gap-1">
                        <button onClick={(e) => { e.stopPropagation(); onToggleLock(item.id); }} className="w-6 h-6 bg-slate-700 hover:bg-slate-800 text-white rounded flex items-center justify-center shadow transition-colors">
                          {item.locked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); onRemoveItem(item.id); }} className="w-6 h-6 bg-rose-500 hover:bg-rose-600 text-white rounded flex items-center justify-center shadow transition-colors">
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {items.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center text-slate-500 bg-white/50 backdrop-blur-sm px-8 py-6 rounded-xl border border-white/40 shadow-sm">
                <Info className="w-10 h-10 mx-auto mb-2 text-indigo-400" />
                <p className="font-bold text-lg">Empty Tank</p>
                <p className="text-xs">Drag items here</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
