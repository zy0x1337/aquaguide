import type { Species } from '../../types/species';

export const blackSkirtTetra: Species = {
  id: 'tetra-004',
  slug: 'black-skirt-tetra',
  imageUrl: '/images/species/black-skirt-tetra.jpg',
  funFact: "Black Skirt Tetras are the 'elegant goths' of the aquarium world with flowing black 'skirts' (anal fins) that billow like Victorian mourning dresses. But don't let their graceful appearance fool you! Young Black Skirts have a nippy reputation (moody teenagers who pinch for fun). The good news? Fin nipping disappears in large groups (10+) and mature adults (1+ year). Keep them properly and watch them transform from bratty nippers into peaceful schooling beauties. Their black coloration fades with age (like goth kids discovering pastels), turning silvery grey. It's natural, not illness!",

  taxonomy: {
    scientificName: 'Gymnocorymbus ternetzi',
    commonName: 'Black Skirt Tetra',
    family: 'Characidae',
    origin: 'South America (Paraguay River Basin: Brazil, Bolivia, Argentina)',
    region: 'South America',
    biotope: 'Slow moving, shaded forest streams and tributaries with muddy substrates, dense vegetation, leaf litter, and tannin stained water',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 5,
    color: 'Juveniles (under 1 year): stunning jet black body with two thick vertical black bars behind gills, flowing black anal fin (the "skirt"), and silvery white belly. Adults (1+ years): Black fades to charcoal grey or silver grey with retained vertical bars. This is normal aging, not disease! Long fin variant has dramatically extended fins',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 20, max: 28, ideal: 24 },
    ph: { min: 6.0, max: 7.8, ideal: 6.8 },
    gh: { min: 5, max: 18 },
    kh: { min: 3, max: 12 },
    flow: 'moderate',
    substrate: 'dark',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.80,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.7,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Black Skirt Tetras thrive in densely planted tanks that mimic their wild shaded forest streams. They appreciate tall background plants (Vallisneria, Ludwigia, Rotala), mid ground bushy plants (Cryptocoryne, Hygrophila), and dark substrates (black sand or gravel) that intensify their black coloration. Floating plants (Water Sprite, Frogbit) create shaded areas they love. Dense planting reduces fin nipping by breaking lines of sight and providing security. Open swimming space in center is important for schooling displays. Leaf litter (Indian Almond, Oak leaves) adds tannins and mimics natural habitat.',
    hardscape: ['Driftwood (creates tannins plus shade)', 'Smooth river stones', 'Caves (rarely used)', 'Leaf litter'],
  },

  behavior: {
    tags: ['shoaler', 'semi-aggressive', 'midwater', 'active', 'fin_nipper'],
    minGroupSize: 10,
    description: 'Black Skirt Tetras are active, graceful schoolers with a complicated reputation. In large groups (10+), they are peaceful, elegant fish that swim in synchronized formations like aquatic ballet dancers. Their flowing "skirts" (anal fins) billow beautifully as they glide through planted tanks. HOWEVER: in small groups (under 8), they become nippy bullies—chasing tankmates, nipping fins, and causing chaos. This is stress behavior, not inherent aggression. Think of them as insecure teenagers: confident in large friend groups, anxious bullies when isolated. Juveniles (under 1 year) are especially nippy even in large groups—it is a phase they outgrow. Mature adults (1+ years) in proper group sizes (10+) are peaceful and community safe. They establish loose hierarchies within schools but rarely serious fighting. Most active during feeding time, zooming around midwater in tight formations.',
    
    compatibility: {
      goodMates: ['Fast swimming schoolers (Danios, other Tetras, Rasboras)', 'Bottom dwellers (Corydoras, Loaches)', 'Peaceful Gouramis', 'Rainbowfish', 'Snails', 'Robust Plecos'],
      badMates: ['Long finned slow fish (Angelfish, Bettas, Fancy Guppies, Gouramis with long fins)', 'Shy timid fish (will be bullied)', 'Aggressive Cichlids', 'Other fin nippers (Tiger Barbs = chaos)'],
      notes: 'Black Skirt Tetras have a mixed reputation in community tanks. Reality: They are excellent community fish IF kept in groups of 10+ and paired with fast moving or robust tankmates. Avoid pairing with long finned slow fish (Angelfish, Bettas, Fancy Guppies)—young Black Skirts will nip flowing fins, causing stress and injuries. They are safe with short finned fast fish (Danios, Barbs, other Tetras) and bottom dwellers (Corydoras). As they mature (1+ years), fin nipping behavior decreases significantly. Key: large groups plus appropriate tankmates = peaceful schooling beauty.',
      
      rules: [
        {
          type: 'avoid',
          target: 'long finned slow fish (Angelfish, Bettas, Fancy Guppies)',
          reason: 'Young Black Skirt Tetras (<1 year) are notorious fin nippers. They target long flowing fins, causing stress, injuries, and infections. Even in large groups, juveniles nip. Mature adults (1+ years) are less nippy but risk remains. Keep with short finned fast fish only',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'large groups of 10+ fish',
          reason: 'CRITICAL for reducing aggression. Groups under 8 = stressed, nippy bullies. Groups of 10+ = confident, peaceful schoolers. Fin nipping behavior drops dramatically in large schools. 8 is minimum; 10 to 15 is ideal',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'juvenile Black Skirts with any slow fish',
          reason: 'Juveniles (<1 year) are especially nippy even in large groups. If keeping with slower tankmates, buy adult Black Skirts (1+ years old) which are calmer. Or accept that young ones will be bratty for 6 to 12 months',
          severity: 'medium',
        },
        {
          type: 'requires',
          condition: 'dense planting to break lines of sight',
          reason: 'Visual barriers reduce chasing and nipping by limiting territory visibility. Open bare tanks = constant harassment. Dense jungle style planting = peaceful coexistence',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 10-20,
        midwater: '10-15',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 3,
      territorial: 1,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'feeding'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 999,
    },
    
    finNipping: {
      risk: 'medium',
      targets: ['long finned fish', 'slow moving fish', 'shy timid fish'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Large groups (10+ fish) to reduce fin nipping', 
      'Dense planting with open swimming areas', 
      'Dark substrate to maintain black coloration',
      'Avoid pairing with long finned slow fish',
      'Accept color fading with age (natural, not illness)',
    ],

    proTips: [
      "FIN NIPPING SOLUTION: Groups of 10 to 15+ fish = peaceful behavior. Groups under 8 = stressed bullies. It's that simple. Larger schools diffuse aggression by spreading it across more targets. Single aggressive fish becomes background noise in group of 15.",
      "Color fading is normal aging, not disease! Juveniles are jet black; adults (1+ years) fade to charcoal or silver grey. This is natural pigment loss with maturity. Dark substrates, tannins (Indian Almond leaves), and quality food help maintain color longer.",
      "Buy adult Black Skirts (1+ years) if keeping with sensitive tankmates. Juveniles (<1 year) are guaranteed fin nippers regardless of group size. Adults are calmer and less nippy. Ask store for older fish!",
      "Long fin variety is gorgeous but ironic—they are fin nippers with giant fins! Long fins are more vulnerable to bullying from standard Black Skirts. Keep long fin groups separate or expect damaged fins.",
      "Stress bars: Faint horizontal stripes appear when stressed (new tank, aggression, poor water). Vertical bars are normal markings. Horizontal bars = check water parameters and group dynamics.",
      "Dark substrate plus tannins = stunning contrast. Black sand or dark gravel makes their black bodies pop. Add driftwood or Indian Almond leaves for amber tinted water—mimics wild habitat and intensifies colors.",
    ],

    commonMistakes: [
      "Small groups (under 8) = #1 mistake. Stressed Black Skirts become nippy terrors. Groups of 3 to 5 create bullying hierarchies with constant harassment. Buy 10 to 15 fish minimum for peaceful behavior. Yes, it's more expensive upfront, but it prevents bloodbaths.",
      "Pairing with Angelfish or Bettas = disaster. Young Black Skirts see long flowing fins as irresistible targets. Even 'peaceful' Black Skirts in large groups may nip occasionally. Your Angel's fins will be shredded. Choose tankmates wisely!",
      "Panicking over color fading. 'My Black Skirts are turning grey! Are they sick?' No. This is normal aging (like humans greying). Juveniles are black; adults fade to grey or silver. It's genetics, not disease. Embrace the silver fox stage!",
      "Bare open tanks. Without visual barriers (plants, wood), Black Skirts chase constantly with nowhere to hide. Dense planting breaks lines of sight and creates territories, reducing aggression dramatically.",
      "Mixing with other fin nippers (Tiger Barbs, Serpae Tetras). Combining multiple nippy species = chaos. Everyone nips everyone. Stick to one semi aggressive species per tank or keep with only peaceful fish.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'brine-shrimp'],
      supplements: ['bloodworms', 'daphnia', 'spirulina', 'vegetables'],
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
      notes: 'Weekly 30 percent water changes maintain water quality. Black Skirts are messy eaters and produce moderate waste in large groups. Vacuum substrate weekly. Keep nitrates below 20ppm for best health and color retention.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 100,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['ich', 'fin-rot', 'velvet', 'neon-tetra-disease', 'bloat'],
    sensitivities: ['Small groups (stress)', 'Poor water quality (color fades faster)', 'High nitrates', 'Overcrowding'],
  },

  scientificContext: {
    wildHabitat: "Black Skirt Tetras inhabit slow moving, heavily shaded forest streams and tributaries in the Paraguay River Basin (Brazil, Bolivia, Argentina). These are tannin stained, soft water habitats with muddy substrates, dense aquatic vegetation, submerged roots, and thick leaf litter. Water is warm (23 to 27 degrees C), soft (GH 3 to 8), slightly acidic (pH 6.0 to 7.0), and dim due to forest canopy. They school in large groups (50 to 100+) for protection from predators, explaining why small aquarium groups cause stress. Wild specimens are more intensely black than domesticated strains.",
    sexualDimorphism: "Subtle differences: Females are rounder, fuller bodied, especially when carrying eggs (gravid). Males are slimmer, more streamlined, with slightly more intense black coloration when mature. Difficult to sex juveniles. Best method: buy large group and observe—rounder fish with swollen bellies during feeding = females.",
    variants: ['Standard Short fin (classic)', 'Long fin Black Skirt (Veil tail—dramatically extended fins)', 'GloFish Black Skirt (genetically modified fluorescent colors—unnatural but popular)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Black Skirt Tetras are easy to breed—one of the best beginner egg layers! Trigger spawning with: 1) Soft, slightly acidic water (pH 6.0 to 6.5, GH 4 to 8), 2) Large (40 to 50 percent) water change with slightly cooler water (22 to 23 degrees C) to simulate rainy season, 3) Conditioning with high protein live or frozen foods (brine shrimp, daphnia) for 2 weeks until females visibly plump. Separate sexes during conditioning, then introduce to spawning tank together.',
    fryCare: 'Females scatter 300 to 500 adhesive eggs among fine leaved plants (Java Moss, spawning mops) or substrate. No parental care—adults eat eggs immediately. Remove adults after spawning. Eggs hatch in 24 to 36 hours at 24 to 26 degrees C into tiny larvae. Fry become free swimming at 3 to 5 days. Feed infusoria or liquid fry food initially, then baby brine shrimp after 1 week. Fry are tiny and grow slowly: 1cm at 4 weeks, 2cm at 8 weeks. Separate by size to prevent cannibalism. Maturity at 6 to 8 months.',
    notes: 'Black Skirt Tetras breed readily and prolifically in home aquariums. The challenge is not spawning (easy) but raising hundreds of fry (labor intensive). Many breeders let nature take its course in heavily planted tanks—some fry survive to adulthood on their own. For deliberate breeding, use separate spawning tank with spawning mops or Java Moss, condition breeders well, and remove adults immediately post spawn.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'fin nipping harassment', cause: 'small groups under 8 fish', frequency: 0.38 },
      { issue: 'damaged angelfish betta fins', cause: 'paired with long finned slow fish', frequency: 0.25 },
      { issue: 'color fading panic', cause: 'natural aging mistaken for illness', frequency: 0.15 },
      { issue: 'stress from bare tanks', cause: 'no visual barriers or planting', frequency: 0.12 },
      { issue: 'bullied by larger fish', cause: 'mixed with aggressive species', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 140, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};
