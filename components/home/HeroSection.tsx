"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">

      {/* ── Fond : blur orbs ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        {/* Orbe bleue centrale */}
        <div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
            filter: "blur(40px)",
          }}
        />
        {/* Orbe violette gauche */}
        <div
          className="absolute rounded-full"
          style={{
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
            top: "30%",
            left: "10%",
            filter: "blur(60px)",
          }}
        />
        {/* Orbe cyan droite */}
        <div
          className="absolute rounded-full"
          style={{
            width: "350px",
            height: "350px",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
            bottom: "20%",
            right: "10%",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* ── Grille fine ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* ── Contenu ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >

        {/* Badge pill */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-hacker/25 bg-hacker/8 px-4 py-1.5 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(37,99,235,0.06)" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hacker opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-hacker" />
          </span>
          <span className="font-ui text-[11px] text-hacker/80 tracking-widest uppercase">
            Nouvelle mini-série disponible
          </span>
          <span className="font-ui text-[11px] text-hacker/50">→</span>
        </div>

        {/* Headline */}
        <h1 className="font-display leading-none tracking-wide select-none mb-6">
          <span className="block text-[clamp(4rem,12vw,8.5rem)] text-texte">
            HISTORY
          </span>
          <span
            className="block text-[clamp(4rem,12vw,8.5rem)]"
            style={{
              background:
                "linear-gradient(135deg, #60A5FA 0%, #2563EB 40%, #818CF8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(37,99,235,0.4))",
            }}
          >
            REIMAGINED
          </span>
        </h1>

        {/* Sous-titre */}
        <p className="font-body text-lg text-texte-muted max-w-xl leading-relaxed mb-10">
          L'histoire n'est pas une suite d'événements.
          C'est un jeu de prismes —{" "}
          <span className="text-texte">
            chaque angle révèle une vérité différente.
          </span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/conquerants"
            className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full font-ui text-xs uppercase tracking-[0.18em] text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
              boxShadow:
                "0 0 20px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            <span>Explorer les Prismes</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            {/* Shimmer */}
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              }}
            />
          </Link>

          <Link
            href="/mini-series"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-texte/15 font-ui text-xs uppercase tracking-[0.18em] text-texte-muted hover:border-hacker/40 hover:text-texte hover:bg-hacker/5 transition-all duration-300"
          >
            <span className="text-hacker">▶</span>
            Voir la Mini-Série
          </Link>
        </div>

        {/* Séparateur */}
        <div className="mt-16 flex items-center gap-4 w-full max-w-sm">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-nuit-border" />
          <span className="font-ui text-[9px] text-texte-dim/40 uppercase tracking-[0.3em]">
            en chiffres
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-nuit-border" />
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-4 gap-8">
          {[
            { val: "161", label: "Entités" },
            { val: "4", label: "Prismes" },
            { val: "21", label: "Séries" },
            { val: "∞", label: "Uchronies" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span
                className="font-display text-3xl sm:text-4xl block"
                style={{
                  background:
                    "linear-gradient(135deg, #93C5FD, #2563EB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.val}
              </span>
              <span className="font-ui text-[9px] text-texte-dim uppercase tracking-widest block mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Indicateur scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="w-5 h-8 rounded-full border border-texte/10 flex items-start justify-center pt-1.5"
        >
          <div
            className="w-0.5 h-2 rounded-full bg-hacker/60"
            style={{
              animation: "scrollDot 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
