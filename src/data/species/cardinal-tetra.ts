import type { Species } from '../../types/species';

export const cardinalTetra: Species = {
  id: 'tetra-002',
  slug: 'cardinal-tetra',
  imageUrl: '/images/species/cardinal-tetra.jpg',
  funFact: "Cardinal Tetras have a red stripe that runs the FULL length of their body (unlike Neons where it stops halfway). In the wild, they form massive schools of thousands in the blackwater tributaries of the Rio Negro, creating a living river of red and blue.",

  taxonomy: {
    scientificName: 'Paracheirodon axelrodi',
    commonName: 'Cardinal Tetra',
    family: 'Characidae',
    origin: 'Brazil, Venezuela, Colombia (Rio Negro, Orinoco Basin)',
    region: 'South America',
    biotope: 'Blackwater rivers and flooded forest streams with extremely soft, acidic, tannin-stained water',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
    color: 'Electric blue horizontal stripe above full-length bright red belly, creating stunning contrast',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 75,
    tempC: { min: 23, max: 27, ideal: 25 },
    ph: { min: 4.5, max: 7.0, ideal: 5.5 },
    gh: { min: 1, max: 10 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'all',
      preference: 0.80,
    },
    
    spaceNeeds: {
      horizontalCM: 55,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.35,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense background and sides with Cryptocoryne, Amazon Swords, and Java Fern. Leave the center open for schooling displays. Floating plants (Red Root Floaters, Frogbit) create the dim lighting they prefer. Dark substrate (black sand or dark gravel) dramatically enhances their red coloration. Add leaf litter (Indian Almond, Oak leaves) to release tannins and mimic their blackwater habitat.',
    hardscape: ['Driftwood (Spider Wood, Mopani)', 'Smooth River Rocks', 'Indian Almond Leaves', 'Oak Leaf Litter'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater', 'shy', 'diurnal', 'colorful'],
    minGroupSize: 12,
    description: 'Cardinals are the more vibrant, hardier cousins of Neon Tetras. They form loose shoals that tighten dramatically when startled, creating a mesmerizing wave of red and blue. Unlike true schooling fish, they maintain individual personalities while staying near the group for security. They explore the entire tank confidently when kept in proper numbers (12+), but become shy and hide constantly in smaller groups. Their red stripe is a health indicator—bright red means happy and healthy, pale pink signals stress or illness.',
    
    compatibility: {
      goodMates: ['Corydoras', 'Otocinclus', 'Harlequin Rasboras', 'Rummynose Tetras', 'Dwarf Cichlids (Apistogramma, Rams)', 'Peaceful Gouramis', 'Cherry Shrimp', 'Nerite Snails'],
      badMates: ['Angelfish (will hunt them as adults)', 'Large Cichlids', 'Goldfish', 'Aggressive Barbs', 'Betta (situational - some work, some attack)'],
      notes: 'Cardinals are significantly hardier than Neon Tetras and better suited for community tanks. Their larger size (5cm vs 3cm) makes them less vulnerable to predation, but Angelfish still pose a risk once fully grown. They prefer warmer water than Neons, making them compatible with most tropical species.',
      
      rules: [
        {
          type: 'avoid',
          target: 'angelfish',
          reason: 'Angelfish prey on tetras in the wild. While Cardinals are larger than Neons, adult Angelfish (4+ inches) will still hunt them',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'large predatory fish',
          reason: 'Any fish with a mouth large enough to swallow a 5cm fish poses a threat',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 12',
          reason: 'Cardinals need large groups for psychological security. Groups under 12 become stressed, hide constantly, and lose vibrant coloration',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'neon tetras',
          reason: 'Can be kept together but have different temperature preferences. Cardinals prefer warmer (25°C) vs Neons cooler (23°C). Meet in the middle at 24°C',
          severity: 'low',
        },
        {
          type: 'requires',
          condition: 'tank-cycled >= 6 weeks',
          reason: 'More tolerant of new tanks than Neons, but still sensitive to ammonia and nitrite. Wait 6+ weeks after cycling',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '12-30',
        bottom: '6-15',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 1,
      territorial: 0,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'afternoon'],
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
      'Must be kept in groups of 12+ for confidence and color display', 
      'Prefer warmer water (25°C) than Neon Tetras (23°C)', 
      'Soft lighting strongly recommended (floating plants)',
      'Dark substrate brings out stunning red coloration',
    ],

    proTips: [
      "Cardinals are MORE expensive than Neons (€3-4 vs €1-2 each) but significantly hardier. They tolerate new tanks better and live longer—worth every cent.",
      "Temperature is KEY: Cardinals prefer 25°C while Neons prefer 23°C. If keeping both, compromise at 24°C, but Cardinals alone thrive warmer.",
      "Red stripe = health barometer. Bright, vibrant red means they're happy. Pale pink or washed-out red indicates stress, poor diet, or disease.",
      "Feed micro-foods. Their mouths are tiny despite being larger than Neons. Use micro-pellets (0.5-1mm), crushed flakes, or finely ground foods.",
      "Buy captive-bred when possible. Wild-caught Cardinals often carry parasites and struggle to adapt to aquarium conditions. Captive-bred are hardier.",
      "Blackwater setup = maximum color. Add Indian Almond Leaves or Alder Cones to tint the water tea-colored. This mimics their natural habitat and intensifies coloration.",
    ],

    commonMistakes: [
      "Thinking they're the same as Neon Tetras. Cardinals are WARMER water fish (25°C vs 23°C) and need slightly larger tanks due to bigger schools.",
      "Buying only 6-8. This causes chronic stress and hiding behavior. 12 is the absolute minimum; 20+ creates spectacular displays.",
      "Adding them too early. While hardier than Neons, they still struggle in brand-new tanks. Wait 6-8 weeks after cycling.",
      "Hard water tanks. Cardinals need soft water (GH <10). In hard water, their colors fade and they become more susceptible to disease.",
      "Keeping them with Angelfish. This combo is popular in stores but problematic. Adult Angelfish will hunt Cardinals just like Neons.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'flakes', 'brine-shrimp', 'daphnia'],
      supplements: ['bloodworms', 'spirulina', 'frozen-food'],
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
      notes: 'Cardinals tolerate parameter fluctuations better than Neons but still prefer stability. Match new water temperature to tank (25°C). Vacuum gently to avoid stirring up detritus.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 75,
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
    lifespanYears: 5,
    commonDiseases: ['neon-tetra-disease', 'ich', 'columnaris', 'velvet', 'parasites'],
    sensitivities: ['Ammonia spikes', 'High nitrates (>20ppm)', 'Hard water', 'Bright lighting', 'Temperature shocks'],
  },

  scientificContext: {
    wildHabitat: "Cardinals inhabit the blackwater tributaries of the Rio Negro and Orinoco River systems in South America. These waters are extremely soft (GH <1), highly acidic (pH 4.0-5.5), and stained dark brown by tannins from decaying leaves. The water is so soft it's almost pure H2O. During the rainy season (December-May), they move into flooded forest areas where they spawn among submerged roots and leaf litter. Schools of thousands create spectacular displays in shallow water (10-60cm deep).",
    sexualDimorphism: "Subtle and difficult to distinguish. Females are noticeably fuller and rounder in the belly, especially when carrying eggs. Males are slimmer and slightly smaller overall. The blue stripe remains consistent, but females may appear slightly less vibrant when spawning. Unlike some tetras, males don't develop hooks or extended fins.",
    variants: ['Standard Cardinal', 'Wild-Caught (more vibrant but sensitive)', 'Captive-Bred (hardier, recommended for beginners)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Breeding Cardinals is extremely challenging. Requires RO water (GH <1, KH 0) acidified to pH 5.0-5.5 using peat or commercial pH-down. Complete darkness is essential—eggs are photosensitive and die if exposed to light. Condition breeders separately with live foods (daphnia, brine shrimp, bloodworms) for 2-3 weeks. Introduce pairs into breeding tank at night (lights off). Males display by swimming in tight circles around females.',
    fryCare: 'Eggs hatch in 24-30 hours but remain incredibly light-sensitive for the first week. Cover breeding tank with black fabric or keep in complete darkness. Fry are microscopic and require green water (infusoria), paramecium, or ultra-fine liquid fry food. After 5-7 days, introduce newly-hatched Artemia nauplii. Gradually increase lighting over 10 days. Mortality is very high (60-80%) even with expert care. Growth is slow—fry take 8-10 weeks to reach sellable size.',
    notes: 'Cardinal breeding is considered one of the most difficult projects in the aquarium hobby. The combination of extreme water softness, total darkness, photosensitive eggs, and microscopic fry makes success rare. Most Cardinals in the trade are now wild-caught from sustainable fisheries in Brazil, though Asian farms are beginning to produce captive-bred specimens. Breeding Cardinals at home is a bucket-list challenge for expert breeders.',
  },
  
  experienceData: {
    successRate: 0.78,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'neon-tetra-disease', cause: 'weak-genetics-or-parasites', frequency: 0.25 },
      { issue: 'stress-death', cause: 'group-too-small', frequency: 0.20 },
      { issue: 'predation', cause: 'angelfish-tankmates', frequency: 0.15 },
      { issue: 'ich', cause: 'temperature-fluctuation', frequency: 0.12 },
      { issue: 'color-fading', cause: 'hard-water-or-bright-light', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 80, max: 200, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};
