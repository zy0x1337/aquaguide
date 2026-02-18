import type { Species } from '../../types/species';

export const celestialPearlDanio: Species = {
  id: 'danio-001',
  slug: 'celestial-pearl-danio',
  imageUrl: '/images/species/celestial-pearl-danio.jpeg',
  funFact: "Celestial Pearl Danios are the aquarium world's shooting stars—discovered in 2006 in Myanmar and instantly became sensations! Their galaxy-pattern pearl spots on dark blue bodies look like stars scattered across night sky—absolutely mesmerizing in planted tanks. They're so stunning they were over-collected and thought extinct in wild by 2007, but new populations were found. Males are tiny gladiators: watch them spar in harmless fin-flaring displays, circling each other like mini peacocks! Despite 1-inch size, they have huge personalities. Fun fact: they were originally called 'Galaxy Rasboras' but are true Danios (Danio margaritatus). Cooler water triggers breeding—18-19°C for eggs = 95% hatch rate vs 60% at 24°C!",

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
    color: 'Stunning! Dark midnight blue body covered in bright pearl-white/yellow spots creating iconic galaxy pattern. Males: intense blue-black with bright orange-red fins edged in black. Females: duller blue-grey with less intense coloration, rounder bodies. Fins have distinctive black-and-white striping',
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
      primary: 'midwater',
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
    planting: 'dense',
    plantingNotes:
      'Celestial Pearl Danios thrive in densely planted tanks—the more plants, the more confident and colorful they become! They prefer lower to mid-water zones, weaving through stems, roots, and crypts. Floating plants are essential for security and grazing microfauna. Dark substrate (black sand, dark gravel) makes their galaxy colors pop dramatically. Create sight-line breaks with plants so males can establish mini-territories without constant confrontation. Best plants: Java Moss (spawning mops), Java Fern, Anubias, Cryptocoryne, Vallisneria, floating plants (Salvinia, Frogbit, Red Root Floaters). Soft lighting preferred.',
    hardscape: ['Smooth river stones', 'Driftwood (creates shaded zones)', 'Leaf litter (Indian Almond leaves)', 'Caves/overhangs (line-of-sight breaks)'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'nano', 'colorful', 'active'],
    minGroupSize: 10,
    description:
      "Celestial Pearl Danios are tiny jewels with big personalities! They're highly social and thrive in groups of 10-20+—larger groups = bolder, more confident fish with intense colors. Watch males perform harmless sparring: they circle each other with fins fully spread, flaring like tiny peacocks in dazzling displays of dominance. No actual fighting—just beautiful choreography! They're active swimmers, constantly exploring mid-water zones, weaving through plants, and grazing biofilm. Unlike typical danios, CPDs are timid without dense plants—in sparse tanks they hide constantly. With proper planting, they become confident and endlessly entertaining. Female-heavy ratios (2-3 females per male) reduce male aggression and create peaceful groups.",
    
    compatibility: {
      goodMates: ['Chili Rasboras', 'Ember Tetras', 'Pygmy Corydoras', 'Otocinclus', 'Small peaceful snails', 'Cherry Shrimp (adults safe, shrimplets may be eaten)', 'Kuhli Loaches'],
      badMates: ['Large fish (will eat CPDs)', 'Aggressive fish', 'Fast/boisterous feeders (Zebra Danios, Tiger Barbs)', 'Angelfish (too large)', 'Bettas (may nip CPD fins)'],
      notes:
        'Celestial Pearl Danios are perfect for nano tanks and peaceful community setups. They\'re easily intimidated by larger or more boisterous tankmates and will hide constantly. Best kept with similar-sized, peaceful species or in species-only tanks. Shrimp-safe (adult shrimp ignored; shrimplets occasionally eaten). Groups of 10+ spread aggression and bring out bolder behaviors. Female-biased ratios help reduce male sparring.',
      
      rules: [
        {
          type: 'requires',
          condition: 'groups of 10+ fish',
          reason: 'CPDs are highly social and timid in small groups. Groups under 10 = stressed, hiding fish with faded colors. Groups of 10-20+ = confident, active, intensely colored fish. Larger groups spread male aggression',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'densely planted tank with floating plants',
          reason: 'CPDs are plant-dependent. Without dense plants, they hide constantly and show stress (faded colors). Floating plants = security. Dense planting = confident, visible fish',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'large or aggressive fish',
          reason: 'CPDs are tiny (1 inch) and easily intimidated/eaten by larger fish. Keep with similar-sized peaceful species only',
          severity: 'high',
        },
        {
          type: 'warning',
          condition: 'female-biased ratio (2-3 females per male)',
          reason: 'Reduces male territorial sparring and creates more peaceful group dynamics. Too many males = constant displays',
          severity: 'low',
        },
      ],
      
      idealTankmates: {
        surface: 0-6,
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
      type: 'shoal',
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
      'Densely planted tank with floating plants', 
      'Dark substrate (makes colors pop)', 
      'Cooler water preferred (20-24°C)', 
      'Female-biased ratio reduces aggression',
    ],

    proTips: [
      "GROUP SIZE = COLOR INTENSITY! Small groups (under 10) = stressed, faded, hiding fish. Groups of 10-20+ = confident, intense colors, constant activity, natural sparring displays. The difference is dramatic. Always buy 10+ if possible.",
      "Cooler water = better colors + breeding! CPDs prefer 20-24°C (68-75°F), cooler than most tropical fish. At 22°C, colors are intense and breeding happens naturally. Higher temps (26°C+) stress them and reduce breeding success.",
      "Dark substrate = galaxy effect! Black sand or dark gravel makes pearl spots pop dramatically. Light substrates wash out colors. Trust me—the visual difference is stunning!",
      "Watch the sparring shows! Males perform daily harmless displays: circling each other with fins fully spread, flaring like tiny peacocks. It's beautiful choreographed behavior, not fighting. No injuries occur.",
      "Live/frozen food = intense colors! Feed daphnia, baby brine shrimp, microworms, bloodworms. Colors intensify within days. They accept quality flakes/micro-pellets but live food brings out galaxy brilliance.",
      "Floating plants = confident fish! Without floating cover, CPDs hide constantly. Add Salvinia, Frogbit, Red Root Floaters. They'll venture out more with overhead security.",
      "Female-heavy groups (2-3 females per male) reduce male aggression and create peaceful dynamics. Too many males = constant sparring (harmless but distracting).",
    ],

    commonMistakes: [
      "Small groups (under 10) = stressed hiding fish. CPDs are highly social and need 10-20+ to feel secure. Alone or in pairs = faded colors, constant hiding, stress. Beginners buy 6 and wonder why fish hide—group size matters!",
      "Sparse planting = invisible fish. CPDs are plant-dependent. Without dense plants and floating cover, they hide constantly. Heavily planted tanks = confident, visible, colorful fish. The difference is night and day.",
      "Water too warm (26°C+). CPDs prefer cooler water (20-24°C). Higher temps stress them, fade colors, and reduce breeding. They're not typical tropical fish—keep cooler!",
      "Light substrate. White sand/gravel washes out colors. Dark substrate makes galaxy spots pop dramatically. Simple change = huge visual impact.",
      "Mixed with large/aggressive fish. CPDs are tiny (1 inch) and timid. Angelfish, Bettas, Tiger Barbs intimidate/eat them. Keep with peaceful nano species only.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'crushed-flakes', 'daphnia', 'brine-shrimp'],
      supplements: ['bloodworms', 'spirulina'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: false,
      notes: 'Weekly 30% water changes. CPDs prefer stable, cooler water (20-24°C). Keep nitrates below 10ppm—they\'re sensitive to poor water quality. Low flow preferred (mimics seasonal pools). Mature planted tanks with biofilm help significantly.',
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
    lifespanYears: 4,
    commonDiseases: ['ich', 'velvet', 'internal-parasites', 'stress-fading'],
    sensitivities: ['Warm water (over 26°C)', 'Poor water quality (nitrates)', 'Sparse planting (chronic stress)', 'Small groups (social stress)'],
  },

  scientificContext: {
    wildHabitat:
      'Celestial Pearl Danios inhabit shallow, vegetated seasonal ponds and small streams in Hopong area near Inle Lake, Myanmar (Shan State). Wild habitat: shallow (10-30cm deep) spring-fed pools with dense aquatic vegetation, floating plants, leaf litter substrate, moderate to cool temperatures (20-24°C), soft to moderate hardness (GH 4-10), neutral pH (6.5-7.5). Water is clear with low flow. They occupy mid-water zones among plants, feeding on zooplankton, insect larvae, and algae. Discovered 2006; over-collection nearly caused extinction; now captive-bred.',
    sexualDimorphism:
      'Easy to sex! Males: Intensely colored with dark blue-black body, bright pearl spots, vivid orange-red fins with black edging. Slimmer, more streamlined body. Actively spar and display. Females: Duller blue-grey body, less intense pearl spots, pale orange fins. Rounder, fuller body especially when gravid. Less active, ignore sparring. Juveniles (under 3 months) difficult to sex—wait for maturity.',
    variants: ['Standard Celestial Pearl Danio (wild-type coloration)', 'Some line-bred strains show enhanced orange/red coloration'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger:
      'Celestial Pearl Danios breed easily in heavily planted tanks—often spontaneously! Trigger breeding: 1) Mature group (6+ months old) with 10+ fish, female-biased ratio, 2) Dense planting especially Java Moss or fine-leaved plants (spawning mops), 3) Excellent conditioning with live foods (daphnia, baby brine shrimp, microworms) for 2 weeks, 4) Cooler water (20-22°C)—critical for high hatch rates, 5) Increased water changes (40% twice weekly). Males intensify displays and chase females into plants.',
    fryCare:
      'Females scatter 20-50 tiny eggs among fine-leaved plants (Java Moss ideal). CRITICAL: Eggs hatch best at 18-19°C (95% hatch rate) vs 60% at 24°C! Adults eat eggs constantly—collect eggs daily using turkey baster or remove spawning mops to separate hatching tank. Eggs hatch in 2-4 days at 22°C (longer at cooler temps). Fry are tiny (2mm) and free-swimming. Feed infusoria/green water for 5-7 days, then graduate to micro foods: baby brine shrimp nauplii, microworms, finely crushed flakes. Growth is slow: 1cm at 8 weeks, mature at 6 months. Fry accept prepared foods easier than many species.',
    notes:
      'CPDs are prolific breeders in proper conditions. Spawning happens almost daily in healthy groups. Main challenge: egg-eating by adults. Either: 1) Heavily plant tank so some eggs survive naturally (easiest), 2) Collect eggs daily and hatch separately (higher survival), 3) Remove spawning mops. Cooler water (18-19°C) for egg hatching = 95% hatch success. Fry care is easy compared to other nano fish.',
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
