import { useEffect, useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

const links = [
  { href: "#modalidades", label: "Modalidades" },
  { href: "#sobre", label: "Sobre" },
  { href: "#planos", label: "Planos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

const WHATS = "https://wa.me/5534984317278";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
            <Dumbbell className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <span className="font-display font-extrabold text-white text-lg leading-none tracking-tight">
            ACADEMIC<br />
            <span className="text-primary">SCARLET</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-white/80 hover:text-primary transition-colors uppercase tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATS}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center px-5 py-3 bg-primary text-primary-foreground font-display font-extrabold text-sm uppercase tracking-wider hover:bg-secondary hover:text-white transition-colors"
        >
          Aula Gratuita
        </a>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-dark/98 backdrop-blur-md border-t border-white/5 animate-fade-in">
          <div className="container mx-auto px-5 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white font-semibold uppercase text-sm tracking-wide py-2 border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATS}
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-center px-5 py-4 bg-primary text-primary-foreground font-display font-extrabold uppercase tracking-wider"
            >
              Aula Gratuita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
