import { useEffect, useState } from "react";
import { Plane, Hotel, FileText, Ship, Globe, ArrowUpRight, Backpack } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";

import flightsImg from "@/assets/services/flights.jpg";
import hotelsImg from "@/assets/services/hotels.jpg";
import passportImg from "@/assets/services/passport-visa.jpg";
import cruiseImg from "@/assets/services/cruise.jpg";
import toursImg from "@/assets/services/tours.jpg";

const services = [
  {
    icon: Plane,
    eyebrow: "Skies Made Simple",
    title: "Flight Tickets",
    suffix: "domestic & international",
    image: flightsImg,
    desc: "Best fares on every route, backed by our airline partnerships and 24/7 ticketing support, so you fly stress-free from booking to boarding.",
    badge: "Best fare guarantee",
    href: "/services",
  },
  {
    icon: Hotel,
    eyebrow: "Stay In Comfort",
    title: "Hotel Booking",
    suffix: "across India & worldwide",
    image: hotelsImg,
    desc: "Hand-picked stays from boutique hideaways to luxury chains, booked at preferred rates with the room category you actually want.",
    badge: "Preferred-partner rates",
    href: "/services",
  },
  {
    icon: FileText,
    eyebrow: "Documentation",
    title: "Passport & Visa",
    suffix: "made effortless",
    image: passportImg,
    desc: "End-to-end passport submission and visa filing for every major destination, handled by specialists who know each consulate's process.",
    badge: "Handled by experts",
    href: "/services/visa",
  },
  {
    icon: Ship,
    eyebrow: "Seas Of Luxury",
    title: "Cruise Booking",
    suffix: "for unforgettable voyages",
    image: cruiseImg,
    desc: "From Mediterranean classics to exotic Asian itineraries, premium cabins on the world's leading cruise lines, secured at the right price.",
    badge: "Premium cruise partners",
    href: "/services",
  },
  {
    icon: Globe,
    eyebrow: "Curated Journeys",
    title: "Tour Packages",
    suffix: "domestic & international",
    image: toursImg,
    desc: "Thoughtfully designed group and private packages with vetted guides, comfortable transport and authentic experiences end-to-end.",
    badge: "Fully supported, end-to-end",
    href: "/packages",
  },
];

const ROTATE_MS = 5000;

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % services.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(id);
  }, [paused]);

  const current = services[active];

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        {/* Header row with View All */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="What We Offer"
            title="Our Services"
            description="Complete travel solutions under one roof, explore what we do best."
            align="left"
            className="md:max-w-xl"
          />
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 self-start md:self-auto font-semibold text-foreground uppercase tracking-wider text-sm border-b border-foreground/40 pb-1 hover:border-primary hover:text-primary transition-colors"
          >
            View All Services
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Tabs */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {services.map((s, i) => {
              const isActive = i === active;
              const Icon = s.icon;
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={`relative overflow-hidden text-left rounded-xl px-5 py-4 border transition-all duration-300 flex items-center gap-3 ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg"
                      : "bg-card text-foreground border-border hover:border-primary/40"
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="font-display font-semibold text-base md:text-lg">
                    {s.title}
                  </span>
                  {isActive && !paused && (
                    <span
                      key={active}
                      className="absolute bottom-0 left-0 h-0.5 bg-primary-foreground/70 animate-progress"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative h-64 md:h-80 lg:h-full min-h-[20rem] rounded-2xl overflow-hidden shadow-lg">
              {services.map((s, i) => (
                <img
                  key={s.title}
                  src={s.image}
                  alt={s.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              {current.eyebrow}
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              <span className="italic">{current.title}</span>
              <br />
              <span className="font-normal text-2xl md:text-3xl">{current.suffix}</span>
            </h3>
            <p className="text-muted-foreground mt-5 leading-relaxed">{current.desc}</p>

            <div className="flex items-center gap-3 mt-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center">
                <Backpack className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground">{current.badge}</span>
            </div>

            <Link
              to={current.href}
              className="group inline-flex items-center gap-2 mt-8 font-semibold text-foreground uppercase tracking-wider text-sm border-b border-foreground/40 pb-1 w-fit hover:border-primary hover:text-primary transition-colors"
            >
              Explore {current.title}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
