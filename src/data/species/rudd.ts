import type { Species } from '../../types/species';

export const rudd: Species = {
  id: 'coldwater-001',
  slug: 'rudd',
  imageUrl: '/images/species/rudd.jpg',
  funFact: "Rudd (Rotfedern) are Europe's ultimate survivor fish—they've adapted to nearly every freshwater habitat from Spain to the Caspian Sea! They're one of the few fish that can tolerate EXTREME temperature swings: they survive frozen ponds at 2°C in winter AND scorching summer heatwaves at 28°C. Here's the wild part: their adult size is entirely determined by their environment—in small ponds with no predators they stay small (15-20cm), but in large lakes with pike they grow HUGE (40-50cm) as defense! It's like they have built-in size adaptation software. In crystal-clear water their fins glow brilliant red-orange (hence 'Rotfeder' = red feather), but in murky dirty water they lose all color and turn dull gray. They're living water quality indicators!",

  taxonomy: {
    scientificName: 'Scardinius erythrophthalmus',
    commonName: 'Rudd',
    family: 'Cyprinidae',
    origin: 'Europe (Pyrenees to Caspian Sea, Scandinavia to Greece) - native to Germany/Central Europe',
    region: 'Europe',
    biotope: 'Slow-moving rivers, lakes, ponds, canals, flooded meadows. Prefer vegetated shallow areas (0.5-2m depth) with dense aquatic plants. Tolerate wide range of conditions: clear to murky water, soft to hard water, cold to warm temperatures',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 25,
    color: 'Silvery body with greenish-bronze back. Distinctive BRIGHT RED-ORANGE fins (pelvic, anal, and pectoral fins) in clean water—hence German name "Rotfeder" (red feather). Eye has golden-yellow iris with red spot above. Scales are larger and more reflective than similar species (roach). In dirty/murky water, red coloration fades to dull orange-gray. Juveniles have less intense fin colors. Wild variants: Golden Rudd (bright yellow-gold body, popular ornamental variant)',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 450,
    tempC: { min: 4, max: 28, ideal: 18 },
    ph: { min: 6.5, max: 8.5, ideal: 7.5 },
    gh: { min: 10, max: 25 },
    kh: { min: 5, max: 20 },
    flow: 'low',
    substrate: 'dark-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.70,
    },
    
    spaceNeeds: {
      horizontalCM: 150,
      verticalCM: 50,
      territories: 0,
    },
    
    bioloadMultiplier: 1.0,
  },

  habitat: {
    planting: 'heavy',
    plantingNotes: 'Rudd are enthusiastic plant-eaters that will devour most soft aquatic plants! They need heavy planting but ONLY hardy, tough species survive. Recommended: Vallisneria (tough leaves), Water Lilies (Nymphaea - too tough to eat), Java Fern (leathery leaves), Anubias (very hard leaves), Potamogeton species (pondweeds - natural food). AVOID: Delicate stem plants, carpeting plants, Cabomba, soft-leaved species—they\'ll be stripped bare within days. Plant densely along edges but leave CENTER 60-70% open for swimming—Rudd are active open-water schoolers that need horizontal swimming space. Dark substrate (black sand or dark gravel) enhances their red fin coloration dramatically. Floating plants (Water Lettuce, Duckweed) provide shade and are natural food—Rudd love eating duckweed!',
    hardscape: ['Driftwood (creates hiding spots)', 'Smooth river stones/boulders', 'Minimal hardscape—plants and swimming space priority'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'midwater', 'active', 'diurnal', 'plant_eater'],
    minGroupSize: 8,
    description: 'Rudd are active, confident shoaling fish that form tight schools in open water—they\'re bold swimmers that explore the entire tank constantly. Unlike shy fish, properly-kept Rudd (groups of 8+) are visible all day, swimming in synchronized formations through midwater and surface. They\'re initially skittish (panic at sudden movements) but become incredibly tame within weeks—feeding-trained Rudd will eat from your hand! Behavior changes with seasons: In warm water (18-25°C) they\'re hyperactive, constantly chasing each other and feeding. In cool water (10-15°C) they slow down but remain active. Below 8°C they enter semi-dormancy and stop feeding entirely. They\'re peaceful toward all tankmates—zero aggression toward other fish. Their only "crime" is enthusiastic plant-eating and competitive feeding (they eat FAST and steal food from slower fish).',
    
    compatibility: {
      goodMates: ['Other European coldwater fish (Bitterling, Minnows, Gudgeon)', 'Goldfish (similar temps/requirements)', 'Weather Loaches (Misgurnus)', 'European catfish species', 'Koi (pond setups)', 'Native European snails'],
      badMates: ['Tropical fish (temp incompatibility)', 'Aggressive species', 'Very small fish (intimidated by size/activity)', 'Delicate slow feeders (Rudd steal food)'],
      notes: 'Rudd are COLDWATER fish (native European species) incompatible with most tropical aquarium fish due to temperature requirements. They need seasonal temperature fluctuations (cool winters 4-10°C, warm summers 18-25°C) for health and breeding. Best kept: 1) Species-only tank (just Rudd), 2) With other European coldwater species (Bitterling, Minnows, Gudgeon), 3) With Goldfish (similar care), or 4) In outdoor pond setups. They\'re perfectly peaceful but their size (20-25cm adults), active swimming, and fast competitive feeding intimidates/outcompetes smaller delicate fish. AVOID mixing with tropical community fish—Rudd suffer in constantly heated tanks (24°C+) and tropical fish die in unheated Rudd tanks (winter temps 4-10°C).',
      
      rules: [
        {
          type: 'requires',
          condition: 'seasonal temperature fluctuation (winter cooling)',
          reason: 'CRITICAL: Rudd are temperate coldwater fish that NEED seasonal temperature cycles for health, breeding, and longevity. Constant warm temps (20°C+ year-round) prevent breeding, shorten lifespan, and cause stress. Winter cooling (4-10°C for 2-4 months) is mandatory. Indoor tanks need unheated room; outdoor ponds ideal',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'large horizontal swimming space (150cm+ length)',
          reason: 'Rudd are active open-water schoolers (20-25cm adults) that need massive horizontal swimming space. Minimum 150cm tank length (450L+). Small tanks cause stress, stunted growth, and behavioral problems',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'group size 8+ fish',
          reason: 'Rudd are obligate shoaling fish with complex social structures. Groups under 8 become stressed, skittish, hide constantly, and show faded colors. Minimum 8 fish; 12-15 creates natural schooling behavior',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'tropical heated tanks',
          reason: 'Rudd are coldwater fish (4-20°C natural range) incompatible with tropical setups (24-28°C). Constant heat causes stress, shortened lifespan, breeding failure, and susceptibility to disease',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'delicate plants',
          reason: 'Rudd are enthusiastic herbivores that eat most soft aquatic plants. Only tough-leaved species (Vallisneria, Anubias, Java Fern, Water Lilies) survive. Expect constant plant damage',
          severity: 'medium',
        },
        {
          type: 'requires',
          condition: 'excellent water quality and oxygenation',
          reason: 'Rudd need clean, well-oxygenated water. In dirty/murky water their red fin coloration fades to dull gray (visible stress indicator). Strong filtration and aeration mandatory',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 0-5,
        midwater: '8-15',
        bottom: '5-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
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
    cost: 'low',
    specialRequirements: [
      'SEASONAL temperature fluctuation required (winter 4-10°C, summer 18-25°C)', 
      'Large tank minimum 450L (150cm length)', 
      'Unheated setup (coldwater species)',
      'Groups of 8+ mandatory (shoaling fish)',
      'Only hardy plants survive (plant-eaters)',
      'Excellent oxygenation required',
    ],

    proTips: [
      "Rudd are COLDWATER fish, NOT tropical! They're native European species that need seasonal temperature cycles. Don't heat the tank—room temperature (15-22°C) is perfect in summer. In winter, allow temps to drop naturally (4-10°C for 2-4 months). This mimics natural conditions, triggers breeding, and ensures long lifespan (15-20 years). Constant heat (24°C+) = shortened lifespan and no breeding.",
      "Outdoor ponds are IDEAL for Rudd! They're pond fish masquerading as aquarium fish. In ponds they thrive with seasonal changes, grow larger, show brighter colors, breed naturally, and live 15-20 years. Indoor aquariums work but require: unheated room, large size (450L+), seasonal temp drops. If you have pond option = choose pond!",
      "Size adaptation is REAL! Rudd adjust adult size to environment: Small ponds with no predators = 15-20cm adults. Large ponds/lakes with pike/predators = 30-40cm+ adults (predator defense). Indoor aquarium = typically 20-25cm. This flexibility makes them suitable for various setups but plan for 25cm adults minimum.",
      "Red fins = water quality indicator! Bright red-orange fins = clean, well-oxygenated water. Faded orange-gray fins = dirty water, poor oxygen, stress. Use fin color as instant visual health check. If fins fade = test water immediately (ammonia, nitrite, nitrate, oxygen).",
      "They LOVE eating plants! Rudd are 60% herbivores. Feed plant-based flakes, blanched vegetables (zucchini, peas, spinach), algae wafers. They'll graze constantly on any soft plants in tank. Provide Duckweed or Water Lettuce as renewable food—they'll eat it faster than it grows!",
      "Winter = stop feeding! When temps drop below 8°C, Rudd enter semi-dormancy (like hibernation). Their metabolism nearly stops. Stop feeding entirely—uneaten food rots and poisons water. Resume feeding when temps rise above 12°C in spring. This is natural and healthy!",
      "Golden Rudd variant is stunning! Wild-type has silver body + red fins. Golden Rudd has bright yellow-gold body + orange-red fins. They're selectively bred ornamental variety—same care as wild-type but more expensive (€8-15 vs €3-5). Gorgeous pond fish!",
    ],

    commonMistakes: [
      "Keeping in heated tropical tank. #1 mistake! Rudd are coldwater fish (4-20°C natural) that suffer/die in constant tropical heat (24-28°C). They need seasonal cooling for health and breeding. Result: shortened lifespan (5 years vs normal 15-20), no breeding, chronic stress. Keep unheated!",
      "Small tanks. 'I'll keep 5 Rudd in 200L!' NO. Adults reach 20-25cm and are hyperactive swimmers. They need HORIZONTAL space (150cm+ length). Small tanks = stress, stunted growth, constant glass-surfing, faded colors. Minimum 450L realistic.",
      "Keeping alone or in pairs. Rudd are obligate shoalers that need groups of 8+ for psychological health. Small groups (2-4) become stressed, skittish, hide constantly, show dull colors. Minimum 8; 12-15 ideal for natural behavior.",
      "Expecting plants to survive. 'I'll have beautiful planted Rudd tank!' Unlikely. Rudd eat most soft plants voraciously. Only ultra-hardy species (Vallisneria, Java Fern, Anubias) survive. Accept plant damage or go plant-free with driftwood.",
      "No winter cooling. 'I'll keep room at 20°C year-round!' Rudd need seasonal temp drops (4-10°C winter) for natural rhythm, breeding readiness, and longevity. Constant temps prevent breeding and shorten lifespan. Allow natural seasonal fluctuation.",
      "Mixing with slow delicate fish. Rudd are fast competitive feeders that swallow food in seconds. Slow feeders (Otos, dwarf cichlids) starve because Rudd steal everything. Keep with similarly fast/hardy species or alone.",
      "Poor oxygenation. Rudd need HIGH oxygen levels. In warm water (20°C+) oxygen drops and Rudd gasp at surface. Use strong filtration + air stone especially in summer. Poor oxygen = faded colors and stress.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'pellets', 'vegetables'],
      supplements: ['daphnia', 'bloodworms', 'algae-wafers'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'winter',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Weekly 30% water changes maintain quality. Rudd are hardy and tolerate parameter fluctuations but pristine water brings out red fin coloration. Strong filtration mandatory—Rudd produce moderate bioload and are active eaters (lots of waste). Air stone recommended especially in summer (warm water = low oxygen). Match new water temp to tank temp (important in winter when tank is cold). In winter (below 8°C), reduce water changes to biweekly—fish are dormant and produce minimal waste.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 0,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'moderate',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 15,
    commonDiseases: ['ich', 'columnaris', 'fungal-infections', 'parasites'],
    sensitivities: ['Low oxygen (gasp at surface)', 'Constant warm temps (stress)', 'Poor water quality (fin color fades)', 'Sudden temperature shocks'],
  },

  scientificContext: {
    wildHabitat: "Rudd inhabit slow-moving freshwater across Europe: rivers, lakes, ponds, canals, flooded meadows, marsh areas. They prefer shallow vegetated zones (0.5-2m depth) with dense aquatic plants, but also inhabit open water. Found in nearly every European freshwater habitat from Pyrenees (Spain) to Caspian Sea (Russia), and from Scandinavia to Greece. Tolerant of wide conditions: soft to hard water, acidic to alkaline pH, cold winters (2-4°C under ice) to warm summers (25°C+). They school in open water feeding on insects, larvae, small crustaceans, plant matter. During breeding season (May-June), move into shallow weedy areas to spawn on aquatic plants.",
    sexualDimorphism: "Difficult to sex outside breeding season. Males: Develop spawning tubercles (small white bumps) on head and body during breeding (May-June). Slimmer, more streamlined body. More vibrant red fin coloration. Females: Fuller, rounder body especially when gravid (carrying eggs). Less intense fin colors. Larger overall size. Juveniles impossible to sex—wait for maturity (2-3 years, 15cm+). Commercial sellers typically can't sex them—buy groups and let them pair naturally.",
    variants: ['Wild-type Rudd (silver body, red fins)', 'Golden Rudd (yellow-gold body, orange-red fins - ornamental variant)', 'Regional color variations (depends on water clarity and diet)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Rudd breed readily in outdoor ponds with proper conditions but extremely difficult in indoor aquariums (space constraints). Breeding requirements: 1) Sexual maturity (2-3 years, 15-20cm length), 2) Winter cooling (4-10°C for 2-4 months)—absolutely mandatory!, 3) Spring warming (gradual temp rise to 18-20°C triggers spawning), 4) Dense fine-leaved plants (spawning substrate - Elodea, Cabomba, moss), 5) Large space (ponds ideal; aquariums 500L+ minimum). Males develop white spawning tubercles on head/body. Spawning occurs May-June in early morning—males chase females into dense plants, spawning occurs with violent thrashing ("spawning rush").',
    fryCare: 'Females scatter 100,000+ sticky eggs onto fine-leaved plants (yes, over 100,000!). Eggs are tiny (1mm), translucent, adhesive. NO parental care—adults eat eggs if not removed/separated. Eggs hatch in 4-10 days depending on temp (18°C = 10 days; 22°C = 4 days). Fry are microscopic (3-4mm) and initially feed on infusoria/microscopic organisms. After 7-10 days, introduce newly-hatched brine shrimp. Growth is slow: 5cm at 1 year, 10cm at 2 years, 15cm+ at 3 years (breeding size). CHALLENGE: The sheer number of eggs/fry overwhelms most setups. Ponds with natural food sources (zooplankton) handle breeding better than aquariums. Indoor breeding success low due to space and food requirements.',
    notes: 'Rudd breeding is nearly impossible in home aquariums due to: 1) Massive space needs (100,000+ eggs!), 2) High oxygen requirements for eggs (aquariums can\'t sustain), 3) Microscopic fry needing specialized foods. Breeding occurs spontaneously in outdoor ponds (500L+) with proper seasonal cycles. Most hobbyists observe spawning behavior (thrashing in plants) but fry survival is low unless pond is large with established zooplankton populations. Commercial breeding occurs in large outdoor ponds.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'shortened-lifespan-no-breeding', cause: 'kept-in-heated-tropical-tank-no-winter-cooling', frequency: 0.30 },
      { issue: 'stress-stunted-growth', cause: 'tank-too-small-under-400L', frequency: 0.25 },
      { issue: 'skittish-hiding-faded-colors', cause: 'group-too-small-under-8-fish', frequency: 0.18 },
      { issue: 'all-plants-destroyed', cause: 'soft-plants-eaten-voraciously', frequency: 0.15 },
      { issue: 'gasping-at-surface', cause: 'poor-oxygenation-in-warm-water', frequency: 0.12 },
    ],
    
    estimatedCosts: {
      initial: { min: 250, max: 600, currency: 'EUR' },
      monthly: { min: 15, max: 35, currency: 'EUR' },
    },
  },
};
