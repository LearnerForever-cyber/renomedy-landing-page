import { Heart, Activity, ShieldCheck } from "lucide-react";

export function CoreCapabilities() {
  const capabilities = [
    {
      title: "Understand",
      subtitle: "Medication Clarity",
      desc: "Stop guessing what OD, BD, or TDS means. We translate medical jargon into plain English, clearly separating before-food and after-food instructions.",
      icon: Activity,
    },
    {
      title: "Track",
      subtitle: "Smart Reminders",
      desc: "Get notified exactly when it's time for the next dose. See at a glance if Mom took her morning blood pressure medication.",
      icon: Heart,
    },
    {
      title: "Care",
      subtitle: "Family Network",
      desc: "Invite siblings or caregivers. Keep everyone on the same page without endless WhatsApp messages asking 'Did Dad take his pills?'",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 border-t border-border/50">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground font-bold mb-4">
          Core Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight text-balance">
          Outcomes, not just features.
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {capabilities.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <div key={i} className="flex flex-col gap-4">
              <div className="h-12 w-12 rounded-2xl bg-surface border border-border shadow-sm flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{cap.title}</h3>
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-primary font-bold mt-1 mb-3">
                  {cap.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
