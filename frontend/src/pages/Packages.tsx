import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { MapPin, ArrowRight, Globe2, Clock } from "lucide-react";
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
import packagesHero from "@/assets/packages/packages-hero.jpg";

type Pkg = {
  title: string;
  duration: string;
  description: string;
  image: string;
};

const domesticPackages: Pkg[] = [
  { title: "Goa Beach Getaway", duration: "3N / 4D", description: "Sun-kissed beaches, lively shacks and Portuguese charm by the Arabian Sea.", image: goaImg },
  { title: "Kashmir Paradise", duration: "5N / 6D", description: "Shikara rides, snowy peaks and Mughal gardens in the valley of paradise.", image: kashmirImg },
  { title: "Rajasthan Royal Tour", duration: "6N / 7D", description: "Majestic forts, desert safaris and royal palaces of the land of kings.", image: rajasthanImg },
  { title: "Kerala Backwaters", duration: "4N / 5D", description: "Houseboat cruises, lush hills and Ayurvedic retreats in God's own country.", image: keralaImg },
  { title: "Himachal Adventure", duration: "5N / 6D", description: "Snow-clad mountains, pine valleys and thrilling adventures in the hills.", image: himachalImg },
  { title: "Andaman Islands", duration: "5N / 6D", description: "Pristine beaches, coral reefs and scuba diving in turquoise waters.", image: andamanImg },
];

const internationalPackages: Pkg[] = [
  { title: "Dubai Dazzle", duration: "4N / 5D", description: "Skyscrapers, desert safaris and luxury shopping in the city of gold.", image: dubaiImg },
  { title: "Thailand Explorer", duration: "5N / 6D", description: "Vibrant cities, tropical islands and authentic Thai cuisine adventures.", image: thailandImg },
  { title: "Europe Highlights", duration: "8N / 9D", description: "Iconic cities, scenic Alps and timeless culture across multiple countries.", image: europeImg },
  { title: "Bali Paradise", duration: "5N / 6D", description: "Temples at sunrise, rice terraces and serene beaches on the island of gods.", image: baliImg },
  { title: "Singapore & Malaysia", duration: "6N / 7D", description: "Modern skylines, theme parks and family fun across two vibrant nations.", image: singaporeImg },
  { title: "Maldives Luxury", duration: "4N / 5D", description: "Overwater villas, turquoise lagoons and unforgettable honeymoon moments.", image: maldivesImg },
];

const PackageCard = ({ pkg, index }: { pkg: Pkg; index: number }) => (
  <article
    className="group flex flex-col rounded-2xl overflow-hidden bg-accent/40 border border-accent hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-1.5 transition-all duration-500 opacity-0 animate-fade-in-up"
    style={{ animationDelay: `${0.08 * index}s` }}
  >
    <div className="p-3">
      <div className="relative h-52 rounded-xl overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
    </div>

    <div className="px-5 pb-5 pt-1 flex flex-col flex-1">
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
        <Clock className="w-4 h-4 text-primary" />
        {pkg.duration}
      </div>
      <h3 className="text-xl font-display font-bold text-foreground leading-tight mb-3">
        {pkg.title}
      </h3>
      <p className="text-sm text-foreground/75 leading-relaxed flex-1 mb-5">
        {pkg.description}
      </p>
      <div className="flex gap-3 mt-auto">
        <Button asChild variant="outline" className="flex-1 rounded-full border-primary/30 hover:bg-primary/5">
          <Link to="/contact#contact-form">More Info</Link>
        </Button>
        <Button asChild className="flex-1 rounded-full">
          <Link to="/contact#contact-form">Book</Link>
        </Button>
      </div>
    </div>
  </article>
);

const Packages = () => {
  const [tab, setTab] = useState<"domestic" | "international">("domestic");
  const list = tab === "domestic" ? domesticPackages : internationalPackages;

  return (
    <div className="min-h-screen">
      <Seo
        title="Packages"
        description="Explore handcrafted holiday packages to Goa, Kashmir, Kerala, Dubai, Bali, Europe and more, with flights, stays and transfers fully arranged."
        path="/packages"
      />
      <Navbar />


      <PageHero
        eyebrow="Curated Journeys"
        title="Tour Packages"
        subtitle="Handpicked destinations across India and the world, designed for unforgettable memories."
        breadcrumb="Packages"
        hideBreadcrumb
        image={packagesHero}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {/* Tab switcher */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 bg-muted rounded-full border border-border">
              <button
                onClick={() => setTab("domestic")}
                className={`flex items-center gap-2 px-5 md:px-7 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  tab === "domestic"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <MapPin className="w-4 h-4" /> Domestic
              </button>
              <button
                onClick={() => setTab("international")}
                className={`flex items-center gap-2 px-5 md:px-7 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  tab === "international"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Globe2 className="w-4 h-4" /> International
              </button>
            </div>
          </div>

          {/* Cards grid */}
          <div key={tab} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {list.map((pkg, i) => (
              <PackageCard key={pkg.title} pkg={pkg} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-10 md:p-14 text-center text-primary-foreground relative overflow-hidden border border-border/50 shadow-xl">
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl animate-float-slow" />
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-3">
              Don't see your dream destination?
            </h3>
            <p className="text-white/85 mb-6 max-w-xl mx-auto">
              We craft fully customised packages tailored to your style, schedule and budget.
            </p>
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link to="/contact#contact-form">
                Request Custom Package <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
