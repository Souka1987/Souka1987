import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Grille de fond */}
      <div
        className="absolute inset-0 bg-grid-blueprint bg-grid opacity-100"
        aria-hidden="true"
      />

      {/* Gradient radial depuis le centre */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Scanline animée */}
      <div
        className="absolute left-0 right-0 h-px animate-scanline pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(37,99,235,0.4), transparent)",
          top: 0,
        }}
        aria-hidden="true"
      />

      {/* Éléments de coin décoratifs */}
      <div
        className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-hacker/20"
        aria-hidden="true"
      />
      <div
        className="absolute top-24 right-8 w-16 h-16 border-r-2 border-t-2 border-hacker/20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-hacker/20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-hacker/20"
        aria-hidden="true"
      />

      {/* Contenu principal */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Épigraphe */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-hacker/30" />
          <span className="font-ui text-[10px] text-hacker/60 uppercase tracking-[0.4em]">
            Plateforme éditoriale historique · Est. 2024
          </span>
          <div className="h-px w-16 bg-hacker/30" />
        </div>

        {/* Titre principal en VT323 */}
        <h1 className="font-display leading-none select-none">
          <span className="block text-[clamp(5rem,15vw,10rem)] text-texte tracking-wide">
            HISTORY
          </span>
          <span
            className="block text-[clamp(5rem,15vw,10rem)] text-hacker tracking-wide animate-glow-pulse"
            style={{
              textShadow:
                "0 0 30px rgba(37,99,235,0.5), 0 0 80px rgba(37,99,235,0.2)",
            }}
          >
            REIMAGINED
            <span className="animate-cursor-blink text-hacker/80">█</span>
          </span>
        </h1>

        {/* Sous-titre */}
        <p className="font-body text-lg text-texte-muted max-w-2xl mx-auto mt-10 mb-12 leading-relaxed">
          L'histoire n'est pas une suite d'événements.{" "}
          <br className="hidden sm:block" />
          C'est un jeu de prismes —{" "}
          <em className="text-texte not-italic">
            chaque angle révèle une vérité différente.
          </em>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/conquerants"
            className="group px-8 py-3.5 bg-hacker text-white font-ui text-xs uppercase tracking-[0.2em] hover:bg-hacker-dim transition-colors duration-200 relative overflow-hidden"
          >
            <span className="relative z-10">Explorer les Prismes</span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-200" />
          </Link>
          <Link
            href="/mini-series"
            className="group px-8 py-3.5 border border-texte/20 text-texte-muted font-ui text-xs uppercase tracking-[0.2em] hover:border-hacker/50 hover:text-texte transition-all duration-200"
          >
            ▶ Voir la Mini-Série
          </Link>
        </div>

        {/* Statistiques rapides */}
        <div className="mt-16 flex items-center justify-center gap-8 sm:gap-16">
          {[
            { val: "161", label: "entités historiques" },
            { val: "4", label: "prismes de lecture" },
            { val: "21", label: "séries éditoriales" },
            { val: "∞", label: "uchronies possibles" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="font-display text-3xl sm:text-4xl text-hacker block">
                {stat.val}
              </span>
              <span className="font-ui text-[9px] text-texte-dim uppercase tracking-widest block mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Indicateur scroll en bas */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-ui text-[9px] text-texte-dim/40 uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-hacker/40 to-transparent" />
      </div>
    </section>
  );
}
