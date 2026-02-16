import React, { useState, useEffect } from 'react';
import { X, Save, Loader2, Plus, Trash2 } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState('basic');

  // Basic Info
  const [commonName, setCommonName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [type, setType] = useState<'fish' | 'plant' | 'invertebrate'>('fish');
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced' | 'expert'>('beginner');
  
  // Taxonomy
  const [family, setFamily] = useState('');
  const [origin, setOrigin] = useState('');
  const [category, setCategory] = useState('');
  
  // Tank Requirements
  const [minTankSize, setMinTankSize] = useState('');
  const [minGroupSize, setMinGroupSize] = useState('1');
  
  // Size & Lifespan
  const [sizeMin, setSizeMin] = useState('');
  const [sizeMax, setSizeMax] = useState('');
  const [lifespanMin, setLifespanMin] = useState('');
  const [lifespanMax, setLifespanMax] = useState('');
  
  // Water Parameters
  const [phMin, setPhMin] = useState('');
  const [phMax, setPhMax] = useState('');
  const [tempMin, setTempMin] = useState('');
  const [tempMax, setTempMax] = useState('');
  const [ghMin, setGhMin] = useState('');
  const [ghMax, setGhMax] = useState('');
  
  // Behavior (Fish)
  const [temperament, setTemperament] = useState('');
  const [swimmingLevel, setSwimmingLevel] = useState('');
  const [isSchooling, setIsSchooling] = useState(false);
  
  // Plant-specific
  const [lightRequirement, setLightRequirement] = useState('');
  const [co2Requirement, setCo2Requirement] = useState('');
  const [growthRate, setGrowthRate] = useState('');
  const [placement, setPlacement] = useState<string[]>([]);
  const [substrateRequired, setSubstrateRequired] = useState(false);
  const [rootTabsRequired, setRootTabsRequired] = useState(false);
  const [propagation, setPropagation] = useState('');
  
  // Content
  const [description, setDescription] = useState('');
  const [careGuide, setCareGuide] = useState('');
  const [diet, setDiet] = useState('');
  const [behaviorTags, setBehaviorTags] = useState('');
  
  // Breeding
  const [breedingDifficulty, setBreedingDifficulty] = useState('');
  const [breedingNotes, setBreedingNotes] = useState('');
  
  // Compatibility
  const [compatibleWith, setCompatibleWith] = useState('');
  const [incompatibleWith, setIncompatibleWith] = useState('');
  
  // Problems
  const [commonProblems, setCommonProblems] = useState<Array<{title: string; description: string; solution: string}>>([]);
  
  // Related Species
  const [relatedSpecies, setRelatedSpecies] = useState('');
  
  // Image
  const [imageUrl, setImageUrl] = useState('');
  const [imageCredit, setImageCredit] = useState('');

  useEffect(() => {
    if (editingSpecies) {
      // Basic
      setCommonName(editingSpecies.common_name || '');
      setScientificName(editingSpecies.scientific_name || '');
      setType(editingSpecies.type || 'fish');
      setDifficulty(editingSpecies.difficulty || 'beginner');
      
      // Taxonomy
      setFamily(editingSpecies.family || '');
      setOrigin(editingSpecies.origin || '');
      setCategory(editingSpecies.category || '');
      
      // Tank
      setMinTankSize(editingSpecies.min_tank_size_liters?.toString() || '');
      setMinGroupSize(editingSpecies.min_group_size?.toString() || '1');
      
      // Size & Lifespan
      setSizeMin(editingSpecies.adult_size_cm?.min?.toString() || '');
      setSizeMax(editingSpecies.adult_size_cm?.max?.toString() || '');
      setLifespanMin(editingSpecies.lifespan_years?.min?.toString() || '');
      setLifespanMax(editingSpecies.lifespan_years?.max?.toString() || '');
      
      // Water
      setPhMin(editingSpecies.ph_range?.min?.toString() || '');
      setPhMax(editingSpecies.ph_range?.max?.toString() || '');
      setTempMin(editingSpecies.temp_range_c?.min?.toString() || '');
      setTempMax(editingSpecies.temp_range_c?.max?.toString() || '');
      setGhMin(editingSpecies.hardness_range_dgh?.min?.toString() || '');
      setGhMax(editingSpecies.hardness_range_dgh?.max?.toString() || '');
      
      // Behavior
      setTemperament(editingSpecies.temperament || '');
      setSwimmingLevel(editingSpecies.swimming_level || '');
      setIsSchooling(editingSpecies.is_schooling || false);
      
      // Plant-specific
      setLightRequirement(editingSpecies.light_requirement || '');
      setCo2Requirement(editingSpecies.co2_requirement || '');
      setGrowthRate(editingSpecies.growth_rate || '');
      setPlacement(editingSpecies.placement || []);
      setSubstrateRequired(editingSpecies.substrate_required || false);
      setRootTabsRequired(editingSpecies.root_tabs_required || false);
      setPropagation(editingSpecies.propagation || '');
      
      // Content
      setDescription(editingSpecies.description || '');
      setCareGuide(editingSpecies.care_guide || '');
      setDiet(editingSpecies.diet || '');
      setBehaviorTags(editingSpecies.behavior_tags?.join(', ') || '');
      
      // Breeding
      setBreedingDifficulty(editingSpecies.breeding_info?.difficulty || '');
      setBreedingNotes(editingSpecies.breeding_info?.notes || '');
      
      // Compatibility
      setCompatibleWith(editingSpecies.compatible_with?.join(', ') || '');
      setIncompatibleWith(editingSpecies.incompatible_with?.join(', ') || '');
      
      // Problems
      setCommonProblems(editingSpecies.common_problems || []);
      
      // Related
      setRelatedSpecies(editingSpecies.related_species?.join(', ') || '');
      
      // Image
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
    setFamily('');
    setOrigin('');
    setCategory('');
    setMinTankSize('');
    setMinGroupSize('1');
    setSizeMin('');
    setSizeMax('');
    setLifespanMin('');
    setLifespanMax('');
    setPhMin('');
    setPhMax('');
    setTempMin('');
    setTempMax('');
    setGhMin('');
    setGhMax('');
    setTemperament('');
    setSwimmingLevel('');
    setIsSchooling(false);
    setLightRequirement('');
    setCo2Requirement('');
    setGrowthRate('');
    setPlacement([]);
    setSubstrateRequired(false);
    setRootTabsRequired(false);
    setPropagation('');
    setDescription('');
    setCareGuide('');
    setDiet('');
    setBehaviorTags('');
    setBreedingDifficulty('');
    setBreedingNotes('');
    setCompatibleWith('');
    setIncompatibleWith('');
    setCommonProblems([]);
    setRelatedSpecies('');
    setImageUrl('');
    setImageCredit('');
    setError(null);
    setActiveTab('basic');
  };

  const addProblem = () => {
    setCommonProblems([...commonProblems, { title: '', description: '', solution: '' }]);
  };

  const removeProblem = (index: number) => {
    setCommonProblems(commonProblems.filter((_, i) => i !== index));
  };

  const updateProblem = (index: number, field: string, value: string) => {
    const updated = [...commonProblems];
    updated[index] = { ...updated[index], [field]: value };
    setCommonProblems(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const slug = editingSpecies?.slug || commonName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

      const speciesData: any = {
        slug,
        common_name: commonName,
        scientific_name: scientificName,
        type,
        difficulty,
        family: family || null,
        origin: origin || null,
        category: category || null,
        min_tank_size_liters: minTankSize ? parseInt(minTankSize) : null,
        min_group_size: parseInt(minGroupSize),
        adult_size_cm: sizeMin && sizeMax ? { min: parseFloat(sizeMin), max: parseFloat(sizeMax) } : null,
        lifespan_years: lifespanMin && lifespanMax ? { min: parseFloat(lifespanMin), max: parseFloat(lifespanMax) } : null,
        ph_range: phMin && phMax ? { min: parseFloat(phMin), max: parseFloat(phMax) } : null,
        temp_range_c: tempMin && tempMax ? { min: parseFloat(tempMin), max: parseFloat(tempMax) } : null,
        hardness_range_dgh: ghMin && ghMax ? { min: parseFloat(ghMin), max: parseFloat(ghMax) } : null,
        temperament: temperament || null,
        swimming_level: swimmingLevel || null,
        is_schooling: isSchooling,
        light_requirement: lightRequirement || null,
        co2_requirement: co2Requirement || null,
        growth_rate: growthRate || null,
        placement: placement.length > 0 ? placement : null,
        substrate_required: substrateRequired,
        root_tabs_required: rootTabsRequired,
        propagation: propagation || null,
        description,
        care_guide: careGuide,
        diet,
        behavior_tags: behaviorTags ? behaviorTags.split(',').map(t => t.trim()).filter(Boolean) : [],
        breeding_info: breedingDifficulty || breedingNotes ? {
          difficulty: breedingDifficulty,
          notes: breedingNotes
        } : null,
        compatible_with: compatibleWith ? compatibleWith.split(',').map(s => s.trim()).filter(Boolean) : [],
        incompatible_with: incompatibleWith ? incompatibleWith.split(',').map(s => s.trim()).filter(Boolean) : [],
        common_problems: commonProblems.filter(p => p.title).length > 0 ? commonProblems.filter(p => p.title) : null,
        related_species: relatedSpecies ? relatedSpecies.split(',').map(s => s.trim()).filter(Boolean) : [],
        image_url: imageUrl || null,
        image_credit: imageCredit || null,
        created_by: user?.id,
      };

      if (editingSpecies) {
        const { error } = await supabase
          .from('species')
          .update(speciesData)
          .eq('id', editingSpecies.id);
        if (error) throw error;
      } else {
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

  const tabs = [
    { id: 'basic', label: 'Basic Info' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'behavior', label: 'Behavior' },
    { id: 'breeding', label: 'Breeding' },
    { id: 'compatibility', label: 'Compatibility' },
    { id: 'problems', label: 'Problems' },
    { id: 'content', label: 'Content' },
    { id: 'media', label: 'Media' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900">
            {editingSpecies ? 'Edit Species' : 'Add New Species'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-slate-200 px-6 overflow-x-auto">
          <div className="flex gap-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-semibold text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm mb-6">
              {error}
            </div>
          )}

          {/* Basic Info Tab */}
          {activeTab === 'basic' && (
            <div className="space-y-6">
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
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Family</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={family}
                    onChange={(e) => setFamily(e.target.value)}
                    placeholder="e.g. Characidae"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Origin</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="e.g. South America"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Category</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g. Tetra, Cichlid"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Adult Size (cm)</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={sizeMin}
                      onChange={(e) => setSizeMin(e.target.value)}
                      placeholder="Min"
                    />
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={sizeMax}
                      onChange={(e) => setSizeMax(e.target.value)}
                      placeholder="Max"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Lifespan (years)</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={lifespanMin}
                      onChange={(e) => setLifespanMin(e.target.value)}
                      placeholder="Min"
                    />
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={lifespanMax}
                      onChange={(e) => setLifespanMax(e.target.value)}
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Requirements Tab */}
          {activeTab === 'requirements' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Tank Requirements</h3>
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

              <h3 className="text-lg font-bold text-slate-900 mt-6">Water Parameters</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">pH Range</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={phMin}
                      onChange={(e) => setPhMin(e.target.value)}
                      placeholder="Min"
                    />
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={phMax}
                      onChange={(e) => setPhMax(e.target.value)}
                      placeholder="Max"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Temperature (°C)</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={tempMin}
                      onChange={(e) => setTempMin(e.target.value)}
                      placeholder="Min"
                    />
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={tempMax}
                      onChange={(e) => setTempMax(e.target.value)}
                      placeholder="Max"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Hardness (dGH)</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={ghMin}
                      onChange={(e) => setGhMin(e.target.value)}
                      placeholder="Min"
                    />
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={ghMax}
                      onChange={(e) => setGhMax(e.target.value)}
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>

              {type === 'plant' && (
                <>
                  <h3 className="text-lg font-bold text-slate-900 mt-6">Plant Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Light Requirement</label>
                      <select
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        value={lightRequirement}
                        onChange={(e) => setLightRequirement(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">CO2 Requirement</label>
                      <select
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        value={co2Requirement}
                        onChange={(e) => setCo2Requirement(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="none">None</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Growth Rate</label>
                      <select
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        value={growthRate}
                        onChange={(e) => setGrowthRate(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="slow">Slow</option>
                        <option value="medium">Medium</option>
                        <option value="fast">Fast</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Placement (multi-select)</label>
                      <select
                        multiple
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        value={placement}
                        onChange={(e) => setPlacement(Array.from(e.target.selectedOptions, option => option.value))}
                      >
                        <option value="foreground">Foreground</option>
                        <option value="midground">Midground</option>
                        <option value="background">Background</option>
                        <option value="epiphyte">Epiphyte</option>
                        <option value="floating">Floating</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={substrateRequired}
                          onChange={(e) => setSubstrateRequired(e.target.checked)}
                          className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
                        />
                        <span className="text-sm font-semibold text-slate-700">Substrate Required</span>
                      </label>
                    </div>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={rootTabsRequired}
                          onChange={(e) => setRootTabsRequired(e.target.checked)}
                          className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
                        />
                        <span className="text-sm font-semibold text-slate-700">Root Tabs Required</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Propagation</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={propagation}
                      onChange={(e) => setPropagation(e.target.value)}
                      placeholder="e.g. Rhizome division"
                    />
                  </div>
                </>
              )}
            </div>
          )}

          {/* Behavior Tab */}
          {activeTab === 'behavior' && type === 'fish' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Temperament</label>
                  <select
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={temperament}
                    onChange={(e) => setTemperament(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="peaceful">Peaceful</option>
                    <option value="semi-aggressive">Semi-Aggressive</option>
                    <option value="aggressive">Aggressive</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Swimming Level</label>
                  <select
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={swimmingLevel}
                    onChange={(e) => setSwimmingLevel(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="top">Top</option>
                    <option value="middle">Middle</option>
                    <option value="bottom">Bottom</option>
                    <option value="all">All Levels</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isSchooling}
                      onChange={(e) => setIsSchooling(e.target.checked)}
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
                    />
                    <span className="text-sm font-semibold text-slate-700">Schooling Fish</span>
                  </label>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Behavior Tags</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={behaviorTags}
                    onChange={(e) => setBehaviorTags(e.target.value)}
                    placeholder="e.g. peaceful, nocturnal (comma-separated)"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Breeding Tab */}
          {activeTab === 'breeding' && type === 'fish' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Breeding Difficulty</label>
                <select
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={breedingDifficulty}
                  onChange={(e) => setBreedingDifficulty(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="easy">Easy</option>
                  <option value="moderate">Moderate</option>
                  <option value="difficult">Difficult</option>
                  <option value="very difficult">Very Difficult</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Breeding Notes</label>
                <textarea
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-32 resize-none"
                  value={breedingNotes}
                  onChange={(e) => setBreedingNotes(e.target.value)}
                  placeholder="Detailed breeding information..."
                />
              </div>
            </div>
          )}

          {/* Compatibility Tab */}
          {activeTab === 'compatibility' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Compatible With</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={compatibleWith}
                  onChange={(e) => setCompatibleWith(e.target.value)}
                  placeholder="Comma-separated species slugs: neon-tetra, guppy"
                />
                <p className="text-xs text-slate-500 mt-1">Enter species slugs that are compatible</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Incompatible With</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={incompatibleWith}
                  onChange={(e) => setIncompatibleWith(e.target.value)}
                  placeholder="Comma-separated species slugs: betta, oscar"
                />
                <p className="text-xs text-slate-500 mt-1">Enter species slugs that are incompatible</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Related Species</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={relatedSpecies}
                  onChange={(e) => setRelatedSpecies(e.target.value)}
                  placeholder="Comma-separated species slugs"
                />
                <p className="text-xs text-slate-500 mt-1">Similar or related species</p>
              </div>
            </div>
          )}

          {/* Problems Tab */}
          {activeTab === 'problems' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">Common Problems</h3>
                <button
                  type="button"
                  onClick={addProblem}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Problem
                </button>
              </div>
              {commonProblems.map((problem, index) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700">Problem {index + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeProblem(index)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={problem.title}
                    onChange={(e) => updateProblem(index, 'title', e.target.value)}
                    placeholder="Problem title"
                  />
                  <textarea
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-20 resize-none"
                    value={problem.description}
                    onChange={(e) => updateProblem(index, 'description', e.target.value)}
                    placeholder="Problem description"
                  />
                  <textarea
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-20 resize-none"
                    value={problem.solution}
                    onChange={(e) => updateProblem(index, 'solution', e.target.value)}
                    placeholder="Solution"
                  />
                </div>
              ))}
              {commonProblems.length === 0 && (
                <div className="text-center py-8 text-slate-500">
                  No problems added yet. Click "Add Problem" to start.
                </div>
              )}
            </div>
          )}

          {/* Content Tab */}
          {activeTab === 'content' && (
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
            </div>
          )}

          {/* Media Tab */}
          {activeTab === 'media' && (
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
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Preview</label>
                  <img src={imageUrl} alt="Preview" className="w-full max-h-64 object-cover rounded-lg border border-slate-200" />
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-6 border-t border-slate-200 mt-6">
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
