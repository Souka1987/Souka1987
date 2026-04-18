import Link from "next/link";
import { miniSerieGengis } from "@/lib/data";
import type { Episode } from "@/lib/types";

function EpisodeCard({
  episode,
  isFirst,
}: {
  episode: Episode;
  isFirst: boolean;
}) {
  const statutStyle = {
    diffuse: { label: "Diffusé", color: "#4ADE80" },
    "en-cours": { label: "En cours", color: "#2563EB" },
    "a-venir": { label: "À venir", color: "#475569" },
  };
  const statut = statutStyle[episode.statut];

  return (
    <div
      className="flex-none w-64 sm:w-72 border p-5 transition-colors duration-200 relative overflow-hidden"
      style={{
        borderColor: isFirst ? "#2563EB40" : "#1E293B",
        backgroundColor: isFirst ? "rgba(37,99,235,0.06)" : "#0F1729",
      }}
    >
      {/* Numéro épisode */}
      <span
        className="font-display text-5xl leading-none block mb-3"
        style={{ color: isFirst ? "#2563EB" : "#1E293B" }}
      >
        {episode.numero}
      </span>

      {/* Lieu */}
      <div className="flex items-center gap-2 mb-2">
        <span className="font-ui text-[9px] text-texte-dim uppercase tracking-widest">
          📍 {episode.lieu}, {episode.pays}
        </span>
      </div>

      {/* Titre */}
      <h4 className="font-title text-sm text-texte font-medium leading-snug mb-3">
        {episode.titre}
      </h4>

      {/* Résumé */}
      <p className="font-body text-[11px] text-texte-dim leading-relaxed mb-4">
        {episode.resume}
      </p>

      {/* Statut */}
      <div className="flex items-center gap-1.5">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: statut.color }}
        />
        <span
          className="font-ui text-[9px] uppercase tracking-widest"
          style={{ color: statut.color }}
        >
          {statut.label}
        </span>
      </div>

      {/* Halo de fond */}
      {isFirst && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 0% 0%, rgba(37,99,235,0.1) 0%, transparent 60%)",
          }}
        />
      )}
    </div>
  );
}

export function MiniSerieTeaser() {
  const serie = miniSerieGengis;

  return (
    <section className="py-24 bg-nuit-light border-y border-nuit-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-ui text-[10px] text-hacker uppercase tracking-[0.3em]">
                ▶ Mini-Série Scrollytelling
              </span>
              <span className="font-ui text-[9px] text-texte-dim border border-nuit-border px-2 py-0.5">
                En cours
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-texte leading-tight mb-2">
              {serie.titre.toUpperCase()}
            </h2>
            <p className="font-ui text-[10px] text-texte-dim uppercase tracking-[0.2em]">
              {serie.sousTitre}
            </p>
          </div>

          <p className="font-body text-sm text-texte-muted max-w-xs leading-relaxed">
            {serie.description}
          </p>
        </div>

        {/* Épisodes — défilement horizontal */}
        <div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-none">
          {serie.episodes.map((ep, i) => (
            <EpisodeCard key={ep.numero} episode={ep} isFirst={i === 0} />
          ))}

          {/* Carte "à venir" */}
          <div className="flex-none w-48 border border-dashed border-nuit-border flex flex-col items-center justify-center gap-2 py-8 px-4">
            <span className="font-display text-2xl text-texte-dim/20">+∞</span>
            <span className="font-ui text-[9px] text-texte-dim/30 text-center uppercase tracking-widest leading-relaxed">
              Nouvelles
              <br />
              mini-séries
              <br />à venir
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex items-center gap-6">
          <Link
            href={`/mini-series/${serie.id}`}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-hacker text-white font-ui text-xs uppercase tracking-[0.2em] hover:bg-hacker-dim transition-colors"
          >
            <span>▶</span> Commencer l'odyssée
          </Link>
          <span className="font-ui text-[10px] text-texte-dim">
            Épisode 01 · Gratuit · Scroll interactif
          </span>
        </div>
      </div>
    </section>
  );
}
