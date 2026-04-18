import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getThematiqueColor(thematique: string): string {
  const colors: Record<string, string> = {
    forge: "#4ADE80",
    ame: "#FACC15",
    miroir: "#F472B6",
    envers: "#FB923C",
  };
  return colors[thematique] ?? "#2563EB";
}
