import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tank } from '../../types/tank';

interface TankSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTank: (tankId: string) => void;
  tanks: Tank[];
  title: string;
  description: string;
}

const TankSelectionModal = ({
  isOpen,
  onClose,
  onSelectTank,
  tanks,
  title,
  description,
}: TankSelectionModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-1">{title}</h2>
                <p className="text-indigo-200 text-sm">{description}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Tank List */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            {tanks.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">No tanks available. Add a tank first!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {tanks.map((tank, index) => (
                  <motion.button
                    key={tank.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      onSelectTank(tank.id);
                      onClose();
                    }}
                    className="w-full text-left bg-gray-50 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 rounded-xl p-4 transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 text-lg mb-1">
                          {tank.name}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <span>
                            {tank.volumeLiters}L
                          </span>
                          <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full" />
                          <span className="capitalize">{tank.type}</span>
                          <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full" />
                          <span>
                            {(tank.inhabitants?.fish.reduce((sum, f) => sum + f.quantity, 0) || 0)} fish
                          </span>
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-xs">
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 rounded font-semibold">
                            pH {tank.parameters.ph}
                          </span>
                          <span className="px-2 py-1 bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 rounded font-semibold">
                            {tank.parameters.tempC}°C
                          </span>
                          {tank.parameters.ammonia > 0 && (
                            <span className="px-2 py-1 bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400 rounded font-semibold">
                              ⚠ NH₃
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                        →
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TankSelectionModal;
