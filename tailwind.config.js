/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // 🐠 AQUARIUM PALETTE - Using CSS Variables for theme support
        coral: {
          50: 'rgb(var(--color-coral-50) / <alpha-value>)',
          100: 'rgb(var(--color-coral-100) / <alpha-value>)',
          200: 'rgb(var(--color-coral-200) / <alpha-value>)',
          300: 'rgb(var(--color-coral-300) / <alpha-value>)',
          400: 'rgb(var(--color-coral-400) / <alpha-value>)',
          500: 'rgb(var(--color-coral-500) / <alpha-value>)',
          600: 'rgb(var(--color-coral-600) / <alpha-value>)',
          700: 'rgb(var(--color-coral-700) / <alpha-value>)',
          800: 'rgb(var(--color-coral-800) / <alpha-value>)',
          900: 'rgb(var(--color-coral-900) / <alpha-value>)',
          950: 'rgb(var(--color-coral-950) / <alpha-value>)',
        },
        emerald: {
          50: 'rgb(var(--color-emerald-50) / <alpha-value>)',
          100: 'rgb(var(--color-emerald-100) / <alpha-value>)',
          200: 'rgb(var(--color-emerald-200) / <alpha-value>)',
          300: 'rgb(var(--color-emerald-300) / <alpha-value>)',
          400: 'rgb(var(--color-emerald-400) / <alpha-value>)',
          500: 'rgb(var(--color-emerald-500) / <alpha-value>)',
          600: 'rgb(var(--color-emerald-600) / <alpha-value>)',
          700: 'rgb(var(--color-emerald-700) / <alpha-value>)',
          800: 'rgb(var(--color-emerald-800) / <alpha-value>)',
          900: 'rgb(var(--color-emerald-900) / <alpha-value>)',
          950: 'rgb(var(--color-emerald-950) / <alpha-value>)',
        },
        sapphire: {
          50: 'rgb(var(--color-sapphire-50) / <alpha-value>)',
          100: 'rgb(var(--color-sapphire-100) / <alpha-value>)',
          200: 'rgb(var(--color-sapphire-200) / <alpha-value>)',
          300: 'rgb(var(--color-sapphire-300) / <alpha-value>)',
          400: 'rgb(var(--color-sapphire-400) / <alpha-value>)',
          500: 'rgb(var(--color-sapphire-500) / <alpha-value>)',
          600: 'rgb(var(--color-sapphire-600) / <alpha-value>)',
          700: 'rgb(var(--color-sapphire-700) / <alpha-value>)',
          800: 'rgb(var(--color-sapphire-800) / <alpha-value>)',
          900: 'rgb(var(--color-sapphire-900) / <alpha-value>)',
          950: 'rgb(var(--color-sapphire-950) / <alpha-value>)',
        },
        // Keep original gray for compatibility
        gray: {
          950: '#0A0F14', // Dark mode background
        },
        // 🌊 LEGACY COLORS (kept for backwards compatibility)
        'forest-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#228B22',
          600: '#1e7a1e',
          700: '#176a19',
          800: '#125814',
          900: '#0e4710',
          950: '#092f0a',
        },
        onyx: {
          50: '#f7f7f7',
          100: '#e5e5e5',
          200: '#d1d1d1',
          300: '#b8b8b8',
          400: '#a0a0a0',
          500: '#353839',
          600: '#2f3133',
          700: '#292b2e',
          800: '#232528',
          900: '#1d1f22',
          950: '#121314',
        },
        // Additional ocean colors (static)
        ocean: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        aqua: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        deep: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace'],
      },
      boxShadow: {
        soft: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        glass: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        elevated: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'spin-in-180': 'spinIn180 0.3s ease-out',
        'wave': 'wave 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinIn180: {
          '0%': { transform: 'rotate(-180deg)', opacity: '0' },
          '100%': { transform: 'rotate(0deg)', opacity: '1' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-5px) scale(1.02)' },
        },
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      // Add ocean theme variant
      addVariant('ocean', '[data-theme="ocean"] &');
      // Add theme-aware variants
      addVariant('theme-light', '[data-theme="light"] &');
      addVariant('theme-dark', '[data-theme="dark"] &');
    },
  ],
}
