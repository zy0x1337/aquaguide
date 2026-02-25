import type { Species } from '../../types/species';

export const amanoShrimp: Species = {
  id: 'amano-shrimp',
  slug: 'amano-shrimp',
  imageUrl: '/images/species/amano-shrimp.jpg',
  
  funFact: "Named after aquascaping legend Takashi Amano, these shrimp are the gold standard for natural algae control, capable of stripping a tank clean of soft green fuzz in record time.",

  imageCredit: {
    photographer: 'Máté Molnár',
    sourceUrl: 'https://unsplash.com/de/fotos/4Vn4UK4vyx8',
    license: 'Unsplash',
    licenseUrl: 'https://unsplash.com/license',
  },

  taxonomy: {
    scientificName: 'Caridina multidentata',
    commonName: 'Amano Shrimp',
    family: 'Atyidae',
    origin: 'Japan, Taiwan - coastal rivers and mountain streams',
    region: 'Asia',
    biotope: 'Fast-flowing mountain streams and coastal rivers with high oxygen content.',
  },

  visuals: {
    iconShape: 'shrimp',
    adultSizeCM: 5,
    color: 'Translucent grey to greenish bodies decorated with a broken reddish-brown line along the back. Females display a distinct saddle of greenish eggs when gravid.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 20, max: 27, ideal: 24 },
    ph: { min: 6.5, max: 7.8, ideal: 7.0 },
    gh: { min: 6, max: 14 },
    kh: { min: 2, max: 10 },
    flow: 'moderate',
    substrate: 'any',
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.85,
    },
    spaceNeeds: {
      horizontalCM: 30,
      verticalCM: 20,
      territories: 0,
    },
    bioloadMultiplier: 0.1,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'These shrimp require plenty of hiding spots among moss and driftwood to feel secure during vulnerable molting periods. Dense vegetation encourages the growth of biofilm, a primary food source.',
    hardscape: ['Driftwood', 'Smooth river stones', 'Moss-covered rocks', 'Caves for molting'],
  },

  behavior: {
    tags: ['algae_eater', 'peaceful', 'active', 'social'],
    minGroupSize: 5,
    description: 'These invertebrates are relentless cleaners, constantly scuttling across surfaces to graze on algae and detritus with their specialized fan-like claws. They are peaceful yet bold, often venturing into open water to snatch food before retreating to cover. In groups, they establish a loose hierarchy but rarely show aggression toward one another. Molting occurs periodically, leaving behind a ghostly translucent shell that other shrimp often consume for calcium. They are most active during the day, making them one of the most visible freshwater shrimp species.',

    compatibility: {
      goodMates: [
        'Cherry Shrimp', 
        'Small peaceful fish', 
        'Nerite Snails', 
        'Otocinclus'
      ],
      badMates: [
        'Cichlids', 
        'Goldfish', 
        'Bettas', 
        'Pufferfish'
      ],
      notes: 'Their larger size offers some protection against small fish, but they remain vulnerable to any species that views invertebrates as food.',
      
      rules: [
        {
          type: 'avoid',
          target: 'copper-based medications',
          reason: 'Copper is lethal to invertebrates even in small quantities found in some medications or fertilizers.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'predatory fish',
          reason: 'Puffers and cichlids actively hunt shrimp, causing constant stress and potential losses.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'stable water parameters',
          reason: 'Shrimp are sensitive to sudden changes in pH or temperature which can cause fatal molting failures.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'supplemental feeding',
          reason: 'Once the algae supply is depleted, they require additional food sources to prevent starvation.',
          severity: 'medium',
        },
      ],
      idealTankmates: {
        surface: 0-10,
        midwater: '10-30',
        bottom: '5-20',
      },
    },

    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },

    activity: {
      level: 'high',
      peakTimes: ['all-day'],
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
      'Stable water parameters',
      'Driftwood for biofilm',
      'Supplemental feeding',
      'Copper-free water',
      'Drip acclimation'
    ],
    
    proTips: [
      "Supplement their diet with blanched vegetables once the algae is gone to prevent starvation.",
      "Leave the translucent molted shell in the tank as the shrimp will consume it to recycle essential calcium.",
    ],
    
    commonMistakes: [
      "Relying solely on algae for food leads to starvation once the tank is clean.",
      "Acclimating them too quickly causes osmotic shock and death due to their sensitivity to parameter shifts.",
      "Using copper-based medications will kill all invertebrates in the tank."
    ],
    
    feeding: {
      frequency: 'every-other-day',
      primaryFoods: ['algae-wafers', 'biofilm', 'spirulina', 'vegetables'],
      supplements: ['blanched-zucchini', 'pellets'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: false,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 20,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: false,
      notes: 'Exercise caution when vacuuming the substrate to avoid sucking up hiding shrimp.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'moderate',
      },
      airstone: false,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 3,
    commonDiseases: ['molting-failure', 'bacterial-infections', 'vorticella', 'parasitic-infections'],
    sensitivities: [
      'Copper', 
      'Sudden parameter changes', 
      'Low calcium', 
      'Chlorine', 
      'High temperatures'
    ],
  },

  scientificContext: {
    wildHabitat: "Native to Japan and Taiwan, these shrimp inhabit fast-flowing, oxygen-rich mountain streams and coastal rivers. They are amphidromous, meaning adults live and breed in freshwater but their larvae drift downstream to the ocean to develop in brackish water. This complex lifecycle requires migration between distinct habitats, making natural reproduction in the home aquarium impossible. Currently, they are not considered threatened, though local populations depend on the health of both riverine and coastal environments.",
    sexualDimorphism: "Females grow significantly larger and develop a visible green or brown saddle of eggs underneath their carapace. Males are smaller, more slender, and lack the distinctive egg saddle. The second row of dots on the female's side is often broken into dashes, whereas males have a continuous line.",
    variants: [
      'Wild type grey-green', 
      'Blue-green tint',
      'Yellow morph (rare)',
      'Orange morph (rare)'
    ],
  },

  breeding: {
    method: 'other',
    difficulty: 'expert',
    trigger: 'Breeding requires moving berried females to a separate tank with brackish water. Raising the salinity to simulate a coastal estuary environment is essential for larval survival.',
    fryCare: 'Larvae hatch as tiny zoea that require full saltwater conditions to survive and feed on microscopic phytoplankton. They undergo several molts over six to eight weeks before metamorphosing into post-larvae. Once they resemble miniature adults, they must be slowly acclimated back to freshwater. This process is technically demanding and rarely successful for the average hobbyist.',
    notes: 'Virtually all specimens sold in the trade are wild-caught due to the difficulty of replicating their complex lifecycle.',
  },

  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    commonFailures: [
      { issue: 'death-during-acclimation', cause: 'rapid-parameter-change-osmotic-shock', frequency: 0.25 },
      { issue: 'failed-molt-death', cause: 'low-calcium-or-sudden-parameter-shift', frequency: 0.20 },
      { issue: 'copper-poisoning', cause: 'copper-in-medications-or-fertilizers', frequency: 0.15 },
      { issue: 'starvation', cause: 'no-supplemental-feeding-after-algae-depletion', frequency: 0.12 },
      { issue: 'predation', cause: 'incompatible-tank-mates', frequency: 0.10 },
    ],
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};