"use client";

import React, { useEffect, useRef } from "react";

// Palette adaptée au design system History Reimagined
const colors = {
  50:  "#E2E8F0", // texte principal
  100: "#94A3B8", // texte muted
  200: "#3B82F6", // hacker glow
  300: "#2563EB", // hacker principal
  400: "#1D4ED8", // hacker dim
  500: "#1E40AF", // hacker profond
  600: "#1E293B", // nuit border
  700: "#0D1526", // nuit light
  800: "#0A0F1E", // nuit (fond principal)
  900: "#070B15", // nuit deep
};

export function Component() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll<HTMLElement>(".hr-word");
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay") || "0", 10);
      setTimeout(() => {
        word.style.animation = "wordAppear 0.8s ease-out forwards";
      }, delay);
    });

    // Mouse gradient
    const gradient = gradientRef.current;
    function onMouseMove(e: MouseEvent) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + "px";
        gradient.style.top  = e.clientY - 192 + "px";
        gradient.style.opacity = "1";
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = "0";
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Word hover glow
    words.forEach((word) => {
      word.addEventListener("mouseenter", () => {
        word.style.textShadow = "0 0 20px rgba(59,130,246,0.6)";
        word.style.color = "#60A5FA";
      });
      word.addEventListener("mouseleave", () => {
        word.style.textShadow = "none";
        word.style.color = "";
      });
    });

    // Click ripple
    function onClick(e: MouseEvent) {
      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position:fixed; left:${e.clientX}px; top:${e.clientY}px;
        width:4px; height:4px;
        background:rgba(37,99,235,0.7);
        border-radius:50%;
        transform:translate(-50%,-50%);
        pointer-events:none;
        animation:pulseGlow 1s ease-out forwards;
      `;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener("click", onClick);

    // Floating elements on scroll
    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document.querySelectorAll<HTMLElement>(".hr-floating").forEach((el, i) => {
          setTimeout(() => { el.style.animationPlayState = "running"; }, i * 200);
        });
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen text-texte font-body overflow-hidden relative w-full"
      style={{
        background: `linear-gradient(135deg, ${colors[900]} 0%, #000000 50%, ${colors[800]} 100%)`,
      }}
    >
      {/* SVG grid */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hr-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(37,99,235,0.07)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hr-grid)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="hr-grid-line" style={{ animationDelay: "0.5s" }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="hr-grid-line" style={{ animationDelay: "1s" }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="hr-grid-line" style={{ animationDelay: "1.5s" }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="hr-grid-line" style={{ animationDelay: "2s" }} />
        <line x1="50%" y1="0" x2="50%" y2="100%" className="hr-grid-line" style={{ animationDelay: "2.5s", opacity: 0.04 }} />
        <line x1="0" y1="50%" x2="100%" y2="50%" className="hr-grid-line" style={{ animationDelay: "3s", opacity: 0.04 }} />
        <circle cx="20%" cy="20%" r="2" className="hr-detail-dot" style={{ animationDelay: "3s" }} />
        <circle cx="80%" cy="20%" r="2" className="hr-detail-dot" style={{ animationDelay: "3.2s" }} />
        <circle cx="20%" cy="80%" r="2" className="hr-detail-dot" style={{ animationDelay: "3.4s" }} />
        <circle cx="80%" cy="80%" r="2" className="hr-detail-dot" style={{ animationDelay: "3.6s" }} />
        <circle cx="50%" cy="50%" r="1.5" className="hr-detail-dot" style={{ animationDelay: "4s" }} />
      </svg>

      {/* Coin decoratifs */}
      {[
        "top-8 left-8",
        "top-8 right-8",
        "bottom-8 left-8",
        "bottom-8 right-8",
      ].map((pos, i) => (
        <div
          key={pos}
          className={`hr-corner absolute ${pos} w-12 h-12`}
          style={{ animationDelay: `${4 + i * 0.2}s` }}
        >
          <div
            className="absolute w-1.5 h-1.5 opacity-40"
            style={{
              background: colors[300],
              top: pos.includes("bottom") ? "auto" : 0,
              bottom: pos.includes("bottom") ? 0 : "auto",
              left: pos.includes("right") ? "auto" : 0,
              right: pos.includes("right") ? 0 : "auto",
              boxShadow: `0 0 8px ${colors[300]}`,
            }}
          />
        </div>
      ))}

      {/* Particules flottantes */}
      {[
        { top: "25%", left: "15%" },
        { top: "60%", left: "85%" },
        { top: "40%", left: "10%" },
        { top: "75%", left: "90%" },
      ].map((style, i) => (
        <div
          key={i}
          className="hr-floating absolute w-1 h-1 rounded-full"
          style={{
            ...style,
            background: colors[300],
            animationDelay: `${5 + i * 0.5}s`,
            animationPlayState: "paused",
            boxShadow: `0 0 6px ${colors[300]}`,
          }}
        />
      ))}

      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between items-center px-8 py-16 md:px-16 md:py-20">

        {/* Tagline haut */}
        <div className="text-center">
          <h2 className="font-ui text-[10px] md:text-xs font-light uppercase tracking-[0.25em] opacity-70"
            style={{ color: colors[100] }}>
            {[
              { text: "Bienvenue sur", delay: 0 },
              { text: "History", delay: 200 },
              { text: "Reimagined", delay: 400, bold: true },
              { text: "—", delay: 600 },
              { text: "L'Histoire", delay: 800 },
              { text: "autrement.", delay: 1000 },
            ].map(({ text, delay, bold }) => (
              <span
                key={text + delay}
                className="hr-word mx-1 opacity-0 inline-block"
                data-delay={delay}
                style={{ fontWeight: bold ? 700 : 300 }}
              >
                {text}
              </span>
            ))}
          </h2>
          <div className="mt-4 mx-auto w-16 h-px opacity-20"
            style={{ background: `linear-gradient(to right, transparent, ${colors[200]}, transparent)` }} />
        </div>

        {/* Headline principale */}
        <div className="text-center max-w-5xl mx-auto relative">
          <h1 className="font-display leading-tight tracking-wide"
            style={{ color: colors[50] }}>
            <div className="mb-4 md:mb-6"
              style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}>
              {[
                { text: "RÉINVENTER", delay: 1600 },
                { text: "L'HISTOIRE,", delay: 1800 },
                { text: "UN", delay: 2000 },
                { text: "PRISME", delay: 2200 },
                { text: "À", delay: 2350 },
                { text: "LA", delay: 2500 },
                { text: "FOIS.", delay: 2650 },
              ].map(({ text, delay }) => (
                <span
                  key={text + delay}
                  className="hr-word mx-2 opacity-0 inline-block"
                  data-delay={delay}
                >
                  {text}
                </span>
              ))}
            </div>
            <div style={{
              fontSize: "clamp(1.4rem, 4vw, 2.8rem)",
              color: colors[100],
              fontWeight: 300,
            }}>
              {[
                { text: "Conquêtes,", delay: 2900 },
                { text: "basculements,", delay: 3050 },
                { text: "insolite", delay: 3200 },
                { text: "et", delay: 3350 },
                { text: "uchronies", delay: 3500 },
                { text: "—", delay: 3650 },
                { text: "quatre", delay: 3750 },
                { text: "prismes,", delay: 3900 },
                { text: "une", delay: 4000 },
                { text: "vérité.", delay: 4150 },
              ].map(({ text, delay }) => (
                <span
                  key={text + delay}
                  className="hr-word mx-1.5 opacity-0 inline-block"
                  data-delay={delay}
                >
                  {text}
                </span>
              ))}
            </div>
          </h1>

          {/* Traits latéraux décoratifs */}
          <div className="absolute -left-8 top-1/2 w-4 h-px opacity-20"
            style={{ background: colors[200], animation: "wordAppear 1s ease-out forwards", animationDelay: "3.5s" }} />
          <div className="absolute -right-8 top-1/2 w-4 h-px opacity-20"
            style={{ background: colors[200], animation: "wordAppear 1s ease-out forwards", animationDelay: "3.7s" }} />
        </div>

        {/* Tagline bas */}
        <div className="text-center">
          <div className="mb-4 mx-auto w-16 h-px opacity-20"
            style={{ background: `linear-gradient(to right, transparent, ${colors[200]}, transparent)` }} />
          <h2 className="font-ui text-[10px] md:text-xs font-light uppercase tracking-[0.25em] opacity-70"
            style={{ color: colors[100] }}>
            {[
              { text: "4 prismes", delay: 4400 },
              { text: "·", delay: 4500 },
              { text: "161 entités", delay: 4600 },
              { text: "·", delay: 4700 },
              { text: "Sources", delay: 4800 },
              { text: "Gallica", delay: 4950 },
              { text: "·", delay: 5050 },
              { text: "Toujours", delay: 5150 },
              { text: "sourcé.", delay: 5300 },
            ].map(({ text, delay }) => (
              <span
                key={text + delay}
                className="hr-word mx-1 opacity-0 inline-block"
                data-delay={delay}
              >
                {text}
              </span>
            ))}
          </h2>
          <div className="mt-6 flex justify-center space-x-3 opacity-0"
            style={{ animation: "wordAppear 1s ease-out forwards", animationDelay: "4.5s" }}>
            {["forge", "ame", "miroir", "envers"].map((theme, i) => {
              const themeColors = ["#4ADE80", "#FACC15", "#F472B6", "#FB923C"];
              return (
                <div key={theme} className="w-1.5 h-1.5 rounded-full"
                  style={{ background: themeColors[i], opacity: 0.6, boxShadow: `0 0 6px ${themeColors[i]}` }} />
              );
            })}
          </div>
        </div>
      </div>

      {/* Mouse gradient follower */}
      <div
        ref={gradientRef}
        className="fixed pointer-events-none w-96 h-96 rounded-full blur-3xl transition-all duration-500 ease-out opacity-0"
        style={{ background: `radial-gradient(circle, ${colors[500]}18 0%, transparent 100%)` }}
      />
    </div>
  );
}
