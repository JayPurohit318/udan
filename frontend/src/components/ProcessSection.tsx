import { MessageSquare, Map, CreditCard, Plane } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  { icon: MessageSquare, title: "Tell Us Your Dream", desc: "Share your destination, dates, budget and style, we listen carefully." },
  { icon: Map, title: "Custom Itinerary", desc: "Our experts craft a personalised plan with the best stays and experiences." },
  { icon: CreditCard, title: "Easy Booking", desc: "Approve, pay securely and we handle every reservation end-to-end." },
  { icon: Plane, title: "Travel Worry-Free", desc: "24/7 on-trip support so you can focus on making memories." },
];

const ProcessSection = () => (
  <section className="py-20 md:py-28 bg-background relative overflow-hidden">
    <div className="container">
      <SectionHeader
        eyebrow="How It Works"
        title="Your Trip in 4 Simple Steps"
        description="From the first hello to your homecoming, a smooth, stress-free experience."
        className="mb-16"
      />

      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Connector line */}
        <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px border-t-2 border-dashed border-primary/30" />

        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative text-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="relative w-20 h-20 mx-auto mb-5">
              <div className="absolute inset-0 rounded-full bg-secondary/20 animate-ping" style={{ animationDuration: "3s" }} />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center shadow-xl shadow-primary/20">
                <s.icon className="w-9 h-9" />
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center border-2 border-background">
                {i + 1}
              </div>
            </div>
            <h3 className="text-xl font-display font-bold text-foreground">{s.title}</h3>
            <p className="font-sans text-sm text-muted-foreground mt-2 max-w-xs mx-auto leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
