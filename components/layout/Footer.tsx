import Link from "next/link";
import { PRISMES } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-nuit-border mt-24">
      {/* Bande supérieure */}
      <div className="bg-nuit-light border-b border-nuit-border py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <span className="font-display text-5xl text-hacker block mb-2">
              HR.
            </span>
            <p className="font-ui text-[10px] text-texte-dim uppercase tracking-[0.2em] leading-relaxed">
              History Reimagined
              <br />
              L'histoire autrement
            </p>
          </div>

          {/* Prismes */}
          <div>
            <h4 className="font-ui text-[10px] text-texte-dim/50 uppercase tracking-[0.2em] mb-4">
              Prismes
            </h4>
            <ul className="space-y-2">
              {PRISMES.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/${p.id}`}
                    className="font-ui text-xs text-texte-muted hover:text-texte transition-colors flex items-center gap-2"
                  >
                    <span style={{ color: p.couleur }}>{p.icon}</span>
                    {p.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-ui text-[10px] text-texte-dim/50 uppercase tracking-[0.2em] mb-4">
              Ressources
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Archive Centrale", href: "/archive" },
                { label: "Carte Mondiale", href: "/carte" },
                { label: "Timeline", href: "/timeline" },
                { label: "Mini-Séries", href: "/mini-series" },
                { label: "Guide des Égarés", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui text-xs text-texte-muted hover:text-texte transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sources */}
          <div>
            <h4 className="font-ui text-[10px] text-texte-dim/50 uppercase tracking-[0.2em] mb-4">
              Sources & Éthique
            </h4>
            <ul className="space-y-2 font-ui text-[10px] text-texte-dim leading-relaxed">
              <li>Archives : Gallica / BnF</li>
              <li>Archives Nationales de France</li>
              <li>Images IA : Midjourney</li>
              <li>Upscaling : Magnific AI</li>
              <li className="pt-2 border-t border-nuit-border text-texte-dim/40">
                Les reconstitutions IA sont
                <br />
                toujours labellisées [RECONSTITUTION IA]
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bande inférieure */}
      <div className="py-4 px-6 bg-nuit">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-ui text-[9px] text-texte-dim/30 uppercase tracking-widest">
            © 2024 History Reimagined · Tous droits réservés
          </span>
          <span className="font-display text-lg text-texte-dim/20">
            L'HISTOIRE EST UN PRISME
          </span>
        </div>
      </div>
    </footer>
  );
}
