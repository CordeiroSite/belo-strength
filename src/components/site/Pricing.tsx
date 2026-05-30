import { Check, Star } from "lucide-react";

const WHATS = "https://wa.me/5534984317278";

const plans = [
  {
    name: "Basic",
    price: 129,
    desc: "Acesso essencial à musculação.",
    features: ["Musculação livre", "Avaliação inicial", "Vestiário completo", "App de treino"],
  },
  {
    name: "Pro",
    price: 179,
    desc: "Nosso plano mais escolhido.",
    features: [
      "Tudo do Basic",
      "Todas as aulas coletivas",
      "Acompanhamento mensal",
      "Plano de treino personalizado",
      "Suporte via WhatsApp",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: 249,
    desc: "Performance e resultado máximo.",
    features: [
      "Tudo do Pro",
      "Personal trainer 2x/semana",
      "Avaliação física bimestral",
      "Plano nutricional",
      "Acesso prioritário",
    ],
  },
];

export function Pricing() {
  return (
    <section id="planos" className="bg-dark py-24 md:py-32">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">
            Planos
          </span>
          <h2 className="font-display font-extrabold text-white text-4xl md:text-6xl mt-3 leading-[0.95]">
            ESCOLHA. TREINE. <br />
            <span className="text-primary">EVOLUA.</span>
          </h2>
          <p className="text-white/60 mt-5">
            Planos pensados para o seu objetivo. Sem letras miúdas, sem
            surpresas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-8 md:p-9 flex flex-col transition-all hover:-translate-y-2 ${
                p.featured
                  ? "bg-primary text-primary-foreground md:scale-105 shadow-glow z-10"
                  : "bg-surface text-white border border-white/5 hover:border-primary/40"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1.5 text-[10px] uppercase font-display font-extrabold tracking-widest flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> Mais Popular
                </div>
              )}
              <div className="font-display font-extrabold text-2xl uppercase tracking-tight">
                {p.name}
              </div>
              <p
                className={`text-sm mt-1 ${
                  p.featured ? "text-primary-foreground/70" : "text-white/50"
                }`}
              >
                {p.desc}
              </p>

              <div className="mt-7 flex items-baseline gap-1">
                <span className="text-xl font-bold">R$</span>
                <span className="font-display font-extrabold text-6xl leading-none">
                  {p.price}
                </span>
                <span
                  className={`text-sm ml-1 ${
                    p.featured ? "text-primary-foreground/70" : "text-white/50"
                  }`}
                >
                  /mês
                </span>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        p.featured ? "text-primary-foreground" : "text-primary"
                      }`}
                      strokeWidth={3}
                    />
                    <span
                      className={p.featured ? "" : "text-white/80"}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATS}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex items-center justify-center px-6 py-4 font-display font-extrabold uppercase text-sm tracking-wider transition-all ${
                  p.featured
                    ? "bg-dark text-white hover:bg-secondary"
                    : "bg-primary text-primary-foreground hover:bg-white"
                }`}
              >
                Quero esse plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
