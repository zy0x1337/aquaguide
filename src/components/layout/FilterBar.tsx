import clsx from 'clsx';

export type FilterType = 'all' | 'beginner' | 'nano' | 'community';

interface Props {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const FilterBar = ({ activeFilter, onFilterChange }: Props) => {
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
