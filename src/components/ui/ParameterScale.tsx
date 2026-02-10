import { clsx } from 'clsx';

interface Props {
  label: string;
  min: number;
  max: number;
  valueMin: number;
  valueMax: number;
  unit: string;
  color: 'rose' | 'cyan' | 'blue';
}

export const ParameterScale = ({ label, min, max, valueMin, valueMax, unit, color }: Props) => {
  // Berechne Positionen in %
  const range = max - min;
  const leftPos = ((valueMin - min) / range) * 100;
  const width = ((valueMax - valueMin) / range) * 100;

  const colorClasses = {
    rose: 'bg-rose-500',
    cyan: 'bg-cyan-500',
    blue: 'bg-blue-500',
  };

  return (
    <div className="mb-4 group cursor-default">
      <div className="flex justify-between text-xs mb-1.5">
        <span className="font-bold text-slate-500 uppercase tracking-wider">{label}</span>
        <span className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
          {valueMin}-{valueMax}{unit}
        </span>
      </div>
      
      {/* Track Background */}
      <div className="h-2 w-full bg-slate-100 rounded-full relative overflow-hidden">
        {/* Scale Markers (Optional Grid) */}
        <div className="absolute inset-0 flex justify-between px-1">
           {[0, 0.25, 0.5, 0.75, 1].map(p => (
             <div key={p} className="h-full w-[1px] bg-slate-200"></div>
           ))}
        </div>

        {/* The Active Range Bar */}
        <div 
          className={clsx("h-full absolute rounded-full opacity-80 group-hover:opacity-100 transition-opacity", colorClasses[color])}
          style={{ left: `${leftPos}%`, width: `${width}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between text-[10px] text-slate-300 mt-1 font-mono">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
};
