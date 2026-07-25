import { useEffect, useRef, useState } from "react";
import { Plane, Users, Globe2, Award } from "lucide-react";

const stats = [
  { icon: Plane, end: 12500, suffix: "+", label: "Trips Planned" },
  { icon: Users, end: 10000, suffix: "+", label: "Happy Travellers" },
  { icon: Globe2, end: 60, suffix: "+", label: "Countries Covered" },
  { icon: Award, end: 32, suffix: "yrs", label: "Of Excellence" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const dur = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            setVal(Math.floor(p * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsSection = () => (
  <section className="py-16 md:py-20 bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
    <div className="container relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
              <s.icon className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-3xl md:text-5xl font-display font-bold text-secondary">
              <Counter end={s.end} suffix={s.suffix} />
            </div>
            <div className="text-sm md:text-base text-white/80 mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
