import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { initAnalytics } from "@/lib/analytics";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionFlow } from "@/components/landing/SolutionFlow";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { CoreCapabilities } from "@/components/landing/CoreCapabilities";
import { AiIntelligenceLayer } from "@/components/landing/AiIntelligenceLayer";
import { FounderMission } from "@/components/landing/FounderMission";
import { BetaCTA } from "@/components/landing/BetaCTA";
import { Footer } from "@/components/landing/Footer";
import icon from "@/assets/renomedy-icon.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Renomedy — Family Prescription & Medication Care" },
      {
        name: "description",
        content:
          "Understand prescriptions, manage medicines, and care for your family with confidence. AI prescription scanning, medication reminders, caregiver coordination. Family Care Simplified.",
      },
      { property: "og:title", content: "Renomedy — Family Care Simplified" },
      {
        property: "og:description",
        content:
          "Understand prescriptions, manage medicines, and coordinate care for your whole family. Family Care Simplified.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "icon", href: "/renomedy-icon.png" }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <main className="min-h-screen">
      <Toaster richColors position="top-center" />

      {/* Nav */}
      <header className="mx-auto max-w-6xl px-6 pt-6 sm:pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={icon} alt="Renomedy icon" className="h-9 w-9 object-contain" />
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              Renomedy
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
            Early Access • Family-First • India-Built
          </span>
        </div>
      </header>

      <HeroSection />

      <ProductShowcase />
      <CoreCapabilities />
      <AiIntelligenceLayer />
      <SolutionFlow />

      <ProblemSection />

      <TrustSection />

      <FounderMission />

      <BetaCTA />

      <Footer />
    </main>
  );
}
