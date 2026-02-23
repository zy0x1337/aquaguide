import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

/**
 * Simple theme toggle button
 * Switches between light and dark mode with icon animation
 */
export function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className={cn(
        'p-2 rounded-lg',
        'bg-gray-100 dark:bg-gray-800',
        'hover:bg-gray-200 dark:hover:bg-gray-700',
        'text-gray-700 dark:text-gray-300',
        'transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-coral-500 dark:focus:ring-coral-400'
      )}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun size={20} className="animate-in spin-in-180 duration-300" />
      ) : (
        <Moon size={20} className="animate-in spin-in-180 duration-300" />
      )}
    </button>
  );
}
