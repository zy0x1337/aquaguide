import type { Plant } from '../../types/plant';

export const limnobiumLaevigatum: Plant = {
  id: 'plant-froschbiss',
  slug: 'limnobium-laevigatum',
  imageUrl: '/images/plants/limnobium-laevigatum.jpg',
  
  imageCredit: {
    photographer: 'johnnykarlsson1 on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/pflanze-blatt-natur-3147756/',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  difficulty: 'easy',
  
  taxonomy: {
    scientificName: 'Limnobium laevigatum',
    commonName: 'Southamerican Frogbit',
    family: 'Hydrocharitaceae',
    origin: 'Südamerika (Amazonas-Region)'
  },

  specs: {
    type: 'float',
    heightCM: { min: 3, max: 10 }, // Blattdurchmesser
    light: 'high',
    co2: 'low',
    growthRate: 'very fast',
    placement: ['floating']
  },

  parameters: {
    tempC: { min: 18, max: 30 },
    ph: { min: 5.5, max: 7.5 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Daughter plants from runners. Separate and float independently.',
    notes: 'Free-floating surface plant. Keep away from lamp (burn risk). Excellent for shading high-light tanks and algae control.'
  },

  nutrients: {
    nitrogen: 'high',
    phosphate: 'high',
    potassium: 'medium',
    iron: 'low'
  },

  commonProblems: [
    {
      title: 'Lamp Burns',
      desc: 'Leaves turn white/brown spots touching light fixture.',
      solution: 'Maintain 10-15cm distance to lamp. Trim affected leaves. Reduce photoperiod to 8-10 hours.'
    },
    {
      title: 'Overgrowth',
      desc: 'Covers entire surface, blocks light to lower plants.',
      solution: 'Thin regularly (weekly). Use excess for fish food. Combine with low-light plants.'
    },
    {
      title: 'Snail Infestation',
      desc: 'Pest snails cluster on underside of leaves.',
      solution: 'Position away from glass walls. Manual removal. Assassin snails or manual quarantine.'
    },
    {
      title: 'Yellowing Leaves',
      desc: 'Leaves pale and sink.',
      solution: 'Increase light intensity/duration. Add liquid fertilizer. Ensure nutrient-rich water (fish waste).'
    },
    {
      title: 'Small Leaves',
      desc: 'Tiny leaves, slow spread.',
      solution: 'More light (high intensity). Stable warm temps (24-28°C). Liquid fertilizer dosing.'
    }
  ],

  relatedPlants: [
    'ceratophyllum-demersum',
  ],

  description: 'Fast-growing floating plant with round, glossy leaves forming a green surface carpet. Excellent algae fighter (nitrate sponge), provides shade for low-light plants, and shelter for fry/shrimp. High light lover - trim weekly to prevent overgrowth. Roots create dramatic hanging effect and spawning sites.'
};
