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
  
  taxonomy: {
    scientificName: 'Myriophyllum mattogrossense',
    commonName: 'Mato Grosso Milfoil',
    family: 'Haloragaceae',
    origin: 'South America'
  },

  specs: {
    type: 'stem',  // ← NEU
    heightCM: { min: 30, max: 60 },
    light: 'high',
    co2: 'high',
    growthRate: 'very fast',
    placement: ['background']
  },

  parameters: {
    tempC: { min: 22, max: 28 },
    ph: { min: 5.5, max: 7.5 }
  },

  planting: {
    substrate: true,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Stem cuttings. Cuttings root in 3-5 days under good conditions.',
    notes: 'Regular trimming essential! Grows 5-10cm per week. Excellent nitrate sponge for high bioload tanks.'
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
      desc: 'Long stems with few leaves and branches.',
      solution: 'Increase CO2 and light. Trim tops regularly to promote bushiness. Add more potassium.'
    },
    {
      title: 'Yellowing Lower Leaves',
      desc: 'Bottom leaves turn yellow and drop off.',
      solution: 'Normal for fast growers. Increase nitrate and iron dosing. Trim regularly.'
    },
    {
      title: 'Stunted Top Growth',
      desc: 'New tops stop growing, older growth fine.',
      solution: 'Increase CO2 saturation. Check potassium and phosphate levels. Improve water flow.'
    }
  ],

  relatedPlants: [
    'hygrophila-polysperma',
    'limnophila-sessiliflora',
    'bacopa-monnieri'
  ],

  description: "The fastest growing stem plant available. Perfect for heavily planted tanks needing quick background coverage. Fine feathery leaves create excellent movement in current and provide contrast to broadleaf plants. Heavy nutrient consumer - excellent for nitrate control in high bioload systems."
};
