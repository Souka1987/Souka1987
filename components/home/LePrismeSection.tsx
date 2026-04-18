"use client";

import { useState } from "react";
import Link from "next/link";
import { PRISMES } from "@/lib/data";

export function LePrismeSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="mb-16 max-w-xl">
          <span className="font-ui text-[10px] text-texte-dim/50 uppercase tracking-[0.3em] block mb-3">
            Nos angles de lecture
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-texte leading-none mb-4">
            LES PRISMES
          </h2>
          <p className="font-body text-sm text-texte-muted leading-relaxed">
            Quatre façons de traverser l'histoire. Choisissez votre angle —
            la lumière ne se réfracte jamais de la même façon.
          </p>
        </div>

        {/* Grille 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRISMES.map((prisme) => {
            const isHovered = hoveredId === prisme.id;
            return (
              <Link
                key={prisme.id}
                href={`/${prisme.id}`}
                className="group relative border border-nuit-border p-8 overflow-hidden transition-colors duration-300 block"
                style={{
                  borderLeftColor: isHovered ? prisme.couleur : undefined,
                  borderLeftWidth: "2px",
                }}
                onMouseEnter={() => setHoveredId(prisme.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Halo de fond */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 0% 50%, ${prisme.couleur}0A 0%, transparent 65%)`,
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                {/* Grille fine de fond */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(${prisme.couleur}08 1px, transparent 1px), linear-gradient(90deg, ${prisme.couleur}08 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                  }}
                />

                <div className="relative">
                  {/* Icône + Numéro */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-3xl transition-transform duration-300 group-hover:scale-110"
                      style={{ color: prisme.couleur }}
                    >
                      {prisme.icon}
                    </span>
                    <span
                      className="font-display text-5xl transition-colors duration-300"
                      style={{
                        color: isHovered
                          ? `${prisme.couleur}40`
                          : "#1E293B",
                      }}
                    >
                      0{PRISMES.indexOf(prisme) + 1}
                    </span>
                  </div>

                  {/* Nom */}
                  <h3
                    className="font-display text-3xl sm:text-4xl mb-3 transition-colors duration-300 leading-tight"
                    style={{
                      color: isHovered ? prisme.couleur : "#E2E8F0",
                    }}
                  >
                    {prisme.nom.toUpperCase()}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-texte-muted leading-relaxed mb-6">
                    {prisme.description}
                  </p>

                  {/* Exemples */}
                  <div className="flex flex-wrap gap-2">
                    {prisme.exemples.map((ex) => (
                      <span
                        key={ex}
                        className="font-ui text-[9px] border px-2.5 py-1 uppercase tracking-widest transition-colors duration-200"
                        style={{
                          color: isHovered
                            ? prisme.couleur
                            : "#475569",
                          borderColor: isHovered
                            ? `${prisme.couleur}30`
                            : "#1E293B",
                        }}
                      >
                        {ex}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-2">
                    <span
                      className="font-ui text-[10px] uppercase tracking-widest transition-colors duration-300"
                      style={{
                        color: isHovered ? prisme.couleur : "#475569",
                      }}
                    >
                      Explorer ce prisme →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
