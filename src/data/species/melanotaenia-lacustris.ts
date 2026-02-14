import type { Species } from '../../types/species';

export const melanotaeniaLacustris: Species = {
  id: 'rainbowfish-001',
  slug: 'lake-kutubu-rainbowfish',
  imageUrl: '/images/species/lake-kutubu-rainbowfish.jpg',
  funFact: "Lake Kutubu Rainbowfish are listed as Endangered (IUCN) in the wild due to invasive species in their only natural habitat - a single lake in Papua New Guinea.",

imageCredit: {
    photographer: 'Klaus Rudloff (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Melanotaenia_lacustris.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },

  taxonomy: {
    scientificName: 'Melanotaenia lacustris',
    commonName: 'Lake Kutubu Rainbowfish',
    family: 'Melanotaeniidae',
    origin: 'Papua New Guinea (Lake Kutubu)',
    region: 'Australia',
    biotope: 'Clear lake waters with heavy vegetation and submerged wood',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 12,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 200, // Active swimmers need space
    tempC: { min: 22, max: 26, ideal: 24 },
    ph: { min: 7.0, max: 8.5, ideal: 7.8 },
    gh: { min: 10, max: 20 },
    flow: 'moderate',
    substrate: 'sand',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Heavy planting on sides with open swimming corridors in the center. Females in breeding condition compulsively nibble algae - leave back glass uncleaned or provide algae wafers.',
    hardscape: ['Driftwood', 'Smooth stones', 'Submerged branches'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'active', 'jumper'],
    minGroupSize: 6,
    description: 'Extremely active and athletic swimmers, especially at dawn. Males constantly display to each other in a beautiful, non-aggressive ritual. They are peaceful but boisterous - their energy can intimidate shy species.',
    compatibility: {
      goodMates: ['Other Rainbowfish', 'Larger peaceful Tetras', 'Corydoras', 'Plecos', 'Peaceful Barbs'],
      badMates: ['Slow fish (Bettas, Gouramis)', 'Fin-nippers', 'Aggressive Cichlids'],
      notes: 'Males can relentlessly harass females in small groups. Keep in equal male/female ratios in groups of 6-10 to distribute stress.',
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: ['Large tank (minimum 120cm length)', 'Tight-fitting lid (excellent jumpers)', 'Stable hard, alkaline water'],

    proTips: [
      "Don't judge them in the store - juveniles are bland. Their turquoise-blue brilliance emerges with age and proper acclimation.",
      "They are crepuscular - most active at dawn and dusk. Feed during these times for best results.",
      "Susceptible to Mycobacteriosis (Fish TB) - quarantine new arrivals strictly and maintain excellent water quality."
    ],

    commonMistakes: [
      "Keeping in tanks under 120cm length. They NEED horizontal swimming space.",
      "Buying 2-3 specimens. This is a shoaling species that thrives in groups of 6+.",
      "Mixing with slow, timid fish. Their constant activity stresses peaceful species like Bettas."
    ],
  },

  health: {
    lifespanYears: 8,
    commonDiseases: ['mycobacteriosis', 'ich', 'velvet', 'bacterial-infections'],
    sensitivities: ['Poor water quality', 'Sudden parameter changes', 'Low oxygen levels'],
  },

  scientificContext: {
    wildHabitat: "Endemic to Lake Kutubu and its outlet river (Soro/Kikori system) in Papua New Guinea. Clear, still to slow-moving water with heavy vegetation and submerged wood. The lake is threatened by invasive Tilapia.",
    sexualDimorphism: "Difficult to sex except in mature specimens. Males develop deeper bodies and slightly more vivid coloration. Both sexes display, but males do so more frequently and intensely.",
    variants: ['Wild-type', 'Lacustris Blue', 'Turquoise Rainbow'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Provide spawning mops or fine-leaved plants. Increase protein with live foods (daphnia, bloodworms). Spawning peaks at dawn.',
    fryCare: 'Eggs hatch in 7-8 days at 24°C. Start with infusoria or liquid fry food, then graduate to newly hatched brine shrimp. Growth is slow but steady.',
    notes: 'Rainbowfish are continuous spawners - they deposit small batches of eggs over several days rather than one mass spawning event. Remove spawning mops daily to prevent egg predation.',
  },
};