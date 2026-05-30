import { Dumbbell, Flame, Activity, Bike, Swords, ArrowUpRight } from "lucide-react";

const items = [
  { icon: Dumbbell, name: "Musculação", desc: "Equipamentos modernos para hipertrofia e força." },
  { icon: Flame, name: "CrossFit", desc: "Treinos de alta intensidade que desafiam seu limite." },
  { icon: Activity, name: "Funcional", desc: "Movimento, mobilidade e condicionamento real." },
  { icon: Bike, name: "Spinning", desc: "Energia, ritmo e queima calórica em grupo." },
  { icon: Swords, name: "MMA", desc: "Boxe, muay thai e técnica de combate." },
];

export function Modalities() {
  return (
    <section id="modalidades" className="bg-dark py-24 md:py-32 relative">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">
              Modalidades
            </span>
            <h2 className="font-display font-extrabold text-white text-4xl md:text-6xl mt-3 leading-[0.95]">
              ESCOLHA SEU <br />
              <span className="text-primary">TREINO IDEAL.</span>
            </h2>
          </div>
          <p className="text-white/60 md:max-w-sm">
            Aulas variadas, professores qualificados e estrutura completa para
            você treinar do seu jeito.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((m, i) => {
            const Icon = m.icon;
            const featured = i === 0;
            return (
              <div
                key={m.name}
                className={`group relative p-8 overflow-hidden border transition-all hover:-translate-y-1 cursor-pointer ${
                  featured
                    ? "bg-primary text-primary-foreground border-primary lg:row-span-2 lg:p-10"
                    : "bg-surface border-white/5 hover:border-primary/60"
                }`}
              >
                <div className="flex items-start justify-between mb-10">
                  <Icon
                    className={`${featured ? "w-12 h-12" : "w-10 h-10 text-primary"}`}
                    strokeWidth={2}
                  />
                  <ArrowUpRight
                    className={`w-5 h-5 transition-all group-hover:rotate-45 ${
                      featured ? "" : "text-white/40"
                    }`}
                  />
                </div>
                <h3
                  className={`font-display font-extrabold uppercase tracking-tight ${
                    featured ? "text-3xl md:text-5xl" : "text-2xl text-white"
                  }`}
                >
                  {m.name}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    featured ? "text-primary-foreground/80 md:text-base max-w-xs" : "text-white/60"
                  }`}
                >
                  {m.desc}
                </p>
                {featured && (
                  <div className="mt-10 inline-flex items-center gap-2 font-display font-extrabold uppercase text-xs tracking-widest border-b-2 border-primary-foreground pb-1">
                    Ver detalhes
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
