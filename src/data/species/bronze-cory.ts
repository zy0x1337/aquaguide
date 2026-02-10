import type { Species } from '../../types/species';

export const bronzeCory: Species = {
  id: 'cory-001',
  slug: 'bronze-cory',
  imageUrl: '/images/species/bronze-cory.jpg',
  funFact: "Like all Corydoras, they can breathe atmospheric air by gulping it at the surface and absorbing oxygen through their intestines ('Intestinal Respiration'). Don't panic if they dart to the surface!",
  
  taxonomy: {
    scientificName: 'Osteogaster aeneus (prev. Corydoras)',
    commonName: 'Bronze Cory',
    family: 'Callichthyidae',
    origin: 'South America (Widespread)',
  },
  
  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 7, // Werden recht bullig
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80, // Brauchen Grundfläche
    tempC: { min: 20, max: 28, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 7.0 },
    gh: { min: 2, max: 20 },
    flow: 'medium',
    substrate: 'sand', // PFLICHT!
  },
  
  habitat: {
    planting: 'medium',
    plantingNotes: 'Leave open sandy areas for digging. They love resting under broad leaves (Anubias, Swords) or overhangs.',
    hardscape: ['Fine Sand (Mandatory)', 'Round Stones', 'Driftwood bridges'],
  },
  
  behavior: {
    tags: ['shoaler', 'active', 'bottom_dweller', 'peaceful'],
    minGroupSize: 6, // Besser 10+
    description: 'Extremely peaceful and social armored catfish. They spend the day snuffling through the sand for food. They have a "winking" eye movement.',
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Livebearers', 'Dwarf Cichlids'],
      badMates: ['Large aggressive Cichlids', 'Any fish large enough to swallow them'],
      notes: 'Their spines can get stuck in the throat of predators (and nets!).',
    }
  },
  
  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Sand substrate to protect barbels', 'Sinking food'],
  },
  
  health: {
    lifespanYears: 8,
    commonDiseases: [
      'Barbel erosion', // Durch scharfen Kies
      'Red Blotch Disease',
      'ich'
    ],
    sensitivities: ['Sharp gravel', 'High Nitrate', 'Salt (tolerated poorly)'],
  },

  scientificContext: {
    wildHabitat: "Shallow, quiet waters with soft mud or sand bottoms.",
    sexualDimorphism: "Females are significantly wider and rounder when viewed from above, especially when gravid.",
    variants: ['Albino Bronze Cory', 'Green Laser (different species but related)', 'Black Venezuela'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Large cool water change (simulating rain season) + high protein food. They place eggs in the famous "T-Position".',
    fryCare: 'Eggs are sticky and often laid on glass. Fry need micro-worms or dust food.',
  },
};
