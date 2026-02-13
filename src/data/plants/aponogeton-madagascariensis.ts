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
  
  taxonomy: {
    scientificName: 'Aponogeton madagascariensis',
    commonName: 'Madagascar Lace Plant',
    family: 'Aponogetonaceae',
    origin: 'Madagascar'
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
    tempC: { min: 20, max: 28 },
    ph: { min: 6.0, max: 7.5 }
  },

  planting: {
    substrate: true,
    soilTabs: true,
    liquidFertilizer: true,
    propagation: 'Seeds from floating pod or tuber division. Flowers emerge above water.',
    notes: 'Plant bulb horizontally if orientation unclear. Needs nutrient-rich substrate. Fully aquatic - no emersed growth. Cooler temps (22-24°C) optimal.'
  },

  nutrients: {
    nitrogen: 'medium',
    phosphate: 'medium',
    potassium: 'medium',
    iron: 'high'  // Susceptible to iron deficiency
  },

  commonProblems: [
    {
      title: 'Leaf Melt',
      desc: 'Leaves become transparent and disintegrate after planting.',
      solution: 'Acclimation period. Stabilize parameters. Use nutrient-rich substrate. Be patient - new growth emerges from bulb.'
    },
    {
      title: 'Dormancy Period',
      desc: 'Plant dies back completely after months of growth.',
      solution: 'Natural life cycle. Reduce light/water changes. Bulb will sprout new leaves after 2-6 weeks rest.'
    },
    {
      title: 'Iron Deficiency',
      desc: 'New leaves pale yellow/white between veins.',
      solution: 'Add iron supplement or comprehensive liquid fertilizer. Use chelated iron. Maintain CO2 20-30ppm.'
    },
    {
      title: 'Algae on Lace Leaves',
      desc: 'Green spot algae in lattice structure.',
      solution: 'Increase water flow through leaves. Reduce photoperiod to 8 hours. Excel/gluteraldehyde treatment.'
    },
    {
      title: 'Stunted Growth',
      desc: 'Small leaves, slow development.',
      solution: 'Increase light to medium-high. Add root tabs. CO2 injection essential. Temperature 22-26°C.'
    }
  ],

  relatedPlants: [
    'anubias-barteri-var-nana',
    'cryptocoryne-beckettii',
    'microsorum-pteropus'
  ],

  description: 'The exotic Madagascar Lace Plant with unique lattice-like leaves resembling delicate lacework. Fully aquatic rosette reaching 30-65cm, perfect dramatic background or centerpiece. Requires stable conditions, medium-high light, and CO2. Goes dormant naturally. Nutrient demanding bulb plant from Madagascar\'s flowing rivers.'
};
