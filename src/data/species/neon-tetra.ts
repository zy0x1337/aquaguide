import type { Species } from '../../types/species';

export const neonTetra: Species = {
  id: 'tetra-001',
  slug: 'neon-tetra',
  imageUrl: '/images/species/neon-tetra.jpg',
  funFact: "In the wild, Neon Tetras live in blackwater streams so dark that their iridescent stripe is the only way they can locate each other in the gloom. This 'neon beacon' evolved for communication in pitch-black jungle waters!",

  taxonomy: {
    scientificName: 'Paracheirodon innesi',
    commonName: 'Neon Tetra',
    family: 'Characidae',
    origin: 'Peru, Brazil (Amazon Basin, Solimões River tributaries)',
    region: 'South America',
    biotope: 'Blackwater tributaries with tea-colored, acidic water rich in tannins from decaying leaves, sandy substrates, and dense overhanging vegetation',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 3,
    color: 'Iconic iridescent electric-blue stripe running from nose to adipose fin, contrasted by brilliant crimson-red belly from mid-body to tail. Silver-white underside. Males: slimmer with straighter blue stripe. Females: rounder belly creating curved blue stripe, especially when gravid. Colors intensify in dark substrate and tannin-stained water',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 60,
    tempC: { min: 20, max: 26, ideal: 23 },
    ph: { min: 5.0, max: 7.0, ideal: 6.0 },
    gh: { min: 2, max: 10 },
    kh: { min: 1, max: 5 },
    flow: 'low',
    substrate: 'dark-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'all',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 60,
      verticalCM: 25,
      territories: 0,
    },
    
    bioloadMultiplier: 0.3,
  },

  habitat: {
    planting: 'dense',
    plantingNotes: 'Neon Tetras look stunning in blackwater biotope setups! Dense background planting (Cryptocoryne, Vallisneria, Java Fern) provides security, but leave the center open for schooling displays. Floating plants (Frogbit, Water Lettuce, Salvinia) are essential—they dim lighting (Neons hate bright light!) and recreate their dark jungle stream habitat. Leaf litter (Indian Almond, Oak) on substrate releases tannins, creates biofilm for grazing, and completes the natural look. Dark substrate (black sand) makes neon colors pop dramatically.',
    hardscape: ['Branchy Driftwood (creates tannins + hiding spots)', 'Indian Almond Leaves (mandatory for blackwater setup)', 'River Stones', 'Bogwood'],
  },

  behavior: {
    tags: ['shoaler', 'peaceful', 'shy', 'colorful', 'active'],
    minGroupSize: 10,
    description: 'Neon Tetras are the iconic community shoaling fish—but their behavior is often misunderstood. They form loose shoals (not tight schools) in home aquariums, swimming near each other for security but foraging independently. When startled, they snap into tight formations like a single organism—it\'s mesmerizing! Their iridescent stripe evolved as a "neon beacon" to locate each other in pitch-black jungle streams. Watch them display confidence in groups of 10+ vs. timidity in small groups (under 6): large groups explore openly, small groups hide constantly with faded colors. They\'re active during day, most vibrant after feeding. Males perform subtle displays (shimmering, circling) during courtship.',
    
    compatibility: {
      goodMates: ['Corydoras (all species)', 'Otocinclus', 'Harlequin Rasboras', 'Dwarf Gouramis', 'Apistogramma', 'Cherry Shrimp', 'Nerite Snails', 'Cardinal Tetras (similar needs)', 'Rummynose Tetras'],
      badMates: ['Angelfish (natural predators!)', 'Large Cichlids', 'Goldfish', 'Bettas (fin-nipping risk)', 'Aggressive Barbs (Tiger, Rosy)', 'Discus (temperature incompatibility)'],
      notes: 'Neon Tetras are classic community fish for planted tanks—but the Angelfish combo is a disaster waiting to happen. Angelfish hunt Neons in the wild and will eat them once adult (4+ inches). This is the #1 beginner mistake! Otherwise, Neons are peaceful, safe with shrimp, and perfect for calm community setups. They\'re sensitive to water quality—only add to mature tanks (8+ weeks cycled).',
      
      rules: [
        {
          type: 'avoid',
          target: 'angelfish',
          reason: 'Angelfish are natural predators of Neon Tetras in the Amazon. The combo is popular in stores but ends in tragedy—adult Angels hunt and eat Neons. Avoid despite store recommendations',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'large cichlids or predatory fish',
          reason: 'Any fish with a mouth large enough to swallow a Neon will eventually try. This includes Discus (temp mismatch), Oscars, and larger Gouramis',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 10',
          reason: 'Neons are obligate shoalers suffering psychological stress in groups under 10. Colors fade, they hide constantly, and die prematurely. 10 is absolute minimum; 15-20 creates confident schools',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'bettas',
          reason: 'Usually fine, but some Bettas may nip at Neons mistaking their movement for food. Also, Neons may nip Betta fins if underfed. Monitor closely in first week',
          severity: 'low',
        },
        {
          type: 'requires',
          condition: 'tank cycled >= 8 weeks',
          reason: 'CRITICAL: Neons are "New Tank Syndrome" victims. They\'re sensitive to ammonia/nitrite spikes and parameter instability. Only add to fully mature tanks',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '10-20',
        bottom: '6-12',
      },
    },
    
    aggressionLevel: {
      intraspecific: 1,
      interspecific: 1,
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
      'Groups of 10+ mandatory (shoaling species)', 
      'Add to mature tanks only (8+ weeks cycled)', 
      'Soft, acidic water preferred (pH 6.0-6.5)', 
      'Dim lighting or floating plants (hate bright light)', 
      'Dark substrate enhances colors',
    ],

    proTips: [
      "Dim lighting = confident Neons! In bright light, Neons lose confidence, stay near bottom, and colors fade. Add floating plants (Frogbit, Water Sprite) to diffuse light. They evolved in shaded jungle streams—bright tanks cause chronic stress.",
      "Blackwater conditions = disease resistance! Add Indian Almond Leaves or Alder Cones to release tannins (turns water tea-colored). This mimics natural habitat, boosts immune system, and prevents diseases. They look stunning in blackwater setups!",
      "Feed tiny foods! Their mouths are incredibly small. Use crushed flakes, micro-pellets (< 0.5mm), or baby brine shrimp. They'll pick food off substrate like tiny vacuum cleaners. Feed small portions 2x daily.",
      "Dark substrate = vibrant colors! Neons evolved over dark, muddy leaf-litter bottoms. White gravel causes stress and washed-out colors. Use black sand or dark gravel—the visual difference is dramatic.",
      "Temperature distinction: Neons prefer cooler water (22-24°C) than Cardinal Tetras (25-27°C). Don't keep them in tropical community tanks at 27°C+—shortens lifespan. They're not heat-loving fish!",
      "Buy quality stock! Mass-farmed Neons (especially from Asian fish mills) often carry Neon Tetra Disease and have weaker genetics. Buy from local breeders or quarantine all new arrivals for 4+ weeks.",
    ],

    commonMistakes: [
      "Adding to brand-new tanks. #1 killer! Neons are highly sensitive to ammonia/nitrite spikes. In tanks under 8 weeks old, they die from 'New Tank Syndrome' even when water tests show 0/0 parameters—they need stability, not just absence of toxins.",
      "Groups under 10 fish. This causes chronic stress. They hide constantly, refuse food, colors fade, and die within months. 10 is minimum; 15-20 displays natural behavior. Don't buy 5-6 'to start'—buy the full group.",
      "Pairing with Angelfish. Most popular store combo but terrible advice. Angelfish hunt Neons in the Amazon! Juvenile Angels coexist fine—adult Angels eat Neons. This ends in tragedy every time.",
      "Keeping too warm (>26°C). Unlike Cardinals, Neons prefer cooler temps (22-24°C). Tropical tanks at 27°C+ shorten lifespan dramatically. They're temperate tropicals, not heat-lovers.",
      "Bright lighting without cover. Neons evolved in shaded jungle streams. Bright light = stressed fish hiding near bottom with faded colors. Always provide floating plants or dim lighting.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'crushed-flakes', 'brine-shrimp', 'daphnia'],
      supplements: ['bloodworms', 'spirulina'],
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
      notes: 'Weekly 25% water changes with MATCHED temperature water. Neons are sensitive to parameter swings—never add cold water directly. Use dechlorinator. Vacuum gently around plants. Keep nitrates below 20ppm for best health and coloration.',
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
    lifespanYears: 5,
    commonDiseases: ['neon-tetra-disease', 'ich', 'fin-rot', 'false-neon-disease', 'columnaris'],
    sensitivities: ['New Tank Syndrome', 'High nitrite', 'Sudden pH swings', 'Bright light', 'High temperatures (>26°C)'],
  },

  scientificContext: {
    wildHabitat: "Neon Tetras inhabit clearwater and blackwater tributaries of the Amazon Basin, particularly the Solimões River in Peru and Brazil. Wild habitat: shallow (20-80cm deep) tea-colored water stained by tannins from decaying leaves, EXTREMELY soft (<1 dGH), acidic (pH 4.0-6.0), warm (22-26°C), virtually no water hardness. Dense jungle canopy creates DIM LIGHTING conditions. Substrate is fine sand, silt, and thick leaf litter. They occupy mid-water zones in schools of hundreds, feeding on insect larvae, small crustaceans, and fallen insects.",
    sexualDimorphism: "Subtle and difficult. Females: noticeably rounder and deeper-bodied especially when gravid (carrying eggs), causing iridescent blue stripe to appear 'bent' or curved. Larger overall. Males: slimmer, more streamlined with straighter horizontal blue line. Slightly smaller. Under spawning conditions, males develop slightly hooked anal fin. Easy to sex only when females are egg-filled; otherwise nearly identical.",
    variants: ['Standard Neon (wild-type)', 'Longfin Neon (captive mutation)', 'Gold Neon (leucistic mutation)', 'Diamond Head Neon (enhanced iridescence)', 'Albino Neon (extremely rare)'],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Neon Tetra breeding is EXPERT-LEVEL—one of the hardest common aquarium fish to breed! Requires: 1) Near-total DARKNESS (eggs are photosensitive and die if exposed to light!), 2) EXTREMELY SOFT WATER (GH <1, KH 0)—use RO water or collected rainwater, 3) ACIDIC pH 5.0-5.5 using peat moss or pH-down, 4) Temperature 24-25°C, 5) Separate conditioning of breeding pairs with live foods (daphnia, brine shrimp) for 2 weeks. Introduce pair into breeding tank at NIGHT. Spawning usually occurs at dawn.',
    fryCare: 'Eggs hatch in 24 hours but remain LIGHT-SENSITIVE for first 5 days—keep breeding tank in COMPLETE DARKNESS (cover with black fabric!). Fry are microscopic and require infusoria (green water) or liquid fry food for first week. After 7 days, introduce newly-hatched brine shrimp nauplii. Gradually increase lighting over 2 weeks. Mortality is VERY HIGH (50-70%) even with perfect care. Fry grow slowly: 1cm at 8 weeks. Maturity at 6-8 months.',
    notes: 'Neon breeding is considered one of the HARDEST projects for common aquarium fish. The combination of extreme water softness, total darkness, and photosensitive eggs makes success rare for home breeders. Most commercial Neons are bred in massive Asian farms using specialized RO systems and hormone injections. For hobbyists, breeding is a bucket-list challenge—not recommended for beginners.',
  },
  
  experienceData: {
    successRate: 0.70,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'neon-tetra-disease', cause: 'weak-genetics-from-mass-breeding', frequency: 0.30 },
      { issue: 'new-tank-syndrome', cause: 'added-to-uncycled-tank-under-8-weeks', frequency: 0.25 },
      { issue: 'predation-by-angelfish', cause: 'incompatible-tankmates', frequency: 0.15 },
      { issue: 'stress-faded-colors', cause: 'group-too-small-under-10', frequency: 0.10 },
      { issue: 'ich-outbreak', cause: 'temperature-shock-from-shipment', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 50, max: 150, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};
