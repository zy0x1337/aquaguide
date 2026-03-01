import type { Plant } from '../../types/plant';

export const rotalaSingaporeBloodRed: Plant = {
  id: 'plant-rotala-singapore-blood-red',
  slug: 'rotala-singapore-blood-red',
  imageUrl: 'https://images.unsplash.com/photo-1622313626248-2615e478ce13?auto=format&fit=crop&q=80&w=800',
  imageCredit: {
    photographer: 'Aquascape enthusiasts',
    sourceUrl: 'https://unsplash.com',
    license: 'Unsplash License'
  },
  difficulty: 'medium',
  funFact: 'Rotala "Blood Red Singapore" is widely considered the easiest Rotala variant to achieve a true, deep blood-red coloration without requiring extreme nitrate limitation.',
  taxonomy: {
    scientificName: 'Rotala rotundifolia \'Singapore Blood Red\'',
    commonName: 'Blood Red Rotala SG',
    family: 'Lythraceae',
    origin: 'Cultivar (Singapore)',
    nativeRegion: 'A specific cultivated variety originating from farms in Singapore, derived from the highly variable Rotala rotundifolia species complex.'
  },
  specs: {
    type: 'stem',
    heightCM: { min: 15, max: 50 },
    light: 'high',
    co2: 'medium',
    growthRate: 'fast',
    placement: ['midground', 'background']
  },
  parameters: {
    tempC: { min: 20, max: 28, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    kh: { min: 2, max: 12 },
    gh: { min: 4, max: 15 },
    flow: 'medium',
    photoperiodHours: { min: 8, max: 10 }
  },
  planting: {
    substrate: true,
    soilTabs: true,
    liquidFertilizer: true,
    propagation: 'Take cuttings of the top shoots (10-15cm) and replant them. The remaining bottom stems will quickly shoot out multiple new branches, creating a bushier look.',
    notes: 'Can be grown without CO2, but will not achieve its maximum growth rate or the deepest red coloration. Iron supplementation is highly recommended.',
    trimming: 'Responds excellently to heavy trimming. Cut horizontally across a bush to encourage dense, multi-stem regrowth below the cut line.',
    senescenceNotes: 'If the plant becomes too dense, the lower stems may lose their leaves due to lack of light. Periodic replanting of the tops and removing old bottoms is recommended.'
  },
  nutrients: {
    nitrogen: 'medium',
    phosphate: 'medium',
    potassium: 'high',
    iron: 'high'
  },
  variants: ['Rotala rotundifolia \'H\'Ra\'', 'Rotala rotundifolia \'Colorata\'', 'Rotala macrandra'],
  commonProblems: [
    {
      title: 'Green or Pale Leaves',
      desc: 'The plant fails to turn red and stays mostly green or pale yellow.',
      solution: 'Increase light intensity. While it colors up easier than other Rotalas, it still needs high light and good iron dosing for deep red hues. Mild nitrate limitation can also force redder colors.'
    },
    {
      title: 'Leggy Growth',
      desc: 'Large gaps between leaf nodes on the stem.',
      solution: 'Indicates insufficient lighting. Increase light intensity or duration to encourage compact growth.'
    },
    {
      title: 'Lower Leaf Drop',
      desc: 'The bottom portions of the stems become bare and look unsightly.',
      solution: 'The bushes are too dense, blocking light to the bottom. Thin out the bush or top-and-replant the stems to refresh them.'
    }
  ],
  proTips: [
    'To create a stunning red bush, plant 2-3 stems per hole, space them slightly apart, and trim them repeatedly as they grow to multiply the shoot count.',
    'Slightly limiting nitrates (to around 5-10 ppm) while keeping phosphate and iron high will trigger the most intense blood-red coloration.',
    'It provides incredible contrast when placed directly behind bright green plants like Micranthemum Monte Carlo or light green Cryptocorynes.'
  ],
  commonMistakes: [
    'Making sudden, drastic changes to water parameters, which can cause the plant to temporarily melt or stunt.',
    'Failing to trim the plant, resulting in long, stringy stems rather than a dense, beautiful bush.',
    'Assuming high iron alone will turn it red without providing adequate high-intensity lighting.'
  ],
  aquascapeContext: {
    styles: ['nature_aquarium', 'dutch', 'high_tech'],
    roleInTank: 'Background bush or midground focal point meant to provide a vibrant, deep red splash of color.',
    companionFish: ['Ember Tetra', 'Celestial Pearl Danio', 'Chili Rasbora', 'Amano Shrimp', 'Oto cats'],
    incompatibleFish: ['Cichlids that dig', 'Large plecos that might uproot delicate stems'],
    substrateRecommendations: ['Aquarium Soil (ADA Amazonia, Tropica, etc.)', 'Fine gravel enriched with root tabs']
  },
  relatedPlants: [
    'rotala-macrandra',
    'ludwigia-palustris-super-red',
    'alternanthera-reineckii-mini'
  ],
  description: 'Rotala rotundifolia \'Singapore Blood Red\' is highly prized in the aquascaping community as one of the most reliable and intense red stem plants available. While many Rotala species require extreme conditions to show their best colors, the Singapore Blood Red variant achieves a stunning, deep red hue much more easily under high light and good fertilization. Its rapid growth and excellent response to trimming make it perfect for creating dense, vibrant background bushes in both Nature and Dutch style aquariums.'
};
