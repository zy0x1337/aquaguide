import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 hover:bg-slate-100 dark:hover:bg-stone-800 text-slate-500 dark:text-stone-400 hover:text-indigo-600 dark:hover:text-amber-300 active:scale-95"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5 fill-amber-300 text-amber-300" />
      )}
    </button>
  );
};
