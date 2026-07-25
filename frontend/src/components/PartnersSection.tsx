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
];

const PartnersSection = () => (
  <section className="py-14 bg-card border-y border-border overflow-hidden">
    <div className="container mb-10">
      <SectionHeader
        eyebrow="Trusted Network"
        title="Proud Partners & Affiliations"
        description="We collaborate with the world's leading airlines and travel brands to bring you reliable, premium experiences."
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
  </section>
);

export default PartnersSection;
