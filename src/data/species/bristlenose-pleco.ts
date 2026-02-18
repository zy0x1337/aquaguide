import type { Species } from '../../types/species';

export const bristlenosePleco: Species = {
  id: 'pleco-001',
  slug: 'bristlenose-pleco',
  imageUrl: '/images/species/bristlenose-pleco.jpg',
  funFact: "Bristlenose Plecos are the BEST ALGAE-EATING PLECO for home aquariums—they stay SMALL (5 inches vs Common Pleco's RIDICULOUS 18-24 inches!). The male's iconic BUSHY BRISTLES aren't just for show—they're elaborate breeding displays to impress females AND mimic nutritious insect larvae to attract prey! Watch a male guard his cave: he'll stay inside for 7-10 DAYS without eating, constantly FANNING eggs with his fins to prevent fungus. He's the aquarium world's dedicated single dad—female lays eggs and LEAVES, male does ALL parenting. The 'sawdust' you see everywhere? That's pleco poop from rasping wood—it's NORMAL and means they're eating!",

  taxonomy: {
    scientificName: 'Ancistrus sp.',
    commonName: 'Bristlenose Pleco',
    family: 'Loricariidae',
    origin: 'South America (Amazon Basin, Orinoco Basin - widespread across multiple species)',
    region: 'South America',
    biotope: 'Fast-flowing rivers and streams with rocky substrates, ABUNDANT submerged driftwood, high oxygen content, moderate to strong current',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 13,
    color: 'Variable depending on species: Standard Bristlenose = mottled dark brown/black with lighter spots. Albino = yellow/orange with red eyes. Super Red = bright orange-red. Longfin = extended flowing fins. Males develop BUSHY TENTACLE-LIKE BRISTLES on nose (females have few/none)',
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
    plantingNotes: 'Bristlenose Plecos appreciate planted tanks but prefer HARDY plants (Anubias, Java Fern, Amazon Swords, Vallisneria). Avoid delicate carpets or stem plants—plecos THRASH around driftwood and can accidentally uproot fragile plants. They spend days hiding under/inside driftwood and emerge at night to graze. Moderate planting with OPEN BOTTOM SPACE for movement is ideal.',
    hardscape: ['DRIFTWOOD (CRITICAL - mandatory for digestion!)', 'Caves (terracotta pots, slate, PVC pipes, coconut shells)', 'Smooth river stones', 'Malaysian/Mopani wood (dense, long-lasting)', 'Spiderwood (softer, eaten faster)', 'Multiple caves if breeding (one per male minimum)'],
  },

  behavior: {
    tags: ['peaceful', 'nocturnal', 'territorial', 'algae_eater', 'bottom_dweller'],
    minGroupSize: 1,
    description: 'Bristlenose Plecos are the PERFECT PLECO for community tanks—peaceful toward ALL fish but TERRITORIAL toward other plecos (especially males). They\'re SHY and NOCTURNAL: during the day, they\'re INVISIBLE—wedged inside caves, under driftwood, or behind equipment. At NIGHT, they emerge like tiny armored tanks to RASP algae from every surface (glass, plants, driftwood, decorations). Listen at night: you can HEAR them scraping with specialized teeth—sounds like gentle sandpaper! Males are HIGHLY TERRITORIAL toward other male Bristlenoses—they FIGHT for caves and breeding rights (locked jaws, pushing contests). Multiple males need 150L+ tanks with SEPARATED cave systems. Females tolerate each other better. During breeding, males become CAVE HERMITS—guarding eggs 24/7 for 7-10 days without eating, constantly fanning them with fins to prevent fungus.',
    
    compatibility: {
      goodMates: ['Tetras', 'Rasboras', 'Angelfish', 'Corydoras', 'Livebearers (Guppies, Platies, Mollies)', 'Gouramis', 'Small peaceful cichlids (Rams)', 'Shrimp (generally safe)', 'Snails'],
      badMates: ['Other male Bristlenose Plecos (fighting)', 'Large aggressive cichlids (stress)', 'Pufferfish (too aggressive)', 'Very large predatory fish'],
      notes: 'Bristlenose Plecos are IDEAL community tank residents—100% peaceful toward all fish. They ignore tankmates completely and focus on algae/wood. Safe with most shrimp and snails. HOWEVER: Keep ONLY ONE MALE per tank unless tank is 150L+ with MULTIPLE separated caves—males are HIGHLY territorial and fight brutally. Multiple females coexist peacefully. Bristlenoses are the PERFECT alternative to Common Plecos (which grow 18-24 inches and destroy tanks). Always verify species when buying!',
      
      rules: [
        {
          type: 'requires',
          condition: 'driftwood in tank',
          reason: 'CRITICAL: Bristlenose Plecos MUST have driftwood. They rasp wood fibers to aid DIGESTION (helps break down algae/vegetables). Without wood, they develop digestive issues, bloating, and starvation. Driftwood also helps wear down continuously growing teeth. Provide 2-3 pieces minimum',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'multiple male bristlenose plecos',
          reason: 'Males are HIGHLY TERRITORIAL and fight for caves/breeding rights. Keep ONE male per tank unless tank is 150L+ with SEPARATED cave systems (far apart). Fights = injuries, stress, death',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'caves for hiding and breeding',
          reason: 'Bristlenoses are NOCTURNAL and SHY. Without caves, they experience chronic stress. Males NEED caves for breeding (they guard eggs inside). Provide caves: terracotta pots, PVC pipes, slate overhangs, coconut shells',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'common pleco confusion',
          reason: 'Common Plecos (Hypostomus plecostomus) grow 18-24 inches and are TANK-BUSTERS. Bristlenoses stay 5 inches. Stores OFTEN mislabel them. Always verify scientific name (Ancistrus = Bristlenose; Hypostomus = Common)',
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
      'DRIFTWOOD MANDATORY (digestion + teeth maintenance)', 
      'Caves for hiding and breeding', 
      'Moderate to strong water flow (mimics wild habitat)',
      'Varied vegetable diet (algae alone insufficient)',
      'Keep ONLY ONE MALE per tank (territorial)',
    ],

    proTips: [
      "Bristlenose vs Common Pleco: HUGE SIZE DIFFERENCE! Bristlenose = 5 inches (13cm), perfect for 80L+ tanks. Common Pleco = 18-24 inches (60cm), needs 400L+ tanks. Stores OFTEN mislabel them. Always check scientific name: Ancistrus = Bristlenose (GOOD); Hypostomus = Common (TANK-BUSTER). Don't make this mistake!",
      "DRIFTWOOD IS MANDATORY, NOT DECORATION. Bristlenoses rasp wood fibers to aid DIGESTION. Wood helps them break down algae and vegetables. Without wood, they develop bloating, digestive issues, and eventually starve. Provide 2-3 pieces (Malaysian, Mopani, Spiderwood). Wood also wears down continuously growing teeth.",
      "Best algae eater for home tanks! Bristlenoses eat green algae, brown algae, some black beard algae (won't eliminate but controls it), and biofilm. They're MORE EFFECTIVE than Otocinclus for larger tanks and MUCH better than Common Plecos (which eat more wood than algae).",
      "Feed vegetables! Blanched zucchini, cucumber, spinach, green beans (canned, no salt), peas, kale. Attach to veggie clip or fork. Drop at night when active. They'll also eat algae wafers and sinking pellets. Varied diet = healthy pleco.",
      "The 'sawdust' is normal! You'll see fine brown particles everywhere—that's pleco POOP from rasping wood/algae. It's NORMAL and means they're eating properly. Good filtration is mandatory. Don't panic—it's not dirt, it's digested wood.",
      "Nocturnal = invisible during day. Don't panic if you NEVER see your Bristlenose. They hide in caves/under wood during day and emerge at night. Check with red flashlight at night (doesn't disturb them) to observe natural behavior. Hearing scraping sounds at night? That's your pleco working!",
      "Males develop BUSHY BRISTLES at 6-12 months. Females have few/none (maybe tiny bumps). Bristles are breeding displays—bigger bristles = more attractive to females. If buying juveniles, assume all are males unless seller sexes them.",
    ],

    commonMistakes: [
      "No driftwood = #1 KILLER. 'My pleco died despite eating algae wafers!' YES—because without WOOD for fiber, they can't digest properly. Bloating, constipation, starvation follow. Driftwood is NON-NEGOTIABLE for Bristlenoses.",
      "Buying Common Pleco by mistake. Stores label them interchangeably. Baby Common Plecos look IDENTICAL to Bristlenoses. Result: 18-inch monster destroys tank in 2 years. Always verify: Ancistrus = small (Bristlenose); Hypostomus = huge (Common).",
      "Expecting them to keep tank algae-free. Bristlenoses are EXCELLENT algae eaters but need SUPPLEMENTAL feeding (vegetables, wafers). Algae alone is insufficient. Starving plecos stop eating algae and hide constantly.",
      "Multiple males in small tanks. Males FIGHT brutally for caves. Locked jaws, injuries, stress, death. One male per tank unless 150L+ with separated caves far apart. Females coexist peacefully.",
      "No caves. Bristlenoses are SHY and NOCTURNAL. Without caves, chronic stress occurs. Males NEED caves for breeding (mandatory). Provide terracotta pots, PVC pipes (2-3 inches diameter), slate, coconut shells.",
      "Thinking they eat fish poop. NO! Plecos produce MASSIVE amounts of poop (wood/algae digestion creates sawdust-like waste). They INCREASE bioload significantly. You need STRONG filtration and regular vacuuming.",
    ],
    
    feeding: {
      frequency: 'once-daily',
      primaryFoods: ['algae-wafers', 'vegetables'],
      supplements: ['zucchini', 'spirulina', 'pellets'],
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
      notes: 'Weekly 30% water changes. Bristlenoses produce LARGE amounts of waste (wood/algae digestion = fine sawdust-like poop). STRONG filtration mandatory. Vacuum substrate regularly to remove pleco waste. Keep nitrates below 20ppm. Moderate flow preferred (mimics rivers).',
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
    sensitivities: ['Copper in medications (plecos sensitive)', 'Lack of fiber/wood (digestive failure)', 'High nitrates', 'Poor oxygenation', 'Sudden parameter changes'],
  },

  scientificContext: {
    wildHabitat: "Bristlenose Plecos (Ancistrus sp.) inhabit fast-flowing rivers and streams across Amazon and Orinoco Basins (South America). Wild habitat has STRONG CURRENT, high oxygen content, rocky substrates, and ABUNDANT submerged driftwood. Water is warm (22-26°C), soft to moderate hardness (GH 4-12), slightly acidic to neutral (pH 6.0-7.5). They spend days wedged under logs or in riverbank crevices, emerging at night to graze biofilm/algae. Strong current explains their POWERFUL sucker mouth—they cling to surfaces in rapids.",
    sexualDimorphism: "EASY TO SEX! MALES: Develop ICONIC BUSHY BRISTLES (fleshy tentacles) on nose starting at 6-12 months. Mature males have ELABORATE bristle displays covering entire snout. Slimmer body. FEMALES: Have FEW OR NO BRISTLES (maybe tiny bumps on snout edge). Rounder, fuller body especially when gravid (carrying eggs). Juveniles (under 6 months) impossible to sex—all look identical. Wait for maturity or buy sexed adults.",
    variants: ['Standard Bristlenose (brown/black spotted)', 'Albino Bristlenose (yellow/orange, red eyes)', 'Super Red Bristlenose (bright orange-red)', 'Calico Bristlenose (mottled colors)', 'Longfin Bristlenose (extended flowing fins)', 'Lemon Bristlenose (bright yellow)'],
  },

  breeding: {
    method: 'cave_spawner',
    difficulty: 'beginner',
    trigger: 'Bristlenose Plecos are EASY TO BREED—one of the easiest egg-layers for beginners! Trigger spawning: 1) Mature pair (males 12+ months with bristles, females 10+ months), 2) CAVES (narrow tubes 2-3 inches diameter—terracotta pots, PVC pipes, coconut shells). Males claim and defend caves aggressively, 3) High-quality diet (vegetables, algae wafers, protein-rich foods like bloodworms), 4) Large COOL water change (40-50%) with water 2-3°C cooler than tank (simulates rainy season). Males become cave-obsessed and clean interior surfaces.',
    fryCare: 'Females lay 20-200 orange eggs (golf ball-sized cluster) inside cave. MALE GUARDS EGGS and becomes CAVE HERMIT for 7-10 DAYS—he stays inside 24/7 without eating, constantly FANNING eggs with fins to oxygenate and prevent fungus. Female is EXPELLED from cave—males are sole parents. Eggs hatch in 4-10 days at 24°C (warmer = faster). Fry emerge as tiny armored 1cm copies. MALE continues guarding fry for 3-5 days until they disperse. Fry eat biofilm, aufwuchs, and rasp wood immediately—NO special foods needed! Feed crushed algae wafers, spirulina powder, and blanched vegetables. Provide soft wood (Spiderwood) for grazing. Growth is MODERATE: 1.5cm at 2 months, 3cm at 6 months. Maturity at 8-12 months.',
    notes: 'Bristlenose breeding is SO EASY they\'re called "breeding like rabbits." Many breeders report SURPRISE spawns in community tanks. For deliberate breeding, provide caves (one per male), condition adults with vegetables/protein, and trigger with cool water change. Males do ALL parenting—watching them guard fry is adorable! Be prepared: 50-200 fry per spawn. They breed EVERY 4-8 weeks if conditions maintained. Have plan for babies (sell to stores, trade, grow-out tanks).',
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
