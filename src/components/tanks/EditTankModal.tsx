import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Tank } from '../../types/tank';

interface EditTankModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (tank: Tank) => void;
  tank: Tank;
}

const EditTankModal = ({ isOpen, onClose, onSubmit, tank }: EditTankModalProps) => {
  const [formData, setFormData] = useState({
    name: tank.name,
    type: tank.type,
    volumeLiters: tank.volumeLiters,
    substrate: tank.substrate || '',
    lighting: tank.lighting || '',
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: tank.name,
        type: tank.type,
        volumeLiters: tank.volumeLiters,
        substrate: tank.substrate || '',
        lighting: tank.lighting || '',
      });
    }
  }, [isOpen, tank]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || formData.volumeLiters <= 0) {
      alert('Please fill all required fields');
      return;
    }
    onSubmit({
      ...tank,
      ...formData,
      // Keep existing parameters unchanged
      parameters: tank.parameters,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Edit Tank</h2>
            <p className="text-indigo-200 text-sm mt-1">Update tank information and setup</p>
          </div>
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
            <h3 className="text-lg font-bold text-slate-800 mb-4">Basic Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Tank Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="e.g., Community Tank, Betta Paradise"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Tank Type *
                  </label>
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
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Volume (Liters) *
                  </label>
                  <input
                    type="number"
                    value={formData.volumeLiters || ''}
                    onChange={(e) => setFormData({ ...formData, volumeLiters: parseFloat(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="e.g., 60"
                    required
                    min="1"
                    step="0.1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tank Setup */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4">Tank Setup</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Substrate
                </label>
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
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Lighting
                </label>
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
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex gap-3">
              <div className="text-blue-600 flex-shrink-0">
                💧
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Water Parameters</h4>
                <p className="text-sm text-blue-800">
                  To update water parameters, use the <strong>Log Parameters</strong> button in the Dashboard or Parameters tab.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTankModal;
