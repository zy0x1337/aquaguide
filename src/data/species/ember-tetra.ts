import type { Species } from '../../types/species';

export const emberTetra: Species = {
  id: 'ember-tetra',
  slug: 'ember-tetra',
  imageUrl: '/images/species/ember-tetra.jpg',
  funFact: 'Ember Tetras glow like burning embers in low light, intensifying their fiery orange-red coloration when kept in dimly lit, blackwater aquariums.',
  
imageCredit: {
    photographer: 'Klaus Rudloff (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyphessobrycon_amandae_A.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },

  taxonomy: {
    scientificName: 'Hyphessobrycon amandae',
    commonName: 'Ember Tetra',
    family: 'Characidae',
    origin: 'Brazil (Araguaia River basin)',
    region: 'South America',
    biotope: 'Slow-moving blackwater streams with dense vegetation',
  },
  
  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 2,
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 23, max: 28, ideal: 25 },
    ph: { min: 5.5, max: 7.5, ideal: 6.5 },
    gh: { min: 3, max: 12 },
    flow: 'low',
    substrate: 'dark sand or fine gravel',
  },
  
  habitat: {
    planting: 'dense',
    plantingNotes: 'Prefers heavily planted tanks with floating plants to diffuse lighting. Dark substrate enhances their fiery coloration.',
    hardscape: ['Driftwood', 'Leaf litter', 'Rocks'],
  },
  
  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater'],
    minGroupSize: 10,
    description: 'Peaceful nano schooling fish that display intense orange-red coloration. Very active mid-water swimmers that feel secure in large groups. Males show more vibrant colors, especially during breeding.',
    compatibility: {
      goodMates: ['Pygmy Corydoras', 'Otocinclus', 'Chili Rasbora', 'Neon Tetras', 'Dwarf Shrimp'],
      badMates: ['Large Cichlids', 'Oscars', 'Bettas', 'Angelfish'],
      notes: 'Perfect for nano community tanks. Peaceful with all small species. Avoid keeping with fin-nippers or large predators.',
    },
  },
  
  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Keep in groups of 10+',
      'Prefers dimmed lighting or floating plants',
      'Dark substrate enhances coloration',
      'Peaceful tankmates only'
    ],
    proTips: [
      'Add Indian Almond Leaves to create tannin-stained water for best coloration.',
      'Feed micro pellets or crushed flakes - their mouths are tiny!',
      'Males display brighter colors when competing for females.',
    ],
    commonMistakes: [
      'Keeping in groups smaller than 10 - they become stressed and hide.',
      'Bright lighting washes out their colors.',
      'Housing with aggressive tankmates.',
    ],
  },
  
  health: {
    lifespanYears: 3,
    commonDiseases: ['ich', 'fin-rot', 'fungal-infection'],
    sensitivities: ['Sudden parameter changes', 'High nitrates'],
  },
  
  scientificContext: {
    wildHabitat: 'Inhabits slow-moving blackwater tributaries with dense aquatic vegetation and leaf litter. Water is typically soft, acidic, and stained with tannins.',
    sexualDimorphism: 'Males are slimmer with more intense red-orange coloration. Females are rounder with slightly duller colors.',
    variants: [],
  },
  
  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Condition with live foods. Separate breeding pair in planted tank.',
    fryCare: 'Fry are tiny and require infusoria initially, then baby brine shrimp.',
    notes: 'Remove adults after spawning to prevent egg predation.',
  },
};
