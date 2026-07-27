import { ArrowRight, CheckCircle } from "lucide-react";

export function ProductShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 border-t border-border/50 bg-gradient-to-b from-background to-surface-elevated/30">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center font-mono text-[0.7rem] uppercase tracking-wider text-primary font-bold mb-4">
          Core Engine
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight text-balance">
          The AI that reads what you can't.
        </h2>
        <p className="text-lg text-muted-foreground">
          Watch a messy handwritten Indian prescription transform into a clear, manageable digital
          schedule. No manual entry required.
        </p>
      </div>

      <div className="relative rounded-[2rem] border border-border/60 bg-surface shadow-elevated overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="grid md:grid-cols-2 gap-0 relative z-10">
          {/* Mock Before */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border/50 bg-background/50 backdrop-blur-sm flex flex-col justify-center items-center aspect-[4/3] md:aspect-auto">
            <div className="w-full max-w-sm relative">
              <div className="absolute -top-3 -left-3 bg-red-100 text-red-700 px-3 py-1 rounded-full text-[0.65rem] font-bold shadow-sm uppercase tracking-wider">
                Raw Input
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50 rotate-[-2deg] opacity-70 filter blur-[0.5px]">
                <div className="font-serif text-3xl mb-4 text-blue-900 handwriting">Rx</div>
                <div className="font-serif text-xl handwriting leading-loose text-blue-900/80">
                  Tab Telma 40mg 1-0-0
                  <br />
                  Tab Glycomet 500mg BD (AF)
                  <br />
                  Syp. Mucaine Gel 2tsf TDS
                </div>
              </div>
            </div>
          </div>

          {/* Central Arrow Overlay (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 bg-primary rounded-full items-center justify-center shadow-lg border-4 border-surface z-20">
            <ArrowRight className="h-6 w-6 text-primary-foreground" />
          </div>

          {/* Mock After */}
          <div className="p-8 md:p-12 bg-surface/80 backdrop-blur-sm flex flex-col justify-center items-center aspect-[4/3] md:aspect-auto">
            <div className="w-full max-w-sm space-y-4 relative">
              <div className="absolute -top-6 -left-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[0.65rem] font-bold shadow-sm uppercase tracking-wider">
                Structured Data
              </div>

              <div className="flex items-center justify-between p-4 bg-background border border-border/80 rounded-xl shadow-sm hover:border-primary/40 transition-colors">
                <div>
                  <p className="font-bold text-foreground text-sm">Telma 40mg</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Morning • 1 pill</p>
                </div>
                <CheckCircle className="h-5 w-5 text-emerald-500" />
              </div>

              <div className="flex items-center justify-between p-4 bg-background border border-border/80 rounded-xl shadow-sm hover:border-primary/40 transition-colors">
                <div>
                  <p className="font-bold text-foreground text-sm">Glycomet 500mg</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Morning & Night • After Food
                  </p>
                </div>
                <CheckCircle className="h-5 w-5 text-emerald-500" />
              </div>

              <div className="flex items-center justify-between p-4 bg-background border border-border/80 rounded-xl shadow-sm hover:border-primary/40 transition-colors">
                <div>
                  <p className="font-bold text-foreground text-sm">Mucaine Gel</p>
                  <p className="text-xs text-muted-foreground mt-0.5">3x Daily • 2 tsp</p>
                </div>
                <CheckCircle className="h-5 w-5 text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
