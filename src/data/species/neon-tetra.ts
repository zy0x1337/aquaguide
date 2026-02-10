import type { Species } from '../../types/species';

export const neonTetra: Species = {
  id: 'tetra-001',
  slug: 'neon-tetra',
  imageUrl: '/images/species/neon-tetra.jpg',
  funFact: "In the wild, Neon Tetras live in blackwater streams so dark that their iridescent stripe is the only way they can locate each other in the gloom.",
  
  taxonomy: {
    scientificName: 'Paracheirodon innesi',
    commonName: 'Neon Tetra',
    family: 'Characidae',
    origin: 'Peru, Brazil (Amazon Basin, Solimões)',
  },
  
  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 3,
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 20, max: 26, ideal: 23 },
    ph: { min: 5.0, max: 7.0, ideal: 6.0 },
    gh: { min: 2, max: 10 },
    flow: 'slow',
    substrate: 'any',
  },
  
  habitat: {
    planting: 'dense',
    plantingNotes: 'Prefers dense background planting for security with open swimming space in the center. Floating plants help simulate the dark conditions of their natural blackwater habitat.',
    hardscape: ['Branchy Driftwood (roots)', 'Leaf Litter', 'River Stones'],
  },
  
  behavior: {
    tags: ['shoaler', 'shy', 'midwater', 'peaceful'],
    minGroupSize: 10,
    description: 'A peaceful shoaling fish that displays stunning bio-luminescence-like colors. They are timid and require a large group (10+) to feel secure. When stressed or alone, their colors fade and they hide constantly.',
    compatibility: {
      goodMates: ['Corydoras', 'Otocinclus', 'Harlequin Rasboras', 'Dwarf Gouramis', 'Apistogramma'],
      badMates: ['Angelfish (predator)', 'Large Cichlids', 'Goldfish', 'Bettas (risk)'],
      notes: 'Classic community fish. The only risk is large fish seeing them as snacks. Angelfish hunt them in the wild!',
    }
  },
  
  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Needs groups of 10+', 'Soft lighting preferred', 'Stable parameters'],
  },
  
  health: {
    lifespanYears: 5,
    commonDiseases: [
      'neon-tetra-disease', // Das ist der Slug für die Verlinkung
      'ich',                // Das ist der Slug für die Verlinkung
      'False Neon Disease'  // Das ist nur Text
    ],
    sensitivities: ['New Tank Syndrome', 'High Nitrite', 'Sudden pH swings'],
  },

  scientificContext: {
    wildHabitat: "Inhabits clearwater and blackwater tributaries of the Amazon. The water is often tea-colored due to tannins, extremely soft (<1 dGH), and acidic (pH 4.0-6.0).",
    sexualDimorphism: "Subtle. Females are noticeably rounder and deeper in the belly area, which causes their lateral blue stripe to appear 'bent' or curved. Males are slimmer with a straighter blue line.",
    variants: ['Longfin Neon', 'Gold Neon (Leucistic)', 'Diamond Head Neon'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Total darkness required (eggs are photosensitive!). Use extremely soft water (RO water, GH < 1) and acidify to pH 5.5.',
    fryCare: 'Fry hatch after 24 hours but remain light-sensitive. Feed infusoria or paramecium in dim light for the first week.',
  },
};
