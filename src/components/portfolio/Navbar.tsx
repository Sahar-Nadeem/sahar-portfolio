import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <span className="font-script text-2xl text-ink">Sahar</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Portfolio
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm text-ink/80 hover:text-ink transition-colors group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-2 text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-ink transition-colors"
          >
            Let's Talk
          </a>

          <button
            aria-label="Toggle menu"
            className="md:hidden text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span className={`block h-px w-6 bg-ink transition-all ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-px w-6 bg-ink transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-ink transition-all ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 glass rounded-2xl p-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-ink/80 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
