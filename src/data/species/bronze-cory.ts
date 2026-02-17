import type { Species } from '../../types/species';

export const bronzeCory: Species = {
  id: 'cory-002',
  slug: 'bronze-cory',
  imageUrl: '/images/species/bronze-cory.jpg',
  funFact: "Bronze Corydoras are one of the few fish that can 'breathe' air! They dart to the surface, gulp atmospheric oxygen, and process it through their intestines. This adaptation allows them to survive in oxygen-poor waters where other fish would suffocate. You'll see them do this 'Cory zoom' multiple times per hour—it's completely normal and adorable. Watch for groups of 6+ doing synchronized zooms together like tiny synchronized swimmers!",

  taxonomy: {
    scientificName: 'Corydoras aeneus',
    commonName: 'Bronze Corydoras',
    family: 'Callichthyidae',
    origin: 'Widely distributed across South America: Venezuela, Colombia, Trinidad, Brazil, Argentina',
    region: 'South America',
    biotope: 'Slow-moving rivers, marshes, floodplains, and shallow pools with soft muddy or sandy bottoms rich in organic matter',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 6.5,
    color: 'Bronze-metallic sheen on sides, olive-brown back, cream belly. Albino variant: pink body with red eyes',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 21, max: 27, ideal: 24 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 2, max: 25 },
    kh: { min: 2, max: 15 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'surface',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.6,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Bronze Corys appreciate planted tanks but need OPEN FLOOR SPACE for foraging. Use robust plants like Amazon Swords, Cryptocoryne, Anubias, and Java Fern that won\'t be uprooted by their constant digging. Avoid delicate carpeting plants (Monte Carlo, HC Cuba) in Cory-heavy tanks—they\'ll accidentally uproot them while sifting substrate. Floating plants (Frogbit, Red Root Floaters) help dim lighting, as Corys prefer subdued light. Leaf litter (Indian Almond, Oak leaves) provides foraging opportunities and beneficial tannins.',
    hardscape: ['Smooth Driftwood (Malaysian, Mopani)', 'River Stones', 'Terracotta Caves', 'PVC Pipe Shelters'],
  },

  behavior: {
    tags: ['shoaler', 'bottom_dweller', 'peaceful', 'robust', 'active', 'scaleless'],
    minGroupSize: 6,
    description: 'Bronze Corydoras are the "tanks" of the Corydoras world—larger, bolder, and significantly hardier than smaller species like Pandas or Pygmies. They are constantly active, bouncing around the bottom like miniature bulldozers, sifting through substrate for food with unstoppable enthusiasm. Their barbels (whisker-like sensory organs) detect buried food particles with impressive precision. Unlike shy species, Bronzes are confident and often ignore humans entirely—they\'re too busy being aquarium workhorses. They exhibit fascinating social behavior: synchronized swimming, group "dances," adorable "Cory trains" where 3-5 fish line up single-file and march across the tank, and occasional mass dashes to the surface for air gulps. They communicate through body language and subtle chemical signals.',
    
    compatibility: {
      goodMates: ['Tetras (Neon, Cardinal, Rummynose)', 'Rasboras', 'Peaceful Cichlids (Angelfish, Rams, Apistogramma)', 'Livebearers (Guppies, Platies)', 'Peaceful Barbs', 'Gouramis', 'Danios', 'Shrimp (Cherry, Amano)', 'Snails'],
      badMates: ['Large aggressive Cichlids (Oscars, Jack Dempseys)', 'Goldfish (different temperature needs)', 'Bettas (sometimes nippy toward Corys)', 'Aggressive Loaches'],
      notes: 'Bronze Corys are among the most versatile community fish. Their hardiness, peaceful nature, and wide temperature tolerance (21-27°C) make them compatible with nearly everything peaceful. They ignore most tankmates and focus entirely on the substrate. Their armored bodies make them resistant to fin-nippers.',
      
      rules: [
        {
          type: 'avoid',
          target: 'large aggressive cichlids',
          reason: 'Predatory cichlids (Oscars, Jack Dempseys) may attack or eat smaller Corys, especially juveniles',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'sand substrate',
          reason: 'CRITICAL: Gravel erodes barbels, leading to infection, starvation, and death. Sand allows natural foraging behavior',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 6',
          reason: 'Corydoras are shoaling fish that become stressed, inactive, and hide constantly in small groups. 6 is minimum, 10+ is ideal',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'goldfish',
          reason: 'Temperature incompatibility. Goldfish prefer 18-22°C, Bronze Corys prefer 24-26°C. Neither thrives in the overlap zone',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: '10-20',
        midwater: '15-30',
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
      'SAND substrate is mandatory—gravel causes barbel erosion', 
      'Groups of 6+ required for natural shoaling behavior', 
      'Sinking foods required (they cannot eat floating flakes)',
      'Regular substrate vacuuming prevents bacterial buildup',
    ],

    proTips: [
      "Bronze Corys are a LONG-TERM commitment. With proper care, they typically live 8-10 years, and exceptional individuals reach 15+ years. That's longer than many dogs! You're not buying a disposable fish—you're adopting a decade-long companion.",
      "Albino Corys are just Bronze Corys with albinism (leucistic mutation). Same species, same care, same hardy nature. They're NOT a separate species despite being labeled differently in stores.",
      "Feed sinking foods AFTER lights dim. Corys are crepuscular (most active at dawn/dusk). Feeding at night ensures they get food before midwater fish steal it.",
      "The 'Cory shuffle' (wiggling into substrate) is normal foraging behavior. They use barbels to detect food buried 1-2cm deep. This is why sand is critical—gravel prevents this natural behavior entirely.",
      "Temperature tolerance: Bronzes handle WARMER water (up to 27°C) better than Pandas (22-24°C) or Pygmies (22-25°C). Great for tropical community tanks with higher temps.",
      "Air gulping ('Cory zoom') is NORMAL, not distress. They dash to the surface, gulp air, and process oxygen through intestinal respiration. Frequency increases in low-oxygen water but even well-oxygenated tanks see zooms.",
      "Barbel health = overall health. Long, intact barbels indicate pristine conditions. Short, eroded barbels signal poor substrate or dirty water. Check barbels weekly as your water quality canary.",
    ],

    commonMistakes: [
      "Using gravel substrate. This is the #1 killer of Corydoras. Gravel erodes barbels, causing infection (barbel erosion), inability to find food, and eventual starvation. ONLY use sand.",
      "Thinking they 'eat poop' or 'clean the tank.' Corys are scavengers that eat LEFTOVER FOOD, not waste. They produce waste like any fish. You still need to vacuum substrate weekly.",
      "Underfeeding. Many assume Corys survive on scraps. They need dedicated sinking foods (Hikari Sinking Wafers, Fluval Bug Bites, bloodworms) or they'll starve while midwater fish thrive.",
      "Keeping alone or in pairs. Corys are social shoalers that become stressed and inactive without groups. 6 is minimum; 10+ displays natural behaviors like synchronized swimming and Cory trains.",
      "Ignoring barbel erosion. Short or missing barbels indicate bacterial infection from dirty substrate or sharp gravel. Once barbels are gone, Corys struggle to find food and often die.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['wafers', 'pellets', 'bloodworms', 'brine-shrimp'],
      supplements: ['daphnia', 'vegetables', 'tubifex'],
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
      notes: 'CRITICAL: Vacuum sandy substrate weekly to remove detritus and prevent anaerobic pockets. Corys sift substrate constantly, but this exposes them to bacteria if substrate isn\'t cleaned. Use gentle siphon to avoid sucking up sand.',
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
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 10,
    commonDiseases: ['barbel-erosion', 'red-blotch-disease', 'ich', 'columnaris', 'nitrite-poisoning'],
    sensitivities: ['Sharp substrate (causes barbel erosion)', 'Salt (scaleless fish - avoid salt treatments)', 'Copper-based medications', 'High nitrites (more sensitive than other fish)', 'Dirty substrate (bacterial infections)'],
  },

  scientificContext: {
    wildHabitat: "Bronze Corydoras inhabit an enormous range across South America—from Trinidad and Venezuela down to northern Argentina. They occupy slow-moving rivers, marshes, floodplains, and temporary pools during rainy season. These habitats feature soft muddy or sandy bottoms rich in detritus, leaf litter, and organic matter. Water parameters vary dramatically (pH 6.0-8.0, GH 2-25), making them incredibly adaptable. During dry season, pools shrink and oxygen levels drop—this is when their intestinal breathing adaptation becomes critical for survival.",
    sexualDimorphism: "Clear when viewed from above. Females are significantly larger, rounder, and deeper-bodied, especially when carrying eggs (gravid). Males are smaller, slimmer, and more streamlined. Females' pectoral fins are shorter and rounder, while males have slightly elongated, more pointed pectoral fins. During breeding condition, females become MASSIVE—almost comically round.",
    variants: ['Wild Type (bronze-metallic)', 'Albino/Leucistic (pink body, red eyes)', 'Black Venezuela (melanistic)', 'Green Laser (separate lineage)', 'Longfin (captive mutation)'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'beginner',
    trigger: 'Bronze Corys are among the EASIEST egg-layers to breed. Trigger spawning with a large (40-50%) cool water change (2-3°C cooler than tank). This mimics rainy season floods. Condition breeders with high-protein foods (bloodworms, brine shrimp) for 2 weeks prior. Spawning usually occurs within 24-48 hours of water change. Males chase females in "T-position" courtship displays.',
    fryCare: 'Females lay 100-300 adhesive eggs on glass, plants, and decorations. Remove adults after spawning (they may eat eggs). Eggs hatch in 3-5 days at 24°C. Fry are large and immediately accept microworms, powdered flakes, and crushed pellets—NO infusoria stage needed. Growth is fast; juveniles reach 2cm in 6-8 weeks. Maintain pristine water (daily 10% changes) to prevent bacterial infections.',
    notes: 'Bronze Corys often spawn spontaneously after routine water changes, surprising unprepared aquarists with eggs everywhere. Many breeders keep breeding groups (2 males : 3 females) and collect eggs weekly. Fry survival is high (50-70%) even without special care. This is THE beginner\'s egg-laying species.',
  },
  
  experienceData: {
    successRate: 0.90,
    survivalRate: 0.85,
    
    commonFailures: [
      { issue: 'barbel-erosion', cause: 'gravel-substrate', frequency: 0.35 },
      { issue: 'starvation', cause: 'underfeeding-or-competition', frequency: 0.20 },
      { issue: 'nitrite-poisoning', cause: 'new-tank-or-overstocking', frequency: 0.15 },
      { issue: 'red-blotch-disease', cause: 'dirty-substrate-bacteria', frequency: 0.12 },
      { issue: 'stress-death', cause: 'kept-alone-or-small-group', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 150, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};
