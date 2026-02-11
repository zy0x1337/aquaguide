import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Wichtig für den Link zur Full Page
import { AlertCircle, X, ExternalLink, Activity, Stethoscope } from 'lucide-react';
import { diseaseRepository } from '../../data/diseases';
import type { Disease } from '../../data/diseases';

interface DiseaseListProps {
  diseases: string[]; // IDs
}

export const DiseaseList: React.FC<DiseaseListProps> = ({ diseases }) => {
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

  const diseaseData = diseaseRepository.getByIds(diseases);

  if (diseaseData.length === 0) return <span className="text-slate-400 text-sm">None reported.</span>;

  return (
    <>
      {/* Chips */}
      <div className="flex flex-wrap gap-2">
        {diseaseData.map((disease) => (
          <button
            key={disease.id}
            onClick={() => setSelectedDisease(disease)}
            className={`
              inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wide border transition-all cursor-pointer
              ${getSeverityStyles(disease.severity)}
            `}
          >
            {disease.name}
          </button>
        ))}
      </div>

      {/* DETAIL MODAL */}
      {selectedDisease && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedDisease(null)}>
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-slate-200" 
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-6 border-b border-slate-100 flex justify-between items-start ${getHeaderColor(selectedDisease.category)}`}>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-white/20 backdrop-blur text-white text-[10px] font-bold uppercase rounded-full border border-white/20">
                    {selectedDisease.category}
                  </span>
                  {selectedDisease.contagious && (
                    <span className="px-2 py-0.5 bg-rose-500 text-white text-[10px] font-bold uppercase rounded-full border border-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> Contagious
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-black text-white leading-tight">
                  {selectedDisease.name}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedDisease(null)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              
              {/* Symptoms */}
              <div>
                <h4 className="flex items-center text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  <Activity className="w-4 h-4 mr-2 text-indigo-500" /> Symptoms
                </h4>
                <ul className="space-y-2">
                  {selectedDisease.symptoms.slice(0, 4).map((s, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 mr-2 shrink-0"></span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment Teaser */}
              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                <h4 className="flex items-center text-sm font-bold text-emerald-800 uppercase tracking-wider mb-3">
                  <Stethoscope className="w-4 h-4 mr-2" /> Quick Treatment
                </h4>
                <ul className="space-y-2">
                  {selectedDisease.treatment.slice(0, 3).map((t, i) => (
                    <li key={i} className="flex items-start text-sm text-emerald-900 leading-relaxed font-medium">
                      <span className="font-bold mr-2 text-emerald-600">{i + 1}.</span>
                      {t}
                    </li>
                  ))}
                  {selectedDisease.treatment.length > 3 && (
                    <li className="text-xs text-emerald-600 italic pl-5 pt-1">
                      ...more steps in full guide.
                    </li>
                  )}
                </ul>
              </div>

              {/* FULL GUIDE LINK (NEU!) */}
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <Link 
                  to={`/diseases/${selectedDisease.id}`}
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-indigo-200"
                >
                  View Full Guide <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

// --- STYLING HELPERS ---

const getSeverityStyles = (severity: string) => {
  switch (severity) {
    case 'low': return 'bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-300';
    case 'medium': return 'bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-300';
    case 'high': return 'bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-300';
    case 'critical': return 'bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-300';
    default: return 'bg-slate-100 text-slate-600 border-slate-200';
  }
};

const getHeaderColor = (category: string) => {
  switch (category) {
    case 'parasitic': return 'bg-gradient-to-r from-rose-500 to-orange-500';
    case 'bacterial': return 'bg-gradient-to-r from-indigo-500 to-purple-500';
    case 'fungal': return 'bg-gradient-to-r from-emerald-500 to-teal-500';
    case 'viral': return 'bg-gradient-to-r from-slate-700 to-slate-600';
    default: return 'bg-slate-800';
  }
};
