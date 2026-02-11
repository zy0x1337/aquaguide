import React from 'react';
import { Search, Stethoscope, AlertOctagon, Activity } from 'lucide-react';
import { allDiseases } from '../data/diseases';
import { useDiseaseSearch } from '../hooks/useDiseaseSearch';
import { DiseaseCard } from '../components/diseases/DiseaseCard';
import { SEOHead } from '../components/seo/SEOHead';

const DiseaseIndexPage = () => {
  const {
    searchTerm,
    setSearchTerm,
    severity,
    setSeverity,
    results,
    totalCount,
    resultCount,
  } = useDiseaseSearch(allDiseases);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <SEOHead
        title="Aquarium Disease Database"
        description="Search aquarium fish diseases by name or symptoms (e.g. white spots, frayed fins)."
      />

      {/* Header */}
      <header className="relative bg-slate-900 text-white overflow-hidden pt-14 pb-14 border-b border-slate-800">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Activity className="w-4 h-4" />
            Medical database
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
            Disease Library
          </h1>
          <p className="text-slate-300 max-w-2xl">
            Search by disease name or symptoms (e.g. “white spots”, “fraying fins”, “labored breathing”).
          </p>

          {/* Search */}
          <div className="mt-8 max-w-xl relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-500 group-focus-within:text-rose-400 transition-colors" />
            </div>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search symptoms or disease names…"
              className="block w-full pl-12 pr-4 py-4 bg-white rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-rose-500/20 transition-all shadow-xl text-base font-medium"
            />
          </div>

          {/* Severity filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            <Chip
              label={`All (${totalCount})`}
              active={severity === null}
              onClick={() => setSeverity(null)}
            />
            <Chip
              label="Moderate"
              active={severity === 'moderate'}
              onClick={() => setSeverity(severity === 'moderate' ? null : 'moderate')}
              activeClass="bg-amber-500 text-white border-amber-600"
              idleClass="bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"
            />
            <Chip
              label="High"
              active={severity === 'high'}
              onClick={() => setSeverity(severity === 'high' ? null : 'high')}
              activeClass="bg-rose-500 text-white border-rose-600"
              idleClass="bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100"
              leftIcon={<AlertOctagon className="w-4 h-4" />}
            />
            <Chip
              label="Critical"
              active={severity === 'critical'}
              onClick={() => setSeverity(severity === 'critical' ? null : 'critical')}
              activeClass="bg-red-600 text-white border-red-700"
              idleClass="bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
              leftIcon={<AlertOctagon className="w-4 h-4" />}
            />
          </div>

          <div className="mt-4 text-sm text-slate-400">
            Showing <span className="text-white font-bold">{resultCount}</span> results
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-4 pt-10">
        {resultCount > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((d) => (
              <DiseaseCard key={d.id} data={d} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <Stethoscope className="w-10 h-10 text-slate-300 mx-auto mb-4" />
            <h2 className="text-lg font-bold text-slate-800 mb-2">No matches</h2>
            <p className="text-slate-500">
              Try simpler symptom keywords (e.g. “spots”, “frayed”, “breathing”).
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSeverity(null);
              }}
              className="mt-6 px-4 py-2 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

const Chip = ({
  label,
  active,
  onClick,
  idleClass = 'bg-white/10 text-slate-200 border-white/15 hover:bg-white/15',
  activeClass = 'bg-white text-slate-900 border-white',
  leftIcon,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  idleClass?: string;
  activeClass?: string;
  leftIcon?: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={[
      'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider border transition-colors',
      active ? activeClass : idleClass,
    ].join(' ')}
  >
    {leftIcon}
    {label}
  </button>
);

export default DiseaseIndexPage;
