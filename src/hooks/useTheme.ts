import { useEffect, useState } from 'react';

/**
 * Ultra-simple dark mode hook
 * Manages theme state with localStorage persistence and system preference detection
 */
export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    const stored = localStorage.getItem('aquaguide-theme');
    if (stored) return stored === 'dark';
    
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply or remove dark class
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Persist to localStorage
    localStorage.setItem('aquaguide-theme', isDark ? 'dark' : 'light');
    
    // Update meta theme-color for mobile browsers
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', isDark ? '#0A0F14' : '#FFFFFF');
    }
  }, [isDark]);

  return {
    isDark,
    toggle: () => setIsDark(!isDark),
  };
}
