import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // injectManifest = vite-plugin-pwa injects the precache manifest into
      // OUR custom sw.js instead of generating a new one. This preserves the
      // push / notificationclick handlers we wrote.
      strategies: 'injectManifest',
      srcDir: 'public',
      filename: 'sw.js',
      registerType: 'autoUpdate',
      includeAssets: ['icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'AquaGuide - Aquarium Management',
        short_name: 'AquaGuide',
        description: 'Complete aquarium management system for tracking fish, plants, water parameters, and maintenance.',
        theme_color: '#4f46e5',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '/',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
        shortcuts: [
          {
            name: 'Species Database', short_name: 'Species',
            description: 'Browse fish species', url: '/species',
            icons: [{ src: '/icon-192.png', sizes: '192x192' }],
          },
          {
            name: 'Plants Database', short_name: 'Plants',
            description: 'Browse aquatic plants', url: '/plants',
            icons: [{ src: '/icon-192.png', sizes: '192x192' }],
          },
          {
            name: 'Tank Builder', short_name: 'Builder',
            description: 'Build your tank', url: '/tank-builder',
            icons: [{ src: '/icon-192.png', sizes: '192x192' }],
          },
        ],
      },
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
      },
      devOptions: { enabled: true, type: 'module' },
    }),
  ],

  resolve: {
    dedupe: ['react', 'react-dom', 'react-router-dom'],
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/scheduler/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/react-router-dom/') ||
              id.includes('node_modules/react-helmet-async/')) {
            return 'vendor-react-eco';
          }
          if (id.includes('node_modules/@supabase/')) {
            return 'vendor-supabase';
          }
          if (id.includes('node_modules/framer-motion/')) {
            return 'vendor-framer';
          }
          if (id.includes('node_modules/recharts/') ||
              id.includes('node_modules/d3-') ||
              id.includes('node_modules/victory-')) {
            return 'vendor-charts';
          }
          if (id.includes('node_modules/lucide-react/')) {
            return 'vendor-icons';
          }
          if (id.includes('node_modules/')) {
            return 'vendor-misc';
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
