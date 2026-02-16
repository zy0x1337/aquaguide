/**
 * Watch script that automatically syncs new data from JSON files to Supabase
 * Run with: npm run sync-data
 */

import { createClient } from '@supabase/supabase-js';
import { allSpecies } from '../src/data/species/index';
import { allPlants } from '../src/data/plants/index';
import fs from 'fs';
import path from 'path';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://plyiyuctfphxtvzyqttz.supabase.co';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseWl5dWN0ZnBoeHR2enlxdHR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3NjYyNzIsImV4cCI6MjA1MjM0MjI3Mn0.Rr9N7vCePiFQmCGFiN79VFLsvdPz2__o_dxwIyY0RZw';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const SPECIES_DIR = path.join(process.cwd(), 'src/data/species');
const PLANTS_DIR = path.join(process.cwd(), 'src/data/plants');

function formatImageCredit(imageCredit: any): string | null {
  if (!imageCredit) return null;
  if (typeof imageCredit === 'string') return imageCredit;
  
  // Convert object to string
  if (imageCredit.photographer) {
    const parts = [`Photo by ${imageCredit.photographer}`];
    if (imageCredit.license) parts.push(`(${imageCredit.license})`);
    return parts.join(' ');
  }
  
  return null;
}

function convertToDBFormat(item: any, type: 'fish' | 'invertebrate' | 'plant') {
  const behaviorTags: string[] = [];
  
  if (type === 'plant') {
    if (item.specs?.placement) {
      if (Array.isArray(item.specs.placement)) {
        behaviorTags.push(...item.specs.placement);
      } else {
        behaviorTags.push(item.specs.placement);
      }
    }
    if (item.specs?.growthRate) behaviorTags.push(`growth-${item.specs.growthRate}`);
    if (item.specs?.light) behaviorTags.push(`light-${item.specs.light}`);
  } else {
    if (item.behavior?.temperament) behaviorTags.push(item.behavior.temperament);
    if (item.behavior?.schooling) behaviorTags.push('schooling');
    if (item.behavior?.swimming) behaviorTags.push(item.behavior.swimming);
    if (item.tags) behaviorTags.push(...item.tags);
  }

  return {
    slug: item.slug,
    common_name: item.commonName || item.taxonomy?.commonName,
    scientific_name: item.scientificName || item.taxonomy?.scientificName,
    type,
    difficulty: item.difficulty?.toLowerCase() || 'beginner',
    min_tank_size_liters: item.minTankSize || 0,
    min_group_size: item.minGroupSize || 1,
    ph_range: item.environment?.ph || item.parameters?.ph ? 
      { 
        min: item.environment?.ph?.min || item.parameters?.ph?.min, 
        max: item.environment?.ph?.max || item.parameters?.ph?.max 
      } : null,
    temp_range_c: item.environment?.tempC || item.parameters?.tempC ? 
      { 
        min: item.environment?.tempC?.min || item.parameters?.tempC?.min, 
        max: item.environment?.tempC?.max || item.parameters?.tempC?.max 
      } : null,
    hardness_range_dgh: item.environment?.hardnessDGH ? 
      { min: item.environment.hardnessDGH.min, max: item.environment.hardnessDGH.max } : null,
    description: item.description || '',
    care_guide: item.care?.description || item.careLevel?.description || item.planting?.notes || '',
    diet: type === 'plant' ? '' : (item.diet?.primary?.join(', ') || item.feeding?.diet || ''),
    behavior_tags: behaviorTags.filter(Boolean),
    image_url: item.imageUrl || null,
    image_credit: formatImageCredit(item.imageCredit),
  };
}

async function syncData() {
  console.log('🔄 Syncing data from JSON to Supabase...');

  // Get existing slugs from DB
  const { data: existingData } = await supabase
    .from('species')
    .select('slug');

  const existingSlugs = new Set(existingData?.map(d => d.slug) || []);

  // Check species
  const speciesData = allSpecies.map(s => {
    let type: 'fish' | 'invertebrate' = 'fish';
    if (s.category === 'Invertebrate' || s.tags?.includes('invertebrate')) {
      type = 'invertebrate';
    }
    return convertToDBFormat(s, type);
  });

  // Check plants
  const plantsData = allPlants.map(p => convertToDBFormat(p, 'plant'));

  // Find new entries
  const allData = [...speciesData, ...plantsData];
  const newEntries = allData.filter(d => !existingSlugs.has(d.slug));

  if (newEntries.length === 0) {
    console.log('✅ No new entries to sync. Database is up to date.');
    return;
  }

  console.log(`📥 Found ${newEntries.length} new entries to sync`);

  // Insert new entries
  const { error } = await supabase
    .from('species')
    .insert(newEntries);

  if (error) {
    console.error('❌ Error syncing data:', error);
    return;
  }

  console.log(`✅ Successfully synced ${newEntries.length} new entries!`);
  newEntries.forEach(e => console.log(`  - ${e.common_name} (${e.type})`));
}

// Watch mode
if (process.argv.includes('--watch')) {
  console.log('👀 Watching for file changes...');
  
  let timeoutId: NodeJS.Timeout;
  
  const debounceSync = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(syncData, 1000);
  };

  fs.watch(SPECIES_DIR, { recursive: true }, debounceSync);
  fs.watch(PLANTS_DIR, { recursive: true }, debounceSync);

  syncData(); // Initial sync
} else {
  syncData();
}
