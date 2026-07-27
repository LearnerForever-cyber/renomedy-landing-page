import { BrainCircuit, Database, LockKeyhole } from "lucide-react";

export function AiIntelligenceLayer() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 border-t border-border/50">
      <div className="rounded-[2.5rem] bg-foreground text-background overflow-hidden relative border border-border">
        {/* Background mesh/glow effect for dark theme section */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-50" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 sm:p-12 md:p-16 items-center">
          <div>
            <span className="inline-flex items-center font-mono text-[0.7rem] uppercase tracking-wider text-primary font-bold mb-4">
              Intelligence Layer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-balance text-white">
              Built for Indian healthcare complexity.
            </h2>
            <p className="text-lg text-white/70 mb-8 text-pretty">
              Generic OCR fails on doctor handwriting. We trained our intelligence layer
              specifically on Indian prescription formats, abbreviations, and medication databases.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <BrainCircuit className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Contextual Decoding</h4>
                  <p className="text-sm text-white/60 mt-1">
                    Understands the difference between 1-0-1 and BD based on the specific medication
                    context.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Database className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Continuous Learning Database</h4>
                  <p className="text-sm text-white/60 mt-1">
                    Our localized drug database identifies Indian brand names and their generic
                    compositions instantly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <LockKeyhole className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">On-Device Privacy</h4>
                  <p className="text-sm text-white/60 mt-1">
                    Processing happens securely. Your family's medical data never feeds public AI
                    models.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Abstract visualization of the AI processing */}
          <div className="flex justify-center items-center h-full min-h-[300px] relative">
            <div className="absolute inset-0 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md flex flex-col justify-center items-center p-8">
              <div className="w-full flex justify-between items-end mb-4 h-32 px-4">
                {[40, 70, 45, 90, 65, 80, 50, 100].map((h, i) => (
                  <div
                    key={i}
                    className="w-2 bg-primary rounded-t-full opacity-80"
                    style={{ height: `${h}%`, animation: `pulse 2s infinite ${i * 0.2}s` }}
                  />
                ))}
              </div>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />
              <p className="font-mono text-xs text-primary text-center">
                PROCESSING_CONFIDENCE: 99.8%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
