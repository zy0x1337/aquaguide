import type { Species } from '../../types/species';

export const pandaCory: Species = {
  id: 'cory-001',
  slug: 'panda-cory',
  imageUrl: '/images/species/panda-cory.jpg',
  funFact: "Panda Corys are named after giant pandas because of their adorable black eye patches! But here's the magical part: they can breathe air through their intestines. Watch them zoom to the surface, gulp a bubble, and zip back down like tiny aquatic astronauts refueling their oxygen tanks. It's the cutest superpower in the aquarium world.",

  taxonomy: {
    scientificName: 'Corydoras panda',
    commonName: 'Panda Corydoras',
    family: 'Callichthyidae',
    origin: 'Peru (Ucayali River basin, high-altitude Andean tributaries)',
    region: 'South America',
    biotope: 'Crystal-clear, oxygen-rich mountain streams fed by Andean snowmelt. Cool water (19-22°C), moderate flow, sandy bottoms',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 5,
    color: 'Peach-pink body with THREE iconic black spots: adorable eye patches (like a panda mask), dorsal fin spot, and tail peduncle spot',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 20, max: 24, ideal: 22 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 2, max: 12 },
    kh: { min: 1, max: 8 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'surface',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 50,
      verticalCM: 25,
      territories: 0,
    },
    
    bioloadMultiplier: 0.5,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Pandas are shy sweethearts who need hiding spots but also LOVE open sandy areas to play in. Think: planted perimeter, open center "dance floor." Use Java Fern, Anubias, and Cryptocoryne on rocks and driftwood. They adore moss (Java Moss, Christmas Moss) for secret hideaways. Floating plants help dim the lights because Pandas are surprisingly light-sensitive. Most importantly: soft sand for their delicate little whiskers (barbels). No gravel. Ever.',
    hardscape: ['Smooth River Stones', 'Driftwood (Spider Wood, Mopani)', 'Terracotta Pots (fry shelters)', 'Oak or Almond Leaves (they love leaf litter!)'],
  },

  behavior: {
    tags: ['shoaler', 'bottom_dweller', 'peaceful', 'diurnal', 'shy', 'scaleless', 'nano'],
    minGroupSize: 6,
    description: 'If Bronze Corys are boisterous golden retrievers, Panda Corys are shy, sensitive house cats. They\'re adorably gentle, a bit skittish at first, but incredibly sweet once comfortable. You\'ll catch them doing the "Panda wiggle"—shimmying their whole body into the sand while hunting for snacks. They travel in little groups, always staying close to their buddies, occasionally breaking into synchronized swimming sessions that look like underwater ballet. When startled, they freeze with their eye patches wide open ("I\'m invisible!"). During dawn and dusk, they become surprisingly playful, zooming around the bottom like tiny race cars. The cutest moment? Watching six Pandas lined up in a row, all wiggling into the sand together like a choreographed dance troupe.',
    
    compatibility: {
      goodMates: ['Neon Tetras', 'Cardinal Tetras', 'Harlequin Rasboras', 'Ember Tetras', 'Celestial Pearl Danios', 'Otocinclus', 'Cherry Shrimp', 'Nerite Snails', 'Apistogramma (dwarf cichlids)', 'Peaceful Tetras'],
      badMates: ['Goldfish (wrong temperature!)', 'Large Cichlids', 'Aggressive Barbs', 'Red Tail Sharks', 'Bettas (sometimes nippy)', 'Warm-water fish (Discus, Rams at 28°C)'],
      notes: 'Pandas are COOLWATER fish—this is critical! They thrive at 22°C while most tropical fish prefer 25-26°C. Pair them with other cool-loving species (Hillstream Loaches, White Cloud Minnows, Dojo Loaches work in big tanks). Avoid mixing with warm-water species; Pandas suffer in anything over 24°C long-term.',
      
      rules: [
        {
          type: 'requires',
          condition: 'temperature <= 24°C',
          reason: 'CRITICAL: Pandas are Andean coolwater fish. Temperatures over 24°C long-term stress them, shorten lifespan, and increase disease risk. They come from snowmelt streams at 19-22°C!',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'warm-water fish (Discus, German Rams, Sterbai Corys)',
          reason: 'Temperature incompatibility. Warm-water fish need 26-28°C; Pandas suffer and die young above 24°C. Choose coolwater tankmates only',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'sand substrate',
          reason: 'Gravel destroys their delicate barbels (whiskers), causing infection, starvation, and death. Sand allows natural foraging behavior',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 6',
          reason: 'Pandas are shy social fish that become stressed and hide constantly in small groups. They need friends to feel brave. 6 minimum, 10+ for confidence',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'bettas',
          reason: 'Hit or miss. Some Bettas coexist peacefully, others nip at Corys thinking they\'re competition. Monitor closely. Pandas are too slow to escape aggressive Bettas',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: '10-15',
        midwater: '15-25',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'evening'],
      nocturnal: false,
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
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'medium',
    specialRequirements: [
      'COOL water (22°C ideal, 24°C max)—this is NON-NEGOTIABLE', 
      'Sand substrate mandatory for barbel health', 
      'Groups of 6+ required (shy fish need buddies)',
      'Gentle current (moderate flow, not stagnant)',
    ],

    proTips: [
      "Temperature is EVERYTHING for Pandas. They\'re not tropical fish—they\'re coolwater mountain fish from Andean streams! Keep them at 22°C. At 26°C, they survive but suffer (shortened lifespan, weakened immune system, stress). This is why Pandas have a reputation for 'dying easily'—it\'s usually temperature stress.",
      "Pandas are shy at first but blossom with patience. Give them 2-3 weeks to settle. Once comfortable, they\'ll zoom around, wiggle into sand, and even glass-surf during feeding time. Dimmer lighting helps them relax.",
      "Feed sinking wafers at dusk. Pandas are crepuscular (most active dawn/dusk). Feeding when lights dim ensures they get food before faster midwater fish steal it. They\'re slow eaters who take their time.",
      "Barbel health check: Long, intact whiskers = happy Panda. Short, stubby, or missing whiskers = RED ALERT. This means wrong substrate (gravel) or bacterial infection from dirty sand. Barbels don\'t grow back easily.",
      "They LOVE leaf litter! Add Indian Almond Leaves, Oak leaves, or Catappa leaves. Pandas sift through them looking for microfauna, and the tannins mimic their natural blackwater habitat. Plus it looks beautiful.",
      "Pandas are derpy and adorable. You\'ll catch them doing the 'glass stare' (just... staring at you with their big panda eyes), the 'sand dive' (full-body wiggle into substrate), and the 'bubble dash' (zooming to surface for air). Each one has personality!",
    ],

    commonMistakes: [
      "Keeping them too warm. THIS IS THE #1 PANDA KILLER. They\'re sold alongside tropical fish, so people assume they want 25-26°C. NOPE. Pandas are COOLWATER fish (22°C ideal). At 26°C+ they become lethargic, stop eating, and die within months. Always check temperature requirements!",
      "Using gravel substrate. This is #2 Panda killer. Gravel erodes their barbels, causing bacterial infections (barbel erosion, red blotch disease). Once barbels are damaged, Pandas can\'t find food efficiently and slowly starve. ONLY use soft sand.",
      "Buying just 1-2 because 'they\'re expensive.' Pandas are social shoalers who become stressed, hide constantly, and lose color when kept in tiny groups. 6 is minimum. Save up and buy proper groups—it\'s worth it.",
      "Mixing with warm-water fish. Don\'t pair Pandas with Discus, German Rams, or Sterbai Corys that need 26-28°C. The temperature compromise kills the Pandas. Choose coolwater tankmates: Neon Tetras, White Clouds, Hillstream Loaches.",
      "Thinking they\'re 'delicate' or 'fragile.' Pandas aren\'t fragile—they\'re just SPECIFIC. Give them cool water, sand, and friends, and they\'ll live 8-10+ years. Ignore those needs, and they die within months. It\'s not luck; it\'s care.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['wafers', 'pellets', 'bloodworms', 'brine-shrimp'],
      supplements: ['daphnia', 'vegetables', 'spirulina'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Pandas are more nitrate-sensitive than Bronzes. Keep nitrates <20ppm. Gentle substrate vacuuming weekly prevents bacterial buildup. Use cool dechlorinated water (match tank temp 22°C) to avoid temperature shock.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 10,
    commonDiseases: ['barbel-erosion', 'red-blotch-disease', 'ich', 'columnaris', 'fungal-infections'],
    sensitivities: ['High temperatures (>24°C)', 'Sharp substrate', 'High nitrates (>20ppm)', 'Salt (scaleless fish)', 'Copper medications', 'Temperature shocks'],
  },

  scientificContext: {
    wildHabitat: "Panda Corys inhabit high-altitude tributaries of the Ucayali River system in Peru, particularly streams fed by Andean mountain snowmelt. These are crystal-clear, oxygen-rich, COOL waters (19-22°C) flowing over sandy and fine gravel bottoms. The current is moderate (not raging, not stagnant), and the water is well-oxygenated from flow and altitude. During certain seasons, snowmelt increases flow and drops temperature even further. These streams are nothing like the warm, slow-moving Amazon lowlands—Pandas are mountain fish, not tropical fish. This is why temperature is so critical in captivity.",
    sexualDimorphism: "Females are noticeably plumper and wider when viewed from above, especially when gravid (carrying eggs). Males are sleeker, smaller, and more streamlined. The difference is subtle in juveniles but becomes obvious as they mature. During breeding season, females become comically round—like tiny aquatic blimps with panda faces.",
    variants: ['Standard Panda (three black spots)', 'Longfin Panda (captive mutation - longer fins)', 'Albino/Leucistic Panda (extremely rare)'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'medium',
    trigger: 'Breeding Pandas requires mimicking Andean rainy season: large (40-50%) water change with COOL water (18-20°C)—yes, cooler than tank temp! This simulates mountain snowmelt flooding streams. Condition breeders with live/frozen foods (bloodworms, daphnia, brine shrimp) for 2-3 weeks prior. Spawning usually occurs 24-48 hours after cool water change. Males chase females in classic "T-position" courtship, following them around the tank persistently.',
    fryCare: 'Females lay 50-150 adhesive eggs on glass, plants, smooth rocks, and even filter intakes. Eggs are light yellow and sticky. IMPORTANT: Remove adults immediately after spawning—Pandas eat their own eggs enthusiastically. Eggs hatch in 3-5 days at 22°C (longer in cooler water). Fry are tiny and delicate. Feed microworms, infusoria, or powdered fry food for first week, then switch to baby brine shrimp. Growth is slower than Bronze Corys. Maintain pristine water (daily 10% changes) and cool temp (20-22°C). Fry develop panda markings at 4-6 weeks.',
    notes: 'Panda breeding is trickier than Bronze Corys due to their temperature sensitivity. Fry are more delicate and require cooler water (20-22°C) consistently. However, once you nail the temperature, success rates are decent. Many breeders report that Pandas take 12+ months to reach breeding maturity vs 6-8 months for Bronzes.',
  },
  
  experienceData: {
    successRate: 0.72,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'temperature-stress-death', cause: 'kept-too-warm-over-24C', frequency: 0.40 },
      { issue: 'barbel-erosion', cause: 'gravel-substrate', frequency: 0.25 },
      { issue: 'initial-die-off', cause: 'new-tank-or-transport-stress', frequency: 0.15 },
      { issue: 'nitrate-poisoning', cause: 'poor-maintenance', frequency: 0.10 },
      { issue: 'stress-death', cause: 'kept-alone-or-small-group', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 70, max: 180, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};
