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
  
  taxonomy: {
    scientificName: 'Anubias barteri var. nana',
    commonName: 'Dwarf Anubias',
    family: 'Araceae',
    origin: 'West Africa (Cameroon)'
  },

  specs: {
    type: 'rhizome',  // ← NEU
    heightCM: { min: 5, max: 15 },
    light: 'low',
    co2: 'low',
    growthRate: 'slow',
    placement: ['epiphyte', 'foreground', 'midground']
  },

  parameters: {
    tempC: { min: 22, max: 28 },
    ph: { min: 6.0, max: 8.0 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Rhizome division. Divide older rhizomes with at least 2-3 leaves per section.',
    notes: 'Epiphyte plant. Attach to wood or rocks using fishing line or plant glue. Never bury the rhizome in substrate or it will rot.'
  },

  nutrients: {
    nitrogen: 'low',
    phosphate: 'low',
    potassium: 'low',
    iron: 'low'
  },

  commonProblems: [
    {
      title: 'Rhizome Rot',
      desc: 'Leaves turn black and mushy, rhizome becomes soft and decays.',
      solution: 'Ensure rhizome stays above substrate or fully submerged. Improve water circulation. Remove affected sections immediately.'
    },
    {
      title: 'Algae on Leaves',
      desc: 'Green spot algae or brown diatoms accumulate on leaf surfaces.',
      solution: 'Reduce light duration to 6-8 hours. Increase water flow around plant. Manual removal with soft brush or cloth.'
    },
    {
      title: 'Yellow/Brown Leaves',
      desc: 'Older leaves gradually yellow, brown, and die off.',
      solution: 'Normal senescence (leaf turnover). Add liquid all-in-one fertilizer. Maintain stable parameters (22-28°C, pH 6-8).'
    },
    {
      title: 'Stunted Growth',
      desc: 'No visible new growth for weeks or months.',
      solution: 'Add liquid fertilizer (all-in-one or macro mix). Check water parameters. Increase light to 8-10 hours. Ensure adequate water circulation.'
    },
    {
      title: 'Melting Leaves',
      desc: 'Leaves become translucent, mushy, and disintegrate.',
      solution: 'Usually caused by drastic parameter changes. Acclimate slowly. Ensure stable temp (22-28°C) and pH (6-8). Improve oxygenation.'
    }
  ],

  relatedPlants: [
    'anubias-barteri-var-nana-petite',
    'microsorum-pteropus',
    'bucephalandra-sp-green'
  ],

  description: 'The ultimate beginner plant. Anubias nana is nearly indestructible, thrives in low light without CO2, and offers beautiful dark green leaves. Its compact size (5-15 cm) makes it perfect for foreground or midground positioning. Attach to driftwood, rocks, or moss poles using fishing line or aquarium glue. Never plant in substrate. Slow grower but incredibly resilient and long-lived, ideal for beginners and low-tech setups.'
};
