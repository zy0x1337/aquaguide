/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Brand / Semantic Colors
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb', // Primary Action
          900: '#1e3a8a',
        },
        // Semantic Status
        optimal: {
          DEFAULT: '#10B981', // Success / Good
          bg: '#ECFDF5',      // Light Background
          text: '#047857',    // Dark Text
        },
        warning: {
          DEFAULT: '#F59E0B',
          bg: '#FFFBEB',
          text: '#B45309',
        },
        critical: {
          DEFAULT: '#EF4444',
          bg: '#FEF2F2',
          text: '#B91C1C',
        },
        // UI Surfaces (für später Dark Mode)
        surface: {
          body: '#F8FAFC',    // slate-50
          card: '#FFFFFF',    // white
          raised: '#F1F5F9',  // slate-100
        },
        border: {
          subtle: '#E2E8F0',  // slate-200
          default: '#CBD5E1', // slate-300
        }
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'hover': '0 10px 25px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem', // Unser Standard für Cards
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
