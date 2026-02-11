import type { Species } from '../../types/species';

export const ramCichlid: Species = {
  id: 'cichlid-001',
  slug: 'ram-cichlid',
  imageUrl: '/images/species/ram-cichlid.jpg',
  funFact: "German Blue Rams mate for life and establish territory by creating a small 'sand volcano'. They perform elaborate courtship dances.",

  taxonomy: {
    scientificName: 'Mikrogeophagus ramirezi',
    commonName: 'German Blue Ram',
    family: 'Cichlidae',
    origin: 'Colombia, Venezuela (Orinoco Basin)',
    region: 'South America',
    biotope: 'Slow-moving streams with sandy bottoms and vegetation',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 6,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 24, max: 29, ideal: 27 }, // Temperaturempfindlich!
    ph: { min: 5.0, max: 7.0, ideal: 6.0 },
    gh: { min: 4, max: 15 },
    flow: 'low',
    substrate: 'sand', // Für Graben!
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Sandy bottom for nest building. Plants provide territorial markers.',
    hardscape: ['Smooth Rocks', 'Caves', 'Sand'],
  },

  behavior: {
    tags: ['cichlid', 'peaceful', 'bottom_dweller', 'territorial'],
    minGroupSize: 1,
    description: 'Peaceful for a Cichlid. Territorial but do not harm most fish. Excellent parents (if they survive).',
    compatibility: {
      goodMates: ['Tetras', 'Corydoras', 'Rasboras', 'Shrimp'],
      badMates: ['Aggressive Cichlids', 'Large predators'],
      notes: 'One of the few Cichlids safe in community tanks.',
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: ['Stable warm temperature (26-28°C)', 'Sandy substrate', 'Caves/shelter'],

    proTips: [
      "They are VERY temperature-sensitive. Fluctuation = death.",
      "Use a heater with a thermostat (±1°C accuracy).",
      "Pair them in larger tanks (60L+) if you want breeding behavior.",
      "Feed live food occasionally (bloodworms). Their colors intensify."
    ],

    commonMistakes: [
      "Temperature swings (they die within days).",
      "Gravel substrate (sand is mandatory for behavior).",
      "Overstocking (stress from competition).",
      "Keeping with aggressive fish."
    ],
  },

  health: {
    lifespanYears: 4,
    commonDiseases: ['ich', 'velvet', 'fin-rot'],
    sensitivities: ['Temperature instability', 'Poor water quality'],
  },

  scientificContext: {
    wildHabitat: "Sandy-bottomed streams with moderate vegetation. Water is warm and slightly acidic.",
    sexualDimorphism: "Males have more intense coloration and longer dorsal spines. Females are rounder.",
    variants: ['German Blue Ram', 'Gold Ram', 'Black Ram'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'medium',
    trigger: 'Pair bonding + Caves + Warm, soft water.',
    fryCare: 'Parents guard fry fiercely. Fry accept powdered food quickly.',
    notes: 'Breeding is possible but fry often get eaten if tank is not ideal.',
  },
};
