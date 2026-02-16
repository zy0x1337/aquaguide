/**
 * Complete data import script - imports 100% of data from JSON files
 * Run with: npm run import-data
 */

import { createClient } from '@supabase/supabase-js';
import { allSpecies } from '../src/data/species/index';
import { allPlants } from '../src/data/plants/index';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

function formatImageCredit(imageCredit: any): string | null {
  if (!imageCredit) return null;
  if (typeof imageCredit === 'string') return imageCredit;
  if (imageCredit.photographer) {
    const parts = [`Photo by ${imageCredit.photographer}`];
    if (imageCredit.license) parts.push(`(${imageCredit.license})`);
    return parts.join(' ');
  }
  return null;
}

function normalizeDifficulty(difficulty: string): string {
  const map: Record<string, string> = {
    'easy': 'beginner',
    'beginner': 'beginner',
    'moderate': 'intermediate',
    'intermediate': 'intermediate',
    'hard': 'advanced',
    'advanced': 'advanced',
    'expert': 'expert',
    'very hard': 'expert'
  };
  return map[difficulty?.toLowerCase()] || 'beginner';
}

function convertSpeciesToDB(species: any) {
  let type: 'fish' | 'invertebrate' | 'plant' = 'fish';
  if (species.category === 'Invertebrate' || species.tags?.includes('invertebrate')) {
    type = 'invertebrate';
  }

  // Extract all taxonomy data
  const taxonomy = species.taxonomy || {};
  const visuals = species.visuals || {};
  const environment = species.environment || {};
  const habitat = species.habitat || {};
  const behavior = species.behavior || {};
  const compatibility = behavior.compatibility || {};
  const care = species.care || {};
  const health = species.health || {};
  const scientificContext = species.scientificContext || {};
  const breeding = species.breeding || {};
  const experienceData = species.experienceData || {};

  return {
    // Basic info
    slug: species.slug,
    common_name: species.commonName || taxonomy.commonName,
    scientific_name: species.scientificName || taxonomy.scientificName,
    type,
    difficulty: normalizeDifficulty(care.difficulty || species.difficulty || 'beginner'),
    fun_fact: species.funFact || null,
    
    // Taxonomy
    family: taxonomy.family || species.family || null,
    origin: taxonomy.origin || species.origin || null,
    region: taxonomy.region || null,
    category: species.category || null,
    biotope: taxonomy.biotope || null,
    
    // Visuals
    icon_shape: visuals.iconShape || null,
    color: visuals.color || null,
    adult_size_cm: visuals.adultSizeCM ? { min: visuals.adultSizeCM, max: visuals.adultSizeCM } : 
                   species.adultSize ? { min: species.adultSize.min, max: species.adultSize.max } : null,
    
    // Tank requirements
    min_tank_size_liters: environment.minTankSizeLiters || species.minTankSize || 0,
    min_group_size: behavior.minGroupSize || species.minGroupSize || 1,
    
    // Water parameters
    ph_range: environment.ph ? { min: environment.ph.min, max: environment.ph.max } : 
              species.environment?.ph || species.parameters?.ph || null,
    temp_range_c: environment.tempC ? { min: environment.tempC.min, max: environment.tempC.max } : 
                  species.environment?.tempC || species.parameters?.tempC || null,
    hardness_range_dgh: environment.gh ? { min: environment.gh.min, max: environment.gh.max } : 
                        species.environment?.hardnessDGH || null,
    
    // Environment details
    flow: environment.flow || null,
    substrate: environment.substrate || null,
    swimming_zone: environment.swimmingZone || null,
    space_needs: environment.spaceNeeds || null,
    bioload_multiplier: environment.bioloadMultiplier || null,
    
    // Habitat
    planting: habitat.planting || null,
    planting_notes: habitat.plantingNotes || null,
    hardscape: habitat.hardscape || null,
    
    // Behavior
    behavior_tags: behavior.tags || species.tags || null,
    behavior_description: behavior.description || null,
    temperament: behavior.temperament || null,
    swimming_level: behavior.swimming || null,
    is_schooling: behavior.minGroupSize > 1 || behavior.schooling === true,
    
    // Compatibility
    good_mates: compatibility.goodMates || null,
    bad_mates: compatibility.badMates || null,
    compatibility_notes: compatibility.notes || null,
    compatibility_rules: compatibility.rules || null,
    ideal_tankmates: compatibility.idealTankmates || null,
    compatible_with: species.compatibility?.good || [],
    incompatible_with: species.compatibility?.avoid || [],
    
    // Advanced behavior
    aggression_level: behavior.aggressionLevel || null,
    activity: behavior.activity || null,
    social_structure: behavior.socialStructure || null,
    fin_nipping: behavior.finNipping || null,
    
    // Care
    effort: care.effort || null,
    cost: care.cost || null,
    special_requirements: care.specialRequirements || null,
    pro_tips: care.proTips || null,
    common_mistakes: care.commonMistakes || null,
    feeding: care.feeding || null,
    maintenance: care.maintenance || null,
    equipment: care.equipment || null,
    
    // Content
    description: species.description || '',
    care_guide: species.care?.description || species.careLevel?.description || '',
    diet: care.diet || species.diet?.primary?.join(', ') || species.feeding?.diet || '',
    
    // Health
    lifespan_years: health.lifespanYears ? { min: health.lifespanYears, max: health.lifespanYears } : 
                    species.lifespan || null,
    common_diseases: health.commonDiseases || null,
    sensitivities: health.sensitivities || null,
    common_problems: species.commonProblems?.map((p: any) => ({
      title: p.title,
      description: p.desc || p.description,
      solution: p.solution
    })) || null,
    
    // Scientific context
    wild_habitat: scientificContext.wildHabitat || null,
    sexual_dimorphism: scientificContext.sexualDimorphism || null,
    variants: scientificContext.variants || null,
    
    // Breeding
    breeding_method: breeding.method || null,
    breeding_difficulty: breeding.difficulty || null,
    breeding_trigger: breeding.trigger || null,
    fry_care: breeding.fryCare || null,
    breeding_notes: breeding.notes || null,
    breeding_info: breeding.difficulty || breeding.notes ? {
      difficulty: breeding.difficulty,
      notes: breeding.notes || breeding.fryCare,
      method: breeding.method,
      trigger: breeding.trigger
    } : null,
    
    // Experience data
    experience_data: experienceData.successRate ? experienceData : null,
    
    // Related
    related_species: species.relatedSpecies || [],
    
    // Image
    image_url: species.imageUrl || null,
    image_credit: formatImageCredit(species.imageCredit),
    
    // Meta
    created_by: null,
  };
}

function convertPlantToDB(plant: any) {
  const taxonomy = plant.taxonomy || {};
  const specs = plant.specs || {};
  const parameters = plant.parameters || {};
  const planting = plant.planting || {};

  return {
    slug: plant.slug,
    common_name: plant.commonName || taxonomy.commonName,
    scientific_name: plant.scientificName || taxonomy.scientificName,
    type: 'plant' as const,
    difficulty: normalizeDifficulty(plant.difficulty || 'beginner'),
    fun_fact: plant.funFact || null,
    
    // Taxonomy
    family: taxonomy.family || null,
    origin: taxonomy.origin || null,
    region: taxonomy.region || null,
    category: null,
    
    // Size
    adult_size_cm: specs.heightCM || null,
    lifespan_years: null,
    
    // Tank (not applicable for plants)
    min_tank_size_liters: 0,
    min_group_size: 1,
    
    // Water parameters
    ph_range: parameters.ph || null,
    temp_range_c: parameters.tempC || null,
    hardness_range_dgh: null,
    
    // Plant-specific
    light_requirement: specs.light || null,
    co2_requirement: specs.co2 || null,
    growth_rate: specs.growthRate || null,
    placement: Array.isArray(specs.placement) ? specs.placement : 
               specs.placement ? [specs.placement] : null,
    substrate_required: planting.substrate !== false,
    root_tabs_required: planting.soilTabs === true,
    propagation: planting.propagation || null,
    planting_notes: planting.notes || null,
    
    // Content
    description: plant.description || '',
    care_guide: planting.notes || plant.care?.description || '',
    diet: '',
    behavior_tags: [
      specs.placement,
      specs.growthRate ? `growth-${specs.growthRate}` : null,
      specs.light ? `light-${specs.light}` : null
    ].filter(Boolean),
    
    // Common problems
    common_problems: plant.commonProblems?.map((p: any) => ({
      title: p.title,
      description: p.desc || p.description,
      solution: p.solution
    })) || null,
    
    // Related
    related_species: plant.relatedPlants || [],
    
    // Image
    image_url: plant.imageUrl || null,
    image_credit: formatImageCredit(plant.imageCredit),
    
    // Not applicable
    temperament: null,
    swimming_level: null,
    is_schooling: false,
    breeding_info: null,
    compatible_with: [],
    incompatible_with: [],
    good_mates: null,
    bad_mates: null,
    compatibility_notes: null,
    special_requirements: null,
    pro_tips: null,
    common_mistakes: null,
    created_by: null,
  };
}

async function importData() {
  console.log('🚀 Starting COMPLETE data import...');
  console.log(`📡 Connecting to: ${supabaseUrl}`);
  console.log('🔐 Using service role key (admin access)');

  const speciesData = allSpecies.map(convertSpeciesToDB);
  console.log(`📦 Prepared ${speciesData.length} species with FULL data structure`);

  const plantsData = allPlants.map(convertPlantToDB);
  console.log(`🌿 Prepared ${plantsData.length} plants with FULL data structure`);

  const allData = [...speciesData, ...plantsData];
  console.log(`✨ Total entries: ${allData.length}`);
  
  console.log('\n📊 Sample data structure:');
  console.log('Fields captured per species:', Object.keys(allData[0] || {}).length);

  const { data, error } = await supabase
    .from('species')
    .upsert(allData, { onConflict: 'slug' });

  if (error) {
    console.error('❌ Error importing data:', error);
    process.exit(1);
  }

  console.log('\n✅ Data import complete!');
  console.log(`🎉 Successfully imported ${allData.length} entries`);
  console.log('\n📋 Imported fields include:');
  console.log('   ✓ Basic info, taxonomy, visuals');
  console.log('   ✓ Environment (swimming zones, space needs, bioload)');
  console.log('   ✓ Habitat (planting, hardscape)');
  console.log('   ✓ Behavior (tags, aggression levels, social structure)');
  console.log('   ✓ Compatibility (rules, tankmates, fin nipping)');
  console.log('   ✓ Care (feeding schedules, maintenance, equipment)');
  console.log('   ✓ Health (diseases, sensitivities)');
  console.log('   ✓ Scientific context (wild habitat, dimorphism, variants)');
  console.log('   ✓ Breeding (method, triggers, fry care)');
  console.log('   ✓ Experience data (success rates, costs)');
}

importData();
