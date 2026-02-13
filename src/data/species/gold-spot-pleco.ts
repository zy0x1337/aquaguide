import type { Species } from '../../types/species';

export const goldSpotPleco: Species = {
  id: 'species-gold-spot-pleco',
  slug: 'gold-spot-pleco',
  imageUrl: '/images/species/gold-spot-pleco.jpg',
  funFact: "L001 Gold Spot Pleco - legendary algae eater that grows into a 40cm tank boss but stays peaceful with large tankmates.",

  imageCredit: {
    photographer: 'Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/glyptoperichthys-joselimaianus-1598398/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  taxonomy: {
    scientificName: 'Glyptoperichthys joselimaianus',
    commonName: 'Gold Spot Pleco (L001, L022)',
    family: 'Loricariidae',
    origin: 'Tocantins River basin, Brazil',
    region: 'South America',
    biotope: 'Fast-flowing rivers with rocky substrates and vegetation',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 40,
    color: 'dark brown with gold spots',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 400, // 150cm+ tank for single adult
    tempC: { min: 24, max: 29, ideal: 26 },
    ph: { min: 6.5, max: 8.0, ideal: 7.2 },
    gh: { min: 3, max: 10 },
    flow: 'moderate',
    substrate: 'sand or fine gravel',
  },

  habitat: {
    planting: 'sparse',
    plantingNotes: 'Robust plants only (Anubias, Java fern on driftwood). Will uproot loose plants while foraging.',
    hardscape: ['Driftwood caves', 'Flat rocks', 'PVC tubes', 'Bogwood structures'],
  },

  behavior: {
    tags: [
      'algae_eater', 
      'nocturnal', 
      'peaceful', 
      'bottom_dweller'
    ],
    minGroupSize: 1, // Single unless 800L+ with barriers
    description: 'Large, peaceful nocturnal pleco. Excellent algae controller but produces massive waste. Very hardy community pleco for large tanks.',
    compatibility: {
      goodMates: [
        'Large Cichlids (Oscar, Severum)', 
        'Plecos (other large species)', 
        'Giant Danios', 
        'Large Catfish (Pimelodidae 15cm+)'
      ],
      badMates: [
        'Small fish/shrimp (eaten)', 
        'Same species (territorial)', 
        'Small tanks'
      ],
      notes: 'Peaceful with large tankmates. Territorial with conspecifics/other Loricariids. Needs 400L+ solo or 800L+ multiples.',
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'high',
    cost: 'medium',
    specialRequirements: [
      'Heavy filtration (4x turnover minimum)', 
      'Driftwood essential', 
      'Weekly 30-50% water changes'
    ],
    proTips: [
      "Primary algae eater - supplement with wood, zucchini, algae wafers.",
      "Loves strong filtration and oxygen-rich water.",
      "Outgrows most tanks - plan for 150cm+ setup.",
      "Very long-lived (15+ years) with good care."
    ],
    commonMistakes: [
      "Too small tank → Stunted growth, health issues.",
      "No driftwood → Starvation/death.",
      "Weak filtration → Ammonia/nitrate poisoning.",
      "Competing plecos → Starvation fights."
    ],
  },

  health: {
    lifespanYears: 15,
    commonDiseases: ['Bloat', 'Ich', 'Fin rot'],
    sensitivities: ['Poor water quality', 'No driftwood', 'High nitrates'],
  },

  scientificContext: {
    wildHabitat: "Tocantins River basin. Fast-flowing rocky rivers with seasonal flooding.",
    sexualDimorphism: "Males larger with more pronounced odontodes. Females rounder.",
    variants: ['Gold Spot (L001)', 'Marbled Sailfin (L022)'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'expert',
    trigger: 'Not achieved in captivity.',
    fryCare: 'Believed to use mud burrows in nature.',
    notes: 'No successful captive breeding. Very difficult.',
  },
};
