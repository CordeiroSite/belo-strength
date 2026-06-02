import { Check, Wrench, GraduationCap, Heart, Clock, UserCheck } from "lucide-react";

const features = [
  { icon: Wrench, title: "Equipamentos Modernos", desc: "Linha completa renovada para todos os treinos." },
  { icon: GraduationCap, title: "Professores Qualificados", desc: "Equipe técnica com experiência comprovada." },
  { icon: Heart, title: "Ambiente Motivador", desc: "Energia certa para você dar o seu melhor." },
  { icon: Clock, title: "Horários Flexíveis", desc: "Aberto das 5h às 23h para sua rotina." },
  { icon: UserCheck, title: "Acompanhamento Pro", desc: "Avaliação física e plano de treino individual." },
  { icon: Check, title: "Resultados Reais", desc: "Metodologia testada por mais de 2.000 alunos." },
];

export function WhyChoose() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mb-14">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">
            Por que nos escolher
          </span>
          <h2 className="font-display font-extrabold text-white text-4xl md:text-6xl mt-3 leading-[0.95]">
            FEITO PARA QUEM <br />
            QUER <span className="text-primary">EVOLUIR</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group bg-secondary p-8 hover:bg-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary group-hover:bg-secondary flex items-center justify-center mb-5 group-hover:rotate-6 transition-all">
                  <Icon className="w-6 h-6 text-secondary group-hover:text-primary" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-extrabold text-white group-hover:text-secondary text-xl uppercase mb-2 transition-colors">
                  {f.title}
                </h3>
                <p className="text-white/70 group-hover:text-secondary/80 text-sm transition-colors">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
