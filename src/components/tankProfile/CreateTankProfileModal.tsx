import { useState } from 'react';
import { X, Droplets } from 'lucide-react';
import { CreateTankProfileDTO, TankType } from '../../types/tankProfile';
import { motion, AnimatePresence } from 'framer-motion';

interface CreateTankProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateTankProfileDTO) => void;
}

export const CreateTankProfileModal = ({ isOpen, onClose, onSubmit }: CreateTankProfileModalProps) => {
  const [formData, setFormData] = useState<CreateTankProfileDTO>({
    name: '',
    description: '',
    type: 'community',
    volumeLiters: 0,
    isPublic: true,
  });

  const tankTypes: { value: TankType; label: string; emoji: string }[] = [
    { value: 'community', label: 'Community', emoji: '🐠' },
    { value: 'planted', label: 'Planted', emoji: '🌱' },
    { value: 'biotope', label: 'Biotope', emoji: '🌍' },
    { value: 'species-only', label: 'Species-Only', emoji: '🐟' },
    { value: 'nano', label: 'Nano', emoji: '🪴' },
    { value: 'paludarium', label: 'Paludarium', emoji: '🏞️' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || formData.volumeLiters <= 0) return;
    onSubmit(formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-coral-100 dark:bg-coral-900/30 rounded-xl flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-coral-600 dark:text-coral-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-gray-900 dark:text-white">
                      Create Tank Profile
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Showcase your aquarium to the community
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Tank Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Tank Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Living Room Community Tank"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-all"
                    required
                  />
                </div>
                
                {/* Description */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell others about your tank..."
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-all resize-none"
                  />
                </div>
                
                {/* Tank Type */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    Tank Type *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {tankTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, type: type.value })}
                        className={`px-4 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                          formData.type === type.value
                            ? 'bg-coral-600 text-white border-coral-700 shadow-lg'
                            : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-coral-300 dark:hover:border-coral-700'
                        }`}
                      >
                        <div className="text-2xl mb-1">{type.emoji}</div>
                        <div>{type.label}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Volume */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Tank Volume (Liters) *
                  </label>
                  <input
                    type="number"
                    value={formData.volumeLiters || ''}
                    onChange={(e) => setFormData({ ...formData, volumeLiters: Number(e.target.value) })}
                    placeholder="120"
                    min="1"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-all"
                    required
                  />
                </div>
                
                {/* Public Toggle */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div>
                    <div className="font-bold text-sm text-gray-900 dark:text-white">Make Profile Public</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Allow others to view your tank</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, isPublic: !formData.isPublic })}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      formData.isPublic ? 'bg-coral-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        formData.isPublic ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                {/* Submit */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold rounded-xl transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.name || formData.volumeLiters <= 0}
                    className="flex-1 px-6 py-3 bg-coral-600 hover:bg-coral-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    Create Tank
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
