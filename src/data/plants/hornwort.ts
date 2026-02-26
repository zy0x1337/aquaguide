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

  funFact: 'Hornwort has no true roots at all – it is one of the few true rootless aquatic plants in the world. It absorbs nutrients exclusively through its leaves from the water.',

  taxonomy: {
    scientificName: 'Ceratophyllum demersum',
    commonName: 'Hornwort',
    family: 'Ceratophyllaceae',
    origin: 'Cosmopolitan (worldwide in freshwater)',
    nativeRegion: 'Distributed worldwide in ponds, lakes, and slow-flowing streams – one of the most cosmopolitan aquatic plant genera'
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
    tempC: { min: 10, max: 30, ideal: 22 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    kh: { min: 2, max: 21 },
    gh: { min: 3, max: 21 },
    flow: 'low',
    photoperiodHours: { min: 8, max: 14 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Cuttings. Simply break or cut stems and leave them – they root from nodes within days.',
    notes: 'Free-floating or weighted with stone/lead weight. Excellent nitrate sponge. Provides shelter for fry and shrimp. Trim regularly to prevent overgrowth.',
    trimming: 'Remove 30–50% of mass weekly. Use excess cuttings as fish food or share with others.',
    senescenceNotes: 'Lower stem sections turn brown and lose leaves – regular trimming from top ensures always fresh growth.'
  },

  nutrients: {
    nitrogen: 'high',
    phosphate: 'high',
    potassium: 'medium',
    iron: 'low'
  },

  commonProblems: [
    {
      title: 'Overgrowth',
      desc: 'Rapid growth fills tank, shades bottom plants, consumes all nutrients.',
      solution: 'Weekly trimming. Remove 50% weekly. Use trimmings as fish food or for new tanks.'
    },
    {
      title: 'Needle Shedding',
      desc: 'Fine needles fall off, plant looks bare.',
      solution: 'Normal acclimation. Add liquid fertilizer. Ensure medium light. Stabilize parameters.'
    },
    {
      title: 'Algae Growth',
      desc: 'Green hair algae or beard algae on stems.',
      solution: 'Paradoxically fights algae. Trim affected parts. Reduce light. Add nitrate source if value is low.'
    },
    {
      title: 'Slow Growth',
      desc: 'Minimal elongation, thin sporadic growth.',
      solution: 'Increase light to medium-high. Add macronutrients (nitrate/phosphate). Raise temperature to 24–28 °C.'
    },
    {
      title: 'Rotting Lower End',
      desc: 'Lower stems turn black and disintegrate.',
      solution: 'Remove dead material immediately. Improve water flow. Never bury in substrate.'
    }
  ],

  proTips: [
    'As "starter plant" during cycling: neutralizes ammonia spikes and accelerates cycling.',
    'Bundle loosely and attach to stones for organized background look.',
    'Fish fry and baby shrimp hide perfectly in the dense needles.'
  ],

  commonMistakes: [
    'Never trimming – leads to uncontrolled overgrowth that shades everything.',
    'Anchoring in substrate – hornwort has no roots and rots at bottom.',
    'Using in low light – barely grows and becomes unsightly.'
  ],

  aquascapeContext: {
    styles: ['low_tech', 'biotope', 'jungle', 'nature_aquarium'],
    roleInTank: 'Background plant or floating carpet. Fast nitrate buffer in heavily stocked tanks. Fry protection and visual barrier.',
    companionFish: ['Guppies', 'Endler', 'Platy', 'Molly', 'Corydoras', 'Cherry Shrimp', 'Neon Tetra'],
    incompatibleFish: ['Goldfish (eats it but very tolerant)', 'Large Cichlids'],
    substrateRecommendations: ['No substrate needed – free-floating or loosely suspended']
  },

  relatedPlants: [
    'bacopa-monnieri',
    'hygrophila-difformis',
    'elodea-canadensis'
  ],

  description: 'The ultimate nitrate sponge and beginner floater. Hornwort grows explosively without CO₂, heavily oxygenates water, and outcompetes algae for nutrients. The fine, feathery leaves create dynamic movement and provide perfect shelter for shrimp, fry, and fish. Can be used as background plant, floating carpet, or suspended at surface. Cuttings work as fish food. Tolerates extreme conditions (10–30 °C).'
};
