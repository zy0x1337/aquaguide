import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Droplets, Fish } from 'lucide-react';
import { biotopes } from '../data/biotopes';
import { allSpecies } from '../data/species';
import { SpeciesCard } from '../components/species/SpeciesCard';

const BiotopeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const biotope = biotopes.find(b => b.id === id);

  if (!biotope) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#1c1917] pt-20 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-2">Biotope Not Found</h2>
          <Link to="/biotopes" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← Back to Biotopes
          </Link>
        </div>
      </div>
    );
  }

  // Filter species that match this biotope
  const matchingSpecies = allSpecies.filter(species => 
    species.taxonomy.biotope?.toLowerCase().includes(biotope.id) ||
    species.taxonomy.biotope?.toLowerCase().includes(biotope.label.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-[#1c1917] dark:via-stone-900 dark:to-[#1c1917] pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <Link
          to="/biotopes"
          className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Biotopes
        </Link>

        {/* Header Card */}
        <div className="bg-white dark:bg-stone-800/50 rounded-3xl p-8 border border-stone-200/60 dark:border-stone-700/40 shadow-xl mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <Droplets className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-black text-stone-900 dark:text-white mb-3">
                {biotope.label}
              </h1>
              <p className="text-lg text-stone-600 dark:text-stone-400">
                {biotope.description}
              </p>
            </div>
          </div>

          {/* Regions */}
          <div className="flex flex-wrap gap-2">
            {biotope.regions.map(region => (
              <span
                key={region}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold"
              >
                <MapPin className="w-4 h-4" />
                {region}
              </span>
            ))}
          </div>
        </div>

        {/* Species Section */}
        {matchingSpecies.length > 0 ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Fish className="w-6 h-6 text-stone-600 dark:text-stone-400" />
              <h2 className="text-2xl font-bold text-stone-900 dark:text-white">
                Species from this Biotope
                <span className="ml-3 text-lg text-stone-500 dark:text-stone-400 font-normal">
                  ({matchingSpecies.length})
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingSpecies.map(species => (
                <SpeciesCard key={species.id} species={species} />
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-stone-100 dark:bg-stone-800/30 rounded-2xl p-12 text-center">
            <Fish className="w-12 h-12 text-stone-400 dark:text-stone-600 mx-auto mb-4" />
            <p className="text-lg text-stone-600 dark:text-stone-400">
              No species data available for this biotope yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BiotopeDetailPage;