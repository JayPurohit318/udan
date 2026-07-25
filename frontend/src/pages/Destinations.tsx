import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { MapPin, ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

import goaImg from "@/assets/packages/goa.jpg";
import kashmirImg from "@/assets/packages/kashmir.jpg";
import rajasthanImg from "@/assets/packages/rajasthan.jpg";
import keralaImg from "@/assets/packages/kerala.jpg";
import himachalImg from "@/assets/packages/himachal.jpg";
import andamanImg from "@/assets/packages/andaman.jpg";
import dubaiImg from "@/assets/packages/dubai.jpg";
import thailandImg from "@/assets/packages/thailand.jpg";
import europeImg from "@/assets/packages/europe.jpg";
import baliImg from "@/assets/packages/bali.jpg";
import singaporeImg from "@/assets/packages/singapore.jpg";
import maldivesImg from "@/assets/packages/maldives.jpg";

type Dest = { name: string; country: string; image: string; category: "beach" | "mountain" | "city" | "heritage"; tag?: string };

const destinations: Dest[] = [
  { name: "Maldives", country: "Indian Ocean", image: maldivesImg, category: "beach", tag: "Luxury" },
  { name: "Bali", country: "Indonesia", image: baliImg, category: "beach", tag: "Trending" },
  { name: "Goa", country: "India", image: goaImg, category: "beach" },
  { name: "Andaman", country: "India", image: andamanImg, category: "beach" },
  { name: "Kashmir", country: "India", image: kashmirImg, category: "mountain", tag: "Popular" },
  { name: "Himachal", country: "India", image: himachalImg, category: "mountain" },
  { name: "Kerala", country: "India", image: keralaImg, category: "mountain" },
  { name: "Dubai", country: "UAE", image: dubaiImg, category: "city", tag: "Hot" },
  { name: "Singapore", country: "Singapore", image: singaporeImg, category: "city" },
  { name: "Thailand", country: "South-East Asia", image: thailandImg, category: "city" },
  { name: "Europe Tour", country: "Multi-country", image: europeImg, category: "heritage", tag: "Featured" },
  { name: "Rajasthan", country: "India", image: rajasthanImg, category: "heritage" },
];

const filters = [
  { id: "all", label: "All" },
  { id: "beach", label: "Beach & Islands" },
  { id: "mountain", label: "Hills & Valleys" },
  { id: "city", label: "City Breaks" },
  { id: "heritage", label: "Heritage" },
] as const;

type FilterId = typeof filters[number]["id"];

const Destinations = () => {
  const [active, setActive] = useState<FilterId>("all");
  const list = active === "all" ? destinations : destinations.filter((d) => d.category === active);

  return (
    <div className="min-h-screen">
      <Seo
        title="Destinations — Explore Top Travel Spots Worldwide | Udan Travels"
        description="Browse top travel destinations across India and the world. Find inspiration for your next holiday with curated picks from Udan Travels."
        path="/destinations"
      />
      <Navbar />


      <PageHero
        eyebrow="Explore the Map"
        title="Dream Destinations"
        subtitle="From sun-soaked shores to misty mountain peaks, find the place your heart's been waiting for."
        breadcrumb="Destinations"
        image={kashmirImg}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  active === f.id
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Masonry-ish grid */}
          <div key={active} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {list.map((d, i) => (
              <Link
                key={d.name}
                to="/packages"
                className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 opacity-0 animate-scale-fade-in ${
                  i % 5 === 0 ? "row-span-2 aspect-[3/4] md:aspect-auto md:h-full" : "aspect-square"
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />

                {d.tag && (
                  <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                    {d.tag}
                  </span>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                  <div className="flex items-center gap-1 text-[11px] text-white/80">
                    <MapPin className="w-3 h-3 text-secondary" />
                    {d.country}
                  </div>
                  <h3 className="text-lg md:text-xl font-display font-bold leading-tight mt-0.5">
                    {d.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-secondary mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-10 md:p-14 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl animate-float-slow" />
            <Compass className="w-10 h-10 mx-auto mb-4 text-secondary animate-spin-slow" />
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">Can't pick one? We'll help you choose.</h3>
            <p className="text-white/85 mb-6 max-w-xl mx-auto">
              Tell us your travel mood and we'll suggest the perfect destination for you.
            </p>
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link to="/contact#contact-form">Get a Recommendation <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;
