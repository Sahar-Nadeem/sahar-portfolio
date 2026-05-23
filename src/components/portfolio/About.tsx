const skills = [
  "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery",
  "PHP", "ASP.NET", "WordPress", "Figma", "UI / UX Design",
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-32">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">— About</span>
          <h2 className="mt-6 text-5xl sm:text-6xl font-display leading-tight">
            A quiet love<br />for <span className="font-script italic text-gold">detail.</span>
          </h2>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <p className="font-display text-3xl leading-relaxed text-ink/90">
            I am a passionate web developer and creative professional with
            experience in frontend development, UI/UX design, management, and
            client communication.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
            I enjoy building digital experiences that combine clean code with
            elegant visuals — websites that feel intentional, warm, and quietly
            luxurious. Every pixel, every transition, every word matters.
          </p>

          <div className="hairline my-10" />

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-6">
              Toolkit
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-ink/15 bg-cream px-5 py-2 text-sm hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all duration-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
