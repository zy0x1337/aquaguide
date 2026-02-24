import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
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
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
          {
            urlPattern: /^https:\/\/.*\.supabase\.co\/rest\/v1\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'supabase-api-cache',
              networkTimeoutSeconds: 10,
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 5 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
      },
      devOptions: { enabled: true, type: 'module' },
    }),
  ],

  resolve: {
    // Dedupe React to prevent multiple instances
    dedupe: ['react', 'react-dom', 'react-router-dom'],
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // ── Vendor: React core (FIRST - must load before everything) ──
          if (id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/scheduler/')) {
            return 'vendor-react';
          }
          
          // ── React ecosystem (depends on react core) ──
          if (id.includes('node_modules/react-router-dom/') ||
              id.includes('node_modules/react-helmet-async/')) {
            return 'vendor-react-eco';
          }
          
          // ── Vendor: Supabase ──
          if (id.includes('node_modules/@supabase/')) {
            return 'vendor-supabase';
          }
          
          // ── Vendor: Animation / UI ──
          if (id.includes('node_modules/framer-motion/')) {
            return 'vendor-framer';
          }
          
          // ── Vendor: Charts ──
          if (id.includes('node_modules/recharts/') ||
              id.includes('node_modules/d3-') ||
              id.includes('node_modules/victory-')) {
            return 'vendor-charts';
          }
          
          // ── Vendor: Icons ──
          if (id.includes('node_modules/lucide-react/')) {
            return 'vendor-icons';
          }
          
          // ── Vendor: Misc utils ──
          if (id.includes('node_modules/')) {
            return 'vendor-misc';
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
