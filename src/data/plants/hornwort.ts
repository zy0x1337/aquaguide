import type { Plant } from '../../types/plant';

export const hornwort: Plant = {
  id: 'plant-hornwort',
  slug: 'ceratophyllum-demersum',
  imageUrl: '/images/plants/ceratophyllum-demersum.jpg',
  
  imageCredit: {
    photographer: 'Laila_ on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/hornkraut-verwenden-aquarium-pflanze-3390274/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  difficulty: 'easy',
  
  taxonomy: {
    scientificName: 'Ceratophyllum demersum',
    commonName: 'Hornwort',
    family: 'Ceratophyllaceae',
    origin: 'Cosmopolitan (worldwide in freshwater)'
  },

  specs: {
    type: 'float',
    heightCM: { min: 20, max: 300 },
    light: 'medium',
    co2: 'low',
    growthRate: 'very fast',
    placement: ['background', 'floating']
  },

  parameters: {
    tempC: { min: 10, max: 30 },
    ph: { min: 6.0, max: 8.0 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Stem cuttings. Simply break or cut stems and replant - roots from nodes within days.',
    notes: 'Free-floating or weigh down with rock/lead weights. Excellent nitrate sponge. Provides shelter for fry and shrimp. Trim regularly to prevent overgrowth.'
  },

  nutrients: {
    nitrogen: 'high',
    phosphate: 'high',
    potassium: 'medium',
    iron: 'low'
  },

  commonProblems: [
    {
      title: 'Overcrowding',
      desc: 'Rapid growth fills tank, shades bottom plants, consumes all nutrients.',
      solution: 'Regular trimming (weekly). Remove 50% weekly. Use clippings for fish food or new tanks.'
    },
    {
      title: 'Leaf Shedding',
      desc: 'Fine leaves drop off, plant appears bare.',
      solution: 'Normal adaptation. Add liquid fertilizer. Ensure medium light. Stabilize parameters.'
    },
    {
      title: 'Algae Growth',
      desc: 'Green hair algae or black beard algae on stems.',
      solution: 'Paradoxically helps fight algae. Trim affected parts. Reduce light. Add nitrate source if low.'
    },
    {
      title: 'Slow Growth',
      desc: 'Minimal elongation, thin sparse growth.',
      solution: 'Increase light to medium-high. Add macronutrients (nitrate/phosphate). Raise temperature to 24-28°C.'
    },
    {
      title: 'Rotting Bottom',
      desc: 'Lower stems turn black and disintegrate.',
      solution: 'Remove dead material immediately. Improve water flow. Never bury in substrate.'
    }
  ],

  relatedPlants: [
    'bacopa-monnieri',
    'hygrophila-difformis',
    'elodea-canadensis'
  ],

  description: 'The ultimate nitrate sponge and beginner floater. Hornwort grows explosively fast without CO2, oxygenates water heavily, and outcompetes algae for nutrients. Fine feathery leaves create dynamic movement and provide perfect shelter for shrimp, fry, and fish. Use as background, floating carpet, or hang from surface. Trims make excellent fish food. Tolerates extreme conditions (4-30°C).'
};
