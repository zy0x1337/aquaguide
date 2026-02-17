import type { Species } from '../../types/species';

export const neonTetra: Species = {
  id: 'tetra-001',
  slug: 'neon-tetra',
  imageUrl: '/images/species/neon-tetra.jpg',
  funFact: "In the wild, Neon Tetras live in blackwater streams so dark that their iridescent stripe is the only way they can locate each other in the gloom.",

  taxonomy: {
    scientificName: 'Paracheirodon innesi',
    commonName: 'Neon Tetra',
    family: 'Characidae',
    origin: 'Peru, Brazil (Amazon Basin, Solimões)',
    region: 'South America',
    biotope: 'Blackwater tributaries with tea-colored, acidic water rich in tannins from decaying leaves',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 3,
    color: 'Iridescent blue stripe, bright red belly, silver-white underside',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 20, max: 26, ideal: 23 },
    ph: { min: 5.0, max: 7.0, ideal: 6.0 },
    gh: { min: 2, max: 10 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 50,
      verticalCM: 25,
      territories: 0,
    },
    
    bioloadMultiplier: 0.3,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense background planting (Cryptocoryne, Anubias, Java Fern) provides security, but leave the center and front open for schooling. Floating plants (Frogbit, Water Lettuce) dim the lighting and recreate their dark blackwater habitat. Leaf litter on the substrate releases beneficial tannins.',
    hardscape: ['Branchy Driftwood', 'Indian Almond Leaves', 'River Stones', 'Bogwood'],
  },

  behavior: {
    tags: ['shoaler', 'shy', 'midwater', 'peaceful', 'diurnal'],
    minGroupSize: 10,
    description: 'A peaceful shoaling fish famous for its neon-like blue and red coloration. While often called "schooling," Neon Tetras in home aquariums display loose shoaling behavior—they swim near each other for security but forage independently. When startled, they tighten into a cohesive group. Their iridescent stripe evolved to help them stay visible to each other in pitch-black jungle streams. Colors fade dramatically under stress or when kept in groups smaller than 10.',
    
    compatibility: {
      goodMates: ['Corydoras', 'Otocinclus', 'Harlequin Rasboras', 'Dwarf Gouramis', 'Apistogramma', 'Cherry Shrimp', 'Nerite Snails'],
      badMates: ['Angelfish (natural predators)', 'Large Cichlids', 'Goldfish', 'Bettas (risk of fin-nipping)', 'Aggressive Barbs'],
      notes: 'Ideal community fish for nano and planted tanks. The primary risk is being seen as food by larger species. Angelfish and Neons is a classic combo in stores, but Angelfish are their natural predators in the Amazon and will hunt them when adult.',
      
      rules: [
        {
          type: 'avoid',
          target: 'angelfish',
          reason: 'Angelfish are natural predators of Neon Tetras in the wild and will hunt them once they reach adult size (4+ inches)',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'large cichlids',
          reason: 'Any fish with a mouth large enough to swallow a Neon will eventually try',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 10',
          reason: 'Neons are obligate shoalers and suffer psychological stress in groups under 10. Colors fade and they hide constantly',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'bettas',
          reason: 'Usually fine, but some Bettas may nip at Neons mistaking their movement for food. Monitor closely in first week',
          severity: 'low',
        },
        {
          type: 'requires',
          condition: 'tank-cycled >= 8 weeks',
          reason: 'Neons are sensitive to unstable water parameters and often die in new tanks (New Tank Syndrome)',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '10-20',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 1,
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
    cost: 'low',
    specialRequirements: [
      'Must be kept in groups of 10+ for psychological health', 
      'Only add to fully cycled tanks (8+ weeks old)', 
      'Soft lighting preferred (floating plants recommended)',
      'Avoid bright white substrates (use dark sand or gravel)',
    ],

    proTips: [
      "Dim the lights or add floating plants. In bright light, Neons lose confidence, stay near the bottom, and their colors fade.",
      "Add Indian Almond Leaves or Alder Cones. The tannins (which turn water tea-colored) mimic their natural blackwater habitat and boost their immune system against diseases.",
      "Feed tiny foods. Their mouths are incredibly small! Use crushed flakes, micro-pellets (< 0.5mm), or finely ground spirulina. They'll pick food off the substrate like bottom feeders.",
      "Dark substrate = vibrant colors. Neons evolved in streams with dark, muddy bottoms covered in leaves. White gravel causes stress and washed-out colors.",
      "Buy from reputable breeders if possible. Mass-farmed Neons (especially from Asia) often carry Neon Tetra Disease and have weaker genetics.",
    ],

    commonMistakes: [
      "Adding them to a brand-new tank. Neons are highly sensitive to ammonia and nitrite spikes. In tanks less than 8 weeks old, they often die from 'New Tank Syndrome' even if water tests look okay.",
      "Buying only 3-5. This causes chronic stress. They'll hide constantly, refuse to eat, and their colors will fade. 10 is the absolute minimum—larger groups (15-20) display far better behavior.",
      "Pairing them with Angelfish. It's the most popular combo in stores, but it's also terrible advice. Angelfish hunt Neons in the wild and will eat them once they're large enough.",
      "Keeping them in overly warm water (>26°C). Unlike their cousins the Cardinal Tetras, Neons prefer cooler temps (22-24°C). High temps shorten their lifespan.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'flakes', 'daphnia'],
      supplements: ['spirulina', 'bloodworms', 'brine-shrimp'],
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
      notes: 'Neons are sensitive to parameter swings. Use dechlorinated water matched to tank temp. Vacuum gently around plants to avoid disturbing them.',
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
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['neon-tetra-disease', 'ich', 'fin-rot', 'false-neon-disease', 'columnaris'],
    sensitivities: ['New Tank Syndrome', 'High Nitrite', 'Sudden pH swings', 'Bright light', 'High temperatures (>26°C)'],
  },

  scientificContext: {
    wildHabitat: "Inhabits clearwater and blackwater tributaries of the Amazon Basin, particularly the Solimões River in Peru and Brazil. The water is tea-colored due to tannins from decaying leaves, extremely soft (<1 dGH), and acidic (pH 4.0-6.0). These streams are shaded by dense jungle canopy, resulting in dim lighting conditions. The substrate is composed of fine sand, silt, and thick layers of leaf litter.",
    sexualDimorphism: "Subtle and difficult to identify. Females are noticeably rounder and deeper-bodied, especially when carrying eggs. This causes their iridescent blue stripe to appear 'bent' or curved. Males are slimmer with a straighter, more horizontal blue line. Under spawning conditions, males develop a slightly hooked anal fin.",
    variants: ['Longfin Neon', 'Gold Neon (Leucistic)', 'Diamond Head Neon', 'Albino Neon (extremely rare)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Breeding requires near-total darkness (eggs are photosensitive and will die if exposed to light). Use RO water or collected rainwater to achieve extremely soft water (GH < 1, KH 0) and acidify to pH 5.5 using peat moss or commercial pH-down. Condition breeding pairs separately with live foods (daphnia, brine shrimp) for 2 weeks. Introduce pair into breeding tank at night.',
    fryCare: 'Eggs hatch in 24 hours but remain light-sensitive for the first 5 days. Keep breeding tank in complete darkness or cover with black fabric. Fry are microscopic and require infusoria (green water) or liquid fry food for the first week. After 7 days, introduce newly-hatched brine shrimp. Gradually increase lighting over 2 weeks. Mortality is very high (50-70%) even with perfect care.',
    notes: 'Neon Tetra breeding is considered one of the hardest among common aquarium fish. The combination of extreme water softness, total darkness, and photosensitive eggs makes it a challenge even for experienced breeders. Most commercial Neons are now bred in massive farms in Asia using specialized RO systems.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'neon-tetra-disease', cause: 'weak-genetics', frequency: 0.30 },
      { issue: 'new-tank-syndrome', cause: 'added-too-early', frequency: 0.25 },
      { issue: 'predation', cause: 'incompatible-tankmates', frequency: 0.15 },
      { issue: 'stress-death', cause: 'group-too-small', frequency: 0.10 },
      { issue: 'ich', cause: 'temperature-shock', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 150, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};
