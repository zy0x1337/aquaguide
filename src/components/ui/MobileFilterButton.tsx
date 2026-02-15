import { SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  onClick: () => void;
  activeFiltersCount: number;
}

export const MobileFilterButton = ({ onClick, activeFiltersCount }: Props) => {
  return (
    <motion.button
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 lg:hidden z-30 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-2xl transition-all active:scale-95"
      aria-label="Open filters"
    >
      <div className="relative">
        <SlidersHorizontal className="w-6 h-6" />
        {activeFiltersCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
          >
            {activeFiltersCount}
          </motion.div>
        )}
      </div>
    </motion.button>
  );
};
