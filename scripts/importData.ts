/**
 * One-time script to import all hardcoded species and plants into Supabase
 * Run with: npm run import-data
 */

import { createClient } from '@supabase/supabase-js';
import { allSpecies } from '../src/data/species/index';
import { allPlants } from '../src/data/plants/index';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://plyiyuctfphxtvzyqttz.supabase.co';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_TBiJDamJ_bJY8Y-KzX4gGg_UFxqMCFv';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
    common_name: species.commonName,
    scientific_name: species.scientificName,
    type,
    difficulty: species.difficulty?.toLowerCase() || 'beginner',
    min_tank_size_liters: species.minTankSize || 0,
    min_group_size: species.minGroupSize || 1,
    ph_range: species.environment?.ph ? { min: species.environment.ph.min, max: species.environment.ph.max } : null,
    temp_range_c: species.environment?.tempC ? { min: species.environment.tempC.min, max: species.environment.tempC.max } : null,
    hardness_range_dgh: species.environment?.hardnessDGH ? { min: species.environment.hardnessDGH.min, max: species.environment.hardnessDGH.max } : null,
    description: species.description || '',
    care_guide: species.care?.description || species.careLevel?.description || '',
    diet: species.diet?.primary?.join(', ') || species.feeding?.diet || '',
    behavior_tags: behaviorTags.filter(Boolean),
    image_url: species.imageUrl || null,
    image_credit: species.imageCredit || null,
  };
}

function convertPlantToDB(plant: any): SpeciesData {
  const behaviorTags: string[] = [];
  if (plant.placement) behaviorTags.push(plant.placement);
  if (plant.growthRate) behaviorTags.push(`growth-${plant.growthRate}`);

  return {
    slug: plant.slug,
    common_name: plant.commonName,
    scientific_name: plant.scientificName,
    type: 'plant',
    difficulty: plant.difficulty?.toLowerCase() || 'beginner',
    min_tank_size_liters: 0, // Not applicable for plants
    min_group_size: 1,
    ph_range: plant.environment?.ph ? { min: plant.environment.ph.min, max: plant.environment.ph.max } : null,
    temp_range_c: plant.environment?.tempC ? { min: plant.environment.tempC.min, max: plant.environment.tempC.max } : null,
    hardness_range_dgh: plant.environment?.hardnessDGH ? { min: plant.environment.hardnessDGH.min, max: plant.environment.hardnessDGH.max } : null,
    description: plant.description || '',
    care_guide: plant.care?.description || '',
    diet: '', // Not applicable for plants
    behavior_tags: behaviorTags.filter(Boolean),
    image_url: plant.imageUrl || null,
    image_credit: plant.imageCredit || null,
  };
}

async function importData() {
  console.log('🚀 Starting data import...');

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
