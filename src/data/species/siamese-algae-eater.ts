import type { Species } from '../../types/species';

export const siameseAlgaeEater: Species = {
  id: 'species-siamese-algae-eater',
  slug: 'siamese-algae-eater',
  imageUrl: '/images/species/siamese-algae-eater.jpg',
  funFact: "The SAE is one of only 3 fish species that reliably consume Black Brush Algae (BBA). Its specialized mouthparts scrape biofilm from rock surfaces like a living vacuum.",

  taxonomy: {
    scientificName: 'Crossocheilus atrilimes', 
    commonName: 'Siamese Algae Eater (SAE)',
    family: 'Cyprinidae',
    origin: 'Mekong + Chao Phraya basins (Thailand, Laos, Cambodia)',
    region: 'Asia',
    biotope: 'Fast-flowing hillstreams over limestone/pebble beds, heavy aufwuchs growth',
  },

  visuals: {
    iconShape: 'fusiform',
    adultSizeCM: 16, // True SAE reaches tank-buster size
    color: 'dark brown body, sharp black lateral stripe to tail, gold shoulder blaze',
  },

  environment: {
    type: 'freshwater',
    minTankSizeLiters: 120, // Single adult; pairs/groups need 200L+
    tempC: { min: 22, max: 27, ideal: 24 },
    ph: { min: 6.5, max: 7.5, ideal: 7.0 },
    gh: { min: 5, max: 15 },
    flow: 'high', // Powerhead mandatory
    substrate: 'smooth pebbles + biofilm rocks',
  },

  habitat: {
    planting: 'sparse',
    plantingNotes: 'Will not harm healthy plants. Prefers rock/driftwood biofilm surfaces.',
    hardscape: [
      'Polished river pebbles (main food source)', 
      'Driftwood branches', 
      'Limestone slabs', 
      'High-flow rock arrangements'
    ],
  },

  behavior: {
    tags: [
      'algae_eater', 
      'active', 
      'territorial', 
      'bottom_dweller', 
      'diurnal'
    ],
    minGroupSize: 3, // Singles become aggressive; groups share territory
    description: 'Hyperactive current-loving grazer. Scrapes aufwuchs with specialized mouth. Attacks identical-looking fish (Flying Foxes).',
    compatibility: {
      goodMates: [
        'Rainbowfish', 
        'White Cloud Mountain minnows', 
        'Hillstream loaches', 
        'Danios (fast species)'
      ],
      badMates: [
        'Chinese Algae Eater (Grows 30cm, aggressive)', 
        'Flying Fox (SAE attacks on sight)', 
        'Slow algae competitors (Otocinclus - outcompeted)'
      ],
      notes: '**Safe with adult shrimp but eats shrimplets**. Single OK in 120L+; groups need territories + space. Attacks lookalikes viciously.',
    },
  },

  care: {
    difficulty: 'medium',
    diet: 'herbivore',
    effort: 'medium',
    cost: 'medium',
    specialRequirements: [
      'High-flow powerhead (15x turnover)', 
      'Biofilm rocks/pebbles', 
      'Spirulina-based foods'
    ],
    proTips: [
      "**ID check**: True SAE stripe ends at tail + gold shoulder. Chinese Algae Eater = red stripe edges + grows 30cm.",
      "BBA control: Introduce when BBA present + hungry. Clean tanks = no algae = starvation.",
      "Supplemental feeding: Blanched zucchini/cucumber discs, spirulina wafers, nori clips.",
      "Flow test: They should swim head-down against current 24/7.",
      "Growth phases: 6cm year 1 → 12cm year 2 → 16cm year 4."
    ],
    commonMistakes: [
      "**Wrong species**: 90% 'SAEs' are Chinese Algae Eaters (aggressive monsters).",
      "Clean tank introduction → Starvation (no algae/biofilm).",
      "Low flow → Lethargy, no algae eating, early death.",
      "Multiple without territory → Constant fighting.",
      "No supplemental algae foods → Weight loss."
    ],
  },

  health: {
    lifespanYears: 8, // 10+ wild records
    commonDiseases: ['Ich', 'Velvet', 'Fin rot'],
    sensitivities: ['Stagnant water', 'Starvation', 'Copper medications'],
  },

  scientificContext: {
    wildHabitat: "Mekong rapids. Specialized aufwuchs grazer with modified mouthparts for scraping rock biofilm.",
    sexualDimorphism: "Males slimmer, more aggressive. Females fuller-bodied.",
    variants: [
      'Classic Thai SAE (C. atrilimes)', 
      'Laos strain (more gold)', 
      'False SAE (Chinese Algae Eater - avoid)'
    ],
  },

  breeding: {
    method: 'egg_scatterer',
    difficulty: 'expert',
    trigger: 'Seasonal cool water drop + heavy flow.',
    fryCare: 'Eggs stick to rocks/plants. Fry need infusoria.',
    notes: 'Never reliably bred in captivity. Commercial imports only.',
  },
};
