import { useMemo, useState } from 'react';
import { Ruler, Users, AlertTriangle, Info, Ban } from 'lucide-react';
import { FishSilhouette } from './FishSilhouette';

interface Props {
  fishLengthCM: number;
  fishShape: string;
  minGroupSize: number;
  minTankSizeLiters?: number; // NEU: Optional, aber wichtig für den Check!
}

type TankPreset = { label: string; lengthCM: number; volLiters: number }; // volLiters als number!

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

  // --- 1. FISCH-ANALYSE ---
  const isEel = fishShape?.toLowerCase().includes('eel');
  const isCompressed = fishShape?.toLowerCase().includes('compressed');
  const isGlobiform = fishShape?.toLowerCase().includes('globiform');
  const isDepressed = fishShape?.toLowerCase().includes('depressed');

  const aspectRatio = isGlobiform ? '1/1' : isCompressed ? '3/4' : isEel ? '5/1' : isDepressed ? '2/1' : '3/2';

  // --- 2. BERECHNUNGEN (STRENGER!) ---
  const {
    visualWidthPercent,
    isPhysicallyTooLarge,
    isOvercrowded,
    isVolumeInsufficient, // NEUER CHECK
    rowsNeeded
  } = useMemo(() => {
    // A. Physikalische Länge
    const realPhysicalPercent = (fishLengthCM / selectedTank.lengthCM) * 100;
    const isPhysicallyTooLarge = realPhysicalPercent > 60; 

    // B. Volumen Check (Hard Limit)
    // Ist das gewählte Becken (z.B. 54L) kleiner als das Minimum der Art (z.B. 100L)?
    const isVolumeInsufficient = minTankSizeLiters > 0 && selectedTank.volLiters < minTankSizeLiters;

    // C. Visuelle Darstellung
    let visualMultiplier = 1.0;
    if (isEel) visualMultiplier = 1.6;
    if (isCompressed) visualMultiplier = 0.85;
    
    const rawVisual = realPhysicalPercent * visualMultiplier;
    const visualWidthPercent = clamp(rawVisual, 8, 70);

    // D. Crowd Check (STRENGER!)
    // Vorher > 4 Reihen, jetzt > 2.5 Reihen als "voll" markieren
    const approxPerRow = Math.max(1, Math.floor(95 / (visualWidthPercent + 2))); 
    const rowsNeeded = Math.ceil(displayCount / approxPerRow);
    
    // Wenn wir mehr als 2 volle Reihen haben ODER das Volumen zu klein ist -> Crowded/Warning
    const isOvercrowded = rowsNeeded > 2; 

    return {
      visualWidthPercent,
      isPhysicallyTooLarge,
      isOvercrowded,
      isVolumeInsufficient,
      rowsNeeded
    };
  }, [fishLengthCM, selectedTank, displayCount, isEel, isCompressed, minTankSizeLiters]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      
      {/* HEADER */}
      <div className="p-5 border-b border-slate-100 bg-slate-50/50">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center">
              <Ruler className="w-5 h-5 mr-2 text-indigo-500" />
              Stocking Simulator
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Visual check: {fishLengthCM}cm adult size in {selectedTank.lengthCM}cm ({selectedTank.volLiters}L) tank.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Tank Size</label>
            <select
              className="w-full bg-white border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 shadow-sm"
              value={selectedTank.lengthCM}
              onChange={(e) => {
                const t = TANKS.find(x => x.lengthCM === Number(e.target.value));
                if (t) setSelectedTank(t);
              }}
            >
              {TANKS.map(t => (
                <option key={t.lengthCM} value={t.lengthCM}>
                  {t.label} ({t.volLiters}L • {t.lengthCM}cm)
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Group Size</label>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                {displayCount} Fish
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-slate-300 shrink-0" />
              <input
                type="range"
                min={1}
                max={20}
                value={displayCount}
                onChange={(e) => setDisplayCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* VISUAL TANK */}
      <div className="p-5 relative">
        <div className={`relative w-full h-48 sm:h-56 rounded-xl overflow-hidden border-2 shadow-inner bg-gradient-to-b from-blue-50 to-white transition-colors duration-500
          ${(isPhysicallyTooLarge || isVolumeInsufficient) ? 'border-rose-200 bg-rose-50/30' : 'border-blue-100'}
        `}>
          
          <div className="absolute top-0 left-0 right-0 h-4 bg-blue-100/30 border-b border-blue-200/50"></div>
          
          <div className="absolute bottom-2 left-2 text-[10px] font-mono font-bold text-blue-400 bg-white/80 px-2 py-1 rounded shadow-sm backdrop-blur-sm z-10">
            {selectedTank.lengthCM} cm / {selectedTank.volLiters} L
          </div>

          <div className="absolute inset-0 p-4 sm:p-6 flex flex-wrap content-center justify-center gap-2 sm:gap-3 overflow-y-auto scrollbar-hide">
            {Array.from({ length: displayCount }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: `${visualWidthPercent}%`,
                  maxWidth: '100%',
                  aspectRatio,
                }}
                className="transition-all duration-300 ease-out origin-center"
              >
                <FishSilhouette
                  shape={fishShape}
                  className={`w-full h-full drop-shadow-md opacity-90 transition-colors
                    ${(isPhysicallyTooLarge || isVolumeInsufficient) ? 'text-rose-800' : 'text-slate-700'}
                  `}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ALERTS (Priorisiert) */}
        <div className="mt-4 space-y-3">
          
          {/* 1. FATAL: Volumen zu klein (NEU) */}
          {isVolumeInsufficient && (
            <div className="bg-rose-100 border border-rose-200 text-rose-900 p-3 rounded-lg text-sm flex items-start gap-3 animate-pulse-slow">
              <Ban className="w-5 h-5 shrink-0 text-rose-600" />
              <div>
                <span className="font-bold block text-rose-800">Tank Volume Insufficient!</span>
                This species requires at least <strong>{minTankSizeLiters} Liters</strong>. <br/>
                A {selectedTank.volLiters}L tank is not suitable, regardless of length.
              </div>
            </div>
          )}

          {/* 2. FATAL: Länge zu kurz */}
          {!isVolumeInsufficient && isPhysicallyTooLarge && (
            <div className="bg-rose-50 border border-rose-100 text-rose-800 p-3 rounded-lg text-sm flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 shrink-0 text-rose-600" />
              <div>
                <span className="font-bold block text-rose-900">Tank too short!</span>
                This fish reaches {fishLengthCM}cm. It physically needs more turning space.
              </div>
            </div>
          )}

          {/* 3. WARNING: Crowded (Strenger) */}
          {!isVolumeInsufficient && !isPhysicallyTooLarge && isOvercrowded && (
            <div className="bg-amber-50 border border-amber-100 text-amber-800 p-3 rounded-lg text-sm flex items-start gap-3">
              <Info className="w-5 h-5 shrink-0 text-amber-600" />
              <div>
                <span className="font-bold block text-amber-900">High Stocking Density</span>
                {rowsNeeded} rows visible. While the tank fits the species, this quantity ({displayCount}) might overload the filter.
              </div>
            </div>
          )}

          {/* 4. INFO: Min Group */}
          {displayCount < minGroupSize && (
            <div className="bg-blue-50 border border-blue-100 text-blue-800 p-3 rounded-lg text-sm flex items-start gap-3">
              <Users className="w-5 h-5 shrink-0 text-blue-600" />
              <div>
                <span className="font-bold block text-blue-900">Social Warning</span>
                Keep at least {minGroupSize} individuals for their well-being.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
