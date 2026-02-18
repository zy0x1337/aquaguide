import type { Species } from '../../types/species';

export const otocinclusMacrospilus: Species = {
  id: 'oto-002',
  slug: 'otocinclus-macrospilus',
  imageUrl: '/images/species/otocinclus-macrospilus.jpg',
  funFact: "Otocinclus macrospilus is the marbled mimic constantly confused with O. vittatus! The CRITICAL identification difference: O. macrospilus has an interrupted lateral stripe stopping before tail base with a separate distinct tail spot (heart-shaped blotch disconnected from body stripe!), while O. vittatus has a continuous uninterrupted stripe running through to tail tip. Plus O. macrospilus has a marbled/mottled brown pattern on back (like camouflage!) vs vittatus' cleaner appearance. They're often mislabeled in stores as 'Oto vittatus' (90% of sold 'vittatus' are actually macrospilus!). Both are identical in care needs and behavior - they're interchangeable algae-eating machines! Can school together mixed. From Peruvian Amazon!",

  taxonomy: {
    scientificName: 'Otocinclus macrospilus',
    commonName: 'Marbled Otocinclus / Tailspot Oto / Macrospilus Oto',
    family: 'Loricariidae',
    origin: 'South America (Peru - Amazon River system, vegetation-rich river margins)',
    region: 'South America',
    biotope: 'Slow to moderate flow vegetation-rich river margins, dense floating plants, submerged branches, soft acidic water',
  },

  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 3.5,
    color: 'CRITICAL SPECIES IDENTIFICATION (often confused with O. vittatus!): Light beige/tan body with INTERRUPTED dark brown lateral stripe running from snout along body but stopping before tail base (interrupted - key difference!). Large separate heart-shaped tail spot at caudal peduncle (disconnected from body stripe - critical ID feature!). Back/dorsal surface has distinctive marbled/mottled brown camouflage pattern (irregular patches - not clean like vittatus). Belly white/cream. Clear fins. Distinctive sucker mouth. O. VITTATUS COMPARISON: Vittatus has continuous uninterrupted stripe running through to tail tip (no separate tail spot!) and cleaner back without marbled pattern. This is the key difference for identification',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 21, max: 26, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 2, max: 15 },
    kh: { min: 1, max: 8 },
    flow: 'moderate',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 30,
      territories: 0,
    },
    
    bioloadMultiplier: 0.3,
  },

  habitat: {
    planting: 'dense',
    plantingNotes:
      'Otocinclus macrospilus requires very heavy planting with broad-leaved plants for grazing! They\'re algae/biofilm specialists needing constant food surfaces. Best setup: Broad-leaved plants (Amazon Swords, Anubias, Java Fern - large leaf surfaces accumulate algae/biofilm for grazing!), floating plants (Water Sprite, Frogbit - creates aufwuchs underneath, provides security), fine-leaved plants (Cabomba, hornwort). They spend 90% of time grazing surfaces constantly! Dense planting creates biofilm-rich microhabitats mimicking Amazonian vegetation margins. CRITICAL: Mature tank (6+ months old) with established algae/biofilm is mandatory before adding Otos (new/clean tanks = starvation!).',
    hardscape: ['Driftwood branches (mandatory - main grazing surfaces!)', 'Smooth river stones (biofilm growth)', 'No sharp edges (soft-bodied fish!)', 'Lots of surface area for algae growth'],
  },

  behavior: {
    tags: ['algae_eater', 'peaceful', 'shy', 'shoaler', 'diurnal', 'bottom_dweller'],
    minGroupSize: 6,
    description:
      'Otocinclus macrospilus are extremely shy peaceful algae-eating specialists displaying constant grazing behaviors! Watch them sucker-mouth attached to surfaces (glass, leaves, driftwood) scraping biofilm/algae 8-12 hours daily in slow methodical movements. They\'re nervous fish: easily spooked by sudden movements, hiding when stressed. They need groups 6+ for security (single/small groups = constant hiding, stress, early death). They\'re diurnal grazers most active during day. Watch them perform "glass dancing" up/down aquarium walls grazing algae. They\'re completely peaceful never aggressive. CRITICAL: They\'re slow eaters easily outcompeted for food - need peaceful tankmates only!',
    
    compatibility: {
      goodMates: ['All peaceful community fish (Neon Tetras, Harlequin Rasboras)', 'Corydoras (different bottom level)', 'All dwarf shrimp (Neocaridina, Caridina - 100% safe!)', 'Snails (peaceful cohabitants)', 'Small peaceful fish under 6cm', 'Can mix with O. vittatus (interchangeable!)', 'Discus (same water parameters)', 'Peaceful gouramis'],
      badMates: ['Goldfish (incompatible temps/parameters)', 'Large/aggressive cichlids', 'Fast/competitive eaters (outcompete for food)', 'Boisterous fish (stress shy Otos)', 'Any predatory fish'],
      notes:
        'Otocinclus macrospilus are model community fish perfect for peaceful planted tanks! They\'re 100% safe with all invertebrates including tiny shrimplets (never predatory). CRITICAL: They\'re slow feeders easily outcompeted - only keep with peaceful tankmates! Boisterous/fast fish (barbs, large danios) stress them causing hiding/starvation. Best in calm planted community tanks. They can school with O. vittatus mixed (identical behavior - interchangeable!).',
      
      rules: [
        {
          type: 'requires',
          condition: 'mature tank (6+ months old) with established algae/biofilm',
          reason: 'CRITICAL #1 CAUSE OF DEATH: Adding Otos to new/clean tanks with no algae = starvation within 2-3 weeks! They need constant biofilm/algae for grazing. Mature tanks have established algae/aufwuchs on all surfaces. New tanks = sterile = death. Wait 6+ months after cycling before adding Otos. This is absolutely mandatory',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'groups of 6+ fish minimum',
          reason: 'Otos are schooling fish needing groups 6+ for security! Singles or pairs = extreme stress, constant hiding, refusal to eat, early death. Large groups = confident grazing behavior, natural activity. This is critical for survival and well-being',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'mixing with fast/competitive feeders',
          reason: 'Otos are slow grazers easily outcompeted for food! In tanks with boisterous fish (barbs, large danios), Otos become stressed and hide rather than graze = starvation. Only keep with peaceful slow-moving tankmates',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 8-12,
        midwater: '12-20',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'shoal',
      maxMalesPerTank: 10,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'expert',
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'Mature tank (6+ months old) with established algae - mandatory', 
      'Constant supply of algae/biofilm on surfaces', 
      'Groups 6+ minimum (schooling security)', 
      'Broad-leaved plants for grazing surfaces', 
      'Pristine water quality (ammonia/nitrite 0ppm, nitrate under 20ppm)', 
      'Peaceful tankmates only (slow feeders)', 
      'Supplemental algae-based foods (spirulina wafers, blanched vegetables)',
    ],

    proTips: [
      "MATURE TANK IS MANDATORY! #1 cause of Oto death: adding to new/clean tanks with no algae/biofilm = starvation within 2-3 weeks! They're specialized algae grazers needing constant food surfaces. Before buying Otos: Wait 6+ months after cycling for algae/biofilm to establish on all surfaces (glass, plants, driftwood). Test: Can you see green tinge on glass? Biofilm on driftwood? Then ready for Otos. New tanks = death sentence.",
      "Pre-grow algae rocks for emergency food! Setup: Take smooth river stones, place in sunny window in bucket of old tank water for 2-3 weeks until covered in green algae. Rotate these 'algae stones' into Oto tank when cleaned surfaces run low. This prevents starvation between algae growth cycles. Critical backup food source!",
      "Species identification: O. macrospilus vs O. vittatus confusion! Key differences: Macrospilus (this species): Interrupted lateral stripe + separate heart-shaped tail spot + marbled back. Vittatus: Continuous uninterrupted stripe to tail tip + clean back. 90% of store 'vittatus' are actually macrospilus! Both identical in care - interchangeable. Can school together mixed.",
      "Groups 6+ minimum for survival! Otos are schooling fish - singles/pairs = extreme stress, constant hiding, refusal to eat, early death. In groups 6+: confident grazing behavior, natural activity, security. This isn't optional - it's survival. Bigger groups = better (8-12 ideal).",
      "Drip acclimation mandatory! Otos are extremely sensitive to parameter changes - standard acclimation = shock death! Use drip method: 2-3 hours slow drip from main tank into Oto container gradually adjusting parameters. Rush = death. Most Oto deaths occur first 2 weeks from poor acclimation.",
      "Supplement with algae wafers + blanched vegetables! While Otos prefer grazing algae, tanks rarely produce enough for 6+ fish. Supplement nightly: spirulina/algae wafers (break into pieces placed near favorite spots), blanched zucchini/cucumber slices (clip to glass), Repashy Soilent Green gel food. Feed after lights out when they're most active.",
      "Pristine water quality non-negotiable! Otos are sensitive to pollution: ammonia/nitrite = death, nitrates over 20ppm = stress/disease. Weekly 30% water changes mandatory. They're indicator fish - if Otos dying, water quality failing.",
    ],

    commonMistakes: [
      "Adding to new/clean tanks. Biggest killer (70% of failures!). Otos are specialized algae/biofilm grazers. New tanks have no algae/biofilm = no food = starvation within 2-3 weeks. They can't survive on supplemental foods alone long-term. Wait 6+ months for mature biofilm before adding Otos. This is mandatory.",
      "Keeping singly or pairs. Otos are schooling fish needing groups 6+ for security! Singles/pairs = extreme stress, constant hiding, refusal to eat, early death. This isn't optional - groups = survival.",
      "Poor acclimation. Otos are extremely sensitive to parameter changes! Standard float-and-dump acclimation = shock death. Must use drip acclimation (2-3 hours slow adjustment). 50% of Oto deaths occur first week from acclimation shock.",
      "Mixing with boisterous fish. Otos are shy slow grazers! In tanks with active fish (barbs, large danios), Otos hide constantly rather than graze = starvation. Only peaceful calm tankmates.",
      "Not supplementing food. Even mature tanks rarely produce enough algae for 6+ Otos. Without nightly supplements (algae wafers, vegetables), they slowly starve. Thin bodies, lethargy = starvation.",
      "Buying stressed fish. Otos are often malnourished at stores (kept in clean tanks with no algae). Look for: rounded bellies (well-fed), active grazing, no sunken appearance. Avoid thin/listless fish - they rarely recover.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['algae-wafers', 'biofilm', 'spirulina', 'blanched-zucchini'],
      supplements: ['GlasGarten BacterAE'],
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
      notes: 'Weekly 30% water changes mandatory. Otos are extremely sensitive to water quality - they\'re indicator fish showing distress before other species! Keep: ammonia/nitrite 0ppm (any amount = stress/death), nitrate under 20ppm (they\'re intolerant to high nitrates). They need soft acidic water (pH 6.0-7.5, GH 2-15) - avoid hard alkaline water. Gentle to moderate flow from filter output. Test water weekly. They\'re scaleless making them sensitive to medications - avoid copper-based treatments! Very delicate maintenance needs.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 50,
      },
      filter: {
        required: true,
        type: 'sponge',
        flowRate: 'moderate',
      },
      airstone: true,
      lighting: 'moderate',
      co2: false,
    },
  },

  health: {
    lifespanYears: 5,
    commonDiseases: ['starvation', 'ich', 'velvet', 'stress-related-infections'],
    sensitivities: ['Ammonia (instant death!)', 'Nitrite (highly toxic)', 'High nitrates (over 20ppm)', 'Copper medications (scaleless fish!)', 'Parameter changes (drip acclimate!)', 'Poor acclimation (shock death)'],
  },

  scientificContext: {
    wildHabitat:
      'Otocinclus macrospilus inhabits vegetation-rich slow to moderate flow river margins in Peruvian Amazon River system. Wild habitat: shallow water (20-80cm depth) among dense floating vegetation (Water Hyacinth rafts, matured aquatic plants), submerged branches covered in aufwuchs/biofilm, soft acidic water (pH 6.0-6.8, very soft GH 2-5), warm temps 22-25°C, tannin-stained water. They graze biofilm/algae from undersides of floating plant roots and submerged surfaces constantly. They\'re aufwuchs specialists with sucker mouths adapted for surface grazing.',
    sexualDimorphism:
      'Difficult to sex (subtle differences). Females may be: Rounder, fuller-bodied especially when gravid (carrying eggs - belly noticeably swollen), slightly larger overall. Males may be: Slimmer, more streamlined profiles, slightly smaller. These differences only visible when mature (8+ months) and side-by-side comparison. Juveniles impossible to sex. Most hobbyists never reliably sex Otos.',
    variants: ['Otocinclus macrospilus (this species - marbled back, interrupted stripe)', 'O. vittatus (continuous stripe - often confused!)', 'O. vestitus (similar to vittatus, smaller)', 'O. cocama (Zebra Oto - black/white stripes, premium species)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger:
      'Otocinclus macrospilus breeding is extremely rare in home aquaria (expert-level challenge!). Wild spawning triggers: 1) Rainy season simulation (cool water change from 24°C to 21-22°C over days mimicking seasonal cooling), 2) Heavy feeding with protein-rich foods (live foods, spirulina), 3) Large healthy groups (8-12+ fish with mature adults 12+ months old), 4) Pristine water quality (triggers spawning readiness). Condition fish for weeks before attempting. Success rate very low.',
    fryCare:
      'Breeding details rare in home aquaria (few successful reports!). Observed behavior: Males chase gravid females in courtship, females lay 3-6 sticky eggs on broad plant leaves (Anubias, Amazon Swords) or aquarium glass, eggs scattered over hours, no parental care (parents may eat eggs!). For fry survival: Remove parents or move eggs to hatching container with gentle airstone. Eggs hatch 3-4 days (tiny transparent fry!). Fry need microscopic first foods: infusoria/green water (week 1), spirulina powder (week 2), soft algae scraped from surfaces (week 3+), eventually micro-pellets. Growth slow: 1cm at 8 weeks, 2cm at 6 months. Extremely challenging.',
    notes:
      'Otocinclus macrospilus breeding is the holy grail for Oto keepers - extremely rare in captivity! Most breeding attempts fail. Challenges: 1) Difficulty triggering spawning (specific environmental cues unknown), 2) Tiny fry requiring microscopic foods (infusoria cultures needed), 3) Slow growth (months to maturity), 4) Parents eating eggs/fry. Few hobbyists successfully breed Otos. Focus on keeping them healthy rather than breeding attempts.',
  },
  
  experienceData: {
    successRate: 0.30,
    survivalRate: 0.35,
    
    commonFailures: [
      { issue: 'starvation-death', cause: 'added-to-new-clean-tanks-with-no-algae-biofilm', frequency: 0.70 },
      { issue: 'acclimation-shock-death', cause: 'poor-acclimation-parameter-shock-first-week', frequency: 0.15 },
      { issue: 'stress-hiding-death', cause: 'kept-singly-or-small-groups-under-6-fish', frequency: 0.08 },
      { issue: 'stress-from-boisterous-tankmates', cause: 'mixed-with-active-fish-cant-graze-peacefully', frequency: 0.05 },
      { issue: 'ammonia-nitrite-poisoning', cause: 'poor-water-quality-sensitive-fish', frequency: 0.02 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};
