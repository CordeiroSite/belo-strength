import { TrendingDown, TrendingUp, Zap } from "lucide-react";

const results = [
  { icon: TrendingDown, big: "-12kg", title: "Emagrecimento", desc: "Plano nutricional + treino HIIT em 4 meses." },
  { icon: TrendingUp, big: "+8kg", title: "Ganho de Massa", desc: "Hipertrofia com periodização em 6 meses." },
  { icon: Zap, big: "+38%", title: "Performance", desc: "Força e condicionamento mensurados por testes." },
];

export function Results() {
  return (
    <section className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="container mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em]">
            Resultados Reais
          </span>
          <h2 className="font-display font-extrabold text-foreground text-4xl md:text-6xl mt-3 leading-[0.95]">
            TRANSFORMAÇÕES QUE <br />
            <span className="text-secondary">FALAM POR SI.</span>
          </h2>
          <p className="text-muted-foreground mt-5">
            Nossos alunos provam todos os dias: com método e consistência,
            qualquer meta é possível.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {results.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group relative bg-dark text-white p-9 overflow-hidden hover:bg-secondary transition-colors"
              >
                <div className="absolute top-0 right-0 w-28 h-28 -translate-y-10 translate-x-10 rounded-full bg-primary/10 group-hover:bg-primary/30 transition-colors" />
                <Icon className="w-8 h-8 text-primary mb-6" strokeWidth={2.2} />
                <div className="font-display font-extrabold text-primary text-6xl md:text-7xl leading-none">
                  {r.big}
                </div>
                <div className="font-display font-extrabold uppercase text-lg mt-4">
                  {r.title}
                </div>
                <p className="text-white/60 text-sm mt-2">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
