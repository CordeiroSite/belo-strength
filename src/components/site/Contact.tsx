import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const WHATS = "https://wa.me/5534984317278";

export function Contact() {
  return (
    <section id="contato" className="bg-secondary py-24 md:py-32">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">
              Localização
            </span>
            <h2 className="font-display font-extrabold text-white text-4xl md:text-6xl mt-3 leading-[0.95]">
              VENHA NOS <br />
              <span className="text-primary">VISITAR.</span>
            </h2>
            <p className="text-white/70 mt-5 max-w-md">
              Estamos em Belo Horizonte com toda a estrutura pronta para você
              começar hoje mesmo.
            </p>

            <div className="mt-8 space-y-4 flex-1">
              <Info icon={MapPin} title="Endereço" text="Av. do Contorno, 1500 — Belo Horizonte, MG" />
              <Info icon={Phone} title="Telefone" text="(34) 98431-7278" />
              <Info icon={Clock} title="Horários" text="Seg–Sex: 5h às 23h · Sáb: 8h às 18h · Dom: 9h às 14h" />
            </div>

            <a
              href={WHATS}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 px-7 py-5 bg-primary text-secondary font-display font-extrabold uppercase tracking-wider text-sm hover:bg-white hover:text-secondary transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="relative overflow-hidden border-4 border-primary min-h-[420px] lg:min-h-full">
            <iframe
              title="Mapa Academic Scarlet"
              src="https://www.google.com/maps?q=Avenida+do+Contorno+1500+Belo+Horizonte&output=embed"
              className="absolute inset-0 w-full h-full grayscale contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof MapPin;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-secondary group transition-colors">
      <div className="w-11 h-11 bg-primary group-hover:bg-secondary flex items-center justify-center shrink-0 transition-colors">
        <Icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" strokeWidth={2.4} />
      </div>
      <div>
        <div className="font-display font-extrabold uppercase text-xs tracking-wider text-primary group-hover:text-secondary/70">
          {title}
        </div>
        <div className="font-semibold mt-1">{text}</div>
      </div>
    </div>
  );
}
