import type { Species } from '../../types/species';

export const congoTetra: Species = {
  id: 'tetra-011',
  slug: 'congo-tetra',
  imageUrl: '/images/species/congo-tetra.jpg',
  funFact: "Congo Tetras are the aquarium hobby's most underrated showstoppers! Adult males develop iridescent scales that shimmer through the entire rainbow spectrum—blue, green, gold, orange, pink—like living opals swimming through your tank. Their colors are so dependent on lighting that the same fish can look dull gray under cheap LEDs or absolutely breathtaking under full-spectrum lights. In the wild Congo River, they form massive schools of thousands that create rainbow rivers visible from riverbanks. Males develop elaborate fin extensions (especially the middle caudal fin rays) that trail like elegant ribbons—it's underwater haute couture! Watch a dominant male display: he'll spread all fins, shimmer intensely, and swim in slow spirals to attract females. It's absolutely mesmerizing!",

  taxonomy: {
    scientificName: 'Phenacogrammus interruptus',
    commonName: 'Congo Tetra',
    family: 'Alestidae',
    origin: 'Central Africa (Congo River Basin - Democratic Republic of Congo)',
    region: 'Africa',
    biotope: 'Large, slow-moving rivers and tributaries with moderate to strong current. Water is clear to slightly tea-stained (not extreme blackwater), moderate hardness (GH 5-15), slightly acidic to neutral (pH 6.0-7.5). Dense riparian vegetation along riverbanks, submerged roots, and dappled sunlight',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 8.5,
    color: 'Juveniles (<6 months): Plain silver-gray with minimal iridescence. Adult males (8+ months): Spectacular rainbow iridescence across entire body—scales shimmer blue, green, gold, orange, pink depending on light angle. Middle caudal fin rays extend dramatically like elegant ribbons. Large dorsal fin with white/cream edge. Eye has distinctive blue-green ring. Females: Rounder body, less intense iridescence, shorter fins. Colors shift dramatically with lighting—full-spectrum LEDs are mandatory to see true beauty!',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 200,
    tempC: { min: 23, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 4, max: 18 },
    kh: { min: 2, max: 12 },
    flow: 'moderate',
    substrate: 'dark',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'all',
      preference: 0.80,
    },
    
    spaceNeeds: {
      horizontalCM: 100,
      verticalCM: 40,
      territories: 0,
    },
    
    bioloadMultiplier: 0.60,
  },

  habitat: {
    planting: 'moderate',
    plantingNotes: 'Congo Tetras look stunning in well-planted tanks with open swimming space. They need room to school and display but appreciate planted backgrounds for security. Plant densely along back and sides (Amazon Swords, Vallisneria, Cryptocoryne, Java Fern) but leave center 60-70% open for schooling displays—watching 10+ Congo Tetras swim in synchronized formations under proper lighting is absolutely mesmerizing! Dark substrate (black sand or dark gravel) is MANDATORY—it provides contrast that makes their rainbow iridescence explode visually. Some floating plants (Red Root Floaters, Frogbit) create dappled lighting that mimics natural Congo River habitat and intensifies colors. Avoid bright, sterile tanks—they stress Congos and wash out colors.',
    hardscape: ['Driftwood (Manzanita, Malaysian - creates natural look)', 'Smooth river stones/boulders', 'Optional: Indian Almond Leaves (light tannin staining)', 'Minimal hardscape—fish are the stars!'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'midwater', 'active', 'diurnal', 'colorful'],
    minGroupSize: 8,
    description: 'Congo Tetras are active, confident schoolers that swim in loose formations throughout the tank—they\'re NOT shy fish when kept properly (groups of 8+). They explore constantly, investigating plants, chasing each other playfully, and performing elaborate courtship displays. Males are mildly competitive during breeding displays: dominant males spread all fins, shimmer intensely, and swim in slow spirals to attract females and intimidate rival males. This creates stunning visual dynamics—it\'s like watching underwater ballet! They\'re completely peaceful toward tankmates and never nip fins despite having small teeth (used for eating insects, not aggression). Congos are diurnal (active during day) and most vibrant in morning after feeding. Their iridescence shifts with light angles—moving your viewing position changes colors from blue to green to gold to pink. It\'s absolutely magical under proper lighting!',
    
    compatibility: {
      goodMates: ['Larger Tetras (Bleeding Heart, Buenos Aires)', 'African Cichlids (peaceful Pelvicachromis, Anomalochromis)', 'Larger Barbs (Rosy, Cherry)', 'Rainbowfish', 'Peaceful Gouramis (Pearl)', 'Larger Corydoras', 'Synodontis Catfish', 'Loaches (Clown, Yoyo)', 'Upside-down Catfish', 'Nerite Snails', 'Large Mystery Snails'],
      badMates: ['Aggressive fin-nippers (Tiger Barbs, Serpae Tetras)', 'Aggressive cichlids (Oscars, Jack Dempseys)', 'Large predatory fish', 'Very small nano fish (may intimidate)', 'Goldfish (temperature incompatibility)'],
      notes: 'Congo Tetras are larger and more robust than most small tetras (Neons, Cardinals) but remain peaceful community fish. Their size (8.5cm adults) makes them suitable for community tanks with semi-active species. Compatible with most peaceful African cichlids (share native range), larger tetras, barbs, and catfish. However, their long, flowing fins (especially males) make them vulnerable to fin-nippers—avoid Tiger Barbs, Serpae Tetras, and aggressive species. Congos are bold enough to coexist with semi-boisterous fish (Rainbowfish, larger Barbs) without stress. Generally safe with larger shrimp (Amano) but may eat baby shrimp.',
      
      rules: [
        {
          type: 'avoid',
          target: 'fin-nipping species',
          reason: 'Males\' elegant trailing fin extensions are irresistible targets for fin-nippers (Tiger Barbs, Serpae Tetras, aggressive barbs). Nipped fins ruin their beauty and cause chronic stress. AVOID these combinations!',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'group size 8+ fish',
          reason: 'Congo Tetras are schooling fish that need groups of 8+ for confidence and natural behavior. Smaller groups become shy, stressed, and lose vibrant coloration. Larger groups (10-15) create spectacular displays and bring out male competition behaviors',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'tank length 100cm+ (200L minimum)',
          reason: 'Congo Tetras are active swimmers (8.5cm adults) that need horizontal swimming space. Minimum 100cm tank length. They don\'t thrive in small or tall, narrow tanks—need width for schooling',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'full-spectrum lighting',
          reason: 'CRITICAL: Congo Tetras\' rainbow iridescence only shows under proper full-spectrum LED lighting. Cheap/warm LEDs make them look dull gray. Lighting = 90% of their visual appeal!',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'aggressive cichlids',
          reason: 'Despite being larger tetras, Congos are peaceful and defenseless. Aggressive cichlids (Oscars, Jack Dempseys, aggressive Mbuna) will terrorize or injure them',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 0-10,
        midwater: '8-20',
        bottom: '6-12',
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
      'Full-spectrum LED lighting MANDATORY (rainbow effect)', 
      'Dark substrate required for color contrast', 
      'Tank minimum 100cm length (200L+)', 
      'Groups of 8+ for schooling behavior',
      'Males need 8-12 months to develop full coloration',
    ],

    proTips: [
      "LIGHTING IS EVERYTHING! Congo Tetras under cheap warm LEDs look dull gray. Under full-spectrum 6500K+ LEDs, they explode into rainbow shimmer—blue, green, gold, orange, pink. It's night and day difference! Invest in quality lighting (€50-100)—it transforms them from 'meh' to 'WOW!' Position lights to create angles—their iridescence shifts with viewing angle.",
      "Dark substrate is MANDATORY! Black sand or dark gravel creates contrast that makes rainbow colors pop dramatically. Light-colored substrates (beige/white gravel) wash out their iridescence—they look gray and boring. Dark substrate = 50% more visual impact!",
      "Patience pays off! Juveniles (<8 months) look plain silver-gray with minimal shimmer. Males take 8-12 months to develop full rainbow iridescence and trailing fin extensions. Many beginners return them thinking they're dull. Wait 10-12 months—transformation is spectacular!",
      "Males are the showstoppers. Buy young unsexed fish (4-6 months) before dimorphism is obvious, then wait. Males develop longer fins, more intense rainbow colors, and elegant trailing caudal rays. Females remain rounder and less colorful. Ideal ratio: 2-3 females per male for best displays.",
      "They're African tetras! Congo Tetras are from Africa (Congo River), not South America. This means they tolerate slightly harder water (GH 5-18) and higher pH (up to 7.5) better than Amazonian tetras (Cardinals, Neons). More forgiving for beginners with hard tap water!",
      "Feed color-enhancing foods. Spirulina flakes, astaxanthin-rich foods (krill, brine shrimp), and carotenoid supplements intensify their rainbow shimmer. Visible improvement within 4-6 weeks. High-quality food = more intense colors!",
      "Watch them school! Groups of 10+ create mesmerizing synchronized swimming displays—they move like a single organism. Under proper lighting, it's like watching a living rainbow river flow through your tank. Worth every cent!",
    ],

    commonMistakes: [
      "Poor lighting. #1 reason Congo Tetras look disappointing! Under cheap warm LEDs or weak lighting, they appear dull gray with minimal shimmer. Result: 'Why did I pay €10 each for boring fish?' Solution: Full-spectrum 6500K+ LEDs (€50-100). Lighting makes or breaks this species!",
      "Light-colored substrate. Beige/white gravel washes out their iridescence—they blend in and look gray. Dark substrate (black sand/gravel) creates contrast that makes rainbow colors explode. This is non-negotiable for visual impact!",
      "Judging them too early. Juveniles look BORING—plain silver with short fins. Males need 8-12 months to develop full rainbow colors and trailing fins. Many beginners give up before transformation. This is a patience fish!",
      "Small groups (4-6). They become shy, stressed, hide constantly, and lose colors. Groups of 8-10+ bring out confident schooling behavior and vibrant coloration. Minimum 8 fish!",
      "Small tanks. 100L tanks don't provide enough swimming space for 8.5cm active schoolers. They become stressed, colors fade, behavior becomes erratic. Minimum 200L (100cm length).",
      "Keeping with fin-nippers. Tiger Barbs, Serpae Tetras, and aggressive barbs shred males' beautiful trailing fins. Ruins entire aesthetic and stresses fish. AVOID these combinations!",
      "Expecting them to be cheap. Congo Tetras cost €8-15 each (vs €2-4 for Neons). Groups of 10 = €80-150 investment. They're premium fish with premium price tag. Budget accordingly!",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'brine-shrimp', 'daphnia'],
      supplements: ['bloodworms', 'spirulina', 'color-enhancing-food'],
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
      notes: 'Weekly 30% water changes maintain stability and water clarity (important for lighting/colors). Congo Tetras are hardy and tolerate parameter fluctuations reasonably well but consistency yields best coloration. Clean water = maximum rainbow shimmer! Vacuum substrate weekly, clean filters monthly.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 200,
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
    lifespanYears: 5,
    commonDiseases: ['ich', 'velvet', 'columnaris', 'fin-rot'],
    sensitivities: ['Ammonia spikes', 'Temperature shocks', 'Poor water quality', 'Fin-nipping tankmates'],
  },

  scientificContext: {
    wildHabitat: "Congo Tetras inhabit the massive Congo River Basin in Central Africa (Democratic Republic of Congo)—the second-largest river system in the world! Wild habitat: large, slow to moderately flowing rivers and tributaries with clear to slightly tea-stained water. Moderate hardness (GH 5-15), slightly acidic to neutral pH (6.0-7.5), warm temperatures (24-28°C year-round). Dense riparian vegetation along riverbanks provides shade and cover. They form massive schools (hundreds to thousands) in open water, feeding on insects, larvae, small crustaceans, and plant matter. During breeding season (rainy months), they move into flooded vegetation to spawn.",
    sexualDimorphism: "Pronounced in adults (8+ months). Males: Longer, more elaborate fins with distinctive trailing middle caudal rays (look like elegant ribbons). More intense rainbow iridescence across entire body. Slimmer, more streamlined body. Larger dorsal fin. Females: Shorter, rounded fins without trailing rays. Less intense iridescence—still shimmer but more subtle. Fuller, rounder body (especially when gravid with eggs). Smaller dorsal fin. Juveniles (<8 months): Nearly impossible to sex—all look plain silver-gray with short fins. Sexual dimorphism develops gradually over 6-10 months.",
    variants: ['Wild-type Congo Tetra (standard rainbow iridescence)', 'Captive-bred (vast majority of trade—hardier)', 'Wild-caught (rare, more expensive, sensitive)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Congo Tetras breed readily in home aquariums with proper setup. Conditioning: Separate males and females for 10-14 days, feeding heavily with live/frozen foods (brine shrimp, daphnia, bloodworms) 2-3x daily until females visibly plump with eggs. Breeding tank: 80-120L with Java Moss or spawning mops covering bottom (catches eggs), bare bottom or marbles (prevents egg-eating), gentle sponge filter, heater 26-27°C, soft water (GH 5-10), slightly acidic pH (6.5-6.8). Introduce conditioned pair (or trio: 1 male, 2 females) in evening. Spawning occurs at dawn—male chases female intensely, they swim side-by-side releasing eggs/sperm over plants. Eggs are semi-adhesive and fall into moss. Remove adults immediately after spawning (they eat eggs voraciously).',
    fryCare: 'Eggs hatch in 5-7 days at 26°C. Fry are free-swimming after 3-4 days and initially feed on infusoria/microscopic organisms. After 7-10 days, introduce newly-hatched brine shrimp (Artemia nauplii). Fry grow moderately fast—6-8 weeks to reach 1.5-2cm and eat crushed flakes/micro-pellets. Keep water pristine with daily 10-20% water changes. Fry are reasonably hardy but sensitive to parameter swings. They remain plain gray for 6-8 months until coloration develops. Sexual maturity at 8-12 months when males develop trailing fins and rainbow iridescence. Breeding Congo Tetras is rewarding intermediate project—easier than Cardinals but requires proper setup.',
    notes: 'Congo Tetra breeding is moderately challenging—harder than Danios/Barbs but easier than Cardinals/Neons. Main challenges: Preventing egg-eating (remove parents fast!), raising fry through first 2-3 weeks, and patience waiting 8-12 months for full coloration. Many hobbyists succeed with breeding but struggle raising large numbers of fry. Popular intermediate breeding project for African tetra enthusiasts.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'disappointing-dull-appearance', cause: 'poor-lighting-or-light-substrate', frequency: 0.35 },
      { issue: 'fin-damage-stress', cause: 'kept-with-fin-nippers-tiger-barbs', frequency: 0.20 },
      { issue: 'stress-hiding-color-loss', cause: 'group-too-small-under-8-fish', frequency: 0.15 },
      { issue: 'ich-outbreak', cause: 'temperature-fluctuation-or-stress', frequency: 0.12 },
      { issue: 'premature-return', cause: 'judged-before-maturity-8-12-months', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 180, max: 400, currency: 'EUR' },
      monthly: { min: 20, max: 40, currency: 'EUR' },
    },
  },
};
