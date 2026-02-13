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
  
  taxonomy: {
    scientificName: 'Microsorum pteropus',
    commonName: 'Java Fern',
    family: 'Polypodiaceae',
    origin: 'Southeast Asia'
  },

  specs: {
    type: 'fern',  // ← NEU
    heightCM: { min: 15, max: 30 },
    light: 'low',
    co2: 'low',
    growthRate: 'slow',
    placement: ['midground', 'background', 'epiphyte']
  },

  parameters: {
    tempC: { min: 20, max: 28 },
    ph: { min: 6.0, max: 8.0 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Rhizome division or Adventitious plantlets. Baby plants grow on mature leaf tips.',
    notes: 'Do not bury the rhizome! Attach to wood or rock using superglue or thread. Tolerates very low light.'
  },

  nutrients: {
    nitrogen: 'low',
    phosphate: 'low',
    potassium: 'low',
    iron: 'low'
  },

  commonProblems: [
    {
      title: 'Brown Tips',
      desc: 'Leaf tips turn brown and crispy.',
      solution: 'Trim affected leaves. Check for excess fertilizer salts. Improve water quality with regular changes.'
    },
    {
      title: 'No Rhizome Growth',
      desc: 'Rhizome stays small, no new leaves.',
      solution: 'Increase trace elements. Provide gentle water flow. Ensure rhizome is not touching substrate.'
    },
    {
      title: 'Tearing Leaves',
      desc: 'Leaves develop long tears from tip to base.',
      solution: 'Normal for Java Fern. Strong current causes tears. Reduce flow or position plant in sheltered area.'
    }
  ],

  relatedPlants: [
    'anubias-barteri-var-nana',
    'microsorum-pteropus-windelov',
    'bucephalandra-sp-green'
  ],

  description: "One of the most popular aquarium plants. Java Fern is incredibly hardy, thrives in low light without CO2, and fish rarely eat it due to bitter taste. Unique ruffled leaves create natural flow and texture. Baby plantlets grow on mature leaves. Perfect epiphyte for driftwood and rocks."
};
