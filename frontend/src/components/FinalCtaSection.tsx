import { Mail, PenLine, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";

// Airline logos sourced from Google Flights CDN (reliable, uses IATA codes)
const partners: { name: string; iata: string }[] = [
  { name: "Emirates", iata: "EK" },
  { name: "Qatar Airways", iata: "QR" },
  { name: "Singapore Airlines", iata: "SQ" },
  { name: "Lufthansa", iata: "LH" },
  { name: "Air India", iata: "AI" },
  { name: "IndiGo", iata: "6E" },
  { name: "Etihad Airways", iata: "EY" },
  { name: "British Airways", iata: "BA" },
  { name: "Turkish Airlines", iata: "TK" },
  { name: "Air France", iata: "AF" },
  { name: "KLM", iata: "KL" },
  { name: "Delta", iata: "DL" },
  { name: "United Airlines", iata: "UA" },
  { name: "American Airlines", iata: "AA" },
  { name: "Cathay Pacific", iata: "CX" },
  { name: "Japan Airlines", iata: "JL" },
  { name: "Qantas", iata: "QF" },
  { name: "Virgin Atlantic", iata: "VS" },
  { name: "SWISS", iata: "LX" },
  { name: "Thai Airways", iata: "TG" },
  { name: "Air Arabia", iata: "G9" },
];

const ctas = [
  {
    icon: Mail,
    title: "Write Us",
    desc: "Reach out to us by email",
    action: "shresthudan@gmail.com",
    href: "mailto:shresthudan@gmail.com",
    isLink: true,
  },
  {
    icon: PenLine,
    title: "Fill Out Form",
    desc: "Submit your request online",
    action: "Leave Request",
    href: "/contact#contact-form",
    isLink: false,
  },
  {
    icon: Phone,
    title: "Call Us",
    desc: "Mon-Fri from 9am to 7pm",
    action: "+91 98765 43210",
    href: "tel:+919876543210",
    isLink: true,
  },
];

const FinalCtaSection = () => (
  <section className="bg-card border-y border-border">
    {/* Get In Touch CTAs */}
    <div className="container py-20 md:py-24">
      <SectionHeader
        eyebrow="Get In Touch"
        title="Have a question or need assistance?"
        description="We're here to help in the way most convenient for you."
        className="mb-14"
      />

      <div className="grid md:grid-cols-3 gap-8 md:gap-6">
        {ctas.map((c) => (
          <div key={c.title} className="flex flex-col items-center text-center">
            <div className="relative mb-5">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
              <div className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <c.icon className="w-7 h-7 text-primary-foreground" />
              </div>
            </div>
            <h3 className="font-display font-bold text-xl text-foreground">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-1.5">{c.desc}</p>

            {c.isLink ? (
              <a
                href={c.href}
                className="mt-5 font-semibold text-foreground hover:text-primary transition-colors"
              >
                {c.action}
              </a>
            ) : (
              <Link
                to={c.href}
                className="mt-5 inline-flex items-center justify-center px-7 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-md hover:bg-primary/90 hover:shadow-lg transition-all"
              >
                {c.action}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Partners marquee */}
    <div className="border-t border-border pt-14 pb-14 overflow-hidden">
      <div className="container mb-10">
        <SectionHeader
          eyebrow="Trusted Network"
          title="Proud Partners & Affiliations"
          description="We collaborate with the world's leading airlines to bring you reliable, premium experiences."
        />
      </div>

      <div
        className="relative flex overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex animate-marquee shrink-0 gap-6 pr-6">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              title={p.name}
              className="group flex flex-col items-center justify-center flex-shrink-0 h-24 w-44 md:w-52 px-5 rounded-xl border border-border bg-background/60 backdrop-blur-sm hover:border-primary/50 hover:bg-background hover:shadow-md transition-all duration-300"
            >
              <img
                src={`https://www.gstatic.com/flights/airline_logos/70px/${p.iata}.png`}
                alt={`${p.name} logo`}
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
                className="max-h-9 w-auto object-contain mb-2"
              />
              <span className="text-xs font-medium text-foreground/80 text-center leading-tight">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FinalCtaSection;
