export function Footer() {
  return (
    <footer className="bg-ink text-cream/70 border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-script text-3xl text-cream">Sahar Nadeem</p>
        <p className="text-xs uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} — Crafted with care
        </p>
        <div className="flex gap-4 text-xs uppercase tracking-[0.25em]">
          <a href="#top" className="hover:text-gold transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
