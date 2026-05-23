import portrait from "@/assets/sahar-portrait.jpeg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20 grain">
      {/* ambient golden blooms */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-gold-soft/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Portfolio · 2026
            </span>
          </div>

          <h1 className="reveal text-5xl sm:text-7xl lg:text-[8rem] font-display leading-[0.95] tracking-tight">
            Sahar
            <br />
            <span className="font-script italic gradient-gold-text">Nadeem</span>
          </h1>

          <p className="reveal-slow text-sm uppercase tracking-[0.35em] text-ink/70">
            Web Developer · Creative Designer · Frontend Developer
          </p>

          <div className="reveal-slow max-w-xl space-y-5">
            <p className="font-display text-2xl sm:text-3xl leading-snug text-ink/90">
              Designing modern digital experiences with{" "}
              <span className="italic text-gold">creativity, elegance,</span>{" "}
              and purpose.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I create responsive, visually appealing, and user-friendly websites
              with modern UI and clean frontend development.
            </p>
          </div>

          <div className="reveal-slow flex flex-wrap gap-4 pt-2">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-ink text-cream px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-ink transition-all duration-500"
            >
              View My Work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-ink/30 px-7 py-4 text-xs uppercase tracking-[0.25em] text-ink hover:border-gold hover:text-gold transition-all duration-500"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="reveal-slow relative mx-auto aspect-[4/5] max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/40 via-gold-soft/20 to-transparent blur-2xl" />
            <div className="absolute -top-6 -left-6 right-6 bottom-6 rounded-[2rem] border border-gold/50" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-luxe">
              <img
                src={portrait}
                alt="Sahar Nadeem"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            </div>
          
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="relative mt-24 overflow-hidden border-y border-ink/10 py-6">
        <div className="marquee flex gap-16 whitespace-nowrap font-display text-3xl text-ink/80">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              {["Frontend", "UI / UX", "WordPress", "React", "Figma", "Bootstrap", "PHP", "ASP.NET"].map((w) => (
                <span key={w} className="flex items-center gap-16">
                  <span className="italic font-script text-gold">{w}</span>
                  <span className="text-gold">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
