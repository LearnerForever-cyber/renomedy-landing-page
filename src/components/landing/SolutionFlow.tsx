import { ArrowDown } from "lucide-react";

export function SolutionFlow() {
  const steps = [
    {
      title: "Confusion",
      desc: "Messy, unreadable prescriptions and scattered papers.",
      active: false,
    },
    {
      title: "Understanding",
      desc: "AI decodes handwriting, shorthand, and timings.",
      active: false,
    },
    {
      title: "Intelligence",
      desc: "Interactions checked, safety alerts generated.",
      active: true,
    },
    {
      title: "Family Care",
      desc: "Everyone is in sync. Mom's meds are managed.",
      active: true,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 border-t border-border/50">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center font-mono text-[0.7rem] uppercase tracking-wider text-primary font-bold mb-4">
          The Renomedy Flow
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight text-balance">
          From chaos to clarity, in seconds.
        </h2>
        <p className="text-lg text-muted-foreground">
          How we transform a piece of paper into a collaborative care network.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-primary/50 to-primary -translate-x-1/2 z-0" />

        <div className="space-y-12 md:space-y-0 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 md:h-32 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content Box */}
              <div
                className={`w-full md:w-[45%] ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
              >
                <div
                  className={`p-6 rounded-2xl border transition-all duration-500 ${
                    step.active
                      ? "bg-surface shadow-elevated border-primary/30"
                      : "bg-surface/50 border-border opacity-70"
                  }`}
                >
                  <h3
                    className={`text-lg font-bold mb-2 ${step.active ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>

              {/* Center Node */}
              <div className="hidden md:flex h-12 w-12 rounded-full border-4 border-background bg-surface shadow-sm items-center justify-center z-10 shrink-0">
                <div
                  className={`h-3 w-3 rounded-full ${step.active ? "bg-primary animate-pulse" : "bg-muted-foreground"}`}
                />
              </div>

              {/* Mobile spacer / arrow */}
              <div className="md:hidden flex justify-center w-full">
                {index < steps.length - 1 && (
                  <ArrowDown className="text-muted-foreground h-5 w-5" />
                )}
              </div>

              {/* Empty Space for layout */}
              <div className="hidden md:block w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
