import type { Species } from '../../types/species';

export const celestialPearlDanio: Species = {
  id: 'danio-001',
  slug: 'celestial-pearl-danio',
  imageUrl: '/images/species/celestial-pearl-danio.jpeg',
  funFact: "Celestial Pearl Danios are the AQUARIUM WORLD'S SHOOTING STARS—discovered in 2006 in Myanmar and instantly became sensations! Their GALAXY-PATTERN pearl spots on dark blue bodies look like stars scattered across night sky—absolutely MESMERIZING in planted tanks. They're so stunning they were OVER-COLLECTED and thought EXTINCT in wild by 2007, but new populations were found. Males are TINY GLADIATORS: watch them SPAR in harmless fin-flaring displays, circling each other like mini peacocks! Despite 1-inch size, they have HUGE personalities. Fun fact: they were originally called 'Galaxy Rasboras' but are TRUE DANIOS (Danio margaritatus). Cooler water triggers breeding—18-19°C for eggs = 95% hatch rate vs 60% at 24°C!",

  taxonomy: {
    scientificName: 'Danio margaritatus',
    commonName: 'Celestial Pearl Danio',
    family: 'Cyprinidae',
    origin: 'Myanmar (Inle Lake region, Hopong area - shallow seasonal ponds)',
    region: 'Asia',
    biotope: 'Shallow, vegetated seasonal pools and small streams with dense floating plants, leaf litter, moderate to cool temperatures (20-24°C)',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 2.5,
    color: 'STUNNING! Dark midnight blue body covered in bright pearl-white/yellow spots creating iconic GALAXY PATTERN. Males: intense blue-black with bright orange-red fins edged in black. Females: duller blue-grey with less intense coloration, rounder bodies. Fins have distinctive black-and-white striping',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 20, max: 26, ideal: 22 },
    ph: { min: 6.5, max: 7.5, ideal: 7.0 },
    gh: { min: 2, max: 12 },
    kh: { min: 1, max: 8 },
    flow: 'low',
    substrate: 'dark-sand',
    
    swimmingZone: {
      primary: 'middle',
      secondary: 'bottom',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 25,
      territories: 0.5,
    },
    
    bioloadMultiplier: 0.3,
  },

  habitat: {
    planting: 'heavy',
    plantingNotes:
      'Celestial Pearl Danios THRIVE in DENSELY PLANTED tanks—the more plants, the more confident and colorful they become! They prefer LOWER to MID-WATER zones, weaving through stems, roots, and crypts. FLOATING PLANTS are ESSENTIAL for security and grazing microfauna. Dark substrate (black sand, dark gravel) makes their GALAXY colors POP dramatically. Create sight-line breaks with plants so males can establish mini-territories without constant confrontation. Best plants: Java Moss (spawning mops), Java Fern, Anubias, Cryptocoryne, Vallisneria, floating plants (Salvinia, Frogbit, Red Root Floaters). Soft lighting preferred.',
    hardscape: ['Smooth river stones', 'Driftwood (creates shaded zones)', 'Leaf litter (Indian Almond leaves)', 'Caves/overhangs (line-of-sight breaks)'],
  },

  behavior: {
    tags: ['peaceful', 'shoaling', 'nano', 'colorful', 'active', 'plant_dependent'],
    minGroupSize: 10,
    description:
      'Celestial Pearl Danios are TINY JEWELS with BIG PERSONALITIES! They\'re highly SOCIAL and thrive in groups of 10-20+—larger groups = bolder, more confident fish with INTENSE colors. Watch males perform HARMLESS SPARRING: they circle each other with fins FULLY SPREAD, flaring like tiny peacocks in dazzling displays of dominance. No actual fighting—just beautiful choreography! They\'re ACTIVE swimmers, constantly exploring mid-water zones, weaving through plants, and grazing biofilm. Unlike typical danios, CPDs are TIMID without dense plants—in sparse tanks they hide constantly. With proper planting, they become CONFIDENT and endlessly entertaining. Female-heavy ratios (2-3 females per male) reduce male aggression and create peaceful groups.',
    
    compatibility: {
      goodMates: ['Chili Rasboras', 'Ember Tetras', 'Pygmy Corydoras', 'Otocinclus', 'Small peaceful snails', 'Cherry Shrimp (adults safe, shrimplets may be eaten)', 'Kuhli Loaches'],
      badMates: ['Large fish (will eat CPDs)', 'Aggressive fish', 'Fast/boisterous feeders (Zebra Danios, Tiger Barbs)', 'Angelfish (too large)', 'Bettas (may nip CPD fins)'],
      notes:
        'Celestial Pearl Danios are PERFECT for NANO TANKS and peaceful community setups. They\'re easily INTIMIDATED by larger or more boisterous tankmates and will hide constantly. Best kept with SIMILAR-SIZED, PEACEFUL species or in SPECIES-ONLY tanks. Shrimp-safe (adult shrimp ignored; shrimplets occasionally eaten). Groups of 10+ spread aggression and bring out bolder behaviors. Female-biased ratios help reduce male sparring.',
      
      rules: [
        {
          type: 'requires',
          condition: 'groups of 10+ fish',
          reason: 'CPDs are highly social and TIMID in small groups. Groups under 10 = stressed, hiding fish with faded colors. Groups of 10-20+ = confident, active, intensely colored fish. Larger groups spread male aggression',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'densely planted tank with floating plants',
          reason: 'CPDs are PLANT-DEPENDENT. Without dense plants, they hide constantly and show stress (faded colors). Floating plants = security. Dense planting = confident, visible fish',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'large or aggressive fish',
          reason: 'CPDs are TINY (1 inch) and easily intimidated/eaten by larger fish. Keep with similar-sized peaceful species only',
          severity: 'high',
        },
        {
          type: 'suggestion',
          condition: 'female-biased ratio (2-3 females per male)',
          reason: 'Reduces male territorial sparring and creates more peaceful group dynamics. Too many males = constant displays',
          severity: 'low',
        },
      ],
      
      idealTankmates: {
        surface: '0-6',
        midwater: '10-20',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 0,
      territorial: 2,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'group',
      maxMalesPerTank: 8,
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
      'Groups of 10-20+ (social species)', 
      'DENSELY planted tank with floating plants', 
      'Dark substrate (makes colors pop)', 
      'Cooler water preferred (20-24°C)', 
      'Female-biased ratio reduces aggression',
    ],

    proTips: [
      "GROUP SIZE = COLOR INTENSITY! Small groups (under 10) = stressed, faded, hiding fish. Groups of 10-20+ = CONFIDENT, INTENSE colors, constant activity, natural sparring displays. The difference is DRAMATIC. Always buy 10+ if possible.",
      "COOLER WATER = BETTER COLORS + BREEDING! CPDs prefer 20-24°C (68-75°F), COOLER than most tropical fish. At 22°C, colors are INTENSE and breeding happens naturally. Higher temps (26°C+) stress them and reduce breeding success.",
      "Dark substrate = GALAXY EFFECT! Black sand or dark gravel makes pearl spots POP dramatically. Light substrates wash out colors. Trust me—the visual difference is stunning!",
      "Watch the SPARRING SHOWS! Males perform daily harmless displays: circling each other with fins FULLY SPREAD, flaring like tiny peacocks. It's beautiful choreographed behavior, not fighting. No injuries occur.",
      "Live/frozen food = INTENSE COLORS! Feed daphnia, baby brine shrimp, microworms, bloodworms. Colors intensify within days. They accept quality flakes/micro-pellets but live food brings out GALAXY brilliance.",
      "Floating plants = CONFIDENT FISH! Without floating cover, CPDs hide constantly. Add Salvinia, Frogbit, Red Root Floaters. They'll venture out more with overhead security.",
      "Female-heavy groups (2-3 females per male) reduce male aggression and create peaceful dynamics. Too many males = constant sparring (harmless but distracting).",
    ],

    commonMistakes: [
      "Small groups (under 10) = stressed hiding fish. CPDs are HIGHLY social and need 10-20+ to feel secure. Alone or in pairs = faded colors, constant hiding, stress. Beginners buy 6 and wonder why fish hide—GROUP SIZE matters!",
      "Sparse planting = invisible fish. CPDs are PLANT-DEPENDENT. Without dense plants and floating cover, they hide constantly. Heavily planted tanks = confident, visible, colorful fish. The difference is night and day.",
      "Water too warm (26°C+). CPDs prefer COOLER water (20-24°C). Higher temps stress them, fade colors, and reduce breeding. They're not typical tropical fish—keep cooler!",
      "Light substrate. White sand/gravel washes out colors. Dark substrate makes GALAXY spots POP dramatically. Simple change = huge visual impact.",
      "Mixed with large/aggressive fish. CPDs are TINY (1 inch) and TIMID. Angelfish, Bettas, Tiger Barbs intimidate/eat them. Keep with peaceful nano species only.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'crushed-flakes', 'daphnia', 'baby-brine-shrimp'],
      supplements: ['bloodworms', 'microworms', 'spirulina'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'weekly',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: false,
      notes: 'Weekly 30% water changes. CPDs prefer STABLE, COOLER water (20-24°C). Keep nitrates below 10ppm—they\'re sensitive to poor water quality. Low flow preferred (mimics seasonal pools). Mature planted tanks with biofilm help significantly.',
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
    lifespanYears: 4,
    commonDiseases: ['ich', 'velvet', 'internal-parasites', 'stress-fading'],
    sensitivities: ['Warm water (over 26°C)', 'Poor water quality (nitrates)', 'Sparse planting (chronic stress)', 'Small groups (social stress)'],
  },

  scientificContext: {
    wildHabitat:
      'Celestial Pearl Danios inhabit shallow, vegetated seasonal ponds and small streams in Hopong area near Inle Lake, Myanmar (Shan State). Wild habitat: shallow (10-30cm deep) spring-fed pools with DENSE aquatic vegetation, floating plants, leaf litter substrate, moderate to COOL temperatures (20-24°C), soft to moderate hardness (GH 4-10), neutral pH (6.5-7.5). Water is clear with low flow. They occupy mid-water zones among plants, feeding on zooplankton, insect larvae, and algae. Discovered 2006; over-collection nearly caused extinction; now captive-bred.',
    sexualDimorphism:
      'EASY TO SEX! MALES: Intensely colored with dark blue-black body, bright pearl spots, VIVID orange-red fins with black edging. Slimmer, more streamlined body. Actively spar and display. FEMALES: Duller blue-grey body, less intense pearl spots, pale orange fins. ROUNDER, fuller body especially when gravid. Less active, ignore sparring. Juveniles (under 3 months) difficult to sex—wait for maturity.',
    variants: ['Standard Celestial Pearl Danio (wild-type coloration)', 'Some line-bred strains show enhanced orange/red coloration'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger:
      'Celestial Pearl Danios breed EASILY in heavily planted tanks—often spontaneously! Trigger breeding: 1) Mature group (6+ months old) with 10+ fish, female-biased ratio, 2) DENSE planting especially JAVA MOSS or fine-leaved plants (spawning mops), 3) Excellent conditioning with LIVE FOODS (daphnia, baby brine shrimp, microworms) for 2 weeks, 4) COOLER water (20-22°C)—critical for high hatch rates, 5) Increased water changes (40% twice weekly). Males intensify displays and chase females into plants.',
    fryCare:
      'Females scatter 20-50 TINY eggs among fine-leaved plants (Java Moss ideal). CRITICAL: Eggs hatch BEST at 18-19°C (95% hatch rate) vs 60% at 24°C! Adults EAT eggs constantly—collect eggs daily using turkey baster or remove spawning mops to separate hatching tank. Eggs hatch in 2-4 days at 22°C (longer at cooler temps). Fry are TINY (2mm) and free-swimming. Feed infusoria/green water for 5-7 days, then graduate to MICRO FOODS: baby brine shrimp nauplii, microworms, finely crushed flakes. Growth is SLOW: 1cm at 8 weeks, mature at 6 months. Fry accept prepared foods easier than many species.',
    notes:
      'CPDs are PROLIFIC breeders in proper conditions. Spawning happens almost DAILY in healthy groups. Main challenge: EGG-EATING by adults. Either: 1) Heavily plant tank so some eggs survive naturally (easiest), 2) Collect eggs daily and hatch separately (higher survival), 3) Remove spawning mops. Cooler water (18-19°C) for egg hatching = 95% hatch success. Fry care is EASY compared to other nano fish.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'constant-hiding-faded-colors', cause: 'small-groups-under-10-or-sparse-planting', frequency: 0.35 },
      { issue: 'stress-and-disease', cause: 'water-too-warm-over-26C', frequency: 0.20 },
      { issue: 'intimidation-by-tankmates', cause: 'mixed-with-large-or-aggressive-fish', frequency: 0.18 },
      { issue: 'washed-out-colors', cause: 'light-substrate-or-poor-diet', frequency: 0.15 },
      { issue: 'breeding-failure', cause: 'too-warm-water-for-egg-hatching', frequency: 0.12 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 200, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};
