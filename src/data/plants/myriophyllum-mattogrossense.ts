import type { Plant } from '../../types/plant';

export const myriophyllumMattogrossense: Plant = {
  id: 'plant-mato-grosso',
  slug: 'myriophyllum-mattogrossense',

  imageUrl: '/images/plants/myriophyllum-matogrossense.jpg',

  imageCredit: {
    photographer: 'TsunamiCarlos',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Myriophyllum_matogrossense.jpg',
    license: 'Public Domain',
    licenseUrl: 'https://en.wikipedia.org/wiki/Public_domain'
  },

  difficulty: 'medium',

  funFact: 'Myriophyllum mattogrossense kann unter optimalen Bedingungen bis zu 10 cm pro Woche wachsen – damit gehört es zu den schnellsten Aquarienpflanzen überhaupt.',

  taxonomy: {
    scientificName: 'Myriophyllum mattogrossense',
    commonName: 'Mato Grosso Milfoil',
    family: 'Haloragaceae',
    origin: 'South America',
    nativeRegion: 'Seen, Flüsse und Sümpfe im Mato Grosso-Staat (Brasilien); wächst oft in offenen, gut belichteten Flachwasserbereichen'
  },

  specs: {
    type: 'stem',
    heightCM: { min: 30, max: 60 },
    light: 'high',
    co2: 'high',
    growthRate: 'very fast',
    placement: ['background']
  },

  parameters: {
    tempC: { min: 22, max: 28, ideal: 25 },
    ph: { min: 5.5, max: 7.5, ideal: 6.8 },
    kh: { min: 1, max: 10 },
    gh: { min: 2, max: 15 },
    flow: 'medium',
    photoperiodHours: { min: 9, max: 12 }
  },

  planting: {
    substrate: true,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Stecklinge. Bewurzeln unter guten Bedingungen in 3–5 Tagen.',
    notes: 'Regelmäßiges Stutzen essenziell! Wächst 5–10 cm pro Woche. Hervorragender Nitrat-Schwamm für Becken mit hohem Besatz.',
    trimming: 'Tops alle 1–2 Wochen um 1/3 bis 1/2 kürzen. Abschnitte direkt wieder einpflanzen für sofortige Verdichtung. Seitentriebe durch Kürzen fördern.',
    senescenceNotes: 'Untere Blätter vergilben und fallen bei schnell wachsenden Stängeln ab – normaler Prozess. Durch Nachpflanzen von Stecklingen immer wieder auffüllen.'
  },

  nutrients: {
    nitrogen: 'high',
    phosphate: 'high',
    potassium: 'high',
    iron: 'high'
  },

  commonProblems: [
    {
      title: 'Leggy Wuchs',
      desc: 'Lange Stängel mit wenigen Blättern und Seitentrieben.',
      solution: 'CO₂ und Licht erhöhen. Tops regelmäßig stutzen, um Buschigkeit zu fördern. Mehr Kalium zugeben.'
    },
    {
      title: 'Vergilbende untere Blätter',
      desc: 'Untere Blätter werden gelb und fallen ab.',
      solution: 'Normal bei Schnellwachsern. Nitrat- und Eisendüngung erhöhen. Regelmäßig stutzen.'
    },
    {
      title: 'Stagnierendes Spitzenwachstum',
      desc: 'Neue Tops hören auf zu wachsen, älteres Wachstum in Ordnung.',
      solution: 'CO₂-Sättigung erhöhen. Kalium- und Phosphatwerte prüfen. Wasserfluss verbessern.'
    }
  ],

  proTips: [
    'Büschel aus 5–7 Stängeln dicht beieinander einpflanzen für sofort üppige Wirkung.',
    'CO₂-Injektion auf 25–30 ppm einstellen – macht den größten Wachstumsunterschied.',
    'Als Hintergrundfüller in High-Tech-Setups unschlagbar schnell und üppig.'
  ],

  commonMistakes: [
    'Ohne CO₂ verwenden – wächst dann dünn und verliert schnell untere Blätter.',
    'Zu selten schneiden – wird "leggy" und beschattet andere Pflanzen.',
    'Zu wenig Nährstoffe – hoher Verbraucher, der regelmäßige Volldüngung braucht.'
  ],

  aquascapeContext: {
    styles: ['nature_aquarium', 'dutch', 'jungle'],
    roleInTank: 'Schneller Hintergrundfüller für High-Tech-Setups. Erzeugt durch die federartigen Blätter Tiefe und Bewegung. Kontrast zu breitblättrigen Vordergrundpflanzen.',
    companionFish: ['Cardinal Tetra', 'Rummy Nose Tetra', 'Altum Angelfish', 'Discus', 'SAE (Siamese Algae Eater)'],
    incompatibleFish: ['Goldfish', 'Buenos Aires Tetra', 'Grosse Barben'],
    substrateRecommendations: ['ADA Aqua Soil Amazonia', 'Tropica Soil', 'Power Sand + Aqua Soil (Layered)']
  },

  relatedPlants: [
    'hygrophila-polysperma',
    'limnophila-sessiliflora',
    'bacopa-monnieri'
  ],

  description: 'Die am schnellsten wachsende Stängelpflanze überhaupt. Perfekt für dicht bepflanzte Tanks, die schnelle Hintergrundabdeckung benötigen. Feine, federartige Blätter erzeugen hervorragende Bewegung im Strömungsfluss und bieten Kontrast zu breitblättrigen Pflanzen. Starker Nährstoffverbraucher – hervorragend zur Nitratkontrolle in Becken mit hohem Besatz.'
};
