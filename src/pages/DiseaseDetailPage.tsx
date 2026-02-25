import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, AlertCircle, Stethoscope, ShieldCheck, Activity } from 'lucide-react';
import { diseaseRepository } from '../data/diseases';
import { SEOHead } from '../components/seo/SEOHead';

const DiseaseDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const disease = diseaseRepository.getById(slug || '');

  if (!disease) return <NotFound />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 font-sans">
      <SEOHead 
        title={`${disease.name} - Treatment Guide`} 
        description={`How to treat ${disease.name}. Symptoms, causes, and prevention guide.`} 
      />

      {/* HEADER */}
      <header className={`pt-24 pb-32 relative overflow-hidden text-white ${getHeaderGradient(disease.category)}`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Link to="/diseases" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors font-bold text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Disease Index
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
             <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full border border-white/20 text-xs font-bold uppercase tracking-wide">
               {disease.category}
             </span>
             {disease.contagious && (
                <span className="px-3 py-1 bg-rose-500 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1 shadow-lg">
                  <AlertCircle className="w-3 h-3" /> Contagious
                </span>
             )}
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-white">{disease.name}</h1>
          
          {/* Affected Species Tag */}
          {disease.affectedSpecies && (
             <p className="text-white/80 text-lg font-medium">
               Affects: {disease.affectedSpecies.join(', ')}
             </p>
          )}
        </div>
      </header>

      {/* CONTENT CARD */}
      <main className="max-w-4xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          
          {/* SYMPTOMS */}
          <div className="p-8 md:p-10 border-b border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Activity className="w-6 h-6 mr-3 text-indigo-500 dark:text-indigo-400" /> Symptoms & Identification
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <ul className="grid md:grid-cols-2 gap-4">
                {disease.symptoms.map((s, i) => (
                  <li key={i} className="flex items-start text-gray-700 dark:text-gray-300 font-medium">
                    <span className="w-2 h-2 rounded-full bg-rose-400 dark:bg-rose-500 mt-2 mr-3 shrink-0"></span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* TREATMENT */}
          <div className="p-8 md:p-10 bg-emerald-50/50 dark:bg-emerald-950/20 border-b border-emerald-100 dark:border-emerald-900/30">
             <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-6 flex items-center">
              <Stethoscope className="w-6 h-6 mr-3 text-emerald-600 dark:text-emerald-400" /> Treatment Plan
            </h2>
            <div className="space-y-4">
               {disease.treatment.map((step, i) => (
                 <div key={i} className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-emerald-200 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 font-bold flex items-center justify-center shrink-0">
                     {i + 1}
                   </div>
                   <p className="text-emerald-900/80 dark:text-emerald-100/80 font-medium pt-1 text-lg leading-relaxed">
                     {step}
                   </p>
                 </div>
               ))}
            </div>
            {/* Warning Box */}
            <div className="mt-8 bg-white dark:bg-gray-900 rounded-xl p-5 border border-emerald-100 dark:border-emerald-800/30 shadow-sm">
              <p className="text-sm text-emerald-800 dark:text-emerald-400 font-bold uppercase tracking-wider mb-1">Important Note</p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                {disease.notes || "Always remove carbon from your filter before dosing medication."}
              </p>
            </div>
          </div>

          {/* CAUSES & PREVENTION */}
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <ShieldCheck className="w-6 h-6 mr-3 text-amber-500 dark:text-amber-400" /> Prevention & Causes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
               <div>
                 <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Common Causes</h3>
                 <ul className="space-y-3">
                   {disease.causes.map((c, i) => (
                     <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                       <ArrowLeft className="w-4 h-4 mr-2 text-rose-300 dark:text-rose-600 rotate-180 shrink-0" /> {c}
                     </li>
                   ))}
                 </ul>
               </div>
               <div>
                 <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Prevention Strategy</h3>
                 <ul className="space-y-3">
                   {disease.prevention.map((p, i) => (
                     <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                       <ShieldCheck className="w-4 h-4 mr-2 text-emerald-400 dark:text-emerald-500 shrink-0" /> {p}
                     </li>
                   ))}
                 </ul>
               </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

// --- HELPERS ---

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center flex-col bg-gray-50 dark:bg-gray-950">
    <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Disease Not Found</h1>
    <Link to="/diseases" className="text-indigo-600 dark:text-indigo-400 hover:underline">Return to Index</Link>
  </div>
);

const getHeaderGradient = (category: string) => {
  switch (category) {
    case 'parasitic': return 'bg-gradient-to-br from-rose-600 to-orange-600';
    case 'bacterial': return 'bg-gradient-to-br from-indigo-600 to-purple-600';
    case 'fungal': return 'bg-gradient-to-br from-emerald-600 to-teal-600';
    case 'viral': return 'bg-gradient-to-br from-gray-700 to-gray-900';
    default: return 'bg-gradient-to-br from-gray-600 to-gray-800';
  }
};

export default DiseaseDetailPage;
