import type { Plant } from '../../types/plant';

export const limnobiumLaevigatum: Plant = {
  id: 'plant-froschbiss',
  slug: 'limnobium-laevigatum',
  imageUrl: '/images/plants/limnobium-laevigatum.jpg',

  imageCredit: {
    photographer: 'johnnykarlsson1 on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/pflanze-blatt-natur-3147756/',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  difficulty: 'easy',

  funFact: 'The underside of Limnobium laevigatum leaves contains spongy tissue (aerenchyma) that acts as natural buoyancy – similar to a float ring.',

  taxonomy: {
    scientificName: 'Limnobium laevigatum',
    commonName: 'South American Frogbit',
    family: 'Hydrocharitaceae',
    origin: 'South America (Amazon Region)',
    nativeRegion: 'Standing and slow-flowing waters of the Amazon basin; predominantly in quiet bays and flooded forest areas'
  },

  specs: {
    type: 'float',
    heightCM: { min: 3, max: 10 },
    light: 'high',
    co2: 'low',
    growthRate: 'very fast',
    placement: ['floating']
  },

  parameters: {
    tempC: { min: 18, max: 30, ideal: 25 },
    ph: { min: 5.5, max: 7.5, ideal: 6.5 },
    kh: { min: 1, max: 12 },
    gh: { min: 2, max: 15 },
    flow: 'none',
    photoperiodHours: { min: 10, max: 14 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Runner daughter plants. Separate offshoots and let them float independently.',
    notes: 'Free-floating surface plant. Maintain distance from lamp (burn risk). Excellent for shading brightly lit tanks and algae control.',
    trimming: 'Remove up to 50% of coverage weekly. Use excess plants as fish food or for other aquariums.',
    senescenceNotes: 'Older leaves sink and yellow – simply remove. New offshoots constantly appear and replace old leaves.'
  },

  nutrients: {
    nitrogen: 'high',
    phosphate: 'high',
    potassium: 'medium',
    iron: 'low'
  },

  commonProblems: [
    {
      title: 'Light Burns',
      desc: 'Leaves show white/brown spots from contact with light source.',
      solution: 'Maintain 10–15 cm distance from lamp. Remove affected leaves. Reduce photoperiod to 8–10 hours.'
    },
    {
      title: 'Overgrowth',
      desc: 'Covers entire surface, blocks light for underwater plants.',
      solution: 'Thin out regularly (weekly). Use excess as fish food. Combine with light-loving plants in depth.'
    },
    {
      title: 'Snail Infestation',
      desc: 'Snails collect on leaf underside.',
      solution: 'Keep away from glass walls. Manual removal. Assassin snails or manual quarantine.'
    },
    {
      title: 'Yellowing Leaves',
      desc: 'Leaves fade and sink.',
      solution: 'Increase light intensity/duration. Add liquid fertilizer. Ensure nutrient-rich water state (fish waste).'
    },
    {
      title: 'Small Leaves',
      desc: 'Tiny leaves, slow spread.',
      solution: 'More light (high intensity). Stable warm temps (24–28 °C). Liquid fertilization.'
    }
  ],

  proTips: [
    'As natural shade provider for labyrinth fish (Betta, Gourami) – they love floating plants.',
    'Hanging roots serve as shelter and spawning ground for fish fry.',
    'In combination with CO₂-injected tanks: Frogbit prevents CO₂ off-gassing at surface.'
  ],

  commonMistakes: [
    'Leaving too close to lamp – causes leaf burns.',
    'Never trimming – overgrows tank and shades everything below.',
    'Using in tanks with strong surface movement – dislikes waves or current.'
  ],

  aquascapeContext: {
    styles: ['biotope', 'jungle', 'low_tech', 'nature_aquarium'],
    roleInTank: 'Surface coverage for natural light filter effect. Protection for fish fry and labyrinth fish surface breathers.',
    companionFish: ['Betta splendens', 'Pearl Gourami', 'Dwarf Gourami', 'Endler', 'Guppy', 'Cherry Shrimp'],
    incompatibleFish: ['Fish that eat floating plants (Goldfish, large barbs)'],
    substrateRecommendations: ['No substrate needed – free-floating']
  },

  relatedPlants: [
    'ceratophyllum-demersum'
  ],

  description: 'Fast-growing floating plant with round, glossy leaves forming a green surface carpet. Excellent algae fighter (nitrate sponge), provides shade for light-shy plants and protection for fry/shrimp. Loves high light – trim weekly to prevent overgrowth. Roots create dramatic hanging effect and serve as spawning substrate.'
};
