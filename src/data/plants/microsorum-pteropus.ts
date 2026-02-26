import type { Plant } from '../../types/plant';

export const microsorumPteropus: Plant = {
  id: 'plant-java-fern',
  slug: 'microsorum-pteropus',

  imageUrl: '/images/plants/microsorum-pteropus.jpg',

  imageCredit: {
    photographer: 'TsunamiCarlos',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Microsorum_pteropus.jpg',
    license: 'Public Domain',
    licenseUrl: 'https://en.wikipedia.org/wiki/Public_domain'
  },

  difficulty: 'easy',

  funFact: 'Java Fern tastes bitter to fish – even herbivorous species like Goldfish usually avoid it. This makes it the perfect choice for tanks with "plant eaters".',

  taxonomy: {
    scientificName: 'Microsorum pteropus',
    commonName: 'Java Fern',
    family: 'Polypodiaceae',
    origin: 'Southeast Asia',
    nativeRegion: 'Rivers and streams in Malaysia, Thailand, Indonesia, and the Philippines; grows on stones and driftwood in fast-flowing, oxygen-rich water'
  },

  specs: {
    type: 'fern',
    heightCM: { min: 15, max: 30 },
    light: 'low',
    co2: 'low',
    growthRate: 'slow',
    placement: ['midground', 'background', 'epiphyte']
  },

  parameters: {
    tempC: { min: 20, max: 28, ideal: 24 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    kh: { min: 2, max: 15 },
    gh: { min: 3, max: 18 },
    flow: 'medium',
    photoperiodHours: { min: 6, max: 10 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Rhizome division or adventitious plantlets. Baby plants grow on tips of mature leaves – simply wait until they are 2–3 cm large, then separate.',
    notes: 'Do NOT bury the rhizome! Attach to wood or stone with super glue or thread. Tolerates very low light.',
    trimming: 'Cut old or plantlet-occupied leaves at stem. Small young plants can be detached and newly attached.',
    senescenceNotes: 'Older leaves dark to blackish-brown – as long as rhizome is green and firm, plant is healthy.'
  },

  nutrients: {
    nitrogen: 'low',
    phosphate: 'low',
    potassium: 'low',
    iron: 'low'
  },

  variants: ['Microsorum pteropus (Standard)', 'Microsorum pteropus \'Windelov\'', 'Microsorum pteropus \'Trident\'', 'Microsorum pteropus \'Narrow Leaf\'', 'Microsorum pteropus \'Needle Leaf\''],

  commonProblems: [
    {
      title: 'Brown Leaf Tips',
      desc: 'Leaf tips turn brown and dry.',
      solution: 'Trim affected leaves. Check for excess fertilizer salts. Improve water quality through regular water changes.'
    },
    {
      title: 'No Rhizome Growth',
      desc: 'Rhizome remains small, no new leaves.',
      solution: 'Increase trace elements. Ensure gentle water movement. Ensure rhizome does not touch substrate.'
    },
    {
      title: 'Torn Leaves',
      desc: 'Leaves develop long tears from tip to base.',
      solution: 'Normal for Java Fern. Strong current causes tears. Reduce current or place plant in sheltered position.'
    }
  ],

  proTips: [
    'Let adventitious plantlets on leaves simply grow – plant reproduces itself.',
    'Close combination with Anubias on driftwood creates natural "tree trunk" effect.',
    'Under stronger light (low-medium) leaves grow larger and more vibrant green.'
  ],

  commonMistakes: [
    'Burying rhizome – it rots within a few weeks.',
    'Too strong current directly on plant – tears leaves.',
    'Removing adventitious plants too early – only detach at 2–3 cm size.'
  ],

  aquascapeContext: {
    styles: ['nature_aquarium', 'biotope', 'jungle', 'low_tech'],
    roleInTank: 'Midground epiphyte on driftwood or stones. Gives scape texture and depth through feathered leaves.',
    companionFish: ['Neon Tetra', 'Corydoras', 'Otocinclus', 'Cherry Shrimp', 'Amano Shrimp', 'Betta', 'Goldfish (tolerates)'],
    incompatibleFish: ['Large herbivorous Cichlids', 'Buenos Aires Tetra (potentially)'],
    substrateRecommendations: ['Gravel (2–3 mm)', 'Sand', 'Bare stones and driftwood – no substrate needed']
  },

  relatedPlants: [
    'anubias-barteri-var-nana',
    'microsorum-pteropus-windelov',
    'bucephalandra-sp-green'
  ],

  description: 'One of the most popular aquarium plants worldwide. Java Fern is exceptionally robust, thrives in low light without CO₂, and fish rarely eat it due to bitter taste. The unique wavy leaves create natural movement and texture. Young plants grow on leaf tips. Perfect epiphyte for driftwood and stones.'
};
