import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32 px-6 bg-ink text-cream overflow-hidden">
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-gold-soft/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">— Get in Touch</span>
          <h2 className="text-5xl sm:text-7xl font-display leading-[1.02]">
            Let's create<br />
            <span className="font-script italic text-gold">together.</span>
          </h2>
          <p className="text-cream/70 text-lg max-w-md leading-relaxed">
            Have a project in mind, or simply want to say hello? I'd love to hear
            from you.
          </p>

          <div className="space-y-4 pt-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-cream/50">Email</p>
              <p className="font-display text-2xl text-cream">saharnadi1721@gmail.com</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-cream/50">GitHub</p>
              <a
                href="https://github.com/Sahar-Nadeem"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl text-cream hover:text-gold transition-colors"
              >
                github.com/Sahar-Nadeem ↗
              </a>
            </div>
            <div className="flex gap-3 pt-4">
              {["Instagram", "LinkedIn", "Behance", "Dribbble"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full border border-cream/20 px-4 py-2 text-xs uppercase tracking-[0.25em] hover:border-gold hover:text-gold transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="glass-dark rounded-3xl p-8 sm:p-10 space-y-6 shadow-luxe"
        >
          <div>
            <label className="block text-[10px] uppercase tracking-[0.35em] text-cream/60 mb-2">
              Name
            </label>
            <input
              required
              className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-3 text-cream placeholder:text-cream/30 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.35em] text-cream/60 mb-2">
              Email
            </label>
            <input
              required
              type="email"
              className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-3 text-cream placeholder:text-cream/30 transition-colors"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.35em] text-cream/60 mb-2">
              Message
            </label>
            <textarea
              required
              rows={4}
              className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-3 text-cream placeholder:text-cream/30 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gold text-ink px-7 py-4 text-xs uppercase tracking-[0.3em] hover:bg-cream transition-colors"
          >
            {sent ? "Thank you — I'll be in touch ✦" : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}
