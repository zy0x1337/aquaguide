import type { Plant } from '../../types/plant';

export const anubiasBarteriNana: Plant = {
  id: 'plant-anubias-barteri-nana',
  slug: 'anubias-barteri-var-nana',
  imageUrl: '/images/plants/anubias-barteri-nana.jpg',

  imageCredit: {
    photographer: 'Abhik.Mazumdar.73',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anubias_barteri_var._nana.jpg',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/'
  },

  difficulty: 'easy',

  funFact: 'Anubias grows so slowly that algae settle on the leaves more easily than on other plants – a sure sign that there is too little water movement.',

  taxonomy: {
    scientificName: 'Anubias barteri var. nana',
    commonName: 'Dwarf Anubias',
    family: 'Araceae',
    origin: 'West Africa (Cameroon)',
    nativeRegion: 'Flowing and standing waters in Cameroon and Nigeria; prefers shaded shore sections with strong currents'
  },

  specs: {
    type: 'rhizome',
    heightCM: { min: 5, max: 15 },
    light: 'low',
    co2: 'low',
    growthRate: 'slow',
    placement: ['epiphyte', 'foreground', 'midground']
  },

  parameters: {
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    kh: { min: 2, max: 15 },
    gh: { min: 3, max: 20 },
    flow: 'low',
    photoperiodHours: { min: 6, max: 10 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Rhizome division. Divide older rhizomes with at least 2–3 leaves per section. Attach to wood or stone with fishing line or plant glue.',
    notes: 'Epiphyte! Never bury the rhizome in substrate – it will rot. Attach to wood or stone.',
    trimming: 'Cut old, yellowed, or algae-covered leaves directly at the stem. Do not trim the rhizome unless for propagation.',
    senescenceNotes: 'Very long-lived. Individual leaves live for months to years. Natural leaf shedding is normal; as long as new leaves are growing, the plant is healthy.'
  },

  nutrients: {
    nitrogen: 'low',
    phosphate: 'low',
    potassium: 'low',
    iron: 'low'
  },

  variants: ['Anubias barteri var. nana', 'Anubias barteri var. nana \'Petite\'', 'Anubias barteri var. nana \'Golden\'', 'Anubias barteri var. nana \'Marble\''],

  commonProblems: [
    {
      title: 'Rhizome Rot',
      desc: 'Leaves turn black and mushy, rhizome becomes soft and decomposes.',
      solution: 'Keep rhizome above substrate or completely free in water. Improve water circulation. Remove affected sections immediately.'
    },
    {
      title: 'Algae on Leaves',
      desc: 'Green spot algae or brown diatoms settle on the slow-growing leaves.',
      solution: 'Reduce lighting duration to 6–8 hours. Increase water flow around the plant. Manual removal with soft cloth or brush.'
    },
    {
      title: 'Yellow / Brown Leaves',
      desc: 'Older leaves gradually turn yellow, brown, and die off.',
      solution: 'Normal leaf turnover. Add liquid fertilizer (all-in-one). Maintain stable parameters (22–28 °C, pH 6–8).'
    },
    {
      title: 'Stunted Growth',
      desc: 'No visible growth for weeks or months.',
      solution: 'Add liquid fertilizer (all-in-one or macro mix). Check water parameters. Increase lighting to 8–10 hours. Ensure adequate water circulation.'
    },
    {
      title: 'Melting Leaves',
      desc: 'Leaves become transparent, mushy, and dissolve.',
      solution: 'Usually caused by drastic parameter changes. Acclimate slowly. Ensure stable temperature (22–28 °C) and pH (6–8). Improve oxygen supply.'
    }
  ],

  proTips: [
    'Attach with super glue gel (cyanoacrylate) directly on dry wood – holds in seconds.',
    'Place under shadier conditions than other plants to minimize algae on leaves.',
    'Shrimp love Anubias – they eat biofilm and algae off the leaves.',
    'Weekly addition of liquid iron fertilizer keeps leaves dark green.'
  ],

  commonMistakes: [
    'Burying rhizome in substrate – inevitably leads to rot.',
    'Using too bright light – promotes algae on the slow-growing leaves.',
    'Being too impatient – Anubias often needs 4–6 weeks to root in.'
  ],

  aquascapeContext: {
    styles: ['nature_aquarium', 'low_tech', 'biotope', 'jungle'],
    roleInTank: 'Midground accent plant or epiphyte on driftwood and stones. Ideal for structuring the midground.',
    companionFish: ['Neon Tetra', 'Cardinal Tetra', 'Ember Tetra', 'Cherry Shrimp', 'Amano Shrimp', 'Corydoras', 'Otocinclus'],
    incompatibleFish: ['Goldfish', 'Buenos Aires Tetra', 'Silver Dollar', 'Large Cichlids'],
    substrateRecommendations: ['Gravel (2–3 mm)', 'ADA Aqua Soil (for companion plants)', 'Lava rock / clay balls as attachment medium']
  },

  relatedPlants: [
    'anubias-barteri-var-nana-petite',
    'microsorum-pteropus',
    'bucephalandra-sp-green'
  ],

  description: 'The ultimate beginner plant. Anubias nana is nearly indestructible, thrives in low light without CO₂, and offers beautiful dark green leaves. Its compact size (5–15 cm) makes it perfect for foreground or midground positioning. Attach to driftwood, rocks, or moss poles using fishing line or aquarium glue. Never plant in substrate. Slow grower but incredibly resilient and long-lived, ideal for beginners and low-tech setups.'
};
