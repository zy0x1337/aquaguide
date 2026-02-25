import type { Species } from '../../types/species';

export const bristlenosePleco: Species = {
  id: 'pleco-001',
  slug: 'bristlenose-pleco',
  imageUrl: '/images/species/bristlenose-pleco.jpg',
  
  funFact: "Male Bristlenose Plecos grow a bushy 'mustache' of bristles on their snout to attract mates, making them one of the few aquarium fish with such pronounced facial decoration. They are devoted fathers, guarding their eggs in caves for over a week without leaving to eat.",

  taxonomy: {
    scientificName: 'Ancistrus sp.',
    commonName: 'Bristlenose Pleco',
    family: 'Loricariidae',
    origin: 'South America (Amazon Basin, Orinoco Basin - widespread across multiple species)',
    region: 'South America',
    biotope: 'Fast-flowing rivers and streams with rocky substrates and abundant submerged driftwood.',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 13,
    color: 'These fish typically display a mottled brown or grey body with lighter spots, though albino and super red varieties are common in the hobby. Males develop distinctive fleshy tentacles on their snout, while females remain smooth-faced.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 80,
    tempC: { min: 20, max: 28, ideal: 24 },
    ph: { min: 5.5, max: 7.8, ideal: 6.8 },
    gh: { min: 2, max: 20 },
    kh: { min: 1, max: 12 },
    flow: 'moderate',
    substrate: 'any',
    
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
    
    bioloadMultiplier: 1.2,
  },

  habitat: {
    planting: 'medium',
    plantingNotes: 'Hardy plants like Anubias and Java Fern attached to driftwood are ideal, as these fish may uproot delicate stem plants while foraging. They require plenty of hiding spots among wood and rocks to feel secure during the daylight hours.',
    hardscape: ['Driftwood', 'Caves', 'Smooth river stones', 'Slate'],
  },

  behavior: {
    tags: ['peaceful', 'nocturnal', 'territorial', 'algae_eater', 'bottom_dweller'],
    minGroupSize: 1,
    description: 'Bristlenose Plecos are peaceful, nocturnal scavengers that spend the daylight hours tucked away in caves or attached to driftwood. They are excellent algae eaters but require wood in their diet to maintain a healthy digestive system. Males can be territorial with other males when defending a breeding cave, but they are generally peaceful toward other species. Their distinctive ability to cling to glass and rocks makes them an active and useful addition to the freshwater cleanup crew. Although hardy, they are sensitive to poor water quality and require clean, well-oxygenated water to thrive.',
    
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Angelfish', 'Corydoras', 'Livebearers', 'Gouramis'],
      badMates: ['Large aggressive cichlids', 'Pufferfish', 'Other male Bristlenose Plecos'],
      notes: 'They are excellent community fish but should be limited to one male per tank to prevent violent territorial disputes over caves.',
      
      rules: [
        {
          type: 'requires',
          condition: 'driftwood in tank',
          reason: 'Driftwood fibers are essential for their digestive system and help wear down their constantly growing teeth.',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'multiple male bristlenose plecos',
          reason: 'Males are highly territorial and will fight aggressively for ownership of a cave.',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'caves for hiding and breeding',
          reason: 'They require secure hiding spots to feel safe and manage stress during the day.',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'common pleco confusion',
          reason: 'Common Plecos grow to 60cm while Bristlenoses stay under 13cm, so always verify the species before purchase.',
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
      intraspecific: 7,
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
    difficulty: 'beginner',
    diet: 'herbivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Driftwood for digestion', 
      'Caves for hiding', 
      'Moderate water flow',
      'Varied vegetable diet',
      'One male per tank',
    ],

    proTips: [
      "This species stays small compared to the Common Pleco, making it a suitable choice for medium-sized home aquariums.",
      "Driftwood is mandatory in their tank as the wood fibers aid in digestion and prevent blockages.",
      "Supplement their diet with blanched vegetables to prevent starvation once the natural algae supply is depleted."
    ],

    commonMistakes: [
      "Buying a Common Pleco by mistake results in a fish that grows far too large for most home tanks.",
      "Housing them without driftwood leads to severe digestive issues due to a lack of dietary fiber.",
      "Keeping multiple males in a small aquarium often leads to aggressive territorial fighting."
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['algae-wafers', 'vegetables'],
      supplements: ['blanched-zucchini', 'spirulina', 'pellets'],
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
      notes: 'They produce significant waste in the form of fine, sand-like feces, necessitating a powerful filter and regular substrate vacuuming.',
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
    commonDiseases: ['ich', 'bloat', 'fin-rot', 'digestive-issues-no-wood', 'starvation'],
    sensitivities: ['Copper medications', 'Lack of fiber', 'High nitrates', 'Low oxygen'],
  },

  scientificContext: {
    wildHabitat: "These fish are native to the Amazon Basin where they inhabit fast-flowing rivers and streams with rocky substrates. The water is typically warm, soft, and rich in oxygen, supporting the growth of abundant biofilm and algae on submerged wood. They rely on their sucker mouths to anchor themselves against the current while grazing. This natural environment provides the dietary fiber essential for their specialized digestion.",
    sexualDimorphism: "Males develop distinctive, bushy tentacles on their snout, particularly when mature, while females possess only small bristles or none at all. Males also tend to be slimmer in body shape compared to the rounder, fuller female. These visual differences become apparent once the fish reach sexual maturity around one year of age.",
    variants: ['Standard Brown', 'Albino', 'Super Red', 'Calico', 'Longfin'],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'beginner',
    trigger: 'Spawning is often triggered by a large water change with slightly cooler water, simulating the natural rainy season. A diet rich in protein and vegetation helps condition the pair for breeding.',
    fryCare: 'The male guards the eggs within the cave, fanning them constantly until they hatch after about a week. Once free-swimming, the fry can be fed crushed algae wafers or blanched vegetables, though they will also graze on driftwood and biofilm. They grow relatively quickly under optimal conditions. Providing ample cover and maintaining high water quality ensures a high survival rate.',
    notes: 'Breeding is straightforward and often occurs unintentionally in mature community tanks.',
  },
  
  experienceData: {
    successRate: 0.85,
    survivalRate: 0.80,
    
    commonFailures: [
      { issue: 'digestive-failure-bloating-death', cause: 'no-driftwood-in-tank', frequency: 0.35 },
      { issue: 'bought-common-pleco-by-mistake', cause: 'store-mislabeling-grows-too-large', frequency: 0.22 },
      { issue: 'fighting-injuries-death', cause: 'multiple-males-in-small-tank', frequency: 0.18 },
      { issue: 'starvation-despite-algae', cause: 'insufficient-vegetable-feeding', frequency: 0.12 },
      { issue: 'chronic-stress-hiding', cause: 'no-caves-or-bright-lighting', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 150, currency: 'EUR' },
      monthly: { min: 8, max: 20, currency: 'EUR' },
    },
  },
};