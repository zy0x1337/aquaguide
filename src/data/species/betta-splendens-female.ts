import type { Species } from '../../types/species';

export const bettaSplendensFemale: Species = {
  id: 'betta-002',
  slug: 'betta-splendens-female',
  imageUrl: '/images/species/betta-splendens-female.jpg',
  funFact: "Unlike males, female Bettas can sometimes be kept in groups called a 'Sorority', though this requires expert care and a heavily planted tank to break lines of sight.",
  
  taxonomy: {
    scientificName: 'Betta splendens',
    commonName: 'Siamese Fighting Fish (female)',
    family: 'Osphronemidae',
    origin: 'Thailand (Mekong Basin)',
  },
  
  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 6,
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60, // Sorority Größe
    tempC: { min: 24, max: 30, ideal: 26 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    flow: 'slow',
    substrate: 'any',
  },
  
  habitat: {
    planting: 'dense',
    plantingNotes: 'CRITICAL: Sorority tanks must be densely planted to break line of sight. If fish can see each other constantly, they will fight. Use tall background plants and floating plants.',
    hardscape: ['Driftwood (complex structures)', 'Caves (many!)', 'Vision breakers'],
  },
  
  behavior: {
    tags: ['jumper', 'surface', 'fin_nipper', 'territorial', 'shoaler'],
    minGroupSize: 5,
    description: 'Less aggressive than males but still territorial. Can be kept singly (beginner) or in groups of 5+ (expert sorority). Never keep just 2 females together.',
    compatibility: {
      goodMates: ['Corydoras', 'Kuhli Loaches', 'Rasboras', 'Snails'],
      badMates: ['Male Bettas (breeding only)', 'Guppies', 'Aggressive Barbs'],
      notes: 'Sororities are unstable. Have a backup plan.',
    }
  },
  
  care: {
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: ['Heavily planted tank', 'Backup tanks required for Sororities'],
  },
  
  health: {
    lifespanYears: 3,
    commonDiseases: [
      'fin-rot',
      'ich',
      'Egg binding',
      'Stress'
    ],
    sensitivities: ['Aggression stress', 'Cold water'],
  },

  scientificContext: {
    wildHabitat: "Stagnant rice paddies and marshes.",
    sexualDimorphism: "Shorter fins, rounder belly, and 'Ovipositor' (egg spot).",
    variants: ['Koi', 'Cambodian', 'Veiltail', 'Crowntail', 'Dumbo Ear'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger: 'See Male profile. Females must be conditioned with high-quality food.',
    fryCare: 'Female is usually removed immediately after spawning.',
  },
};
