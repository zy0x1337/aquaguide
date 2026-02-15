interface CheckboxGroupProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export const CheckboxGroup = ({ options, selected, onChange }: CheckboxGroupProps) => {
  const toggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter(o => o !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="space-y-2">
      {options.map(option => (
        <label key={option} className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => toggle(option)}
            className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500 focus:ring-2 cursor-pointer"
          />
          <span className="text-sm text-slate-700 group-hover:text-slate-900 capitalize select-none">
            {option.replace(/_/g, ' ')}
          </span>
        </label>
      ))}
    </div>
  );
};
