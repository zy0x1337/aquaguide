import type { Species } from '../../types/species';

export const africanDwarfFrog: Species = {
  id: 'frog-001',
  slug: 'african-dwarf-frog',
  imageUrl: '/images/species/african-dwarf-frog.jpg',
  funFact: "African Dwarf Frogs are FULLY aquatic amphibians that must surface to breathe air—if they can't reach the surface, they'll drown! They're nearly blind, navigating by smell and touch with their sensitive fingertips. Watch them 'zen float' motionless mid-water for minutes, arms and legs spread wide like tiny underwater starfish. Males even 'sing' at night—a buzzing hum to attract females that sounds like someone underwater playing a kazoo!",

  taxonomy: {
    scientificName: 'Hymenochirus boettgeri',
    commonName: 'African Dwarf Frog',
    family: 'Pipidae',
    origin: 'Central Africa (Congo Basin, Cameroon, Equatorial Guinea)',
    region: 'Africa',
    biotope: 'Stagnant, shallow, shaded rainforest pools, swamps, and slow-moving creeks with low oxygen levels and dense vegetation',
  },

  visuals: {
    iconShape: 'frog',
    adultSizeCM: 5,
    color: 'Olive-brown to dark grey with black mottling. Cream/white belly. Blonde (leucistic) variant: peachy-tan with lighter markings',
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
    planting: 'heavy',
    plantingNotes: 'African Dwarf Frogs LOVE planted tanks with BROAD-LEAVED plants near the surface for resting platforms. They\'re clumsy swimmers that tire easily—give them "lily pads" to rest on! Best plants: Anubias (all varieties), Amazon Swords, large Cryptocoryne, Java Fern, and especially floating plants (Water Sprite, Frogbit) that create shaded areas. Avoid tall, narrow-leaved plants they can\'t grip. Dense planting creates a maze-like environment that mimics their wild habitat and reduces stress. They spend hours perched on broad leaves near the surface, occasionally kicking to the top for air gulps.',
    hardscape: ['Smooth River Stones (no sharp edges)', 'Driftwood Caves (hiding spots)', 'Terracotta Pots (on sides as caves)', 'Shallow platforms near surface'],
  },

  behavior: {
    tags: ['amphibian', 'peaceful', 'social', 'nocturnal', 'clumsy', 'slow_eater'],
    minGroupSize: 2,
    description: 'African Dwarf Frogs are the aquarium\'s zen masters—slow, peaceful, and comically clumsy. They\'re NEARLY BLIND, relying on smell and touch (sensitive fingertips) to navigate and find food. Watching them hunt is both adorable and frustrating: they lunge at food, miss completely, bump into it accidentally, then slowly figure out where it went. Their signature behavior is "zen floating"—hanging motionless mid-water with limbs spread like tiny starfish, sometimes for 5-10 minutes. They\'re social creatures that enjoy company of their own kind, often cuddling together in piles on broad leaves or in caves. Males "sing" at night (a buzzing hum audible through tank glass) to attract females. They\'re most active at dawn and dusk (crepuscular) but feed anytime food is available. Unlike fish, they take FOREVER to eat—slowly chewing and swallowing each bite.',
    
    compatibility: {
      goodMates: ['Other African Dwarf Frogs', 'Nerite Snails', 'Mystery Snails', 'VERY peaceful, slow-moving nano fish (Chili Rasboras, Ember Tetras) in LARGE tanks only'],
      badMates: ['Most fish (outcompete for food)', 'African Clawed Frogs (Xenopus - predators!)', 'Crayfish (will eat frogs)', 'Goldfish (too active)', 'Cichlids', 'Bettas (sometimes nippy)', 'Fast-moving fish'],
      notes: 'CRITICAL: African Dwarf Frogs are BEST KEPT IN SPECIES-ONLY TANKS. In community tanks, they often STARVE because fish eat all the food before the frogs\'  slow, clumsy hunting finds it. Even "peaceful" fish like Tetras are lightning-fast compared to blind, clumsy frogs. If you must keep them with fish, choose TINY, slow nano species (Chili Rasboras, CPDs) in heavily planted tanks with target feeding. But honestly? Species-only frog tanks are happiest for everyone.',
      
      rules: [
        {
          type: 'avoid',
          target: 'most community fish',
          reason: 'CRITICAL: Frogs are nearly blind and eat VERY slowly. Fast fish (even peaceful Tetras, Guppies) steal all food before frogs find it. Frogs starve slowly over weeks/months. This is the #1 cause of death in community tanks',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'African Clawed Frogs (Xenopus laevis)',
          reason: 'Often confused in stores! Clawed Frogs grow to 15cm and EAT Dwarf Frogs. Check webbing: Dwarf Frogs have ALL FOUR FEET webbed; Clawed Frogs only have BACK FEET webbed',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'low flow / calm water',
          reason: 'Frogs are weak swimmers. Strong current exhausts them and prevents them from reaching the surface to breathe. Use sponge filters or baffle outflows',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'target feeding required',
          reason: 'Frogs are nearly blind and slow. Food must be placed DIRECTLY in front of their nose using tweezers or turkey baster. They cannot compete for scattered food',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'shallow tank depth < 40cm',
          reason: 'Frogs must surface every 10-15 minutes to breathe air. Deep tanks (>40cm) exhaust them and can cause drowning if they cannot reach surface easily',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: '0',
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
      peakTimes: ['dawn', 'dusk', 'night'],
      nocturnal: true,
    },
    
    socialStructure: {
      type: 'group',
      maxMalesPerTank: 999,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'intermediate',
    diet: 'carnivore',
    effort: 'medium',
    cost: 'low',
    specialRequirements: [
      'TARGET FEEDING required (use tweezers/turkey baster to place food at their nose)', 
      'Low flow environment (sponge filter ideal)', 
      'Shallow tank depth (<40cm) so they can reach surface easily',
      'Tight-fitting lid with NO HOLES (they escape through tiny gaps and dry out)',
      'Species-only tank strongly recommended',
    ],

    proTips: [
      "TARGET FEEDING IS MANDATORY. Use long tweezers or turkey baster to place food (frozen bloodworms, mysis shrimp, brine shrimp) DIRECTLY in front of their nose. They're nearly blind and rely on smell. Drop food near them and wait—they'll slowly sniff it out. Feeding time takes 10-15 minutes per frog.",
      "IDENTIFICATION CHECK: Dwarf Frogs have ALL FOUR FEET WEBBED. African Clawed Frogs (Xenopus—a DIFFERENT species often mislabeled in stores) have ONLY BACK FEET webbed and CLAWS on front feet. Clawed Frogs grow to 15cm and eat everything. ALWAYS check feet before buying!",
      "Male frogs 'sing' at night! It's a buzzing/humming sound like an underwater kazoo, audible through glass. This is normal courtship behavior, not distress. Females are silent.",
      "'Zen floating' is normal. They'll hang motionless mid-water, arms and legs spread, for 5-10 minutes. It's not illness—it's their meditation pose. They're conserving energy between surface breaths.",
      "Surface plants (Frogbit, Water Sprite) create 'lily pads' they LOVE to rest on. They're clumsy swimmers that tire easily—give them platforms near the surface!",
      "They shed their skin weekly (like snakes). You'll see them eating it afterward—totally normal! It looks like translucent white sheets in the water.",
      "Lifespan reality: 5-8 years is typical with good care. Claims of 15-20 years are for the Zaire Dwarf Clawed Frog (H. curtipes), a different species rarely available.",
    ],

    commonMistakes: [
      "Keeping with fish = #1 KILLER. Even 'peaceful' fish (Tetras, Guppies, Platies) eat food faster than blind, clumsy frogs can find it. Frogs slowly starve over 2-6 months while appearing healthy. By the time you notice weight loss, it's often too late. SPECIES-ONLY TANKS prevent this entirely.",
      "Confusing with African Clawed Frogs (Xenopus laevis). Pet stores FREQUENTLY mislabel Clawed Frogs as Dwarf Frogs. Clawed Frogs grow 5x larger, are aggressive predators, and eat fish. CHECK FEET: all four webbed = Dwarf, only back webbed + front claws = Clawed.",
      "Deep tanks (>40cm). Frogs must surface every 10-15 minutes to breathe. In tall tanks, they exhaust themselves swimming up repeatedly and can drown if too tired. Keep water depth under 40cm.",
      "Strong filtration. Powerful filters create currents that exhaust frogs. They're weak swimmers. Use sponge filters or baffle canister outputs to create calm water.",
      "Broadcasting food. Dropping pellets/flakes into the water means frogs never find it before fish do. You MUST target feed with tweezers or turkey baster, placing food at their nose.",
      "Gravel substrate. Frogs accidentally ingest gravel while eating, causing impaction (blockage). Use sand or bare bottom only.",
    ],
    
    feeding: {
      frequency: 'every-other-day',
      primaryFoods: ['bloodworms', 'brine-shrimp', 'mysis-shrimp'],
      supplements: ['daphnia', 'frog-pellets'],
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
      notes: 'Weekly 25% water changes with gentle vacuuming. Frogs produce less waste than fish (bioload 0.4x) but are SENSITIVE to poor water quality. Keep nitrates below 20ppm. Use dechlorinator—chlorine/chloramine is toxic to amphibians.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'low',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 6,
    commonDiseases: ['dropsy-bloat', 'bacterial-infections', 'fungal-infections', 'chytridiomycosis', 'skin-lesions'],
    sensitivities: ['Starvation (in community tanks)', 'Copper (extremely toxic to amphibians)', 'Salt (NEVER add aquarium salt)', 'Strong medications', 'Vibrations and loud noises', 'Chlorine/chloramine (worse than for fish)'],
  },

  scientificContext: {
    wildHabitat: "African Dwarf Frogs inhabit shallow, stagnant, heavily shaded pools, swamps, and slow-moving creeks in Central African rainforests (Congo Basin). These are LOW-OXYGEN environments with thick vegetation, leaf litter, and muddy bottoms. Water is warm (24-26°C), soft, slightly acidic, and tannin-stained. The shallow depth (<30cm) and calm water suit their weak swimming ability and need for frequent surface breaths. They're adapted to survive dry seasons by burrowing into mud—though this rarely happens in aquariums.",
    sexualDimorphism: "Males have a small white or pink gland (post-axillary subdermal gland) visible behind the front legs/armpits. Females lack this gland and are slightly rounder/larger when mature. Males 'sing' (buzz/hum); females are silent. Sexing juveniles (<1 year) is nearly impossible.",
    variants: ['Wild Type (olive-brown with black mottling)', 'Blonde/Leucistic (peachy-tan with reduced pigment, NOT albino—has black eyes)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Breeding requires PERFECT conditions: lower water level by 30%, increase feeding (live blackworms ideal), raise temperature to 27-28°C, and perform large water changes to simulate rainy season. Males sing intensely at night. After 1-2 weeks of conditioning, males clasp females in amplexus (underwater "hug") and swim to surface together repeatedly, releasing eggs/sperm at surface. Spawning lasts 6-24 hours.',
    fryCare: 'Females lay 500-2000 tiny eggs (1mm) that float or stick to plants. Remove adults immediately (they eat eggs). Eggs hatch in 48-72 hours into tiny tadpoles (5mm). CRITICAL: Tadpoles are FILTER FEEDERS that need liquid fry food (infusoria, commercial liquid fry food) multiple times daily. They cannot eat normal foods. Metamorphosis takes 6-12 weeks. Tadpoles develop back legs first, then front legs, then absorb tail. Survival rate is LOW (<10%) without specialized care. Raising froglets requires dedication and experience.',
    notes: 'Breeding is challenging and usually accidental in home aquariums. Most breeders are commercial farms using hormone injections. Natural breeding requires large groups (6+ frogs), perfect conditions, and expert-level tadpole care. Amplexus behavior (males hugging females for hours) is fascinating to observe even without successful spawning.',
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
