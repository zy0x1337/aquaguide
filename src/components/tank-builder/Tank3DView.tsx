import { useRef, useState, useEffect, useCallback } from 'react';
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
  const [containerWidth, setContainerWidth] = useState(0);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  // ResizeObserver to track container width in pixels
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Calculate pixels per centimeter based on container width and real tank length
  const pxPerCm = containerWidth > 0 ? containerWidth / tankConfig.length : 0;

  const getItemStyle = (realSizeCM: number, item: TankItem) => {
    // Calculate precise pixel width to prevent browser squishing
    const widthPx = realSizeCM * pxPerCm;
    
    let aspectRatio = '1/1';
    let renderWidth = widthPx;

    if (item.type === 'plant') {
        const plant = item.data as Plant;
        const isFloating = plant.specs.placement?.includes('floating') || plant.specs.type === 'float';
        
        if (isFloating) {
             renderWidth = widthPx * 2; // Floating plants spread out
             aspectRatio = '2/1'; 
        } else {
             renderWidth = widthPx * 0.4; // Stem plants are thinner
             aspectRatio = '1/2.5'; 
        }
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

    return {
        width: `${Math.max(20, renderWidth)}px`, // Min size 20px for visibility
        aspectRatio
    };
  };

  // Improved drag logic using window events to prevent getting stuck
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
      
      // Allow dragging slightly outside (0-100) but clamp for state
      const clampedX = Math.max(0, Math.min(100, x));
      const clampedY = Math.max(0, Math.min(100, y));
      
      onUpdatePosition(draggedItem, clampedX, clampedY);
    };

    const handleWindowMouseUp = () => {
      setDraggedItem(null);
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseup', handleWindowMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, [draggedItem, onUpdatePosition]);

  const containerAspectRatio = Math.max(1.5, Math.min(3.5, tankConfig.aspectRatio || (tankConfig.length / tankConfig.height) || 2.0));

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-gradient-to-b from-cyan-50 via-blue-100 to-blue-300 cursor-crosshair select-none isolate" 
      style={{ aspectRatio: `${containerAspectRatio} / 1` }} 
      onClick={() => setSelectedItem(null)}
    >
      {/* Background Layer - Hidden Overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse" />
        {showGrid && (
          <div 
            className="absolute inset-0 opacity-30" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', 
              backgroundSize: '10% 10%' 
            }} 
          />
        )}
        <div className="absolute top-0 left-0 right-0 h-[20%] border-b border-dashed border-blue-400/30" />
        <div className="absolute bottom-[20%] left-0 right-0 h-[60%] border-b border-dashed border-blue-400/30" />
        <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-b from-amber-700 to-amber-900 opacity-90" />
      </div>

      {/* Items Layer - Visible Overflow to prevent clipping */}
      <div className="absolute inset-0 z-10">
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
                  // Crucial: Fixed pixel width from calculation
                  width: style.width,
                  height: 'auto',
                  aspectRatio: style.aspectRatio,
                  transform: 'translate(-50%, -50%)', // Centered anchor point
                  zIndex: Math.round(item.position.z) + (isSelected ? 100 : 0)
                }}
                onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(item.id, item); }}
              >
                <div className="relative w-full h-full">
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute inset-0 -m-2 border-4 border-indigo-400 rounded-full pointer-events-none"
                      style={{ zIndex: 50 }}
                    />
                  )}
                  
                  <div className="w-full h-full" style={{ filter: depthFilter, transition: 'filter 0.3s ease' }}>
                    {item.type === 'fish' ? (
                      <motion.div
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ duration: floatSpeed, repeat: Infinity, ease: 'easeInOut', delay: swayDelay }}
                        className="relative w-full h-full"
                      >
                        <div
                          className="w-full h-full rounded-full overflow-hidden shadow-2xl border-2 border-white/80 relative bg-white transition-transform duration-500"
                          style={{ transform: flipX ? 'scaleX(-1)' : 'none' }}
                        >
                          {(item.data as Species).imageUrl ? (
                            <img src={(item.data as Species).imageUrl} alt={(item.data as Species).taxonomy.commonName} className="w-full h-full object-contain pointer-events-none" />
                          ) : (
                            <div className={`w-full h-full flex items-center justify-center text-white ${zone === 'surface' ? 'bg-gradient-to-br from-blue-400 to-blue-600' : zone === 'bottom' ? 'bg-gradient-to-br from-amber-500 to-amber-700' : 'bg-gradient-to-br from-indigo-400 to-indigo-600'}`}>
                              <FishIcon className="w-1/2 h-1/2" />
                            </div>
                          )}
                        </div>
                        {item.count && item.count > 1 && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md border border-white z-20">
                            {item.count}
                          </div>
                        )}
                      </motion.div>
                    ) : item.type === 'plant' ? (
                      <motion.div
                        animate={{ rotate: [-2, 2, -2] }}
                        transition={{ duration: floatSpeed * 1.5, repeat: Infinity, ease: 'easeInOut', delay: swayDelay }}
                        className="w-full h-full"
                        style={{ transformOrigin: 'bottom center' }}
                      >
                        <div className="w-full h-full rounded-t-3xl overflow-hidden shadow-xl border border-white/50 relative bg-white/10">
                          {(item.data as Plant).imageUrl ? (
                            <img src={(item.data as Plant).imageUrl} alt={(item.data as Plant).taxonomy.commonName} className="w-full h-full object-cover pointer-events-none" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white">
                              <Leaf className="w-1/2 h-1/2" />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ) : (
                      <div
                        className="w-full h-full rounded-lg flex items-center justify-center shadow-xl text-4xl backdrop-blur-sm transition-transform"
                        style={{
                          backgroundColor: (item.data as HardscapeItem).color,
                          border: '2px solid rgba(255,255,255,0.4)',
                          transform: `rotate(${rotation}deg)`
                        }}
                      >
                        <span className="pointer-events-none">{(item.data as HardscapeItem).icon}</span>
                      </div>
                    )}
                    
                    {/* Shadow */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/20 blur-md pointer-events-none" style={{ width: '80%', height: '10px', opacity: Math.max(0.1, 1 - (item.position.y / 100)) }} />
                  </div>

                  {/* Hover Tooltip */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                    <div className="bg-slate-900/90 backdrop-blur text-white text-[10px] px-3 py-2 rounded-lg whitespace-nowrap shadow-xl border border-white/10">
                      <div className="font-bold">{item.type === 'fish' ? (item.data as Species).taxonomy.commonName : item.type === 'plant' ? (item.data as Plant).taxonomy.commonName : (item.data as HardscapeItem).name}</div>
                      <div className="text-slate-300">{realSize}cm</div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="absolute -top-8 -right-8 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-50 scale-75 origin-bottom-left">
                    {item.type === 'fish' && (
                      <div className="flex flex-col gap-1">
                        <button onClick={(e) => { e.stopPropagation(); onUpdateCount(item.id, 1); }} className="w-6 h-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded flex items-center justify-center shadow transition-colors"><ChevronUp className="w-3 h-3" /></button>
                        <button onClick={(e) => { e.stopPropagation(); onUpdateCount(item.id, -1); }} className="w-6 h-6 bg-rose-500 hover:bg-rose-600 text-white rounded flex items-center justify-center shadow transition-colors"><ChevronDown className="w-3 h-3" /></button>
                      </div>
                    )}
                    <div className="flex flex-col gap-1">
                      <button onClick={(e) => { e.stopPropagation(); onToggleLock(item.id); }} className="w-6 h-6 bg-slate-700 hover:bg-slate-800 text-white rounded flex items-center justify-center shadow transition-colors">
                        {item.locked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); onRemoveItem(item.id); }} className="w-6 h-6 bg-rose-500 hover:bg-rose-600 text-white rounded flex items-center justify-center shadow transition-colors">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {item.locked && (
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-slate-700 rounded-full flex items-center justify-center shadow border border-white z-40">
                      <Lock className="w-2 h-2 text-white" />
                    </div>
                  )}
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
  );
};
