import type { Plant } from '../../types/plant';

export const aponogetonMadagascariensis: Plant = {
  id: 'plant-aponogeton-madagascariensis',
  slug: 'aponogeton-madagascariensis',
  imageUrl: '/images/plants/aponogeton-madagascariensis.jpg',

  imageCredit: {
    photographer: 'Laila_ on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/aponogeton-madagascariensis-3056806/',
    license: 'Public Domain',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  difficulty: 'medium',

  funFact: 'Die "Gitterblatt"-Blätter von Aponogeton madagascariensis bestehen fast nur aus dem Blattgerippe – das Blattgewebe dazwischen fehlt vollständig. Dieses Spitzenwerk ist einzigartig im Pflanzenreich.',

  taxonomy: {
    scientificName: 'Aponogeton madagascariensis',
    commonName: 'Madagascar Lace Plant',
    family: 'Aponogetonaceae',
    origin: 'Madagascar',
    nativeRegion: 'Schnell fließende Flüsse und Bäche im Hochland Madagaskars; bevorzugt kühles, sauerstoffreiches, leicht saures Wasser'
  },

  specs: {
    type: 'rosette',
    heightCM: { min: 30, max: 65 },
    light: 'medium',
    co2: 'medium',
    growthRate: 'medium',
    placement: ['background']
  },

  parameters: {
    tempC: { min: 20, max: 28, ideal: 23 },
    ph: { min: 6.0, max: 7.5, ideal: 6.8 },
    kh: { min: 1, max: 8 },
    gh: { min: 2, max: 12 },
    flow: 'medium',
    photoperiodHours: { min: 8, max: 10 }
  },

  planting: {
    substrate: true,
    soilTabs: true,
    liquidFertilizer: true,
    propagation: 'Samen aus schwimmender Schote oder Knollenteilung. Blüten tauchen über die Wasseroberfläche auf.',
    notes: 'Knolle waagerecht einpflanzen, falls die Orientierung unklar ist. Benötigt nährstoffreiches Substrat. Vollständig aquatisch – kein Emersed-Wachstum. Kühlere Temps (22–24 °C) sind optimal.',
    trimming: 'Alte oder von Algen bewachsene Blätter direkt am Blattansatz entfernen. Blütenstand nach der Blüte abschneiden, wenn er keine Samen trägt.',
    senescenceNotes: 'Geht nach mehreren Monaten Wachstum in eine natürliche Ruhephase (Dormanz): Blätter ziehen sich vollständig zurück. Knolle im Substrat belassen – neue Blätter erscheinen nach 2–8 Wochen.'
  },

  nutrients: {
    nitrogen: 'medium',
    phosphate: 'medium',
    potassium: 'medium',
    iron: 'high'
  },

  commonProblems: [
    {
      title: 'Blattschmelze',
      desc: 'Blätter werden durchsichtig und zerfallen nach dem Einpflanzen.',
      solution: 'Eingewöhnungsphase. Parameter stabilisieren. Nährstoffreiches Substrat verwenden. Geduld – neues Wachstum kommt aus der Knolle.'
    },
    {
      title: 'Ruhephase / Dormanz',
      desc: 'Pflanze zieht sich nach Monaten vollständig zurück.',
      solution: 'Natürlicher Lebenszyklus. Licht und Wasserwechsel reduzieren. Knolle treibt nach 2–8 Wochen Ruhe wieder aus.'
    },
    {
      title: 'Eisenmangel',
      desc: 'Neue Blätter blass-gelb/weiß zwischen den Blattadern.',
      solution: 'Eisendünger oder umfassenden Flüssigdünger zugeben. Cheliertes Eisen verwenden. CO₂ auf 20–30 ppm halten.'
    },
    {
      title: 'Algen im Gitterwerk',
      desc: 'Grünpunktealgen im Maschenwerk des Blattes.',
      solution: 'Wasserfluss durch die Blätter erhöhen. Fotoperiode auf 8 h reduzieren. Punktuelle Behandlung mit Glutaraldehyd.'
    },
    {
      title: 'Kümmerliches Wachstum',
      desc: 'Kleine Blätter, langsame Entwicklung.',
      solution: 'Licht auf mittel-hoch erhöhen. Wurzeltabs zugeben. CO₂-Injektion essenziell. Temperatur 22–26 °C.'
    }
  ],

  proTips: [
    'Knolle niemals vollständig eingraben – der obere Bereich muss frei bleiben.',
    'Kombination mit leichter CO₂-Injektion (15–20 ppm) reicht oft schon aus.',
    'In der Ruhephase Knolle bei 18–20 °C lagern, um die Dormanz zu beschleunigen.'
  ],

  commonMistakes: [
    'Knolle zu tief eingraben – oberer Teil muss frei liegen.',
    'Ruhephase als Tod interpretieren und Knolle wegwerfen.',
    'Zu warmes Wasser dauerhaft – mag es kühler als die meisten tropischen Pflanzen.'
  ],

  aquascapeContext: {
    styles: ['nature_aquarium', 'biotope', 'dutch'],
    roleInTank: 'Dramatischer Solist im Hintergrund. Das Gitterwerk-Blatt ist ein echter Hingucker und Gesprächsstarter im Aquarium.',
    companionFish: ['Neon Tetra', 'Cardinal Tetra', 'Rummy Nose Tetra', 'Small Corydoras', 'Amano Shrimp'],
    incompatibleFish: ['Goldfish', 'Large Cichlids', 'Buenos Aires Tetra'],
    substrateRecommendations: ['ADA Aqua Soil Amazonia', 'JBL AquaBasis', 'Nährstoffboden unter feinem Kies']
  },

  relatedPlants: [
    'anubias-barteri-var-nana',
    'cryptocoryne-beckettii',
    'microsorum-pteropus'
  ],

  description: 'Die exotische Madagaskar-Spitzenpflanze mit einzigartigen gitterartigen Blättern, die feiner Spitzenarbeit ähneln. Vollständig aquatische Rosettenpflanze, die 30–65 cm erreicht – perfekter dramatischer Hintergrund oder Mittelpunkt. Benötigt stabile Bedingungen, mittel-hohes Licht und CO₂. Geht natürlich in Dormanz. Nährstoffanspruchsvolle Knollenpflanze aus Madagaskars fließenden Flüssen.'
};
