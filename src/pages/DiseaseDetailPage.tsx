import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, AlertCircle, Stethoscope, ShieldCheck, Activity, AlertTriangle, Info } from 'lucide-react';
import { diseaseRepository } from '../data/diseases';
import { SEOHead } from '../components/seo/SEOHead';

// ─── Severity config ─────────────────────────────────────────────────────────
type Severity = 'mild' | 'moderate' | 'severe' | 'critical';

const SEVERITY_STYLES: Record<Severity, { label: string; pill: string; dot: string }> = {
  mild:     { label: 'Mild',     pill: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800', dot: 'bg-emerald-500' },
  moderate: { label: 'Moderate', pill: 'bg-amber-100   dark:bg-amber-900/30   text-amber-700   dark:text-amber-300   border border-amber-200   dark:border-amber-800',   dot: 'bg-amber-500'   },
  severe:   { label: 'Severe',   pill: 'bg-orange-100  dark:bg-orange-900/30  text-orange-700  dark:text-orange-300  border border-orange-200  dark:border-orange-800',  dot: 'bg-orange-500'  },
  critical: { label: 'Critical', pill: 'bg-rose-100    dark:bg-rose-900/30    text-rose-700    dark:text-rose-300    border border-rose-200    dark:border-rose-800',    dot: 'bg-rose-500'    },
};

const getSeverity = (disease: any): Severity => {
  // If the data already has a valid severity field, use it
  if (disease.severity && disease.severity in SEVERITY_STYLES) {
    return disease.severity as Severity;
  }
  const treatmentSteps = disease.treatment?.length ?? 0;
  const isContagious   = !!disease.contagious;
  const category       = disease.category ?? '';
  if (category === 'viral')                 return 'critical';
  if (isContagious && treatmentSteps >= 4)  return 'severe';
  if (isContagious || treatmentSteps >= 3)  return 'moderate';
  return 'mild';
};

const getDifficulty = (disease: any): { label: string; dots: number; color: string } => {
  const steps = disease.treatment?.length ?? 0;
  if (steps <= 2) return { label: 'Easy',      dots: 1, color: 'bg-emerald-500' };
  if (steps <= 3) return { label: 'Moderate',  dots: 2, color: 'bg-amber-500'   };
  if (steps <= 5) return { label: 'Difficult', dots: 3, color: 'bg-orange-500'  };
  return            { label: 'Expert',    dots: 4, color: 'bg-rose-500'    };
};

// ─── Main component ──────────────────────────────────────────────────────────
const DiseaseDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const disease  = diseaseRepository.getById(slug || '');

  if (!disease) return <NotFound />;

  const severity   = getSeverity(disease);
  // Double-safe fallback: if severity key somehow still isn't in the map, use mild
  const sevStyle   = SEVERITY_STYLES[severity] ?? SEVERITY_STYLES.mild;
  const difficulty = getDifficulty(disease);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 font-sans">
      <SEOHead
        title={`${disease.name} – Treatment Guide`}
        description={`How to treat ${disease.name}. Symptoms, causes, treatment and prevention guide.`}
      />

      {/* HEADER */}
      <header className={`pt-24 pb-32 relative overflow-hidden text-white ${getHeaderGradient(disease.category)}`}>
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Link to="/diseases" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors font-bold text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Disease Index
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full border border-white/20 text-xs font-bold uppercase tracking-wide">
              {disease.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${sevStyle.pill}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${sevStyle.dot}`} />
              {sevStyle.label}
            </span>
            {disease.contagious && (
              <span className="px-3 py-1 bg-rose-500 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1 shadow-lg">
                <AlertCircle className="w-3 h-3" /> Contagious
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-white">{disease.name}</h1>

          {disease.affectedSpecies?.length > 0 && (
            <p className="text-white/80 text-lg font-medium">
              Affects: {disease.affectedSpecies.join(', ')}
            </p>
          )}
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-4xl mx-auto px-6 -mt-20 relative z-20">

        {/* Quarantine Banner */}
        {disease.contagious && (
          <div className="mb-4 flex items-start gap-3 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-2xl p-4">
            <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            <div>
              <p className="text-sm font-bold text-rose-800 dark:text-rose-300">Quarantine Recommended</p>
              <p className="text-xs text-rose-700 dark:text-rose-400 mt-0.5">
                This disease is contagious. Immediately isolate affected fish in a quarantine tank to prevent spreading to healthy livestock.
              </p>
            </div>
          </div>
        )}

        {/* Quick Stats Bar */}
        <div className="mb-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-3 text-center">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Category</p>
            <p className="text-sm font-black text-gray-900 dark:text-white capitalize">{disease.category}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-3 text-center">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Severity</p>
            <p className={`text-sm font-black ${
              severity === 'mild'     ? 'text-emerald-600 dark:text-emerald-400' :
              severity === 'moderate' ? 'text-amber-600   dark:text-amber-400'   :
              severity === 'severe'   ? 'text-orange-600  dark:text-orange-400'  :
                                        'text-rose-600    dark:text-rose-400'
            }`}>
              {sevStyle.label}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-3 text-center">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Treatment</p>
            <div className="flex items-center justify-center gap-1 mt-1">
              {[1,2,3,4].map(d => (
                <span key={d} className={`w-2.5 h-2.5 rounded-full ${d <= difficulty.dots ? difficulty.color : 'bg-gray-200 dark:bg-gray-700'}`} />
              ))}
            </div>
            <p className="text-[10px] text-gray-500 mt-1">{difficulty.label}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-3 text-center">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Affected</p>
            <p className="text-sm font-black text-gray-900 dark:text-white">
              {disease.affectedSpecies?.length > 0 ? `${disease.affectedSpecies.length} species` : 'All fish'}
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">

          {/* SYMPTOMS */}
          <div className="p-8 md:p-10 border-b border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Activity className="w-6 h-6 mr-3 text-indigo-500 dark:text-indigo-400" /> Symptoms &amp; Identification
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <ul className="grid md:grid-cols-2 gap-4">
                {disease.symptoms.map((s: string, i: number) => (
                  <li key={i} className="flex items-start text-gray-700 dark:text-gray-300 font-medium">
                    <span className="w-2 h-2 rounded-full bg-rose-400 dark:bg-rose-500 mt-2 mr-3 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* TREATMENT */}
          <div className="p-8 md:p-10 bg-emerald-50/50 dark:bg-emerald-950/20 border-b border-emerald-100 dark:border-emerald-900/30">
            <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-2 flex items-center">
              <Stethoscope className="w-6 h-6 mr-3 text-emerald-600 dark:text-emerald-400" /> Treatment Plan
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5">
                {[1,2,3,4].map(d => (
                  <span key={d} className={`w-2.5 h-2.5 rounded-full ${d <= difficulty.dots ? difficulty.color : 'bg-gray-200 dark:bg-gray-700'}`} />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Difficulty: {difficulty.label}</span>
            </div>
            <div className="space-y-4">
              {disease.treatment.map((step: string, i: number) => (
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
            <div className="mt-8 bg-white dark:bg-gray-900 rounded-xl p-5 border border-emerald-100 dark:border-emerald-800/30 shadow-sm flex items-start gap-3">
              <Info className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-emerald-800 dark:text-emerald-400 font-bold uppercase tracking-wider mb-1">Important Note</p>
                <p className="text-gray-600 dark:text-gray-400 italic text-sm">
                  {disease.notes || 'Always remove carbon from your filter before dosing medication.'}
                </p>
              </div>
            </div>
          </div>

          {/* CAUSES & PREVENTION */}
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <ShieldCheck className="w-6 h-6 mr-3 text-amber-500 dark:text-amber-400" /> Prevention &amp; Causes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Common Causes</h3>
                <ul className="space-y-3">
                  {disease.causes.map((c: string, i: number) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2">
                      <ArrowLeft className="w-4 h-4 text-rose-300 dark:text-rose-600 rotate-180 shrink-0 mt-0.5" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Prevention Strategy</h3>
                <ul className="space-y-3">
                  {disease.prevention.map((p: string, i: number) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 dark:text-emerald-500 shrink-0 mt-0.5" /> {p}
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

// ─── Helpers ────────────────────────────────────────────────────────────────
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
    case 'fungal':    return 'bg-gradient-to-br from-emerald-600 to-teal-600';
    case 'viral':     return 'bg-gradient-to-br from-gray-700 to-gray-900';
    default:          return 'bg-gradient-to-br from-gray-600 to-gray-800';
  }
};

export default DiseaseDetailPage;
