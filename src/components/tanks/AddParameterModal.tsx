import { useState } from 'react';
import { X, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AddParameterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reading: {
    tempC?: number;
    ph?: number;
    ammonia?: number;
    nitrite?: number;
    nitrate?: number;
    gh?: number;
    kh?: number;
    tds?: number;
    salinity?: number;
    notes?: string;
    measuredAt?: string;
  }) => Promise<void>;
  tankType: string;
}

const AddParameterModal = ({ isOpen, onClose, onSubmit, tankType }: AddParameterModalProps) => {
  const [formData, setFormData] = useState({
    tempC: '',
    ph: '',
    ammonia: '',
    nitrite: '',
    nitrate: '',
    gh: '',
    kh: '',
    tds: '',
    salinity: '',
    notes: '',
    measuredAt: new Date().toISOString().slice(0, 16),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const reading: any = {
        measuredAt: new Date(formData.measuredAt).toISOString(),
      };

      // Only include non-empty values
      if (formData.tempC) reading.tempC = parseFloat(formData.tempC);
      if (formData.ph) reading.ph = parseFloat(formData.ph);
      if (formData.ammonia) reading.ammonia = parseFloat(formData.ammonia);
      if (formData.nitrite) reading.nitrite = parseFloat(formData.nitrite);
      if (formData.nitrate) reading.nitrate = parseFloat(formData.nitrate);
      if (formData.gh) reading.gh = parseFloat(formData.gh);
      if (formData.kh) reading.kh = parseFloat(formData.kh);
      if (formData.tds) reading.tds = parseInt(formData.tds);
      if (formData.salinity) reading.salinity = parseFloat(formData.salinity);
      if (formData.notes) reading.notes = formData.notes;

      await onSubmit(reading);
      
      // Reset form
      setFormData({
        tempC: '',
        ph: '',
        ammonia: '',
        nitrite: '',
        nitrate: '',
        gh: '',
        kh: '',
        tds: '',
        salinity: '',
        notes: '',
        measuredAt: new Date().toISOString().slice(0, 16),
      });
    } catch (err) {
      console.error('Error submitting reading:', err);
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
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Add Water Parameter Reading</h2>
                    <p className="text-sm text-blue-100">Record current water conditions</p>
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
              <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                {/* Date/Time */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Measurement Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    value={formData.measuredAt}
                    onChange={(e) => handleChange('measuredAt', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all"
                    required
                  />
                </div>

                {/* Core Parameters */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Core Parameters</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <InputField
                      label="Temperature (°C)"
                      value={formData.tempC}
                      onChange={(v) => handleChange('tempC', v)}
                      type="number"
                      step="0.1"
                      placeholder="e.g., 24.5"
                    />
                    <InputField
                      label="pH Level"
                      value={formData.ph}
                      onChange={(v) => handleChange('ph', v)}
                      type="number"
                      step="0.1"
                      placeholder="e.g., 7.0"
                    />
                    <InputField
                      label="Ammonia (ppm)"
                      value={formData.ammonia}
                      onChange={(v) => handleChange('ammonia', v)}
                      type="number"
                      step="0.01"
                      placeholder="e.g., 0.0"
                    />
                    <InputField
                      label="Nitrite (ppm)"
                      value={formData.nitrite}
                      onChange={(v) => handleChange('nitrite', v)}
                      type="number"
                      step="0.01"
                      placeholder="e.g., 0.0"
                    />
                    <InputField
                      label="Nitrate (ppm)"
                      value={formData.nitrate}
                      onChange={(v) => handleChange('nitrate', v)}
                      type="number"
                      step="0.1"
                      placeholder="e.g., 10.0"
                    />
                  </div>
                </div>

                {/* Optional Parameters */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Optional Parameters</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <InputField
                      label="GH (°dGH)"
                      value={formData.gh}
                      onChange={(v) => handleChange('gh', v)}
                      type="number"
                      step="0.1"
                      placeholder="e.g., 8.0"
                    />
                    <InputField
                      label="KH (°dKH)"
                      value={formData.kh}
                      onChange={(v) => handleChange('kh', v)}
                      type="number"
                      step="0.1"
                      placeholder="e.g., 5.0"
                    />
                    <InputField
                      label="TDS (ppm)"
                      value={formData.tds}
                      onChange={(v) => handleChange('tds', v)}
                      type="number"
                      placeholder="e.g., 250"
                    />
                    {tankType === 'saltwater' && (
                      <InputField
                        label="Salinity (ppt)"
                        value={formData.salinity}
                        onChange={(v) => handleChange('salinity', v)}
                        type="number"
                        step="0.1"
                        placeholder="e.g., 35.0"
                      />
                    )}
                  </div>
                </div>

                {/* Notes */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Notes (Optional)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => handleChange('notes', e.target.value)}
                    placeholder="Any observations, concerns, or actions taken..."
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all resize-none"
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
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Saving...' : 'Add Reading'}
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

const InputField = ({
  label,
  value,
  onChange,
  type = 'text',
  step,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  step?: string;
  placeholder?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      step={step}
      placeholder={placeholder}
      className="w-full px-4 py-2.5 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all"
    />
  </div>
);

export default AddParameterModal;
