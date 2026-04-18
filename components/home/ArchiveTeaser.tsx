import Link from "next/link";

const SERIES = [
  {
    id: "empires",
    categorie: "Forge des Civilisations",
    couleur: "#4ADE80",
    titres: [
      "L'Empire Mongol",
      "Rome Éternelle",
      "L'Empire Ottoman",
      "La Pax Britannica",
    ],
  },
  {
    id: "basculements",
    categorie: "Points de Bascule",
    couleur: "#FACC15",
    titres: [
      "La Peste Noire",
      "La Révolution Française",
      "La Révolution Industrielle",
      "Hiroshima",
    ],
  },
  {
    id: "anecdotes",
    categorie: "Miroir des Vanités",
    couleur: "#F472B6",
    titres: [
      "Guerres Absurdes",
      "Erreurs qui ont changé l'histoire",
      "Les messagers oubliés",
      "Diplomaties rocambolesques",
    ],
  },
];

export function ArchiveTeaser() {
  return (
    <section className="py-24 px-6 bg-nuit-light border-y border-nuit-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-ui text-[10px] text-texte-dim/50 uppercase tracking-[0.3em] block mb-3">
              21 séries · 5 catégories
            </span>
            <h2 className="font-display text-5xl text-texte leading-none">
              ARCHIVE CENTRALE
            </h2>
          </div>
          <Link
            href="/archive"
            className="font-ui text-xs text-hacker border border-hacker/30 px-4 py-2 hover:bg-hacker/10 transition-colors uppercase tracking-widest flex-shrink-0"
          >
            Tout explorer →
          </Link>
        </div>

        {/* Aperçu des séries */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERIES.map((serie) => (
            <div
              key={serie.id}
              className="border border-nuit-border p-6 hover:border-opacity-50 transition-colors duration-300 group"
              style={{
                borderLeftColor: serie.couleur,
                borderLeftWidth: "2px",
              }}
            >
              <span
                className="font-ui text-[9px] uppercase tracking-[0.2em] block mb-4"
                style={{ color: serie.couleur }}
              >
                {serie.categorie}
              </span>
              <ul className="space-y-2">
                {serie.titres.map((titre) => (
                  <li key={titre}>
                    <span className="font-body text-sm text-texte-muted group-hover:text-texte transition-colors duration-300 flex items-center gap-2">
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: serie.couleur }}
                      />
                      {titre}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/archive/${serie.id}`}
                className="mt-4 inline-flex font-ui text-[9px] uppercase tracking-widest text-texte-dim hover:text-texte transition-colors"
              >
                Voir la série →
              </Link>
            </div>
          ))}
        </div>

        {/* Stats de l'archive */}
        <div className="mt-8 pt-8 border-t border-nuit-border flex flex-wrap gap-6">
          {[
            { val: "161", label: "Entités historiques" },
            { val: "21", label: "Séries éditoriales" },
            { val: "5", label: "Catégories thématiques" },
            { val: "12+", label: "Siècles couverts" },
          ].map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="font-display text-2xl text-hacker">{s.val}</span>
              <span className="font-ui text-[9px] text-texte-dim uppercase tracking-widest">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
