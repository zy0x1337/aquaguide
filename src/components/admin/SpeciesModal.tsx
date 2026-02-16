import React, { useState, useEffect } from 'react';
import { X, Save, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  editingSpecies?: any;
}

export const SpeciesModal = ({ isOpen, onClose, onSuccess, editingSpecies }: Props) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Basic Info
  const [commonName, setCommonName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [type, setType] = useState<'fish' | 'plant' | 'invertebrate' | 'coral'>('fish');
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced' | 'expert'>('beginner');
  
  // Tank Requirements
  const [minTankSize, setMinTankSize] = useState('');
  const [minGroupSize, setMinGroupSize] = useState('1');
  
  // Water Parameters
  const [phMin, setPhMin] = useState('');
  const [phMax, setPhMax] = useState('');
  const [tempMin, setTempMin] = useState('');
  const [tempMax, setTempMax] = useState('');
  const [ghMin, setGhMin] = useState('');
  const [ghMax, setGhMax] = useState('');
  
  // Content
  const [description, setDescription] = useState('');
  const [careGuide, setCareGuide] = useState('');
  const [diet, setDiet] = useState('');
  const [behaviorTags, setBehaviorTags] = useState('');
  
  // Image
  const [imageUrl, setImageUrl] = useState('');
  const [imageCredit, setImageCredit] = useState('');

  useEffect(() => {
    if (editingSpecies) {
      setCommonName(editingSpecies.common_name || '');
      setScientificName(editingSpecies.scientific_name || '');
      setType(editingSpecies.type || 'fish');
      setDifficulty(editingSpecies.difficulty || 'beginner');
      setMinTankSize(editingSpecies.min_tank_size_liters?.toString() || '');
      setMinGroupSize(editingSpecies.min_group_size?.toString() || '1');
      
      setPhMin(editingSpecies.ph_range?.min?.toString() || '');
      setPhMax(editingSpecies.ph_range?.max?.toString() || '');
      setTempMin(editingSpecies.temp_range_c?.min?.toString() || '');
      setTempMax(editingSpecies.temp_range_c?.max?.toString() || '');
      setGhMin(editingSpecies.hardness_range_dgh?.min?.toString() || '');
      setGhMax(editingSpecies.hardness_range_dgh?.max?.toString() || '');
      
      setDescription(editingSpecies.description || '');
      setCareGuide(editingSpecies.care_guide || '');
      setDiet(editingSpecies.diet || '');
      setBehaviorTags(editingSpecies.behavior_tags?.join(', ') || '');
      
      setImageUrl(editingSpecies.image_url || '');
      setImageCredit(editingSpecies.image_credit || '');
    } else {
      resetForm();
    }
  }, [editingSpecies]);

  const resetForm = () => {
    setCommonName('');
    setScientificName('');
    setType('fish');
    setDifficulty('beginner');
    setMinTankSize('');
    setMinGroupSize('1');
    setPhMin('');
    setPhMax('');
    setTempMin('');
    setTempMax('');
    setGhMin('');
    setGhMax('');
    setDescription('');
    setCareGuide('');
    setDiet('');
    setBehaviorTags('');
    setImageUrl('');
    setImageCredit('');
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Generate slug from common name
      const slug = commonName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

      const speciesData = {
        slug,
        common_name: commonName,
        scientific_name: scientificName,
        type,
        difficulty,
        min_tank_size_liters: minTankSize ? parseInt(minTankSize) : null,
        min_group_size: parseInt(minGroupSize),
        ph_range: phMin && phMax ? { min: parseFloat(phMin), max: parseFloat(phMax) } : null,
        temp_range_c: tempMin && tempMax ? { min: parseFloat(tempMin), max: parseFloat(tempMax) } : null,
        hardness_range_dgh: ghMin && ghMax ? { min: parseFloat(ghMin), max: parseFloat(ghMax) } : null,
        description,
        care_guide: careGuide,
        diet,
        behavior_tags: behaviorTags ? behaviorTags.split(',').map(t => t.trim()).filter(Boolean) : [],
        image_url: imageUrl || null,
        image_credit: imageCredit || null,
        created_by: user?.id,
      };

      if (editingSpecies) {
        // Update existing
        const { error } = await supabase
          .from('species')
          .update(speciesData)
          .eq('id', editingSpecies.id);
        if (error) throw error;
      } else {
        // Create new
        const { error } = await supabase
          .from('species')
          .insert([speciesData]);
        if (error) throw error;
      }

      resetForm();
      onSuccess();
      onClose();
    } catch (err: any) {
      setError(err.message || 'Failed to save species');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900">
            {editingSpecies ? 'Edit Species' : 'Add New Species'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Basic Info */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Basic Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Common Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={commonName}
                  onChange={(e) => setCommonName(e.target.value)}
                  placeholder="e.g. Neon Tetra"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Scientific Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={scientificName}
                  onChange={(e) => setScientificName(e.target.value)}
                  placeholder="e.g. Paracheirodon innesi"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Type *</label>
                <select
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={type}
                  onChange={(e) => setType(e.target.value as any)}
                >
                  <option value="fish">Fish</option>
                  <option value="plant">Plant</option>
                  <option value="invertebrate">Invertebrate</option>
                  <option value="coral">Coral</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Difficulty *</label>
                <select
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as any)}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
            </div>
          </div>

          {/* Tank Requirements */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Tank Requirements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Min Tank Size (Liters)</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={minTankSize}
                  onChange={(e) => setMinTankSize(e.target.value)}
                  placeholder="e.g. 60"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Min Group Size</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={minGroupSize}
                  onChange={(e) => setMinGroupSize(e.target.value)}
                  placeholder="e.g. 6"
                />
              </div>
            </div>
          </div>

          {/* Water Parameters */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Water Parameters</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="col-span-3 md:col-span-1">
                <label className="block text-sm font-semibold text-slate-700 mb-1">pH Range</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    step="0.1"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={phMin}
                    onChange={(e) => setPhMin(e.target.value)}
                    placeholder="Min (e.g. 6.0)"
                  />
                  <input
                    type="number"
                    step="0.1"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={phMax}
                    onChange={(e) => setPhMax(e.target.value)}
                    placeholder="Max (e.g. 7.5)"
                  />
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <label className="block text-sm font-semibold text-slate-700 mb-1">Temperature (°C)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    step="0.1"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={tempMin}
                    onChange={(e) => setTempMin(e.target.value)}
                    placeholder="Min (e.g. 22)"
                  />
                  <input
                    type="number"
                    step="0.1"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={tempMax}
                    onChange={(e) => setTempMax(e.target.value)}
                    placeholder="Max (e.g. 26)"
                  />
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <label className="block text-sm font-semibold text-slate-700 mb-1">Hardness (dGH)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    step="0.1"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={ghMin}
                    onChange={(e) => setGhMin(e.target.value)}
                    placeholder="Min (e.g. 5)"
                  />
                  <input
                    type="number"
                    step="0.1"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={ghMax}
                    onChange={(e) => setGhMax(e.target.value)}
                    placeholder="Max (e.g. 15)"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Content</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Description</label>
                <textarea
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-24 resize-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief overview of the species..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Care Guide</label>
                <textarea
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-32 resize-none"
                  value={careGuide}
                  onChange={(e) => setCareGuide(e.target.value)}
                  placeholder="Detailed care instructions..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Diet</label>
                <textarea
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-24 resize-none"
                  value={diet}
                  onChange={(e) => setDiet(e.target.value)}
                  placeholder="Feeding requirements and recommendations..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Behavior Tags</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={behaviorTags}
                  onChange={(e) => setBehaviorTags(e.target.value)}
                  placeholder="e.g. peaceful, schooling, bottom-dweller (comma-separated)"
                />
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Image</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Image URL</label>
                <input
                  type="url"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Image Credit</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={imageCredit}
                  onChange={(e) => setImageCredit(e.target.value)}
                  placeholder="Photo by John Doe (Unsplash)"
                />
              </div>
              {imageUrl && (
                <div className="mt-2">
                  <img src={imageUrl} alt="Preview" className="w-full max-h-48 object-cover rounded-lg border border-slate-200" />
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  {editingSpecies ? 'Update Species' : 'Create Species'}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
