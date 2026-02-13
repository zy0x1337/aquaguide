import type { Species } from '../../types/species';

export const rummynoseTetra: Species = {
  id: 'rummy-nose-tetra',
  slug: 'rummy-nose-tetra',
  imageUrl: '/images/species/rummy-nose-tetra.jpg',
  funFact: "The brilliant red nose fades under stress - it's a real-time water quality barometer! Perfect health = flaming red noses.",

  taxonomy: {
    scientificName: 'Petitella rhodostoma',
    commonName: 'Rummy Nose Tetra',
    family: 'Acestrorhampidae',
    origin: 'Lower Amazon basin (Rio Tapajós, Pará, Brazil)',
    region: 'South America',
    biotope: 'Blackwater streams - ultra-soft, acidic, tannin-stained with dense marginal vegetation',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
    color: 'iridescent silver body, flaming red head, black caudal peduncle bar',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 75, // 12 individuals minimum school
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 5.5, max: 7.0, ideal: 6.2 },
    gh: { min: 1, max: 8 },
    flow: 'low',
    substrate: 'fine sand',
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Amazon swordplants, Cryptocoryne wendtii, floating plants. Blackwater tannins essential for best color.',
    hardscape: [
      'Driftwood branches', 
      'Leaf litter (catappa/oak)', 
      'Fine sand substrate', 
      'Marginal plant thickets'
    ],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater', 'shy', 'colorful', 'nano_safe'],
    minGroupSize: 12, // <8 = stress, faded noses guaranteed
    description: 'Tight, synchronized schoolers that flash brilliant red noses when healthy. Nervousness causes nose color loss within hours - perfect water quality indicators.',
    compatibility: {
      goodMates: [
        'Corydoras (all peaceful species)', 
        'Rasbora hengeli', 
        'Honey Gourami', 
        'Otocinclus', 
        'Pygmy Corydoras'
      ],
      badMates: [
        'Fin nippers', 
        'Aggressive barbs', 
        'Large cichlids'
      ],
      notes: 'Ultra-peaceful nano schooler. **Safe with adult shrimp but eats shrimp fry/eggs**. Needs pristine water + large school for confidence.',
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Large school (12+)', 
      'Zero ammonia/nitrite', 
      'Tannins (catappa leaves)', 
      'Nitrate <20ppm'
    ],
    proTips: [
      "Nose color diagnosis: Full red = perfect conditions. 50% red = nitrates >20ppm. No red = ammonia/nitrite issues.",
      "Indian almond leaves + peat filtration = wild blackwater conditions, maximum color intensity.",
      "Feed micro-pellets + baby brine shrimp. Schooling tightens with quality food.",
      "Weekly 30% water changes prevent nitrate creep - their #1 killer.",
      "Add floating plants - reduces jumping stress."
    ],
    commonMistakes: [
      "Small groups (6 or fewer) → Chronic stress, faded noses, short lifespan.",
      "Tap water without remineralization → Osmotic stress, faded color.",
      "Ignoring faded noses → Early deaths from undetected water issues.",
      "Overfeeding → Water quality crashes → Nose color loss → cascade failure."
    ],
  },

  health: {
    lifespanYears: 5, // 7+ in perfect blackwater
    commonDiseases: ['Ich', 'Fin rot', 'Columnaris'],
    sensitivities: ['Nitrate >20ppm', 'Ammonia/nitrite', 'pH >7.5', 'Copper'],
  },

  scientificContext: {
    wildHabitat: "Rio Tapajós blackwaters. Ultra-soft (GH <2), pH 5.5-6.5, heavy tannins. Tight schools evade predators.",
    sexualDimorphism: "Females rounder abdomen, slightly larger. Males more intense red, streamlined.",
    variants: ['Classic Rummy (Petitella rhodostoma)', 'Brilliant Rummy (P. bleheri)', 'False Rummy (P. georgiae)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'pH 5.5-6.0, GH <4, heavy peat filtration, live foods.',
    fryCare: 'Adhesive eggs on plants/glass. Fry need infusoria → baby brine shrimp.',
    notes: 'Prolific in blackwater. Parents eat eggs - separate or use spawning mop.',
  },
};
