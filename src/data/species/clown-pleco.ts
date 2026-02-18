import type { Species } from '../../types/species';

export const clownPleco: Species = {
  id: 'pleco-019',
  slug: 'clown-pleco',
  imageUrl: '/images/species/clown-pleco.jpg',
  funFact: "Clown Plecos are the tiny giants of the pleco world—maxing out at a cute 4 inches (10cm) vs their cousin the Common Pleco's TERRIFYING 18-24 inches! Watch a Clown Pleco work: they RASP driftwood with specialized teeth, leaving intricate patterns like tiny lumberjacks carving sculptures. Driftwood isn't decoration for them—it's FOOD. They're XYLIVORES (wood-eaters) who extract nutrients from decaying wood. Without driftwood, they slowly STARVE despite eating algae wafers. It's like feeding a cow only bread—not nutritionally complete. Always provide multiple pieces of driftwood—they'll literally eat themselves a home!",

  taxonomy: {
    scientificName: 'Panaqolus maccus',
    commonName: 'Clown Pleco',
    family: 'Loricariidae',
    origin: 'Venezuela, Colombia (Orinoco and Apure River basins)',
    region: 'South America',
    biotope: 'Fast-flowing rivers and streams with ABUNDANT submerged driftwood, fallen trees, rocky substrates, and strong current. Wood-rich environment essential',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 10,
    color: 'Dark brown to black body with striking orange/yellow bands (stripes) running vertically across body and fins. Bands create bold tiger-stripe pattern. Belly is lighter tan/cream. Males develop more pronounced odontodes (bristles) on pectoral fins and head',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 23, max: 28, ideal: 26 },
    ph: { min: 6.5, max: 7.5, ideal: 7.0 },
    gh: { min: 6, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 1,
    },
    
    bioloadMultiplier: 0.7,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Clown Plecos appreciate planted tanks but don\'t require heavy planting. Hardy plants (Anubias, Java Fern, Amazon Swords) work best—avoid delicate carpets they might uproot while foraging. Moderate planting with OPEN BOTTOM SPACE for grazing is ideal. Floating plants (Water Sprite) diffuse bright light—they prefer dim conditions.',
    hardscape: ['DRIFTWOOD (CRITICAL - primary food source!)', 'Caves (terracotta pots, coconut shells)', 'Smooth river stones', 'Malaysian driftwood (lasts longer)', 'Mopani wood (dense, long-lasting)', 'Spiderwood (soft, eaten quickly)', 'Cholla wood (favorite for rasping)'],
  },

  behavior: {
    tags: ['peaceful', 'nocturnal', 'algae_eater', 'shy', 'bottom_dweller'],
    minGroupSize: 1,
    description: 'Clown Plecos are SHY, PEACEFUL, NOCTURNAL wood-eaters that spend their lives hiding in caves and grazing on driftwood. During the day, they\'re INVISIBLE—tucked into caves, under driftwood, or wedged in tight spaces. At NIGHT, they emerge like tiny armored tanks to RASP driftwood and graze algae. Listen closely at night: you can HEAR them scraping wood with specialized teeth—it sounds like tiny sandpaper! They\'re SOLITARY and territorial toward other Clown Plecos (multiple males = fighting for caves). However, they\'re COMPLETELY PEACEFUL toward all other fish—no aggression, no fin-nipping. They\'re the aquarium\'s shy introverts who prefer solitude and wood-munching.',
    
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Gouramis', 'Corydoras', 'Small peaceful cichlids (Rams)', 'Shrimp', 'Snails', 'Peaceful community fish'],
      badMates: ['Large aggressive cichlids', 'Other territorial plecos (multiple Clown Plecos = fighting)', 'Pufferfish (too aggressive)', 'Very large predatory fish'],
      notes: 'Clown Plecos are IDEAL community tank residents—peaceful, small, non-aggressive toward all tankmates. They ignore fish and focus on wood/algae. Safe with shrimp and snails. HOWEVER: Keep ONLY ONE Clown Pleco per tank unless tank is 150L+ with MULTIPLE caves—males are territorial and fight for prime hiding spots. Females tolerate each other better but still prefer solitary life.',
      
      rules: [
        {
          type: 'requires',
          condition: 'driftwood in tank',
          reason: 'CRITICAL: Clown Plecos are XYLIVORES (wood-eaters). Driftwood is their PRIMARY FOOD SOURCE, not decoration. They extract nutrients from decaying wood cellulose. Without driftwood, they STARVE slowly despite eating algae wafers. Provide 2-3 pieces minimum',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'multiple clown plecos in small tanks',
          reason: 'Males are TERRITORIAL and fight for caves. Keep ONE per tank unless tank is 150L+ with MULTIPLE separated cave systems. Fighting = stress, injuries, death',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'caves and hiding spots',
          reason: 'Clown Plecos are SHY and NOCTURNAL. Without hiding spots, they experience chronic stress. Provide caves (terracotta pots, coconut shells, driftwood tunnels) where they spend 90% of daytime',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 10-20,
        midwater: '15-30',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 5,
      interspecific: 0,
      territorial: 6,
    },
    
    activity: {
      level: 'low',
      peakTimes: ['night'],
      nocturnal: true,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'herbivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'DRIFTWOOD MANDATORY (primary food source - not optional)', 
      'Caves for hiding (shy nocturnal fish)', 
      'Moderate to strong water flow (mimics wild habitat)',
      'Keep ONLY ONE per tank (territorial toward conspecifics)',
      'Feed at night when active (daytime feeding = ignored)',
    ],

    proTips: [
      "Clown Pleco vs Common Pleco: HUGE SIZE DIFFERENCE! Clown = 4 inches (10cm) max, perfect for 20+ gallon tanks. Common Pleco = 18-24 inches (60cm), needs 100+ gallon tanks. Stores NEVER warn beginners. If you want a 'small pleco,' Clown or Bristlenose are ONLY options. Common Plecos are tank-busters!",
      "DRIFTWOOD IS FOOD, NOT DECORATION. Clown Plecos are XYLIVORES who extract nutrients from wood. They RASP wood with specialized teeth, leaving visible scrape marks. Without driftwood, they slowly STARVE over months despite eating algae wafers. Provide 2-3 pieces minimum (Malaysian, Mopani, Spiderwood, Cholla). Replace eaten wood every 6-12 months.",
      "Nocturnal feeding: Drop algae wafers, vegetables, or wood-specific foods at LIGHTS-OUT. They emerge at night to feed. Daytime feeding = other fish eat everything before plecos wake up. Use sinking foods near their caves.",
      "You'll RARELY see them during day. They're shy cave-dwellers. Don't panic if your Clown Pleco 'disappears'—it's hiding. Check caves at night with red light (doesn't disturb them) to confirm presence.",
      "Hear them eating! At night, when tank is quiet, you can HEAR Clown Plecos rasping wood—sounds like gentle scraping/sandpaper. It's oddly satisfying and confirms they're feeding properly.",
      "Best woods: Malaysian/Mopani (dense, lasts 1-2 years), Cholla wood (favorite texture, eaten in 6-12 months), Spiderwood (soft, eaten quickly in 3-6 months). Avoid treated or painted woods—only natural aquarium-safe driftwood.",
    ],

    commonMistakes: [
      "No driftwood in tank = #1 KILLER. 'My pleco died despite eating algae wafers!' YES—because algae wafers are SUPPLEMENTS, not complete diet. Clown Plecos NEED wood for proper digestion and nutrition. It's like feeding a cow only bread. Provide driftwood or don't keep Clown Plecos.",
      "Assuming they're algae cleaners. While they EAT algae, their PRIMARY food is WOOD. They're not efficient algae cleaners compared to Bristlenose Plecos or Otocinclus. If you want algae control, choose different species.",
      "Keeping multiple males in small tanks. Males FIGHT for caves—intense battles with locked jaws and injuries. One male per tank unless tank is 150L+ with separated cave systems far apart. Females tolerate better but still prefer solitude.",
      "Bright tanks with no caves. Clown Plecos are SHY and NOCTURNAL. Bright light + no hiding spots = chronic stress, hiding behind equipment, refusing to eat. Provide caves and dim lighting.",
      "Expecting daytime activity. They're NOCTURNAL. Beginners panic: 'I never see my pleco! Is it sick?' NO—it's sleeping in a cave. They emerge at night when you're asleep. Check with red flashlight at night to observe natural behavior.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['algae-wafers', 'vegetables', 'spirulina'],
      supplements: ['blanched-zucchini'],
      vegetarian: true,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Weekly 30% water changes. Clown Plecos prefer MODERATE FLOW and well-oxygenated water (mimics wild rivers). Keep nitrates below 20ppm. Vacuum substrate to remove wood particles and pleco waste. Replace driftwood every 6-12 months as it gets eaten.',
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
    lifespanYears: 12,
    commonDiseases: ['ich', 'fin-rot', 'bloat', 'parasites', 'malnutrition-from-no-wood'],
    sensitivities: ['No driftwood (starvation)', 'High nitrates', 'Poor oxygenation', 'Sudden parameter changes', 'Medications with copper (some plecos sensitive)'],
  },

  scientificContext: {
    wildHabitat: "Clown Plecos inhabit fast-flowing rivers and streams in the Orinoco and Apure River basins (Venezuela, Colombia). Wild habitat has ABUNDANT submerged driftwood and fallen trees—entire river bottoms carpeted with wood. Water is well-oxygenated (high flow), warm (24-28°C), neutral pH (6.5-7.5), and moderate hardness. Substrate is rocky/sandy. They spend lives wedged under logs, grazing wood surfaces. Wood abundance explains their XYLIVORE evolution—they adapted to use wood as primary food source.",
    sexualDimorphism: "MALES: Develop ODONTODES (bristle-like spines) on pectoral fins and head—looks like tiny spikes along fin edges. More pronounced odontodes indicate mature males. Slightly slimmer body. FEMALES: Smoother pectoral fins with fewer/smaller odontodes. Rounder, fuller body especially when gravid (carrying eggs). Juveniles (under 6 months) impossible to sex—wait for maturity.",
    variants: ['L104 (Clown Pleco - standard)', 'L162 (Clown Pleco variant)'],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'medium',
    trigger: 'Clown Plecos are CAVE SPAWNERS that breed in home aquariums with proper setup. Trigger spawning: 1) Mature pair (2+ years old, proper sexing), 2) Caves (narrow tubes—males prefer tight spaces they can defend), 3) High-protein diet (algae wafers, vegetables, protein-rich foods), 4) Large water change (40-50%) with slightly COOLER water (23-24°C) to simulate rainy season, 5) Excellent water quality (nitrates <10ppm). Males claim caves and defend aggressively. Females enter cave to spawn.',
    fryCare: 'Females lay 50-100 orange eggs inside cave. MALE GUARDS EGGS and fans them constantly for oxygenation (3-5 days). Female is EXPELLED from cave—males are sole parents. Eggs hatch in 4-7 days at 26°C into larvae with yolk sacs. Fry absorb yolk for 5-7 days, then become free-swimming. MALE continues guarding fry for 7-10 days. Feed fry crushed algae wafers, spirulina powder, and vegetable-based foods. Provide tiny pieces of soft wood (Spiderwood) for grazing. Growth is SLOW: 1cm at 3 months, 2cm at 6 months. Maturity at 18-24 months.',
    notes: 'Clown Pleco breeding is CHALLENGING but achievable. Main difficulty: distinguishing males (need odontodes to confirm). Males are AGGRESSIVE cave defenders—only ONE male per tank. Breeding caves should be NARROW tubes (bamboo, ceramic tubes, PVC pipes 2-3cm diameter)—males prefer tight spaces. Fry survival is moderate (50-70%)—some get eaten, some starve. Remove fry to grow-out tank after male stops guarding for best results.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'starvation-death-despite-feeding', cause: 'no-driftwood-in-tank', frequency: 0.40 },
      { issue: 'fighting-injuries-death', cause: 'multiple-males-in-small-tank', frequency: 0.20 },
      { issue: 'chronic-stress-hiding', cause: 'no-caves-or-bright-lighting', frequency: 0.15 },
      { issue: 'disappears-never-seen', cause: 'nocturnal-behavior-normal', frequency: 0.12 },
      { issue: 'poor-health', cause: 'high-nitrates-or-low-oxygen', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};
