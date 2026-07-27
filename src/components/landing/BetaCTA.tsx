import { WaitlistForm } from "@/components/WaitlistForm";

export function BetaCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 border-t border-border/50">
      <div className="rounded-[2rem] bg-gradient-to-br from-surface to-surface-elevated border border-border/60 p-10 md:p-16 text-center shadow-soft relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 opacity-70 pointer-events-none" />

        <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
          <span className="inline-flex items-center font-mono text-[0.7rem] uppercase tracking-wider text-primary font-bold mb-4">
            Join the Closed Beta
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Secure your family's spot.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-pretty">
            We are onboarding a limited number of families in India to ensure a high-quality
            experience. Request access today.
          </p>

          <div className="w-full max-w-md">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
