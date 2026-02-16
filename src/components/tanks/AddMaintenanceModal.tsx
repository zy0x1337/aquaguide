import { useState } from 'react';
import { X, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AddMaintenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (log: {
    type: 'water_change' | 'filter_cleaning' | 'equipment_maintenance' | 'medication' | 'other';
    title: string;
    description?: string;
    waterChangePercent?: number;
    performedAt?: string;
  }) => Promise<void>;
}

const maintenanceTypes = [
  { value: 'water_change', label: 'Water Change', icon: '💧' },
  { value: 'filter_cleaning', label: 'Filter Cleaning', icon: '🔧' },
  { value: 'equipment_maintenance', label: 'Equipment Maintenance', icon: '⚙️' },
  { value: 'medication', label: 'Medication', icon: '💊' },
  { value: 'other', label: 'Other', icon: '📝' },
];

const AddMaintenanceModal = ({ isOpen, onClose, onSubmit }: AddMaintenanceModalProps) => {
  const [formData, setFormData] = useState({
    type: 'water_change' as const,
    title: '',
    description: '',
    waterChangePercent: '',
    performedAt: new Date().toISOString().slice(0, 16),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const log: any = {
        type: formData.type,
        title: formData.title,
        performedAt: new Date(formData.performedAt).toISOString(),
      };

      if (formData.description) log.description = formData.description;
      if (formData.waterChangePercent && formData.type === 'water_change') {
        log.waterChangePercent = parseInt(formData.waterChangePercent);
      }

      await onSubmit(log);
      
      // Reset form
      setFormData({
        type: 'water_change',
        title: '',
        description: '',
        waterChangePercent: '',
        performedAt: new Date().toISOString().slice(0, 16),
      });
    } catch (err) {
      console.error('Error submitting maintenance log:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 flex items-center justify-between rounded-t-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Log Maintenance</h2>
                    <p className="text-sm text-purple-100">Track tank maintenance tasks</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Maintenance Type */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Maintenance Type *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {maintenanceTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => handleChange('type', type.value)}
                        className={`p-3 rounded-xl border-2 transition-all text-left ${
                          formData.type === type.value
                            ? 'border-purple-500 bg-purple-50 shadow-md'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{type.icon}</span>
                          <span className="text-sm font-medium text-slate-900">{type.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    placeholder="e.g., 50% water change"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                {/* Water Change Percentage (only for water_change type) */}
                {formData.type === 'water_change' && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Water Changed (%)
                    </label>
                    <input
                      type="number"
                      value={formData.waterChangePercent}
                      onChange={(e) => handleChange('waterChangePercent', e.target.value)}
                      placeholder="e.g., 50"
                      min="0"
                      max="100"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                )}

                {/* Date/Time */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Date & Time *
                  </label>
                  <input
                    type="datetime-local"
                    value={formData.performedAt}
                    onChange={(e) => handleChange('performedAt', e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Description (Optional)
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    placeholder="Additional notes, observations, or actions taken..."
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.title}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Saving...' : 'Log Maintenance'}
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

export default AddMaintenanceModal;
