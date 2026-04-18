export type Thematique = "forge" | "ame" | "miroir" | "envers";

export type Prisme = "conquerants" | "basculements" | "insolite" | "uchronies";

export interface Entite {
  id: string;
  nom: string;
  dates: string;
  accroche: string;
  contexte: string;
  thematique: Thematique;
  prisme: Prisme;
  isIA?: boolean;
  sourceGallica?: string;
  stats?: Record<string, string>;
}

export interface Episode {
  numero: string;
  titre: string;
  lieu: string;
  pays: string;
  coordinates: [number, number];
  resume: string;
  statut: "diffuse" | "en-cours" | "a-venir";
}

export interface MiniSerie {
  id: string;
  titre: string;
  sousTitre: string;
  description: string;
  entiteId: string;
  episodes: Episode[];
}

export interface PrismeData {
  id: Prisme;
  nom: string;
  description: string;
  exemples: string[];
  couleur: string;
  icon: string;
}

export interface TagConfig {
  label: string;
  color: string;
  bgOpacity: string;
}
