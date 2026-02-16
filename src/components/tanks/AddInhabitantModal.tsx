import { useState, useMemo } from 'react';
import { X, Search, AlertTriangle, CheckCircle } from 'lucide-react';
import { allSpecies } from '../../data/species';
import { allPlants } from '../../data/plants';
import type { Species } from '../../types/species';
import type { Plant } from '../../types/plant';

interface AddInhabitantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (speciesId: string, quantity: number, type: 'fish' | 'plant') => void;
  type: 'fish' | 'plant';
  tankType: string;
}

const AddInhabitantModal = ({ isOpen, onClose, onSubmit, type, tankType }: AddInhabitantModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Combine species and plants
  const allItems = useMemo(() => {
    if (type === 'plant') {
      return allPlants as (Species | Plant)[];
    }
    return allSpecies as (Species | Plant)[];
  }, [type]);

  // Filter items by search query and tank type
  const filteredItems = useMemo(() => {
    return allItems
      .filter(item => {
        // Plants work in both freshwater and saltwater (most of them)
        // For now, show all plants regardless of tank type
        const matchesTankType = type === 'plant' ? true : ('environment' in item && item.environment.type === tankType);
        
        // Filter by search query
        const matchesSearch = searchQuery === '' ||
          item.taxonomy.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.taxonomy.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
        
        return matchesTankType && matchesSearch;
      })
      .slice(0, 50); // Limit results
  }, [searchQuery, allItems, tankType, type]);

  const selectedItem = selectedSpecies ? allItems.find(s => s.id === selectedSpecies) : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSpecies || quantity <= 0) {
      alert('Please select a species and enter a valid quantity');
      return;
    }
    onSubmit(selectedSpecies, quantity, type);
    // Reset
    setSearchQuery('');
    setSelectedSpecies(null);
    setQuantity(1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Add {type === 'fish' ? 'Fish' : 'Plant'} to Tank
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search */}
        <div className="p-6 border-b border-slate-200">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${type === 'fish' ? 'fish' : 'plants'}...`}
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              autoFocus
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <p>No {type === 'fish' ? 'fish' : 'plants'} found</p>
              <p className="text-sm mt-2">Try adjusting your search</p>
            </div>
          ) : (
            <div className="space-y-2">
              {filteredItems.map((item) => {
                const isFish = 'behavior' in item;
                const imageUrl = 'visuals' in item ? item.visuals.imageUrl : item.imageUrl;
                const sizeCM = 'visuals' in item ? item.visuals.adultSizeCM : `${item.specs.heightCM.min}-${item.specs.heightCM.max}`;
                const difficulty = 'care' in item ? item.care.difficulty : item.difficulty;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedSpecies(item.id)}
                    className={`
                      w-full text-left p-4 rounded-xl border-2 transition-all
                      ${
                        selectedSpecies === item.id
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                      }
                    `}
                  >
                    <div className="flex items-start justify-between gap-4">
                      {/* Image */}
                      {imageUrl && (
                        <img
                          src={imageUrl}
                          alt={item.taxonomy.commonName}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        />
                      )}
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900">{item.taxonomy.commonName}</h3>
                        <p className="text-sm text-slate-500 italic">{item.taxonomy.scientificName}</p>
                        <div className="flex gap-2 mt-2 flex-wrap">
                          <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                            {sizeCM}{typeof sizeCM === 'number' ? 'cm' : ''}
                          </span>
                          <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                            {difficulty}
                          </span>
                          {isFish && 'environment' in item && (
                            <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                              Min {item.environment.minTankSizeLiters}L
                            </span>
                          )}
                        </div>
                      </div>
                      {selectedSpecies === item.id && (
                        <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Selected Item Info & Quantity */}
        {selectedItem && (
          <form onSubmit={handleSubmit} className="border-t border-slate-200 p-6 bg-slate-50">
            <div className="mb-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{selectedItem.taxonomy.commonName}</h4>
                  <p className="text-sm text-slate-600">Selected {type}</p>
                </div>
              </div>

              {/* Warnings for fish only */}
              {'behavior' in selectedItem && 'environment' in selectedItem && (
                <>
                  {selectedItem.environment.minTankSizeLiters > 100 && (
                    <div className="flex gap-2 items-start bg-amber-50 border border-amber-200 rounded-lg p-3 mb-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-800">
                        This species requires at least {selectedItem.environment.minTankSizeLiters}L
                      </p>
                    </div>
                  )}

                  {selectedItem.behavior.minGroupSize > 1 && (
                    <div className="flex gap-2 items-start bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-800">
                        Recommended group size: {selectedItem.behavior.minGroupSize}+
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold text-slate-700 mb-2">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                min="1"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                Add to Tank
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddInhabitantModal;
