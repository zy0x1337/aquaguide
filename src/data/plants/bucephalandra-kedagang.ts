import type { Plant } from '../../types/plant';

export const bucephalandraKedagang: Plant = {
  id: 'plant-bucephalandra-kedagang',
  slug: 'bucephalandra-kedagang',
  imageUrl: 'https://images.unsplash.com/photo-1622313626248-2615e478ce13?auto=format&fit=crop&q=80&w=800',
  imageCredit: {
    photographer: 'Aquascape enthusiasts',
    sourceUrl: 'https://unsplash.com',
    license: 'Unsplash License'
  },
  difficulty: 'easy',
  funFact: 'Bucephalandra species frequently bloom entirely submerged underwater. The "Kedagang" variety is famous for the tiny, iridescent metallic dots covering its dark, wavy leaves.',
  taxonomy: {
    scientificName: 'Bucephalandra sp. \'Kedagang\'',
    commonName: 'Buce Kedagang',
    family: 'Araceae',
    origin: 'Borneo, Indonesia',
    nativeRegion: 'Endemic to the island of Borneo, growing rheophytically on rocks in fast-flowing rainforest streams and cascades.'
  },
  specs: {
    type: 'rhizome',
    heightCM: { min: 3, max: 8 },
    light: 'low',
    co2: 'low',
    growthRate: 'slow',
    placement: ['epiphyte', 'foreground', 'midground']
  },
  parameters: {
    tempC: { min: 20, max: 26, ideal: 23 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    kh: { min: 1, max: 8 },
    gh: { min: 2, max: 10 },
    flow: 'high',
    photoperiodHours: { min: 6, max: 8 }
  },
  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Rhizome division. Cut the rhizome with sharp scissors, ensuring the new piece has at least 3-4 healthy leaves and some roots attached.',
    notes: 'Strictly an epiphyte. The rhizome MUST NOT be buried in the substrate, otherwise it will rot. Attach to wood or stone using superglue gel (cyanoacrylate) or fishing line.',
    trimming: 'Only trim dead or heavily algae-infested leaves near the base. Otherwise, requires almost no trimming due to its slow growth.',
    senescenceNotes: 'Prone to "Buce melt" if water parameters change drastically. The leaves will dissolve, but the rhizome will usually recover and sprout new leaves if left undisturbed.'
  },
  nutrients: {
    nitrogen: 'low',
    phosphate: 'low',
    potassium: 'medium',
    iron: 'medium'
  },
  variants: ['Bucephalandra sp. \'Brownie Ghost\'', 'Bucephalandra sp. \'Wavy Green\'', 'Bucephalandra sp. \'Kedagang Mini\''],
  commonProblems: [
    {
      title: 'Buce Melt',
      desc: 'Leaves become transparent, mushy, and completely disintegrate shortly after being introduced to a new tank.',
      solution: 'This is a stress response to changing water parameters. Do not throw the plant away! As long as the rhizome remains firm and healthy, it will adapt and grow new submerged leaves.'
    },
    {
      title: 'Algae on Leaves',
      desc: 'Black beard algae (BBA) or green spot algae covering the slow-growing leaves.',
      solution: 'Reduce light intensity or duration. Increase CO2 injection if using it. Maintain a clean tank with regular water changes and add algae-eaters like Amano shrimp or Otocinclus. A spot treatment with liquid carbon can also help.'
    },
    {
      title: 'Rhizome Rot',
      desc: 'The thick rhizome becomes squishy, black, and smelly.',
      solution: 'Usually caused by burying the rhizome in soil/sand or poor water circulation. Ensure it is attached to hardscape and placed in an area with good flow.'
    }
  ],
  proTips: [
    'Place in a shaded area of a high-light tank, or use in a low-tech setup, to prevent algae from outcompeting the plant\'s slow growth.',
    'Slightly cooler water (22-24°C) with high oxygenation and good flow mimics their natural stream habitat and promotes the healthiest growth.',
    'Use a flashlight or camera flash to view the leaves closely—you will see beautiful metallic blue, purple, and silver speckles that are hard to spot under standard white aquarium light.'
  ],
  commonMistakes: [
    'Burying the rhizome in the substrate.',
    'Giving up and throwing the plant away during its initial "melt" phase.',
    'Placing it directly under intense light without adequate CO2, leading to an immediate algae outbreak.'
  ],
  aquascapeContext: {
    styles: ['nature_aquarium', 'biotope', 'low_tech', 'iwagumi'],
    roleInTank: 'Detailing epiphyte used to add texture, dark colors, and a sense of age to driftwood and rocks.',
    companionFish: ['Boraras', 'Crystal Red Shrimp', 'Neocaridina Shrimp', 'Otocinclus', 'Hillstream Loaches'],
    incompatibleFish: ['Cichlids', 'Large active fish that might knock them off their mounts'],
    substrateRecommendations: ['Not applicable (epiphyte)', 'Gravel/Sand for aesthetics around the hardscape']
  },
  relatedPlants: [
    'anubias-barteri-var-nana-petite',
    'microsorum-pteropus',
    'bucephalandra-sp-green'
  ],
  description: 'Bucephalandra sp. \'Kedagang\' is one of the most highly sought-after epiphytic plants in the hobby. Hailing from the fast-flowing streams of Borneo, it features narrow, wavy-edged leaves that display a stunning mix of dark green, reddish-brown, and subtle metallic blue/purple iridescent spots. Like Anubias, it is an incredibly hardy, slow-growing plant that thrives when attached to rocks or driftwood. While it can survive in low-tech setups, providing CO2 and good flow will bring out its absolute best colors and encourage frequent underwater blooming.'
};
