import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const imgs = [
  { src: g1, alt: "Treino funcional com kettlebell", h: "h-[420px]" },
  { src: g3, alt: "Equipamentos profissionais", h: "h-[260px]" },
  { src: g5, alt: "Aula de MMA e boxe", h: "h-[340px]" },
  { src: g2, alt: "Atleta em treino de força", h: "h-[340px]" },
  { src: g4, alt: "Aula de spinning em grupo", h: "h-[260px]" },
  { src: g6, alt: "Musculação com peso livre", h: "h-[420px]" },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-secondary py-24 md:py-32">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">
              Galeria
            </span>
            <h2 className="font-display font-extrabold text-white text-4xl md:text-6xl mt-3 leading-[0.95]">
              ENERGIA QUE <span className="text-primary">CONTAGIA.</span>
            </h2>
          </div>
          <p className="text-white/70 md:max-w-sm">
            Um espaço pensado para você quebrar limites todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {imgs.map((im, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${im.h} ${
                i === 0 ? "row-span-2 md:h-[700px]" : ""
              } ${i === 5 ? "row-span-2 md:h-[700px]" : ""}`}
            >
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="text-primary text-[10px] uppercase tracking-[0.25em] font-bold">
                  Academic Scarlet
                </div>
                <div className="text-white font-display font-extrabold text-base md:text-lg leading-tight mt-1">
                  {im.alt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
