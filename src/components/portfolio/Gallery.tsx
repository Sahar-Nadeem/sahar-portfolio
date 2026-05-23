import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32 px-6 bg-cream">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-gold">— Moodboard</span>
            <h2 className="mt-6 text-5xl sm:text-7xl font-display leading-tight">
              A visual <span className="font-script italic text-gold">diary.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Inspiration, textures, and moments that shape the work.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 [&_img]:transition-transform [&_img]:duration-[1200ms] hover:[&_img]:scale-105">
          <figure className="row-span-2 overflow-hidden rounded-2xl shadow-soft group">
            <img src={g1} alt="" loading="lazy" className="h-full w-full object-cover" />
          </figure>
          <figure className="overflow-hidden rounded-2xl shadow-soft group">
            <img src={g2} alt="" loading="lazy" className="h-full w-full object-cover aspect-square" />
          </figure>
          <figure className="col-span-2 overflow-hidden rounded-2xl shadow-soft group">
            <img src={g3} alt="" loading="lazy" className="h-full w-full object-cover aspect-[2/1]" />
          </figure>
          <figure className="overflow-hidden rounded-2xl shadow-soft group">
            <img src={g5} alt="" loading="lazy" className="h-full w-full object-cover aspect-square" />
          </figure>
          <figure className="row-span-2 overflow-hidden rounded-2xl shadow-soft group">
            <img src={g4} alt="" loading="lazy" className="h-full w-full object-cover" />
          </figure>
          <figure className="col-span-2 glass rounded-2xl p-10 flex items-center justify-center text-center">
            <p className="font-display text-3xl italic text-ink/80">
              "Design is intelligence<br />
              <span className="font-script text-gold">made visible.</span>"
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
}
