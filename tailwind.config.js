/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 🐠 AQUARIUM PALETTE
        coral: {
          50: '#fef7f2',
          100: '#fde5d8',
          200: '#fbcebf',
          300: '#f8b8a6',
          400: '#f5a28d',
          500: '#FF7F50',
          600: '#e67245',
          700: '#cc643b',
          800: '#b35631',
          900: '#984827',
          950: '#6d2e1a',
        },
        emerald: {
          50: '#f0fcf4',
          100: '#d1f5d8',
          200: '#b2f0bf',
          300: '#93eba6',
          400: '#75e68d',
          500: '#50C878',
          600: '#46b270',
          700: '#3da968',
          800: '#339160',
          900: '#2a7858',
          950: '#1e5540',
        },
        sapphire: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#0F52BA',
          600: '#0e489f',
          700: '#0d3f85',
          800: '#0b356b',
          900: '#092b57',
          950: '#061a38',
        },
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
        gray: {
          950: '#0A0F14', // Dark mode background
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
      },
    },
  },
  plugins: [],
}
