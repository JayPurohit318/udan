import { Shield, Clock, Headphones, Award, ThumbsUp, Globe } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const reasons = [
  { icon: Shield, title: "IATA Certified", desc: "Officially licensed for safe and reliable travel bookings." },
  { icon: Clock, title: "35+ Years", desc: "35+ years of travel industry expertise." },
  { icon: Headphones, title: "Dedicated Support", desc: "Personalized assistance from booking to return." },
  { icon: Award, title: "Best Prices", desc: "Competitive rates on flights, hotels, and packages." },
  { icon: ThumbsUp, title: "Trusted Brand", desc: "Member of TAAI and TAFI associations." },
  { icon: Globe, title: "Global Network", desc: "Worldwide connections for seamless travel." },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-20 md:py-28 bg-muted/40">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: heading + stat band */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <SectionHeader
            align="left"
            eyebrow="Why Choose Us"
            title="Travel with Confidence"
            description="We combine decades of experience with personal attention to make every journey special."
            className="mx-0"
          />
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { num: "35+", label: "Years" },
              { num: "50K+", label: "Happy Travellers" },
              { num: "50+", label: "Destinations" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-background border border-border p-4 text-center">
                <div className="font-display text-2xl font-bold text-primary">{s.num}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: divider list */}
        <div className="lg:col-span-7">
          <ul className="divide-y divide-border border-y border-border">
            {reasons.map((r) => (
              <li key={r.title} className="group py-6 flex items-start gap-5 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/60 group-hover:bg-primary group-hover:text-primary-foreground text-primary flex items-center justify-center transition-colors">
                  <r.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg text-foreground">{r.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground mt-1 leading-relaxed">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUsSection;
