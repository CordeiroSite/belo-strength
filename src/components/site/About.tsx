import { ArrowRight } from "lucide-react";
import img from "@/assets/gym-interior.jpg";

const pillars = ["Disciplina", "Evolução", "Resultados", "Comunidade", "Performance"];

export function About() {
  return (
    <section id="sobre" className="bg-dark py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative overflow-hidden shadow-glow">
              <img
                src={img}
                alt="Estrutura completa da Academic Scarlet"
                width={1600}
                height={1067}
                loading="lazy"
                className="w-full h-[420px] md:h-[540px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/60 via-transparent to-primary/20" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-10 bg-primary text-primary-foreground p-6 md:p-8 max-w-[220px] shadow-card">
              <div className="font-display font-extrabold text-5xl md:text-6xl leading-none">15+</div>
              <div className="text-xs uppercase font-bold tracking-wider mt-2">
                Anos transformando<br />vidas em BH
              </div>
            </div>
          </div>

          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">
              Sobre nós
            </span>
            <h2 className="font-display font-extrabold text-white text-4xl md:text-5xl lg:text-6xl mt-3 leading-[0.95]">
              MAIS QUE UMA ACADEMIA. <br />
              UM <span className="text-primary">ESTILO DE VIDA</span>.
            </h2>
            <p className="text-white/70 mt-6 leading-relaxed">
              A Academic Scarlet nasceu em Belo Horizonte com um propósito
              claro: entregar resultados reais para quem leva o treino a sério.
              Nossa equipe acompanha cada aluno de perto — do iniciante ao
              atleta — com método, energia e estrutura de ponta.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {pillars.map((p) => (
                <div
                  key={p}
                  className="border border-white/10 px-4 py-3 text-center font-display font-extrabold text-white text-sm uppercase tracking-wide hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  {p}
                </div>
              ))}
            </div>

            <a
              href="#planos"
              className="mt-9 group inline-flex items-center gap-2 text-primary font-display font-extrabold uppercase tracking-wider text-sm border-b-2 border-primary pb-1 hover:gap-4 transition-all"
            >
              Conheça nossos planos
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
