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

  funFact: 'Anubias Nana Petite is an aquarium cultivar and does not exist in nature – it was developed through selective breeding from Dwarf Anubias.',

  taxonomy: {
    scientificName: "Anubias barteri var. nana 'Petite'",
    commonName: 'Anubias Nana Petite',
    family: 'Araceae',
    origin: 'Cultivar (originally West Africa)',
    nativeRegion: 'Cultivar; parent species originates from shaded flowing waters of West Africa'
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
    tempC: { min: 20, max: 28, ideal: 24 },
    ph: { min: 6.0, max: 7.8, ideal: 7.0 },
    kh: { min: 2, max: 15 },
    gh: { min: 3, max: 20 },
    flow: 'low',
    photoperiodHours: { min: 6, max: 9 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Rhizome division. Cut small sections with 2–3 leaves. Attach to new hardscape with fishing line.',
    notes: 'Ultra-miniature epiphyte. Attach to driftwood or stone with fishing line or super glue. Avoid direct bright light to reduce algae. The rhizome MUST remain exposed.',
    trimming: 'Remove individual old leaves directly at the stem. Do not trim rhizome except for propagation.',
    senescenceNotes: 'Very long-lived. Grows extremely slowly – patience is essential. No growth for weeks is normal as long as no rot is visible.'
  },

  nutrients: {
    nitrogen: 'low',
    phosphate: 'low',
    potassium: 'low',
    iron: 'low'
  },

  variants: ['Anubias barteri var. nana \'Petite\'', 'Anubias barteri var. nana \'Mini Coin\''],

  commonProblems: [
    {
      title: 'Rhizome Rot',
      desc: 'Rhizome turns black/soft, leaves melt.',
      solution: 'Never bury rhizome in substrate. Ensure good water circulation. Remove rotted sections immediately.'
    },
    {
      title: 'Algae Growth',
      desc: 'Green dust or hair algae on leaves.',
      solution: 'Reduce light intensity/duration. Increase water flow. Manual treatment with soft brush.'
    },
    {
      title: 'No New Growth',
      desc: 'Plant stable but no new leaves.',
      solution: 'Add trace elements (iron/zinc). Check for nutrient deficiency. Improve water movement around plant.'
    },
    {
      title: 'Melting Leaves',
      desc: 'Leaves become transparent and dissolve.',
      solution: 'Slowly acclimate to new tank parameters. Stabilize temperature (22–26 °C optimal).'
    }
  ],

  proTips: [
    'Ideal for nano aquariums (5–20 L) and detailed hardscape design.',
    'Attach to small stones or driftwood branches that serve as decorative elements.',
    'Cherry Shrimp and Neocaridina shrimp love the small leaves as shelter.'
  ],

  commonMistakes: [
    'Burying rhizome – leads to rot.',
    'Overwhelming with too much light or fertilizer – Petite needs less than most plants.',
    'Direct sunlight or very bright artificial light – promotes massive algae growth.'
  ],

  aquascapeContext: {
    styles: ['nature_aquarium', 'low_tech', 'iwagumi', 'biotope'],
    roleInTank: 'Detail accent in foreground or on hardscape. Perfect scale-breaker in nano-scapes.',
    companionFish: ['Cherry Shrimp', 'Neocaridina sp.', 'Betta', 'Endlers Livebearer', 'Nano-Rasboras'],
    incompatibleFish: ['Goldfish', 'Large Cichlids', 'Silver Dollar'],
    substrateRecommendations: ['Gravel (1–2 mm)', 'River sand', 'Lava rock as attachment medium']
  },

  relatedPlants: [
    'anubias-barteri-var-nana'
  ],

  description: 'Anubias Nana Petite is the smallest Anubias variety with a total height of only 3–5 cm. Perfect for nano aquariums (5–20 L), driftwood details, and premium foreground design. Ultra-robust, survives low light without CO₂. Slow-growing with minimal maintenance. Dark green, round leaves with thick texture. Exclusively epiphyte – attach to hardscape (never plant in substrate). Ideal for shrimp and nano fish (Betta, Endler).'
};
