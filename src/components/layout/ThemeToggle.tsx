import { Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useState, useEffect, useRef } from 'react';
// import { Waves } from 'lucide-react'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const themes = [
    { value: 'light' as const, label: 'Light', icon: Sun, color: 'text-amber-500' },
    { value: 'dark' as const, label: 'Dark', icon: Moon, color: 'text-indigo-400' },
//  { value: 'ocean' as const, label: 'Ocean', icon: Waves, color: 'text-cyan-400' },
  ];

  const currentTheme = themes.find(t => t.value === theme) || themes[0];
  const CurrentIcon = currentTheme.icon;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 active:scale-95"
        aria-label="Change Theme"
        title={`Current: ${currentTheme.label} Theme`}
      >
        <CurrentIcon className={`w-5 h-5 ${currentTheme.color}`} />
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
          dropdownOpen ? 'rotate-180' : ''
        }`} />
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
          {themes.map((t) => {
            const Icon = t.icon;
            const isActive = theme === t.value;
            return (
              <button
                key={t.value}
                onClick={() => {
                  setTheme(t.value);
                  setDropdownOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${t.color}`} />
                <span>{t.label}</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
