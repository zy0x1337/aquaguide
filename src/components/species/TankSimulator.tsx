import { useState } from 'react';
import { Ruler } from 'lucide-react';
// Importiere den Type direkt aus der Silhouette-Datei, damit sie immer synchron sind
import { FishSilhouette, } from './FishSilhouette';
import type { FishShape } from './FishSilhouette';

interface Props {
  fishLengthCM: number;
  fishShape: FishShape; // Nutzt jetzt den erweiterten Type inkl. 'eel-like'
  minGroupSize: number;
}

export const TankSimulator = ({ fishLengthCM, fishShape, minGroupSize }: Props) => {
  const tankSizes = [
    { label: 'Nano (30cm)', widthCM: 30, vol: '20L' },
    { label: 'Standard (60cm)', widthCM: 60, vol: '54L' },
    { label: 'Large (100cm)', widthCM: 100, vol: '180L' },
    { label: 'X-Large (150cm)', widthCM: 150, vol: '450L' }
  ];

  const [selectedTank, setSelectedTank] = useState(tankSizes[1]);

  // Prozentuale Breite im Verhältnis zum Tank
  const fishWidthPercent = (fishLengthCM / selectedTank.widthCM) * 100;

  // Max 12 Fische anzeigen
  const fishCount = Math.max(1, Math.min(minGroupSize, 12));
  const fishes = Array.from({ length: fishCount });

  // Aale sind flacher als andere Fische
  const aspectRatio = fishShape === 'eel-like' ? '4/1' : '3/2';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center">
            <Ruler className="w-5 h-5 mr-2 text-indigo-500" />
            Visual Stocking Simulator
          </h3>
          <p className="text-sm text-slate-500">
            Real size of <strong>{minGroupSize} adult fish</strong> in a tank.
          </p>
        </div>
        
        {/* Tank Selector */}
        <select 
          className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5"
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

      {/* The Visual Tank */}
      <div className="w-full h-48 bg-blue-50/50 border-2 border-blue-200 rounded-lg overflow-hidden relative mb-4">
        
        {/* Wasserlinie */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-blue-100/50 border-b border-blue-200"></div>
        
        {/* Maßstab (unten) */}
        <div className="absolute bottom-2 left-2 text-xs font-mono text-blue-400">
          Tank Width: {selectedTank.widthCM} cm
        </div>

        {/* Die Fische rendern */}
        <div className="absolute inset-0 p-4 flex flex-wrap content-center justify-center gap-2">
           {fishes.map((_, i) => (
             <div 
               key={i}
               style={{ 
                 width: `${fishWidthPercent}%`,
                 maxWidth: '100%',
                 aspectRatio: aspectRatio // Dynamische Höhe je nach Fischform
               }}
               className="transition-all duration-500 ease-in-out"
             >
               <FishSilhouette 
                 shape={fishShape} 
                 className="text-slate-800 drop-shadow-sm opacity-80" 
               />
             </div>
           ))}
        </div>
      </div>

      {/* Warnung bei Überbesatz */}
      {fishLengthCM > (selectedTank.widthCM * 0.5) && (
        <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm flex items-start">
          <span className="font-bold mr-2">⚠️ Critical:</span> 
          This fish grows too large for this tank width! It can barely turn around.
        </div>
      )}

    </div>
  );
};
