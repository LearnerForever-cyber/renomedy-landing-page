import { Shield, Lock, FileText, CheckCircle } from "lucide-react";

export function TrustSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 border-t border-border/50">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="inline-flex items-center font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground font-bold mb-4">
            Security & Privacy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight text-balance">
            Your family's health data, locked in a digital vault.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            We don't sell medicines. We don't sell data to pharmacies. Renomedy is built purely to
            provide intelligence and clarity for your family.
          </p>
          <ul className="space-y-4">
            {[
              "End-to-end encryption for all health records",
              "HIPAA-aligned security architecture",
              "You control who sees what in your family",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Trust Visualization */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent blur-2xl rounded-[2rem]" />
          <div className="relative bg-surface border border-border shadow-soft rounded-3xl p-8 overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border/50 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Bank-Level Security</p>
                  <p className="text-xs text-muted-foreground">AES-256 Encryption Standard</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border/50 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 delay-75">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Zero Data Selling</p>
                  <p className="text-xs text-muted-foreground">Your data stays with your family</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border/50 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 delay-150">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">HIPAA Aligned</p>
                  <p className="text-xs text-muted-foreground">Global health privacy standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
