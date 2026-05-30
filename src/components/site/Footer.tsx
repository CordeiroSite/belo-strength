import { Dumbbell, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

const WHATS = "https://wa.me/5534984317278";

export function Footer() {
  return (
    <footer className="bg-dark text-white border-t border-white/5">
      <div className="container mx-auto px-5 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
                <Dumbbell className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <span className="font-display font-extrabold text-lg leading-none">
                ACADEMIC<br />
                <span className="text-primary">SCARLET</span>
              </span>
            </div>
            <p className="text-white/60 mt-5 max-w-sm">
              Sua academia em Belo Horizonte. Treine forte, evolua todos os
              dias e descubra do que você é capaz.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
                  aria-label="Rede social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display font-extrabold uppercase text-sm tracking-wider text-primary mb-4">
              Navegação
            </div>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#modalidades" className="hover:text-primary">Modalidades</a></li>
              <li><a href="#sobre" className="hover:text-primary">Sobre</a></li>
              <li><a href="#planos" className="hover:text-primary">Planos</a></li>
              <li><a href="#galeria" className="hover:text-primary">Galeria</a></li>
              <li><a href="#contato" className="hover:text-primary">Contato</a></li>
            </ul>
          </div>

          <div>
            <div className="font-display font-extrabold uppercase text-sm tracking-wider text-primary mb-4">
              Comece agora
            </div>
            <p className="text-white/60 text-sm mb-4">
              Agende uma aula gratuita pelo WhatsApp e venha conhecer.
            </p>
            <a
              href={WHATS}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-display font-extrabold uppercase text-xs tracking-wider hover:bg-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Aula Gratuita
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40 uppercase tracking-wider">
          <div>© {new Date().getFullYear()} Academic Scarlet — Belo Horizonte, MG.</div>
          <div>Treine forte. Evolua todos os dias.</div>
        </div>
      </div>

      <a
        href={WHATS}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-glow hover:bg-secondary hover:text-white transition-colors animate-pulse-glow"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
}
