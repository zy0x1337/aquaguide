import type { Species } from '../../types/species';

export const cardinalTetra: Species = {
  id: 'tetra-002',
  slug: 'cardinal-tetra',
  imageUrl: '/images/species/cardinal-tetra.jpg',
  funFact: "Cardinal Tetras are the 'superior' version of Neon Tetras—larger, hardier, and more stunning with a red stripe that runs the full length of their body (Neons stop halfway). In the wild, they form massive schools of thousands in the blackwater tributaries of the Rio Negro, creating a living river of electric blue and crimson red. Watch them in your aquarium: when startled, the loose shoal snaps into a synchronized formation like a single organism, then slowly relaxes back into individuals exploring the tank. It's underwater ballet meets flash mob!",

  taxonomy: {
    scientificName: 'Paracheirodon axelrodi',
    commonName: 'Cardinal Tetra',
    family: 'Characidae',
    origin: 'Brazil, Venezuela, Colombia (Rio Negro, Orinoco Basin - blackwater tributaries)',
    region: 'South America',
    biotope: 'Blackwater rivers and flooded forest streams with extremely soft, acidic, tannin-stained water (pH 4.0-5.5, GH <1). Shallow water (10-60cm) with dense leaf litter and submerged roots',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 5,
    color: 'Electric blue horizontal stripe running from nose to tail, above a full-length bright crimson-red belly. The blue glows like neon; the red is intense (vs Neon Tetras where red only covers back half). Dark substrate and tannin-stained water make colors pop dramatically',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 75,
    tempC: { min: 23, max: 28, ideal: 25 },
    ph: { min: 4.5, max: 7.5, ideal: 6.0 },
    gh: { min: 1, max: 12 },
    kh: { min: 1, max: 8 },
    flow: 'low',
    substrate: 'dark',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'all',
      preference: 0.80,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.35,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Cardinal Tetras look stunning in heavily planted blackwater-style tanks. Plant densely on background and sides with Cryptocoryne, Amazon Swords, Java Fern, and Anubias. Leave center open for schooling displays—watching 20+ Cardinals swim in synchronized waves through open water is the main attraction! Floating plants (Red Root Floaters, Frogbit, Water Sprite) create the dim lighting they prefer—Cardinals are blackwater fish adapted to shaded forest streams. Dark substrate (black sand or dark gravel) dramatically enhances their red coloration—the contrast is stunning. Add leaf litter (Indian Almond, Oak leaves) to release tannins and stain water amber/tea-color—mimics natural habitat and brings out maximum color intensity.',
    hardscape: ['Driftwood (Spider Wood, Mopani - releases tannins)', 'Smooth River Rocks', 'Indian Almond Leaves (tannins + biofilm)', 'Oak Leaf Litter'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater', 'shy', 'diurnal', 'colorful'],
    minGroupSize: 12,
    description: 'Cardinal Tetras are the more vibrant, hardier cousins of Neon Tetras—think of them as "Neon Tetras 2.0." They form loose shoals that swim independently, exploring plants and grazing on biofilm, but when startled (shadow, sudden movement), the shoal snaps into a tight synchronized formation and zooms away like a single organism. It\'s mesmerizing! They explore the entire tank confidently when kept in proper numbers (12+), but become shy and hide constantly in small groups (under 10). Their red stripe is a health barometer: bright vibrant red = happy, healthy fish; pale pink or washed-out = stress, poor diet, illness. Cardinals are peaceful toward all tankmates—no fin-nipping, no aggression. They\'re active during the day, most vibrant in morning after feeding.',
    
    compatibility: {
      goodMates: ['Corydoras (all species)', 'Otocinclus', 'Harlequin Rasboras', 'Rummynose Tetras', 'Ember Tetras', 'Dwarf Cichlids (Apistogramma, Rams)', 'Peaceful Gouramis (Honey, Pearl)', 'Cherry Shrimp', 'Nerite Snails', 'Mystery Snails'],
      badMates: ['Angelfish (hunt tetras as adults)', 'Large Cichlids', 'Goldfish', 'Aggressive Barbs', 'Bettas (situational—some coexist, some attack)', 'Pufferfish'],
      notes: 'Cardinals are significantly hardier than Neon Tetras and better suited for community tanks. Their larger size (5cm vs 3cm Neons) makes them less vulnerable to predation—but Angelfish still pose a risk once fully grown (4+ inches). Cardinals prefer warmer water (25°C) than Neons (23°C), making them compatible with most tropical species. Avoid mixing Cardinals with Neons unless you can compromise temp at 24°C—Cardinals will tolerate it but prefer warmer.',
      
      rules: [
        {
          type: 'avoid',
          target: 'angelfish',
          reason: 'Angelfish prey on tetras in the wild. While Cardinals are larger than Neons (5cm vs 3cm), adult Angelfish (4+ inches) will still hunt them. Young Angels (under 3 inches) coexist peacefully, but once Angels mature they become predators. Not worth the risk',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'large predatory fish',
          reason: 'Any fish with mouth large enough to swallow a 5cm fish poses threat. Cardinals are small, peaceful, and defenseless',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group size 12+ fish',
          reason: 'Cardinals need large groups for psychological security. Groups under 12 become stressed, hide constantly, lose vibrant coloration, and die prematurely. 12 is absolute minimum; 20-30 creates spectacular natural behavior',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'neon tetras',
          reason: 'Can be kept together but have different temperature preferences. Cardinals prefer warmer (25°C) vs Neons cooler (23°C). Compromise at 24°C but neither will be optimal. Better to keep one species or the other',
          severity: 'low',
        },
        {
          type: 'requires',
          condition: 'tank cycled 6+ weeks',
          reason: 'Cardinals are more tolerant of new tanks than Neons but still sensitive to ammonia and nitrite. Wait 6-8 weeks after cycling before adding',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 0-10,
        midwater: '12-30',
        bottom: '6-15',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
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
      'Cycled tank (6+ weeks) required',
    ],

    proTips: [
      "Cardinals vs Neons: Cardinals are more expensive (€3-5 vs €1-2 each) but significantly hardier. They tolerate new tanks better, live longer (5 years vs 3), handle warmer water (better for most community tanks), and are larger (less vulnerable to predation). Worth every cent!",
      "Temperature is KEY: Cardinals prefer 25°C while Neons prefer 23°C. If keeping both, compromise at 24°C, but Cardinals alone thrive warmer. Most tropical tanks run 25-26°C = Cardinals are perfect fit.",
      "Red stripe = health barometer. Bright, vibrant crimson red = happy, healthy fish. Pale pink or washed-out red = stress, poor diet, disease, or wrong water parameters. It's an instant visual check!",
      "Feed micro-foods. Their mouths are tiny despite being larger than Neons. Use micro-pellets (0.5-1mm), finely crushed flakes, or baby brine shrimp. Large pellets = ignored.",
      "Buy captive-bred when possible (ask store). Wild-caught Cardinals often carry parasites (especially Neon Tetra Disease) and struggle to adapt. Captive-bred (mostly from Asian farms now) are hardier and less disease-prone.",
      "Blackwater setup = maximum color. Add Indian Almond Leaves or Alder Cones to tint water tea-colored. This mimics natural Rio Negro habitat and intensifies red/blue coloration dramatically. Plus tannins have antibacterial properties.",
      "Wild-caught Cardinals support sustainable fisheries! Rio Negro fishery is eco-certified—local communities earn income protecting rainforest instead of logging. Buying wild Cardinals helps conservation (but captive-bred are hardier for beginners).",
    ],

    commonMistakes: [
      "Thinking they're same as Neon Tetras. Cardinals are warmer water fish (25°C vs 23°C), larger (5cm vs 3cm), hardier, and need slightly bigger tanks due to larger schools. They're different species with different needs!",
      "Buying only 6-8. This causes chronic stress and hiding behavior. They lose color, stop eating, and die prematurely. 12 is absolute minimum; 20-30 creates spectacular displays worth the investment.",
      "Adding them too early. While hardier than Neons, Cardinals still struggle in brand-new tanks. Wait 6-8 weeks after cycling. Ammonia/nitrite = rapid death.",
      "Hard water tanks. Cardinals need soft water (GH <10, ideally <6). In hard water (GH 15+), colors fade and they become susceptible to disease. Use RO water or rainwater if tap is hard.",
      "Keeping them with Angelfish. This combo is popular in stores (both from Amazon!) but problematic. Adult Angels hunt Cardinals. Stores sell juveniles that get along—6 months later, Cardinals disappear one by one.",
      "Bright lighting. Cardinals are blackwater fish adapted to shaded forest streams. Bright lights = stressed, washed-out colors. Use floating plants to diffuse light or keep lighting low/medium.",
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
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Weekly 30% water changes maintain stability. Cardinals tolerate parameter fluctuations better than Neons but still prefer stability. Match new water temperature to tank (25°C) to avoid shock. Vacuum gently—Cardinals are sensitive to disturbed substrate stirring up waste.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
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
    sensitivities: ['Ammonia spikes', 'High nitrates (>20ppm)', 'Hard water', 'Bright lighting', 'Temperature shocks', 'Sudden parameter changes'],
  },

  scientificContext: {
    wildHabitat: "Cardinal Tetras inhabit the blackwater tributaries of the Rio Negro and Orinoco River systems in South America (Brazil, Venezuela, Colombia). These waters are extremely soft (GH <1—almost pure H2O), highly acidic (pH 4.0-5.5), and stained dark brown by tannins from decaying leaves and driftwood. Water is warm (24-28°C year-round), shallow (10-60cm), and dimly lit due to forest canopy and water staining. During rainy season (December-May), they migrate into flooded forest areas where they spawn among submerged roots, leaf litter, and dense vegetation. Schools of thousands create spectacular displays—locals call them 'neon fish' because the blue stripe glows in dim light.",
    sexualDimorphism: "Subtle and difficult to distinguish. Females are noticeably fuller and rounder in belly, especially when carrying eggs (gravid). Males are slimmer, more streamlined, and slightly smaller overall. Blue stripe remains consistent between sexes. Females may appear slightly less vibrant when actively spawning. Unlike some tetras, males don't develop hooks or extended fins. Best method: observe group from above—rounder fish with deeper bellies = females.",
    variants: ['Standard Cardinal (wild-type)', 'Wild-Caught (more vibrant but sensitive + parasites)', 'Captive-Bred (hardier, recommended for beginners - mostly from Asian farms now)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Breeding Cardinals is extremely challenging—one of the hardest projects in fishkeeping. Requires: 1) RO water (GH <1, KH 0) acidified to pH 5.0-5.5 using peat extract or commercial pH-down, 2) Complete darkness—eggs are photosensitive and die if exposed to light, 3) Separate conditioning for 2-3 weeks with live foods (daphnia, brine shrimp, bloodworms) until females visibly plump, 4) Breeding tank with spawning mops or Java Moss, 5) Introduce pairs at night (lights off). Males display by swimming in tight circles around females.',
    fryCare: 'Eggs hatch in 24-30 hours but remain incredibly light-sensitive for first week. Cover breeding tank with black fabric or keep in complete darkness. Fry are microscopic (smaller than Neon fry) and require green water (infusoria), paramecium, or ultra-fine liquid fry food. After 5-7 days, introduce newly-hatched Artemia nauplii (not adults). Gradually increase lighting over 10-14 days. Mortality is very high (60-80%) even with expert care. Fry are fragile and sensitive to water quality. Growth is slow: 8-10 weeks to reach sellable size (1.5cm).',
    notes: 'Cardinal breeding is considered one of the most difficult projects in aquarium hobby. Combination of extreme water softness, total darkness, photosensitive eggs, and microscopic fry makes success rare for hobbyists. Most Cardinals in trade are wild-caught from sustainable fisheries in Rio Negro Basin (Brazil)—this supports local conservation and communities. Asian farms are now producing captive-bred Cardinals (hardier) but wild-caught remain common. Breeding Cardinals at home is a bucket-list challenge for expert breeders—not recommended for beginners.',
  },
  
  experienceData: {
    successRate: 0.78,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'neon-tetra-disease', cause: 'wild-caught-parasites-or-weak-genetics', frequency: 0.25 },
      { issue: 'stress-death-hiding', cause: 'group-too-small-under-12', frequency: 0.20 },
      { issue: 'predation-by-angelfish', cause: 'kept-with-adult-angelfish', frequency: 0.15 },
      { issue: 'ich-outbreak', cause: 'temperature-fluctuation-or-stress', frequency: 0.12 },
      { issue: 'color-fading', cause: 'hard-water-or-bright-lighting', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 100, max: 250, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};
