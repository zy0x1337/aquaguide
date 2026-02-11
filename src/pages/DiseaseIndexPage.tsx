import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Activity, Stethoscope, AlertTriangle, Bug, Droplets, ArrowRight } from 'lucide-react';
import { diseaseRepository } from '../data/diseases';
import { SEOHead } from '../components/seo/SEOHead';

const DiseaseIndexPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const allDiseases = diseaseRepository.getAll();
  
  const filteredDiseases = searchTerm
    ? diseaseRepository.search(searchTerm)
    : allDiseases;

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans">
      <SEOHead 
        title="Aquarium Disease Database" 
        description="Diagnose and treat common fish and shrimp diseases like Ich, Fin Rot, and Scutariella." 
      />

      {/* HERO HEADER */}
      <header className="bg-slate-900 text-white pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-200 text-xs font-bold uppercase tracking-wider mb-6">
            <Stethoscope className="w-4 h-4 mr-2" /> Veterinary Guide
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Diagnose & Treat <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
              Common Diseases
            </span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Don't panic. Most aquarium diseases are treatable if caught early. Search our database of symptoms, treatments, and prevention strategies.
          </p>

          {/* SEARCH BAR */}
          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-rose-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:bg-white focus:text-slate-900 focus:ring-4 focus:ring-rose-500/30 transition-all shadow-xl"
              placeholder="Search symptoms (e.g. 'white spots', 'bloating')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* CONTENT GRID */}
      <main className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDiseases.map((disease) => (
            <Link 
              to={`/diseases/${disease.id}`} // Link zur Detailseite
              key={disease.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                  ${getCategoryColor(disease.category)}
                `}>
                  {getCategoryIcon(disease.category)}
                </div>
                <div className={`
                  px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border
                  ${getSeverityBadge(disease.severity)}
                `}>
                  {disease.severity}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {disease.name}
              </h3>

              {/* Quick Symptoms */}
              <div className="mb-6 space-y-1 flex-grow">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Symptoms</p>
                {disease.symptoms.slice(0, 2).map((s, i) => (
                  <p key={i} className="text-sm text-slate-600 truncate flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2 shrink-0"></span>
                    {s}
                  </p>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <span className="text-xs font-bold text-slate-400 uppercase">
                  {disease.affectedSpecies?.includes('Neocaridina') ? 'Shrimp & Fish' : 'Fish Only'}
                </span>
                <span className="text-indigo-600 text-sm font-bold flex items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                  Read Guide <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredDiseases.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No diseases found</h3>
            <p className="text-slate-500">Try adjusting your search terms.</p>
          </div>
        )}
      </main>
    </div>
  );
};

// --- HELPERS ---

const getCategoryIcon = (cat: string) => {
  switch (cat) {
    case 'parasitic': return <Bug className="w-6 h-6 text-white" />;
    case 'bacterial': return <Activity className="w-6 h-6 text-white" />;
    case 'fungal': return <Droplets className="w-6 h-6 text-white" />;
    case 'viral': return <AlertTriangle className="w-6 h-6 text-white" />;
    default: return <Stethoscope className="w-6 h-6 text-white" />;
  }
};

const getCategoryColor = (cat: string) => {
  switch (cat) {
    case 'parasitic': return 'bg-rose-500 shadow-rose-200';
    case 'bacterial': return 'bg-indigo-500 shadow-indigo-200';
    case 'fungal': return 'bg-emerald-500 shadow-emerald-200';
    case 'viral': return 'bg-slate-700 shadow-slate-200';
    default: return 'bg-slate-500';
  }
};

const getSeverityBadge = (sev: string) => {
  switch (sev) {
    case 'critical': return 'bg-rose-50 text-rose-700 border-rose-200';
    case 'high': return 'bg-orange-50 text-orange-700 border-orange-200';
    case 'medium': return 'bg-amber-50 text-amber-700 border-amber-200';
    case 'low': return 'bg-slate-100 text-slate-600 border-slate-200';
    default: return 'bg-slate-100 text-slate-600';
  }
};

export default DiseaseIndexPage;
