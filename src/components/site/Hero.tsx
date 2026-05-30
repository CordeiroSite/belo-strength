import { Flame, ChevronDown, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-athlete.jpg";

const WHATS = "https://wa.me/5534984317278";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      <img
        src={heroImg}
        alt="Atleta treinando com força na Academic Scarlet"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-hero-overlay" />
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-30"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--secondary)" }}
      />

      <div className="container mx-auto px-5 relative z-10 pt-28 pb-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 border border-primary/40 backdrop-blur-sm rounded-full mb-7">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              Matrículas Abertas
            </span>
          </div>

          <h1 className="font-display font-extrabold text-white leading-[0.9] mb-5 text-[clamp(2.75rem,8vw,6.5rem)]">
            ACADEMIC
            <br />
            <span className="text-primary">SCARLET</span>
          </h1>

          <p className="font-display font-extrabold text-white/95 text-xl md:text-3xl mb-4 leading-tight">
            TREINE FORTE.{" "}
            <span className="text-stroke-yellow">EVOLUA</span> TODOS OS DIAS.
          </p>

          <p className="text-white/70 text-base md:text-lg max-w-xl mb-9 leading-relaxed">
            Equipamentos modernos, acompanhamento profissional e resultados
            reais para todos os níveis. Sua transformação começa aqui em Belo
            Horizonte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATS}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-display font-extrabold uppercase tracking-wider text-sm hover:bg-white transition-all hover:translate-y-[-2px] shadow-glow animate-pulse-glow"
            >
              Agendar Aula Gratuita
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/20 text-white font-display font-extrabold uppercase tracking-wider text-sm hover:bg-white hover:text-dark transition-all"
            >
              Conhecer Planos
            </a>
          </div>
        </div>

        <a
          href="#stats"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60 hover:text-primary transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 animate-scroll-indicator" />
        </a>
      </div>
    </section>
  );
}
