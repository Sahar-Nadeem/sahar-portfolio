const skills = [
  { title: "Frontend Development", level: 92, note: "React · HTML · CSS · JS" },
  { title: "Responsive Web Design", level: 95, note: "Mobile-first · Fluid layouts" },
  { title: "UI / UX Design", level: 88, note: "Figma · Wireframes · Systems" },
  { title: "Problem Solving", level: 90, note: "Logic · Debugging · Patterns" },
  { title: "Team Coordination", level: 93, note: "Leadership · Collaboration" },
  { title: "Communication Skills", level: 95, note: "Clients · Stakeholders" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">— Capabilities</span>
          <h2 className="mt-6 text-5xl sm:text-7xl font-display leading-tight">
            Skills, <span className="font-script italic text-gold">refined.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-cream p-8 hover:border-gold/60 hover:-translate-y-1 transition-all duration-500 shadow-soft"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-display text-ink">{s.title}</h3>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">
                    {s.note}
                  </p>
                </div>
                <span className="font-script text-3xl text-gold">{s.level}%</span>
              </div>
              <div className="relative h-px w-full bg-ink/10 overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-soft to-gold transition-all duration-1000 group-hover:from-gold group-hover:to-ink"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
