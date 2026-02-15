import { useState } from 'react';
import { Trash2, Plus, Minus, AlertTriangle, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TankItem } from '../../types/builder';
import { Species } from '../../types/species';
import { Plant } from '../../types/plant';

interface TankItemCardProps {
  item: TankItem;
  onRemove: (id: string) => void;
  onUpdateCount: (id: string, delta: number) => void;
  onUpdateNotes: (id: string, notes: string) => void;
  warnings?: string[];
  suggestions?: string[];
}

export const TankItemCard = ({ 
  item, 
  onRemove, 
  onUpdateCount,
  onUpdateNotes,
  warnings = [],
  suggestions = []
}: TankItemCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [editingNotes, setEditingNotes] = useState(false);
  
  const isFish = item.type === 'fish';
  const isPlant = item.type === 'plant';
  const data = item.data as Species | Plant;
  
  const getItemDetails = () => {
    if (isFish) {
      const fish = data as Species;
      return {
        name: fish.taxonomy.commonName,
        scientificName: fish.taxonomy.scientificName,
        image: fish.imageUrl,
        params: `${fish.environment.tempC.min}-${fish.environment.tempC.max}°C | pH ${fish.environment.ph.min}-${fish.environment.ph.max}`,
        minTank: fish.environment.minTankSizeLiters,
        tags: fish.behavior.tags || []
      };
    } else if (isPlant) {
      const plant = data as Plant;
      return {
        name: plant.taxonomy.commonName,
        scientificName: plant.taxonomy.scientificName,
        image: plant.imageUrl,
        params: plant.specs?.light ? `Light: ${plant.specs.light}` : 'Low-tech',
        tags: plant.specs?.placement || []
      };
    }
    return null;
  };

  const details = getItemDetails();
  if (!details) return null;

  const hasIssues = warnings.length > 0;
  const hasSuggestions = suggestions.length > 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className={`bg-white dark:bg-stone-900 rounded-xl border-2 transition-all ${
        hasIssues 
          ? 'border-red-300 dark:border-red-800' 
          : 'border-slate-200 dark:border-stone-800 hover:border-indigo-300 dark:hover:border-indigo-700'
      }`}
    >
      {/* Main Content */}
      <div className="p-4 flex items-center gap-4">
        {/* Image */}
        <div className="relative flex-shrink-0">
          <img 
            src={details.image} 
            alt={details.name}
            className="w-16 h-16 rounded-lg object-cover border border-slate-200 dark:border-stone-700"
          />
          {hasIssues && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-3 h-3 text-white" />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-900 dark:text-white truncate">
                {details.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 italic truncate">
                {details.scientificName}
              </p>
            </div>
            
            {/* Count Controls (Fish only) */}
            {isFish && (
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-stone-800 rounded-lg px-2 py-1">
                <button 
                  onClick={() => onUpdateCount(item.id, -1)}
                  className="p-0.5 hover:bg-slate-200 dark:hover:bg-stone-700 rounded transition-colors"
                  disabled={(item.count || 1) <= 1}
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="font-mono font-bold text-sm px-2">{item.count || 1}x</span>
                <button 
                  onClick={() => onUpdateCount(item.id, 1)}
                  className="p-0.5 hover:bg-slate-200 dark:hover:bg-stone-700 rounded transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>

          {/* Parameters */}
          <div className="mt-2 flex items-center flex-wrap gap-2">
            <span className="text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-full font-medium">
              {details.params}
            </span>
            {isFish && details.minTank && (
              <span className="text-xs bg-slate-100 dark:bg-stone-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-full">
                Min. {details.minTank}L
              </span>
            )}
            {Array.isArray(details.tags) && details.tags.slice(0, 2).map((tag, idx) => (
              <span key={idx} className="text-xs bg-slate-100 dark:bg-stone-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-full capitalize">
                {typeof tag === 'string' ? tag.replace('_', ' ') : tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-1">
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 hover:bg-slate-100 dark:hover:bg-stone-800 rounded-lg transition-colors text-slate-600 dark:text-slate-400"
            title={expanded ? 'Collapse' : 'Expand details'}
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          <button
            onClick={() => onRemove(item.id)}
            className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-red-600 dark:text-red-400"
            title="Remove from tank"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2 border-t border-slate-100 dark:border-stone-800 space-y-3">
              
              {/* Warnings */}
              {hasIssues && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <h4 className="text-xs font-bold uppercase text-red-700 dark:text-red-400 mb-2 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" /> Issues
                  </h4>
                  <ul className="space-y-1">
                    {warnings.map((warning, idx) => (
                      <li key={idx} className="text-xs text-red-700 dark:text-red-300 flex items-start gap-2">
                        <span className="mt-0.5">•</span>
                        <span>{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Suggestions */}
              {hasSuggestions && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                  <h4 className="text-xs font-bold uppercase text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-1">
                    <Info className="w-3 h-3" /> Tips
                  </h4>
                  <ul className="space-y-1">
                    {suggestions.map((suggestion, idx) => (
                      <li key={idx} className="text-xs text-blue-700 dark:text-blue-300 flex items-start gap-2">
                        <span className="mt-0.5">•</span>
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Notes */}
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">
                  Personal Notes
                </label>
                {editingNotes ? (
                  <textarea
                    value={item.notes || ''}
                    onChange={(e) => onUpdateNotes(item.id, e.target.value)}
                    onBlur={() => setEditingNotes(false)}
                    placeholder="e.g., 'Buy from local breeder', 'Estimated €15'"
                    className="w-full text-xs border-slate-200 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-950 p-2 resize-none"
                    rows={2}
                    autoFocus
                  />
                ) : (
                  <div 
                    onClick={() => setEditingNotes(true)}
                    className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-stone-800 rounded-lg p-2 cursor-text hover:bg-slate-100 dark:hover:bg-stone-700 transition-colors min-h-[2.5rem]"
                  >
                    {item.notes || 'Click to add notes...'}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
