/**
 * One-time script to import all hardcoded species and plants into Supabase
 * Run with: npm run import-data
 * 
 * IMPORTANT: This script requires the SUPABASE_SERVICE_ROLE_KEY to bypass RLS policies.
 * Add it to your .env file (never commit this key to git!):
 * SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
 */

import { createClient } from '@supabase/supabase-js';
import { allSpecies } from '../src/data/species/index';
import { allPlants } from '../src/data/plants/index';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Load .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials!');
  console.error('Make sure these are set in your .env file:');
  console.error('  - VITE_SUPABASE_URL');
  console.error('  - SUPABASE_SERVICE_ROLE_KEY (get from Supabase Dashboard > Settings > API)');
  process.exit(1);
}

// Use service role key to bypass RLS
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

interface SpeciesData {
  slug: string;
  common_name: string;
  scientific_name: string;
  type: 'fish' | 'invertebrate' | 'plant';
  difficulty: string;
  min_tank_size_liters: number;
  min_group_size: number;
  ph_range: { min: number; max: number } | null;
  temp_range_c: { min: number; max: number } | null;
  hardness_range_dgh: { min: number; max: number } | null;
  description: string;
  care_guide: string;
  diet: string;
  behavior_tags: string[];
  image_url: string | null;
  image_credit: string | null;
}

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

function convertSpeciesToDB(species: any): SpeciesData {
  // Determine type
  let type: 'fish' | 'invertebrate' | 'plant' = 'fish';
  if (species.category === 'Invertebrate' || species.tags?.includes('invertebrate')) {
    type = 'invertebrate';
  }

  // Extract behavior tags from various sources
  const behaviorTags: string[] = [];
  if (species.behavior?.temperament) behaviorTags.push(species.behavior.temperament);
  if (species.behavior?.schooling) behaviorTags.push('schooling');
  if (species.behavior?.swimming) behaviorTags.push(species.behavior.swimming);
  if (species.tags) behaviorTags.push(...species.tags);

  return {
    slug: species.slug,
    common_name: species.commonName || species.taxonomy?.commonName,
    scientific_name: species.scientificName || species.taxonomy?.scientificName,
    type,
    difficulty: species.difficulty?.toLowerCase() || 'beginner',
    min_tank_size_liters: species.minTankSize || 0,
    min_group_size: species.minGroupSize || 1,
    ph_range: species.environment?.ph || species.parameters?.ph ? 
      { 
        min: species.environment?.ph?.min || species.parameters?.ph?.min, 
        max: species.environment?.ph?.max || species.parameters?.ph?.max 
      } : null,
    temp_range_c: species.environment?.tempC || species.parameters?.tempC ? 
      { 
        min: species.environment?.tempC?.min || species.parameters?.tempC?.min, 
        max: species.environment?.tempC?.max || species.parameters?.tempC?.max 
      } : null,
    hardness_range_dgh: species.environment?.hardnessDGH ? 
      { min: species.environment.hardnessDGH.min, max: species.environment.hardnessDGH.max } : null,
    description: species.description || '',
    care_guide: species.care?.description || species.careLevel?.description || '',
    diet: species.diet?.primary?.join(', ') || species.feeding?.diet || '',
    behavior_tags: behaviorTags.filter(Boolean),
    image_url: species.imageUrl || null,
    image_credit: formatImageCredit(species.imageCredit),
  };
}

function convertPlantToDB(plant: any): SpeciesData {
  const behaviorTags: string[] = [];
  if (plant.specs?.placement) {
    if (Array.isArray(plant.specs.placement)) {
      behaviorTags.push(...plant.specs.placement);
    } else {
      behaviorTags.push(plant.specs.placement);
    }
  }
  if (plant.specs?.growthRate) behaviorTags.push(`growth-${plant.specs.growthRate}`);
  if (plant.specs?.light) behaviorTags.push(`light-${plant.specs.light}`);

  return {
    slug: plant.slug,
    common_name: plant.taxonomy?.commonName || plant.commonName,
    scientific_name: plant.taxonomy?.scientificName || plant.scientificName,
    type: 'plant',
    difficulty: plant.difficulty?.toLowerCase() || 'beginner',
    min_tank_size_liters: 0,
    min_group_size: 1,
    ph_range: plant.parameters?.ph ? { min: plant.parameters.ph.min, max: plant.parameters.ph.max } : null,
    temp_range_c: plant.parameters?.tempC ? { min: plant.parameters.tempC.min, max: plant.parameters.tempC.max } : null,
    hardness_range_dgh: null,
    description: plant.description || '',
    care_guide: plant.planting?.notes || plant.care?.description || '',
    diet: '',
    behavior_tags: behaviorTags.filter(Boolean),
    image_url: plant.imageUrl || null,
    image_credit: formatImageCredit(plant.imageCredit),
  };
}

async function importData() {
  console.log('🚀 Starting data import...');
  console.log(`📡 Connecting to: ${supabaseUrl}`);
  console.log('🔐 Using service role key (admin access)');

  // Convert species
  const speciesData = allSpecies.map(convertSpeciesToDB);
  console.log(`📦 Prepared ${speciesData.length} species`);

  // Convert plants
  const plantsData = allPlants.map(convertPlantToDB);
  console.log(`🌿 Prepared ${plantsData.length} plants`);

  // Combine all
  const allData = [...speciesData, ...plantsData];
  console.log(`✨ Total entries to import: ${allData.length}`);

  // Import to Supabase (upsert to avoid duplicates)
  const { data, error } = await supabase
    .from('species')
    .upsert(allData, { onConflict: 'slug' });

  if (error) {
    console.error('❌ Error importing data:', error);
    process.exit(1);
  }

  console.log('✅ Data import complete!');
  console.log(`🎉 Successfully imported ${allData.length} entries`);
}

importData();
