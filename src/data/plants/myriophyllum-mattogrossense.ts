import type { Plant } from '../../types/plant';

export const myriophyllumMattogrossense: Plant = {
  id: 'plant-mato-grosso',
  slug: 'myriophyllum-mattogrossense',

  imageUrl: '/images/plants/myriophyllum-matogrossense.jpg',

  imageCredit: {
    photographer: 'TsunamiCarlos',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Myriophyllum_matogrossense.jpg',
    license: 'Public Domain',
    licenseUrl: 'https://en.wikipedia.org/wiki/Public_domain'
  },

  difficulty: 'medium',

  funFact: 'Myriophyllum mattogrossense can grow up to 10 cm per week under optimal conditions – making it one of the fastest aquarium plants ever.',

  taxonomy: {
    scientificName: 'Myriophyllum mattogrossense',
    commonName: 'Mato Grosso Milfoil',
    family: 'Haloragaceae',
    origin: 'South America',
    nativeRegion: 'Lakes, rivers, and swamps in Mato Grosso state (Brazil); often grows in open, well-lit shallow water areas'
  },

  specs: {
    type: 'stem',
    heightCM: { min: 30, max: 60 },
    light: 'high',
    co2: 'high',
    growthRate: 'very fast',
    placement: ['background']
  },

  parameters: {
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 5.5, max: 7.5, ideal: 6.8 },
    kh: { min: 1, max: 10 },
    gh: { min: 2, max: 15 },
    flow: 'medium',
    photoperiodHours: { min: 9, max: 12 }
  },

  planting: {
    substrate: true,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Cuttings. Root under good conditions in 3–5 days.',
    notes: 'Regular trimming essential! Grows 5–10 cm per week. Excellent nitrate sponge for heavily stocked tanks.',
    trimming: 'Trim tops by 1/3 to 1/2 every 1–2 weeks. Replant cut sections directly for immediate densification. Promote side shoots by trimming.',
    senescenceNotes: 'Lower leaves yellow and fall on fast-growing stems – normal process. Keep replenishing by replanting cuttings.'
  },

  nutrients: {
    nitrogen: 'high',
    phosphate: 'high',
    potassium: 'high',
    iron: 'high'
  },

  commonProblems: [
    {
      title: 'Leggy Growth',
      desc: 'Long stems with few leaves and side shoots.',
      solution: 'Increase CO₂ and light. Trim tops regularly to promote bushiness. Add more potassium.'
    },
    {
      title: 'Yellowing Lower Leaves',
      desc: 'Lower leaves turn yellow and fall off.',
      solution: 'Normal for fast growers. Increase nitrate and iron fertilization. Trim regularly.'
    },
    {
      title: 'Stunted Tip Growth',
      desc: 'New tops stop growing, older growth fine.',
      solution: 'Increase CO₂ saturation. Check potassium and phosphate levels. Improve water flow.'
    }
  ],

  proTips: [
    'Plant clusters of 5–7 stems close together for immediately lush effect.',
    'Set CO₂ injection to 25–30 ppm – makes the biggest growth difference.',
    'As background filler in high-tech setups, unbeatable fast and lush.'
  ],

  commonMistakes: [
    'Using without CO₂ – grows thin and quickly loses lower leaves.',
    'Trimming too infrequently – becomes "leggy" and shades other plants.',
    'Too few nutrients – high consumer requiring regular complete fertilization.'
  ],

  aquascapeContext: {
    styles: ['nature_aquarium', 'dutch', 'jungle'],
    roleInTank: 'Fast background filler for high-tech setups. Creates depth and movement through feathery leaves. Contrast to broad-leaved foreground plants.',
    companionFish: ['Cardinal Tetra', 'Rummy Nose Tetra', 'Altum Angelfish', 'Discus', 'SAE (Siamese Algae Eater)'],
    incompatibleFish: ['Goldfish', 'Buenos Aires Tetra', 'Large Barbs'],
    substrateRecommendations: ['ADA Aqua Soil Amazonia', 'Tropica Soil', 'Power Sand + Aqua Soil (Layered)']
  },

  relatedPlants: [
    'hygrophila-polysperma',
    'limnophila-sessiliflora',
    'bacopa-monnieri'
  ],

  description: 'The fastest-growing stem plant ever. Perfect for densely planted tanks needing quick background coverage. Fine, feathery leaves create excellent movement in current flow and provide contrast to broad-leaved plants. Heavy nutrient consumer – excellent for nitrate control in heavily stocked tanks.'
};
