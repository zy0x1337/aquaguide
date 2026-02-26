// src/data/plants/anubias-nana-petite.ts
import type { Plant } from '../../types/plant';

export const anubiasNanaPetite: Plant = {
  id: 'plant-anubias-nana-petite',
  slug: 'anubias-barteri-var-nana-petite',
  imageUrl: '/images/plants/anubias-nana-petite.jpg',

  imageCredit: {
    photographer: 'Abhik.Mazumdar.73',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anubias_Nana_Petite.jpg',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/'
  },

  difficulty: 'easy',

  funFact: 'Anubias Nana Petite ist eine Aquarium-Züchtung und kommt so in der Natur nicht vor – sie wurde durch selektive Kultur aus der Dwarf Anubias entwickelt.',

  taxonomy: {
    scientificName: "Anubias barteri var. nana 'Petite'",
    commonName: 'Anubias Nana Petite',
    family: 'Araceae',
    origin: 'Cultivar (originally West Africa)',
    nativeRegion: 'Züchtung; Ausgangsart stammt aus beschatteten Fließgewässern Westafrikas'
  },

  specs: {
    heightCM: { min: 3, max: 5 },
    type: 'rhizome',
    light: 'low',
    co2: 'low',
    growthRate: 'slow',
    placement: ['foreground', 'epiphyte']
  },

  parameters: {
    tempC: { min: 20, max: 28, ideal: 24 },
    ph: { min: 6.0, max: 7.8, ideal: 7.0 },
    kh: { min: 2, max: 15 },
    gh: { min: 3, max: 20 },
    flow: 'low',
    photoperiodHours: { min: 6, max: 9 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Rhizomteilung. Kleine Abschnitte mit 2–3 Blättern abschneiden. Mit Angelschnur an neuem Hardscape befestigen.',
    notes: 'Ultra-Miniatur-Epiphyt. An Treibholz oder Stein mit Angelschnur oder Superkleber befestigen. Direktes helles Licht vermeiden, um Algen zu reduzieren. Das Rhizom MUSS freigelegt bleiben.',
    trimming: 'Einzelne alte Blätter direkt am Stiel entfernen. Rhizom nicht kürzen außer zur Vermehrung.',
    senescenceNotes: 'Sehr langlebig. Wächst extrem langsam – Geduld ist essenziell. Kein Wachstum über Wochen ist normal, solange keine Fäule sichtbar ist.'
  },

  nutrients: {
    nitrogen: 'low',
    phosphate: 'low',
    potassium: 'low',
    iron: 'low'
  },

  variants: ['Anubias barteri var. nana \'Petite\'', 'Anubias barteri var. nana \'Mini Coin\''],

  commonProblems: [
    {
      title: 'Rhizom-Fäule',
      desc: 'Rhizom wird schwarz/weich, Blätter schmelzen.',
      solution: 'Rhizom niemals im Substrat eingraben. Gute Wasserzirkulation sicherstellen. Verfaulte Abschnitte sofort entfernen.'
    },
    {
      title: 'Algenbewuchs',
      desc: 'Grünstaub- oder Fadenalgen auf den Blättern.',
      solution: 'Lichtintensität/-dauer reduzieren. Wasserfluss erhöhen. Manuelle Behandlung mit weicher Bürste.'
    },
    {
      title: 'Kein neues Wachstum',
      desc: 'Pflanze stabil, aber keine neuen Blätter.',
      solution: 'Spurenelemente hinzufügen (Eisen/Zink). Nährstoffmangel prüfen. Wasserbewegung um die Pflanze verbessern.'
    },
    {
      title: 'Schmelzende Blätter',
      desc: 'Blätter werden durchsichtig und lösen sich auf.',
      solution: 'Langsam an neue Tankparameter akklimatisieren. Temperatur stabilisieren (22–26 °C optimal).'
    }
  ],

  proTips: [
    'Ideal für Nano-Aquarien (5–20 L) und detailliertes Hardscape-Design.',
    'Auf kleinen Steinen oder Treibholzästen befestigen, die als Deko-Element dienen.',
    'Cherry Shrimps und Neocaridina-Garnelen lieben die kleinen Blätter als Schutzraum.'
  ],

  commonMistakes: [
    'Rhizom eingraben – führt zu Fäule.',
    'Mit zu viel Licht oder Dünger überwältigen – Petite braucht weniger als die meisten Pflanzen.',
    'Direktes Tageslicht oder sehr helles Kunstlicht – fördert massiven Algenbewuchs.'
  ],

  aquascapeContext: {
    styles: ['nature_aquarium', 'low_tech', 'iwagumi', 'biotope'],
    roleInTank: 'Detailakzent im Vordergrund oder auf Hardscape. Perfekter Skalenbrecher in Nano-Scapes.',
    companionFish: ['Cherry Shrimp', 'Neocaridina sp.', 'Betta', 'Endlers Livebearer', 'Nano-Rasboras'],
    incompatibleFish: ['Goldfish', 'Large Cichlids', 'Silver Dollar'],
    substrateRecommendations: ['Kies (1–2 mm)', 'Fluss-Sand', 'Lavastein als Befestigungsmedium']
  },

  relatedPlants: [
    'anubias-barteri-var-nana'
  ],

  description: 'Anubias Nana Petite ist die kleinste Anubias-Variante mit einer Gesamthöhe von nur 3–5 cm. Perfekt für Nano-Aquarien (5–20 L), Treibholz-Details und hochwertige Vordergrundgestaltung. Ultra-robust, überlebt wenig Licht ohne CO₂. Langsam wachsend mit minimalem Pflegeaufwand. Dunkelgrüne, runde Blätter mit dicker Textur. Ausschließlich Epiphyt – an Hartsubstrat befestigen (niemals im Substrat pflanzen). Ideal für Garnelen und Nano-Fische (Betta, Endler).'
};
