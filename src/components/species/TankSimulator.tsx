import { useMemo, useState } from 'react';
import { Ruler, Users, AlertTriangle, Info, Ban, Waves, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FishSilhouette } from './FishSilhouette';

interface Props {
  fishLengthCM: number;
  fishShape: string;
  minGroupSize: number;
  minTankSizeLiters?: number;
}

type TankPreset = { label: string; lengthCM: number; volLiters: number };

const TANKS: TankPreset[] = [
  { label: 'Nano', lengthCM: 30, volLiters: 20 },
  { label: 'Standard', lengthCM: 60, volLiters: 54 },
  { label: 'Large', lengthCM: 100, volLiters: 180 },
  { label: 'X-Large', lengthCM: 150, volLiters: 450 },
];

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export const TankSimulator = ({ fishLengthCM, fishShape, minGroupSize, minTankSizeLiters = 0 }: Props) => {
  const [selectedTank, setSelectedTank] = useState<TankPreset>(TANKS[1]);
  const [displayCount, setDisplayCount] = useState<number>(clamp(minGroupSize, 1, 12));
  const [animateFish, setAnimateFish] = useState(false);

  // Fish shape analysis
  const isEel = fishShape?.toLowerCase().includes('eel');
  const isCompressed = fishShape?.toLowerCase().includes('compressed');
  const isGlobiform = fishShape?.toLowerCase().includes('globiform');
  const isDepressed = fishShape?.toLowerCase().includes('depressed');

  const aspectRatio = isGlobiform ? '1/1' : isCompressed ? '3/4' : isEel ? '5/1' : isDepressed ? '2/1' : '3/2';

  // Calculations
  const {
    visualWidthPercent,
    isPhysicallyTooLarge,
    isOvercrowded,
    isVolumeInsufficient,
    rowsNeeded,
    healthScore
  } = useMemo(() => {
    const realPhysicalPercent = (fishLengthCM / selectedTank.lengthCM) * 100;
    const isPhysicallyTooLarge = realPhysicalPercent > 60;
    const isVolumeInsufficient = minTankSizeLiters > 0 && selectedTank.volLiters < minTankSizeLiters;

    let visualMultiplier = 1.0;
    if (isEel) visualMultiplier = 1.6;
    if (isCompressed) visualMultiplier = 0.85;
    
    const rawVisual = realPhysicalPercent * visualMultiplier;
    const visualWidthPercent = clamp(rawVisual, 8, 70);

    const approxPerRow = Math.max(1, Math.floor(95 / (visualWidthPercent + 2)));
    const rowsNeeded = Math.ceil(displayCount / approxPerRow);
    const isOvercrowded = rowsNeeded > 2;

    // Health score calculation (0-100)
    let score = 100;
    if (isVolumeInsufficient) score = 0;
    else if (isPhysicallyTooLarge) score = 20;
    else if (isOvercrowded) score = 60;
    else if (displayCount < minGroupSize) score = 75;

    return {
      visualWidthPercent,
      isPhysicallyTooLarge,
      isOvercrowded,
      isVolumeInsufficient,
      rowsNeeded,
      healthScore: score
    };
  }, [fishLengthCM, selectedTank, displayCount, isEel, isCompressed, minTankSizeLiters, minGroupSize]);

  // Health score color
  const getHealthColor = () => {
    if (healthScore >= 80) return { bg: 'from-emerald-500 to-teal-600', text: 'text-emerald-700', border: 'border-emerald-300' };
    if (healthScore >= 60) return { bg: 'from-amber-500 to-orange-600', text: 'text-amber-700', border: 'border-amber-300' };
    return { bg: 'from-rose-500 to-red-600', text: 'text-rose-700', border: 'border-rose-300' };
  };

  const healthColors = getHealthColor();

  return (
    <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
      
      {/* ENHANCED HEADER */}
      <div className="relative p-6 border-b border-slate-200/50 bg-gradient-to-br from-slate-50/80 to-blue-50/30 backdrop-blur-sm">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-black text-slate-900 flex items-center gap-3 mb-2"
              >
                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                  <Ruler className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
                Tank Simulator
              </motion.h3>
              <p className="text-xs text-slate-500 font-medium">
                Interactive preview: {fishLengthCM}cm fish in {selectedTank.lengthCM}cm ({selectedTank.volLiters}L) tank
              </p>
            </div>
            
            {/* Health Score Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="relative"
            >
              <div className={`relative px-4 py-2 rounded-2xl border-2 ${healthColors.border} bg-white/90 backdrop-blur-sm shadow-lg`}>
                <div className="text-xs font-black text-slate-500 uppercase tracking-wider">Health</div>
                <div className={`text-2xl font-black ${healthColors.text}`}>{healthScore}%</div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 rounded-b-xl overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${healthScore}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${healthColors.bg}`}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Tank Size Selector */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Droplets className="w-4 h-4 text-blue-500" />
                Tank Size
              </label>
              <select
                className="w-full bg-white/90 backdrop-blur-sm border-2 border-slate-200 text-slate-700 font-bold text-sm rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 shadow-lg hover:border-indigo-300 transition-all cursor-pointer"
                value={selectedTank.lengthCM}
                onChange={(e) => {
                  const t = TANKS.find(x => x.lengthCM === Number(e.target.value));
                  if (t) {
                    setSelectedTank(t);
                    setAnimateFish(true);
                    setTimeout(() => setAnimateFish(false), 600);
                  }
                }}
              >
                {TANKS.map(t => (
                  <option key={t.lengthCM} value={t.lengthCM}>
                    {t.label} ({t.volLiters}L • {t.lengthCM}cm)
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Group Size Slider */}
            <motion.div
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-500" />
                  Group Size
                </label>
                <motion.span 
                  key={displayCount}
                  initial={{ scale: 1.3 }}
                  animate={{ scale: 1 }}
                  className="text-sm font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 shadow-sm"
                >
                  {displayCount} Fish
                </motion.span>
              </div>
              <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 border-2 border-slate-200 shadow-lg">
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={displayCount}
                  onChange={(e) => {
                    setDisplayCount(Number(e.target.value));
                    setAnimateFish(true);
                    setTimeout(() => setAnimateFish(false), 300);
                  }}
                  className="w-full h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full appearance-none cursor-pointer slider-thumb"
                  style={{
                    background: `linear-gradient(to right, rgb(79 70 229) 0%, rgb(79 70 229) ${((displayCount - 1) / 19) * 100}%, rgb(226 232 240) ${((displayCount - 1) / 19) * 100}%, rgb(226 232 240) 100%)`
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ENHANCED VISUAL TANK */}
      <div className="p-6 relative">
        <motion.div 
          layout
          className={`relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border-4 shadow-2xl transition-all duration-700
            ${(isPhysicallyTooLarge || isVolumeInsufficient) 
              ? 'border-rose-300 bg-gradient-to-b from-rose-100/50 to-red-50/30' 
              : 'border-blue-200 bg-gradient-to-b from-blue-100/30 via-cyan-50/20 to-blue-50/10'
            }
          `}
        >
          {/* Water surface effect */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-blue-200/40 to-transparent border-b-2 border-blue-300/30 backdrop-blur-sm">
            <motion.div 
              animate={{ 
                x: [-20, 20, -20],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </div>
          
          {/* Bubbles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: '100%', x: `${20 + i * 15}%`, opacity: 0 }}
                animate={{ 
                  y: '-20%',
                  opacity: [0, 0.6, 0],
                  scale: [0.5, 1, 0.8]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
                className="absolute w-2 h-2 bg-white/40 rounded-full blur-sm"
              />
            ))}
          </div>
          
          {/* Tank info label */}
          <div className="absolute bottom-3 left-3 text-xs font-black text-blue-600 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-blue-100 z-10 flex items-center gap-2">
            <Waves className="w-4 h-4 text-blue-500" />
            {selectedTank.lengthCM}cm / {selectedTank.volLiters}L
          </div>

          {/* Fish container */}
          <div className="absolute inset-0 p-6 sm:p-8 flex flex-wrap content-center justify-center gap-3 sm:gap-4 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {Array.from({ length: displayCount }).map((_, i) => (
                <motion.div
                  key={`fish-${i}`}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ 
                    opacity: 1, 
                    scale: animateFish ? [1, 1.2, 1] : 1,
                    rotate: 0,
                    y: [0, -8, 0]
                  }}
                  exit={{ opacity: 0, scale: 0, rotate: 180 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    y: {
                      duration: 2 + (i % 3) * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  style={{
                    width: `${visualWidthPercent}%`,
                    maxWidth: '100%',
                    aspectRatio,
                  }}
                  className="transition-all duration-300 ease-out origin-center"
                >
                  <FishSilhouette
                    shape={fishShape}
                    className={`w-full h-full drop-shadow-2xl transition-colors duration-700
                      ${(isPhysicallyTooLarge || isVolumeInsufficient) ? 'text-rose-700' : 'text-slate-700 hover:text-slate-900'}
                    `}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ENHANCED ALERTS */}
        <div className="mt-6 space-y-4">
          <AnimatePresence>
            {/* Fatal: Volume insufficient */}
            {isVolumeInsufficient && (
              <motion.div
                initial={{ opacity: 0, x: -20, height: 0 }}
                animate={{ opacity: 1, x: 0, height: 'auto' }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                className="bg-gradient-to-r from-rose-100 to-red-100 border-2 border-rose-300 text-rose-900 p-5 rounded-2xl flex items-start gap-4 shadow-xl"
              >
                <div className="p-2 bg-rose-500 rounded-xl shrink-0">
                  <Ban className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-black block text-rose-900 text-lg mb-1">Tank Volume Insufficient!</span>
                  <p className="text-sm text-rose-800 leading-relaxed">
                    This species requires at least <strong className="font-black">{minTankSizeLiters}L</strong>. <br/>
                    A {selectedTank.volLiters}L tank is not suitable, regardless of length.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Fatal: Length too short */}
            {!isVolumeInsufficient && isPhysicallyTooLarge && (
              <motion.div
                initial={{ opacity: 0, x: -20, height: 0 }}
                animate={{ opacity: 1, x: 0, height: 'auto' }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                className="bg-gradient-to-r from-rose-50 to-orange-50 border-2 border-rose-200 text-rose-800 p-5 rounded-2xl flex items-start gap-4 shadow-xl"
              >
                <div className="p-2 bg-rose-500 rounded-xl shrink-0">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-black block text-rose-900 text-lg mb-1">Tank Too Short!</span>
                  <p className="text-sm text-rose-800 leading-relaxed">
                    This fish reaches <strong>{fishLengthCM}cm</strong>. It physically needs more turning space.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Warning: Overcrowded */}
            {!isVolumeInsufficient && !isPhysicallyTooLarge && isOvercrowded && (
              <motion.div
                initial={{ opacity: 0, x: -20, height: 0 }}
                animate={{ opacity: 1, x: 0, height: 'auto' }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 text-amber-800 p-5 rounded-2xl flex items-start gap-4 shadow-xl"
              >
                <div className="p-2 bg-amber-500 rounded-xl shrink-0">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-black block text-amber-900 text-lg mb-1">High Stocking Density</span>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    {rowsNeeded} rows visible. The tank fits the species, but {displayCount} fish might overload the filter.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Info: Below minimum group */}
            {displayCount < minGroupSize && (
              <motion.div
                initial={{ opacity: 0, x: -20, height: 0 }}
                animate={{ opacity: 1, x: 0, height: 'auto' }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 text-blue-800 p-5 rounded-2xl flex items-start gap-4 shadow-xl"
              >
                <div className="p-2 bg-blue-500 rounded-xl shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-black block text-blue-900 text-lg mb-1">Social Warning</span>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Keep at least <strong>{minGroupSize}</strong> individuals for their well-being and natural behavior.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
