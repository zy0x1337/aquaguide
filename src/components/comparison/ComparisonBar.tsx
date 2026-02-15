import { motion, AnimatePresence } from 'framer-motion';
import { Scale, X, Eye } from 'lucide-react';
import { useComparison } from '../../contexts/ComparisonContext';
import { Link } from 'react-router-dom';

export const ComparisonBar = () => {
  const { comparedSpecies, removeFromComparison, clearComparison } = useComparison();

  if (comparedSpecies.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Selected Species */}
            <div className="flex items-center gap-3 flex-1 overflow-x-auto">
              <div className="flex items-center gap-2 flex-shrink-0">
                <Scale className="w-5 h-5" />
                <span className="font-bold text-sm sm:text-base">Compare ({comparedSpecies.length}/3):</span>
              </div>
              
              <div className="flex gap-2">
                {comparedSpecies.map((species) => (
                  <motion.div
                    key={species.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-semibold whitespace-nowrap"
                  >
                    <span>{species.taxonomy.commonName}</span>
                    <button
                      onClick={() => removeFromComparison(species.id)}
                      className="hover:bg-white/20 rounded-full p-1 transition-colors"
                      aria-label="Remove from comparison"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {comparedSpecies.length >= 2 && (
                <Link
                  to="/compare"
                  className="flex items-center gap-2 bg-white text-indigo-600 hover:bg-indigo-50 px-4 sm:px-6 py-2 rounded-lg font-bold text-sm transition-colors shadow-lg"
                >
                  <Eye className="w-4 h-4" />
                  <span className="hidden sm:inline">View Comparison</span>
                  <span className="sm:hidden">Compare</span>
                </Link>
              )}
              
              <button
                onClick={clearComparison}
                className="hover:bg-white/20 rounded-lg px-3 py-2 transition-colors text-sm font-semibold"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
