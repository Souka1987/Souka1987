"use client";

import { useState } from "react";
import type { Entite } from "@/lib/types";
import { TagBadge } from "@/components/ui/TagBadge";
import { getThematiqueColor } from "@/lib/utils";

interface EntityCardProps {
  entite: Entite;
  onOpenPanel?: (entite: Entite) => void;
}

export function EntityCard({ entite, onOpenPanel }: EntityCardProps) {
  const [hovered, setHovered] = useState(false);
  const accentColor = getThematiqueColor(entite.thematique);

  return (
    <article
      className="group relative bg-nuit-card border border-nuit-border hover:border-opacity-60 transition-all duration-400 cursor-pointer overflow-hidden flex flex-col"
      style={{
        borderColor: hovered ? `${accentColor}30` : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpenPanel?.(entite)}
    >
      {/* Accent bar gauche */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 transition-opacity duration-300"
        style={{
          backgroundColor: accentColor,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Halo de fond subtil au hover */}
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 0% 30%, ${accentColor}08 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="relative p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <TagBadge thematique={entite.thematique} size="xs" />
          {entite.isIA && (
            <span className="font-ui text-[9px] text-texte-dim border border-texte-dim/20 px-1.5 py-0.5 leading-none flex-shrink-0">
              IA
            </span>
          )}
        </div>

        {/* Date en VT323 */}
        <span
          className="font-display text-2xl leading-none mb-2 transition-colors duration-300"
          style={{ color: hovered ? accentColor : `${accentColor}60` }}
        >
          {entite.dates}
        </span>

        {/* Nom de l'entité */}
        <h3 className="font-title text-lg font-semibold text-texte mb-3 leading-snug group-hover:text-white transition-colors duration-300">
          {entite.nom}
        </h3>

        {/* Accroche — révélée au hover */}
        <div
          className="overflow-hidden transition-all duration-400"
          style={{
            maxHeight: hovered ? "160px" : "0px",
            opacity: hovered ? 1 : 0,
          }}
        >
          <p className="font-body text-sm text-texte-muted leading-relaxed">
            {entite.accroche}
          </p>
        </div>

        {/* Footer de carte */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span
            className="font-ui text-[10px] uppercase tracking-widest transition-colors duration-300"
            style={{ color: hovered ? accentColor : "#475569" }}
          >
            {hovered ? "Voir la fiche →" : "Survol activé"}
          </span>

          {/* Stats preview si disponibles */}
          {entite.stats && !hovered && (
            <span className="font-ui text-[9px] text-texte-dim">
              {Object.keys(entite.stats).length} stats
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
