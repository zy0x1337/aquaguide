import { useState } from 'react';
import { Ruler } from 'lucide-react';
import { FishSilhouette } from './FishSilhouette';

interface Props {
  fishLengthCM: number;
  fishShape: string; // Nimmt den String aus deiner DB (z.B. "eel-like")
  minGroupSize: number;
}

export const TankSimulator = ({ fishLengthCM, fishShape, minGroupSize }: Props) => {
  const tankSizes = [
    { label: 'Nano (30cm)', widthCM: 30, vol: '20L' },
    { label: 'Standard (60cm)', widthCM: 60, vol: '54L' },
    { label: 'Large (100cm)', widthCM: 100, vol: '180L' },
    { label: 'X-Large (150cm)', widthCM: 150, vol: '450L' }
  ];

  // Default: Standard 60cm Tank
  const [selectedTank, setSelectedTank] = useState(tankSizes[1]);

  // Wie viel % der Tankbreite nimmt EIN Fisch ein?
  const fishWidthPercent = (fishLengthCM / selectedTank.widthCM) * 100;

  // Begrenzung der Anzeige (mind. 1, max 12 Fische, damit es nicht explodiert)
  const displayCount = Math.max(1, Math.min(minGroupSize, 12));
  const fishes = Array.from({ length: displayCount });

  // Aale sind flacher als andere Fische (Aspect Ratio anpassen für realistischeren Look)
  const isEel = fishShape?.includes('eel');
  const aspectRatio = isEel ? '4/1' : '3/2';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center">
            <Ruler className="w-5 h-5 mr-2 text-indigo-500" />
            Visual Stocking Simulator
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Visualizing <strong>{minGroupSize} adult fish</strong> (~{fishLengthCM}cm each).
          </p>
        </div>
        
        {/* Tank Selector Dropdown */}
        <select 
          className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 min-w-[160px]"
          value={selectedTank.widthCM}
          onChange={(e) => setSelectedTank(tankSizes.find(t => t.widthCM === Number(e.target.value))!)}
        >
          {tankSizes.map(tank => (
            <option key={tank.widthCM} value={tank.widthCM}>
              {tank.label} ({tank.vol})
            </option>
          ))}
        </select>
      </div>

      {/* The Visual Tank Container */}
      <div className="w-full h-48 bg-blue-50/50 border-2 border-blue-200 rounded-xl overflow-hidden relative mb-4 shadow-inner ring-1 ring-blue-100">
        
        {/* Deko-Elemente: Wasserlinie & Boden */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-blue-100/40 border-b border-blue-200/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-amber-50/50 border-t border-amber-100/50"></div>

        {/* Maßstab (unten links) */}
        <div className="absolute bottom-2 left-2 text-[10px] font-mono text-blue-400 font-bold bg-white/60 px-2 py-0.5 rounded backdrop-blur-sm">
          Width: {selectedTank.widthCM} cm
        </div>

        {/* Die Fische rendern */}
        <div className="absolute inset-0 p-6 flex flex-wrap content-center justify-center gap-x-4 gap-y-2">
           {fishes.map((_, i) => (
             <div 
               key={i}
               style={{ 
                 width: `${fishWidthPercent}%`,
                 maxWidth: '100%', // Sicherheitshalber
                 aspectRatio: aspectRatio 
               }}
               className="transition-all duration-500 ease-out hover:scale-105"
               title={`${fishLengthCM}cm Fish`}
             >
               <FishSilhouette 
                 shape={fishShape} 
                 className="text-slate-700 w-full h-full drop-shadow-md opacity-90" 
               />
             </div>
           ))}
        </div>
      </div>

      {/* Warnung bei Überbesatz / Zu großem Fisch */}
      {fishLengthCM > (selectedTank.widthCM * 0.6) && (
        <div className="bg-rose-50 border border-rose-100 text-rose-800 p-3 rounded-xl text-sm flex items-start gap-3 animate-pulse-slow">
          <div className="text-xl">⚠️</div>
          <div>
            <span className="font-bold block text-rose-900">Tank likely too small!</span>
            This fish reaches {fishLengthCM}cm, which is very large for a {selectedTank.widthCM}cm tank width.
          </div>
        </div>
      )}

    </div>
  );
};
