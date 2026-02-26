import type { Plant } from '../../types/plant';

export const bacopaMonnieri: Plant = {
  id: 'plant-bacopa-monnieri',
  slug: 'bacopa-monnieri',

  imageUrl: '/images/plants/bacopa-monnieri.jpg',
  imageCredit: {
    photographer: 'Izabela1958',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bacopa_monnieri_aquarium_plant.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },

  difficulty: 'easy',

  funFact: 'Bacopa monnieri wird in der ayurvedischen Medizin seit Jahrtausenden als Gedächtnis- und Konzentrationsmittel eingesetzt – im Aquarium ist sie vor allem als robuster Hintergrundpfleger bekannt.',

  taxonomy: {
    scientificName: 'Bacopa monnieri',
    commonName: 'Bacopa Monnieri',
    family: 'Plantaginaceae',
    origin: 'Asia, cosmopolitan aquarium plant',
    nativeRegion: 'Tropisch-subtropische Feuchtgebiete in Süd- und Südostasien; wächst in flachen Uferzonen stehender und langsam fließender Gewässer'
  },

  specs: {
    heightCM: { min: 20, max: 50 },
    type: 'stem',
    light: 'medium',
    co2: 'low',
    growthRate: 'medium',
    placement: ['midground', 'background']
  },

  parameters: {
    tempC: { min: 20, max: 27, ideal: 24 },
    ph: { min: 6.3, max: 8.8, ideal: 7.2 },
    kh: { min: 2, max: 20 },
    gh: { min: 3, max: 20 },
    flow: 'low',
    photoperiodHours: { min: 8, max: 12 }
  },

  planting: {
    substrate: true,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Stecklinge. Tops in 5–10 cm Länge abschneiden, untere Blätter entfernen, direkt ins Substrat stecken.',
    notes: 'Regelmäßiges Stutzen verhindert leggy Wuchs. Tops kneifen fördert buschiges Wachstum. Bewurzelt sich leicht aus Stecklingen.',
    trimming: 'Tops alle 2–3 Wochen um 1/3 kürzen. Abgeschnittene Tops direkt wieder einpflanzen. Für dichten Busch die Stecklinge eng nebeneinander setzen.',
    senescenceNotes: 'Untere Blätter vergilben und fallen mit der Zeit ab – das ist normal. Regelmäßiges Stutzen und Nachpflanzen erhält den buschigen Look.'
  },

  nutrients: {
    nitrogen: 'medium',
    phosphate: 'medium',
    potassium: 'medium',
    iron: 'medium'
  },

  commonProblems: [
    {
      title: 'Leggy Wuchs',
      desc: 'Lange Internodien, wenige Blätter, mageres Erscheinungsbild.',
      solution: 'Lichtintensität erhöhen. Tops regelmäßig stutzen. Mehr Kalium und Stickstoff zugeben.'
    },
    {
      title: 'Gelbe Blätter',
      desc: 'Untere Blätter werden gelb und fallen ab.',
      solution: 'Flüssigdünger (NPK + Spurenelemente) zugeben. Eisenmangel prüfen. CO₂ verbessern falls injiziert.'
    },
    {
      title: 'Zu kleine Blattgröße',
      desc: 'Neue Blätter deutlich kleiner als die der reifen Pflanze.',
      solution: 'Licht auf mittel-hoch erhöhen. Mikronährstoffe hinzufügen. Stabile CO₂-Werte sicherstellen.'
    },
    {
      title: 'Schmelzen nach dem Einpflanzen',
      desc: 'Untere Blätter schmelzen nach dem Einsetzen in neuen Tank.',
      solution: 'Normale Akklimatisation. Geschmolzene Teile stutzen. 1–2 Wochen auf neues Wachstum warten. Parameterschwankungen vermeiden.'
    }
  ],

  proTips: [
    'Stecklinge dicht beieinander einpflanzen (1–2 cm Abstand) für sofortig buschige Wirkung.',
    'Unter höherem Licht entwickelt Bacopa leicht rötliche Stängel und intensiveres Grün.',
    'Ideal als "Lernpflanze" für Stecklingstechnik – Fehler verzeiht sie leicht.'
  ],

  commonMistakes: [
    'Nie stutzen – führt zu langen, kahlen Stängeln.',
    'Zu wenig Licht – Pflanze wird geil und verliert untere Blätter schnell.',
    'Einzelne Stiele pflanzen statt Büschel – wirkt im Aquascape dünn und unnatürlich.'
  ],

  aquascapeContext: {
    styles: ['dutch', 'nature_aquarium', 'jungle', 'low_tech', 'biotope'],
    roleInTank: 'Klassische Mittel- bis Hintergrundpflanze. Im Dutch Style als farbliche Kontrastreihe, im Nature Aquarium als natürlicher Hintergrundabschluss.',
    companionFish: ['Neon Tetra', 'Cardinal Tetra', 'Harlequin Rasbora', 'Corydoras', 'Guppies', 'Platy'],
    incompatibleFish: ['Goldfish', 'Buenos Aires Tetra', 'Silver Dollar'],
    substrateRecommendations: ['ADA Aqua Soil', 'Tropica Soil', 'Nährstoffboden mit Kiesabdeckung', 'Feiner Kies (2–3 mm)']
  },

  relatedPlants: [
    'hygrophila-polysperma',
    'hygrophila-corymbosa-siamensis',
    'limnophila-sessiliflora'
  ],

  description: 'Bacopa monnieri ist eine klassische, einfache Stängelpflanze, die sich perfekt für Einsteiger eignet. Wird 20–50 cm hoch mit hellgrünen, ovalen Blättern. Mittlere Wachstumsrate, toleriert breite Parameter (20–27 °C, pH 6,3–8,8). Gedeiht unter mittlerem Licht ohne CO₂-Injektion. Regelmäßiges Stutzen erzeugt buschiges Erscheinungsbild. Ausgezeichnete Hintergrund-/Mittelgrundpflanze, die sich leicht aus Stecklingen vermehrt.'
};
