import { Link } from 'react-router-dom';
import { ArrowLeft, Thermometer, Droplets, Ruler, Heart, Users, Activity, AlertTriangle, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useComparison } from '../contexts/ComparisonContext';
import { SEOHead } from '../components/seo/SEOHead';
import type { Species } from '../types/species';

const ComparisonPage = () => {
  const { comparedSpecies, removeFromComparison, clearComparison } = useComparison();

  if (comparedSpecies.length < 2) {
    return <EmptyState />;
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <SEOHead title="Species Comparison - AquaGuide" description="Compare aquarium species side-by-side" />

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/species" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm font-semibold">
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Database
          </Link>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black mb-2">Species Comparison</h1>
              <p className="text-indigo-100">Compare {comparedSpecies.length} species side-by-side</p>
            </div>
            
            <button
              onClick={clearComparison}
              className="self-start sm:self-auto flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              <X className="w-4 h-4" />
              Clear All
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left p-4 font-bold text-slate-700 w-48">Property</th>
                  {comparedSpecies.map((species) => (
                    <th key={species.id} className="p-4 text-center relative">
                      <button
                        onClick={() => removeFromComparison(species.id)}
                        className="absolute top-2 right-2 p-1 hover:bg-slate-200 rounded-full transition-colors"
                        aria-label="Remove"
                      >
                        <X className="w-4 h-4 text-slate-500" />
                      </button>
                      <div className="font-bold text-slate-900 mb-1">{species.taxonomy.commonName}</div>
                      <div className="text-xs text-slate-500 italic">{species.taxonomy.scientificName}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <ComparisonRow label="Max Size" icon={<Ruler className="w-4 h-4" />} values={comparedSpecies.map(s => `${s.visuals.adultSizeCM} cm`)} highlightDiff />
                <ComparisonRow label="Min Tank Size" icon={<Droplets className="w-4 h-4" />} values={comparedSpecies.map(s => `${s.environment.minTankSizeLiters}L`)} highlightDiff />
                <ComparisonRow label="Temperature" icon={<Thermometer className="w-4 h-4" />} values={comparedSpecies.map(s => `${s.environment.tempC.min}-${s.environment.tempC.max}°C`)} highlightDiff={false} />
                <ComparisonRow label="pH Range" icon={<Droplets className="w-4 h-4" />} values={comparedSpecies.map(s => `${s.environment.ph.min}-${s.environment.ph.max}`)} highlightDiff={false} />
                <ComparisonRow label="Lifespan" icon={<Heart className="w-4 h-4" />} values={comparedSpecies.map(s => `${s.health.lifespanYears} years`)} highlightDiff />
                <ComparisonRow label="Min Group Size" icon={<Users className="w-4 h-4" />} values={comparedSpecies.map(s => `${s.behavior.minGroupSize}+`)} highlightDiff />
                <ComparisonRow label="Difficulty" icon={<Activity className="w-4 h-4" />} values={comparedSpecies.map(s => s.care.difficulty)} highlightDiff={false} colorCode={(v) => v === 'beginner' ? 'text-emerald-700 bg-emerald-50' : v === 'medium' ? 'text-amber-700 bg-amber-50' : 'text-rose-700 bg-rose-50'} />
                <ComparisonRow label="Diet" icon={<Activity className="w-4 h-4" />} values={comparedSpecies.map(s => s.care.diet)} highlightDiff={false} />
                <ComparisonRow label="Temperament" icon={<Activity className="w-4 h-4" />} values={comparedSpecies.map(s => s.behavior.tags.includes('peaceful') ? 'Peaceful' : s.behavior.tags.includes('semi-aggressive') ? 'Semi-Aggressive' : 'Varies')} highlightDiff={false} />
                <ComparisonRow label="Flow Preference" icon={<Activity className="w-4 h-4" />} values={comparedSpecies.map(s => s.environment.flow)} highlightDiff={false} />
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6 p-4">
            {comparedSpecies.map((species) => (
              <MobileComparisonCard key={species.id} species={species} onRemove={() => removeFromComparison(species.id)} />
            ))}
          </div>
        </div>

        {/* Compatibility Warning */}
        <CompatibilityWarning species={comparedSpecies} />
      </div>
    </div>
  );
};

const ComparisonRow = ({ label, icon, values, highlightDiff, colorCode }: { 
  label: string; 
  icon: React.ReactNode; 
  values: string[]; 
  highlightDiff?: boolean;
  colorCode?: (value: string) => string;
}) => {
  const allSame = values.every(v => v === values[0]);
  const shouldHighlight = highlightDiff && !allSame;

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
      <td className="p-4 font-semibold text-slate-700 flex items-center gap-2">
        <span className="text-indigo-600">{icon}</span>
        {label}
      </td>
      {values.map((value, idx) => (
        <td key={idx} className="p-4 text-center">
          <span className={`inline-block px-3 py-1.5 rounded-lg font-semibold ${
            colorCode ? colorCode(value) :
            shouldHighlight ? 'bg-amber-50 text-amber-900 border border-amber-200' : 
            'text-slate-800'
          }`}>
            {value}
          </span>
        </td>
      ))}
    </tr>
  );
};

const MobileComparisonCard = ({ species, onRemove }: { species: Species; onRemove: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-50 rounded-xl p-4 border border-slate-200 relative"
    >
      <button
        onClick={onRemove}
        className="absolute top-3 right-3 p-1.5 hover:bg-slate-200 rounded-full transition-colors"
        aria-label="Remove"
      >
        <X className="w-4 h-4 text-slate-500" />
      </button>
      
      <h3 className="font-bold text-lg text-slate-900 mb-1 pr-8">{species.taxonomy.commonName}</h3>
      <p className="text-xs text-slate-500 italic mb-4">{species.taxonomy.scientificName}</p>
      
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <div className="text-xs text-slate-500 font-semibold mb-1">Max Size</div>
          <div className="font-bold text-slate-900">{species.visuals.adultSizeCM} cm</div>
        </div>
        <div>
          <div className="text-xs text-slate-500 font-semibold mb-1">Min Tank</div>
          <div className="font-bold text-slate-900">{species.environment.minTankSizeLiters}L</div>
        </div>
        <div>
          <div className="text-xs text-slate-500 font-semibold mb-1">Temperature</div>
          <div className="font-bold text-slate-900">{species.environment.tempC.min}-{species.environment.tempC.max}°C</div>
        </div>
        <div>
          <div className="text-xs text-slate-500 font-semibold mb-1">pH Range</div>
          <div className="font-bold text-slate-900">{species.environment.ph.min}-{species.environment.ph.max}</div>
        </div>
        <div>
          <div className="text-xs text-slate-500 font-semibold mb-1">Difficulty</div>
          <div className={`inline-block px-2 py-1 rounded text-xs font-bold uppercase ${
            species.care.difficulty === 'beginner' ? 'bg-emerald-100 text-emerald-700' :
            species.care.difficulty === 'medium' ? 'bg-amber-100 text-amber-700' :
            'bg-rose-100 text-rose-700'
          }`}>{species.care.difficulty}</div>
        </div>
        <div>
          <div className="text-xs text-slate-500 font-semibold mb-1">Lifespan</div>
          <div className="font-bold text-slate-900">{species.health.lifespanYears} years</div>
        </div>
      </div>
    </motion.div>
  );
};

const CompatibilityWarning = ({ species }: { species: Species[] }) => {
  const warnings: string[] = [];

  // Check water type
  const waterTypes = [...new Set(species.map(s => s.environment.type))];
  if (waterTypes.length > 1) {
    warnings.push(`Different water types: ${waterTypes.join(', ')}`);
  }

  // Check temperature overlap
  const tempMin = Math.max(...species.map(s => s.environment.tempC.min));
  const tempMax = Math.min(...species.map(s => s.environment.tempC.max));
  if (tempMin > tempMax) {
    warnings.push('No overlapping temperature range');
  }

  // Check pH overlap
  const phMin = Math.max(...species.map(s => s.environment.ph.min));
  const phMax = Math.min(...species.map(s => s.environment.ph.max));
  if (phMin > phMax) {
    warnings.push('No overlapping pH range');
  }

  // Check size compatibility
  const sizes = species.map(s => s.visuals.adultSizeCM);
  const maxSize = Math.max(...sizes);
  const minSize = Math.min(...sizes);
  if (maxSize / minSize > 3) {
    warnings.push('Large size difference may cause predation risk');
  }

  if (warnings.length === 0) {
    return (
      <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex gap-3">
        <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-white text-xs font-bold">✓</span>
        </div>
        <div>
          <p className="font-bold text-emerald-900 mb-1">Compatible Parameters</p>
          <p className="text-sm text-emerald-800">These species have overlapping water parameters and size compatibility.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 bg-amber-50 border-2 border-amber-300 rounded-xl p-4 flex gap-3">
      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-bold text-amber-900 mb-2">Compatibility Warnings</p>
        <ul className="space-y-1 text-sm text-amber-800">
          {warnings.map((warning, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-amber-500 font-bold">•</span>
              {warning}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const EmptyState = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
    <div className="text-center max-w-md mx-auto bg-white rounded-2xl p-12 shadow-lg border border-slate-200">
      <div className="w-20 h-20 bg-indigo-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
        <AlertTriangle className="w-10 h-10 text-indigo-600" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">No Species Selected</h1>
      <p className="text-slate-600 mb-6">Add at least 2 species to compare them side-by-side.</p>
      <Link to="/species" className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-lg">
        Browse Species
      </Link>
    </div>
  </div>
);

export default ComparisonPage;
