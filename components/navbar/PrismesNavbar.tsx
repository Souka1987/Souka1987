"use client";

import { useState } from "react";
import Link from "next/link";
import { PRISMES } from "@/lib/data";

export function PrismesNavbar() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Ligne de ticker en haut */}
      <div className="bg-hacker/10 border-b border-hacker/20 h-6 overflow-hidden">
        <div className="flex items-center h-full">
          <span className="font-ui text-[10px] text-hacker px-3 border-r border-hacker/20 flex-shrink-0 uppercase tracking-widest">
            Live
          </span>
          <div className="flex-1 overflow-hidden">
            <span className="font-ui text-[10px] text-texte-dim animate-marquee whitespace-nowrap inline-block">
              1453 · Chute de Constantinople &nbsp;·&nbsp; 1347 · La Peste Noire arrive à Messine &nbsp;·&nbsp; 1206 · Gengis Khan proclamé Khan universel &nbsp;·&nbsp; 1815 · Waterloo &nbsp;·&nbsp; 1066 · Hastings &nbsp;·&nbsp; 44 av. J-C · Assassinat de César &nbsp;·&nbsp; 1789 · Prise de la Bastille &nbsp;·&nbsp; 1492 · Colomb aborde l'Amérique &nbsp;·&nbsp; 1969 · Premiers pas sur la Lune &nbsp;·&nbsp;
              1453 · Chute de Constantinople &nbsp;·&nbsp; 1347 · La Peste Noire arrive à Messine &nbsp;·&nbsp; 1206 · Gengis Khan proclamé Khan universel &nbsp;·&nbsp; 1815 · Waterloo &nbsp;·&nbsp; 1066 · Hastings &nbsp;·&nbsp; 44 av. J-C · Assassinat de César &nbsp;·&nbsp; 1789 · Prise de la Bastille &nbsp;·&nbsp; 1492 · Colomb aborde l'Amérique &nbsp;·&nbsp; 1969 · Premiers pas sur la Lune &nbsp;·&nbsp;
            </span>
          </div>
        </div>
      </div>

      {/* Barre principale */}
      <div className="bg-nuit/95 backdrop-blur-md border-b border-nuit-border">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-3xl text-hacker tracking-wider hover:animate-glow-pulse transition-all flex-shrink-0"
            aria-label="History Reimagined — Accueil"
          >
            HR.
          </Link>

          {/* Séparateur + label */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="h-6 w-px bg-texte-dim/30" />
            <span className="font-ui text-[9px] text-texte-dim/50 uppercase tracking-[0.25em] hidden sm:block">
              Prismes&nbsp;de&nbsp;lecture
            </span>
          </div>

          {/* Prismes — desktop */}
          <div className="hidden md:flex items-center gap-1 flex-1">
            {PRISMES.map((prisme) => (
              <Link
                key={prisme.id}
                href={`/${prisme.id}`}
                className="group relative px-3 py-2 font-ui text-[11px] text-texte-muted hover:text-texte transition-colors duration-200 uppercase tracking-widest whitespace-nowrap"
                onMouseEnter={() => setHoveredId(prisme.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <span className="flex items-center gap-1.5">
                  <span
                    className="text-[10px] transition-transform duration-200 group-hover:scale-125"
                    style={{ color: prisme.couleur }}
                  >
                    {prisme.icon}
                  </span>
                  {prisme.nom}
                </span>
                {/* Barre colorée en bas */}
                <span
                  className="absolute bottom-0 left-0 right-0 h-px origin-left transition-transform duration-300"
                  style={{
                    backgroundColor: prisme.couleur,
                    transform:
                      hoveredId === prisme.id ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </Link>
            ))}
          </div>

          {/* Droite */}
          <div className="ml-auto flex items-center gap-4">
            <Link
              href="/archive"
              className="hidden md:block font-ui text-[10px] text-texte-dim hover:text-hacker transition-colors uppercase tracking-widest"
            >
              Archive
            </Link>
            <Link
              href="/carte"
              className="hidden md:block font-ui text-[10px] text-texte-dim hover:text-hacker transition-colors uppercase tracking-widest"
            >
              Carte
            </Link>
            <div className="h-4 w-px bg-texte-dim/20 hidden md:block" />
            {/* Bouton menu mobile */}
            <button
              className="md:hidden font-ui text-[10px] text-texte-dim border border-texte-dim/20 px-3 py-1 uppercase tracking-widest"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {menuOpen && (
          <div className="md:hidden border-t border-nuit-border bg-nuit px-6 py-4 flex flex-col gap-3">
            {PRISMES.map((prisme) => (
              <Link
                key={prisme.id}
                href={`/${prisme.id}`}
                className="font-ui text-xs text-texte-muted uppercase tracking-widest flex items-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <span style={{ color: prisme.couleur }}>{prisme.icon}</span>
                {prisme.nom}
              </Link>
            ))}
            <div className="border-t border-nuit-border pt-3 flex gap-4">
              <Link
                href="/archive"
                className="font-ui text-[10px] text-texte-dim uppercase tracking-widest"
              >
                Archive
              </Link>
              <Link
                href="/carte"
                className="font-ui text-[10px] text-texte-dim uppercase tracking-widest"
              >
                Carte
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
