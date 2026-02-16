import { useState } from 'react';
import { X } from 'lucide-react';
import { Tank } from '../../types/tank';

interface AddTankModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (tank: Omit<Tank, 'id' | 'createdAt'>) => void;
}

const AddTankModal = ({ isOpen, onClose, onSubmit }: AddTankModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'freshwater',
    volumeLiters: 0,
    substrate: '',
    lighting: '',
    parameters: {
      tempC: 25,
      ph: 7.0,
      ammonia: 0,
      nitrite: 0,
      nitrate: 0,
      gh: 8,
      kh: 4,
      tds: 200,
      salinity: 35,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || formData.volumeLiters <= 0) {
      alert('Please fill all required fields');
      return;
    }
    onSubmit({
      ...formData,
      inhabitants: { fish: [], plants: [] },
    });
    // Reset form
    setFormData({
      name: '',
      type: 'freshwater',
      volumeLiters: 0,
      substrate: '',
      lighting: '',
      parameters: {
        tempC: 25,
        ph: 7.0,
        ammonia: 0,
        nitrite: 0,
        nitrate: 0,
        gh: 8,
        kh: 4,
        tds: 200,
        salinity: 35,
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Add New Tank</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Info */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Tank Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Community Tank, Shrimp Paradise"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Type *</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              >
                <option value="freshwater">Freshwater</option>
                <option value="saltwater">Saltwater</option>
                <option value="brackish">Brackish</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Volume (Liters) *</label>
              <input
                type="number"
                value={formData.volumeLiters || ''}
                onChange={(e) => setFormData({ ...formData, volumeLiters: parseFloat(e.target.value) || 0 })}
                placeholder="e.g., 100"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                required
                min="1"
              />
            </div>
          </div>

          {/* Tank Setup */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Substrate</label>
              <select
                value={formData.substrate}
                onChange={(e) => setFormData({ ...formData, substrate: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              >
                <option value="">Select substrate...</option>
                <option value="sand">Sand</option>
                <option value="gravel">Gravel</option>
                <option value="soil">Aqua Soil</option>
                <option value="bare">Bare Bottom</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Lighting</label>
              <select
                value={formData.lighting}
                onChange={(e) => setFormData({ ...formData, lighting: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              >
                <option value="">Select lighting...</option>
                <option value="low">Low (10-30 PAR)</option>
                <option value="medium">Medium (30-50 PAR)</option>
                <option value="high">High (50+ PAR)</option>
              </select>
            </div>
          </div>

          {/* Water Parameters */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4">Water Parameters</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                label="Temperature (°C)"
                type="number"
                value={formData.parameters.tempC}
                onChange={(val) => setFormData({
                  ...formData,
                  parameters: { ...formData.parameters, tempC: val }
                })}
                step="0.1"
              />
              <InputField
                label="pH"
                type="number"
                value={formData.parameters.ph}
                onChange={(val) => setFormData({
                  ...formData,
                  parameters: { ...formData.parameters, ph: val }
                })}
                step="0.1"
              />
              <InputField
                label="Ammonia (ppm)"
                type="number"
                value={formData.parameters.ammonia}
                onChange={(val) => setFormData({
                  ...formData,
                  parameters: { ...formData.parameters, ammonia: val }
                })}
                step="0.01"
              />
              <InputField
                label="Nitrite (ppm)"
                type="number"
                value={formData.parameters.nitrite}
                onChange={(val) => setFormData({
                  ...formData,
                  parameters: { ...formData.parameters, nitrite: val }
                })}
                step="0.01"
              />
              <InputField
                label="Nitrate (ppm)"
                type="number"
                value={formData.parameters.nitrate}
                onChange={(val) => setFormData({
                  ...formData,
                  parameters: { ...formData.parameters, nitrate: val }
                })}
                step="0.1"
              />
              <InputField
                label="GH (°dGH)"
                type="number"
                value={formData.parameters.gh}
                onChange={(val) => setFormData({
                  ...formData,
                  parameters: { ...formData.parameters, gh: val }
                })}
                step="0.1"
              />
              <InputField
                label="KH (°dKH)"
                type="number"
                value={formData.parameters.kh}
                onChange={(val) => setFormData({
                  ...formData,
                  parameters: { ...formData.parameters, kh: val }
                })}
                step="0.1"
              />
              <InputField
                label="TDS (ppm)"
                type="number"
                value={formData.parameters.tds}
                onChange={(val) => setFormData({
                  ...formData,
                  parameters: { ...formData.parameters, tds: val }
                })}
                step="1"
              />
              {formData.type === 'saltwater' && (
                <InputField
                  label="Salinity (ppt)"
                  type="number"
                  value={formData.parameters.salinity}
                  onChange={(val) => setFormData({
                    ...formData,
                    parameters: { ...formData.parameters, salinity: val }
                  })}
                  step="0.1"
                />
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              Add Tank
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Helper Component
const InputField = ({
  label,
  type,
  value,
  onChange,
  step,
}: {
  label: string;
  type: string;
  value: number;
  onChange: (val: number) => void;
  step?: string;
}) => (
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
      step={step}
      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
    />
  </div>
);

export default AddTankModal;
