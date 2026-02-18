import type { Species } from '../../types/species';

export const sparklingGourami: Species = {
  id: 'sparkling-gourami',
  slug: 'sparkling-gourami',
  imageUrl: '/images/species/sparkling-gourami.jpg',
  funFact: "Sparkling Gouramis are AUDIBLE CROAKING FISH producing distinctive clicking/croaking sounds you can actually hear during courtship and territorial disputes! They have specialized pectoral muscles with modified tendons acting like guitar strings - their pectoral fin rays pluck these tendons creating rhythmic croaking sounds (like tiny frogs!). Males croak loudly to attract females and warn rival males. Females even 'purr' during spawning (softer vibrating sounds). The croaking means they feel secure in their habitat - stressed fish go silent. They're labyrinth fish with specialized organs allowing them to breathe atmospheric air directly (can survive in low-oxygen water). They're perfect nano fish - one of the only true gouramis suitable for tanks as small as 30-40L! Despite tiny 3.5cm size, they have huge personalities with territorial displays and bubble-nesting behaviors. From Thai rice paddies!",

  imageCredit: {
    photographer: 'Dezinformator15',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sparkling_gourami.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0'
  },
  
  taxonomy: {
    scientificName: 'Trichopsis pumila',
    commonName: 'Sparkling Gourami / Pygmy Gourami / Croaking Gourami',
    family: 'Osphronemidae',
    origin: 'Southeast Asia (Thailand, Cambodia, Vietnam, Laos - rice paddies, shallow ponds, slow streams)',
    region: 'Asia',
    biotope: 'Rice paddies, shallow ponds, ditches, and slow-moving streams with dense vegetation, leaf litter, low oxygen, soft acidic water',
  },
  
  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 3.5,
    color: 'Jewel-like iridescent nano beauty! Semi-transparent brownish-olive body covered in brilliant iridescent blue-green spots forming horizontal rows along sides (sparkling like gems - species namesake!). Fins with red/blue trim and intricate patterns. Males more vibrant: Electric blue-green iridescence, pointed dorsal fins, brighter red fin edges, more elongated bodies. Females duller: Less intense colors, rounded fins, fuller rounder abdomens. Eyes with turquoise-blue sparkle. Under proper lighting they look like swimming jewels! Color intensifies during breeding displays',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 30,
    tempC: { min: 24, max: 28, ideal: 26 },
    ph: { min: 6.0, max: 7.5, ideal: 6.5 },
    gh: { min: 2, max: 10 },
    kh: { min: 1, max: 8 },
    flow: 'low',
    substrate: 'dark-sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'surface',
      preference: 0.7,
    },
    
    spaceNeeds: {
      horizontalCM: 40,
      verticalCM: 25,
      territories: 1,
    },
    
    bioloadMultiplier: 0.5,
  },

  habitat: {
    planting: 'dense',
    plantingNotes:
      'Sparkling Gouramis require very heavy planting replicating Southeast Asian rice paddies and ponds! They need: Floating plants (essential - Water Sprite, Amazon Frogbit, Red Root Floaters providing surface cover, bubble nest anchoring sites, security), tall plants reaching surface (Vallisneria, Ludwigia - they use these as territories), dense midwater planting (Java Fern, Anubias, Cryptocoryne - hiding spots). CRITICAL: Maintain air gap at water surface (2-3cm) - they breathe atmospheric air with labyrinth organs and need surface access! Dark substrate enhances their iridescent colors. They prefer shallow tanks (horizontal space over depth - 30-40cm height ideal). Dim to moderate lighting (bright light stresses them).',
    hardscape: ['Driftwood branches (territorial markers)', 'Leaf litter (Indian almond/Catappa leaves - blackwater replication)', 'Fine dark sand substrate (enhances colors)', 'Floating plant roots (bubble nest sites)', 'Surface access mandatory (labyrinth breathers!)'],
  },

  behavior: {
    tags: ['peaceful', 'territorial', 'bubble_nester', 'nano', 'labyrinth_fish'],
    minGroupSize: 2,
    description:
      'Sparkling Gouramis are tiny jewels with big personalities! Watch them constantly hover in midwater using pectoral fins for precise positioning. Males perform territorial displays: flaring fins, spreading gill covers, circling rivals, and producing AUDIBLE CROAKING SOUNDS (clicking/croaking you can hear across room!). They\'re labyrinth fish regularly swimming to surface to breathe air (distinctive gulping behavior - this is normal!). Males build bubble nests under floating plants for breeding. They\'re micropredators constantly hunting tiny organisms. CRITICAL: Males are territorial toward other males but peaceful toward tankmates. Croaking indicates they feel secure - stressed fish go silent. Very curious exploring all tank areas.',
    
    compatibility: {
      goodMates: ['Ember Tetras', 'Chili Rasboras', 'Pygmy Corydoras', 'Otocinclus', 'Harlequin Rasboras', 'Neon Tetras', 'All dwarf shrimp (100% shrimp-safe!)', 'Snails', 'Other peaceful nano fish', 'Small peaceful rasboras'],
      badMates: ['Bettas (territorial conflicts!)', 'Fast aggressive eaters (outcompete for food)', 'Large cichlids', 'Boisterous fish (Zebra Danios, Tiger Barbs)', 'Fin nippers', 'Goldfish (incompatible temps)', 'Other male gouramis (territorial!)'],
      notes:
        'Sparkling Gouramis are perfect nano community fish! They\'re peaceful toward non-gourami tankmates, never aggressive, 100% safe with shrimp (even tiny shrimplets - not predatory!). CRITICAL: Males are territorial toward other male gouramis (sparkling or other species) in small tanks. In 30-40L tanks: keep 1 male + 2-3 females or female-only groups. In 60L+ tanks: Can keep multiple males if heavily planted with sightline breaks and territories. They\'re slow eaters - avoid fast aggressive feeders (barbs, large danios) that outcompete them for food. Best with calm peaceful nano fish.',
      
      rules: [
        {
          type: 'requires',
          condition: 'air gap at water surface (2-3cm) - mandatory',
          reason: 'CRITICAL: Sparkling Gouramis are labyrinth fish breathing atmospheric air with specialized organs! They must have access to air-water interface to gulp air every 15-30 minutes. Filling tank to brim or covering surface completely = suffocation and death! Maintain 2-3cm air gap always. This is non-negotiable for labyrinth fish',
          severity: 'critical',
        },
        {
          type: 'warning',
          target: 'keeping multiple males in small tanks (under 60L)',
          reason: 'Males are territorial toward other male gouramis! In tanks under 60L, dominant male will stress/harass subordinates constantly. Keep 1 male + females or female-only groups in small tanks. Multiple males need 60L+ with heavy planting and territories',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'mixing with Bettas',
          reason: 'Sparkling Gouramis and Bettas are both labyrinth fish and territorial! They compete for similar territories and resources. Males display toward each other causing stress. Avoid mixing unless large heavily planted tanks 100L+',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'strong water flow',
          reason: 'Sparklings are from still/slow-moving water (rice paddies, ponds!) and struggle in high flow. Strong current = constant swimming stress, exhaustion, hiding. Keep flow very low - gentle filter output only',
          severity: 'medium',
        },
      ],
      
      idealTankmates: {
        surface: 6-10,
        midwater: '10-15',
        bottom: '6-10',
      },
    },
    
    aggressionLevel: {
      intraspecific: 5,
      interspecific: 1,
      territorial: 6,
    },
    
    activity: {
      level: 'moderate',
      peakTimes: ['all-day'],
      nocturnal: false,
    },
    
    socialStructure: {
      type: 'harem',
      maxMalesPerTank: 3,
    },
    
    finNipping: {
      risk: 'none',
      targets: [],
    },
  },

  care: {
    difficulty: 'beginner',
    diet: 'carnivore',
    effort: 'low',
    cost: 'low',
    specialRequirements: [
      'Air gap at surface (labyrinth breathers!) - mandatory', 
      'Floating plants (bubble nest sites, security)', 
      'Very low flow (still water preference)', 
      'Heavily planted tank (territories, hiding)', 
      'Small live/frozen foods (micropredators)', 
      'Peaceful tankmates only (slow eaters)', 
      'Shallow horizontal tanks preferred',
    ],

    proTips: [
      "Listen for croaking sounds! Males produce audible clicking/croaking during courtship and territorial displays using modified pectoral muscles as 'instruments' (tendons plucked by fin rays like guitar strings!). Croaking means they feel secure and comfortable. Silent fish = stressed/insecure. You can hear them across room in quiet times (mornings/evenings). Females even 'purr' softly during spawning (vibrating sounds). This vocalization is unique among nano fish!",
      "Maintain air gap - labyrinth organ requirement! They're labyrinth fish with specialized organs breathing atmospheric air. Watch them swim to surface every 15-30 minutes for air gulps (distinctive behavior - totally normal!). CRITICAL: Leave 2-3cm air gap between water surface and lid/cover. Never fill tank to brim or seal surface! Without air access = suffocation. This applies to all labyrinth fish (gouramis, bettas).",
      "Floating plants are mandatory! They need: 1) Bubble nest anchoring sites (males build nests under floating leaves), 2) Surface security (reduces skittishness), 3) Dim lighting (bright light stresses them). Best: Water Sprite, Amazon Frogbit, Red Root Floaters covering 50-70% surface. Males display most confidently under floating plant cover.",
      "Feed small live/frozen foods! They're micropredators with small mouths adapted for hunting tiny organisms. Best diet: Baby brine shrimp (live or frozen - triggers hunting instincts!), daphnia, micro-worms, grindal worms, cyclops, frozen bloodworms (chopped small). Can train onto high-quality micro-pellets (Fluval Bug Bites Nano) but live foods enhance color/breeding. Feed small amounts 2x daily. They're slow eaters - food must sink slowly past them.",
      "1 male : 2-3 females ratio in nano tanks! Males are territorial toward other males. In 30-40L tanks: keep single male with multiple females (spreads male attention) or female-only group. In 60L+ tanks: Can keep 2-3 males if heavily planted with sightline breaks creating separate territories. Multiple males display/croak at each other (natural competition - OK if space adequate).",
      "Shallow horizontal tanks preferred! They're from shallow rice paddies and prefer horizontal swimming space over depth. 30L long/shallow tank (60x30x25cm) better than 30L tall tank (30x30x40cm). They utilize horizontal space more effectively. Shallow tanks also facilitate surface breathing access.",
      "Still water essential! They're from nearly motionless rice paddies and struggle with flow. Use gentle sponge filters or baffle filter output. Strong current = stress, hiding, exhaustion. Test: floating plants should barely move. They thrive in calm planted tanks.",
    ],

    commonMistakes: [
      "Filling tank to brim/no air gap. Critical error! Sparklings are labyrinth fish needing atmospheric air access. Without air gap = suffocation! They must gulp air every 15-30 minutes. Always maintain 2-3cm air gap between surface and lid. Never seal surface completely.",
      "Keeping multiple males in small tanks. In tanks under 60L, males become territorial and stressed. Dominant male harasses subordinates constantly. Keep 1 male + females in nano tanks. Multiple males need 60L+ with heavy planting.",
      "Mixing with fast aggressive eaters. Sparklings are slow deliberate feeders! In tanks with barbs, large danios, or aggressive feeders: they get outcompeted for food → malnourishment, weight loss, death. Only peaceful slow-feeding tankmates.",
      "Too much water flow. They're from still water (rice paddies!) and struggle in high flow. Strong current from filters = constant stress, hiding, exhaustion. Keep flow minimal - gentle sponge filters ideal.",
      "Bright harsh lighting. They prefer dim conditions (shaded rice paddies). Bright open lighting = stress, pale colors, hiding. Add floating plants creating 50-70% surface coverage for security.",
      "Wrong foods. They're micropredators with small mouths! Large pellets or flakes = can't eat. Need small foods: baby brine shrimp, daphnia, micro-pellets. Feeding wrong foods = starvation despite abundant food.",
      "No floating plants. Males build bubble nests under floating plant leaves for breeding. Without floating plants = no nest building sites, less confident behavior, reduced breeding. Floating plants mandatory.",
    ],
    
    feeding: {
      frequency: 'twice-daily',
      primaryFoods: ['brine-shrimp', 'daphnia', 'bloodworms', 'micro-pellets'],
      supplements: ['cyclops'],
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
      notes: 'Weekly 30% water changes. Sparkling Gouramis are hardy nano fish tolerating wide parameter ranges! They prefer soft slightly acidic water (pH 6.0-7.5, GH 2-10) but adapt well. Thanks to labyrinth organs, they tolerate low oxygen conditions better than other fish (rice paddy adaptation!). Keep ammonia/nitrite 0ppm, nitrates under 40ppm. Very low flow essential (still water preference - use gentle sponge filters). Maintain air gap at surface always (labyrinth breathers need air access!). Indian almond leaves beneficial (tannins, antibacterial). Very forgiving maintenance making them perfect beginners.',
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
    commonDiseases: ['ich', 'velvet', 'labyrinth-organ-damage', 'fin-rot', 'fungal-infections'],
    sensitivities: ['Cold water (under 24°C)', 'Strong water flow (still water fish!)', 'Lack of surface access (labyrinth breathers!)', 'Dry air (labyrinth organ damage)', 'Copper medications'],
  },

  scientificContext: {
    wildHabitat:
      'Trichopsis pumila inhabits shallow slow-moving water bodies in Southeast Asia (Thailand, Cambodia, Vietnam, Laos). Wild habitat: Rice paddies (main habitat!), shallow ponds, ditches, swamps, slow-moving streams - water depth typically 10-50cm! Dense vegetation (floating and submerged plants), thick leaf litter substrate, soft acidic water (pH 6.0-7.0, GH 2-8), tannin-stained from decomposing organic matter, temps 25-28°C, still or very slow-moving water (nearly motionless!). CRITICAL: These habitats have low dissolved oxygen (hot, stagnant, shallow water) - their labyrinth organs evolved as adaptation allowing atmospheric air breathing for survival! They feed on micro-organisms, insect larvae, small crustaceans. Males establish small territories under floating vegetation for bubble nest building.',
    sexualDimorphism:
      'Easy to sex when mature! Males: More vibrant electric blue-green iridescence, pointed dorsal fins (elongated tips), brighter red/blue fin edges, more elongated streamlined bodies, produce croaking sounds (females mostly silent), more aggressive territorial displays. Females: Duller coloration (brownish with less sparkle), rounded fins (especially dorsal), rounder fuller abdomens especially when gravid (egg-filled), larger overall size, mostly silent (produce soft "purring" only during spawning). Juveniles difficult to sex until 4-6 months when coloration/fins develop.',
    variants: ['Trichopsis pumila (Sparkling Gourami - this species)', 'Trichopsis vittata (Croaking Gourami - larger, similar but distinct species)', 'Trichopsis schalleri (Three-Stripe Gourami - rare)'],
  },

  breeding: {
    method: 'bubble_nester',
    difficulty: 'beginner',
    trigger:
      'Sparkling Gourami breeding is very easy - one of easiest bubble-nesting fish! Natural triggers: 1) Presence of floating plants (nest building sites), 2) Well-conditioned fish with live foods (baby brine shrimp, daphnia - feed heavily 2 weeks), 3) Slightly warmer water (27-28°C), 4) Soft acidic water (pH 6.0-6.5), 5) Calm peaceful environment. Males constantly ready to breed - they build bubble nests spontaneously under floating leaves!',
    fryCare:
      'Breeding behavior: Male builds bubble nest under floating plant leaves (creates foam nest with saliva + air bubbles 5-10cm diameter). Male performs courtship displays: brilliant colors, loud croaking sounds, circling female, flaring fins. Female inspects nest. Spawning occurs under bubble nest: male embraces female in typical gourami "hug" (wraps body around her), female releases 5-20 eggs, male fertilizes and catches sinking eggs in mouth placing them in bubble nest. Spawning repeats 10-20+ times over hours producing 100-200 total eggs. Male guards nest aggressively! Remove female after spawning (male may attack her). Eggs hatch 24-36 hours (tiny transparent fry!). Fry free-swimming 3-4 days after hatch hanging near surface. CRITICAL: Remove male when fry free-swimming (may eat fry). First foods: Infusoria (paramecium, green water - days 1-7 critical!), liquid fry food, then baby brine shrimp (day 7+ - growth accelerates!), micro-pellets (3 weeks+). Feed fry 3-4x daily. Growth: 1cm at 6 weeks, 2cm at 3 months, sexually mature 5-6 months. Very easy breeding!',
    notes:
      'Sparkling Gouramis are extremely easy to breed - perfect beginner bubble-nester! They breed continuously in planted tanks with floating plants. Challenge isn\'t breeding (happens spontaneously!), it\'s managing fry care (need infusoria first week). Males build nests every few days. Many hobbyists have "surprise fry" appearing in community tanks! Key success: 1) Floating plants (mandatory nest sites), 2) Male guards nest (natural parenting), 3) Heavy feeding conditioning (plump healthy females), 4) Infusoria culture ready for fry. Very rewarding species!',
  },
  
  experienceData: {
    successRate: 0.75,
    survivalRate: 0.70,
    
    commonFailures: [
      { issue: 'suffocation-death', cause: 'no-air-gap-at-surface-labyrinth-breathers-need-air-access', frequency: 0.25 },
      { issue: 'male-aggression', cause: 'multiple-males-in-small-tanks-under-60l-territorial-stress', frequency: 0.20 },
      { issue: 'starvation', cause: 'outcompeted-for-food-by-fast-aggressive-eaters', frequency: 0.20 },
      { issue: 'stress-hiding', cause: 'strong-water-flow-still-water-species', frequency: 0.20 },
      { issue: 'stress-from-bright-lighting', cause: 'no-floating-plants-harsh-open-lighting', frequency: 0.15 },
    ],
    
    estimatedCosts: {
      initial: { min: 40, max: 100, currency: 'EUR' },
      monthly: { min: 5, max: 15, currency: 'EUR' },
    },
  },
};
