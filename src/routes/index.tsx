import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { PhoneMockup } from "@/components/PhoneMockup";
import { WaitlistForm } from "@/components/WaitlistForm";
import { initAnalytics } from "@/lib/analytics";
import logo from "@/assets/renomedy-logo.png";
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

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How private is my prescription data?",
      answer:
        "Completely private. Your prescriptions are processed securely and never shared. HIPAA-aligned architecture. Your family data stays within your family.",
    },
    {
      question: "Does Renomedy replace my doctor?",
      answer:
        "No. Renomedy supports your relationship with doctors, not replaces it. We decode what doctors already prescribed. All guidance says 'consult your doctor.'",
    },
    {
      question: "Why focus on Indian prescriptions?",
      answer:
        "Indian prescription handwriting is different. Dosage abbreviations like OD (once daily), BD (twice daily), TDS (thrice daily) are specific. We're built for this, not generic.",
    },
    {
      question: "Is Renomedy for everyone?",
      answer:
        "Renomedy is built for families managing BP, Diabetes, Thyroid, and chronic care. Perfect if you have elderly parents or manage medicines for multiple family members.",
    },
    {
      question: "Can my family members access my medicines?",
      answer:
        "Only if you invite them. You control who sees what. Parents might see kids' medicines. Kids might see parents' medicines. Zero forced sharing.",
    },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hi Renomedy, I'd like early access to the family care platform. Are you onboarding more families?",
  );
  const whatsappLink = `https://wa.me/919035658818?text=${whatsappMessage}`;

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
