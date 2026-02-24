import type { Species } from '../../types/species';

export const axolotl: Species = {
  id: 'axolotl',
  slug: 'axolotl',
  imageUrl: '/images/species/axolotl.jpg',
  funFact: "The Axolotl (Ambystoma mexicanum) is a walking miracle of nature! Unlike other salamanders, they stay aquatic babies forever through neoteny, keeping their feathery external gills and tadpole features for life! Watch their superpowers: regenerating entire limbs, spinal cord, heart tissue, and even parts of brain within weeks (scientists study them for human medicine!), changing color based on mood (stress makes them pale!), and smiling constantly with their adorable upturned mouth! Here's the tragic part: they are critically endangered in wild (less than 1000 remain in polluted Lake Xochimilco canals near Mexico City), but millions thrive in captivity worldwide! They MUST have cold water (16-18°C, hot water kills them!), produce massive waste requiring powerful filtration, and bite everything including each other (cannibalistic tendencies!). Personality packed prehistoric creatures that never grow up!",

  imageCredit: {
    photographer: 'Pixabay',
    sourceUrl: 'https://pixabay.com/photos/axolotl-mexican-salamander-animal-6934866/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },
  
  taxonomy: {
    scientificName: 'Ambystoma mexicanum',
    commonName: 'Axolotl / Mexican Walking Fish / Mexican Salamander',
    family: 'Ambystomatidae',
    origin: 'Central Mexico (Lake Xochimilco, Lake Chalco near Mexico City - now only Xochimilco canals remain)',
    region: 'North America',
    biotope: 'High altitude freshwater lakes and canals (2200m elevation) with cold water, dense aquatic vegetation, muddy substrates, slow current, heavily planted with refuges',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 30,
    color: 'Wild type: Dark brown to black with gold speckling creating mottled pattern! Distinctive features: Six feathery external gills on each side of head (look like pink or red feather dusters, move rhythmically!), broad flat head with wide smiling mouth (permanent grin!), lidless eyes, four fingers on front legs and five toes on back legs, long tail with fin running along top (60% of body length!). Captive color morphs: Leucistic (pale pink body with black eyes, most popular!), Albino (white or golden with red/pink eyes), Golden Albino (bright yellow-gold with pink gills), Melanoid (solid black no shine), Copper (brownish orange), Wild type (rare in captivity!). All variants keep external gills and baby features (neoteny!). Juveniles look like miniature adults with proportionally larger gills.',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 110,
    tempC: { min: 15, max: 20, ideal: 17 },
    ph: { min: 7.4, max: 7.6, ideal: 7.5 },
    gh: { min: 7, max: 14 },
    kh: { min: 3, max: 8 },
    flow: 'low',
    substrate: 'fine-sand',
    
    swimmingZone: {
      primary: 'bottom',
      secondary: 'midwater',
      preference: 0.95,
    },
    
    spaceNeeds: {
      horizontalCM: 90,
      verticalCM: 40,
      territories: 1,
    },
    
    bioloadMultiplier: 5.0,
  },

  habitat: {
    planting: 'moderate',
    plantingNotes:
      'Axolotls do well with moderate planting but plants must tolerate cold water (16-18°C)! Best plants: Java Fern (cold tolerant, attached to driftwood), Anubias species (hardy in cold water, large leaves provide shade), Marimo moss balls (cool water lovers, reduce nitrates!), Java Moss (carpeting option), floating plants (Water Lettuce, Amazon Frogbit for shade and nitrate control). Avoid: Delicate plants (axolotls are clumsy and may uproot), sharp plants (injure delicate skin), tropical plants requiring 24°C+ (die in cold water!). Plant density: Moderate with hiding spots, not too dense (axolotls need open floor space for walking). They rarely damage plants intentionally but may uproot them while walking. Provide shaded areas, they dislike bright light!',
    hardscape: ['Large smooth caves (15cm+ openings for full body hiding)', 'Smooth slate hiding spots (no sharp edges, damage delicate skin!)', 'Large smooth river rocks (hide spots and enrichment)', 'PVC pipe caves (10cm diameter minimum)', 'Smooth terracotta pots (break in half creates perfect caves)', 'Driftwood for plant attachment (smooth only!)'],
  },

  behavior: {
    tags: ['peaceful', 'nocturnal', 'solitary'],
    minGroupSize: 1,
    description:
      'Axolotls are peaceful curious creatures displaying unique prehistoric behaviors! They are bottom walkers not swimmers, using four legs to walk along substrate (hence Mexican Walking Fish!). Watch their adorable behaviors: Smiling constantly (upturned mouth creates permanent grin!), yawning widely (opening mouth extremely wide, not actual yawn but filter feeding or gill flushing!), floating motionless mid water (gulping air to regulate buoyancy, normal behavior!), rapid gill fluttering when stressed or oxygen low. They have poor eyesight relying on smell and lateral line (sense vibrations) to find food. Display remarkable intelligence: learning feeding times, recognizing owners (swim to glass during feeding!), investigating new tank items. CRITICAL: Cannibalistic tendencies mean they bite anything that moves including tank mates and especially each other! Adults may nip gills or limbs of other axolotls (thankfully regenerate!). Generally peaceful toward humans, tolerate gentle handling (use wet hands only, dry skin burns them!). Nocturnal but adjust to owner feeding schedule. Stress signs: Forward facing gills (normal gills point backward relaxed), pale color (stressed axolotls lose pigment!), rapid gill movement, floating constantly.',
    
    compatibility: {
      goodMates: ['Other axolotls (SAME SIZE AND AGE only, provide 110L+ per individual!)', 'Fast small fish (White Cloud Minnows, Guppies, possible but risky, often eaten!)', 'Large snails (Apple snails, Mystery snails, may survive but at risk)'],
      badMates: ['ANY FISH (most eaten, survivors may nip axolotl gills!)', 'Plecos (latch onto axolotls eating slime coat, fatal wounds!)', 'Shrimp (instant snack)', 'Goldfish (produce toxins harmful to axolotls)', 'Tropical fish (require warm water 24°C+, incompatible!)', 'Smaller or larger axolotls (size difference equals cannibalism!)', 'Crayfish (attack and injure axolotls)'],
      notes:
        'Axolotls are BEST KEPT ALONE or with same size same age individuals! They have cannibalistic instincts: anything moving equals potential food (bite first, ask questions later!). Attempting tankmates results in: 1) Small fish/shrimp eaten immediately, 2) Large fish (plecos) attack axolotl gills causing fatal wounds, 3) Other axolotls bite each other (nip gills, limbs, tails) especially during feeding. CRITICAL: Even successful cohabitation has risks. If keeping multiple axolotls: MUST provide 110L minimum per individual (two axolotls need 220L minimum, 280L preferred!), ensure exact same size and age (size difference triggers cannibalism, larger eats smaller!), feed separately to reduce competition aggression, provide multiple hides reducing territorial disputes. Watch for injuries: bitten gills (fluffy damaged appearance), missing limbs (regenerate but stressful!), bite marks on body. Many keepers attempt White Cloud Minnows or Guppies as tank mates (cold tolerant fish) but success rate low, most eventually eaten. Safest approach: solo axolotl in species only tank. They are solitary ambush predators not social creatures!',
      
      rules: [
        {
          type: 'requires',
          condition: '110L minimum per axolotl (180L strongly recommended)',
          reason: 'Axolotls grow to 30cm and produce MASSIVE bioload (5.0x waste)! Smaller tanks (under 110L) cause: constant ammonia spikes (axolotls extremely sensitive!), stunted growth, chronic stress, disease. 110L is bare minimum for single adult, 180L much better providing stable water quality. Multiple axolotls need 110L EACH minimum. Tank floor space more important than height (bottom walkers!)',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'cold water 16-18°C mandatory, never exceed 20°C',
          reason: 'CRITICAL: Axolotls are cold water amphibians! Temperatures over 20°C cause: rapid stress, loss of appetite, fungal infections, organ failure, DEATH within days at 24°C+. They CANNOT tolerate tropical temperatures! Most failures from wrong temperature. Must use chiller in warm climates or keep in cool room. No exceptions!',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'gravel substrate or rough decorations',
          reason: 'Axolotls have extremely delicate skin! Gravel causes: impaction if swallowed (they suck up everything!), skin injuries from rough texture, bacterial infections from wounds. Sharp decorations cut skin. Use only: fine sand (1mm, safe if swallowed), bare bottom (easy cleaning but less natural), smooth decorations only. NO gravel ever!',
          severity: 'critical',
        },
        {
          type: 'avoid',
          target: 'mixing different sized axolotls or tankmates',
          reason: 'Axolotls are cannibalistic! Size difference triggers predation: larger axolotl views smaller as food (bites, eats limbs/gills, may kill!). Even adults nip each other during feeding. Most fish either eaten OR attack axolotl gills (plecos especially dangerous!). Cohabitation extremely risky. Solo housing is safest',
          severity: 'high',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '0',
        bottom: '0-1',
      },
    },
    
    aggressionLevel: {
      intraspecific: 6,
      interspecific: 4,
      territorial: 3,
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
      risk: 'moderate',
      targets: ['anything that moves, including other axolotls gills and limbs!'],
    },
  },

  care: {
    difficulty: 'moderate',
    diet: 'carnivore',
    effort: 'high',
    cost: 'high',
    specialRequirements: [
      '110L minimum tank per axolotl (180L recommended)', 
      'COLD WATER 16-18°C mandatory (aquarium chiller required in warm climates!)', 
      'Powerful filtration handling high bioload (canister filter 4-5x turnover)', 
      'Fine sand substrate (1mm) or bare bottom only (NO gravel!)', 
      'Low flow (strong current stresses them)', 
      'Dim lighting (bright light stresses, causes illness)', 
      'No sharp decorations (delicate skin easily damaged)', 
      'Weekly 20-30% water changes (high bioload)',
    ],

    proTips: [
      "Temperature control is LIFE OR DEATH! Axolotls are cold water animals requiring 16-18°C constantly. Above 20°C causes stress, over 22°C causes disease, 24°C+ equals death within days! Most failures from wrong temperature. Solutions: 1) Keep tank in coolest room (basement ideal), 2) Use aquarium chiller (€150-400, necessary in warm climates!), 3) Clip-on fans over water (cheap temporary cooling), 4) Frozen water bottles floated in tank (emergency only, causes temperature swings!). Test temperature 2x daily, stable cool water equals healthy axolotl. No heaters ever!",
      "Fine sand substrate is CRITICAL for safety! Axolotls suck up food with powerful suction (vacuum-like!), accidentally swallowing substrate. Gravel causes fatal impaction (blocks digestive system, death within weeks!). Options: 1) Fine sand 1mm or smaller (safe to pass if swallowed, natural behavior), 2) Bare bottom tank (easiest cleaning but less natural, no burrowing). NEVER use: gravel (any size!), small rocks, aquarium soil (causes impaction). Watch for impaction signs: bloated belly, floating, not pooping (emergency!). Fine sand allows natural behaviors like burrowing.",
      "Powerful filtration is mandatory but low flow critical! Axolotls produce MASSIVE waste (bioload 5.0x!) needing strong biological filtration, BUT strong current stresses them (poor swimmers!). Solution: Large canister filter rated for 2x tank size with spray bar output pointed at glass or surface (diffuses current!). Alternative: sponge filter provides gentle flow but needs frequent cleaning (weekly!). Baffle strong filter outputs, axolotls should walk calmly not fight current. Test ammonia/nitrite weekly, must stay 0ppm! Nitrates under 20ppm ideal.",
      "Diet variety prevents nutritional deficiencies! Staple: Earthworms (nightcrawlers, red wigglers, favorite food! 2-3 worms per feeding). Variety 2-3x weekly: Frozen bloodworms (thaw first!), Frozen brine shrimp, Live blackworms (occasional treat), Axolotl pellets (Hikari brand good backup), Salmon pellets. Feeding: Adults 2-3x weekly, juveniles daily, remove uneaten food after 10min (prevents ammonia spikes!). Avoid: Feeder fish (carry parasites and diseases!), Mammalian meat (cannot digest), Hard shelled foods (shrimp with shell causes impaction). Feed with tongs, they learn quickly!",
      "Watch for regeneration magic but prevent injuries! Axolotls regenerate: limbs (4-6 weeks), gills (2-3 weeks), tail (6-8 weeks), even spinal cord! If injured: maintain pristine water (0ppm ammonia/nitrite!), increase water change frequency (daily 20% until healed), ensure 16-18°C temperature (speeds healing), reduce stress (dim lights, hide spots). New limbs grow back perfectly! But prevention better: remove aggressive tank mates, use smooth decorations only, avoid sharp objects, reduce feeding competition. Regeneration is amazing but stressful for axolotl.",
      "Understand yawning and floating behaviors! Axolotls yawn (open mouth extremely wide) which looks concerning but normal! Reasons: gill flushing (clearing debris), filter feeding (catching particles), jaw stretching. Floating is also normal: they gulp air to regulate buoyancy! Concerning signs: constant floating (may indicate bloat or water quality issues), rapid gill movement (low oxygen or high ammonia!), forward gills (stress), pale color (stressed). Learn normal vs stressed behaviors.",
      "Cycled tank is NON-NEGOTIABLE before adding axolotl! Axolotls extremely sensitive to ammonia/nitrite (more than most fish!). Uncycled tank equals death within days. Cycle tank 4-6 weeks before adding axolotl: add ammonia source, test daily, wait for nitrite spike then drop (beneficial bacteria established). Only add axolotl when: ammonia 0ppm, nitrite 0ppm, nitrate under 20ppm for 1 week straight. Use API Freshwater Master Test Kit (accurate!). Never skip cycling, no exceptions!",
    ],

    commonMistakes: [
      "Wrong temperature (too warm!). BIGGEST KILLER! 60% of axolotl deaths from temperature over 20°C. Many keepers think 22-24°C acceptable (typical tropical aquarium) but axolotls rapidly sicken: stop eating, develop fungal infections, organ failure, death within weeks. They are cold water animals needing 16-18°C constantly! Must use chiller in warm climates or keep in cool room. No compromises, temperature is life or death!",
      "Gravel substrate. Second biggest mistake! Axolotls suck up food with powerful suction accidentally swallowing gravel which causes fatal impaction (blocks intestines, slow painful death!). Symptoms: bloated belly, floating, not pooping, lethargic. Treatment requires surgery (expensive, risky!). Use fine sand (1mm) or bare bottom only. Many pet stores incorrectly sell axolotls with gravel, refuse it!",
      "Mixing with fish or wrong sized tank mates. Most fish either: 1) Eaten by axolotl (Guppies, small tetras become expensive snacks!), 2) Attack axolotl (Plecos latch onto skin eating slime coat, cause fatal wounds!). Even peaceful fish may nip gills. Mixing different sized axolotls equals cannibalism (larger bites smaller!). 90% of cohabitation attempts fail. Solo housing is safest and reduces stress significantly.",
      "Weak filtration or skipping cycling. Axolotls produce MASSIVE waste (bioload 5.0x!) requiring powerful biological filtration. Undersized filter or uncycled tank causes: constant ammonia/nitrite spikes (axolotls extremely sensitive, rapid death!), chronic stress, disease. Must: cycle tank 4-6 weeks minimum, use filter rated for 2x tank size, test water weekly. Many deaths in first month from uncycled tanks!",
      "Bright lighting. Axolotls are nocturnal with no eyelids (cannot close eyes!). Bright lights cause: extreme stress, pale coloration, hiding constantly, loss of appetite, illness. They need dim lighting or heavily shaded tanks. Use: low wattage LED (under 0.5 watts per liter), floating plants for shade, timer for 8hr photoperiod. Happy axolotls have vibrant colors in dim light.",
      "Ignoring stress signals. Axolotls show stress through: forward facing gills (normal gills sweep backward!), rapid gill fluttering, pale color (losing pigmentation!), constant floating, hiding always, not eating. Ignoring these signs leads to disease and death. If stressed: test water immediately (ammonia/nitrite likely high!), check temperature (above 20°C?), ensure hiding spots, reduce lighting. Catch problems early!",
    ],
    
    feeding: {
      frequency: 'three-times-weekly',
      primaryFoods: ['live-earthworms', 'frozen-bloodworms', 'axolotl-pellets'],
      supplements: ['frozen-brine-shrimp', 'live-blackworms'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 25,
      waterChangeFrequency: 'weekly',
      vacuumingNeeded: true,
      notes: 'Axolotls require consistent maintenance due to high bioload! Weekly 20-30% water changes mandatory with temperature matched water (16-18°C!). Vacuum substrate thoroughly especially around feeding areas (uneaten food causes ammonia spikes!). Test parameters weekly: ammonia 0ppm, nitrite 0ppm, nitrate under 20ppm (under 10ppm ideal!), pH 7.4-7.6. Use dechlorinator (Seachem Prime best) treating for chlorine/chloramine (both toxic to axolotls!). Clean filter monthly: rinse media in old tank water (never tap water kills beneficial bacteria!). Spot clean daily with turkey baster removing waste/uneaten food. Stress shows through: pale color, forward gills, rapid gill movement (test water immediately!). Pristine cold stable water equals happy healthy axolotl.',
    },
    
    equipment: {
      heater: {
        required: false,
        watts: 0,
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
    lifespanYears: 15,
    commonDiseases: ['fungal-infections', 'bacterial-infections', 'impaction', 'ammonia-burns', 'stress-related-illness', 'gill-damage'],
    sensitivities: ['Temperature over 20°C (LETHAL!)', 'Ammonia and nitrite (extremely sensitive!)', 'Chlorine and chloramine', 'Salt (often recommended incorrectly, dangerous!)', 'Rough substrates (gravel causes impaction!)', 'Bright lighting', 'Strong currents', 'Dry skin contact (always use wet hands!)'],
  },

  scientificContext: {
    wildHabitat:
      'Ambystoma mexicanum inhabits high altitude (2200m) freshwater lakes and canals of Xochimilco near Mexico City, Mexico. Historical habitat (now mostly destroyed): Cold clear lakes (14-20°C year round) with dense aquatic vegetation (underwater forests!), muddy substrates rich in invertebrates, slow to no current, abundant refuges among plant roots and rocks. They are neotenic salamanders meaning they never metamorphose into terrestrial adults, remaining aquatic with external gills entire life (unique among salamanders!). Wild behavior: Ambush predators hiding in vegetation, hunting small fish, aquatic insects, crustaceans, worms, mollusks using smell and lateral line (poor eyesight!). Active primarily at night walking on lake bottom. CRITICALLY ENDANGERED in wild: less than 1000 individuals remain due to: habitat destruction (lakes drained for Mexico City expansion!), water pollution (sewage, agricultural runoff), invasive species (Tilapia and Carp eat axolotl eggs/young), urbanization. Conservation efforts ongoing but wild populations collapsing. Ironically millions thrive in captivity worldwide while wild cousins face extinction. All pet axolotls captive bred (wild collection illegal!).',
    sexualDimorphism:
      'Difficult to sex until mature (8-12 months). Males: More slender body, longer tail, visible bulge behind back legs (cloaca swollen with sperm glands, obvious in adults!), during breeding season releases spermatophores (sperm packets) which female picks up. Females: Rounder plumper body especially when gravid (carrying eggs, belly obviously swollen!), shorter tail, flat cloaca area (no bulge). Best method: check cloaca area from above, males have obvious bulge, females flat. Juveniles impossible to sex reliably. Vent sexing easiest in mature adults 12+ months.',
    variants: ['Wild type (dark brown with gold speckles)', 'Leucistic (pink body with black eyes, most popular!)', 'Albino (white with red eyes)', 'Golden Albino (yellow-gold with pink gills)', 'Melanoid (solid black)', 'Copper (orange-brown)', 'Chimera (split coloration, rare!)', 'Mosaic (mixed patches)', 'GFP (green fluorescent protein, glow under UV!)', 'Piebald (patchy coloration)'],
  },

  breeding: {
    method: 'egg_layer',
    difficulty: 'moderate',
    trigger:
      'Axolotl breeding requires mature adults (12+ months) and seasonal simulation! Breeding typically happens naturally in late winter to early spring mimicking wild season. Triggers: 1) Cooling period: gradually lower temperature to 12-14°C for 2 months (winter simulation), 2) Then raise temperature slowly to 18-20°C (spring warming triggers breeding!), 3) Increase day length (photoperiod 12-14 hours simulates spring), 4) Heavy feeding with high protein foods (earthworms, bloodworms) for 3 weeks builds breeding condition. Male begins courtship dance: swimming erratically, tail undulating, nudging female, releasing pheromones (chemicals trigger female receptivity!). He deposits spermatophores (sperm packets) on substrate which female picks up with cloaca. Fertilization internal! Female lays 100-300 eggs within 24 hours.',
    fryCare:
      'Axolotl breeding produces HUGE numbers of offspring requiring massive setup! Eggs: Female lays 100-300 eggs individually attaching to plants or decorations (large jelly covered eggs). Remove adults immediately (they eat own eggs!). Eggs hatch in 10-14 days at 18°C. Larvae: Hatch tiny (1cm) with external gills, absorb yolk sac first 3 days. First food: live baby brine shrimp (Artemia nauplii) 3x daily starting day 4-5. Week 2-3: transition to chopped blackworms, microworms. Week 4+: chopped earthworms, small bloodworms. Growth: 2cm at 1 month, 5cm at 2 months, 10cm at 4 months. CRITICAL challenges: 1) Cannibalism starts at 2-3 weeks (larger larvae eat smaller!), must separate by size into multiple tanks, 2) Daily 50% water changes mandatory (ammonia spikes from waste!), 3) Need 10-20 tanks by month 2 (200+ surviving larvae!), 4) Constant feeding 3x daily (huge time commitment!). Most breeders cull weak/deformed larvae reducing numbers. Raising 300 larvae to adults requires: massive space, months of daily maintenance, hundreds of euros in food/supplies. Breeding easy, raising offspring extremely difficult!',
    notes:
      'Axolotl breeding is easy, raising babies is expert level challenge! Consider before breeding: Can you house 200+ juveniles? Can you afford food/equipment? Do you have homes for offspring? Most pet stores refuse axolotls (oversaturated market!). Breeding without plan for offspring results in: overcrowded tanks, stunted growth, cannibalism, euthanizing excess (tragic!). Responsible breeding requires: separate tank per 10 juveniles by month 2 (need 20+ tanks!), daily water changes, constant feeding, veterinary contacts for culling deformed individuals. Success stories exist but require extreme dedication. Many regret breeding after seeing workload! If breeding, plan ahead: contact local aquarium clubs, arrange sales before breeding, budget €500+ for supplies. Axolotls are critically endangered in wild, captive breeding important for conservation but must be done responsibly with homes arranged!',
  },
  
  experienceData: {
    successRate: 0.60,
    survivalRate: 0.65,
    
    commonFailures: [
      { issue: 'death-from-heat-stress', cause: 'temperature-over-20C-caused-organ-failure', frequency: 0.40 },
      { issue: 'impaction-from-gravel', cause: 'swallowed-gravel-substrate-blocked-intestines', frequency: 0.25 },
      { issue: 'ammonia-poisoning', cause: 'uncycled-tank-or-inadequate-filtration', frequency: 0.20 },
      { issue: 'injuries-from-tank-mates', cause: 'plecos-or-other-axolotls-bit-gills-limbs', frequency: 0.10 },
      { issue: 'fungal-infections', cause: 'warm-water-and-poor-water-quality', frequency: 0.05 },
    ],
    
    estimatedCosts: {
      initial: { min: 300, max: 800, currency: 'EUR' },
      monthly: { min: 20, max: 60, currency: 'EUR' },
    },
  },
};
