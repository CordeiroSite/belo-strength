import { Star, Quote } from "lucide-react";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const items = [
  {
    img: t1,
    name: "Lucas Andrade",
    role: "Aluno há 2 anos",
    text: "Mudei minha rotina e meus resultados depois que entrei na Scarlet. Os professores acompanham de perto e a estrutura é incrível.",
  },
  {
    img: t2,
    name: "Camila Souza",
    role: "Aluna há 1 ano",
    text: "Ambiente motivador e atendimento nota mil. Perdi 9kg em 5 meses com o plano Pro e nunca me senti tão bem.",
  },
  {
    img: t3,
    name: "Rafael Lima",
    role: "Aluno há 3 anos",
    text: "Equipamentos sempre conservados, aulas variadas e uma galera que te puxa pra cima. Recomendo de olhos fechados.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-dark py-24 md:py-32">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">
            Depoimentos
          </span>
          <h2 className="font-display font-extrabold text-white text-4xl md:text-6xl mt-3 leading-[0.95]">
            QUEM TREINA AQUI, <br />
            <span className="text-primary">RECOMENDA.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <div
              key={t.name}
              className="relative bg-surface p-8 border border-white/5 hover:border-primary/50 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed">"{t.text}"</p>
              <div className="mt-7 flex items-center gap-3 pt-6 border-t border-white/5">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <div className="font-display font-extrabold text-white">{t.name}</div>
                  <div className="text-white/50 text-xs uppercase tracking-wide">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
