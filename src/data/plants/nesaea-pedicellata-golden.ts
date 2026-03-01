import type { Plant } from '../../types/plant';

export const nesaeaPedicellataGolden: Plant = {
  id: 'plant-nesaea-pedicellata-golden',
  slug: 'nesaea-pedicellata-golden',
  imageUrl: '/images/plants/nesaea-pedicellata-golden.jpg',
  imageCredit: {
    photographer: 'Just-One-More-Cast',
    sourceUrl: '',
    license: 'Copyright'
  },
  difficulty: 'advanced',
  funFact: 'Although commonly sold as Nesaea pedicellata, it is now scientifically classified as Ammannia pedicellata. The "Golden" variant is a highly sought-after mutation that displays bright yellow-green to golden leaves contrasting with striking pink/red stems.',
  taxonomy: {
    scientificName: 'Ammannia pedicellata \'Golden\'',
    commonName: 'Golden Nesaea',
    family: 'Lythraceae',
    origin: 'Cultivar (Species native to East Africa)',
    nativeRegion: 'The wild form is native to East Africa where it grows in swamps and marshy areas, but this golden form is a cultivated mutation.'
  },
  specs: {
    type: 'stem',
    heightCM: { min: 15, max: 40 },
    light: 'high',
    co2: 'high',
    growthRate: 'medium',
    placement: ['midground', 'background']
  },
  parameters: {
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 5.5, max: 7.0, ideal: 6.5 },
    kh: { min: 2, max: 10 },
    gh: { min: 2, max: 12 },
    flow: 'medium',
    photoperiodHours: { min: 8, max: 10 }
  },
  planting: {
    substrate: true,
    soilTabs: true,
    liquidFertilizer: true,
    propagation: 'Stem cuttings. Cut the top portion of a healthy stem and replant it directly into the substrate. The lower portion will develop side shoots.',
    notes: 'Requires a nutrient-rich substrate, heavy water column fertilization, and CO2 injection to maintain its golden coloration and prevent lower leaf rot.',
    trimming: 'Trim the top shoots when they reach the surface to maintain a bushy shape. Ensure lower leaves are not heavily shaded to prevent them from dropping.',
    senescenceNotes: 'Lower leaves will quickly blacken and fall off if the plant does not receive enough light or if macro-nutrients (especially nitrates) are depleted.'
  },
  nutrients: {
    nitrogen: 'high',
    phosphate: 'high',
    potassium: 'high',
    iron: 'high'
  },
  variants: ['Ammannia pedicellata', 'Nesaea crassicaulis', 'Ammannia gracilis'],
  commonProblems: [
    {
      title: 'Lower Leaf Loss',
      desc: 'Leaves at the bottom of the stem turn black or transparent and fall off.',
      solution: 'Ensure light reaches the bottom of the stem by not planting too densely. Increase overall lighting intensity and confirm adequate macro-nutrient dosing.'
    },
    {
      title: 'Loss of Golden Coloration',
      desc: 'The plant turns pale green or washed out instead of its signature bright gold/yellow.',
      solution: 'Increase lighting and iron/micronutrient dosing. Ensure CO2 levels are at a stable 20-30 mg/l.'
    },
    {
      title: 'Stunted Growth',
      desc: 'Plant stops growing and the tips appear small or twisted.',
      solution: 'Usually a sign of calcium/magnesium deficiency or insufficient CO2. Check water parameters and ensure adequate fertilization.'
    }
  ],
  proTips: [
    'Plant stems with at least 1-2 inches of space between them so light can penetrate down to the substrate.',
    'Provides a spectacular color contrast when planted next to deep red or dark green plants.',
    'It is an excellent indicator plant for CO2 and nutrient levels; it will quickly show signs of deficiency if your parameters drop.'
  ],
  commonMistakes: [
    'Attempting to grow it in a low-tech setup without CO2 or strong lighting, which almost always leads to melting.',
    'Planting stems too closely together, causing the lower halves to shade out and rot.',
    'Neglecting macro-nutrient (NPK) dosing, assuming only iron is needed for color.'
  ],
  aquascapeContext: {
    styles: ['dutch', 'nature_aquarium'],
    roleInTank: 'Focal point or vibrant midground/background accent to break up green and red plant groupings.',
    companionFish: ['Neon Tetra', 'Harlequin Rasbora', 'Discus', 'Angelfish', 'Corydoras'],
    incompatibleFish: ['Silver Dollars', 'Large Cichlids', 'Goldfish (will eat or uproot the plant)'],
    substrateRecommendations: ['Active Aquarium Soil (ADA Amazonia, Tropica)', 'Nutrient-rich planted tank substrates']
  },
  relatedPlants: [
    'rotala-macrandra',
    'alternanthera-reineckii-mini',
    'myriophyllum-mattogrossense'
  ],
  description: 'Ammannia pedicellata \'Golden\' (often sold as Golden Nesaea) is a rare and striking stem plant known for its bright golden-yellow leaves and contrasting pinkish-red stems. It requires an advanced, high-tech setup with intense lighting, CO2 injection, and a rigorous fertilization schedule to thrive. When conditions are optimal, it provides an unparalleled splash of color, making it an incredible focal piece for Dutch-style or high-tech Nature Aquariums.'
};
