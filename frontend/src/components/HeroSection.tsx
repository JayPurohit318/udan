import { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin, Plane, Sparkles, Compass, Globe2, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-travel.jpg";

const ROTATING_WORDS = ["Adventure", "Escape", "Memory", "Story", "Journey"];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [wordIdx, setWordIdx] = useState(0);

  // Mouse-follow gradient
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  // Parallax on scroll, drive via rAF + transform on refs to avoid React re-render lag
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      if (bgRef.current) bgRef.current.style.transform = `translate3d(0, ${y * 0.35}px, 0)`;
      if (blob1Ref.current) blob1Ref.current.style.transform = `translate3d(0, ${y * -0.15}px, 0)`;
      if (blob2Ref.current) blob2Ref.current.style.transform = `translate3d(0, ${y * -0.25}px, 0)`;
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Word rotator
  useEffect(() => {
    const id = setInterval(() => setWordIdx((i) => (i + 1) % ROTATING_WORDS.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100vh] flex items-center overflow-hidden text-primary-foreground"
    >
      {/* Background image with parallax + slow zoom */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        {/* <img
          src={heroImage}
          alt="Tropical paradise at sunset"
          className="w-full h-[120%] object-cover animate-slow-zoom"
          fetchPriority="high"
        /> */}
        <img
  src={heroImage}
  alt="Tropical paradise at sunset"
  className="w-full h-[120%] object-cover animate-slow-zoom"
  loading="eager"
/>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>

      {/* Mouse-follow radial spotlight */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none transition-[background] duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, hsl(var(--secondary) / 0.25), transparent 60%)`,
        }}
      />

      {/* Animated SVG flight path */}
      <svg
        className="absolute inset-0 w-full h-full -z-[5] opacity-50 pointer-events-none hidden md:block"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flightPath" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 600 Q 300 200, 600 400 T 1200 250"
          fill="none"
          stroke="url(#flightPath)"
          strokeWidth="2"
          strokeDasharray="8 8"
          strokeDashoffset="1200"
          className="animate-draw-line"
        />
      </svg>

      {/* Floating decorative blobs (parallax) */}
      <div
        ref={blob1Ref}
        className="absolute top-20 right-10 w-72 h-72 bg-secondary/25 rounded-full blur-3xl animate-float-slow will-change-transform"
      />
      <div
        ref={blob2Ref}
        className="absolute bottom-10 left-10 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-float will-change-transform"
      />

      {/* Floating destination cards (right side) */}
      <div className="absolute right-[6%] top-[18%] hidden xl:flex flex-col gap-4 z-10 pointer-events-none">
        {[
          { icon: Compass, label: "Bali", sub: "Indonesia", delay: "0s" },
          { icon: Globe2, label: "Maldives", sub: "Indian Ocean", delay: "0.4s" },
          { icon: Camera, label: "Kashmir", sub: "India", delay: "0.8s" },
        ].map((c, i) => (
          <div
            key={c.label}
            className="bg-white/12 backdrop-blur-xl border border-white/25 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl animate-float-slow opacity-0 animate-fade-in-up"
            style={{
              animationDelay: c.delay,
              transform: `translateY(${Math.sin((Date.now() / 1000 + i) * 0.5) * 6}px)`,
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-secondary/30 flex items-center justify-center">
              <c.icon className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{c.label}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/70">{c.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating plane icon */}
      <div className="absolute top-1/4 right-[12%] hidden md:block animate-float-slow opacity-70">
        <Plane className="w-14 h-14 text-secondary -rotate-12 drop-shadow-2xl" />
      </div>

      <div className="container relative py-24 md:py-32 z-10">
        <div className="max-w-3xl space-y-7">
          <div
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 text-sm opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            Shresth Udan Travels LTD • Trusted Since 1990
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.15] opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            Your Next{" "}
            <span className="relative inline-block align-baseline">
              <span
                key={wordIdx}
                className="inline-block leading-[1.15] pb-[0.15em] bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer"
                style={{ animation: "fade-in-up 0.6s ease-out, shimmer 3s linear infinite" }}
              >
                {ROTATING_WORDS[wordIdx]}
              </span>
              <span className="inline-block w-1 h-[0.9em] bg-secondary ml-1 align-middle animate-blink" />
            </span>
            <br />
            Awaits the World.
          </h1>

          <p
            className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            From dreamy beaches to mountain escapes, handcrafted travel experiences
            designed by experts who put your interest at heart.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 pt-2 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.55s" }}
          >
            <Button
              size="lg"
              variant="secondary"
              className="text-base font-semibold shadow-2xl shadow-secondary/40 hover:scale-105 transition-transform"
              asChild
            >
              <Link to="/packages">
                <Sparkles className="w-4 h-4 mr-2" /> Explore Packages
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base border-white/40 bg-white/10 backdrop-blur text-white hover:bg-white/20 hover:text-white"
              asChild
            >
              <Link to="/contact#contact-form">Plan My Trip</Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 md:gap-10 mt-12 pt-8 border-t border-white/20 max-w-xl opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            {[
              { num: "35+", label: "Years Experience" },
              { num: "50K+", label: "Happy Travellers" },
              { num: "IATA", label: "Licensed Agency" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-black/35 backdrop-blur-md border border-white/15 px-3 py-3">
                <div className="text-2xl md:text-4xl font-display font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  {s.num}
                </div>
                <div className="text-xs md:text-sm text-white/95 mt-1 drop-shadow">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/70 animate-bounce-subtle">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
