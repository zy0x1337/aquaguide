import type { Species } from '../../types/species';

export const rosyBarb: Species = {
  id: 'species-rosy-barb',
  slug: 'rosy-barb',
  imageUrl: '/images/species/rosy-barb.jpg',
  funFact:
    'Rosy barbs can thrive even in cooler water, making them one of the few tropical-looking fish that do great in unheated aquariums!',

  imageCredit: {
    photographer: 'Andreas Hartl on Pixabay',
    sourceUrl: 'https://pixabay.com/photos/rosy-barb-fish-aquarium-freshwater-5405584/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/',
  },

  taxonomy: {
    scientificName: 'Pethia conchonius',
    commonName: 'Rosy Barb',
    family: 'Cyprinidae',
    origin: 'South Asia (India, Bangladesh, Nepal)',
    region: 'Asia',
    biotope: 'Gently flowing streams and well-vegetated ponds',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 10,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 120,
    tempC: { min: 18, max: 26, ideal: 23 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 15 },
    flow: 'moderate',
    substrate: 'gravel or sand',
  },

  habitat: {
    planting: 'medium',
    plantingNotes:
      'Appreciates open swimming space with patches of dense vegetation and floating plants for shade.',
    hardscape: ['Rounded stones', 'Driftwood roots', 'Background plants'],
  },

  behavior: {
    tags: ['active', 'shoaler', 'semi-aggressive', 'midwater'],
    minGroupSize: 6,
    description:
      'Lively and social schooling fish. Males display vivid red coloration when excited or during courtship. They can nip fins if kept too few or with slow fish.',
    compatibility: {
      goodMates: ['Danios', 'Corydoras', 'Loaches', 'Rainbowfish', 'Fast Tetras'],
      badMates: ['Angelfish', 'Guppies', 'Long-finned Gouramis'],
      notes:
        'Keep in groups to avoid aggression. Provide current and enrichment to prevent boredom and nipping.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Group of at least 6', 'Open swimming space'],

    proTips: [
      'Keep groups large to distribute mild fin-nipping behavior.',
      'Their colors become spectacular under natural daylight or full-spectrum LEDs.',
      'Unheated indoor aquariums are fine if the room stays above 18°C.',
      'Feed a mix of flakes, live, and frozen foods for rich coloration.',
    ],

    commonMistakes: [
      'Keeping singles or pairs → leads to aggression.',
      'Housing with slow or long-finned fish → fin-nipping issues.',
      'Too warm (28°C+) water → shortens lifespan and reduces coloration.',
      'Overcrowding → stress and color fading.',
    ],
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['Ich', 'Fin rot', 'Bacterial infections'],
    sensitivities: ['Ammonia', 'Poor oxygenation', 'Overfeeding'],
  },

  scientificContext: {
    wildHabitat:
      'Inhabits clear to slightly turbid flowing waters with thick vegetation. Cooler climate variation makes them hardy for temperate tanks.',
    sexualDimorphism:
      'Males are more colorful (rosy red to deep orange) and slimmer; females are silver-golden and rounder-bellied.',
    variants: ['Neon Rosy Barb', 'Longfin Rosy Barb', 'Gold Rosy Barb'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Slight temperature increase and plentiful live food conditioning.',
    fryCare:
      'Eggs are adhesive and hatch in about 1–2 days. Parents will eat eggs if left together; separate after spawning.',
    notes:
      'Spawning often occurs early morning. Males perform courting chases and intense color display before scattering eggs.',
  },
};
