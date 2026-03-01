import type { Species } from '../../types/species';

export const melanotaeniaBoesemani: Species = {
  id: 'rainbowfish-boesemani',
  slug: 'boesemani-rainbowfish',
  imageUrl: '/images/species/boesemani-rainbowfish.jpg',

  imageCredit: {
    photographer: 'Rufus46 (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Boesemans_Regenbogenfisch_Melanotaenia_boesemani_Tierpark_Hellabrunn-1.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  
  funFact: "Boeseman's Rainbowfish display a stunning 'bicolor' pattern unique among rainbows: the front half of the body is a deep indigo-blue while the rear half glows with brilliant orange-yellow. Males intensify these colors during spirited morning display sessions, fluttering their fins to impress rivals and females. They are Endangered in the wild due to over-collection, but captive-bred specimens are widely available.",

  taxonomy: {
    scientificName: 'Melanotaenia boesemani',
    commonName: 'Boeseman\'s Rainbowfish',
    family: 'Melanotaeniidae',
    origin: 'West Papua, Indonesia (Ayamaru Lakes region)',
    region: 'Oceania',
    biotope: 'Clear, shallow lakes and tributaries with dense aquatic vegetation and rocky substrates.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 12,
    color: 'Distinctive bicolored body pattern. The front half is deep blue to purple, while the rear half is bright orange to yellow. Fins are generally clear with dark edges. Males are deeper-bodied with more intense coloration; females are smaller and silvery with less distinct color separation.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 200,
    tempC: { min: 25, max: 30, ideal: 27 },
    ph: { min: 7.0, max: 8.5, ideal: 7.8 },
    gh: { min: 8, max: 25 },
    kh: { min: 5, max: 15 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.85,
    },
    
    spaceNeeds: {
      horizontalCM: 120,
      verticalCM: 40,
      territories: 0,
    },
    
    bioloadMultiplier: 1.5,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'They appreciate dense planting along the back and sides for security but require a large open swimming area in the center. They will not eat healthy plants. Use hardy species like Vallisneria that tolerate alkaline water.',
    hardscape: ['Driftwood', 'Smooth river stones', 'Submerged branches for structure'],
  },

  behavior: {
    tags: ['schooler', 'peaceful', 'active', 'diurnal'],
    minGroupSize: 6,
    description: 'A very active, peaceful schooling fish. Males perform spectacular displays, flashing their colors and "shimmering" to assert dominance without actual aggression. They spend most of the day swimming in the upper and middle water layers. They are generally peaceful but can be boisterous eaters.',
    
    compatibility: {
      goodMates: ['Other Rainbowfish', 'Large peaceful tetras', 'Danios', 'Corydoras', 'Bristlenose Plecos', 'Peaceful gouramis'],
      badMates: ['Slow-moving fish', 'Long-finned fish (fin nipping risk)', 'Aggressive cichlids', 'Tiny fish'],
      notes: 'Best kept in groups of 6 or more with multiple males to encourage color displays. They are active swimmers and need horizontal space; a 120cm long tank is the minimum standard. Avoid housing with slow or long-finned species that might be startled by their speed or suffer fin nipping.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group-size >= 6',
          reason: 'They are schooling fish. Groups smaller than 6 result in stressed fish that hide and lose color. A mix of males and females encourages natural display behavior.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'tank length >= 120cm',
          reason: 'They are very active swimmers. In shorter tanks, they cannot exercise properly, leading to stress and obesity.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'soft, acidic water',
          reason: 'They require alkaline, moderately hard water. Soft water causes them to lose color and become susceptible to disease.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-20',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 1,
      territorial: 1,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'afternoon'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'school',
      maxMalesPerTank: 10,
    },
    
    finNipping: {
      risk: 'low',
      targets: ['long-finned fish'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'omnivore',
    effort: 'low',
    cost: 'medium',
    specialRequirements: [
      'Long tank (120cm+)', 
      'Group of 6+', 
      'Alkaline water', 
      'High quality diet for color',
    ],

    proTips: [
      "Feed a varied diet rich in carotenoids (like krill or color-enhancing flakes) to bring out the intense orange and blue coloration.",
      "They are high-waste producers; ensure excellent filtration and perform regular water changes.",
      "They jump when startled; a tight-fitting lid is mandatory."
    ],

    commonMistakes: [
      "Keeping them in small tanks restricts their swimming and leads to stress.",
      "Housing only one male leads to dull coloration; multiple males spur competitive displays.",
      "Feeding only dry food results in washed-out colors."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'spirulina'],
      supplements: ['bloodworms', 'brine-shrimp'],
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
      notes: 'Regular water changes are essential to maintain high water quality and prevent disease.',
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
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 8,
    commonDiseases: ['ich', 'velvet', 'fin-rot', 'columnaris'],
    sensitivities: ['Soft water', 'Low temperature', 'Poor water quality'],
  },

  scientificContext: {
    wildHabitat: "Endemic to the Ayamaru Lakes region in West Papua. They inhabit clear, alkaline lakes with abundant aquatic vegetation. They are listed as Endangered on the IUCN Red List due to their limited natural range and pressure from the aquarium trade, though conservation efforts and captive breeding have reduced pressure on wild populations.",
    sexualDimorphism: "Males are larger, deeper-bodied, and display the characteristic intense blue and orange split coloration. Females are smaller, thinner, and have a silvery or dull yellowish coloration.",
    variants: ['Standard Boesemani', 'Lake Aitinjo (darker blue)', 'Lake Hain (more green)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'beginner',
    trigger: 'Spawning is induced by a slight temperature increase and very soft, clean water. A group of males and females should be conditioned heavily with live foods.',
    fryCare: 'Eggs are attached to fine-leaved plants (like Java Moss) by the female. Parents may eat eggs; removing the spawning medium to a separate tank increases yield. Fry hatch in 7-10 days and need microscopic foods initially.',
    notes: 'They are prolific breeders in the right conditions. Daily spawning is common in well-maintained groups.',
  },
  
  experienceData: {
    successRate: 0.80,
    survivalRate: 0.75,
    
    commonFailures: [
      { issue: 'jumping-escape', cause: 'startled-no-lid', frequency: 0.20 },
      { issue: 'color-fade', cause: 'soft-water-or-poor-diet', frequency: 0.30 },
      { issue: 'stress-from-small-group', cause: 'under-6-fish', frequency: 0.10 },
      { issue: 'stunting', cause: 'tank-too-small', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 150, max: 400, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};