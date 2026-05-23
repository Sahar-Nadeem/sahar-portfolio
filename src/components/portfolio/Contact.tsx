import { useState } from "react";

const RECIPIENT = "saharnadi1721@gmail.com";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/s_4sahar?igsh=MXJweDMzdmF3MHljYQ%3D%3D&utm_source=qr",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sahar-nadeem-64b328233?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1PvbDgSH72/?mibextid=wwXIfr",
  },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

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
              <a
                href={`mailto:${RECIPIENT}`}
                className="font-display text-2xl text-cream hover:text-gold transition-colors"
              >
                {RECIPIENT}
              </a>
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
            <div className="flex flex-wrap gap-3 pt-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-cream/20 px-4 py-2 text-xs uppercase tracking-[0.25em] hover:border-gold hover:text-gold transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-dark rounded-3xl p-8 sm:p-10 space-y-6 shadow-luxe"
        >
          {/* FormSubmit config */}
          <input type="hidden" name="_subject" value="New message from your portfolio" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          {/* honeypot */}
          <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

          <div>
            <label className="block text-[10px] uppercase tracking-[0.35em] text-cream/60 mb-2">
              Name
            </label>
            <input
              required
              name="name"
              maxLength={100}
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
              name="email"
              maxLength={255}
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
              name="message"
              rows={4}
              maxLength={2000}
              className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-3 text-cream placeholder:text-cream/30 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full rounded-full bg-gold text-ink px-7 py-4 text-xs uppercase tracking-[0.3em] hover:bg-cream transition-colors disabled:opacity-70"
          >
            {status === "sending" && "Sending…"}
            {status === "sent" && "Thank you — I'll be in touch ✦"}
            {status === "error" && "Try again →"}
            {status === "idle" && "Send Message →"}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-300/80 text-center">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}
