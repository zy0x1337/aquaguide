import type { Species } from '../../types/species';

export const pygmyCory: Species = {
  id: 'pygmy-cory',
  slug: 'pygmy-cory',
  imageUrl: '/images/species/pygmy-cory.jpg',
  funFact: 'Unlike most Corydoras that stick to the bottom, Pygmy Corys frequently swim in mid-water, making them one of the most active and visible Corydoras species.',
  
  imageCredit: {
    photographer: 'Carnat Joel',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Corydoras_pygmaeus_carnat_joel_5.jpg',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/'
  },

  taxonomy: {
    scientificName: 'Corydoras pygmaeus',
    commonName: 'Pygmy Corydoras',
    family: 'Callichthyidae',
    origin: 'Brazil (Rio Madeira basin)',
    region: 'South America',
    biotope: 'Shallow tributary streams with sandy substrate and vegetation',
  },
  
  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 2.5,
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 22, max: 26, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 7.0 },
    gh: { min: 2, max: 12 },
    flow: 'low',
    substrate: 'fine sand (mandatory)',
  },
  
  habitat: {
    planting: 'medium',
    plantingNotes: 'Appreciates planted areas with open sandy patches. Unlike larger corys, they spend significant time in mid-water.',
    hardscape: ['Fine sand', 'Smooth pebbles', 'Driftwood'],
  },
  
  behavior: {
    tags: ['shoaler', 'peaceful', 'bottom_dweller'],
    minGroupSize: 8,
    description: 'Smallest Corydoras species. Highly social and active, frequently swimming in mid-water unlike other corys. Very peaceful and constantly foraging. Adorable "mini-cory" behavior.',
    compatibility: {
      goodMates: ['Ember Tetra', 'Chili Rasbora', 'Celestial Pearl Danio', 'Dwarf Shrimp', 'Otocinclus'],
      badMates: ['Large Cichlids', 'Oscars', 'Large Plecos'],
      notes: 'Perfect for nano community tanks. Require fine sand substrate to protect their delicate barbels.',
    },
  },
  
  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Fine sand substrate mandatory',
      'Keep in groups of 8+',
      'Very sensitive to nitrates',
      'Clean water essential'
    ],
    proTips: [
      'Feed sinking micro pellets or crushed wafers.',
      'They spend more time in mid-water than other corys - totally normal!',
      'Perform frequent small water changes to keep nitrates low.',
    ],
    commonMistakes: [
      'Using gravel instead of sand - damages their barbels.',
      'Keeping in groups smaller than 6 - they become shy.',
      'Letting nitrates rise above 20ppm.',
    ],
  },
  
  health: {
    lifespanYears: 3,
    commonDiseases: ['ich', 'barbel-erosion', 'fungal-infection'],
    sensitivities: ['High nitrates', 'Sharp substrate', 'Poor water quality'],
  },
  
  scientificContext: {
    wildHabitat: 'Inhabits shallow, slow-moving tributaries with sandy substrate and leaf litter. Water is soft and slightly acidic.',
    sexualDimorphism: 'Females are rounder and slightly larger. Males are slimmer with more pointed dorsal fins.',
    variants: [],
  },
  
  breeding: {
    method: 'egg_layer',
    difficulty: 'medium',
    trigger: 'Condition with live/frozen foods. Cooler water change can trigger spawning.',
    fryCare: 'Fry are very small and require fine powdered food or infusoria initially.',
    notes: 'Females scatter eggs on plants and glass. Remove parents after spawning.',
  },
};
