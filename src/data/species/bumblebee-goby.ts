import type { Species } from '../../types/species';

export const bumblebeeGoby: Species = {
  id: 'bumblebee-goby',
  slug: 'bumblebee-goby',
  imageUrl: '/images/species/bumblebee-goby.jpg',
  funFact:
    "Bumblebee Gobies are tiny terrors with big personality—like miniature tigers guarding their caves! Watch them perch on rocks like tiny gargoyles, then pounce on passing prey with lightning speed. Males are dedicated cave dads: females stick 50-200 eggs to cave ceilings and leave, while males guard and fan them 24/7 for 7-10 days without eating. But here's the critical catch: they are true carnivores who refuse dry food and will literally starve to death surrounded by flakes. Live/frozen food only—no exceptions. Watching a group of 6-8 gobies perch together like a tiny gang is adorable!",

  imageCredit: {
    photographer: 'theaquariumkeeper on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/hummel-fisch-hummel-grundel-7793718/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  taxonomy: {
    scientificName: 'Brachygobius spp.',
    commonName: 'Bumblebee Goby',
    family: 'Gobiidae',
    origin: 'Southeast Asia (Thailand, Indonesia, Vietnam - coastal lowlands, mangrove swamps, estuaries)',
    region: 'Asia',
    biotope: 'Mangrove swamps, estuaries, tidal streams with mud/sand substrates, leaf litter, mangrove roots. Found in both freshwater and low-brackish depending on locality',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 4,
    color: 'Bright yellow base with bold black vertical bands (stripes) creating iconic bumblebee appearance. Colors intensify when territorial or breeding. Males show brighter colors than females',
  },

  environment: {
    type: 'brackish',
    minTankSizeLiters: 40,
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 7.0, max: 8.5, ideal: 7.5 },
    gh: { min: 8, max: 20 },
    kh: { min: 6, max: 20 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'all',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 20,
      territories: 1,
    },
    
    bioloadMultiplier: 0.4,
  },

  habitat: {
    planting: 'medium',
    plantingNotes:
      'Bumblebee Gobies appreciate planted tanks but need brackish-tolerant species if keeping in low-salinity water. Java Fern, Anubias, Vallisneria, and hardy Cryptocoryne tolerate brackish conditions. In pure freshwater setups, more plant options work. Provide dense cover and shaded zones (mangrove-style roots, leaf litter). Gobies perch on surfaces and appreciate multiple line-of-sight breaks for confidence.',
    hardscape: ['Smooth river stones (perching spots)', 'Driftwood tangles (mangrove-style roots)', 'Caves (snail shells, stacked rocks, short PVC pipes, coconut shells)', 'Leaf litter (Indian Almond, oak leaves for microfauna and cover)'],
  },

  behavior: {
    tags: ['bottom_dweller', 'territorial', 'shy', 'social', 'diurnal', 'colorful', 'nano', 'slow_eater'],
    minGroupSize: 6,
    description:
      "Bumblebee Gobies are tiny micro-predators with massive personality! They're perch-and-pounce hunters that spend time on bottom surfaces, hopping between caves and ambush points like miniature ninjas. Watch them perch on rocks, driftwood, and leaves like tiny gargoyles, then launch at passing prey with lightning speed! They're shy when alone but become confident and visible in groups of 6-8. Males are mildly territorial, defending small caves but not causing serious harm. They're slow, deliberate feeders—fast tankmates will outcompete them for food. Groups create adorable 'goby gangs' that perch together watching the tank like tiny security guards.",
    
    compatibility: {
      goodMates: ['Other Bumblebee Gobies (best choice - species-only tank ideal)', 'Small peaceful brackish fish (Mollies in low-end brackish)', 'Large adult shrimp (may be ignored)', 'Nerite snails', 'Malaysian Trumpet Snails'],
      badMates: ['Large or aggressive fish', 'Fin-nippers', 'Fast/greedy feeders (Danios, Barbs - gobies will starve)', 'Cherry shrimp (shrimplets eaten)', 'Any fish that outcompetes for food'],
      notes:
        'Bumblebee Gobies are best kept in species-only tanks where they get food reliably. In community tanks with fast feeders, gobies slowly starve because they\'re slow, picky eaters. Brackish vs freshwater: some populations tolerate pure freshwater, others need low brackish (SG 1.002-1.006). Ask store about source water and MATCH IT—switching between fresh/brackish causes osmotic shock and death. Most success in species-focused tanks.',
      
      rules: [
        {
          type: 'requires',
          condition: 'live or frozen food ONLY',
          reason: 'CRITICAL: Bumblebee Gobies are true carnivores who refuse dry food. They will starve to death surrounded by flakes/pellets. Feed live/frozen foods only: bloodworms, brine shrimp, daphnia, microworms. This is non-negotiable',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'fast aggressive feeders',
          reason: 'Gobies are slow, picky eaters. Fast fish (Danios, Barbs) eat all food before gobies react. Result: slow starvation over weeks. Species-only tank strongly recommended',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'match source water salinity',
          reason: 'CRITICAL: Ask store if gobies were raised in freshwater or brackish. Match their source water exactly. Switching fresh↔brackish causes osmotic shock and death. Once acclimated, keep salinity stable for life',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'multiple caves (one per goby minimum)',
          reason: 'Males defend caves and need territorial space. Provide multiple caves (snail shells, PVC pipes, rock stacks) to reduce aggression',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '0-6',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 3,
      interspecific: 1,
      territorial: 4,
    },
    
    activity: {
      level: 'low',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 4,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'carnivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'LIVE/FROZEN FOOD ONLY (will NOT eat dry food - critical!)', 
      'Multiple caves and shaded cover', 
      'Stable parameters (avoid salinity swings if brackish)',
      'Target feeding with pipette/turkey baster',
      'Match source water salinity (fresh vs brackish)',
    ],

    proTips: [
      "CRITICAL: Bumblebee Gobies are true carnivores who refuse dry food. They will starve surrounded by flakes/pellets. Feed live/frozen only: bloodworms, baby brine shrimp, daphnia, microworms, tubifex, cyclops. Some accept frozen after training. Most ignore all dry food until death. Budget for live/frozen foods!",
      "Brackish vs Freshwater confusion: Some populations tolerate pure freshwater, others need low brackish (SG 1.002-1.006 = 2-8ppt salt). Problem: stores often don't know which! Ask about source water and match it exactly. Switching fresh↔brackish = osmotic shock = death. Once acclimated, keep salinity stable for life. Most gobies sold are brackish-raised.",
      "Species-only tank = success. In community tanks with fast feeders, gobies slowly starve (they're slow, picky eaters). Best kept alone or with other slow peaceful species. Target-feed with pipette near caves so they get food.",
      "Feed 2-3 times daily in small portions. Gobies are tiny (1.5 inches) with tiny stomachs. Multiple small feedings better than one large. Drop food near caves with turkey baster so shy gobies eat.",
      "Groups of 6-8 = confident visible gobies. Alone or pairs = stressed hiding gobies. Groups create adorable 'goby gangs' that perch together. More gobies = more natural behavior.",
      "Snail shells = perfect caves! Large mystery snail shells, Apple snail shells make ideal caves gobies love. Stack rocks, use short PVC pipes (1-2 inch diameter), coconut shells. Provide 1-2 caves per goby.",
      "Listen for 'clicking' sounds! Males make audible clicking/popping sounds during territorial displays and courtship. It's adorable and confirms healthy behavior.",
    ],

    commonMistakes: [
      "Assuming they eat dry food = #1 killer. 'My gobies died despite feeding!' Yes—because they refuse flakes/pellets completely. They are obligate carnivores requiring live/frozen meaty foods. No exceptions. Starving gobies hide constantly and waste away.",
      "Community tank with fast feeders = slow starvation. Gobies are slow, picky eaters. Danios, Barbs, Tetras swarm food and eat everything in 30 seconds. Gobies arrive 2 minutes later = nothing left. Species tank strongly recommended.",
      "Switching freshwater↔brackish after purchase = osmotic shock death. Once acclimated to fresh or brackish, keep it stable. Don't switch back and forth. Ask store about source water and match it.",
      "Keeping 1-2 gobies. Small groups (under 6) = stressed, hiding gobies. Groups of 6-8 = confident, visible, natural behavior. They're social and appreciate company.",
      "No caves. Males need caves for territories and breeding. Without caves, chronic stress and aggression occur. Provide multiple caves (snail shells work perfectly).",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['bloodworms', 'brine-shrimp', 'daphnia', 'micro-pellets'],
      supplements: ['tubifex', 'cyclops', 'live-food'],
      vegetarian: false,
      liveFood: {
        required: true,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 20,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Weekly 20-30% water changes. If keeping in brackish, maintain stable salinity (use refractometer or hydrometer). Match temperature and salinity of new water exactly. Keep nitrates below 10ppm—gobies are sensitive to poor water quality. Mature tanks with biofilm/microfauna help.',
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
    commonDiseases: ['ich', 'bacterial-infections', 'internal-wasting-from-starvation', 'osmotic-shock-from-salinity-changes'],
    sensitivities: ['Rapid parameter changes (especially salinity)', 'Poor water quality (nitrates)', 'Food competition (slow starvation)', 'Medications (some gobies sensitive)'],
  },

  scientificContext: {
    wildHabitat:
      'Brachygobius species inhabit lowland coastal systems across Southeast Asia: mangrove swamps, estuaries, tidal streams, and mudflats. They occur in both freshwater and low-brackish conditions depending on locality and tide. Substrate is mud/sand with leaf litter, submerged roots, and mangrove debris. Water is warm (24-28°C), slightly alkaline (pH 7.5-8.5), moderate to hard (GH 10-20). They perch on surfaces and ambush small prey (insect larvae, tiny crustaceans, worms).',
    sexualDimorphism:
      'Subtle. Females appear fuller-bodied, especially when gravid (carrying eggs). Males show more intense coloration (brighter yellow, darker blacks) and defend caves during breeding. Males develop slightly more pointed dorsal/anal fins. Difficult to sex juveniles—wait for maturity (6+ months).',
    variants: [
      'Brachygobius doriae (most commonly sold as "Bumblebee Goby")',
      'Brachygobius xanthozonus/xanthozona complex',
      'Brachygobius nunus',
      'Trade identification frequently inconsistent - many sold under wrong species names',
    ],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'expert',
    trigger:
      'Bumblebee Goby breeding is challenging but achievable. Trigger spawning: 1) Mature pair (8+ months old), 2) Excellent conditioning with live foods (bloodworms, brine shrimp, daphnia) for 2-3 weeks until female plump, 3) Stable low-brackish water (SG 1.002-1.005) or hard alkaline freshwater (pH 7.5-8.0, GH 12-15), 4) Tight caves/shells for spawning, 5) Slightly warmer temp (27-28°C). Males become territorial and defend caves, displaying to females.',
    fryCare:
      'Females lay 50-200 tiny eggs on cave ceiling (upside-down). Female leaves, male becomes cave hermit—guards and fans eggs 24/7 for 7-10 days without eating. Eggs hatch in 7-10 days at 27°C. Fry are microscopic (2mm) and require infusoria or rotifers initially—this is the main bottleneck! After 5-7 days, graduate to baby brine shrimp nauplii. Growth is slow: 1cm at 8 weeks. Larval rearing is difficult—plan rotifer/infusoria cultures before spawning.',
    notes:
      'Spawning happens in species tanks with proper conditions. Main challenge: microscopic fry need microscopic foods. Without rotifer/infusoria cultures ready, fry starve. Breeding is achievable for experienced breeders but not beginner-friendly. Male parental care is excellent and adorable to watch.',
  },
  
  experienceData: {
    successRate: 0.60,
    survivalRate: 0.55,
    
    commonFailures: [
      { issue: 'starvation-despite-feeding', cause: 'refuses-dry-food-needs-live-frozen-only', frequency: 0.45 },
      { issue: 'osmotic-shock-death', cause: 'switched-fresh-brackish-or-wrong-salinity', frequency: 0.22 },
      { issue: 'outcompeted-by-fast-feeders', cause: 'community-tank-gobies-starve', frequency: 0.15 },
      { issue: 'chronic-hiding-stress', cause: 'kept-alone-or-no-caves', frequency: 0.10 },
      { issue: 'poor-water-quality', cause: 'high-nitrates-parameter-swings', frequency: 0.08 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 120, currency: 'EUR' },
      monthly: { min: 15, max: 35, currency: 'EUR' },
    },
  },
};
