import type { Species } from '../../types/species';

export const diamondTetra: Species = {
  id: 'tetra-010',
  slug: 'diamond-tetra',
  imageUrl: '/images/species/diamond-tetra.jpg',
  funFact: "Diamond Tetras are the aquarium equivalent of fine wine—they get better with age! Juveniles look plain gray and unimpressive, but adult males (8-12 months+) develop spectacular iridescent blue-purple scales that sparkle like crushed diamonds under proper lighting, plus long, flowing fins that trail elegantly. In Lake Valencia, Venezuela (their native habitat), males perform elaborate courtship displays, swimming in spirals while their scales catch the light like disco balls. They're one of the few tetras where patience is truly rewarded—what you buy as a boring gray fish transforms into an absolute showstopper!",

  taxonomy: {
    scientificName: 'Moenkhausia pittieri',
    commonName: 'Diamond Tetra',
    family: 'Characidae',
    origin: 'Venezuela (Lake Valencia and surrounding coastal rivers)',
    region: 'South America',
    biotope: 'Slow-moving rivers, tributaries, and lakes with moderate to dense vegetation. Clear to slightly tea-stained water (not extreme blackwater). Moderate hardness (GH 5-15), pH 6.0-7.5. Often found in areas with overhanging vegetation and dappled light',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 6,
    color: 'Juveniles: Plain silver-gray, unimpressive. Adult males (8+ months): Silvery body covered in iridescent blue-purple scales that sparkle like diamonds under proper lighting. Fins develop long, flowing extensions (especially dorsal and anal fins). Females: Remain rounder and less colorful but still develop subtle iridescence. Eye has distinctive violet-purple ring. Scales reflect light dramatically—tank lighting is critical for visual impact!',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 120,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 5, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'moderate',
    substrate: 'dark',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'all',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 35,
      territories: 0,
    },
    
    bioloadMultiplier: 0.50,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Diamond Tetras look best in well-lit tanks with moderate planting—not too dense, not bare. They need swimming space to show off their schooling behavior and sparkling scales. Plant background and sides with tall plants (Amazon Swords, Vallisneria, Cryptocoryne) but leave center and front open for schooling displays. Lighting is CRITICAL—their "diamond" effect only shows under proper illumination. Use full-spectrum LED lights positioned to catch their scales at angles. Dark substrate (black sand or dark gravel) provides contrast that makes their iridescence pop. Add some floating plants for shade but don\'t block all light—you need directional lighting to see the sparkle. Driftwood and river stones create natural aesthetic but keep hardscape minimal—the fish are the stars!',
    hardscape: ['Driftwood (Manzanita, Malaysian)', 'Smooth River Stones', 'Optional: Indian Almond Leaves (light tannin staining)'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater', 'active', 'diurnal', 'colorful'],
    minGroupSize: 10,
    description: 'Diamond Tetras are active, confident schoolers that swim in loose formations throughout the tank. Unlike shy tetras, they don\'t hide constantly—they\'re bold explorers that occupy midwater confidently, especially in groups of 10+. Males are mildly competitive during breeding displays, performing spiral swimming patterns to show off their fins and iridescent scales to females and rivals. This creates dynamic visual interest without real aggression—it\'s all show, no violence. They\'re peaceful toward tankmates but large enough (6cm adults) to hold their own with semi-aggressive species. Active during daylight hours, especially morning after feeding when they school tightly and hunt for food. Their scales catch light differently depending on angle—moving your viewing position changes the color from silver to violet-blue. It\'s living jewelry!',
    
    compatibility: {
      goodMates: ['Corydoras (all species)', 'Otocinclus', 'Larger Tetras (Bleeding Heart, Buenos Aires)', 'Rasboras (Harlequin)', 'Peaceful Barbs (Cherry, Rosy)', 'Dwarf Cichlids (Apistogramma, Rams)', 'Gouramis (Pearl, Honey)', 'Peaceful Loaches (Kuhli)', 'Cherry Shrimp (adults usually safe)', 'Nerite Snails', 'Mystery Snails'],
      badMates: ['Large Cichlids (Oscars, Jack Dempseys)', 'Aggressive Barbs (Tiger Barbs nip fins)', 'Goldfish (temperature incompatibility)', 'Large Predatory Fish', 'Aggressive Mbuna Cichlids'],
      notes: 'Diamond Tetras are larger and more robust than most nano tetras (Neons, Embers), making them better suited for community tanks with semi-boisterous species. They won\'t be bullied by active barbs or rainbowfish. However, their long, flowing fins (especially mature males) make them vulnerable to fin-nippers like Tiger Barbs—avoid these combinations. Compatible with most peaceful community fish of similar size and temperature requirements (24-28°C). Cherry shrimp may be at risk from full-grown adults but generally coexist if shrimp population is established first.',
      
      rules: [
        {
          type: 'avoid',
          target: 'fin-nipping species',
          reason: 'Mature male Diamond Tetras develop long, flowing fins that are irresistible targets for fin-nippers like Tiger Barbs, Serpae Tetras, and some aggressive barbs. Nipped fins ruin their beauty and cause stress',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'large predatory fish',
          reason: 'Despite being larger than nano tetras, 6cm Diamond Tetras are still vulnerable to predation by large cichlids (Oscars, Jack Dempseys) and other predators with mouths large enough to swallow them',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'group size 10+ fish',
          reason: 'Diamond Tetras are schooling fish that need groups of 10+ for confidence and natural behavior. Smaller groups become shy, stressed, and hide constantly. Larger groups (12-15) create spectacular schooling displays and bring out male competition behaviors',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'tank length 80cm+',
          reason: 'Diamond Tetras are active swimmers that need horizontal swimming space. Minimum 80cm (31 inches) tank length—120L is absolute minimum. They don\'t thrive in tall, narrow tanks',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'very small fish',
          reason: 'Adult Diamond Tetras (6cm) may eat tiny fry or very small nano species (Chili Rasboras, baby shrimp). They\'re not aggressive predators but opportunistic feeders',
          severity: 'low',
        },
      ],
      
      idealTankmates: {
        surface: 0-10,
        midwater: '10-20',
        bottom: '8-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
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
      'Requires proper lighting setup to see diamond sparkle effect', 
      'Tank must be at least 80cm long for swimming space', 
      'Males need 8-12 months to develop full coloration—patience required!', 
      'Dark substrate recommended for color contrast',
      'Groups of 10+ required for schooling behavior',
    ],

    proTips: [
      "Lighting is EVERYTHING! Diamond Tetras\'s sparkle comes from light reflecting off their scales at angles. Use full-spectrum LED lights positioned at front of tank. Single top-mounted light often isn\'t enough—consider front-angle lighting or multiple light sources. Move your viewing angle and watch colors shift from silver to violet-blue!",
      "Patience pays off! Juveniles (<8 months) look plain gray and unremarkable. Many beginners return them thinking they\'re boring. Wait 8-12 months—males develop stunning iridescence and flowing fins that rival any expensive fish. It\'s like watching a caterpillar become a butterfly!",
      "Males are the show-stoppers. Buy young fish (3-4 months) before sexual dimorphism is obvious, then wait. As males mature, they develop longer fins and more intense iridescence. Females remain rounder and less colorful but still attractive. Ideal ratio: 2-3 females per male creates best displays with minimal male competition.",
      "Feed color-enhancing foods. Spirulina flakes, krill-based pellets, and carotenoid-rich foods intensify their iridescent scales. Visible improvement within 4-6 weeks of quality feeding.",
      "Dark substrate is non-negotiable! Black sand or dark gravel creates contrast that makes their silvery-blue shimmer pop. Light-colored substrates wash out their colors—they look gray and dull.",
      "Water clarity matters. Diamond Tetras look best in crystal-clear water. Clean filters, regular water changes, and efficient filtration ensure maximum light transmission and sparkle effect.",
      "They\'re hardier than Cardinals/Neons! Diamond Tetras tolerate a wider pH range (6.0-7.5) and moderate hardness (GH 5-15). They\'re Venezuelan fish from Lake Valencia, not extreme blackwater—more forgiving for beginners!",
    ],

    commonMistakes: [
      "Judging them too early. Juveniles look BORING—plain gray, short fins, no sparkle. Many beginners give up before 8-12 months when males transform. This is a patience fish—wait for the glow-up!",
      "Poor lighting. Diamond Tetras under single weak LED look like plain gray fish. Their sparkle requires proper full-spectrum lighting at correct angles. Lighting = 80% of their visual appeal!",
      "Light-colored substrate. Beige/white gravel makes them look washed-out and gray. Dark substrate = dramatic contrast = stunning iridescence.",
      "Keeping in small groups (5-6). They become shy and hide constantly. Groups of 10-15 bring out confident schooling behavior and male display behaviors.",
      "Small tanks. 60L tanks don\'t provide enough swimming space for active 6cm tetras. They become stressed and colors fade. Minimum 120L (80cm length).",
      "Mixing with fin-nippers. Tiger Barbs, Serpae Tetras, and aggressive barbs will shred males\' beautiful long fins. Ruins entire aesthetic and stresses fish.",
      "Dirty water. Cloudy, tannin-stained, or algae-filled water blocks light and reduces sparkle. Diamond Tetras need clean, clear water for maximum visual impact.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'flakes', 'brine-shrimp', 'daphnia'],
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
      vacuumingNeeded: true,
      notes: 'Weekly 30% water changes maintain water clarity (essential for sparkle effect) and stability. Diamond Tetras are hardy and tolerate parameter fluctuations better than delicate blackwater species, but consistency yields best coloration. Vacuum substrate weekly to prevent detritus buildup that clouds water. Clean filters monthly to maintain crystal-clear water—dirty water = no sparkle!',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 150,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'high',
      co2: false,
    },
  },

  health: {
    lifespanYears: 6,
    commonDiseases: ['ich', 'columnaris', 'velvet', 'fin-rot'],
    sensitivities: ['Ammonia spikes', 'Temperature shocks', 'Poor water quality', 'Fin-nipping tankmates'],
  },

  scientificContext: {
    wildHabitat: "Diamond Tetras are endemic to Lake Valencia and its tributary rivers in northern Venezuela. Lake Valencia is a moderate-hardness, neutral pH lake (6.5-7.5) with clear to slightly tea-stained water—NOT extreme blackwater like Amazonian habitats. The lake has dense aquatic vegetation along shorelines but open water in center. Water temperature is warm (24-28°C year-round) and relatively stable. Diamond Tetras inhabit vegetated shallow areas (0.5-2m depth) where they school in groups of dozens, feeding on small invertebrates, insect larvae, and plant matter. During breeding season (rainy months), they move into flooded vegetation to spawn. Unfortunately, Lake Valencia is heavily polluted by urban/industrial runoff, making wild populations threatened. Most aquarium specimens are captive-bred.",
    sexualDimorphism: "Very pronounced in adults (8+ months). Males: Longer, flowing fins (especially dorsal and anal fins that trail elegantly). More intense iridescent blue-purple coloration. Slimmer, more streamlined body. Violet ring around eye is more vibrant. Females: Rounder, deeper body profile (especially when gravid with eggs). Shorter fins that don't trail. Subtler iridescence—still sparkles but less intense than males. Fuller belly. Juveniles (<8 months): Nearly impossible to sex—all look plain gray with short fins. Sexual dimorphism develops gradually over 6-12 months.",
    variants: ['Wild-Type (standard iridescent blue-purple)', 'Captive-Bred (vast majority of trade stock—hardier and parasite-free)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Diamond Tetras breed readily in well-maintained community tanks but require separate breeding setup for successful fry rearing. Conditioning: Separate males and females for 10-14 days, feeding heavily with live foods (brine shrimp, daphnia, bloodworms) 2-3x daily until females visibly plump with eggs. Breeding tank: 40-60L with Java Moss or spawning mops, bare bottom or marbles (prevents egg-eating), gentle sponge filter, heater set to 26-27°C, pH 6.5-7.0, soft-moderate water (GH 5-10). Introduce conditioned pair in evening. Spawning occurs at dawn—male chases female, they swim side-by-side releasing eggs/sperm over plants. Eggs are semi-adhesive and fall into moss/marbles. Remove parents immediately after spawning (they eat eggs).',
    fryCare: 'Eggs hatch in 24-36 hours. Fry are free-swimming after 3-4 days and initially feed on infusoria/microscopic organisms in Java Moss. After 5-7 days, introduce newly-hatched brine shrimp (Artemia nauplii). Fry grow relatively fast—within 6-8 weeks they reach 1.5-2cm and can eat crushed flakes/micro-pellets. Keep water pristine with daily 10-20% water changes. Fry are less sensitive than Cardinal/Neon fry—higher survival rates. However, they remain plain gray for 6-8 months until coloration develops. Sexual maturity at 8-12 months when males develop flowing fins and iridescence.',
    notes: 'Diamond Tetra breeding is significantly easier than Cardinals/Neons due to less extreme water requirements (no RO water needed, eggs not photosensitive). Captive-bred strains are especially prolific. Main challenge: Preventing egg-eating (remove parents immediately) and raising fry through first 2 weeks. Once past 2 weeks, fry survival rate is high. Many hobbyists accidentally get fry in community tanks but raising them to adulthood requires separate rearing tank. Popular project for intermediate breeders—rewarding but not trivial.',
  },
  
  experienceData: {
    successRate: 0.82,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'disappointing-appearance', cause: 'judged-before-maturity-or-poor-lighting', frequency: 0.30 },
      { issue: 'fin-damage', cause: 'kept-with-fin-nipping-species-tiger-barbs', frequency: 0.18 },
      { issue: 'ich-outbreak', cause: 'temperature-fluctuation-or-stress-new-tank', frequency: 0.15 },
      { issue: 'stress-hiding', cause: 'group-too-small-under-10-fish', frequency: 0.12 },
      { issue: 'color-fading', cause: 'poor-diet-or-cloudy-water', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 120, max: 300, currency: 'EUR' },
      monthly: { min: 15, max: 30, currency: 'EUR' },
    },
  },
};
