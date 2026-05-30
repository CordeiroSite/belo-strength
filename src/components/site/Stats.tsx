import { useEffect, useRef, useState } from "react";
import { Star, Users, Trophy, Flame } from "lucide-react";

const stats = [
  { icon: Star, value: 4.9, suffix: "/5", label: "Avaliação", decimals: 1 },
  { icon: Users, value: 2000, suffix: "+", label: "Alunos Ativos" },
  { icon: Trophy, value: 15, suffix: "+", label: "Anos de História" },
  { icon: Flame, value: 100, suffix: "%", label: "Estrutura Completa" },
];

function useCountUp(target: number, decimals = 0, start = false, dur = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, dur]);
  return decimals ? val.toFixed(decimals) : Math.round(val).toString();
}

function StatCard({ s, visible }: { s: (typeof stats)[number]; visible: boolean }) {
  const display = useCountUp(s.value, s.decimals ?? 0, visible);
  const Icon = s.icon;
  return (
    <div className="group relative bg-surface border border-white/5 p-7 hover:border-primary/60 transition-all hover:-translate-y-1">
      <div className="absolute top-0 left-0 w-12 h-1 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
      <Icon className="w-7 h-7 text-primary mb-4" strokeWidth={2.2} />
      <div className="font-display font-extrabold text-white text-4xl md:text-5xl leading-none">
        {display}
        <span className="text-primary">{s.suffix}</span>
      </div>
      <div className="text-white/60 text-xs uppercase tracking-wider mt-2 font-semibold">
        {s.label}
      </div>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVis(true),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="bg-dark py-20 md:py-24">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <StatCard key={s.label} s={s} visible={vis} />
          ))}
        </div>
      </div>
    </section>
  );
}
