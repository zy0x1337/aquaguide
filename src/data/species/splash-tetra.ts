import type { Species } from '../../types/species';

export const copellaArnoldi: Species = {
  id: 'tetra-splash',
  slug: 'splash-tetra',
  imageUrl: '/images/species/splash-tetra.jpg',

  imageCredit: {
    photographer: 'Zikamoi (via Wikimedia Commons)',
    sourceUrl: 'https://en.wikipedia.org/wiki/File:Copella_arnoldi.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  
  funFact: "The Splash Tetra is famous for its unique breeding strategy: the male and female leap out of the water simultaneously to attach their eggs to the underside of overhanging leaves. The male then repeatedly splashes water onto the eggs with his tail fin to keep them moist until they hatch and the fry fall into the water.",

  taxonomy: {
    scientificName: 'Copella arnoldi',
    commonName: 'Splash Tetra / Spraying Tetra',
    family: 'Lebiasinidae',
    origin: 'South America (Lower Amazon River, Guianas)',
    region: 'South America',
    biotope: 'Shallow, still backwaters and small streams with dense overhanging vegetation.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4.5,
    color: 'Males are golden-bronze with orange to red fins and a white edge on the dorsal fin. Females are duller with a rounder belly. The body is somewhat translucent with a dark lateral stripe.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 23, max: 27, ideal: 25 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 4, max: 12 },
    kh: { min: 2, max: 8 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.8,
    },
    
    spaceNeeds: {
      horizontalCM: 50,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.5,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Floating plants or plants with leaves reaching the surface are essential for their natural behavior and breeding.',
    hardscape: ['Driftwood', 'Leaf litter', 'Overhanging branches'],
  },

  behavior: {
    tags: ['peaceful', 'jumper', 'surface_dweller', 'shy'],
    minGroupSize: 6,
    description: 'A peaceful, somewhat shy species that spends much of its time near the surface. Males can be territorial with each other but usually do not cause damage. They are excellent jumpers.',
    
    compatibility: {
      goodMates: ['Neon Tetra', 'Cardinal Tetra', 'Corydoras', 'Pencilfish', 'Hatchetfish', 'Dwarf Shrimp'],
      badMates: ['Fin nippers', 'Large aggressive fish', 'Fast competitive eaters'],
      notes: 'Best kept with other small, peaceful fish. They are easily outcompeted for food by boisterous species.',
      
      rules: [
        {
          type: 'requires',
          condition: 'secure lid',
          reason: 'They are exceptional jumpers and will leap from the tank, especially during spawning or when startled.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'floating plants or overhanging leaves',
          reason: 'They need cover near the surface to feel secure and for their unique spawning behavior.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'group-size >= 6',
          reason: 'They are a schooling fish. Small groups lead to shyness and stress.',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 2,
      interspecific: 0,
      territorial: 1,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'evening'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'school',
      maxMalesPerTank: 999,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'carnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Secure lid', 
      'Floating plants', 
      'Live or frozen foods', 
      'Calm tankmates',
    ],

    proTips: [
      "Feed small live or frozen foods like fruit flies, bloodworms, and brine shrimp to keep them healthy.",
      "Lower the water level slightly and provide broad-leaved plants near the surface to encourage spawning.",
      "They prefer a tank with little to no surface agitation."
    ],

    commonMistakes: [
      "Leaving the tank uncovered results in lost fish.",
      "Keeping them with fast-swimming fish leads to starvation.",
      "Strong water flow stresses them as they naturally inhabit still waters."
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['bloodworms', 'brine-shrimp', 'daphnia'],
      supplements: ['crushed-flakes'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'sunday',
    },
    
    maintenance: {
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Maintain good water quality. They can be sensitive to fluctuating parameters.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
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
    lifespanYears: 4,
    commonDiseases: ['ich', 'velvet', 'fin-rot'],
    sensitivities: ['Strong currents', 'Sudden parameter changes', 'Dry food only diets'],
  },

  scientificContext: {
    wildHabitat: "Inhabits calm, shallow waters in the Amazon and Guianas. These areas are often shaded by dense forest canopy and rich in overhanging vegetation.",
    sexualDimorphism: "Males are more brightly colored, especially the fins which turn red-orange, and are slimmer. Females have a noticeably rounder abdomen.",
    variants: ['Wild Type'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'medium',
    trigger: 'To breed, lower the water level and provide broad leaves or plastic strips just above the surface. The pair jumps out of the water to deposit eggs.',
    fryCare: 'The male splashes the eggs with water for about 3 days. Fry fall into the water upon hatching and are large enough to eat baby brine shrimp immediately.',
    notes: 'The breeding behavior is fascinating to watch but requires a specific setup with minimal surface clearance.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'jumping', cause: 'startled-no-lid', frequency: 0.40 },
      { issue: 'starvation', cause: 'outcompeted-for-food', frequency: 0.25 },
      { issue: 'stress', cause: 'strong-current-or-aggressive-tankmates', frequency: 0.15 },
      { issue: 'water-quality', cause: 'high-nitrates', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 30, max: 80, currency: 'EUR' },
      monthly: { min: 5, max: 12, currency: 'EUR' },
    },
  },
};