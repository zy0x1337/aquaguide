import { Link } from 'react-router-dom';
import { ArrowLeft, Thermometer, Droplets, Ruler, Heart, Users, Activity, AlertTriangle, X, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useComparison } from '../contexts/ComparisonContext';
import { SEOHead } from '../components/seo/SEOHead';
import type { Species } from '../types/species';

const ComparisonPage = () => {
  const { comparedSpecies, removeFromComparison, clearComparison } = useComparison();
  const [showOnlyDifferences, setShowOnlyDifferences] = useState(false);

  if (comparedSpecies.length < 2) {
    return <EmptyState />;
  }

  // Prepare comparison data
  const comparisonData = [
    { label: 'Max Size', icon: <Ruler className="w-4 h-4" />, values: comparedSpecies.map(s => `${s.visuals.adultSizeCM} cm`), category: 'physical', highlightDiff: true },
    { label: 'Min Tank Size', icon: <Droplets className="w-4 h-4" />, values: comparedSpecies.map(s => `${s.environment.minTankSizeLiters}L`), category: 'environment', highlightDiff: true },
    { label: 'Temperature', icon: <Thermometer className="w-4 h-4" />, values: comparedSpecies.map(s => `${s.environment.tempC.min}-${s.environment.tempC.max}°C`), category: 'environment', highlightDiff: false },
    { label: 'pH Range', icon: <Droplets className="w-4 h-4" />, values: comparedSpecies.map(s => `${s.environment.ph.min}-${s.environment.ph.max}`), category: 'environment', highlightDiff: false },
    { label: 'Water Type', icon: <Droplets className="w-4 h-4" />, values: comparedSpecies.map(s => s.environment.type), category: 'environment', highlightDiff: true },
    { label: 'Flow Preference', icon: <Activity className="w-4 h-4" />, values: comparedSpecies.map(s => s.environment.flow), category: 'environment', highlightDiff: false },
    { label: 'Lifespan', icon: <Heart className="w-4 h-4" />, values: comparedSpecies.map(s => `${s.health.lifespanYears} years`), category: 'care', highlightDiff: true },
    { label: 'Min Group Size', icon: <Users className="w-4 h-4" />, values: comparedSpecies.map(s => `${s.behavior.minGroupSize}+`), category: 'behavior', highlightDiff: true },
    { label: 'Difficulty', icon: <Activity className="w-4 h-4" />, values: comparedSpecies.map(s => s.care.difficulty), category: 'care', highlightDiff: false, colorCode: (v: string) => v === 'beginner' ? 'text-emerald-700 bg-emerald-50 border-emerald-200' : v === 'medium' ? 'text-amber-700 bg-amber-50 border-amber-200' : 'text-rose-700 bg-rose-50 border-rose-200' },
    { label: 'Diet', icon: <Activity className="w-4 h-4" />, values: comparedSpecies.map(s => s.care.diet), category: 'care', highlightDiff: false },
    { label: 'Temperament', icon: <Activity className="w-4 h-4" />, values: comparedSpecies.map(s => s.behavior.tags.includes('peaceful') ? 'Peaceful' : s.behavior.tags.includes('semi-aggressive') ? 'Semi-Aggressive' : 'Varies'), category: 'behavior', highlightDiff: false },
    { label: 'Breeding', icon: <Heart className="w-4 h-4" />, values: comparedSpecies.map(s => s.breeding.difficulty), category: 'breeding', highlightDiff: false },
  ];

  const filteredData = showOnlyDifferences 
    ? comparisonData.filter(row => !row.values.every(v => v === row.values[0]))
    : comparisonData;

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
              <p className="text-indigo-100">Compare {comparedSpecies.length} species across {comparisonData.length} attributes</p>
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

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-4 mb-4">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 flex items-center gap-3">
          <Filter className="w-5 h-5 text-indigo-600" />
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showOnlyDifferences}
              onChange={(e) => setShowOnlyDifferences(e.target.checked)}
              className="w-4 h-4 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-sm font-semibold text-slate-700">Show only differences</span>
          </label>
          {showOnlyDifferences && (
            <span className="ml-auto text-xs text-slate-500 font-medium">
              {filteredData.length} of {comparisonData.length} attributes
            </span>
          )}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left p-4 font-bold text-slate-700 w-48 sticky left-0 bg-slate-50 z-10">Property</th>
                  {comparedSpecies.map((species) => (
                    <th key={species.id} className="p-4 text-center relative min-w-[200px]">
                      <button
                        onClick={() => removeFromComparison(species.id)}
                        className="absolute top-2 right-2 p-1 hover:bg-slate-200 rounded-full transition-colors z-10"
                        aria-label="Remove"
                      >
                        <X className="w-4 h-4 text-slate-500" />
                      </button>
                      <div className="font-bold text-slate-900 mb-1 pr-8">{species.taxonomy.commonName}</div>
                      <div className="text-xs text-slate-500 italic">{species.taxonomy.scientificName}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, idx) => (
                  <ComparisonRow key={idx} {...row} />
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View - Enhanced */}
          <div className="lg:hidden">
            {/* Species Headers */}
            <div className="border-b border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold text-slate-700 mb-3">Comparing Species:</h3>
              <div className="space-y-2">
                {comparedSpecies.map((species) => (
                  <div key={species.id} className="flex items-center justify-between bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex-1">
                      <div className="font-bold text-slate-900 text-sm">{species.taxonomy.commonName}</div>
                      <div className="text-xs text-slate-500 italic">{species.taxonomy.scientificName}</div>
                    </div>
                    <button
                      onClick={() => removeFromComparison(species.id)}
                      className="p-1.5 hover:bg-slate-100 rounded-full transition-colors"
                      aria-label="Remove"
                    >
                      <X className="w-4 h-4 text-slate-500" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Data - Organized by Category */}
            <div className="divide-y divide-slate-200">
              <MobileCategorySection title="Physical Attributes" data={filteredData.filter(d => d.category === 'physical')} species={comparedSpecies} />
              <MobileCategorySection title="Environment" data={filteredData.filter(d => d.category === 'environment')} species={comparedSpecies} />
              <MobileCategorySection title="Care Requirements" data={filteredData.filter(d => d.category === 'care')} species={comparedSpecies} />
              <MobileCategorySection title="Behavior" data={filteredData.filter(d => d.category === 'behavior')} species={comparedSpecies} />
              <MobileCategorySection title="Breeding" data={filteredData.filter(d => d.category === 'breeding')} species={comparedSpecies} />
            </div>
          </div>
        </div>

        {/* Compatibility Analysis */}
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
      <td className="p-4 font-semibold text-slate-700 flex items-center gap-2 sticky left-0 bg-white z-10">
        <span className="text-indigo-600">{icon}</span>
        {label}
      </td>
      {values.map((value, idx) => (
        <td key={idx} className="p-4 text-center">
          <span className={`inline-block px-3 py-1.5 rounded-lg font-semibold border ${
            colorCode ? colorCode(value) :
            shouldHighlight ? 'bg-amber-50 text-amber-900 border-amber-200' : 
            'text-slate-800 border-transparent'
          }`}>
            {value}
          </span>
        </td>
      ))}
    </tr>
  );
};

const MobileCategorySection = ({ title, data, species }: { title: string; data: any[]; species: Species[] }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  if (data.length === 0) return null;

  return (
    <div className="bg-white">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 font-bold text-slate-900 hover:bg-slate-50 transition-colors"
      >
        <span className="flex items-center gap-2">
          {data[0]?.icon}
          {title}
        </span>
        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 space-y-4">
              {data.map((row, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center gap-2 mb-3 text-sm font-bold text-slate-700">
                    <span className="text-indigo-600">{row.icon}</span>
                    {row.label}
                  </div>
                  <div className="space-y-2">
                    {species.map((s, sIdx) => {
                      const value = row.values[sIdx];
                      const allSame = row.values.every((v: string) => v === row.values[0]);
                      const isDifferent = row.highlightDiff && !allSame;
                      
                      return (
                        <div key={s.id} className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-600 truncate max-w-[140px]">{s.taxonomy.commonName}</span>
                          <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold border ${
                            row.colorCode ? row.colorCode(value) :
                            isDifferent ? 'bg-amber-50 text-amber-900 border-amber-200' :
                            'bg-white text-slate-800 border-slate-200'
                          }`}>
                            {value}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CompatibilityWarning = ({ species }: { species: Species[] }) => {
  const warnings: string[] = [];
  const positives: string[] = [];

  // Check water type
  const waterTypes = [...new Set(species.map(s => s.environment.type))];
  if (waterTypes.length > 1) {
    warnings.push(`Incompatible water types: ${waterTypes.join(', ')}`);
  } else {
    positives.push(`All species prefer ${waterTypes[0]} water`);
  }

  // Check temperature overlap
  const tempMin = Math.max(...species.map(s => s.environment.tempC.min));
  const tempMax = Math.min(...species.map(s => s.environment.tempC.max));
  if (tempMin > tempMax) {
    warnings.push('No overlapping temperature range');
  } else {
    positives.push(`Temperature overlap: ${tempMin}-${tempMax}°C`);
  }

  // Check pH overlap
  const phMin = Math.max(...species.map(s => s.environment.ph.min));
  const phMax = Math.min(...species.map(s => s.environment.ph.max));
  if (phMin > phMax) {
    warnings.push('No overlapping pH range');
  } else {
    positives.push(`pH overlap: ${phMin.toFixed(1)}-${phMax.toFixed(1)}`);
  }

  // Check size compatibility
  const sizes = species.map(s => s.visuals.adultSizeCM);
  const maxSize = Math.max(...sizes);
  const minSize = Math.min(...sizes);
  if (maxSize / minSize > 3) {
    warnings.push('Large size difference may cause predation risk');
  }

  // Check tank size requirements
  const maxTankRequired = Math.max(...species.map(s => s.environment.minTankSizeLiters));
  positives.push(`Minimum tank size needed: ${maxTankRequired}L`);

  if (warnings.length === 0) {
    return (
      <div className="mt-6 bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5">
        <div className="flex gap-3 mb-3">
          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-bold">✓</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-emerald-900 text-lg">Excellent Compatibility!</p>
            <p className="text-sm text-emerald-700 mt-1">These species are compatible for keeping together.</p>
          </div>
        </div>
        <div className="ml-9 space-y-1.5">
          {positives.map((positive, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-emerald-800">
              <span className="text-emerald-500 font-bold mt-0.5">•</span>
              <span>{positive}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {warnings.length > 0 && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5">
          <div className="flex gap-3 mb-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-bold text-amber-900 text-lg">Compatibility Warnings</p>
              <p className="text-sm text-amber-700 mt-1">These species may have compatibility issues:</p>
            </div>
          </div>
          <ul className="ml-9 space-y-1.5">
            {warnings.map((warning, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-amber-800">
                <span className="text-amber-500 font-bold mt-0.5">•</span>
                <span>{warning}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {positives.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="font-bold text-blue-900 mb-2">Compatible Parameters:</p>
          <ul className="ml-5 space-y-1.5">
            {positives.map((positive, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-blue-800">
                <span className="text-blue-500 font-bold mt-0.5">•</span>
                <span>{positive}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
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
