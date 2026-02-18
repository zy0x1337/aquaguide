import type { Species } from '../../types/species';

export const goldSpotPleco: Species = {
  id: 'species-gold-spot-pleco',
  slug: 'gold-spot-pleco',
  imageUrl: '/images/species/gold-spot-pleco.jpg',
  funFact: "Gold Spot Plecos are living showpieces—stunning dark bodies covered in bright gold spots like a starry night sky! But here's the critical catch: they're tank busters growing 12-16 inches (30-40cm)—bigger than Common Plecos in many cases! Stores sell adorable 2-inch juveniles without warning they'll become monsters requiring 150+ gallon (550L+) tanks. They're wood-eating machines: watch them rasp driftwood for hours, leaving trails of sawdust waste everywhere. They're also algae destroyers cleaning glass and rocks efficiently, but they produce massive amounts of waste—like having a goldfish that never stops pooping! Males develop impressive bristled spines (odontodes) on cheeks and pectoral fins. From Brazil's Tocantins/Araguaia River rapids!",

  imageCredit: {
    photographer: 'Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/glyptoperichthys-joselimaianus-1598398/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  taxonomy: {
    scientificName: 'Pterygoplichthys joselimaianus',
    commonName: 'Gold Spot Pleco',
    family: 'Loricariidae',
    origin: 'Brazil (Tocantins River basin, Araguaia River - rapids and fast-flowing sections)',
    region: 'South America',
    biotope: 'Fast-flowing rivers with rocky substrates, abundant driftwood, high oxygen content, seasonal flooding',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 35,
    color: 'Stunning! Dark brown to black body covered in bright gold or yellow spots creating starry night sky pattern. Adults develop impressive dorsal and caudal fins with spotted patterns. Males develop prominent bristled odontodes (spines) on cheeks and pectoral fins. Juveniles show more contrast; adults darken with age',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 550,
    tempC: { min: 23, max: 29, ideal: 26 },
    ph: { min: 6.5, max: 7.5, ideal: 7.0 },
    gh: { min: 3, max: 15 },
    kh: { min: 2, max: 10 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 150,
      verticalCM: 50,
      territories: 1,
    },
    
    bioloadMultiplier: 2.5,
  },

  habitat: {
    planting: 'none',
    plantingNotes:
      'Gold Spot Plecos are plant destroyers! They uproot everything while foraging and bulldoze through decorations. Traditional plants are destroyed within days by their massive size and constant movement. If plants desired, use only bulletproof species attached to rocks/driftwood: Anubias (barteri, nana), Java Fern (tied securely). Even these may be damaged. Best practice: skip plants and focus on dramatic rockscapes with abundant driftwood (mandatory for digestion).',
    hardscape: ['CRITICAL: Multiple large driftwood pieces (2-3 pieces minimum - digestion mandatory)', 'Large smooth caves (terracotta pots, slate, PVC pipes 4+ inches diameter)', 'Large smooth river stones', 'Flat rocks for grazing algae', 'Secure all decorations—they bulldoze everything!'],
  },

  behavior: {
    tags: ['peaceful', 'nocturnal', 'territorial', 'algae_eater', 'bottom_dweller'],
    minGroupSize: 1,
    description:
      'Gold Spot Plecos are gentle giants—peaceful toward all fish despite massive size! They\'re shy and nocturnal: during day, they hide in caves or under driftwood. At night, they emerge and become active grazers, rasping algae from every surface (glass, rocks, driftwood, equipment). Watch them work: powerful sucker mouths create audible scraping sounds! They\'re wood-eating machines, rasping driftwood for hours creating trails of fine sawdust waste. Males are highly territorial toward other plecos—they fight brutally for caves and territory (locked jaws, pushing). Keep only one per tank unless tank is 800L+ with separated cave systems. They\'re peaceful toward all other fish and ignore tankmates completely.',
    
    compatibility: {
      goodMates: ['Large cichlids (Oscars, Severums, large Angelfish)', 'Large catfish', 'Giant Danios', 'Large barbs', 'Adult Plecos of different genera (if 800L+ tank)', 'Silver Dollars', 'Large peaceful fish'],
      badMates: ['Small fish (eaten or outcompeted)', 'Other Pterygoplichthys plecos (brutal fighting)', 'Nano fish', 'Shrimp (eaten)', 'Very aggressive fish', 'Small tanks'],
      notes:
        'Gold Spot Plecos are excellent for large community tanks with peaceful large fish. They\'re 100% peaceful toward fish but highly territorial toward other large plecos (especially Pterygoplichthys species). Keep only one per tank unless 800L+ with separated territories far apart. They ignore most tankmates and focus on algae/wood. CRITICAL: They outgrow most tanks—juveniles are 2 inches, adults 12-16 inches! Plan for 150+ gallon (550L+) tank from the start. Common mistake: buying cute juvenile without realizing adult size.',
      
      rules: [
        {
          type: 'requires',
          condition: 'driftwood mandatory (multiple large pieces)',
          reason: 'CRITICAL: Gold Spot Plecos must have driftwood. They rasp wood fibers to aid digestion. Without wood, digestive issues, bloating, and starvation occur. Driftwood also wears down continuously growing teeth. Provide 2-3+ large pieces',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'MASSIVE tank 150+ gallons (550L+) for adult',
          reason: 'CRITICAL: Gold Spot Plecos grow 12-16 inches (30-40cm)—they are tank busters! Juveniles (2 inches) are sold without size warnings. Adults need 150cm+ tanks (550L+). Smaller tanks = stunted growth, health issues, shortened lifespan',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'other large plecos (especially Pterygoplichthys)',
          reason: 'Males are highly territorial and fight brutally for caves. Locked jaws, injuries, death. Keep one per tank unless 800L+ with separated caves far apart',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'STRONG filtration (canister 6-8x turnover)',
          reason: 'Gold Spot Plecos produce massive waste (wood/algae digestion = sawdust poop). Bioload equivalent to 3-4 goldfish. Strong filtration mandatory. Nitrates spike without adequate filtration',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 0-6,
        midwater: '8-15',
        bottom: '1',
      },
    },
    
    aggressionLevel: {
      intraspecific: 9,
      interspecific: 0,
      territorial: 8,
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
    difficulty: 'medium',
    diet: 'herbivore',
    effort: 'high',
    cost: 'high',
    specialRequirements: [
      'Massive tank 150+ gallons (550L+) for adult', 
      'Driftwood mandatory (digestion)', 
      'Very strong filtration (canister 6-8x turnover)', 
      'Weekly 40-50% water changes', 
      'Vegetable-based diet',
      'Keep only one per tank (territorial)',
    ],

    proTips: [
      "TANK BUSTER WARNING! Gold Spot Plecos grow 12-16 inches (30-40cm). Stores sell cute 2-inch juveniles without warning. Adults need 150+ gallon (550L+) tanks minimum. Don't buy unless you can provide 6-foot tank (180cm). This is non-negotiable.",
      "Driftwood = life! Gold Spot Plecos rasp wood fibers for digestion (helps process algae/vegetables). Without wood, bloating, digestive failure, starvation follow. Provide 2-3+ large pieces (Malaysian, Mopani, Spiderwood). Replace as consumed.",
      "Waste machine! They produce massive amounts of sawdust-like waste (wood/algae digestion). Bioload equivalent to 3-4 large goldfish. Strong canister filtration (FX4/FX6 level) mandatory. Weekly 40-50% water changes essential. Keep nitrates below 20ppm.",
      "Excellent algae eater! Gold Spot Plecos demolish green algae, brown algae, and some black beard algae. They keep large tanks spotless. More effective than Bristlenose for large tanks but need supplemental feeding.",
      "Feed vegetables! Blanched zucchini, cucumber, spinach, green beans, kale, algae wafers, spirulina pellets. Attach to veggie clip. Feed 3-4x weekly. Varied diet = healthy pleco. Don't rely on algae alone.",
      "One per tank rule! Males fight brutally. Keep only one per tank unless 800L+ with separated cave systems far apart. Even then, risky. Don't mix with other Pterygoplichthys species.",
      "Long-lived investment! With proper care (massive tank, good diet, strong filtration), they live 15-20+ years. Plan long-term commitment before buying juvenile.",
    ],

    commonMistakes: [
      "Buying without tank plan = #1 issue. 'My Gold Spot outgrew my 40 gallon!' Yes—they grow 12-16 inches. Stores sell 2-inch juveniles without warnings. Result: 75% of Gold Spots end up stunted or released illegally. Only buy if you can provide 150+ gallon (550L+) tank.",
      "No driftwood = digestive failure. Gold Spot Plecos need wood for digestion. Without wood, bloating, constipation, eventual death. This is mandatory—not optional decoration.",
      "Weak filtration = nitrate poisoning. They produce massive waste. Standard HOB filters can't handle bioload. Strong canister (FX4, FX6, Eheim 2217+) mandatory. Weekly water changes essential.",
      "Multiple plecos in small tank. Males are highly territorial. Two Gold Spots in 200L = brutal fighting, injuries, death. Keep one per tank unless 800L+ with separated territories.",
      "Relying on algae alone. Gold Spots need supplemental feeding (vegetables, wafers). Algae alone insufficient. Starving plecos stop eating algae and hide constantly.",
      "Thin tank (under 45cm width). Gold Spots need wide tanks for turning around. Tall narrow tanks stress them. 180cm x 60cm x 60cm minimum for adults.",
    ],
    
    feeding: {
      frequency: 'every-other-day',
      primaryFoods: [ 'algae-wafers', 'vegetables'],
      supplements: ['blanched-zucchini', 'spirulina', 'pellets'],
      vegetarian: true,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 50,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Weekly 40-50% water changes mandatory. Gold Spot Plecos produce massive waste (bioload equivalent to 3-4 goldfish). Strong canister filtration essential (FX4, FX6, Eheim 2217+ level). Vacuum substrate thoroughly weekly—remove pleco sawdust waste. Keep nitrates below 20ppm. Moderate flow preferred.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 300,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'strong',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 20,
    commonDiseases: ['bloat', 'digestive-issues-no-wood', 'ich', 'fin-rot', 'starvation'],
    sensitivities: ['Lack of fiber/wood (digestive failure)', 'Poor water quality (high nitrates)', 'Copper in medications', 'Small tanks (chronic stress)', 'Sudden parameter changes'],
  },

  scientificContext: {
    wildHabitat:
      'Gold Spot Plecos inhabit fast-flowing sections of Tocantins and Araguaia Rivers in Brazil. Wild habitat: rapids and rocky river sections with strong current, high oxygen content, rocky/sandy substrates, abundant submerged driftwood, seasonal flooding. Water is warm (24-28°C), soft to moderate hardness (GH 5-12), neutral (pH 6.5-7.5). They graze aufwuchs (algae/biofilm) and rasp wood constantly. Strong current explains powerful sucker mouth.',
    sexualDimorphism:
      'Difficult when young. Males: Develop prominent bristled odontodes (spines) on cheeks and leading edge of pectoral fins (more pronounced with age). Slightly larger, more elongated body. Females: Fewer/smaller odontodes. Rounder, fuller body especially when gravid. Juveniles (under 8 inches) difficult to sex—wait for maturity (12+ months) and odontode development.',
    variants: ['Gold Spot Pleco (L001 - gold spots)', 'Gold Spot Pleco variant (L022 - marbled pattern)'],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'expert',
    trigger:
      'Gold Spot Pleco breeding is extremely rare in home aquariums—virtually never achieved. In wild, they use unique strategy: excavating deep mud burrows in riverbanks during seasonal flooding (similar to other Pterygoplichthys). Burrows are 3-6 feet deep tunnels into mud/clay banks. Replicating this in aquariums is nearly impossible. Requires: 1) Mature pair (3+ years old, 10+ inches), 2) Massive tank (800L+), 3) Clay/mud bank setup (impractical), 4) Seasonal water level/temp fluctuations, 5) Proper water params (pH 6.8-7.2, temp 26-28°C). Commercial breeding farms use outdoor ponds with mud banks.',
    fryCare:
      'In wild: Males guard mud burrow entrances. Females lay 500-2000+ eggs deep in burrow. Male fans eggs for 5-7 days. Fry emerge from burrows as 1cm armored juveniles. In captivity: essentially impossible without elaborate mud bank setup. No documented home aquarium breeding success.',
    notes:
      'Gold Spot Pleco breeding in home aquariums is extremely rare—consider it impossible for hobbyists. They require deep mud burrow excavation impossible to replicate in glass tanks. All aquarium specimens are wild-caught or commercially bred in outdoor ponds with natural mud banks. Don\'t expect breeding.',
  },
  
  experienceData: {
    successRate: 0.30,
    survivalRate: 0.35,
    
    commonFailures: [
      { issue: 'outgrew-tank-stunted-growth-death', cause: 'bought-juvenile-without-adult-tank-plan', frequency: 0.50 },
      { issue: 'digestive-failure-bloating-death', cause: 'no-driftwood-in-tank', frequency: 0.20 },
      { issue: 'nitrate-poisoning-poor-health', cause: 'inadequate-filtration-for-massive-waste', frequency: 0.15 },
      { issue: 'fighting-injuries-death', cause: 'multiple-plecos-in-small-tank', frequency: 0.10 },
      { issue: 'starvation', cause: 'insufficient-vegetable-feeding', frequency: 0.05 },
    ],
    
    estimatedCosts: {
      initial: { min: 800, max: 2500, currency: 'EUR' },
      monthly: { min: 40, max: 80, currency: 'EUR' },
    },
  },
};
