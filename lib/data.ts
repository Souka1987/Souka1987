import type { Entite, MiniSerie, PrismeData } from "./types";

export const THEMATIQUE_CONFIG = {
  forge: {
    label: "Forge des Civilisations",
    color: "#4ADE80",
    tw: "forge",
  },
  ame: {
    label: "Âme et les Racines",
    color: "#FACC15",
    tw: "ame",
  },
  miroir: {
    label: "Miroir des Vanités",
    color: "#F472B6",
    tw: "miroir",
  },
  envers: {
    label: "Envers du Décor",
    color: "#FB923C",
    tw: "envers",
  },
} as const;

export const entitesEnVedette: Entite[] = [
  {
    id: "gengis-khan",
    nom: "Gengis Khan",
    dates: "1162 — 1227",
    accroche:
      "Il a forgé l'empire continu le plus vaste de l'histoire — et institué la méritocratie militaire, la liberté religieuse et la protection des marchands deux siècles avant l'Europe.",
    contexte:
      "De Temüdjin, fils de chef de clan abandonné à 9 ans, à Khan universel contrôlant 24 millions de km² : l'ascension la plus spectaculaire de l'histoire militaire.",
    thematique: "forge",
    prisme: "conquerants",
    isIA: true,
    stats: {
      "Superficie conquise": "24 M km²",
      "% de la population mondiale tuée": "~10%",
      "Codes juridiques instaurés": "1 (Yasa)",
      "Langues administrées": "+40",
    },
  },
  {
    id: "peste-noire",
    nom: "La Peste Noire",
    dates: "1347 — 1353",
    accroche:
      "Tua un tiers de l'Europe en 6 ans — et déclencha accidentellement la Renaissance en faisant exploser le prix du travail des survivants.",
    contexte:
      "Le basculement le plus radical de l'histoire occidentale : démographique, économique, spirituel. L'Europe avant et après sont deux mondes différents.",
    thematique: "ame",
    prisme: "basculements",
    isIA: false,
    sourceGallica: "https://gallica.bnf.fr/ark:/12148/btv1b8452439h",
    stats: {
      "Morts estimés (Europe)": "25 millions",
      "% de population décimée": "30 à 50%",
      "Durée de l'épidémie": "6 ans",
      "Hausse des salaires post-crise": "+40%",
    },
  },
  {
    id: "guerre-oreille-jenkins",
    nom: "La Guerre de l'Oreille de Jenkins",
    dates: "1739 — 1748",
    accroche:
      "Un capitaine anglais brandit son oreille coupée devant le Parlement. Le Parlement déclare la guerre à l'Espagne. Neuf ans de conflit s'ensuivent.",
    contexte:
      "Le prétexte le plus absurde de l'histoire diplomatique moderne, qui déboucha sur la Guerre de Succession d'Autriche et redessina les empires coloniaux.",
    thematique: "miroir",
    prisme: "insolite",
    isIA: false,
    stats: {
      "Durée du conflit": "9 ans",
      "Puissances impliquées": "6",
      Prétexte: "1 oreille conservée dans du sel",
      "Théâtres d'opération": "3 continents",
    },
  },
  {
    id: "waterloo-uchronie",
    nom: "Et si Waterloo avait été gagné ?",
    dates: "18 juin 1815 / UCHRONIE",
    accroche:
      "La pluie du 17 juin retarda l'artillerie française de 3 heures. Sans cette pluie, Napoléon attaquait à l'aube. L'Europe aurait-elle un autre visage ?",
    contexte:
      "La uchronie la plus débattue de l'histoire militaire : une victoire française à Waterloo aurait empêché l'unité allemande, peut-être les deux guerres mondiales.",
    thematique: "envers",
    prisme: "uchronies",
    isIA: true,
    stats: {
      "Retard causé par la pluie": "3 heures",
      "Écart de forces": "72 000 vs 118 000",
      "Durée de la bataille": "9 heures",
      "Conséquences réelles": "Sainte-Hélène",
    },
  },
];

export const PRISMES: PrismeData[] = [
  {
    id: "conquerants",
    nom: "Les Conquérants",
    description:
      "Gengis Khan, Richard Ier, Napoléon, Alexandre — ceux qui ont redessiné le monde par la force, la stratégie ou la vision. Portraits sans mythologie.",
    exemples: [
      "Gengis Khan",
      "Alexandre le Grand",
      "Napoléon Bonaparte",
      "Richard Cœur de Lion",
      "Tamerlan",
    ],
    couleur: "#2563EB",
    icon: "⚔",
  },
  {
    id: "basculements",
    nom: "Les Points de Bascule",
    description:
      "L'imprimerie, la Peste Noire, la chute de Constantinople — les événements où l'histoire a changé de trajectoire pour toujours.",
    exemples: [
      "Peste Noire (1347)",
      "Chute de Constantinople (1453)",
      "L'imprimerie (1450)",
      "La Révolution française",
      "Hiroshima",
    ],
    couleur: "#FACC15",
    icon: "◎",
  },
  {
    id: "insolite",
    nom: "L'Insolite",
    description:
      "L'anecdote du pigeon messager, la Guerre de l'Oreille de Jenkins, l'invasion des lapins de Napoléon — l'histoire a aussi le sens de l'humour.",
    exemples: [
      "Guerre de l'oreille de Jenkins",
      "Cher Ami le pigeon (1918)",
      "L'invasion des lapins (1807)",
      "La guerre du football (1969)",
    ],
    couleur: "#F472B6",
    icon: "✦",
  },
  {
    id: "uchronies",
    nom: "Les Uchronies",
    description:
      "La section Reimagined. Et si Waterloo avait été gagné ? Et si l'Armada avait réussi ? Des récits alternatifs rigoureux, balisés [UCHRONIE].",
    exemples: [
      "Et si Waterloo avait été gagné ?",
      "Et si l'Armada avait réussi ?",
      "Et si l'URSS avait survécu ?",
      "Et si Byzance avait tenu ?",
    ],
    couleur: "#4ADE80",
    icon: "∞",
  },
];

export const miniSerieGengis: MiniSerie = {
  id: "gengis-khan-empire-du-ciel",
  titre: "Gengis Khan : L'Empire du Ciel",
  sousTitre: "8 épisodes · 24 millions de km² · 1 homme",
  description:
    "Un parcours guidé en scroll sur la carte du monde. De la steppe mongole aux portes de Vienne : comment un enfant de clan a bâti l'empire le plus vaste de l'histoire en moins de 25 ans.",
  entiteId: "gengis-khan",
  episodes: [
    {
      numero: "01",
      titre: "L'Enfant de la Steppe",
      lieu: "Delüün Boldog",
      pays: "Mongolie",
      coordinates: [48.5, 108.9],
      resume: "Naissance de Temüdjin. L'assassinat du père. La survie.",
      statut: "diffuse",
    },
    {
      numero: "02",
      titre: "L'Alliance des Clans",
      lieu: "Karakoroum",
      pays: "Mongolie",
      coordinates: [47.2, 102.8],
      resume: "La formation de la Grande Confédération mongole.",
      statut: "diffuse",
    },
    {
      numero: "03",
      titre: "La Capitale des Steppes",
      lieu: "Karakoroum",
      pays: "Mongolie",
      coordinates: [47.2, 102.8],
      resume: "Première capitale. Le code Yasa. La bureaucratie de l'empire.",
      statut: "en-cours",
    },
    {
      numero: "04",
      titre: "La Bibliothèque du Monde",
      lieu: "Bagdad",
      pays: "Irak",
      coordinates: [33.3, 44.4],
      resume: "La destruction de la Maison de la Sagesse en 1258.",
      statut: "a-venir",
    },
    {
      numero: "05",
      titre: "La Conquête du Dragon",
      lieu: "Zhongdu (Pékin)",
      pays: "Chine",
      coordinates: [39.9, 116.4],
      resume: "La chute de la dynastie Jin. L'est devient mongol.",
      statut: "a-venir",
    },
    {
      numero: "06",
      titre: "Samarkand, Joyau du Monde",
      lieu: "Samarkand",
      pays: "Ouzbékistan",
      coordinates: [39.6, 66.9],
      resume: "Le pillage de Samarkand. La Perse sous la botte mongole.",
      statut: "a-venir",
    },
    {
      numero: "07",
      titre: "Aux Portes de Vienne",
      lieu: "Legnica",
      pays: "Pologne",
      coordinates: [51.2, 16.1],
      resume: "La bataille de Legnica. L'Europe à deux doigts de l'empire.",
      statut: "a-venir",
    },
    {
      numero: "08",
      titre: "La Mort du Ciel Bleu Éternel",
      lieu: "Liupan Shan",
      pays: "Chine",
      coordinates: [35.5, 106.3],
      resume: "La mort de Gengis Khan. L'héritage. La Pax Mongolica.",
      statut: "a-venir",
    },
  ],
};

export const TICKER_ITEMS = [
  "1453 — Chute de Constantinople",
  "1347 — Arrivée de la Peste Noire à Messine",
  "1450 — Gutenberg invente l'imprimerie",
  "1492 — Christophe Colomb aborde l'Amérique",
  "1789 — Prise de la Bastille",
  "1815 — Bataille de Waterloo",
  "1969 — Premiers pas sur la Lune",
  "1206 — Gengis Khan proclamé Khan universel",
  "1066 — Bataille d'Hastings",
  "1648 — Traité de Westphalie",
  "1917 — Révolution russe",
  "44 av. J-C — Assassinat de César",
];
