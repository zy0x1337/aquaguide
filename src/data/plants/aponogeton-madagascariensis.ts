import type { Plant } from '../../types/plant';

export const aponogetonMadagascariensis: Plant = {
  id: 'plant-aponogeton-madagascariensis',
  slug: 'aponogeton-madagascariensis',
  imageUrl: '/images/plants/aponogeton-madagascariensis.jpg',

  imageCredit: {
    photographer: 'Laila_ on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/aponogeton-madagascariensis-3056806/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  difficulty: 'medium',

  funFact: 'The "lace leaf" of Aponogeton madagascariensis consists almost entirely of leaf veins – the leaf tissue in between is completely absent. This lacework is unique in the plant kingdom.',

  taxonomy: {
    scientificName: 'Aponogeton madagascariensis',
    commonName: 'Madagascar Lace Plant',
    family: 'Aponogetonaceae',
    origin: 'Madagascar',
    nativeRegion: 'Fast-flowing rivers and streams in the highlands of Madagascar; prefers cool, oxygen-rich, slightly acidic water'
  },

  specs: {
    type: 'rosette',
    heightCM: { min: 30, max: 65 },
    light: 'medium',
    co2: 'medium',
    growthRate: 'medium',
    placement: ['background']
  },

  parameters: {
    tempC: { min: 20, max: 28, ideal: 23 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    kh: { min: 1, max: 8 },
    gh: { min: 2, max: 12 },
    flow: 'medium',
    photoperiodHours: { min: 8, max: 10 }
  },

  planting: {
    substrate: true,
    soilTabs: true,
    liquidFertilizer: true,
    propagation: 'Seeds from floating pod or bulb division. Flowers emerge above the water surface.',
    notes: 'Plant bulb horizontally if orientation is unclear. Requires nutrient-rich substrate. Completely aquatic – no emersed growth. Cooler temperatures (22–24 °C) are optimal.',
    trimming: 'Remove old or algae-covered leaves directly at the leaf base. Cut off flower stalk after blooming if it bears no seeds.',
    senescenceNotes: 'Goes into natural dormancy after several months of growth: leaves retract completely. Leave bulb in substrate – new leaves appear after 2–8 weeks.'
  },

  nutrients: {
    nitrogen: 'medium',
    phosphate: 'medium',
    potassium: 'medium',
    iron: 'high'
  },

  commonProblems: [
    {
      title: 'Leaf Melting',
      desc: 'Leaves become transparent and disintegrate after planting.',
      solution: 'Acclimation phase. Stabilize parameters. Use nutrient-rich substrate. Patience – new growth comes from bulb.'
    },
    {
      title: 'Dormancy Phase',
      desc: 'Plant retracts completely after months.',
      solution: 'Natural life cycle. Reduce light and water changes. Bulb will sprout again after 2–8 weeks of rest.'
    },
    {
      title: 'Iron Deficiency',
      desc: 'New leaves pale yellow/white between leaf veins.',
      solution: 'Add iron fertilizer or comprehensive liquid fertilizer. Use chelated iron. Maintain CO₂ at 20–30 ppm.'
    },
    {
      title: 'Algae in Lattice',
      desc: 'Green spot algae in leaf mesh.',
      solution: 'Increase water flow through leaves. Reduce photoperiod to 8 hours. Spot treatment with glutaraldehyde.'
    },
    {
      title: 'Stunted Growth',
      desc: 'Small leaves, slow development.',
      solution: 'Increase light to medium-high. Add root tabs. CO₂ injection essential. Temperature 22–26 °C.'
    }
  ],

  proTips: [
    'Never bury bulb completely – upper part must remain free.',
    'Combination with light CO₂ injection (15–20 ppm) is often sufficient.',
    'During dormancy, store bulb at 18–20 °C to accelerate dormancy.'
  ],

  commonMistakes: [
    'Burying bulb too deep – upper part must be exposed.',
    'Interpreting dormancy as death and discarding bulb.',
    'Permanently too warm water – likes it cooler than most tropical plants.'
  ],

  aquascapeContext: {
    styles: ['nature_aquarium', 'biotope', 'dutch'],
    roleInTank: 'Dramatic soloist in background. The lattice leaf is a real eye-catcher and conversation starter in the aquarium.',
    companionFish: ['Neon Tetra', 'Cardinal Tetra', 'Rummy Nose Tetra', 'Small Corydoras', 'Amano Shrimp'],
    incompatibleFish: ['Goldfish', 'Large Cichlids', 'Buenos Aires Tetra'],
    substrateRecommendations: ['ADA Aqua Soil Amazonia', 'JBL AquaBasis', 'Nutrient soil under fine gravel']
  },

  relatedPlants: [
    'anubias-barteri-var-nana',
    'cryptocoryne-beckettii',
    'microsorum-pteropus'
  ],

  description: 'The exotic Madagascar lace plant with unique lattice-like leaves resembling fine lacework. Completely aquatic rosette plant reaching 30–65 cm – perfect dramatic background or centerpiece. Requires stable conditions, medium-high light, and CO₂. Goes naturally into dormancy. Nutrient-demanding bulb plant from Madagascar\'s flowing rivers.'
};
