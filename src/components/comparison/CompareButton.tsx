import { Plus, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useComparison } from '../../contexts/ComparisonContext';
import type { Species } from '../../types/species';

interface Props {
  species: Species;
  size?: 'sm' | 'md';
}

export const CompareButton = ({ species, size = 'md' }: Props) => {
  const { addToComparison, removeFromComparison, isInComparison, comparedSpecies } = useComparison();
  const isSelected = isInComparison(species.id);
  const isFull = comparedSpecies.length >= 3;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation if inside Link
    e.stopPropagation();
    
    if (isSelected) {
      removeFromComparison(species.id);
    } else if (!isFull) {
      addToComparison(species);
    }
  };

  const sizeClasses = size === 'sm' ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm';

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      disabled={isFull && !isSelected}
      className={`flex items-center gap-1.5 rounded-lg font-bold transition-all ${
        isSelected
          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
          : isFull
          ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
          : 'bg-slate-100 text-slate-700 hover:bg-indigo-100 hover:text-indigo-700 border border-slate-300 hover:border-indigo-300'
      } ${sizeClasses}`}
      title={isFull && !isSelected ? 'Maximum 3 species' : isSelected ? 'Remove from comparison' : 'Add to comparison'}
    >
      {isSelected ? (
        <>
          <Check className="w-3.5 h-3.5" />
          <span>Added</span>
        </>
      ) : (
        <>
          <Plus className="w-3.5 h-3.5" />
          <span>Compare</span>
        </>
      )}
    </motion.button>
  );
};
