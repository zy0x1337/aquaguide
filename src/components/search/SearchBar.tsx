import { Search, X } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ value, onChange, placeholder }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`flex-1 relative transition-all ${
      isFocused ? 'ring-2 ring-indigo-500' : ''
    } rounded-lg`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder || 'Search...'}
        className="w-full pl-10 pr-10 py-2.5 bg-slate-100 border-2 border-transparent rounded-lg focus:bg-white focus:outline-none text-slate-900 placeholder-slate-500 transition-all"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
