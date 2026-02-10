import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { resolveDiseaseReference } from '../data/diseases';
import type { Disease } from '../types/disease';

// Helper für die Header-Farbe
const getSeverityHeaderColor = (severity: Disease['severity']) => {
  switch (severity) {
    case 'critical': return 'bg-red-600 text-white';
    case 'high': return 'bg-orange-500 text-white';
    case 'moderate': return 'bg-yellow-400 text-yellow-900';
    default: return 'bg-blue-500 text-white';
  }
};

const DiseaseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Wir suchen die Krankheit in der Datenbank
  const result = slug ? resolveDiseaseReference(slug) : null;
  
  // Fallback, wenn nichts gefunden wurde oder es nur ein String ist
  if (!result || typeof result === 'string') {
    return (
      <div className="max-w-4xl mx-auto p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Disease Not Found 🦠</h2>
        <p className="text-gray-500 mt-2">Could not find detailed records for "{slug}".</p>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
      </div>
    );
  }

  const disease = result as Disease;
  const headerColorClass = getSeverityHeaderColor(disease.severity);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8 animate-fade-in">
      
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs text-gray-500 mb-4">
        <Link to="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Disease DB</span>
        <span className="mx-2">/</span>
        <span className="font-semibold">{disease.name}</span>
      </div>

      {/* Header Card */}
      <header className={`rounded-xl overflow-hidden shadow-lg ${headerColorClass}`}>
        <div className="p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="uppercase tracking-widest text-xs font-bold opacity-80 border border-current px-2 py-0.5 rounded">
                  {disease.type}
                </span>
                {disease.isContagious && (
                  <span className="uppercase tracking-widest text-xs font-bold bg-white/20 px-2 py-0.5 rounded flex items-center gap-1">
                    ☣️ Contagious
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-1">{disease.name}</h1>
              {disease.aliases && (
                <p className="opacity-90 italic text-sm">Also known as: {disease.aliases.join(', ')}</p>
              )}
            </div>
            
            <div className="text-right bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <span className="block text-xs uppercase font-bold opacity-80">Severity</span>
              <span className="text-xl font-black uppercase">{disease.severity}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left: Symptoms & Prevention */}
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              🔍 Symptoms
            </h2>
            <ul className="space-y-3">
              {disease.symptoms.map((symptom, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-red-400 shrink-0" />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
             <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              🛡️ Prevention
            </h2>
            <ul className="space-y-2">
              {disease.prevention.map((item, i) => (
                <li key={i} className="text-blue-800 text-sm flex gap-2">
                  <span>•</span> {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right: Treatment */}
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              💊 Treatment Protocol
            </h2>
            
            {disease.isIncurable ? (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 text-red-700 rounded-r">
                <p className="font-bold">⚠️ Critical Warning</p>
                <p className="text-sm mt-1">
                  Treatment focuses on containment. Isolate infected fish immediately.
                </p>
              </div>
            ) : (
              <div className="mb-6">
                 <h3 className="text-xs font-bold text-gray-400 uppercase mb-2">Medication</h3>
                 <div className="flex flex-wrap gap-2">
                   {disease.treatment.medication?.map(med => (
                     <span key={med} className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-sm font-medium border border-green-200">
                       {med}
                     </span>
                   ))}
                 </div>
              </div>
            )}

            <h3 className="text-xs font-bold text-gray-400 uppercase mb-3">Steps</h3>
            <ol className="relative border-l border-gray-200 ml-3 space-y-6">
              {disease.treatment.steps.map((step, index) => (
                <li key={index} className="pl-6 relative">
                  <span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-4 ring-white text-blue-600 text-xs font-bold">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 text-sm md:text-base">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

      </div>
    </div>
  );
};

export default DiseaseDetailPage;
