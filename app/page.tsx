import { PrismesNavbar } from "@/components/navbar/PrismesNavbar";
import { HeroSection } from "@/components/home/HeroSection";
import { EntitesFeatured } from "@/components/home/EntitesFeatured";
import { MiniSerieTeaser } from "@/components/home/MiniSerieTeaser";
import { LePrismeSection } from "@/components/home/LePrismeSection";
import { ArchiveTeaser } from "@/components/home/ArchiveTeaser";
import { FAQTeaser } from "@/components/home/FAQTeaser";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <PrismesNavbar />

      <main>
        {/* 1 — Hero : accroche dramatique */}
        <HeroSection />

        {/* 2 — Entités en vedette : système 3 niveaux */}
        <EntitesFeatured />

        {/* 3 — Mini-Série : scrollytelling teaser */}
        <MiniSerieTeaser />

        {/* 4 — Les Prismes : 4 angles de lecture */}
        <LePrismeSection />

        {/* 5 — Archive Centrale : aperçu */}
        <ArchiveTeaser />

        {/* 6 — Guide des Égarés Temporels : FAQ */}
        <FAQTeaser />
      </main>

      <Footer />
    </>
  );
}
