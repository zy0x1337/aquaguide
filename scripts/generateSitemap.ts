/**
 * Sitemap Generator
 * Runs as prebuild step: `tsx scripts/generateSitemap.ts`
 * Writes to public/sitemap.xml so Vite copies it into dist/ automatically.
 */
import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://aquaguide.app';
const SUPABASE_URL =
  process.env.VITE_SUPABASE_URL ||
  'https://plyiyuctfphxtvzyqttz.supabase.co';
const SUPABASE_ANON_KEY =
  process.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_TBiJDamJ_bJY8Y-KzX4gGg_UFxqMCFv';

async function generate() {
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const today = new Date().toISOString().split('T')[0];

  console.log('\n\u{1F5FA}\uFE0F  Generating sitemap.xml...');

  // ── Static routes ──────────────────────────────────────────────────────────
  const staticRoutes = [
    { url: '/',                 priority: '1.0', changefreq: 'weekly'  },
    { url: '/species',          priority: '0.9', changefreq: 'weekly'  },
    { url: '/plants',           priority: '0.9', changefreq: 'weekly'  },
    { url: '/habitats',         priority: '0.8', changefreq: 'monthly' },
    { url: '/knowledge',        priority: '0.8', changefreq: 'weekly'  },
    { url: '/diseases',         priority: '0.7', changefreq: 'monthly' },
    { url: '/about',            priority: '0.5', changefreq: 'monthly' },
    { url: '/privacy-policy',   priority: '0.3', changefreq: 'yearly'  },
    { url: '/terms-of-service', priority: '0.3', changefreq: 'yearly'  },
  ];

  // ── Dynamic routes from Supabase ───────────────────────────────────────────
  const [speciesRes, plantsRes, habitatsRes, knowledgeRes, diseasesRes] =
    await Promise.all([
      supabase.from('species').select('slug, updated_at').order('slug'),
      supabase.from('plants').select('slug, updated_at').order('slug'),
      supabase.from('habitats').select('slug, updated_at').order('slug'),
      supabase.from('knowledge').select('slug, updated_at').order('slug'),
      supabase.from('diseases').select('slug, updated_at').order('slug'),
    ]);

  type DynRoute = { url: string; lastmod: string; priority: string; changefreq: string };
  const dynamicRoutes: DynRoute[] = [];

  const push = (rows: any[], prefix: string, priority: string) =>
    (rows || []).forEach((row) =>
      dynamicRoutes.push({
        url: `${prefix}/${row.slug}`,
        lastmod: row.updated_at?.split('T')[0] ?? today,
        priority,
        changefreq: 'monthly',
      })
    );

  push(speciesRes.data  ?? [], '/species',   '0.8');
  push(plantsRes.data   ?? [], '/plants',    '0.8');
  push(habitatsRes.data ?? [], '/habitats',  '0.7');
  push(knowledgeRes.data?? [], '/knowledge', '0.7');
  push(diseasesRes.data ?? [], '/diseases',  '0.6');

  // ── Build XML ──────────────────────────────────────────────────────────────
  const toXml = (loc: string, lastmod: string, changefreq: string, priority: string) =>
    `\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

  const urlEntries = [
    ...staticRoutes.map((r) =>
      toXml(`${SITE_URL}${r.url}`, today, r.changefreq, r.priority)
    ),
    ...dynamicRoutes.map((r) =>
      toXml(`${SITE_URL}${r.url}`, r.lastmod, r.changefreq, r.priority)
    ),
  ].join('');

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset\n` +
    `  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n` +
    `  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n` +
    `    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">` +
    urlEntries +
    `\n</urlset>\n`;

  // ── Write to public/ (Vite copies this to dist/ automatically) ─────────────
  const outPath = resolve(__dirname, '../public/sitemap.xml');
  writeFileSync(outPath, xml, 'utf-8');

  const total = staticRoutes.length + dynamicRoutes.length;
  console.log(`\u2705  sitemap.xml written \u2014 ${total} URLs`);
  console.log(`   \u251C\u2500 ${staticRoutes.length} static routes`);
  console.log(`   \u251C\u2500 ${(speciesRes.data ?? []).length} species`);
  console.log(`   \u251C\u2500 ${(plantsRes.data ?? []).length} plants`);
  console.log(`   \u251C\u2500 ${(habitatsRes.data ?? []).length} habitats`);
  console.log(`   \u251C\u2500 ${(knowledgeRes.data ?? []).length} knowledge articles`);
  console.log(`   \u2514\u2500 ${(diseasesRes.data ?? []).length} diseases\n`);
}

generate().catch((err) => {
  console.error('\u274C  Sitemap generation failed:', err);
  // Don't block the build – just warn
  process.exit(0);
});
