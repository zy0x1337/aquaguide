import type { Species } from '../../types/species';

export const pygmyCory: Species = {
  id: 'pygmy-cory',
  slug: 'pygmy-cory',
  imageUrl: '/images/species/pygmy-cory.jpg',
  funFact: "Pygmy Corys break all the Corydoras rules! While their cousins are devoted bottom-dwellers, these tiny rebels spend half their time hovering in midwater like miniature blimps. They school together in tight formations, drift through plants, and occasionally remember they're catfish and zoom down to vacuum the sand. It's like watching a swarm of adorable, confused submarines.",
  
  imageCredit: {
    photographer: 'Carnat Joel',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Corydoras_pygmaeus_carnat_joel_5.jpg',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/'
  },

  taxonomy: {
    scientificName: 'Corydoras pygmaeus',
    commonName: 'Pygmy Corydoras',
    family: 'Callichthyidae',
    origin: 'Brazil (Rio Madeira basin - tributary streams and flooded forests)',
    region: 'South America',
    biotope: 'Shallow, slow-moving tributary streams with sandy bottoms, dense marginal vegetation, and tangled tree roots',
  },
  
  visuals: {
    iconShape: 'depressed',
    adultSizeCM: 2.3,
    color: 'Silver-white body with horizontal black stripe from nose to tail, black spot on tail peduncle. Translucent fins with faint spotting',
  },
  
  environment: {
    type: 'freshwater',
    minTankSizeLiters: 40,
    tempC: { min: 22, max: 26, ideal: 24 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    gh: { min: 2, max: 12 },
    kh: { min: 1, max: 8 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'bottom',
      preference: 0.60,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 25,
      territories: 0,
    },
    
    bioloadMultiplier: 0.25,
  },
  
  habitat: {
    planting: 'dense',
    plantingNotes: 'Pygmies love heavily planted tanks. Unlike Bronze or Panda Corys that need open floor space, Pygmies use the entire water column and actually prefer forests of plants to weave through. Use fine-leaved plants (Cabomba, Water Sprite, Rotala) in the background and midground, moss (Java Moss, Christmas Moss) on hardscape, and floating plants (Salvinia, Frogbit) to diffuse light. They spend hours hovering among plant stems like tiny helicopters. Still provide some open sandy areas for their occasional bottom-foraging sessions.',
    hardscape: ['Smooth River Stones', 'Small Driftwood (Spider Wood)', 'Leaf Litter (Indian Almond, Oak)', 'Moss-covered decorations'],
  },
  
  behavior: {
    tags: ['shoaler', 'peaceful', 'bottom_dweller', 'midwater', 'nano', 'scaleless', 'active'],
    minGroupSize: 10,
    description: 'Pygmy Corys are the rebels of the Corydoras family. While their larger cousins (Bronze, Panda, Sterbai) are devoted bottom-dwellers, Pygmies spend 50-60% of their time hovering in midwater. They school in tight, synchronized formations like tiny fighter jets, darting through plants, pausing to drift, then suddenly zooming to the substrate to sniff for food. Their schooling behavior is mesmerizing—10-15 Pygmies moving as one organism, changing direction instantly. When feeding time comes, they remember they\'re catfish and descend en masse to vacuum the sand. Their barbels twitch constantly, sensing chemical trails. They\'re incredibly social and become noticeably stressed in groups under 10—they huddle, hide, and lose their confidence. In proper groups (12-15+), they own the tank, exploring every layer fearlessly.',
    
    compatibility: {
      goodMates: ['Ember Tetras', 'Chili Rasboras', 'Celestial Pearl Danios', 'Microrasboras (Phoenix, Kubotai)', 'Endler Guppies', 'Otocinclus', 'Dwarf Shrimp (Cherry, Crystal, Caridina)', 'Nerite Snails', 'Ramshorn Snails', 'Small Rasboras'],
      badMates: ['Bettas (sometimes nippy)', 'Large Cichlids', 'Goldfish', 'Aggressive Barbs', 'Large Tetras', 'Any fish >5cm with predatory tendencies'],
      notes: 'Pygmies are nano specialists. Their tiny size (2.3cm) makes them perfect for small tanks but vulnerable to anything remotely aggressive. They\'re ideal tankmates for other nano species that occupy different zones. Because Pygmies use midwater, they don\'t compete with bottom-dwellers like larger Corys might.',
      
      rules: [
        {
          type: 'requires',
          condition: 'sand substrate',
          reason: 'Gravel damages their ultra-delicate barbels. Pygmies have the finest whiskers of all Corydoras—gravel causes immediate erosion, infection, and inability to find food',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'group-size >= 10',
          reason: 'Pygmies are tight schoolers. Unlike larger Corys (6 is okay), Pygmies need 10+ to display natural behavior. In small groups they hide constantly and lose confidence',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'fish larger than 5cm with predatory instincts',
          reason: 'At 2.3cm, Pygmies are bite-sized snacks for larger fish. Even peaceful species like Angelfish might see them as food',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'nitrates < 20ppm',
          reason: 'Pygmies are more nitrate-sensitive than larger Corys. At 30-40ppm nitrates, they become lethargic and prone to disease. Weekly water changes mandatory',
          severity: 'medium',
        },
        {
          type: 'warning',
          target: 'bettas',
          reason: 'Hit or miss. Pygmies\' constant movement can trigger Betta aggression. Some Bettas ignore them; others chase relentlessly. Monitor closely',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 10-15,
        midwater: '10-15',
        bottom: '10-15',
      },
    },
    
    aggressionLevel: {
      intraspecific: 0,
      interspecific: 0,
      territorial: 0,
    },
    
    activity: {
      level: 'high',
      peakTimes: ['morning', 'afternoon', 'evening'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'school',
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
    cost: 'medium',
    specialRequirements: [
      'Groups of 10-15+ required for natural schooling behavior', 
      'Fine sand substrate mandatory (finest barbels of all Corys)', 
      'Nitrates must stay below 20ppm (more sensitive than larger Corys)',
      'Micro-sized foods required—their mouths are tiny!',
    ],

    proTips: [
      "Pygmies need large groups to shine. 6 Pygmies = stressed, hiding, boring. 15 Pygmies = confident school exploring every inch, synchronized swimming, constant activity. The difference is night and day. Save up and buy proper numbers.",
      "Feed MICRO-FOODS. Regular sinking wafers are too large for their tiny mouths. Use crushed flakes, micro-pellets (<0.5mm), finely ground spirulina, baby brine shrimp, or specialized nano fish foods. Watch them swarm like tiny piranhas!",
      "Midwater swimming is normal. New keepers panic when Pygmies hover in plants instead of sitting on the bottom like 'proper' Corys. This is their natural behavior! They evolved in shallow streams where midwater = safety from benthic predators.",
      "Pygmies are nitrate canaries. If your Pygmies become lethargic or start dying randomly, test nitrates immediately. They decline at 20-30ppm while other fish seem fine. This makes them excellent water quality indicators.",
      "Despite their size, Pygmies produce minimal bioload. 15 Pygmies = bioload of 3-4 Neon Tetras. You can keep surprisingly large groups in nano tanks (15-20 in a 40L) without overloading the filter.",
      "Breeding happens spontaneously in healthy groups. You'll randomly find tiny eggs on plants and glass. Females are picky egg-layers, placing each egg individually after careful inspection. Parents rarely eat eggs compared to larger Corys.",
    ],

    commonMistakes: [
      "Buying only 6-8 because they're more expensive than other Corys. This defeats the purpose! Pygmies need 10+ to school properly. In small groups they hide, stress, and never display their amazing synchronized swimming behavior.",
      "Using regular Cory pellets/wafers. These are too big! Pygmies nibble at large wafers but can't consume them efficiently. They need micro-pellets, crushed flakes, or baby-fish-sized foods. Underfeeding kills more Pygmies than overfeeding.",
      "Assuming all Corys have identical care. Pygmies are more nitrate-sensitive, need larger groups (10+ vs 6), require finer sand, and eat smaller foods than Bronze or Panda Corys. Don't apply Bronze Cory care to Pygmies!",
      "Mixing with any fish over 5cm. 'Peaceful' is relative. Even non-aggressive larger fish might accidentally inhale a 2.3cm Pygmy or stress them through sheer size intimidation. Stick to nano tankmates.",
      "Expecting 10-year lifespans like larger Corys. Pygmies live 3-5 years max, even in perfect conditions. This is normal for their size. They're not 'fragile'—just naturally shorter-lived like most nano fish.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['micro-pellets', 'flakes', 'brine-shrimp', 'daphnia'],
      supplements: ['spirulina', 'bloodworms', 'tubifex'],
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
      notes: 'Pygmies are nitrate-sensitive. Weekly 30% water changes are mandatory to keep nitrates under 20ppm. Use gentle siphon to avoid sucking up tiny Pygmies! Vacuum sandy areas gently to prevent anaerobic pockets.',
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
    commonDiseases: ['barbel-erosion', 'ich', 'fungal-infections', 'columnaris', 'internal-parasites'],
    sensitivities: ['High nitrates (>20ppm)', 'Sharp substrate', 'Copper medications (scaleless)', 'Salt (low tolerance)', 'Temperature shocks', 'Poor water quality'],
  },
  
  scientificContext: {
    wildHabitat: "Pygmy Corys inhabit shallow tributary streams and flooded forest pools in the Rio Madeira basin, Brazil. These are slow-moving, soft-water environments (pH 6.0-6.5, GH <5) with sandy/muddy bottoms covered in leaf litter and dense marginal vegetation. Water depth is often just 10-30cm. During dry season, they congregate in shrinking pools, forming massive schools of hundreds. The midwater swimming behavior evolved as protection—in ultra-shallow water, staying near the bottom exposes them to benthic predators (larger catfish, cichlids). By hovering midwater near vegetation, they avoid bottom threats while staying hidden from surface predators (birds). This unique behavior is a direct adaptation to their shallow-water habitat.",
    sexualDimorphism: "Subtle when young, obvious when mature. Females are noticeably rounder and deeper-bodied, especially when gravid (carrying eggs). Males are slimmer, smaller, and more streamlined. From above, gravid females look like tiny footballs while males look like torpedoes. During breeding, females become very round—almost comically plump.",
    variants: ['Standard Pygmy (wild-type)', 'Captive-bred (more common, hardier)'],
  },
  
  breeding: {
    method: 'egg_layer',
    difficulty: 'beginner',
    trigger: 'Pygmies breed spontaneously in healthy, well-fed groups. No special triggers needed! Condition group with live/frozen foods (baby brine shrimp, daphnia, micro-worms) and perform regular cool water changes (23°C water added to 24°C tank). Females choose males through "courtship inspection"—swimming along the male, checking him out from multiple angles before deciding. Rejected males try again with different females.',
    fryCare: 'Females lay 3-8 eggs per spawning event, placing each egg individually on plants, moss, or glass after careful inspection. Eggs are tiny (1mm), translucent, and sticky. Unlike larger Corys, Pygmy parents rarely eat eggs. Fry hatch in 3-4 days and are microscopic (<2mm). Initial feeding is critical—use infusoria, green water, or ultra-fine powdered fry food for 5-7 days. After one week, introduce micro-worms and newly-hatched baby brine shrimp. Growth is slow—fry reach 1cm at 6-8 weeks. Many breeders simply leave eggs in heavily planted tanks and find juvenile Pygmies appearing randomly.',
    notes: 'Pygmy breeding is surprisingly easy if you have large groups (15+) and pristine water quality. In perfect conditions, healthy females spawn weekly, laying small batches continuously. The challenge isn\'t triggering spawning—it\'s raising the tiny fry, which require microscopic foods and daily water changes.',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'underfeeding-starvation', cause: 'food-too-large-or-insufficient-micro-foods', frequency: 0.25 },
      { issue: 'nitrate-poisoning', cause: 'nitrates-over-20ppm', frequency: 0.20 },
      { issue: 'group-too-small-stress', cause: 'fewer-than-10-fish', frequency: 0.18 },
      { issue: 'barbel-erosion', cause: 'gravel-substrate', frequency: 0.15 },
      { issue: 'predation', cause: 'tankmates-too-large', frequency: 0.12 },
    ],
    
    estimatedCosts: {
      initial: { min: 60, max: 140, currency: 'EUR' },
      monthly: { min: 6, max: 15, currency: 'EUR' },
    },
  },
};
