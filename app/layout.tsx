import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/vt323";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "History Reimagined — L'Histoire Autrement",
    template: "%s · History Reimagined",
  },
  description:
    "Une plateforme éditoriale historique. Explorez l'histoire sous quatre prismes : Les Conquérants, Les Points de Bascule, L'Insolite, Les Uchronies.",
  keywords: [
    "histoire",
    "historique",
    "uchronie",
    "Gengis Khan",
    "Napoléon",
    "Gallica",
    "editorial",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "History Reimagined",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-nuit text-texte font-body antialiased">
        {/* Overlay scanlines global — très subtil */}
        <div className="scanline-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
