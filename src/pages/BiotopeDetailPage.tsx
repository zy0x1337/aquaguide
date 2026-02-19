import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Droplets, Fish, Info } from 'lucide-react';
import { biotopes } from '../data/biotopes';
import { allSpecies } from '../data/species';
import { SpeciesCard } from '../components/species/SpeciesCard';
import { useMemo } from 'react';

// Helper to auto-link species names in text
const RichText = ({ text }: { text: string }) => {
  // 1. Sort species by name length (longest first) to avoid partial matches (e.g. matching "Tetra" inside "Neon Tetra")
  const sortedSpecies = useMemo(() => {
    return [...allSpecies].sort((a, b) => b.taxonomy.commonName.length - a.taxonomy.commonName.length);
  }, []);

  if (!text) return null;

  // Split text into parts
  let parts: (string | JSX.Element)[] = [text];

  sortedSpecies.forEach(species => {
    const name = species.taxonomy.commonName;
    const regex = new RegExp(`(${name}s?|${species.taxonomy.scientificName})`, 'gi'); // Match plural 's' optionally

    const newParts: (string | JSX.Element)[] = [];

    parts.forEach(part => {
      if (typeof part !== 'string') {
        newParts.push(part);
        return;
      }

      // Split the string part by the species name
      const split = part.split(regex);
      
      split.forEach((subPart, i) => {
        // Even indices are regular text, odd are matches (because of capturing group)
        if (i % 2 === 0) {
          if (subPart) newParts.push(subPart);
        } else {
          // It's a match! Link it.
          newParts.push(
            <Link 
              key={`${species.id}-${i}`} 
              to={`/species/${species.slug}`}
              className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline decoration-2 decoration-indigo-200 dark:decoration-indigo-800 transition-all"
            >
              {subPart}
            </Link>
          );
        }
      });
    });

    parts = newParts;
  });

  // Convert **bold** markdown to <strong>
  const finalParts: (string | JSX.Element)[] = [];
  parts.forEach(part => {
    if (typeof part !== 'string') {
      finalParts.push(part);
      return;
    }

    const boldSplit = part.split(/(\*\*.*?\*\*)/g);
    boldSplit.forEach((subPart, i) => {
      if (subPart.startsWith('**') && subPart.endsWith('**')) {
        finalParts.push(<strong key={`bold-${i}`} className="text-stone-900 dark:text-white font-black">{subPart.slice(2, -2)}</strong>);
      } else if (subPart) {
        finalParts.push(subPart);
      }
    });
  });

  return <p className="leading-relaxed text-lg text-stone-700 dark:text-stone-300">{finalParts}</p>;
};

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
          className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white mb-6 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Biotopes
        </Link>

        {/* Header Card */}
        <div className="bg-white dark:bg-stone-800/50 rounded-3xl overflow-hidden border border-stone-200/60 dark:border-stone-700/40 shadow-xl mb-12">
          
          {/* Top Section with Icon & Title */}
          <div className="p-8 pb-0 flex flex-col md:flex-row gap-6 md:items-start">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
              <Droplets className="w-10 h-10 text-white" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                {biotope.regions.map(region => (
                  <span
                    key={region}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wide"
                  >
                    <MapPin className="w-3 h-3" />
                    {region}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-stone-900 dark:text-white mb-4 tracking-tight leading-tight">
                {biotope.label}
              </h1>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="p-8 pt-6">
            <div className="prose prose-lg prose-indigo dark:prose-invert max-w-none">
              {biotope.narrative ? (
                <div className="bg-stone-50 dark:bg-stone-900/50 rounded-2xl p-6 md:p-8 border border-stone-100 dark:border-stone-800">
                  <div className="flex gap-4">
                    <Info className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                    <div className="space-y-4">
                      {biotope.narrative.split('\n').map((paragraph, idx) => (
                        paragraph.trim() && <RichText key={idx} text={paragraph} />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed">
                  {biotope.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Species Section */}
        {matchingSpecies.length > 0 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <Fish className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-stone-900 dark:text-white">
                Inhabitants
                <span className="ml-3 text-lg text-stone-500 dark:text-stone-400 font-normal bg-white dark:bg-stone-800 px-3 py-0.5 rounded-full border border-stone-200 dark:border-stone-700">
                  {matchingSpecies.length} Species
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
          <div className="bg-white dark:bg-stone-800/30 rounded-3xl p-12 text-center border border-dashed border-stone-300 dark:border-stone-700">
            <Fish className="w-12 h-12 text-stone-300 dark:text-stone-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-1">No Inhabitants Found</h3>
            <p className="text-stone-500 dark:text-stone-400">
              We haven't added any species from this biotope to our database yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BiotopeDetailPage;