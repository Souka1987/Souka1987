import Link from "next/link";

const QUESTIONS_PREVIEW = [
  {
    q: "§ I — Puis-je faire confiance aux reconstitutions IA ?",
    r: "Toute image générée par IA est labellisée [RECONSTITUTION IA]. Les archives authentiques proviennent de Gallica et des Archives Nationales. Ne jamais confondre les deux.",
  },
  {
    q: "§ II — Qu'est-ce qu'une uchronie rigoreuse ?",
    r: "Une uchronie balisée [UCHRONIE] part d'un point de divergence historiquement documenté et applique une logique causale cohérente. Pas de magie — que de la rigueur contrefactuelle.",
  },
  {
    q: "§ III — Les «Prismes» remplacent-ils les catégories ?",
    r: "Oui. Ici, on ne classe pas par «Antiquité / Moyen-Âge / Moderne». On lit par angle : Conquêtes, Basculements, Insolites, Uchronies.",
  },
];

export function FAQTeaser() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Titre */}
          <div>
            <span className="font-ui text-[10px] text-texte-dim/50 uppercase tracking-[0.3em] block mb-3">
              Mode d'emploi
            </span>
            <h2 className="font-display text-5xl sm:text-6xl text-texte leading-none mb-4">
              GUIDE POUR LES ÉGARÉS TEMPORELS
            </h2>
            <p className="font-body text-sm text-texte-muted leading-relaxed mb-8">
              Vous venez d'atterrir en 2024 après un voyage temporel mal calibré ?
              Ce manuel de survie est pour vous.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 font-ui text-xs text-hacker border border-hacker/30 px-5 py-2.5 hover:bg-hacker/10 transition-colors uppercase tracking-widest"
            >
              Consulter le manuel complet →
            </Link>
          </div>

          {/* Questions preview */}
          <div className="space-y-0 border border-nuit-border">
            {QUESTIONS_PREVIEW.map((item, i) => (
              <div
                key={i}
                className="border-b border-nuit-border last:border-b-0 p-5"
              >
                <h4 className="font-ui text-xs text-hacker mb-2 leading-snug">
                  {item.q}
                </h4>
                <p className="font-body text-sm text-texte-muted leading-relaxed">
                  {item.r}
                </p>
              </div>
            ))}
            <div className="p-4 bg-nuit-light">
              <span className="font-ui text-[9px] text-texte-dim uppercase tracking-widest">
                + 12 autres directives de survie temporelle →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
