import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  DowntimeSection,
  FinalCtaSection,
  HeroSection,
  ProcessSection,
  ServicesSection,
  ShowcaseSection,
  TrustSection,
  WhyTagSection,
} from "@/components/sections/LandingSections";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(138,44,44,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_35%)]" />
      <Navbar />
      <main className="relative">
        <HeroSection />
        <WhyTagSection />
        <ServicesSection />
        <ShowcaseSection />
        <DowntimeSection />
        <TrustSection />
        <ProcessSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
