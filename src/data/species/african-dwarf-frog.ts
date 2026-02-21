import type { Species } from '../../types/species';

export const africanDwarfFrog: Species = {
  id: 'african-dwarf-frog',
  slug: 'african-dwarf-frog',
  imageUrl: '/images/species/african-dwarf-frog.jpg',
  
  funFact: "African Dwarf Frogs must surface to breathe—if they can't reach the top, they'll drown! Nearly blind, they navigate by smell and touch with sensitive fingertips. Watch them 'zen float' motionless mid-water, arms spread like tiny underwater starfish. Males 'sing' at night—a buzzing hum that sounds like an underwater kazoo!",

  taxonomy: {
    scientificName: 'Hymenochirus boettgeri',
    commonName: 'African Dwarf Frog',
    family: 'Pipidae',
    origin: 'Central Africa (Congo Basin, Cameroon, Nigeria)',
    region: 'Africa',
    biotope: 'Shallow, stagnant rainforest pools and slow creeks with dense vegetation and low oxygen',
  },

  visuals: {
    iconShape: 'frog',
    adultSizeCM: 5,
    color: 'Olive-brown to grey with black mottling, cream belly. Blonde variant: peachy-tan with lighter markings',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 6.5, max: 7.8, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    kh: { min: 3, max: 12 },
    flow: 'low',
    substrate: 'sand',
    swimmingZone: {
      primary: 'bottom',
      secondary: 'surface',
      preference: 0.70,
    },
    spaceNeeds: {
      horizontalCM: 30,
      verticalCM: 25,
      territories: 0,
    },
    bioloadMultiplier: 0.4,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Love broad-leaved plants near the surface as "lily pads" for resting. Clumsy swimmers that tire easily need platforms to perch on. Best: Anubias, Amazon Swords, large Cryptocoryne, Java Fern, floating plants (Water Sprite, Frogbit). Avoid narrow-leaved plants they can\'t grip. Dense planting mimics their wild habitat and reduces stress.',
    hardscape: ['Smooth river stones', 'Driftwood caves', 'Terracotta pots (sideways)', 'Shallow platforms near surface'],
  },

  behavior: {
    tags: ['peaceful', 'social', 'nocturnal'],
    minGroupSize: 2,
    description: 'The aquarium\'s zen masters—slow, peaceful, comically clumsy. Nearly blind, they hunt by smell and touch using sensitive fingertips. Watch them lunge at food, miss completely, bump into it, then slowly sniff it out. Their signature "zen float" has them hanging motionless mid-water, limbs spread like starfish, for 5-10 minutes. Social creatures that cuddle in piles on leaves or in caves. Males "sing" at night (buzzing hum) to attract silent females. Most active at dawn and dusk.',

    compatibility: {
      goodMates: [
        'Other African Dwarf Frogs', 
        'Nerite Snails', 
        'Mystery Snails', 
        'Very slow nano fish (Chili Rasboras, Ember Tetras) in large, planted tanks only'
      ],
      badMates: [
        'Most fish (outcompete for food)', 
        'African Clawed Frogs (Xenopus - predators!)', 
        'Crayfish', 
        'Goldfish', 
        'Cichlids', 
        'Bettas', 
        'Fast-moving fish'
      ],
      notes: 'Species-only tanks recommended. In community setups, frogs often starve because fish eat food before blind, slow frogs find it. Even peaceful Tetras are lightning-fast compared to frogs. If mixing with fish, use tiny, slow nano species in heavily planted tanks with target feeding.',
      
      rules: [
        {
          type: 'avoid',
          target: 'most community fish',
          reason: 'Frogs are nearly blind and slow eaters. Fast fish steal all food before frogs find it. #1 cause of starvation death',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'African Clawed Frogs (Xenopus laevis)',
          reason: 'Often mislabeled in stores! Clawed Frogs grow to 15cm and eat Dwarf Frogs. Check webbing: all four feet webbed = Dwarf; only back feet webbed = Clawed',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'low flow / calm water',
          reason: 'Weak swimmers exhausted by strong current. Cannot reach surface to breathe. Use sponge filters or baffle outflows',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'target feeding required',
          reason: 'Nearly blind. Food must be placed at their nose with tweezers/turkey baster. Cannot compete for scattered food',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'shallow tank depth < 40cm',
          reason: 'Must surface every 10-15 minutes for air. Deep tanks exhaust them and risk drowning',
          severity: 'high',
        },
      ],
      idealTankmates: {
        surface: 0,
        midwater: '0-10',
        bottom: '2-6',
      },
    },

    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },

    activity: {
      level: 'low',
      peakTimes: ['morning', 'night'],
      nocturnal: true,
    },

    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 999,
    },

    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'medium',
    cost: 'low',
    
    specialRequirements: [
      'Target feeding with tweezers/turkey baster required',
      'Low flow (sponge filter ideal)',
      'Shallow depth (<40cm) for easy surface access',
      'Tight-fitting lid with no gaps',
      'Species-only tank strongly recommended',
    ],
    
    proTips: [
      "Target feeding is mandatory: Use tweezers or turkey baster to place food (frozen bloodworms, mysis shrimp, brine shrimp) at their nose. They're nearly blind and hunt by smell. Feeding takes 10-15 minutes per frog.",
      "ID check before buying: Dwarf Frogs have all four feet webbed. African Clawed Frogs (often mislabeled) have only back feet webbed and claws on front feet. Clawed Frogs grow to 15cm and eat everything!",
      "Male 'singing' is normal courtship—a buzzing/humming like an underwater kazoo, audible through glass. Females are silent.",
      "'Zen floating' (hanging motionless, limbs spread) for 5-10 minutes is normal behavior, not illness. They're conserving energy between breaths.",
      "Floating plants (Frogbit, Water Sprite) create 'lily pads' for resting. Clumsy swimmers tire easily—give them surface platforms!",
      "Weekly skin shedding is normal. You'll see them eating it afterward—looks like translucent white sheets.",
      "Typical lifespan: 5-8 years with good care. Claims of 15-20 years refer to H. curtipes (different species).",
    ],
    
    commonMistakes: [
      "Keeping with fish = #1 killer. Even peaceful fish eat food before blind, slow frogs find it. Frogs starve over 2-6 months while appearing healthy. Species-only tanks prevent this.",
      "Confusing with African Clawed Frogs. Stores mislabel frequently. Clawed Frogs grow 5x larger and are predators. Check feet webbing!",
      "Deep tanks (>40cm). Must surface every 10-15 minutes to breathe. Tall tanks exhaust them—risk drowning. Keep depth under 40cm.",
      "Strong filtration. Powerful current exhausts weak swimmers. Use sponge filters or baffle outputs.",
      "Broadcasting food. Dropping pellets means frogs never find it. Must target feed with tweezers.",
      "Gravel substrate. Frogs ingest gravel while eating, causing impaction. Use sand or bare bottom only.",
    ],
    
    feeding: {
      frequency: 'every-other-day',
      primaryFoods: ['bloodworms', 'brine-shrimp'],
      supplements: ['daphnia', 'pellets'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Weekly 25% water changes with gentle vacuuming. Low bioload (0.4x fish) but sensitive to poor water. Keep nitrates below 20ppm. Always use dechlorinator—amphibians are extra sensitive to chlorine.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'gentle',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 6,
    commonDiseases: ['dropsy-bloat', 'bacterial-infections', 'fungal-infections', 'chytridiomycosis', 'skin-lesions'],
    sensitivities: [
      'Starvation (community tanks)', 
      'Copper (extremely toxic)', 
      'Salt (never use)', 
      'Strong medications', 
      'Loud vibrations', 
      'Chlorine/chloramine'
    ],
  },

  scientificContext: {
    wildHabitat: "Shallow, stagnant pools and slow creeks in Central African rainforests (Congo Basin). Low-oxygen environments with thick vegetation, leaf litter, muddy bottoms. Water is warm (24-26°C), soft, slightly acidic, tannin-stained. Shallow depth (<30cm) and calm water suit weak swimming and frequent surface breathing.",
    sexualDimorphism: "Males have a small white/pink post-axillary gland behind front legs. Females lack this and are slightly larger/rounder when mature. Males sing; females are silent. Juveniles (<1 year) nearly impossible to sex.",
    variants: [
      'Wild Type (olive-brown with black mottling)', 
      'Blonde/Leucistic (peachy-tan with reduced pigment, black eyes—not albino)'
    ],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Requires perfect conditions: Lower water 30%, increase feeding (live blackworms), raise temp to 27-28°C, large water changes (simulates rainy season). Males sing intensely. After 1-2 weeks, males clasp females in amplexus (underwater hug), swim to surface repeatedly releasing eggs/sperm. Spawning lasts 6-24 hours.',
    fryCare: 'Females lay 500-2000 tiny eggs (1mm) that float or stick to plants. Remove adults immediately (eat eggs). Hatch in 48-72 hours into 5mm tadpoles. Critical: Tadpoles are filter feeders needing liquid fry food (infusoria, commercial liquid) multiple times daily. Metamorphosis takes 6-12 weeks. Back legs develop first, then front, then tail absorbs. Low survival rate (<10%) without expert care.',
    notes: 'Breeding is challenging and usually accidental. Most commercial breeders use hormone injections. Natural breeding needs large groups (6+), perfect conditions, expert tadpole care. Amplexus behavior is fascinating even without successful spawning.',
  },

  experienceData: {
    successRate: 0.55,
    survivalRate: 0.50,
    commonFailures: [
      { issue: 'starvation-death', cause: 'kept-with-fish-outcompeted-for-food', frequency: 0.45 },
      { issue: 'drowning-exhaustion', cause: 'deep-tank-or-strong-current', frequency: 0.18 },
      { issue: 'escape-and-desiccation', cause: 'lid-with-holes-or-gaps', frequency: 0.12 },
      { issue: 'dropsy-bloat', cause: 'poor-water-quality-or-overfeeding', frequency: 0.10 },
      { issue: 'bought-african-clawed-frog-by-mistake', cause: 'store-mislabeling', frequency: 0.08 },
    ],
    estimatedCosts: {
      initial: { min: 30, max: 80, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};
