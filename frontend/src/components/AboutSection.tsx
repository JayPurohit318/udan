import { Award, Users, Building2, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-muted">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <SectionHeader
            align="left"
            eyebrow="About Us"
            title="Shresth Udan Travels Ltd"
            description="Established in 1990, Shresth Udan Travels has been serving travellers for over 35+ years from Ahmedabad. As an IATA licensed agency and a DIM Limited Company, we provide comprehensive travel solutions with trust, transparency, and professionalism."
          />
          <p className="font-sans text-muted-foreground mt-4 leading-relaxed">
            Under the leadership of directors <strong className="text-foreground">Rani Parikh</strong>, <strong className="text-foreground">Biren Parikh</strong>, and <strong className="text-foreground">Kartikeya Parikh</strong>, 
            our team is committed to making your travel seamless and memorable.
          </p>

          <div className="mt-6 space-y-3">
            {["IATA Licensed (14 3 3585 6)", "Member of TAAI & TAFI", "35+ Years of Trusted Service", "DIM Limited Company"].map(item => (
              <div key={item} className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Stats cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Award, num: "1990", label: "Established" },
            { icon: Users, num: "TAAI", label: "Member" },
            { icon: Building2, num: "TAFI", label: "Member" },
            { icon: Award, num: "IATA", label: "Licensed" },
          ].map(s => (
            <div key={s.label + s.num} className="bg-card rounded-xl p-6 text-center shadow-sm border">
              <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{s.num}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
