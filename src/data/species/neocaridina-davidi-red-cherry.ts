import type { Species } from '../../types/species';

export const neocaridinaDavidiRedCherry: Species = {
  id: 'neocaridina-davidi-red',
  slug: 'red-cherry-shrimp',
  imageUrl: '/images/species/cherry-shrimp.jpg',
  taxonomy: {
    scientificName: 'Neocaridina davidi',
    commonName: 'Red Cherry Shrimp',
    family: 'Atyidae',
    origin: 'Taiwan (Breeding Form)',
    region: 'Asia'
  },
  visuals: {
    iconShape: 'shrimp', // Stelle sicher, dass du das Icon in deiner Logic behandelst oder 'fish' nutzt
    adultSizeCM: 3,
    color: 'red'
  },
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 10, // Nano-freundlich
    tempC: { min: 18, max: 28, ideal: 22 }, // Mögen es kühler lieber
    ph: { min: 6.5, max: 8.0, ideal: 7.2 },
    // Wichtig für Garnelen: GH/KH nicht vernachlässigen
    flow: 'low',
    substrate: 'gravel' // Kies ist besser als Sand, damit Mulm einsickern kann
  },
  care: {
    difficulty: 'beginner',
    effort: 'low',
    cost: 'low',
    diet: 'omnivore',
    proTips: [
      'Molting is key: Provide calcium-rich food or mineral stones to prevent molting issues.',
      'Caution with fertilizers: Avoid any product containing Copper (Cu), as it is lethal to invertebrates.',
      'Grading: "Painted Fire Red" is the highest grade with solid red legs and no transparent patches.',
      'Leave some algae: They graze on biofilm 24/7, so a "sterile" tank is bad for them.'
    ],
    commonMistakes: [
      'Assuming they are safe with Bettas (they often become expensive snacks).',
      'Changing water too quickly (osmotic shock causes failed molts).',
      'Using medication meant for fish without checking for copper.'
    ]
  },
  behavior: {
    description: 'Tireless scavengers that spend their entire day grazing on surfaces for biofilm and algae. They are completely peaceful but vulnerable, especially right after molting. In a species-only tank, they are very active; with fish, they tend to hide more.',
    minGroupSize: 10, // Fühlen sich in Gruppen sicherer
    tags: ['peaceful', 'algae_eater', 'bottom_dweller', 'nano_safe'],
    compatibility: {
      goodMates: ['Snails', 'Otocinclus', 'Pygmy Corydoras', 'Micro Rasboras'],
      badMates: ['Betta', 'Cichlids', 'Goldfish', 'Angelfish', 'Large Tetras'],
      notes: 'Even peaceful fish may eat baby shrimp (shrimplets). Heavy planting (Moss) is required for survival.'
    }
  },
  habitat: {
    planting: 'dense',
    plantingNotes: 'Java Moss or Christmas Moss is essential for babies to hide and feed. Floating plants are also appreciated.',
    hardscape: ['Driftwood', 'Cholla Wood', 'Rocks'] // Cholla Wood ist super für Garnelen
  },
  health: {
    lifespanYears: 2,
    commonDiseases: [
      'scutariella-japonica',
      'vorticella',
      'muscular-necrosis',
      'white-ring-of-death',
      'ellobiopsidae'
    ],
    sensitivities: ['Copper', 'Ammonia', 'Rapid Parameter Changes']
  },
  breeding: {
    difficulty: 'beginner',
    method: 'egg_layer', // Technisch tragen sie Eier
    trigger: 'Abundant Food & Stable Parameters',
    fryCare: 'No special care needed. The babies are miniature adults (no larval stage) and eat biofilm immediately. Ensure filter intake is covered with a sponge.',
    notes: 'Females carry yellow/green eggs under their tail ("berried") for ~30 days.'
  },
  scientificContext: {
    wildHabitat: 'The wild form (Neocaridina heteropoda) is brownish-transparent/greenish to camouflage in streams and ponds in Taiwan. They do not exhibit the bright red color in nature.',
    sexualDimorphism: 'Females are significantly larger, more colorful, and have a curved underbelly (to carry eggs). Males are smaller, slimmer, and often paler.',
    variants: ['Red Cherry (Low)', 'Sakura (Medium)', 'Fire Red (High)', 'Painted Fire Red (Highest)', 'Yellow Fire', 'Blue Dream'],
    notes: 'The red coloration was the first color morph isolated in Taiwan in the early 2000s, sparking the freshwater shrimp boom.'
  },
  funFact: 'They are often called the "Canaries of the Aquarium" because they are the first to react to bad water quality, warning the owner before fish get sick.'
};
