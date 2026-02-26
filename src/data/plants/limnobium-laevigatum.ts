import type { Plant } from '../../types/plant';

export const limnobiumLaevigatum: Plant = {
  id: 'plant-froschbiss',
  slug: 'limnobium-laevigatum',
  imageUrl: '/images/plants/limnobium-laevigatum.jpg',

  imageCredit: {
    photographer: 'johnnykarlsson1 on Pixabay',
    sourceUrl: 'https://pixabay.com/de/photos/pflanze-blatt-natur-3147756/',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://pixabay.com/service/license/'
  },

  difficulty: 'easy',

  funFact: 'Die Unterseite der Blätter von Limnobium laevigatum enthält ein schwammartiges Gewebe (Aerenchym), das als natürlicher Auftrieb wirkt – ähnlich wie ein Schwimmring.',

  taxonomy: {
    scientificName: 'Limnobium laevigatum',
    commonName: 'South American Frogbit',
    family: 'Hydrocharitaceae',
    origin: 'South America (Amazon Region)',
    nativeRegion: 'Stehende und langsam fließende Gewässer des Amazonasbeckens; überwiegend in ruhigen Buchten und überschwemmten Waldgebieten'
  },

  specs: {
    type: 'float',
    heightCM: { min: 3, max: 10 },
    light: 'high',
    co2: 'low',
    growthRate: 'very fast',
    placement: ['floating']
  },

  parameters: {
    tempC: { min: 18, max: 30, ideal: 25 },
    ph: { min: 5.5, max: 7.5, ideal: 6.5 },
    kh: { min: 1, max: 12 },
    gh: { min: 2, max: 15 },
    flow: 'none',
    photoperiodHours: { min: 10, max: 14 }
  },

  planting: {
    substrate: false,
    soilTabs: false,
    liquidFertilizer: true,
    propagation: 'Ausläufer-Tochterpflanzen. Ableger abtrennen und eigenständig schwimmen lassen.',
    notes: 'Freischwimmende Oberflächenpflanze. Lampenabstand einhalten (Verbrennungsgefahr). Hervorragend zur Beschattung hellerleuchteter Tanks und zur Algenkontrolle.',
    trimming: 'Wöchentlich bis zu 50 % der Bedeckung entfernen. Überschüssige Pflanzen als Fischfutter oder für andere Aquarien verwenden.',
    senescenceNotes: 'Ältere Blätter sinken ab und vergilben – einfach entfernen. Neue Ableger erscheinen ständig und ersetzen alte Blätter.'
  },

  nutrients: {
    nitrogen: 'high',
    phosphate: 'high',
    potassium: 'medium',
    iron: 'low'
  },

  commonProblems: [
    {
      title: 'Lampenverbrennungen',
      desc: 'Blätter zeigen weiße/braune Flecken durch Kontakt mit der Lichtquelle.',
      solution: '10–15 cm Abstand zur Lampe einhalten. Betroffene Blätter entfernen. Fotoperiode auf 8–10 h reduzieren.'
    },
    {
      title: 'Überwuchs',
      desc: 'Bedeckt die gesamte Oberfläche, blockiert Licht für Unterwasserpflanzen.',
      solution: 'Regelmäßig ausdünnen (wöchentlich). Überschuss als Fischfutter nutzen. Mit Lichtpflanzen in der Tiefe kombinieren.'
    },
    {
      title: 'Schneckenbefall',
      desc: 'Schnecken sammeln sich auf der Blattunterseite.',
      solution: 'Von Glaswänden fernhalten. Manuelle Entfernung. Assassin-Schnecken oder manuelles Quarantänisieren.'
    },
    {
      title: 'Vergilbende Blätter',
      desc: 'Blätter verblassen und sinken ab.',
      solution: 'Lichtintensität/-dauer erhöhen. Flüssigdünger zugeben. Nährstoffreichen Zustand des Wassers sicherstellen (Fischkot).'
    },
    {
      title: 'Kleine Blätter',
      desc: 'Winzige Blätter, langsame Ausbreitung.',
      solution: 'Mehr Licht (hohe Intensität). Stabile warme Temps (24–28 °C). Flüssigdüngung.'
    }
  ],

  proTips: [
    'Als natürlicher Schattenspender für Labyrinthfische (Betta, Gurami) – sie lieben Schwimmpflanzen.',
    'Die hängenden Wurzeln dienen Fischbrut als Schutz und Laichgrund.',
    'In Kombination mit CO₂-injizierten Becken: Frogbit verhindert CO₂-Ausgasung an der Oberfläche.'
  ],

  commonMistakes: [
    'Zu nah an der Lampe belassen – verursacht Blattverbrennungen.',
    'Nie stutzen – überwuchert den Tank und beschattet alles darunter.',
    'In Becken mit starker Oberflächenbewegung einsetzen – mag keine Wellen oder Strömung.'
  ],

  aquascapeContext: {
    styles: ['biotope', 'jungle', 'low_tech', 'nature_aquarium'],
    roleInTank: 'Oberflächenabdeckung für natürlichen Lichtfiltereffekt. Schutz für Fischbrut und labyrinthfischartige Oberflächenatmer.',
    companionFish: ['Betta splendens', 'Pearl Gourami', 'Dwarf Gourami', 'Endler', 'Guppy', 'Cherry Shrimp'],
    incompatibleFish: ['Fische die Schwimmpflanzen fressen (Goldfish, große Barben)'],
    substrateRecommendations: ['Kein Substrat nötig – freischwimmend']
  },

  relatedPlants: [
    'ceratophyllum-demersum'
  ],

  description: 'Schnell wachsende Schwimmpflanze mit runden, glänzenden Blättern, die einen grünen Oberflächenteppich bilden. Ausgezeichneter Algenkämpfer (Nitat-Schwamm), bietet Schatten für Licht scheue Pflanzen und Schutz für Brut/Garnelen. Liebt hohes Licht – wöchentliches Stutzen um Überwuchs zu verhindern. Wurzeln erzeugen dramatischen Hängeeffekt und dienen als Laichsubstrat.'
};
