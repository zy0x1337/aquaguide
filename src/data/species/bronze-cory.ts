import type { Species } from '../../types/species';

export const bronzeCory: Species = {
  id: 'cory-002',
  slug: 'bronze-cory',
  imageUrl: '/images/species/bronze-cory.jpg',
  
  funFact: "These armored catfish possess a specialized intestine that allows them to gulp atmospheric air, enabling them to survive in oxygen-depleted waters where other fish cannot.",

  taxonomy: {
    scientificName: 'Corydoras aeneus',
    commonName: 'Bronze Corydoras',
    family: 'Callichthyidae',
    origin: 'Widely distributed across South America: Venezuela, Colombia, Trinidad, Brazil, Argentina',
    region: 'South America',
    biotope: 'Slow-moving rivers, marshes, and floodplains with soft, sandy bottoms rich in organic matter.',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 6.5,
    color: 'The body exhibits a metallic bronze or olive-green sheen with a lighter belly. A popular albino variant displays a pink body and red eyes.',
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
    plantingNotes: 'Robust plants like Anubias and Java Fern are ideal as these active diggers may uproot delicate root systems. Floating plants help diffuse the light, making these crepuscular fish feel more secure.',
    hardscape: ['Smooth driftwood', 'River stones', 'Terracotta caves', 'PVC pipe shelters'],
  },

  behavior: {
    tags: ['shoaler', 'bottom_dweller', 'peaceful', 'robust', 'active', 'scaleless'],
    minGroupSize: 6,
    description: 'These peaceful bottom dwellers are the workhorses of the community aquarium, constantly sifting through the substrate for leftovers. They are highly social and should always be kept in groups, where they exhibit engaging behaviors like synchronized swimming and the occasional dash to the surface for air. Unlike some of their more delicate relatives, Bronze Corys are remarkably hardy and adaptable to a range of water conditions. Their barbels are sensitive sensory organs used to detect food in the dark or murky water, so a soft substrate is essential for their well-being.',
    
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Livebearers', 'Gouramis', 'Peaceful Cichlids'],
      badMates: ['Large aggressive Cichlids', 'Goldfish'],
      notes: 'They are excellent community residents but should not be expected to clean up uneaten food entirely, as they require a dedicated diet.',
      
      rules: [
        {
          type: 'avoid',
          target: 'large aggressive cichlids',
          reason: 'Predatory fish may attack or eat these peaceful, slow-moving catfish.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'sand substrate',
          reason: 'Sharp gravel damages their delicate barbels, leading to infection and an inability to locate food.',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 6',
          reason: 'Being social shoalers, individuals kept alone or in small numbers become withdrawn and stressed.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'goldfish',
          reason: 'Goldfish require cooler water temperatures that are outside the optimal range for these tropical catfish.',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 10-20,
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
      'Sand substrate is mandatory', 
      'Groups of 6+ required', 
      'Sinking foods required',
      'Regular substrate vacuuming',
    ],

    proTips: [
      "Target feeding with sinking pellets ensures they receive enough nutrition before midwater fish consume it all.",
      "Observe their barbels regularly; shortened or frayed whiskers often indicate poor water quality or an unsuitable substrate.",
      "They live significantly longer than many community fish, often reaching ten years with proper care."
    ],

    commonMistakes: [
      "Keeping them on gravel substrate leads to barbel erosion and bacterial infections.",
      "Relying on them as a cleanup crew often results in starvation.",
      "Keeping them alone or in pairs causes chronic stress and inactivity."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['wafers', 'pellets', 'bloodworms'],
      supplements: ['brine-shrimp', 'daphnia', 'tubifex'],
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
      notes: 'Vacuum the sandy substrate gently to remove waste without disturbing the sand bed.',
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
    sensitivities: ['Sharp substrate', 'Salt treatments', 'Copper medications', 'High nitrites', 'Dirty substrate'],
  },

  scientificContext: {
    wildHabitat: "Native to a wide range of South American river basins, this species inhabits slow-moving streams and floodplains. These waters are often murky with soft, sandy bottoms rich in organic detritus. Seasonal changes often lead to lower oxygen levels, which they navigate using their ability to process atmospheric air. This adaptability makes them one of the most widespread members of the genus.",
    sexualDimorphism: "When viewed from above, females are noticeably broader and rounder in the midsection, especially when carrying eggs. Males are smaller, slimmer, and have more pointed dorsal fins. These differences become more pronounced as the fish mature.",
    variants: ['Wild type Bronze', 'Albino', 'Black Venezuela', 'Green Laser', 'Longfin'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'beginner',
    trigger: 'Spawning is frequently triggered by a substantial water change using slightly cooler water to simulate the rainy season. Conditioning the group with high-quality live or frozen foods for several weeks prior is essential to encourage egg development.',
    fryCare: 'The adhesive eggs are typically deposited on the aquarium glass or plant leaves and hatch within three to five days. The fry are relatively large upon hatching and can immediately consume microworms or crushed flakes. Maintaining pristine water quality is critical during the early stages to prevent bacterial infections. Frequent small water changes promote rapid and healthy growth.',
    notes: 'They often spawn spontaneously in well-maintained community tanks, surprising aquarists with eggs on the glass.',
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