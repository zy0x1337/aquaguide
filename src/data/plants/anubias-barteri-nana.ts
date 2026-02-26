import type { Plant } from '../../types/plant';

export const anubiasBarteriNana: Plant = {
  id: 'plant-anubias-barteri-nana',
  slug: 'anubias-barteri-var-nana',
  imageUrl: '/images/plants/anubias-barteri-nana.jpg',

  imageCredit: {
    photographer: 'Abhik.Mazumdar.73',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anubias_barteri_var._nana.jpg',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/'
  },

  difficulty: 'easy',

  funFact: 'Anubias wächst so langsam, dass Algen auf den Blättern sich leichter festsetzen als bei anderen Pflanzen – ein sicheres Zeichen, dass zu wenig Wasserbewegung herrscht.',

  taxonomy: {
    scientificName: 'Anubias barteri var. nana',
    commonName: 'Dwarf Anubias',
    family: 'Araceae',
    origin: 'West Africa (Cameroon)',
    nativeRegion: 'Fließende und stehende Gewässer in Kamerun und Nigeria; bevorzugt beschattete Uferabschnitte mit starker Strömung'
  },

  specs: {
    type: 'rhizome',
    heightCM: { min: 5, max: 15 },
    light: 'low',
    co2: 'low',
    growthRate: 'slow',
    placement: ['epiphyte', 'foreground', 'midground']
  },

  parameters: {
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 6.0, max: 8.0, ideal: 7.0 },
    kh: { min: 2, max: 15 },
    gh: { min: 3, max: 20 },
    flow: 'low',
    photoperiodHours: { min: 6, max: 10 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Rhizome division. Divide older rhizomes with at least 2–3 Blättern pro Abschnitt. Befestigung an Holz oder Stein mit Angelschnur oder Pflanzkleber.',
    notes: 'Epiphyt! Das Rhizom niemals im Substrat vergraben – es fault sonst. Am Holz oder Stein befestigen.',
    trimming: 'Alte, vergilbte oder von Algen befallene Blätter direkt am Stiel abschneiden. Das Rhizom nicht kürzen, es sei denn zur Vermehrung.',
    senescenceNotes: 'Sehr langlebig. Einzelne Blätter leben Monate bis Jahre. Natürlicher Blattabfall ist normal; solange neue Blätter wachsen, ist die Pflanze gesund.'
  },

  nutrients: {
    nitrogen: 'low',
    phosphate: 'low',
    potassium: 'low',
    iron: 'low'
  },

  variants: ['Anubias barteri var. nana', 'Anubias barteri var. nana \'Petite\'', 'Anubias barteri var. nana \'Golden\'', 'Anubias barteri var. nana \'Marble\''],

  commonProblems: [
    {
      title: 'Rhizom-Fäule',
      desc: 'Blätter werden schwarz und matschig, das Rhizom wird weich und zersetzt sich.',
      solution: 'Rhizom über dem Substrat belassen oder vollständig frei im Wasser. Wasserzirkulation verbessern. Befallene Abschnitte sofort entfernen.'
    },
    {
      title: 'Algen auf Blättern',
      desc: 'Grünfleckenalgen oder braune Kieselalgen setzen sich auf den langsam wachsenden Blättern fest.',
      solution: 'Beleuchtungsdauer auf 6–8 Stunden reduzieren. Wasserfluss rund um die Pflanze erhöhen. Manuelle Entfernung mit weichem Tuch oder Bürste.'
    },
    {
      title: 'Gelbe / braune Blätter',
      desc: 'Ältere Blätter werden schrittweise gelb, braun und sterben ab.',
      solution: 'Normaler Blattwechsel. Flüssigdünger (All-in-One) hinzufügen. Stabile Parameter halten (22–28 °C, pH 6–8).'
    },
    {
      title: 'Kümmerliches Wachstum',
      desc: 'Wochen- oder monatelang kein sichtbares Wachstum.',
      solution: 'Flüssigdünger zugeben (All-in-One oder Makro-Mix). Wasserparameter prüfen. Beleuchtung auf 8–10 h erhöhen. Ausreichende Wasserzirkulation sicherstellen.'
    },
    {
      title: 'Schmelzende Blätter',
      desc: 'Blätter werden durchsichtig, matschig und lösen sich auf.',
      solution: 'Meist durch drastische Parameterwechsel. Langsam akklimatisieren. Stabile Temperatur (22–28 °C) und pH (6–8) sicherstellen. Sauerstoffversorgung verbessern.'
    }
  ],

  proTips: [
    'Mit Superkleber-Gel (Cyanoacrylat) direkt auf trockenem Holz befestigen – hält in Sekunden.',
    'Unter schattigeren Bedingungen platzieren als andere Pflanzen, um Algen auf den Blättern zu minimieren.',
    'Garnelen lieben Anubias – sie fressen Biofilm und Algen von den Blättern.',
    'Wöchentliche Zugabe von flüssigem Eisendünger hält die Blätter dunkelgrün.'
  ],

  commonMistakes: [
    'Rhizom im Substrat eingraben – führt unweigerlich zu Fäule.',
    'Zu helles Licht verwenden – fördert Algen auf den langsam wachsenden Blättern.',
    'Zu ungeduldig sein – Anubias braucht oft 4–6 Wochen zum Einwurzeln.'
  ],

  aquascapeContext: {
    styles: ['nature_aquarium', 'low_tech', 'biotope', 'jungle'],
    roleInTank: 'Mittelgrund-Akzentpflanze oder Epiphyt auf Treibholz und Steinen. Ideal zur Strukturierung des Mittelgrundes.',
    companionFish: ['Neon Tetra', 'Cardinal Tetra', 'Ember Tetra', 'Cherry Shrimp', 'Amano Shrimp', 'Corydoras', 'Otocinclus'],
    incompatibleFish: ['Goldfish', 'Buenos Aires Tetra', 'Silver Dollar', 'Large Cichlids'],
    substrateRecommendations: ['Kies (2–3 mm)', 'ADA Aqua Soil (für Begleitpflanzen)', 'Lavastein / Tonkugeln als Befestigungsmedium']
  },

  relatedPlants: [
    'anubias-barteri-var-nana-petite',
    'microsorum-pteropus',
    'bucephalandra-sp-green'
  ],

  description: 'The ultimate beginner plant. Anubias nana is nearly indestructible, thrives in low light without CO₂, and offers beautiful dark green leaves. Its compact size (5–15 cm) makes it perfect for foreground or midground positioning. Attach to driftwood, rocks, or moss poles using fishing line or aquarium glue. Never plant in substrate. Slow grower but incredibly resilient and long-lived, ideal for beginners and low-tech setups.'
};
