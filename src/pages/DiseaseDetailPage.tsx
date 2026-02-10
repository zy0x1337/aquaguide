import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, AlertTriangle, Activity, Stethoscope, 
  Pill, AlertOctagon, ShieldCheck, FlaskConical, Skull 
} from 'lucide-react';
import { resolveDiseaseReference } from '../data/diseases';
import type { Disease } from '../types/disease';

const DiseaseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Datenabruf
  const result = slug ? resolveDiseaseReference(slug) : null;
  
  // 404 Fallback
  if (!result || typeof result === 'string') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8 max-w-md">
          <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Stethoscope className="w-8 h-8 text-slate-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-700 mb-2">Disease Not Found</h2>
          <p className="text-slate-500 mb-6">Could not find medical records for "{slug}".</p>
          <Link to="/diseases" className="inline-flex items-center text-indigo-600 font-semibold hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Return to Index
          </Link>
        </div>
      </div>
    );
  }

  const disease = result as Disease;
  const isCritical = disease.severity === 'high' || disease.severity === 'critical';

  return (
    <div className="min-h-screen bg-slate-50 pb-20 animate-fade-in">
      
      {/* HEADER: Clinical & Serious Style */}
      <header className={`relative text-white overflow-hidden pb-24 pt-12 ${
        isCritical ? 'bg-rose-900' : 'bg-slate-900'
      }`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Breadcrumb / Back Link */}
          <Link to="/diseases" className="inline-flex items-center text-slate-300 hover:text-white mb-8 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Medical Index
          </Link>
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                {/* Severity Badge */}
                {/* Severity Badge */}
<span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm border ${
    // KORRIGIERT: 'moderate' statt 'medium'
    disease.severity === 'high' ? 'bg-rose-500 border-rose-400 text-white' : 
    disease.severity === 'moderate' ? 'bg-amber-500 border-amber-400 text-white' : 
    'bg-blue-500 border-blue-400 text-white'
}`}>
  {disease.severity === 'high' && <AlertOctagon className="w-3 h-3" />}
  {disease.severity} Severity
</span>     

                {/* Type Badge */}
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
                  {disease.type}
                </span>

                {/* Contagious Badge */}
                {disease.isContagious && (
                  <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-200 border border-rose-500/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1 backdrop-blur-sm">
                    <Activity className="w-3 h-3" /> Contagious
                  </span>
                )}

                 {/* Incurable Badge */}
                 {disease.isIncurable && (
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <Skull className="w-3 h-3" /> Incurable
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2 leading-tight">
                {disease.name}
              </h1>
              
              {/* Aliases */}
              {disease.aliases && disease.aliases.length > 0 && (
                <p className="text-slate-400 text-sm mb-4 font-mono border-l-2 border-slate-700 pl-3">
                  AKA: <span className="text-slate-300 italic">{disease.aliases.join(', ')}</span>
                </p>
              )}
            </div>

            {/* Quick Meds Card (Desktop) */}
            {disease.treatment.medication && disease.treatment.medication.length > 0 && (
              <div className="hidden md:block bg-white text-slate-900 p-5 rounded-xl shadow-xl max-w-xs w-full border-t-4 border-rose-500 animate-slide-up">
                <h3 className="font-bold text-xs uppercase text-slate-400 mb-3 flex items-center tracking-wider">
                  <Pill className="w-4 h-4 mr-2" /> Recommended Meds
                </h3>
                <div className="flex flex-wrap gap-2">
                  {disease.treatment.medication.map(med => (
                    <span key={med} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-200">
                      {med}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* MAIN CONTENT GRID */}
      <main className="relative z-20 max-w-5xl mx-auto px-4 -mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT COL: Diagnosis & Symptoms */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-between">
              <h2 className="font-bold text-slate-800 flex items-center">
                <Stethoscope className="w-5 h-5 mr-2 text-indigo-500" /> Diagnosis
              </h2>
            </div>
            <div className="p-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Watch for Symptoms</h4>
              <ul className="space-y-3">
                {disease.symptoms.map((sym, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 min-w-[12px] h-[12px] rounded-full bg-rose-400 shadow-sm border-2 border-white ring-1 ring-rose-200"></div>
                    <span className="text-sm text-slate-700 font-medium leading-snug">{sym}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Only: Meds Card (falls oben ausgeblendet) */}
          {disease.treatment.medication && disease.treatment.medication.length > 0 && (
            <div className="md:hidden bg-white rounded-2xl shadow-sm border border-slate-200 p-6 border-t-4 border-t-rose-500">
              <h3 className="font-bold text-xs uppercase text-slate-400 mb-3 flex items-center tracking-wider">
                <Pill className="w-4 h-4 mr-2" /> Recommended Meds
              </h3>
              <div className="flex flex-wrap gap-2">
                {disease.treatment.medication.map(med => (
                  <span key={med} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-200">
                    {med}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COL: Treatment Plan */}
        <div className="md:col-span-2 space-y-8">
          
          {/* TREATMENT CARD */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 md:p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-emerald-100 rounded-xl shrink-0">
                <FlaskConical className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Treatment Plan</h2>
                <p className="text-slate-500 text-sm font-medium mt-1">
                  Prognosis: <span className="text-emerald-600">{disease.treatment.prognosis}</span>
                </p>
              </div>
            </div>

            {disease.isIncurable ? (
              <div className="bg-red-50 border border-red-100 p-6 rounded-xl mb-6 flex items-start gap-4">
                 <AlertTriangle className="w-6 h-6 text-red-600 shrink-0" />
                 <div>
                    <h3 className="font-bold text-red-800">Critical Condition</h3>
                    <p className="text-red-700/80 text-sm mt-1">This disease is generally incurable. Focus on immediate isolation to protect other tank inhabitants.</p>
                 </div>
              </div>
            ) : (
              <div className="space-y-8 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-100">
                {disease.treatment.steps.map((step, idx) => (
                  <div key={idx} className="relative pl-12 group">
                    {/* Number Circle */}
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-indigo-500 text-indigo-600 flex items-center justify-center font-bold text-sm shadow-sm z-10 group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>
                    
                    {/* Content Box */}
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 group-hover:border-indigo-100 group-hover:shadow-sm transition-all">
                      <p className="text-slate-800 font-medium leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PREVENTION CARD */}
          {disease.prevention && (
            <div className="bg-indigo-50/50 rounded-2xl border border-indigo-100 p-6 flex flex-col sm:flex-row gap-4">
              <div className="shrink-0 p-2 bg-indigo-100 rounded-lg self-start">
                <ShieldCheck className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-indigo-900 mb-2">Prevention & Future Care</h3>
                <ul className="space-y-2">
                  {disease.prevention.map((prev, idx) => (
                    <li key={idx} className="text-indigo-800/80 text-sm flex gap-2 leading-relaxed">
                      <span className="text-indigo-400">•</span> {prev}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default DiseaseDetailPage;
