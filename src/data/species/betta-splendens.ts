import type { Species } from '../../types/species';

export const bettaSplendens: Species = {
  id: 'betta-001',
  slug: 'betta-splendens',
  imageUrl: '/images/species/betta-splendens.jpg',

  gallery: [
  '/images/species/betta-splendens2.jpg',
  '/images/species/betta-splendens3.jpg',
],
  
  funFact: "The Siamese Fighting Fish possesses a specialized labyrinth organ that allows it to breathe atmospheric air directly from the surface, an adaptation for surviving in oxygen-depleted water.",

  taxonomy: {
    scientificName: 'Betta splendens',
    commonName: 'Siamese Fighting Fish',
    family: 'Osphronemidae',
    origin: 'Thailand, Cambodia, Vietnam (Chao Phraya and Mekong Basin)',
    region: 'Asia',
    biotope: 'Shallow rice paddies, swamps, and floodplains with dense vegetation and stagnant water.',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 7,
    color: 'Selective breeding has produced a vast array of colors and fin types, from vibrant reds and blues to marbled Koi patterns. Males display long, flowing fins, while females remain smaller with shorter appendages.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 20,
    tempC: { min: 24, max: 30, ideal: 26 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    gh: { min: 5, max: 20 },
    kh: { min: 3, max: 15 },
    flow: 'low',
    substrate: 'any',
    
    swimmingZone: {
      primary: 'surface',
      secondary: 'midwater',
      preference: 0.85,
    },
    
    spaceNeeds: {
      horizontalCM: 30,
      verticalCM: 20,
      territories: 1,
    },
    
    bioloadMultiplier: 1.0,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Broad-leaved plants like Anubias provide essential resting spots near the surface for these heavy-finned fish. Use only silk or live plants to prevent fin tears, avoiding sharp plastic decorations entirely.',
    hardscape: ['Driftwood', 'Smooth stones', 'Caves', 'Indian Almond Leaves'],
  },

  behavior: {
    tags: ['jumper', 'surface_dweller', 'labyrinth_fish', 'territorial', 'semi-aggressive'],
    minGroupSize: 1,
    description: 'Males of this species are notoriously territorial and will fight to the death if housed together, necessitating solitary living arrangements. They are intelligent fish that often recognize their owners and can be taught simple tricks. Despite their aggression towards conspecifics, they can be peaceful community members if paired with non-threatening tank mates. Heavy fins make them slow swimmers, so they prefer resting on broad leaves near the surface. Breeding involves the male building a bubble nest where he carefully tends to the eggs.',
    
    compatibility: {
      goodMates: ['Snails', 'Kuhli Loaches', 'Corydoras', 'Peaceful Rasboras'],
      badMates: ['Other male Bettas', 'Female Bettas', 'Guppies', 'Gouramis', 'Fin-nippers'],
      notes: 'Bettas are best kept alone. Community tanks can work in larger setups with careful tankmate selection, but many individuals are too aggressive even for peaceful fish.',
      
      rules: [
        {
          type: 'avoid',
          target: 'other male bettas',
          reason: 'Males will fight to the death, and even visual contact causes chronic stress.',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'long-finned fish',
          reason: 'Bettas attack colorful or long-finned fish like Guppies, mistaking them for rivals.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'community tank size 60L+',
          reason: 'Community setups require ample space and hiding spots to diffuse aggression.',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'female bettas',
          reason: 'Male-female pairs will fight outside of brief spawning periods and cannot be housed together permanently.',
          severity: 'medium',
        },
        {
          type: 'requires',
          condition: 'surface access',
          reason: 'The labyrinth organ requires atmospheric air, so the surface must never be completely blocked.',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '5-10',
        bottom: '2-6',
      },
    },
    
    aggressionLevel: {
      intraspecific: 10,
      interspecific: 6,
      territorial: 8,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['morning', 'afternoon'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'solitary',
      maxMalesPerTank: 1,
    },
    
    finNipping: {
      risk: 'medium',
      targets: ['guppies', 'angelfish', 'other bettas'],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'carnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Heater is mandatory', 
      'Tight-fitting lid required', 
      'Silk or live plants only',
      'Low flow filter',
      'Surface access',
    ],

    proTips: [
      "Broad-leaved plants near the surface allow these heavy-finned fish to rest without struggling to swim.",
      "Indian Almond Leaves release beneficial tannins that mimic natural blackwater conditions and help prevent fin rot.",
      "Avoid mirrors or flare training for extended periods, as this causes unnecessary stress and exhaustion."
    ],

    commonMistakes: [
      "Housing males in small bowls without filtration or heating leads to a severely shortened lifespan.",
      "Using plastic plants often results in torn fins, so only silk or live plants should be used.",
      "Overfeeding causes bloating and swim bladder issues, so fast the fish one day a week."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['pellets'],
      supplements: ['bloodworms', 'brine-shrimp', 'daphnia'],
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
      notes: 'Small tanks are prone to parameter swings, so consistent weekly water changes are essential for health.',
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
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 3,
    commonDiseases: ['fin-rot', 'velvet', 'dropsy', 'ich', 'columnaris', 'swim-bladder-disorder'],
    sensitivities: [
      'Cold water', 
      'Ammonia spikes', 
      'Sharp decor', 
      'Strong flow',
      'Overfeeding'
    ],
  },

  scientificContext: {
    wildHabitat: "Endemic to the Mekong basin, this species thrives in shallow, stagnant waters such as rice paddies, swamps, and roadside ditches. These environments are typically warm, soft, and low in dissolved oxygen, heavily shaded by overhanging vegetation. The fish utilizes its labyrinth organ to gulp air from the surface, allowing it to survive where gill-breathing fish cannot. While introduced populations exist elsewhere, the native habitat is increasingly threatened by urbanization.",
    sexualDimorphism: "Males exhibit dramatically elongated fins and intense coloration, bred specifically for the aquarium trade, whereas wild males are much drabber. Females are generally smaller with shorter fins and display a distinct white spot on the abdomen known as an ovipositor. This white egg spot is the most reliable indicator for sexing sub-adult specimens.",
    variants: [
      'Veiltail', 
      'Halfmoon', 
      'Plakat', 
      'Crowntail', 
      'Dumbo Ear', 
      'Delta', 
      'Koi Betta', 
      'Alien Betta'
    ],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'medium',
    trigger: 'Condition the pair separately on a diet of high-quality live or frozen foods to stimulate gonad development. A rise in temperature combined with lowering the water level slightly can simulate the onset of the rainy season.',
    fryCare: 'The male tends the eggs in the bubble nest until the fry hatch and become free-swimming after three to four days. Once the fry are swimming horizontally, the male should be removed to prevent predation. Initial feeding requires microscopic food sources like infusoria or vinegar eels, progressing to baby brine shrimp after a week. Maintaining a tight cover is vital during the critical period when the labyrinth organ develops, as cold air can damage it.',
    notes: 'Spawning behavior is intense and can result in injury to the female if she is not ready to breed.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.78,
    
    commonFailures: [
      { issue: 'fin-rot', cause: 'plastic-plants-or-poor-water-quality', frequency: 0.40 },
      { issue: 'stress-death', cause: 'no-heater-or-cold-temperature', frequency: 0.25 },
      { issue: 'swim-bladder-disorder', cause: 'overfeeding-or-poor-diet', frequency: 0.15 },
      { issue: 'aggression-injuries', cause: 'tankmate-conflict', frequency: 0.10 },
      { issue: 'jumped-out', cause: 'no-lid', frequency: 0.05 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 120, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};