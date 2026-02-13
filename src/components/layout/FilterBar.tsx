import clsx from 'clsx';

// Species Filter (alt - unverändert)
export type FilterType = 'all' | 'beginner' | 'nano' | 'community';

interface SpeciesFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const FilterBar = ({ activeFilter, onFilterChange }: SpeciesFilterProps) => {
  const filters: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'All Species' },
    { id: 'beginner', label: 'Beginner Friendly' },
    { id: 'nano', label: 'Nano Tank (<40L)' },
    { id: 'community', label: 'Community Safe' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => onFilterChange(f.id)}
          className={clsx(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
            activeFilter === f.id
              ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-105"
              : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

// layout/FilterBar.tsx - PlantFilterBar (angepasst)
export type PlantFilterType = 'all' | 'easy' | 'low-tech' | 'nano' | 'stem' | 'rhizome';

interface PlantFilterProps {
  activeFilter: PlantFilterType;
  onFilterChange: (filter: PlantFilterType) => void;
}

export const PlantFilterBar = ({ activeFilter, onFilterChange }: PlantFilterProps) => {
  const filters: { id: PlantFilterType; label: string }[] = [
    { id: 'all', label: 'All Plants' },
    { id: 'easy', label: 'Beginner Friendly' },
    { id: 'low-tech', label: 'Low Tech' },
    { id: 'nano', label: 'Nano Plants (<10cm)' },
    { id: 'stem', label: 'Stem Plants' },
    { id: 'rhizome', label: 'Rhizome Plants' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => onFilterChange(f.id)}
          className={clsx(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
            activeFilter === f.id
              ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-105"
              : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};
