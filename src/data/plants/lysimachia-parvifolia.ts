import type { Plant } from '../../types/plant';

export const lysimachiaParvifolia: Plant = {
  id: 'plant-samolus-red',
  slug: 'lysimachia-parvifolia',
  imageUrl: '/images/plants/lysimachia-parvifolia-samolus-red.webp',

  imageCredit: {
    photographer: 'Asher Eades',
    sourceUrl: '',
    license: 'Copyright',
    licenseUrl: ''
  },

  gallery: [
  '/images/plants/lysimachia-parvifolia-samolus-red2.webp'
],

  difficulty: 'medium',

  funFact: 'Although often sold under the name "Samolus parviflorus red", this plant is scientifically Lysimachia parvifolia. It is sometimes affectionately called "Red Baby Spinach" in the aquascaping community due to its unique leaf shape.',

  taxonomy: {
    scientificName: 'Lysimachia parvifolia (syn. Samolus parviflorus Red)',
    commonName: 'Samolus Red',
    family: 'Primulaceae',
    origin: 'Asia',
    nativeRegion: 'Native to limestone-rich river banks and marshy areas in Guangxi Province, South China.'
  },

  specs: {
    type: 'rosette',
    heightCM: { min: 5, max: 15 },
    light: 'medium',
    co2: 'medium',
    growthRate: 'medium',
    placement: ['foreground', 'midground']
  },

  parameters: {
    tempC: { min: 20, max: 28, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    kh: { min: 2, max: 10 },
    gh: { min: 4, max: 12 },
    flow: 'medium',
    photoperiodHours: { min: 8, max: 10 }
  },

  planting: {
    substrate: true,
    soilTabs: true,
    liquidFertilizer: true,
    propagation: 'Propagates through lateral shoots (side shoots) around the base of the rosette. Simply cut them off and replant them.',
    notes: 'Plant the crown slightly above the substrate line to prevent rotting. Tweezers are highly recommended for precise planting of the individual crowns.',
    trimming: 'Remove older, decaying outer leaves to keep the rosette looking tidy and to encourage fresh, vibrant new growth from the center.',
    senescenceNotes: 'Older leaves naturally turn green or pale before dying off. In low-tech setups without CO2, the plant may lose its deep red coloration and revert to a green/pinkish hue.'
  },

  nutrients: {
    nitrogen: 'medium',
    phosphate: 'medium',
    potassium: 'high',
    iron: 'high'
  },

  commonProblems: [
    {
      title: 'Loss of Red Coloration',
      desc: 'The plant turns mostly green or pale pink instead of its signature deep red.',
      solution: 'Increase lighting intensity (aim for ~150 µmol PAR or higher), ensure consistent CO2 injection, and dose iron. It stays greener in low-tech setups.'
    },
    {
      title: 'Crown Rot',
      desc: 'The base of the plant turns mushy and the leaves detach easily.',
      solution: 'Ensure the plant is not buried too deeply. The crown (where the leaves meet the roots) must be slightly exposed above the soil line.'
    },
    {
      title: 'Stunted Growth',
      desc: 'The rosette stays extremely small and produces no new leaves.',
      solution: 'This plant is a heavy root feeder. Add root tabs to the substrate directly beneath the plant if you are using an inert substrate like sand or gravel.'
    }
  ],

  proTips: [
    'Use active aquasoil or root tabs. It is a heavy root feeder and will produce much rounder, fuller leaves when its roots have access to rich nutrients.',
    'It serves as a fantastic transitional plant in the midground to bridge the gap between low green carpeting plants and tall background stem plants.',
    'While it can survive without CO2 injection, CO2 is highly recommended if you want to unlock its intense reddish-brown to pinkish hues.'
  ],

  commonMistakes: [
    'Planting it in heavily shaded areas—it will lose its compact rosette form and stretch upwards (etiolate) seeking light.',
    'Burying the crown completely in the substrate, which almost always leads to rot.',
    'Assuming it will grow fast like typical stem plants. It has a manageable, steady growth rate, which actually makes it easier to maintain in a scape.'
  ],

  aquascapeContext: {
    styles: ['nature_aquarium', 'dutch'],
    roleInTank: 'Midground color accent or focal point. Its distinct leaf shape breaks up the texture of typical grassy or fine-leaved plants.',
    companionFish: ['Tetras', 'Rasboras', 'Otocinclus', 'Amano Shrimp', 'Dwarf Cichlids'],
    incompatibleFish: ['Silver Dollars', 'Large plecos', 'Cichlids that dig and uproot plants'],
    substrateRecommendations: ['Active Soil (e.g., ADA Amazonia)', 'Nutrient-rich planted tank substrates']
  },

  relatedPlants: [
    'alternanthera-reineckii-mini',
    'cryptocoryne-wendtii-red'
  ],

  description: 'Lysimachia parvifolia (often sold under the trade name Samolus parviflorus "Red") is a rare and striking rosette-forming plant native to the limestone rivers of southern China. It is highly prized in aquascaping for its beautiful reddish-pink to deep purple coloration and compact, "baby spinach-like" leaves. Serving excellently as a midground focal point, it provides a unique color and texture contrast against green carpeting plants and taller background stems. While it can survive in moderate setups, unlocking its true potential—intense red hues and a dense, creeping growth habit—requires high lighting, CO2 injection, and a nutrient-rich substrate.'
};
