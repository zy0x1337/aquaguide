import type { Species } from '../../types/species';

export const sewelliaLineolata: Species = {
  id: 'sewellia-001',
  slug: 'sewellia-lineolata',
  imageUrl: '/images/species/sewellia-lineolata.jpg',
  
  funFact: "Their modified pectoral and pelvic fins form a powerful suction disc, allowing them to cling to rocks in torrential rapids flowing at speeds up to 2 meters per second. This adaptation lets them 'walk' across surfaces in fast-flowing water where other fish would be swept away.",

  taxonomy: {
    scientificName: 'Sewellia lineolata',
    commonName: 'Reticulated Hillstream Loach',
    family: 'Gastromyzontidae',
    origin: 'Vietnam (central provinces)',
    region: 'Asia',
    biotope: 'Fast-flowing, highly oxygenated mountain streams with rocky substrates and abundant biofilm.',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 6,
    color: 'A flattened body with a stunning golden-yellow and dark brown reticulated pattern. The ventral side is pale, and the fins are transparent with dark bands. Dominant individuals often display more intense coloration.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 150,
    tempC: { min: 18, max: 24, ideal: 20 },
    ph: { min: 6.5, max: 7.5, ideal: 7.0 },
    gh: { min: 6, max: 15 },
    kh: { min: 3, max: 10 },
    flow: 'high',
    substrate: 'smooth-river-stones',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 100,
      verticalCM: 30,
      territories: 6,
    },
    
    bioloadMultiplier: 0.8,
  },

  habitat: {
    planting: 'sparse',
    plantingNotes: 'Plants must be robust and attached to hardscape to survive the high current. Anubias and Java Fern are suitable choices. The focus should be on biofilm-rich stones rather than lush vegetation.',
    hardscape: ['Smooth river stones', 'Flat slate pieces', 'River rocks', 'Mopani driftwood'],
  },

  behavior: {
    tags: ['bottom_dweller', 'diurnal', 'social'],
    minGroupSize: 4,
    description: 'A fascinating bottom-dweller that uses its fused pelvic fins as a suction cup to cling to rocks in fast currents. They are peaceful grazers that constantly patrol surfaces for biofilm and algae. Active during the day, they are best kept in groups where they will establish loose hierarchies without serious aggression.',
    
    compatibility: {
      goodMates: ['White Cloud Mountain Minnows', 'Danios', 'Dwarf Rasboras', 'Otocinclus', 'Nerite Snails', 'Bamboo Shrimp'],
      badMates: ['Tropical fish (>24°C)', 'Slow-moving fish', 'Long-finned fish', 'Plecos', 'Crayfish', 'Goldfish'],
      notes: 'Tankmates must be able to tolerate high flow rates and cooler temperatures. They are not suitable for standard tropical community tanks. Avoid bottom-dwelling competitors that might oust them from feeding grounds.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group of 4-6+ individuals',
          reason: 'They are social and become withdrawn and inactive when kept alone or in pairs.',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'tropical fish requiring >24°C',
          reason: 'They are temperate fish; temperatures above 24°C cause stress and reduce oxygen availability.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'slow-moving or long-finned fish',
          reason: 'The high water flow required for their health will exhaust species adapted to stagnant water.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'mature biofilm and algae growth',
          reason: 'They are obligate grazers and will starve in a sterile tank. A mature tank of at least 8-12 weeks is mandatory.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 8-12,
        midwater: '6-10',
        bottom: '4-8',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 1,
      territorial: 4,
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
    difficulty: 'medium',
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'High water flow (15-20x turnover per hour)',
      'Cool water (18-24°C)',
      'Mature tank with established biofilm',
      'Pristine water quality',
      'High dissolved oxygen',
      'Smooth river stones',
    ],

    proTips: [
      "Cultivate a thick layer of biofilm before introducing them. Run the tank for several weeks with extended lighting to encourage algae growth on the hardscape.",
      "Use multiple powerheads to create dynamic flow patterns. They enjoy positioning themselves in strong currents to graze.",
      "Ensure all rocks are smooth to the touch to prevent injury to their delicate ventral disc."
    ],

    commonMistakes: [
      "Adding them to newly cycled tanks leads to starvation due to lack of biofilm.",
      "Keeping them in standard tropical temperatures shortens their lifespan.",
      "Underestimating the flow required; standard filters are often insufficient."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['biofilm', 'algae-wafers', 'aufwuchs'],
      supplements: ['blanched-zucchini', 'spirulina', 'flakes'],
      vegetarian: true,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: "sunday",
    },
    
    maintenance: {
      waterChangePercentage: 30,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: false,
      notes: 'Avoid vacuuming the hardscape to preserve the biofilm. Spot clean debris with a turkey baster. Monitor temperature closely during summer to ensure it stays within range.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 0,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'strong',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 8,
    commonDiseases: ['skinny-disease', 'bacterial-infections', 'ich', 'starvation'],
    sensitivities: ['Warm water', 'Stagnant water', 'Insufficient biofilm', 'Rough substrates', 'Copper medications'],
  },

  scientificContext: {
    wildHabitat: "Endemic to central Vietnam, they inhabit shallow, fast-flowing mountain streams with rocky beds. They are adapted to high-oxygen, cool-water environments. Their suction disc allows them to cling to smooth stones in currents that would wash other fish away.",
    sexualDimorphism: "Males develop small tubercles on the pectoral fin rays during breeding and have a slimmer body shape. Females are rounder when carrying eggs.",
    variants: ['Standard wild-type', 'High-contrast morph'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Rarely bred in captivity. Requires simulation of seasonal changes, including a cooling period and a subsequent temperature rise with heavy feeding.',
    fryCare: 'Eggs are scattered among rocks. Fry are tiny and require microscopic algae and biofilm to survive, making them difficult to raise in home aquariums.',
    notes: 'Most commercially available specimens are wild-caught. Breeding is extremely rare and typically requires outdoor pond setups to simulate natural cycles.',
  },
  
  experienceData: {
    successRate: 0.60,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'starvation', cause: 'insufficient-biofilm-or-new-tank', frequency: 0.45 },
      { issue: 'heat-stress-death', cause: 'temperature-above-24C', frequency: 0.20 },
      { issue: 'lethargy-decline', cause: 'insufficient-water-flow', frequency: 0.15 },
      { issue: 'bacterial-infection', cause: 'rough-substrate-abrasions', frequency: 0.10 },
      { issue: 'oxygen-deprivation', cause: 'stagnant-water-or-high-temp', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 350, max: 800, currency: 'EUR' },
      monthly: { min: 15, max: 35, currency: 'EUR' },
    },
  },
};