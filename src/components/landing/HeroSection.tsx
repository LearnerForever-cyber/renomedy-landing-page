import { CheckCircle } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { WaitlistForm } from "@/components/WaitlistForm";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">
        <div className="max-w-xl">
          <span className="inline-flex items-center font-mono text-[0.7rem] uppercase tracking-wider text-primary font-bold mb-6">
            Closed Beta • Early Access
          </span>

          <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.25rem] font-bold leading-[1.05] tracking-tight text-foreground text-balance">
            Prescription intelligence for the whole family
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground text-pretty font-medium leading-relaxed">
            Turn messy prescriptions into clear schedules. Our AI platform decodes Indian
            handwriting and coordinates care across your family securely.
          </p>

          {/* Waitlist CTA */}
          <div className="mt-10 max-w-md">
            <WaitlistForm />
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-surface border-2 border-background flex items-center justify-center text-[0.6rem] font-bold">
                1
              </div>
              <div className="w-6 h-6 rounded-full bg-surface border-2 border-background flex items-center justify-center text-[0.6rem] font-bold">
                2
              </div>
              <div className="w-6 h-6 rounded-full bg-surface border-2 border-background flex items-center justify-center text-[0.6rem] font-bold">
                3
              </div>
            </div>
            <p>Join 500+ families on the waitlist.</p>
          </div>

          {/* Trust Row */}
          <div className="mt-10 pt-8 border-t border-border/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm font-medium">
              <div className="flex items-center gap-2.5 text-foreground">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                Built for Indian prescriptions
              </div>
              <div className="flex items-center gap-2.5 text-foreground">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                End-to-end encrypted
              </div>
              <div className="flex items-center gap-2.5 text-foreground">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                No data selling
              </div>
              <div className="flex items-center gap-2.5 text-foreground">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                HIPAA-aligned security
              </div>
            </div>
          </div>
        </div>

        {/* Phone Mockup - Let it breathe with generous spacing */}
        <div className="relative flex justify-center lg:justify-end lg:-mr-8 xl:-mr-16">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent blur-3xl rounded-full scale-75 transform -translate-y-12" />
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
