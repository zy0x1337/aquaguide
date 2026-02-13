// src/data/plants/anubias-nana-petite.ts
import type { Plant } from '../../types/plant';

export const anubiasNanaPetite: Plant = {
  id: 'plant-anubias-nana-petite',
  slug: 'anubias-barteri-var-nana-petite',
  imageUrl: '/images/plants/anubias-nana-petite.jpg',

  imageCredit: {
    photographer: 'Abhik.Mazumdar.73',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anubias_Nana_Petite.jpg',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/'
  },

  difficulty: 'easy',

  taxonomy: {
    scientificName: "Anubias barteri var. nana 'Petite'",
    commonName: 'Anubias Nana Petite',
    family: 'Araceae',
    origin: 'Cultivar (originally West Africa)'
  },

  specs: {
    heightCM: { min: 3, max: 5 },
    type: 'rhizome',
    light: 'low',
    co2: 'low',
    growthRate: 'slow',
    placement: ['foreground', 'epiphyte']
  },

  parameters: {
    tempC: { min: 20, max: 28 },
    ph: { min: 6.0, max: 7.8 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Rhizome division. Cut small sections with 2-3 leaves. Use fishing line to attach new divisions.',
    notes: 'Ultra-miniature epiphyte. Attach to driftwood/rock with fishing line or superglue gel. Avoid direct light to prevent algae. Rhizome MUST stay exposed.'
  },

  nutrients: {
    nitrogen: 'low',
    phosphate: 'low',
    potassium: 'low',
    iron: 'low'
  },

  commonProblems: [
    {
      title: 'Rhizome Rot',
      desc: 'Rhizome turns black/soft, leaves melt.',
      solution: 'Never bury rhizome in substrate. Ensure good water flow. Remove rotten sections immediately.'
    },
    {
      title: 'Algae Growth',
      desc: 'Green dust algae or hair algae on leaves.',
      solution: 'Reduce light intensity/duration. Increase water flow. Spot treat with soft brush.'
    },
    {
      title: 'No New Growth',
      desc: 'Plant stable but no new leaves forming.',
      solution: 'Add trace elements (iron/zinc). Check for nutrient deficiencies. Increase flow around plant.'
    },
    {
      title: 'Melting Leaves',
      desc: 'Leaves become translucent and dissolve.',
      solution: 'Acclimate slowly to new tank parameters. Stabilize temperature (22-26C optimal).'
    }
  ],

  relatedPlants: [
    'anubias-barteri-var-nana'
  ],

  description: 'Anubias Nana Petite is the smallest Anubias variety reaching only 3-5cm total height. Perfect for nano aquariums (5-20L), driftwood detailing, and premium foreground in high-end aquascapes. Ultra-hardy surviving low light without CO2. Slow-growing with minimal maintenance. Dark green round leaves with thick texture. Epiphyte only - attach to hardscape (never plant in substrate). Ideal for shrimps, nano fish (Betta, Endlers). Thrives 20-28C, pH 6-7.8.'
};
