import sweet from "@/assets/project-sweetstreet.jpg";
import jabeen from "@/assets/project-jabeen.jpg";
import wedding from "@/assets/project-wedding.jpg";

const projects = [
  {
    n: "01",
    title: "Sweet Street",
    tag: "Luxury Bakery",
    desc: "Luxury bakery website concept with premium modern visuals and elegant branding.",
    image: sweet,
    live: "https://sweetstreet.lovable.app/",
    github: "https://github.com/Sahar-Nadeem",
  },
  {
    n: "02",
    title: "Jabeen Foods",
    tag: "Food Brand",
    desc: "Traditional food brand website with modern clean design and responsive layout.",
    image: jabeen,
    live: "https://v0-jabeen-foods-website.vercel.app/",
    github: "https://github.com/Sahar-Nadeem",
  },
  {
    n: "03",
    title: "Wedding Invitation",
    tag: "Editorial · Digital Invite",
    desc: "Aesthetic digital wedding invitation website with emotional and elegant design experience.",
    image: wedding,
    live: "https://wedding-card-gamma-self.vercel.app/",
    github: "https://github.com/Sahar-Nadeem",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-32 px-6 bg-cream">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-gold">— Selected Work</span>
            <h2 className="mt-6 text-5xl sm:text-7xl font-display leading-[1.02]">
              Projects, <span className="font-script italic text-gold">crafted.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A curated selection of recent work — built with care, designed with
            intention.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`grid lg:grid-cols-12 gap-10 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:col-span-7 group block relative overflow-hidden rounded-[2rem] shadow-luxe"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="font-script text-3xl text-cream">View live ↗</span>
                </div>
              </a>

              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-script text-3xl text-gold">{p.n}</span>
                  <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-5xl font-display leading-tight">{p.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-ink transition-colors"
                  >
                    Live Preview →
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-6 py-3 text-xs uppercase tracking-[0.25em] hover:border-gold hover:text-gold transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
