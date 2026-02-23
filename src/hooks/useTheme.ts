import { useEffect, useState } from 'react';

/**
 * Ultra-simple dark mode hook
 * Manages theme state with localStorage persistence and system preference detection
 */
export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check localStorage first
    const stored = localStorage.getItem('aquaguide-theme');
    if (stored === 'dark' || stored === 'light') return stored;
    
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply or remove dark class
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Persist to localStorage
    localStorage.setItem('aquaguide-theme', theme);
    
    // Update meta theme-color for mobile browsers
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'dark' ? '#0A0F14' : '#FFFFFF');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  };
}
