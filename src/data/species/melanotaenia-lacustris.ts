import type { Species } from '../../types/species';

export const melanotaeniaLacustris: Species = {
  id: 'rainbowfish-001',
  slug: 'lake-kutubu-rainbowfish',
  imageUrl: '/images/species/lake-kutubu-rainbowfish.jpg',
  
  funFact: "Endemic to a single lake in Papua New Guinea, this endangered species is renowned for its ability to rapidly change color patterns throughout the day.",

  imageCredit: {
    photographer: 'Klaus Rudloff (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Melanotaenia_lacustris.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },

  taxonomy: {
    scientificName: 'Melanotaenia lacustris',
    commonName: 'Lake Kutubu Rainbowfish',
    family: 'Melanotaeniidae',
    origin: 'Papua New Guinea (Endemic to Lake Kutubu and Soro River)',
    region: 'Australia',
    biotope: 'Clear, still to slow-moving lake waters with heavy aquatic vegetation and extreme alkaline water.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 12,
    color: 'A brilliant turquoise-blue body with a darker mid-lateral stripe. Males display an intense orange breeding stripe on the forehead and more pointed fins compared to the rounder females.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 200,
    tempC: { min: 22, max: 26, ideal: 24 },
    ph: { min: 7.0, max: 8.5, ideal: 7.8 },
    gh: { min: 10, max: 25 },
    kh: { min: 8, max: 20 },
    flow: 'moderate',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 150,
      verticalCM: 50,
      territories: 0,
    },
    
    bioloadMultiplier: 1.5,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Dense planting along the back and sides provides security, but a large open swimming area in the center is mandatory for this active species. Use hard water tolerant plants like Vallisneria and Anubias.',
    hardscape: ['Smooth driftwood', 'Smooth river stones', 'Open swimming space'],
  },

  behavior: {
    tags: ['active', 'peaceful', 'schooler', 'jumper', 'diurnal'],
    minGroupSize: 6,
    description: 'These are extremely active swimmers that require significant horizontal space to exhibit natural behavior. They are peaceful but boisterous, and their constant activity can stress shy or slow-moving tankmates. Males perform frequent display rituals, flaring their fins and intensifying their colors to court females. They are known for their unique ability to rapidly shift color patterns depending on mood and time of day. A tight-fitting lid is essential as they are proficient jumpers.',
    
    compatibility: {
      goodMates: ['Other rainbowfish', 'Larger peaceful tetras', 'Corydoras', 'Peaceful barbs', 'Active rasboras'],
      badMates: ['Slow/shy fish', 'Long-finned fish', 'Fin nippers', 'Aggressive cichlids'],
      notes: 'Best kept in groups with an equal ratio of males to females to distribute male courtship activity. They mix well with other rainbowfish species.',
      
      rules: [
        {
          type: 'requires',
          condition: 'large tank with 150cm+ horizontal length',
          reason: 'They are active swimmers that become stressed and aggressive in small tanks.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'tight-fitting lid with no gaps',
          reason: 'They are excellent jumpers and will escape through even small gaps.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'hard alkaline water (pH 7.0-8.5, GH 10-25+)',
          reason: 'They originate from a limestone lake with extremely alkaline water and struggle in soft, acidic conditions.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'keeping small groups or unequal sex ratios',
          reason: 'Males will relentlessly harass females if they are outnumbered.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 10-15,
        midwater: '15-25',
        bottom: '8-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 1,
      territorial: 2,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'evening'],
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
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Large tank (200L+, 150cm+ length)', 
      'Tight-fitting lid', 
      'Hard alkaline water', 
      'Equal male:female ratios', 
      'Active tankmates', 
      'Captive-bred stock',
    ],

    proTips: [
      "Buy captive-bred specimens to support conservation efforts, as wild populations are endangered.",
      "Do not judge juveniles by their color; they develop their signature turquoise as they mature."
    ],

    commonMistakes: [
      "Keeping them in tanks shorter than 150cm restricts their active swimming behavior.",
      "Housing them with shy fish causes stress due to their boisterous activity.",
      "Using soft, acidic water results in dull colors and poor health."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['flakes', 'micro-pellets', 'spirulina'],
      supplements: ['bloodworms', 'brine-shrimp', 'daphnia', 'vegetables'],
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
      notes: 'Maintain hard, alkaline water parameters to mimic their natural lake habitat.',
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
      airstone: true,
      lighting: 'high',
      co2: false,
    },
  },

  health: {
    lifespanYears: 8,
    commonDiseases: ['mycobacteriosis', 'ich', 'velvet', 'bacterial-infections'],
    sensitivities: ['Poor water quality', 'Sudden parameter changes', 'Low oxygen', 'Soft acidic water'],
  },

  scientificContext: {
    wildHabitat: "Endemic to Lake Kutubu in Papua New Guinea, a clear, limestone lake with extremely alkaline water. They are currently listed as Endangered on the IUCN Red List due to habitat degradation, invasive species, and overfishing. The lake experiences a natural phenomenon called the Turning of the Water, where oxygen-depleted water rises from the depths, causing fish kills. Conservation of this species relies heavily on captive breeding programs within the aquarium hobby.",
    sexualDimorphism: "Males are deeper bodied with more intense turquoise coloration and an orange breeding stripe on the forehead. Females are rounder with duller coloration and rounded fins.",
    variants: ['Wild-type Turquoise', 'Lacustris Blue'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'medium',
    trigger: 'Spawning is triggered by heavy feeding and a slight temperature increase. They are continuous spawners, laying small batches of eggs over several days on fine-leaved plants or spawning mops.',
    fryCare: 'Eggs hatch in seven to eight days. The tiny fry require infusoria or liquid fry food for the first week before they can accept baby brine shrimp. Growth is slow, with full coloration taking up to a year to develop.',
    notes: 'Breeding this species in captivity supports the conservation of wild populations.',
  },
  
  experienceData: {
    successRate: 0.55,
    survivalRate: 0.60,
    
    commonFailures: [
      { issue: 'jumping-escape-death', cause: 'no-secure-lid-excellent-jumpers', frequency: 0.30 },
      { issue: 'poor-coloration-pale-grey', cause: 'soft-acidic-water-need-hard-alkaline', frequency: 0.25 },
      { issue: 'understimulation-aggression', cause: 'tank-under-150cm-length-need-swimming-space', frequency: 0.20 },
      { issue: 'female-harassment-stress', cause: 'small-groups-or-unequal-sex-ratios', frequency: 0.15 },
      { issue: 'mycobacteriosis-fish-tb', cause: 'poor-quarantine-contagious-disease', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 150, max: 400, currency: 'EUR' },
      monthly: { min: 15, max: 35, currency: 'EUR' },
    },
  },
};