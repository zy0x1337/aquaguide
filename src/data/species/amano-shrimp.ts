import type { Species } from '../../types/species';

export const amanoShrimp: Species = {
  id: 'species-amano-shrimp',
  slug: 'amano-shrimp',
  imageUrl: '/images/species/amano-shrimp.jpg',
  funFact:
    "Amano shrimp are parthenogenetic: females can produce hundreds of all-female clones without males. No wonder they're so common!",

  imageCredit: {
photographer: 'fdolmo on Pixabay',
sourceUrl: 'https://pixabay.com/de/photos/aquarium-garnelen-wirbellosen-626556/',
license: 'Public Domain',
licenseUrl: 'https://pixabay.com/service/license/'
  },

  taxonomy: {
    scientificName: 'Caridina multidentata',
    commonName: 'Amano Shrimp',
    family: 'Atyidae',
    origin: 'Japan, Taiwan, South China coastal rivers',
    region: 'Asia',
    biotope:
      'Mountain streams with heavy current, waterfalls, moss-covered rocks, high dissolved oxygen',
  },

  visuals: {
    iconShape: 'shrimp',
    adultSizeCM: 5,
    color: 'translucent with brown stripe + blue/saddle spots',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 30,
    tempC: { min: 18, max: 28, ideal: 22 },
    ph: { min: 6.0, max: 7.8, ideal: 7.0 },
    gh: { min: 4, max: 12 },
    flow: 'high',
    substrate: 'smooth pebbles + moss',
  },

  habitat: {
    planting: 'dense',
    plantingNotes:
      'Thrives on Java moss, driftwood biofilm, soft algae. Current-loving; powerhead recommended.',
    hardscape: [
      'Polished river stones',
      'Driftwood (biofilm source)',
      'Moss-covered rocks',
      'High-flow zones',
    ],
  },

  behavior: {
    tags: [
      'algae_eater',
      'peaceful',
      'active',
      'social',
      'nano_safe',
      'nano',
      'diurnal',
    ],
    minGroupSize: 5,
    description:
      'Hyperactive algae shredders that never stop moving. Excel at soft green algae and hair algae but ignore diatom dust. Constantly climb glass, explore, and shred biofilm.',
    compatibility: {
      goodMates: [
        'Prawn shrimp (Neocaridina)',
        'Cherry shrimp',
        'Peaceful nano fish (Rummy Nose, Celestial Pearl Danio)',
        'Snails',
      ],
      badMates: [
        'Pufferfish, loaches, large cichlids (hunted)',
        'Aggressive shrimp (eaten or stressed)',
      ],
      notes:
        'Safe with almost all community fish; predators hunt them. Amano shrimp eat **other shrimp/snail fry** and **eggs**. Adults ignore adult shrimp.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'High-flow filtration',
      'Biofilm sources (driftwood/moss)',
      'Algae wafers/sinking shrimp pellets',
    ],
    proTips: [
      "Supplement algae with blanched zucchini discs, algae wafers, shrimp pellets.",
      "Powerhead essential - they love current and need oxygen.",
      "Add Indian almond leaves/catappa for biofilm + tannins.",
      "Groups of 5+ show natural behavior; singles hide.",
      "Clean algae before it gets too thick - they prefer soft green growth.",
    ],
    commonMistakes: [
      "No supplemental food → Starvation (they clean tanks too well!).",
      "Low oxygen/low flow → Lethargy and death.",
      "Copper meds → 100% fatal.",
      "Expecting diatom control → They ignore brown dust algae.",
    ],
  },

  health: {
    lifespanYears: 2,
    commonDiseases: ['Vorticella (white tufts)', 'Bacterial infections', 'Molting issues'],
    sensitivities: ['Copper', 'Low oxygen', 'Molting stress (GH/KH)', 'Starvation'],
  },

  scientificContext: {
    wildHabitat:
      'Fast-flowing hillstreams. Specialized filter-feeding mouthparts shred diatoms/algae mechanically.',
    sexualDimorphism:
      'Females larger (5cm), carry bright green eggs. Males smaller (3.5cm), less saddle marking.',
    variants: ['Classic Japanese strain', 'Taiwanese (slightly larger)', 'Albino (rare)'],
  },

  breeding: {
    method: 'other',
    difficulty: 'expert',
    trigger: 'Parthenogenesis (females clone themselves).',
    fryCare: 'Free swimming zoea larvae released; need saltwater + phytoplankton.',
    notes:
      'Not breedable in freshwater. Larvae require marine conditions + rotifers. Buy replacements.',
  },
};
