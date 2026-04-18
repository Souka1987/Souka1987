"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

/* ── Typing hook ─────────────────────────────────────── */
function useTyping(phrases: string[], speed = 60, pause = 2000) {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    if (prefersReduced) {
      setText(phrases[0]);
      return;
    }
    const current = phrases[phraseIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setPhraseIdx((i) => (i + 1) % phrases.length);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx, phrases, speed, pause, prefersReduced]);

  return text;
}

/* ── Stagger reveal ──────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── Component ───────────────────────────────────────── */
export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { ref, visible } = useReveal();

  useEffect(() => setMounted(true), []);

  const typedPhrase = useTyping([
    "Les Conquérants",
    "Les Points de Bascule",
    "L'Insolite",
    "Les Uchronies",
  ], 65, 1800);

  const words = ["HISTORY", "REIMAGINED"];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20"
      style={{ background: "#0A0F1E" }}
    >
      {/* ── Blur orbs ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute rounded-full"
          style={{ width: 700, height: 700, top: "50%", left: "50%",
            transform: "translate(-50%, -65%)",
            background: "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 65%)",
            filter: "blur(48px)" }} />
        <div className="absolute rounded-full"
          style={{ width: 380, height: 380, top: "25%", left: "8%",
            background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
            filter: "blur(60px)" }} />
        <div className="absolute rounded-full"
          style={{ width: 320, height: 320, bottom: "15%", right: "8%",
            background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
            filter: "blur(60px)" }} />
      </div>

      {/* ── Grille ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(37,99,235,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 75% 70% at 50% 40%, black 20%, transparent 100%)",
        }} />

      {/* ── Contenu ── */}
      <div ref={ref} className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

        {/* Badge pill */}
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-hacker/25 px-4 py-1.5 backdrop-blur-sm cursor-pointer hover:border-hacker/50 transition-colors duration-300"
          style={{ backgroundColor: "rgba(37,99,235,0.06)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-12px)",
            transition: "opacity 0.5s ease, transform 0.5s ease" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hacker opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-hacker" />
          </span>
          <span className="font-ui text-[11px] text-hacker/80 tracking-widest uppercase">
            Nouvelle mini-série disponible
          </span>
          <span className="font-ui text-[11px] text-hacker/40">→</span>
        </div>

        {/* Headline — kinetic stagger */}
        <h1 className="font-display leading-none tracking-wide select-none mb-2">
          {words.map((word, wi) => (
            <span
              key={word}
              className="block"
              style={{
                fontSize: "clamp(4.5rem, 13vw, 9rem)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.7s ease ${wi * 0.15}s, transform 0.7s ease ${wi * 0.15}s`,
                ...(wi === 1 ? {
                  background: "linear-gradient(135deg, #93C5FD 0%, #2563EB 45%, #818CF8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 24px rgba(37,99,235,0.35))",
                } : { color: "#E2E8F0" }),
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Typing phrase */}
        <div
          className="mb-8 h-8 flex items-center justify-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.4s",
          }}
        >
          <span className="font-ui text-sm text-texte-dim uppercase tracking-[0.25em]">
            Explorer&nbsp;:&nbsp;
          </span>
          <span className="font-ui text-sm text-hacker uppercase tracking-[0.25em]">
            {typedPhrase}
          </span>
          <span className="font-ui text-sm text-hacker ml-0.5 animate-cursor-blink">|</span>
        </div>

        {/* Sous-titre */}
        <p
          className="font-body text-lg text-texte-muted max-w-xl leading-relaxed mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
          }}
        >
          L'histoire n'est pas une suite d'événements.{" "}
          C'est un jeu de prismes —{" "}
          <span className="text-texte">
            chaque angle révèle une vérité différente.
          </span>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
          }}
        >
          <Link
            href="/conquerants"
            className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full font-ui text-xs uppercase tracking-[0.18em] text-white overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
              boxShadow: "0 0 24px rgba(37,99,235,0.28), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          >
            Explorer les Prismes
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            {/* Shimmer */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />
          </Link>

          <Link
            href="/mini-series"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-texte/12 font-ui text-xs uppercase tracking-[0.18em] text-texte-muted hover:border-hacker/40 hover:text-texte hover:bg-hacker/5 transition-all duration-300 cursor-pointer"
          >
            <span className="text-hacker">▶</span>
            Voir la Mini-Série
          </Link>
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid grid-cols-4 gap-6 sm:gap-12"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.6s",
          }}
        >
          {[
            { val: "161", label: "Entités" },
            { val: "4",   label: "Prismes" },
            { val: "21",  label: "Séries" },
            { val: "∞",   label: "Uchronies" },
          ].map((s, i) => (
            <div key={s.label} className="text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.6s ease ${0.65 + i * 0.08}s, transform 0.6s ease ${0.65 + i * 0.08}s`,
              }}
            >
              <span className="font-display text-3xl sm:text-4xl block"
                style={{
                  background: "linear-gradient(135deg, #93C5FD, #2563EB)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                {s.val}
              </span>
              <span className="font-ui text-[9px] text-texte-dim uppercase tracking-widest block mt-1">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: mounted ? 1 : 0, transition: "opacity 1s ease 1s" }}>
        <div className="w-5 h-8 rounded-full border border-texte/10 flex items-start justify-center pt-1.5">
          <div className="w-0.5 h-2 rounded-full bg-hacker/50"
            style={{ animation: "scrollDot 2s ease-in-out infinite" }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50%       { transform: translateY(6px); opacity: 0.3; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </section>
  );
}
