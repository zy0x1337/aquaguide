import type { Species } from '../../types/species';

export const pelvicachromispulcher: Species = {
  id: 'pelvicachromis-001',
  slug: 'pelvicachromis-pulcher',
  imageUrl: '/images/species/pelvicachromis-pulcher.jpg',
  
  funFact: "Kribensis are renowned for their intense biparental care; both parents guard the eggs and herd the fry for weeks. When ready to spawn, the female's belly turns a brilliant cherry-red to signal her readiness to the male.",

  taxonomy: {
    scientificName: 'Pelvicachromis pulcher',
    commonName: 'Kribensis',
    family: 'Cichlidae',
    origin: 'West Africa (Nigeria, Cameroon - Niger Delta)',
    region: 'Africa',
    biotope: 'Shallow, slow-moving streams and coastal estuaries with dense vegetation and submerged roots.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 10,
    color: 'Males are larger with elongated dorsal fins and gold-ringed eyespots. Females are smaller with a deeper body and a brilliant cherry-red belly, especially when breeding. Both sexes display a dark lateral stripe.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 5.0, max: 8.0, ideal: 6.5 },
    gh: { min: 2, max: 12 },
    kh: { min: 2, max: 8 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.80,
    },
    
    spaceNeeds: {
      horizontalCM: 80,
      verticalCM: 30,
      territories: 1,
    },
    
    bioloadMultiplier: 1.1,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Robust plants like Anubias and Java Fern attached to hardscape are ideal, as these fish dig extensively around their territories. Floating plants help diffuse the light.',
    hardscape: ['Clay pots', 'Coconut shells', 'Slate caves', 'Driftwood'],
  },

  behavior: {
    tags: ['pair-bonding', 'territorial', 'semi-aggressive', 'parental-care'],
    minGroupSize: 2,
    description: 'A relatively peaceful dwarf cichlid that forms strong pair bonds. They are famous for their extended parental care, with both parents guarding the eggs and fry vigorously. While generally suitable for community tanks, they become highly territorial when spawning, defending a zone around their chosen cave. They are obligate cave spawners and require suitable shelters to feel secure and breed.',
    
    compatibility: {
      goodMates: ['Congo Tetras', 'Rainbowfish', 'Corydoras', 'Synodontis catfish', 'Larger tetras'],
      badMates: ['Aggressive cichlids', 'Fin-nippers', 'Very small fish', 'Shrimp'],
      notes: 'Best kept as a single pair in a community tank. During spawning, they will aggressively defend their territory against any intruder.',
      
      rules: [
        {
          type: 'requires',
          condition: 'multiple caves (3-4 minimum)',
          reason: 'They are obligate cave spawners and require dark, enclosed spaces to breed and feel secure.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'breeding pairs',
          reason: 'Breeding pairs become highly territorial and will attack fish much larger than themselves.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'sand or fine gravel substrate',
          reason: 'Coarse gravel prevents natural digging behavior and can injure their mouths.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'other bottom-dwelling cichlids in small tanks',
          reason: 'Multiple dwarf cichlids in a small tank leads to constant territory battles.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '6-8',
      },
    },
    
    aggressionLevel: {
      intraspecific: 4,
      interspecific: 6,
      territorial: 9,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'evening'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'pair',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'low',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'omnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Multiple caves are essential for spawning', 
      'Sand substrate for digging', 
      'Stable, mature tank', 
      'Backup tank for fry',
    ],

    proTips: [
      "Provide horizontal caves like clay pots, as they spawn on the ceiling of the cave.",
      "The female's belly turning bright cherry-red is a reliable sign that spawning is imminent.",
      "They are excellent parents, but will become aggressive toward tankmates when protecting fry."
    ],

    commonMistakes: [
      "Not providing caves prevents breeding and causes stress.",
      "Using coarse gravel inhibits their natural digging behavior.",
      "Underestimating the aggression of a breeding pair can lead to stressed tankmates."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['pellets', 'flakes', 'bloodworms', 'brine-shrimp'],
      supplements: ['blanched-zucchini'],
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
      notes: 'Increase water changes during breeding to manage the higher bioload from heavy feeding and fry waste.',
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
    lifespanYears: 5,
    commonDiseases: ['ich', 'hole-in-head-disease', 'fungal-infections', 'bloat'],
    sensitivities: ['Sudden parameter swings', 'High nitrates', 'Lack of caves'],
  },

  scientificContext: {
    wildHabitat: "Inhabits shallow, slow-moving waters in the Niger Delta. These environments range from soft, acidic forest streams to slightly brackish coastal estuaries. The water is typically warm and shaded by overhanging vegetation, with abundant hiding spots among roots and leaf litter. They are polygamous in the wild, with males sometimes holding territories containing multiple females.",
    sexualDimorphism: "Males are larger, longer, and have pointed dorsal fins with eyespots. Females are smaller, deeper-bodied, and develop a spectacular cherry-red belly when in breeding condition.",
    variants: ['Wild type', 'Red morph male', 'Yellow morph male'],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'beginner',
    trigger: 'Spawning is easily triggered by a large water change with slightly cooler water and a diet rich in live or frozen foods. The female displays her red belly to the male near a chosen cave.',
    fryCare: 'Both parents care for the eggs and fry. The eggs hatch in 2-3 days, and the fry become free-swimming in about a week. Parents will herd and guard the fry, even pre-chewing food for them. Fry can be fed baby brine shrimp and crushed flakes.',
    notes: 'One of the easiest cichlids to breed in captivity. The pair forms strong bonds and raises the young together.',
  },
  
  experienceData: {
    successRate: 0.90,
    survivalRate: 0.85,
    
    commonFailures: [
      { issue: 'no-breeding-occurs', cause: 'lack-of-caves-or-unsuitable-caves', frequency: 0.25 },
      { issue: 'excessive-aggression-to-tankmates', cause: 'breeding-pair-in-small-tank-or-poor-tankmate-selection', frequency: 0.20 },
      { issue: 'egg-fungus', cause: 'poor-water-quality-or-infertile-eggs', frequency: 0.15 },
      { issue: 'parents-eat-fry', cause: 'stress-disturbance-or-poor-nutrition', frequency: 0.15 },
      { issue: 'territorial-fights-between-males', cause: 'multiple-males-in-small-tank', frequency: 0.12 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 10, max: 25, currency: 'EUR' },
    },
  },
};