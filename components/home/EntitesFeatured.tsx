import { entitesEnVedette } from "@/lib/data";
import { EntityCard } from "@/components/entity/EntityCard";

export function EntitesFeatured() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de section */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex-1 h-px bg-nuit-border" />
          <div className="text-center flex-shrink-0">
            <span className="font-ui text-[10px] text-hacker/60 uppercase tracking-[0.3em] block mb-2">
              Sélection éditoriale
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-texte leading-none">
              ENTITÉS EN VEDETTE
            </h2>
          </div>
          <div className="flex-1 h-px bg-nuit-border" />
        </div>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {entitesEnVedette.map((entite) => (
            <EntityCard key={entite.id} entite={entite} />
          ))}
        </div>

        {/* Note sur le système 3 niveaux */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-hacker/40" />
            <span className="font-ui text-[9px] text-texte-dim/50 uppercase tracking-widest">
              Survol → Accroche
            </span>
          </div>
          <div className="h-3 w-px bg-nuit-border" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-hacker/40" />
            <span className="font-ui text-[9px] text-texte-dim/50 uppercase tracking-widest">
              Clic → Battle Card
            </span>
          </div>
          <div className="h-3 w-px bg-nuit-border" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-hacker/40" />
            <span className="font-ui text-[9px] text-texte-dim/50 uppercase tracking-widest">
              Vue complète → Article + Sources
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
