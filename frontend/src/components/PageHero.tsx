import { ReactNode } from "react";
import heroInner from "@/assets/hero-inner.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  breadcrumb?: string;
  hideBreadcrumb?: boolean;
  noImage?: boolean;
  children?: ReactNode;
}

const PageHero = ({
  title,
  subtitle,
  eyebrow,
  image,
  hideBreadcrumb,
  noImage,
  children,
}: PageHeroProps) => {
  const words = title.trim().split(" ");
  const lastWord = words.length > 1 ? words.pop() : "";
  const firstPart = words.join(" ");

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground min-h-[85vh] flex items-center">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% -20%, hsl(var(--primary) / 0.6) 0%, hsl(var(--primary)) 70%)",
        }}
      />

      <div className="absolute inset-0">
        {noImage ? (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary" />
        ) : (
          <>
            <img
              src={image || heroInner}
              alt=""
              aria-hidden="true"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary" />
          </>
        )}
      </div>

      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="container relative z-10 py-24 md:py-28">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 space-y-6">
            {eyebrow && (
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] tracking-widest uppercase text-white opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "0.15s",
                  background:
                    "linear-gradient(135deg, hsl(0 0% 100% / 0.08) 0%, hsl(0 0% 100% / 0.03) 100%)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid hsl(0 0% 100% / 0.1)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                {eyebrow}
              </div>
            )}

            <h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.25s" }}
            >
              {firstPart && <>{firstPart} </>}
              {lastWord && <span className="text-secondary italic font-normal">{lastWord}</span>}
            </h1>

            <div
              className="h-[2px] w-32 opacity-0 animate-fade-in-up"
              style={{
                animationDelay: "0.35s",
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--secondary)), transparent)",
                filter: "drop-shadow(0 0 8px hsl(var(--secondary)))",
              }}
            />

            {subtitle && (
              <p
                className="max-w-[50ch] text-base md:text-lg text-white/70 leading-relaxed font-light opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.45s" }}
              >
                {subtitle}
              </p>
            )}

            {children && (
              <div className="pt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
                {children}
              </div>
            )}
          </div>

          {!noImage && (
            <div className="col-span-12 lg:col-span-5 relative hidden lg:block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden p-3"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(0 0% 100% / 0.08) 0%, hsl(0 0% 100% / 0.03) 100%)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid hsl(0 0% 100% / 0.1)",
                }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden bg-primary/60 relative">
                  <img src={image || heroInner} alt="" aria-hidden="true" loading="eager" decoding="async" className="w-full h-full object-cover scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />

                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-display text-2xl text-white">{title}</p>
                        {eyebrow && <p className="text-secondary/90 text-xs tracking-wide mt-1 uppercase">{eyebrow}</p>}
                      </div>
                      <div className="text-right">
                        <p className="text-white/40 text-[10px] uppercase tracking-widest">Since</p>
                        <p className="text-white tabular-nums text-sm">1990</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-12 -right-12 size-64 border border-white/5 rounded-full pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 size-96 border border-white/5 rounded-full pointer-events-none" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
