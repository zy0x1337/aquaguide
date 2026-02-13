import type { Species } from '../../types/species';

export const oscar: Species = {
  id: 'oscar',
  slug: 'oscar',
  imageUrl: '/images/species/oscar.jpg',
  funFact: "Oscars sind 'Aquarium-Genies' - erkennen Besitzer nach 1 Woche, fressen aus der Hand, spielen mit Spielzeug und haben Gedächtnis für Fütterungszeiten!",

  imageCredit: {
    photographer: 'focusdanifocus on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/fische-oscar-fisch-oscar-tiger-7769543/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },
  
  taxonomy: {
    scientificName: 'Astronotus ocellatus',
    commonName: 'Tiger Oscar (Velvet Cichlid)',
    family: 'Cichlidae',
    origin: 'Amazonas Becken (Peru, Brasilien, Kolumbien, Venezuela)',
    region: 'South America',
    biotope: 'Flooded forests, slow blackwater rivers, muddy substrates',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 35, // Females bis 40cm
    color: 'orange-black tiger stripes, eye spots on tail',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 450, // 150x60cm SINGLE adult!
    tempC: { min: 23, max: 29, ideal: 26 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 18 },
    flow: 'low',
    substrate: 'fine silica sand (1mm)',
  },

  habitat: {
    planting: 'sparse',
    plantingNotes: 'Amazon sword, Vallisneria, Java fern (rooted in pots). Constant uprooting!',
    hardscape: [
      'Large driftwood branches', 
      'Flat slate rocks', 
      'PVC caves (10cm+)', 
      'Muddy beach zones'
    ],
  },

  behavior: {
    tags: [
      'predator', 
      'territorial', 
      'cichlid', 
      'semi-aggressive'
    ],
    minGroupSize: 1, // Pair nur 900L+!
    description: 'Monster-Cichlide mit Hund-Intelligenz. Rearranges tank weekly, hand-fed nach 7 Tagen, extremely messy eater (20x normal bioload).',
    compatibility: {
      goodMates: [
        'Common Pleco (30cm+)', 
        'Giant Danios (fast swimmers)', 
        'Sailfin Pleco', 
        'Large Silver Dollars (15cm+)', 
        'Tiger Oscar pair (900L+ only)'
      ],
      badMates: [
        'All small fish/shrimp/snails', 
        'Angels/Discuss', 
        'Flowerhorns (hybrid disease)', 
        'Nano species'
      ],
      notes: 'SOLO 450L minimum! Eats everything mouth-sized. Pair bonding requires 900L+ stable pair.',
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'high',
    cost: 'high',
    specialRequirements: [
      'Filtration 4-6x turnover/hour', 
      '50% weekly waterchanges', 
      'Secure lid (jumper!)', 
      'Backup generator (oxygen critical)'
    ],
    proTips: [
      "Waste: 20-30x normal fish! Canister + sump + sponge combo.",
      "Diet: NLS large pellets + frozen silversides/tilapia (2-3cm chunks).",
      "Hand-feeding: Long tongs, daily 10min sessions build bond.",
      "Growth: 25cm Jahr 1, 35cm Jahr 3. Plan tank upgrade!",
      "Digging: Fine sand only - gravel cuts belly."
    ],
    commonMistakes: [
      "Small tank (200L) → Liver/kidney failure Jahr 2.",
      "Weak filter → Ammonia 1.0ppm+ constant.",
      "Live goldfish → Fatty liver disease.",
      "Pair without 900L → Fight to death.",
      "No oxygen backup → Suffocation bei blackout."
    ],
  },

  health: {
    lifespanYears: 15, // 20+ captive records
    commonDiseases: ['Hole-in-Head (HITH)', 'Ich', 'Columnaris', 'Liver disease'],
    sensitivities: ['Ammonia>0.25ppm', 'Nitrate>40ppm', 'Fatty foods', 'Copper'],
  },

  scientificContext: {
    wildHabitat: "Iguaçu/Amazon floodplains. Opportunist - eats fruit, fish, insects. Parental care legendary.",
    sexualDimorphism: "Males thicker head, larger. Females slimmer during breeding.",
    variants: ['Tiger', 'Albino', 'Leopard', 'Red Tiger', 'Longfin Tiger'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'expert',
    trigger: '28°C+, soft acidic water, flat slate.',
    fryCare: 'Both parents guard 1000+ eggs fiercely 3 days → wrigglers.',
    notes: '1200L+ tank. Parents kill intruders. Fry need Artemia Nauplii.',
  },
};
