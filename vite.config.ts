import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

// ---------------------------------------------------------------------------
// Inline Sitemap Plugin
// Runs at the END of `vite build`, fetches all public slugs from Supabase
// and writes dist/sitemap.xml + dist/robots.txt (safety copy).
// ---------------------------------------------------------------------------
function sitemapPlugin() {
  return {
    name: 'vite-plugin-aquaguide-sitemap',
    apply: 'build' as const,
    async closeBundle() {
      const SITE_URL = 'https://vercel.aquaguide.app';
      const SUPABASE_URL =
        process.env.VITE_SUPABASE_URL ||
        'https://plyiyuctfphxtvzyqttz.supabase.co';
      const SUPABASE_ANON_KEY =
        process.env.VITE_SUPABASE_ANON_KEY ||
        'sb_publishable_TBiJDamJ_bJY8Y-KzX4gGg_UFxqMCFv';

      const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      const today = new Date().toISOString().split('T')[0];

      console.log('\n🗺️  Generating sitemap.xml...');

      // Static routes
      const staticRoutes: { url: string; priority: string; changefreq: string }[] = [
        { url: '/',               priority: '1.0', changefreq: 'weekly' },
        { url: '/species',        priority: '0.9', changefreq: 'weekly' },
        { url: '/plants',         priority: '0.9', changefreq: 'weekly' },
        { url: '/habitats',       priority: '0.8', changefreq: 'monthly' },
        { url: '/knowledge',      priority: '0.8', changefreq: 'weekly' },
        { url: '/diseases',       priority: '0.7', changefreq: 'monthly' },
        { url: '/about',          priority: '0.5', changefreq: 'monthly' },
        { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
        { url: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
      ];

      // Dynamic routes from Supabase
      const [speciesRes, plantsRes, habitatsRes, knowledgeRes, diseasesRes] =
        await Promise.all([
          supabase.from('species').select('slug, updated_at').order('slug'),
          supabase.from('plants').select('slug, updated_at').order('slug'),
          supabase.from('habitats').select('slug, updated_at').order('slug'),
          supabase.from('knowledge').select('slug, updated_at').order('slug'),
          supabase.from('diseases').select('slug, updated_at').order('slug'),
        ]);

      const dynamicRoutes: { url: string; lastmod: string; priority: string; changefreq: string }[] = [];

      (speciesRes.data || []).forEach((row: any) =>
        dynamicRoutes.push({
          url: `/species/${row.slug}`,
          lastmod: row.updated_at?.split('T')[0] || today,
          priority: '0.8',
          changefreq: 'monthly',
        })
      );

      (plantsRes.data || []).forEach((row: any) =>
        dynamicRoutes.push({
          url: `/plants/${row.slug}`,
          lastmod: row.updated_at?.split('T')[0] || today,
          priority: '0.8',
          changefreq: 'monthly',
        })
      );

      (habitatsRes.data || []).forEach((row: any) =>
        dynamicRoutes.push({
          url: `/habitats/${row.slug}`,
          lastmod: row.updated_at?.split('T')[0] || today,
          priority: '0.7',
          changefreq: 'monthly',
        })
      );

      (knowledgeRes.data || []).forEach((row: any) =>
        dynamicRoutes.push({
          url: `/knowledge/${row.slug}`,
          lastmod: row.updated_at?.split('T')[0] || today,
          priority: '0.7',
          changefreq: 'monthly',
        })
      );

      (diseasesRes.data || []).forEach((row: any) =>
        dynamicRoutes.push({
          url: `/diseases/${row.slug}`,
          lastmod: row.updated_at?.split('T')[0] || today,
          priority: '0.6',
          changefreq: 'monthly',
        })
      );

      // Build XML
      const urls = [
        ...staticRoutes.map(
          (r) => `
  <url>
    <loc>${SITE_URL}${r.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
        ),
        ...dynamicRoutes.map(
          (r) => `
  <url>
    <loc>${SITE_URL}${r.url}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
        ),
      ].join('');

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>
`;

      const distDir = resolve(__dirname, 'dist');
      writeFileSync(resolve(distDir, 'sitemap.xml'), xml, 'utf-8');

      const totalUrls = staticRoutes.length + dynamicRoutes.length;
      console.log(`✅  sitemap.xml written — ${totalUrls} URLs`);
      console.log(`   ├─ ${staticRoutes.length} static routes`);
      console.log(`   ├─ ${(speciesRes.data || []).length} species`);
      console.log(`   ├─ ${(plantsRes.data || []).length} plants`);
      console.log(`   ├─ ${(habitatsRes.data || []).length} habitats`);
      console.log(`   ├─ ${(knowledgeRes.data || []).length} knowledge articles`);
      console.log(`   └─ ${(diseasesRes.data || []).length} diseases\n`);
    },
  };
}

// ---------------------------------------------------------------------------
// Vite Config
// ---------------------------------------------------------------------------
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'AquaGuide - Aquarium Management',
        short_name: 'AquaGuide',
        description:
          'Complete aquarium management system for tracking fish, plants, water parameters, and maintenance.',
        theme_color: '#4f46e5',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '/',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        shortcuts: [
          {
            name: 'Species Database',
            short_name: 'Species',
            description: 'Browse fish species',
            url: '/species',
            icons: [{ src: '/icon-192.png', sizes: '192x192' }],
          },
          {
            name: 'Plants Database',
            short_name: 'Plants',
            description: 'Browse aquatic plants',
            url: '/plants',
            icons: [{ src: '/icon-192.png', sizes: '192x192' }],
          },
          {
            name: 'Tank Builder',
            short_name: 'Builder',
            description: 'Build your tank',
            url: '/tank-builder',
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
    sitemapPlugin(),
  ],
});
