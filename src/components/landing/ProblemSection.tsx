export function ProblemSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 border-t border-border/50">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground font-bold mb-4">
          The Reality
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight text-balance">
          Managing family medication is a full-time job.
        </h2>
        <p className="text-lg text-muted-foreground">
          It's not just about taking a pill. It's about remembering schedules, understanding
          dosages, and worrying if your parents took their medicine on time.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            emoji: "📝",
            title: "Unreadable Prescriptions",
            desc: "Doctor shorthand like OD, BD, TDS leaves you guessing and searching Google for answers.",
          },
          {
            emoji: "⏰",
            title: "Missed Doses",
            desc: "When managing 5+ pills a day, missing an evening dose or confusing timings happens too often.",
          },
          {
            emoji: "😥",
            title: "Caregiver Anxiety",
            desc: "Living in a different city means constantly calling to ask, 'Did you take your medicine today?'",
          },
        ].map((p, i) => (
          <div
            key={i}
            className="group flex flex-col p-8 rounded-3xl bg-surface border border-border shadow-soft hover:shadow-elevated hover:border-primary/30 transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-2xl bg-background border border-border flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              {p.emoji}
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
