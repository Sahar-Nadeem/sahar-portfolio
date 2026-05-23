const items = [
  {
    role: "Remote Surveillance Analyst",
    desc: "Monitoring security systems, incident reporting, and real-time surveillance analysis.",
  },
  {
    role: "Center Manager",
    desc: "Managed academic operations, team leadership, and student coordination.",
  },
  {
    role: "Academic Head",
    desc: "Handled faculty management, academic administration, and operational responsibilities.",
  },
  {
    role: "Processing Officer",
    desc: "Worked on documentation and processing tasks with professional coordination.",
  },
  {
    role: "Data Entry Specialist",
    desc: "Handled records, reporting, and administrative tasks with accuracy and care.",
  },
  {
    role: "Sales Representative",
    desc: "Customer communication and sales coordination experience.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 bg-ink text-cream overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-gold/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">— Journey</span>
          <h2 className="mt-6 text-5xl sm:text-7xl font-display leading-tight">
            A path of <span className="font-script italic text-gold">experience.</span>
          </h2>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

          <div className="space-y-16">
            {items.map((item, i) => (
              <div
                key={item.role}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`md:px-12 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className="glass-dark rounded-2xl p-8 shadow-soft hover:border-gold/60 transition-colors">
                    <p className="font-script text-2xl text-gold mb-2">
                      0{i + 1}
                    </p>
                    <h3 className="text-2xl font-display text-cream mb-3">
                      {item.role}
                    </h3>
                    <p className="text-cream/70 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {/* dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gold ring-4 ring-ink" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
