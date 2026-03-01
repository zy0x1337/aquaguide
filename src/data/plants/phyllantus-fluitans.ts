import type { Plant } from '../../types/plant';

export const phyllanthusFluitans: Plant = {
  id: 'plant-red-root-floater',
  slug: 'phyllanthus-fluitans',
  imageUrl: '/images/plants/phyllantus-fluitans.webp',

  imageCredit: {
    photographer: 'Asher Eades',
    sourceUrl: '',
    license: 'Copyright',
    licenseUrl: ''
  },

  gallery: [
  '/images/plants/phyllantus-fluitans2.webp',
  '/images/plants/phyllantus-fluitans3.webp',
  '/images/plants/phyllantus-fluitans4.webp'
],

  difficulty: 'medium',

  funFact: 'Under high light and low nitrate conditions, both the leaves and the dangling root systems turn a vibrant, striking deep red color.',

  taxonomy: {
    scientificName: 'Phyllanthus fluitans',
    commonName: 'Red Root Floater',
    family: 'Phyllanthaceae',
    origin: 'South America (Amazon Region)',
    nativeRegion: 'Stagnant or slow-moving waters of the Amazon basin, including Peru, Ecuador, Colombia, Brazil, and Bolivia.'
  },

  specs: {
    type: 'float',
    heightCM: { min: 1, max: 3 },
    light: 'high',
    co2: 'low',
    growthRate: 'fast',
    placement: ['floating']
  },

  parameters: {
    tempC: { min: 21, max: 28, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 6.5 },
    kh: { min: 0, max: 12 },
    gh: { min: 2, max: 15 },
    flow: 'none',
    photoperiodHours: { min: 8, max: 12 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Propagates rapidly by throwing out runners and daughter plants from the main stalks. Simply separate the offshoots.',
    notes: 'A free-floating surface plant that is highly sensitive to surface agitation. It will melt or rot if water is constantly splashed over its leaves.',
    trimming: 'Remove excess plants weekly to prevent them from completely covering the surface and blocking light to submerged plants.',
    senescenceNotes: 'Old leaves may melt or lose coloration if kept in areas with high humidity/condensation dripping from the aquarium lid.'
  },

  nutrients: {
    nitrogen: 'low',
    phosphate: 'medium',
    potassium: 'high',
    iron: 'high'
  },

  commonProblems: [
    {
      title: 'Melting Leaves',
      desc: 'Leaves rotting, turning brown, or melting away completely.',
      solution: 'Reduce surface agitation. Red root floaters hate wet leaves. Ensure the filter output is baffled and avoid lids that drip condensation directly onto them.'
    },
    {
      title: 'Lack of Red Coloration',
      desc: 'Leaves and roots stay completely green instead of turning red.',
      solution: 'Increase lighting intensity significantly and allow nitrates to drop slightly. High iron fertilization also promotes the red pigmentation.'
    },
    {
      title: 'Slow Growth / Shrinking',
      desc: 'Plant stops reproducing and leaves become very small.',
      solution: 'Add a comprehensive liquid fertilizer. Floating plants draw all nutrients directly from the water column.'
    },
    {
      title: 'Light Burns',
      desc: 'Dry, crispy brown patches on the leaves.',
      solution: 'Move the lighting fixture higher up if the plants are directly touching hot LED boards or bulbs.'
    }
  ],

  proTips: [
    'To achieve the famous deep red coloration, you need strong lighting combined with nutrient limitation (specifically low nitrates) and iron dosing.',
    'Use floating plant rings (made from airline tubing) to keep them away from the filter flow and protect their sensitive tops from getting wet.',
    'Their trailing red root systems provide excellent hiding spots for shrimp and nano fish fry.'
  ],

  commonMistakes: [
    'Placing them in a tank with high surface flow (like hang-on-back filters creating waterfalls).',
    'Using a tight-fitting lid that causes heavy condensation to constantly drip onto the top of the leaves.',
    'Assuming they need CO2 injection to turn red—they do not, as they have unlimited access to atmospheric CO2.'
  ],

  aquascapeContext: {
    styles: ['biotope', 'low_tech', 'nature_aquarium'],
    roleInTank: 'Surface cover, nutrient export, and adding a striking pop of red color to the top layer of the aquascape.',
    companionFish: ['Betta splendens', 'Neocaridina Shrimp', 'Chili Rasbora', 'Sparkling Gourami', 'Pygmy Corydoras'],
    incompatibleFish: ['Mystery Snails (will eat them)', 'Goldfish', 'Large cichlids', 'Silver Dollars'],
    substrateRecommendations: ['No substrate needed – completely free-floating.']
  },

  relatedPlants: [
    'limnobium-laevigatum',
    'salvinia-natans'
  ],

  description: 'The Red Root Floater (Phyllanthus fluitans) is a stunning floating plant native to the Amazon basin. Unlike most floating plants that stay purely green, this unique species develops a brilliant red coloration on both its small round leaves and its hanging root systems when exposed to intense lighting and specific nutrient conditions. It is highly prized in open-top and nano aquariums for its aesthetic appeal. Because it grows on the water surface, it has access to abundant atmospheric CO2, making it an excellent plant for absorbing excess nutrients and controlling algae. However, it requires calm water and is highly susceptible to rot if its fuzzy leaf tops are continuously splashed or submerged.'
};
