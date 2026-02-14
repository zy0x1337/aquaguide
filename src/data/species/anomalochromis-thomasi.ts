import type { Species } from '../../types/species';

export const anomalochromisThomasi: Species = {
  id: 'cichlid-001',
  slug: 'african-butterfly-cichlid',
  imageUrl: '/images/species/african-butterfly-cichlid.jpg',
  funFact: "Unlike most African Cichlids, the African Butterfly Cichlid is a devoted pair-forming species with exceptional parental care - both parents guard eggs and fry for weeks.",

imageCredit: {
    photographer: 'Klaus Rudloff (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anomalochromis_thomasi_A.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },

  taxonomy: {
    scientificName: 'Anomalochromis thomasi',
    commonName: 'African Butterfly Cichlid',
    family: 'Cichlidae',
    origin: 'West Africa (Guinea, Liberia, Sierra Leone)',
    region: 'Africa',
    biotope: 'Shallow forest streams and savannah wetlands with muddy substrates and dense vegetation',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 8,
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.5 },
    gh: { min: 2, max: 10 },
    flow: 'low',
    substrate: 'sand',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Unlike most Cichlids, they will NOT uproot plants - even when breeding. Heavy planting provides security and natural spawning sites. Floating plants help diffuse lighting.',
    hardscape: ['Smooth flat stones (spawning sites)', 'Driftwood', 'Leaf litter', 'Caves'],
  },

  behavior: {
    tags: ['peaceful', 'social'],
    minGroupSize: 2,
    description: 'Remarkably peaceful for a Cichlid. Forms monogamous pairs that cooperate intensely during breeding. Juveniles can be kept in groups, but pairs become territorial when spawning. They are gentle with tankmates but fiercely protective of their fry.',
    compatibility: {
      goodMates: ['Tetras (Congo, Ember)', 'Small Barbs', 'Corydoras', 'Kuhli Loaches', 'Peaceful Rainbowfish'],
      badMates: ['Aggressive Cichlids', 'Fin-nippers', 'Large predatory fish'],
      notes: 'One of the few Cichlids safe in a peaceful community tank. Pairs claim ~30cm territory during breeding but rarely harm tankmates.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: ['Soft, acidic water preferred', 'Smooth flat stones for spawning', 'Stable environment for breeding'],

    proTips: [
      "Juveniles are dull and often overlooked. Wait 4-6 months in a planted softwater tank and watch them transform into stunning adults.",
      "Provide multiple flat stones - pairs are picky about spawning sites and will 'test' several before choosing one.",
      "If breeding, reduce water changes during fry rearing. The pair produces 'fry food' (mucus secretions) that babies graze from their parents' bodies."
    ],

    commonMistakes: [
      "Expecting immediate color. They are stress-sensitive and take weeks to settle and show true beauty.",
      "Keeping in hard, alkaline water. They thrive in soft, acidic conditions and color intensity suffers in the wrong parameters.",
      "Removing fry too early. Parents guard and feed fry for 4-6 weeks - separating them prematurely reduces survival rates."
    ],
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'velvet', 'bacterial-infections', 'bloat'],
    sensitivities: ['Stress (color fades)', 'Hard water', 'High nitrates'],
  },

  scientificContext: {
    wildHabitat: "Shallow forest streams and savannah wetlands with muddy substrates, slow flow, and heavy vegetation. Water is typically soft, acidic, and stained with tannins from decaying organic matter.",
    sexualDimorphism: "Difficult to sex outside of breeding. Males may develop slightly longer dorsal and anal fin filaments. Females show a rounder belly when gravid.",
    variants: ['Wild-type (most common)', 'Gold/Xanthoristic (rare)'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'beginner',
    trigger: 'Soft, slightly acidic water (pH 6.0-6.5), regular water changes with cooler water to simulate rainy season, and conditioning with live foods (bloodworms, brine shrimp).',
    fryCare: 'Both parents guard and clean eggs (50-150). Eggs hatch in 2-3 days. Fry become free-swimming at ~7 days. Parents herd, protect, and produce mucus secretions for fry to graze on. Start supplementing with microworms and crushed flakes after 1 week.',
    notes: 'Exceptional parental care - both parents take turns guarding, fanning eggs, and protecting fry. One of the easiest African Cichlids to breed in captivity.',
  },
};