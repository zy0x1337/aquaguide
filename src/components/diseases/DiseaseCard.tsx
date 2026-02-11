import { Link } from 'react-router-dom';
import { Activity, ArrowRight, Skull, AlertOctagon } from 'lucide-react';
import type { Disease } from '../../types/disease';

interface Props {
  data: Disease;
}

export const DiseaseCard = ({ data }: Props) => {
  
  // Farbcodierung basierend auf Schweregrad (Low/Moderate/High)
  const severityConfig = {
    low: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: 'text-blue-500' },
    moderate: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', icon: 'text-amber-500' },
    medium: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', icon: 'text-amber-500' }, // Alias
    high: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', icon: 'text-rose-500' },
    critical: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', icon: 'text-rose-500' }, // Alias
  }[data.severity] || { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200', icon: 'text-slate-500' };

  return (
    <Link to={`/disease/${data.slug}`} className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-2xl">
      <article className="h-full bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300 flex flex-col relative overflow-hidden">
        
        {/* Hover Highlight Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500/0 to-transparent group-hover:via-rose-500/50 transition-all duration-500"></div>

        {/* Header mit Badge */}
        <div className="flex justify-between items-start mb-4">
          <div className={`p-2.5 rounded-xl transition-colors ${data.severity === 'high' || data.severity === 'critical' ? 'bg-rose-50 group-hover:bg-rose-100' : 'bg-slate-50 group-hover:bg-indigo-50'}`}>
            {data.isIncurable ? (
               <Skull className="w-5 h-5 text-slate-600" />
            ) : data.severity === 'high' ? (
               <AlertOctagon className="w-5 h-5 text-rose-500" />
            ) : (
               <Activity className={`w-5 h-5 ${severityConfig.icon}`} />
            )}
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${severityConfig.bg} ${severityConfig.text} ${severityConfig.border}`}>
            {data.severity} Risk
          </span>
        </div>

        {/* Titel */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1 leading-tight">
            {data.name}
          </h3>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">
            {data.type} Infection
          </p>
        </div>

        {/* Symptome Preview (Wichtig für Suche!) */}
        <div className="mb-6 flex-1">
          <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Common Symptoms</p>
          <div className="flex flex-wrap gap-1.5">
            {data.symptoms.slice(0, 3).map((sym, i) => (
              <span key={i} className="inline-flex items-center px-2 py-1 bg-slate-50 text-slate-600 text-[10px] font-medium rounded border border-slate-100 truncate max-w-[100%]">
                <span className="w-1 h-1 rounded-full bg-rose-400 mr-1.5 shrink-0"></span>
                {sym}
              </span>
            ))}
            {data.symptoms.length > 3 && (
               <span className="text-[10px] font-bold text-slate-400 self-center px-1">+{data.symptoms.length - 3}</span>
            )}
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm mt-auto">
          <span className="text-slate-500 font-bold text-xs group-hover:text-indigo-600 transition-colors">View Treatment Plan</span>
          <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
             <ArrowRight className="w-3 h-3" />
          </div>
        </div>

      </article>
    </Link>
  );
};
