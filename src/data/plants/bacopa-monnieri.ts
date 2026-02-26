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

  funFact: 'Bacopa monnieri has been used in Ayurvedic medicine for thousands of years as a memory and concentration aid – in aquariums it is mainly known as a robust background plant.',

  taxonomy: {
    scientificName: 'Bacopa monnieri',
    commonName: 'Bacopa Monnieri',
    family: 'Plantaginaceae',
    origin: 'Asia, cosmopolitan aquarium plant',
    nativeRegion: 'Tropical-subtropical wetlands in South and Southeast Asia; grows in shallow shore zones of standing and slow-flowing waters'
  },

  specs: {
    heightCM: { min: 20, max: 50 },
    type: 'stem',
    light: 'medium',
    co2: 'low',
    growthRate: 'medium',
    placement: ['midground', 'background']
  },

  parameters: {
    tempC: { min: 20, max: 27, ideal: 24 },
    ph: { min: 6.3, max: 8.8, ideal: 7.2 },
    kh: { min: 2, max: 20 },
    gh: { min: 3, max: 20 },
    flow: 'low',
    photoperiodHours: { min: 8, max: 12 }
  },

  planting: {
    substrate: true,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Cuttings. Cut tops 5–10 cm long, remove lower leaves, insert directly into substrate.',
    notes: 'Regular trimming prevents leggy growth. Pinching tops promotes bushy growth. Roots easily from cuttings.',
    trimming: 'Trim tops by 1/3 every 2–3 weeks. Replant cut tops directly. For dense bushiness, place cuttings close together.',
    senescenceNotes: 'Lower leaves yellow and fall off over time – this is normal. Regular trimming and replanting maintains bushy appearance.'
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
      desc: 'Long internodes, few leaves, thin appearance.',
      solution: 'Increase light intensity. Trim tops regularly. Add more potassium and nitrogen.'
    },
    {
      title: 'Yellow Leaves',
      desc: 'Lower leaves turn yellow and fall off.',
      solution: 'Add liquid fertilizer (NPK + trace elements). Check for iron deficiency. Improve CO₂ if injected.'
    },
    {
      title: 'Small Leaf Size',
      desc: 'New leaves significantly smaller than mature plant.',
      solution: 'Increase light to medium-high. Add micronutrients. Ensure stable CO₂ levels.'
    },
    {
      title: 'Melting After Planting',
      desc: 'Lower leaves melt after insertion into new tank.',
      solution: 'Normal acclimation. Trim melted parts. Wait 1–2 weeks for new growth. Avoid parameter fluctuations.'
    }
  ],

  proTips: [
    'Plant cuttings close together (1–2 cm spacing) for immediate bushy effect.',
    'Under higher light, Bacopa develops slightly reddish stems and more intense green.',
    'Ideal as "learning plant" for cutting technique – forgives mistakes easily.'
  ],

  commonMistakes: [
    'Never trimming – leads to long, bare stems.',
    'Too little light – plant becomes leggy and loses lower leaves quickly.',
    'Planting single stems instead of clusters – looks thin and unnatural in aquascape.'
  ],

  aquascapeContext: {
    styles: ['dutch', 'nature_aquarium', 'jungle', 'low_tech', 'biotope'],
    roleInTank: 'Classic midground to background plant. In Dutch style as color contrast strip, in Nature Aquarium as natural background finish.',
    companionFish: ['Neon Tetra', 'Cardinal Tetra', 'Harlequin Rasbora', 'Corydoras', 'Guppies', 'Platy'],
    incompatibleFish: ['Goldfish', 'Buenos Aires Tetra', 'Silver Dollar'],
    substrateRecommendations: ['ADA Aqua Soil', 'Tropica Soil', 'Nutrient soil with gravel cover', 'Fine gravel (2–3 mm)']
  },

  relatedPlants: [
    'hygrophila-polysperma',
    'hygrophila-corymbosa-siamensis',
    'limnophila-sessiliflora'
  ],

  description: 'Bacopa monnieri is a classic, easy stem plant perfect for beginners. Grows 20–50 cm tall with light green, oval leaves. Medium growth rate, tolerates wide parameters (20–27 °C, pH 6.3–8.8). Thrives under medium light without CO₂ injection. Regular trimming creates bushy appearance. Excellent background/midground plant that propagates easily from cuttings.'
};
