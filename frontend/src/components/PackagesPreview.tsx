import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

import goaImg from "@/assets/packages/goa.jpg";
import kashmirImg from "@/assets/packages/kashmir.jpg";
import keralaImg from "@/assets/packages/kerala.jpg";
import dubaiImg from "@/assets/packages/dubai.jpg";
import baliImg from "@/assets/packages/bali.jpg";
import maldivesImg from "@/assets/packages/maldives.jpg";

const featured = [
  { title: "Kashmir Paradise", duration: "5N / 6D", description: "Shikara rides, snowy peaks and Mughal gardens in the valley of paradise.", image: kashmirImg },
  { title: "Goa Beach Getaway", duration: "3N / 4D", description: "Sun-kissed beaches, lively shacks and Portuguese charm by the Arabian Sea.", image: goaImg },
  { title: "Kerala Backwaters", duration: "4N / 5D", description: "Houseboat cruises, lush hills and Ayurvedic retreats in God's own country.", image: keralaImg },
  { title: "Dubai Dazzle", duration: "4N / 5D", description: "Skyscrapers, desert safaris and luxury shopping in the city of gold.", image: dubaiImg },
  { title: "Bali Paradise", duration: "5N / 6D", description: "Temples at sunrise, rice terraces and serene beaches on the island of gods.", image: baliImg },
  { title: "Maldives Luxury", duration: "4N / 5D", description: "Overwater villas, turquoise lagoons and unforgettable honeymoon moments.", image: maldivesImg },
];

const PackagesPreview = () => (
  <section id="packages-preview" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
    <div className="absolute top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

    <div className="container relative">
      <SectionHeader
        eyebrow="Featured Destinations"
        title="Handpicked Holiday Packages"
        description="Discover our most-loved journeys, from sun-kissed beaches to snowy peaks, crafted for every kind of traveller."
        className="mb-14"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {featured.map((p, i) => (
          <article
            key={p.title}
            className="group flex flex-col rounded-2xl overflow-hidden bg-accent/40 border-2 border-accent hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-1.5 transition-all duration-500 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${0.08 * i}s` }}
          >
            <div className="p-3">
              <div className="relative h-52 rounded-xl overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="px-5 pb-5 pt-1 flex flex-col flex-1">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                <Clock className="w-4 h-4 text-primary" />
                {p.duration}
              </div>
              <h3 className="text-xl font-display font-bold text-foreground leading-tight mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-foreground/75 leading-relaxed flex-1 mb-5">
                {p.description}
              </p>
              <div className="flex gap-3 mt-auto">
                <Button asChild variant="outline" className="flex-1 rounded-full border-primary/30 hover:bg-primary/5">
                  <Link to="/packages">More Info</Link>
                </Button>
                <Button asChild className="flex-1 rounded-full">
                  <Link to="/contact#contact-form">Book</Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg" className="font-semibold shadow-lg hover:scale-105 transition-transform">
          <Link to="/packages">
            Explore All Packages <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default PackagesPreview;
