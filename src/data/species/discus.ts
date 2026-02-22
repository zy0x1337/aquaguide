import type { Species } from '../../types/species';

export const discus: Species = {
  id: 'cichlid-008',
  slug: 'discus',
  imageUrl: '/images/species/discus.jpg',
  funFact: "Discus are the 'Kings of the Freshwater Aquarium'—and they rule with absolute authority over water parameters! They're named for their perfectly round, disc-shaped bodies that look like colorful dinner plates swimming through your tank. Here's the wildest part: parent Discus produce SKIN MUCUS that their fry eat for the first 2-3 weeks of life—the babies literally graze on their parents' bodies like tiny aquatic vampires! Both parents take turns feeding the fry with this special 'discus milk.' In the wild Amazon, they school in groups of hundreds near submerged tree roots, creating underwater rainbows. But here's the catch: they're INSANELY sensitive—a stressed Discus can die from a dirty sponge filter or loud noise. They're the aquarium hobby's high-maintenance supermodels!",

  taxonomy: {
    scientificName: 'Symphysodon spp.',
    commonName: 'Discus',
    family: 'Cichlidae',
    origin: 'South America (Amazon River Basin - Brazil, Peru, Colombia, Venezuela)',
    region: 'South America',
    biotope: 'Slow-moving blackwater rivers, flooded forests, and tributaries with extremely soft, acidic, tannin-stained water (pH 4.2-6.5). Dense submerged root systems, leaf litter, driftwood tangles. Warm water (28-32°C), low flow, dim lighting from forest canopy',
  },

  visuals: {
    iconShape: 'compressed',
    adultSizeCM: 20,
    color: 'Perfectly round, laterally compressed disc-shaped body (hence "discus"). Wild-type: Brown/green base with stunning vertical bars, blue/turquoise iridescent stripes (stress bars), red/orange highlights. Countless aquarium varieties: Pigeon Blood (orange-red), Blue Diamond (solid blue), Snake Skin (vermiculated patterns), Leopard (spotted), Turquoise (blue-green), Red Melon (solid red), Checkerboard (patterned). Colors intensify/fade with mood—stressed Discus turn dark and dull. Fins are transparent with matching body color edges',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 280,
    tempC: { min: 28, max: 32, ideal: 30 },
    ph: { min: 5.0, max: 7.0, ideal: 6.0 },
    gh: { min: 1, max: 8 },
    kh: { min: 0, max: 4 },
    flow: 'low',
    substrate: 'sand',
    
    swimmingZone: {
      primary: 'midwater',
      secondary: 'all',
      preference: 0.75,
    },
    
    spaceNeeds: {
      horizontalCM: 120,
      verticalCM: 50,
      territories: 1,
    },
    
    bioloadMultiplier: 1.5,
  },

  habitat: {
    planting: 'moderate',
    plantingNotes: 'Discus tanks require careful balance: plants for aesthetic and shelter vs. bare-bottom for hygiene (many breeders use bare tanks for easier cleaning). Best compromise: Moderately planted with LARGE broad-leaf plants that tolerate high temps (28-30°C). Recommended: Large Amazon Swords (Discus hide behind leaves), Anubias species (bolted to driftwood), Java Fern (hardy), Vallisneria (tall background). AVOID delicate plants—high temps and frequent water changes stress them. Substrate: Fine sand or bare-bottom (controversial—bare is easier to clean but stressful for Discus). Vertical height critical—Discus are tall fish (20cm) that need vertical swimming space. Dim lighting preferred (floating plants like Amazon Frogbit create shade).',
    hardscape: ['MASSIVE vertical driftwood (creates territories and shelter)', 'Smooth river rocks (minimal—hygiene priority)', 'Indian Almond Leaves (tannins + antibacterial)', 'Alder Cones (blackwater effect)', 'Minimal hardscape—water quality is everything!'],
  },

  behavior: {
    tags: ['peaceful', 'shoaler', 'midwater', 'shy', 'diurnal', 'colorful', 'sensitive'],
    minGroupSize: 6,
    description: 'Discus are peaceful, social cichlids that form hierarchical shoals—they NEED groups of 6+ to feel secure. Keeping 1-3 causes chronic stress, aggression, and premature death. They\'re incredibly shy and skittish: sudden movements, loud noises, or bright lights send them into panic—stressed Discus crash into glass, refuse food, and turn dark. They spend most time hovering mid-tank near vertical driftwood or broad-leaf plants, slowly grazing and observing. Discus have social hierarchy: dominant fish (usually largest) gets prime feeding spots and breeding rights. Subordinates show "stress bars" (dark vertical stripes) when intimidated. They\'re SLOW feeders—it takes 10-20 minutes for them to finish meals (frustrating with fast tankmates). Breeding pairs are monogamous and fiercely protect spawning sites (vertical surfaces like driftwood, broad leaves, or breeding cones). Parents produce skin mucus that fry feed on—watching cloud of babies swarm parents\' bodies is surreal!',
    
    compatibility: {
      goodMates: ['Cardinal Tetras (huge schools 30+)', 'Rummynose Tetras', 'Corydoras Sterbai (tolerates high temps)', 'Otocinclus (algae control)', 'Apistogramma Dwarf Cichlids', 'Peaceful Loricariids (smaller plecos)', 'Rams (Mikrogeophagus)', 'Peaceful catfish (Ancistrus)'],
      badMates: ['Aggressive cichlids (Oscars, Jack Dempseys)', 'Fast aggressive feeders (barbs, danios)', 'Fin-nippers (Tiger Barbs, Serpae Tetras)', 'Large plecos (compete for food)', 'Angelfish (disease transmission + aggression)', 'Goldfish (temp incompatibility)', 'Most community fish (too fast/aggressive)'],
      notes: 'Discus compatibility is EXTREMELY LIMITED due to their extreme sensitivity, slow feeding, and high temperature requirements (28-30°C). Most community fish are too fast/aggressive or can\'t tolerate heat. BEST tankmates: Large schools (30+) of small, peaceful tetras (Cardinals, Rummynose) that occupy upper levels and don\'t compete for food. Corydoras Sterbai (only Cory species tolerating 30°C) for bottom. AVOID Angelfish despite being Amazonian cousins—they carry diseases/parasites that devastate Discus. Many expert Discus keepers recommend SPECIES-ONLY tanks (6-10 Discus, no tankmates) for maximum success. Discus are slow feeders—fast tankmates steal food before Discus finish eating.',
      
      rules: [
        {
          type: 'requires',
          condition: 'group size 6+ Discus',
          reason: 'CRITICAL: Discus are social shoaling fish with complex hierarchies. Keeping 1-3 causes severe stress, aggression, color loss, illness, and death. Minimum 6 fish; 8-10 ideal. This is NON-NEGOTIABLE for Discus welfare',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'pristine water quality (ammonia/nitrite 0, nitrate <10ppm)',
          reason: 'Discus are INSANELY sensitive to water quality. ANY ammonia/nitrite = death within days. Nitrates >20ppm = chronic stress and disease. Requires 30-50% water changes 2-3x weekly, excellent filtration, rigorous maintenance schedule',
          severity: 'critical',
        },
        {
          type: 'requires',
          condition: 'high temperature 28-30°C',
          reason: 'Discus need warmer water than most tropical fish (28-30°C vs standard 24-26°C). This limits tankmate options drastically—most fish stressed/die at these temps. Heater failure = death',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'angelfish',
          reason: 'Despite both being Amazonian cichlids, Angelfish carry parasites/pathogens (especially gill flukes) that devastate Discus. They also compete aggressively for food. NEVER mix despite store recommendations!',
          severity: 'high',
        },
        {
          type: 'avoid',
          target: 'fast aggressive feeders',
          reason: 'Discus are SLOW feeders (10-20 min to finish). Fast fish (barbs, danios, aggressive tetras) steal all food before Discus eat. Result: malnourished, stressed, dying Discus',
          severity: 'high',
        },
        {
          type: 'requires',
          condition: 'soft acidic water (pH 5.5-6.5, GH <6)',
          reason: 'Discus are extreme blackwater fish. Hard alkaline tap water (pH 7.5+, GH 15+) causes chronic stress, disease susceptibility, and shortened lifespan. Requires RO water or water softening',
          severity: 'high',
        },
        {
          type: 'warning',
          target: 'beginners',
          reason: 'Discus are NOT beginner fish despite pet store marketing. They require expert-level water quality management, expensive setup (€1000+), rigorous maintenance (10+ hours weekly), and specialized knowledge. 70%+ of beginner Discus die within first year',
          severity: 'critical',
        },
      ],
      
      idealTankmates: {
        surface: 0,
        midwater: '30-50',
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
      peakTimes: ['morning', 'afternoon'],
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
    difficulty: 'expert',
    diet: 'carnivore',
    effort: 'very-high',
    cost: 'very-high',
    specialRequirements: [
      'PRISTINE water quality (ammonia/nitrite 0, nitrate <10ppm)', 
      'Soft acidic blackwater (pH 5.5-6.5, GH <6) - RO water often required', 
      'High stable temperature 28-30°C (warmer than most tropicals)',
      'Groups of 6+ Discus MANDATORY (social fish)',
      'Frequent massive water changes (30-50% 2-3x weekly)',
      'Specialized diet (frozen/live foods, high-quality pellets)',
      'Quarantine protocol for new fish (disease prevention)',
      'Expensive initial setup (€1000-3000+)',
    ],

    proTips: [
      "Discus are NOT beginner fish! Pet stores sell them to beginners with catastrophic results. They require: 1) Pristine water (nitrate <10ppm = 30-50% water changes 2-3x weekly), 2) Soft acidic water (RO system often needed), 3) High temps (28-30°C), 4) Groups of 6+, 5) Specialized diet, 6) Expert disease management. If you can't commit 10+ hours weekly to maintenance = don't buy Discus. Success rate for beginners is <30%.",
      "Water quality is EVERYTHING. Discus die from parameter swings that other fish shrug off. You need: 1) Oversized canister filtration (2-3x tank volume turnover), 2) Weekly nitrate testing (must stay <10ppm), 3) Temperature controller (heater failure = death), 4) Dechlorinator (chlorine = death), 5) RO/DI system if tap water is hard (pH >7.5). Budget €500-1000 for filtration/water treatment alone.",
      "Buy quality juveniles from reputable breeders, not chain stores. Chain store Discus are often stunted, diseased, inbred, or mixed hybrids. Quality Discus cost €30-100 EACH (juveniles 5-8cm). Adults (15cm+) cost €100-300 each. Rare strains (Pigeon Blood, Blue Diamond) = €150-500. Budget €300-1000 for group of 6-10 juveniles. Cheap Discus = heartbreak.",
      "Feeding Discus is an art. They're slow, picky carnivores. Best foods: 1) Frozen bloodworms (daily staple), 2) Frozen brine shrimp, 3) Beefheart (controversial—high fat but Discus love it), 4) High-protein sinking pellets (Hikari Discus Bio-Gold), 5) Blackworms (live). Feed 2-3x daily, small portions. AVOID flakes (float away before Discus eat). Remove uneaten food immediately—Discus tanks must be spotless.",
      "Bare-bottom vs planted: Breeders use bare tanks for hygiene (easier to clean, no substrate harboring bacteria). Hobbyists prefer planted for aesthetics and Discus psychological health. Compromise: Fine sand substrate (easy to vacuum) with minimal plants (Amazon Swords, Anubias bolted to wood). NEVER deep gravel—traps waste.",
      "Temperature is critical! Discus thrive at 28-30°C but most plants/fish die at these temps. This is why Discus compatibility is so limited. Use TWO heaters for redundancy (one fails = backup prevents disaster). Invest in quality heaters (€50-100 each)—cheap heaters fail and cook/freeze your fish.",
      "Quarantine ALL new fish (including new Discus) for 4-6 weeks minimum. Discus are prone to internal parasites (hexamita, capillaria), gill flukes, and bacterial infections. One sick fish = entire tank infected = hundreds of euros lost. Quarantine tank needs: same parameters as main tank, sponge filter, heater, bare bottom for observation.",
    ],

    commonMistakes: [
      "Buying Discus as beginner fish. #1 killer! Stores sell them as 'beautiful community fish' without warning about extreme requirements. Result: dead fish within 3-6 months, €500-1000 lost, crushed spirits. Discus need 2-3 years aquarium experience minimum. Start with hardy fish (Tetras, Corys, Gouramis) first!",
      "Insufficient water changes. 'I do 25% weekly like other fish!' NOT ENOUGH. Discus need 30-50% water changes 2-3x weekly minimum to keep nitrates <10ppm. Less frequent changes = chronic stress, stunted growth, disease, death. This is 10+ hours weekly commitment. Can't commit = don't buy.",
      "Wrong water parameters. Discus in hard alkaline tap water (pH 7.5-8.5, GH 15-20) suffer chronic stress and die within year. You MUST test tap water and either: 1) Use RO/DI system + remineralize (€200-500 investment), 2) Mix tap with RO water, 3) Use rainwater (risky). Ignoring water chemistry = guaranteed failure.",
      "Keeping 1-3 Discus. 'I'll start with 2 and add more later!' NO. Discus are social fish that need groups of 6+ from day one. Small groups = aggression, stress, hiding, color loss, death. Minimum 6 fish is NON-NEGOTIABLE. Budget €300-1000 for initial group.",
      "Mixing with Angelfish. 'They're both Amazonian cichlids—perfect match!' WRONG. Angelfish carry parasites/diseases that devastate Discus (especially gill flukes). They also compete aggressively for food. This combo is aquarium hobby's most common mistake. NEVER mix!",
      "Cheap equipment. 'I'll use hang-on-back filter and basic heater!' Recipe for disaster. Discus need OVERSIZED canister filtration (€150-400), quality heaters with backups (€100-200), possible RO system (€200-500). Cutting corners = dead fish. Budget €1000-3000 total setup.",
      "Small tanks. '200L should be fine for 6 Discus!' Technically possible but extremely difficult. Minimum 280L realistic; 400-600L ideal. Larger tanks = more stable parameters = easier maintenance = higher success rate. Discus are 20cm diameter fish that need VERTICAL space (50cm+ tank height).",
    ],
    
    feeding: {
      frequency: 'three-times-daily',
      primaryFoods: ['bloodworms', 'brine-shrimp', 'pellets', 'beefheart'],
      supplements: ['blackworms', 'spirulina', 'color-enhancing-food'],
      vegetarian: false,
      liveFood: {
        required: false,
        recommended: true,
      },
      fastingDay: 'none',
    },
    
    maintenance: {
      waterChangePercentage: 40,
      waterChangeFrequency: 'twice-weekly',
      vacuumingNeeded: true,
      notes: 'Discus require THE MOST intensive maintenance of any aquarium fish. Mandatory: 30-50% water changes 2-3x weekly (not negotiable!), daily substrate vacuuming (remove all waste), weekly filter cleaning, daily nitrate/pH testing. Match new water temp exactly to tank (28-30°C) before adding—temp shocks = death. Use dechlorinator (chlorine = death). This is 10-15 hours weekly commitment. No shortcuts exist.',
    },
    
    equipment: {
      heater: {
        required: true,
        watts: 300,
      },
      filter: {
        required: true,
        type: 'canister',
        flowRate: 'low',
      },
      airstone: false,
      lighting: 'low',
      co2: false,
    },
  },

  health: {
    lifespanYears: 10,
    commonDiseases: ['hexamita', 'gill-flukes', 'ich', 'columnaris', 'internal-parasites', 'hole-in-head-disease'],
    sensitivities: ['Ammonia (instant death)', 'Nitrite (instant death)', 'Nitrates >20ppm (chronic stress)', 'Temperature fluctuations', 'pH swings', 'Chlorine/chloramine', 'Loud noises/vibrations', 'Sudden movements', 'Bright lights', 'Stress (weakens immune system)'],
  },

  scientificContext: {
    wildHabitat: "Discus inhabit slow-moving blackwater rivers, flooded forests (igapó), and tributaries throughout Amazon Basin (Brazil, Peru, Colombia, Venezuela). Wild habitat: EXTREMELY soft acidic water (pH 4.2-6.0, GH <2—almost distilled water!), heavily tannin-stained dark brown water (from decaying leaves), warm temps (28-32°C year-round), dense submerged root systems and driftwood tangles, dim light from forest canopy, low flow. They school in groups of dozens near vertical surfaces (tree roots, submerged logs), feeding on insects, larvae, small invertebrates, and detritus. During floods (rainy season), they move into flooded forests to spawn on submerged tree trunks and broad leaves.",
    sexualDimorphism: "Nearly impossible to sex visually until breeding! Both sexes look identical: same size, colors, fin shapes. Only reliable method: observe spawning behavior. Males develop pointed genital papilla (breeding tube) during spawning; females develop blunt, rounded papilla. Males are slightly more aggressive and dominant. Commercial breeders use 'venting' (examining papilla) but requires expert handling. Most hobbyists buy juvenile groups (8-10) and let them pair naturally—pairs form monogamous bonds and claim breeding territories.",
    variants: ['Wild Green Discus (Symphysodon aequifasciatus)', 'Wild Blue/Brown Discus', 'Wild Heckel Discus (Symphysodon discus)', 'Pigeon Blood (red-orange, most popular)', 'Blue Diamond (solid metallic blue)', 'Turquoise (blue-green iridescence)', 'Red Melon (solid red)', 'Snake Skin (vermiculated pattern)', 'Leopard (spotted)', 'Checkerboard (patterned)', 'Marlboro Red (intense red)', '100+ selectively bred color varieties'],
  },

  breeding: {
    method: 'substrate_spawner',
    difficulty: 'expert',
    trigger: 'Discus breeding is challenging but achievable with proper setup. Natural pairing: Buy group of 8-10 juveniles (5-8cm), raise together 12-18 months until sexually mature (15cm+). Pairs form naturally, claim territories, and spawn spontaneously. Breeding triggers: 1) Pristine water (nitrate <5ppm), 2) Large cool water change (40-50% with water 2°C cooler), 3) High-protein live foods (bloodworms, blackworms) 3x daily, 4) Breeding cone or broad-leaf plant (vertical spawning surface). Pairs become territorial and chase away other Discus. They clean spawning site obsessively for 2-3 days before laying eggs.',
    fryCare: 'Females lay 100-400 eggs on vertical surface (breeding cone, Amazon Sword leaf, driftwood). Both parents guard and fan eggs constantly. Eggs hatch in 48-60 hours at 30°C. Fry remain attached (wriggling) for 3-5 days absorbing yolk sacs. Then magic happens: fry become free-swimming and SWARM PARENTS\' BODIES to feed on skin mucus ("discus milk")! Both parents produce mucus that fry graze on for 2-3 weeks—cloud of babies covers parents like living carpet. After 3 weeks, start feeding newly-hatched brine shrimp. Parents guard fry for 6-8 weeks. Growth: 3cm at 2 months, 5-8cm at 6 months, 15cm+ at 18 months (breeding size). Fry require same pristine water as adults (30-50% changes 2x daily!). Survival rate low (30-50%) even with expert care.',
    notes: 'Discus breeding is expert-level project requiring dedicated breeding tank (200L+), perfect water parameters, high-quality breeding stock (€200-1000 per pair), and daily 30-50% water changes for fry. Many hobbyists successfully spawn pairs but struggle raising fry due to intensive care requirements. Commercial breeders use bare-bottom tanks, daily massive water changes (50-80%), and separate parents after 3-4 weeks (hand-rear fry). Watching fry swarm parents is one of aquarium hobby\'s most surreal experiences—like tiny piranhas grazing on their parents!',
  },
  
  experienceData: {
    successRate: 0.30,
    survivalRate: 0.40,
    
    commonFailures: [
      { issue: 'death-from-poor-water-quality', cause: 'insufficient-water-changes-nitrate-poisoning', frequency: 0.35 },
      { issue: 'disease-outbreak-hexamita-gill-flukes', cause: 'stress-poor-quarantine-protocol', frequency: 0.25 },
      { issue: 'chronic-stress-hiding-color-loss', cause: 'wrong-water-parameters-hard-alkaline-water', frequency: 0.18 },
      { issue: 'aggression-injuries-death', cause: 'group-too-small-under-6-fish', frequency: 0.12 },
      { issue: 'starvation-despite-feeding', cause: 'tankmates-too-fast-aggressive-steal-food', frequency: 0.10 },
    ],
    
    estimatedCosts: {
      initial: { min: 1000, max: 3000, currency: 'EUR' },
      monthly: { min: 80, max: 200, currency: 'EUR' },
    },
  },
};
