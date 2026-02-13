import type { Plant } from '../../types/plant';

export const bacopaMonnieri: Plant = {
  id: 'plant-bacopa-monnieri',
  slug: 'bacopa-monnieri',
  
  imageUrl: '/images/plants/bacopa-monnieri.jpg',
  imageCredit: {
    photographer: 'Izabela1958',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bacopa_monnieri_aquarium_plant.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },

  difficulty: 'easy',
  
  taxonomy: {
    scientificName: 'Bacopa monnieri',
    commonName: 'Bacopa Monnieri',
    family: 'Plantaginaceae',
    origin: 'Asia, cosmopolitan aquarium plant'
  },

  specs: {
    heightCM: { min: 20, max: 50 },
    type: 'stem',
    light: 'medium',  // corrected from 'high'
    co2: 'low',       // corrected from 'medium'
    growthRate: 'medium',
    placement: ['midground', 'background']
  },

  parameters: {
    tempC: { min: 20, max: 27 },
    ph: { min: 6.3, max: 8.8 }
  },

  planting: {
    substrate: true,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Stem cuttings. Cut 5-10cm tops, strip lower leaves, replant directly into substrate.',
    notes: 'Regular trimming prevents leggy growth. Pinch tops to encourage bushiness. Roots easily from cuttings.'
  },

  nutrients: {
    nitrogen: 'medium',
    phosphate: 'medium',
    potassium: 'medium',
    iron: 'medium'
  },

  commonProblems: [
    {
      title: 'Leggy Growth',
      desc: 'Long internodes, few leaves, sparse appearance.',
      solution: 'Increase light intensity. Trim tops regularly. Provide more potassium and nitrogen.'
    },
    {
      title: 'Yellow Leaves',
      desc: 'Lower leaves turn yellow and drop.',
      solution: 'Add liquid fertilizer (NPK + traces). Check iron deficiency. Improve CO2 if using injected.'
    },
    {
      title: 'Leaf Size Too Small',
      desc: 'New leaves tiny compared to mature plant.',
      solution: 'Increase light to medium-high. Add micronutrients. Ensure stable CO2 levels.'
    },
    {
      title: 'Melting After Planting',
      desc: 'Lower leaves melt after planting in new tank.',
      solution: 'Normal adaptation. Trim melted parts. Wait 1-2 weeks for new growth. Avoid parameter swings.'
    }
  ],

  relatedPlants: [
    'hygrophila-polysperma',
    'hygrophila-corymbosa-siamensis',
    'limnophila-sessiliflora'
  ],

  description: 'Bacopa monnieri is a classic easy stem plant perfect for beginners. Grows 20-50cm tall with bright green oval leaves. Medium growth rate tolerates wide parameters (20-27C, pH 6.3-8.8). Thrives in medium light without CO2 injection. Regular trimming creates bushy appearance. Excellent background/midground plant that roots easily from cuttings. Develops stronger color under good lighting.'
};
