import { Link } from "react-router-dom";
import { Plane, Hotel, FileText, Train, Ship, Car, Globe, Shield, CreditCard, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import heroServices from "@/assets/services/services-hero.jpg";
import flightsImg from "@/assets/services/flights.jpg";
import hotelsImg from "@/assets/services/hotels.jpg";
import passportImg from "@/assets/services/passport-visa.jpg";
import visaImg from "@/assets/hero-visa.jpg";
import trainImg from "@/assets/services/train.jpg";
import insuranceImg from "@/assets/services/insurance.jpg";
import cruiseImg from "@/assets/services/cruise.jpg";
import carImg from "@/assets/services/car-rental.jpg";
import toursImg from "@/assets/services/tours.jpg";
import forexImg from "@/assets/services/forex.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  { icon: Plane, image: flightsImg, title: "Flight Tickets", desc: "Domestic & international flight bookings at competitive prices with 24/7 support.", points: ["Best fare guarantee", "Web check-in assistance", "Group booking discounts"], link: "/contact#contact-form" },
  { icon: Hotel, image: hotelsImg, title: "Hotel Booking", desc: "Premium hotel reservations across India and worldwide, from boutique stays to 5-star luxury.", points: ["Verified properties", "Exclusive rates", "Free cancellation options"], link: "/contact#contact-form" },
  { icon: FileText, image: passportImg, title: "Passport Services", desc: "Hassle-free passport submission with full documentation and police verification support.", points: ["Fresh & renewal", "Tatkaal processing", "Address / name change"], link: "/services/passport" },
  { icon: Globe, image: visaImg, title: "Visa Services", desc: "End-to-end visa processing for 50+ countries, tourist, business, student & more.", points: ["50+ countries", "98% success rate", "Embassy slot booking"], link: "/services/visa" },
  { icon: Train, image: trainImg, title: "Railway & Eurail", desc: "Indian railway and European Eurail ticket bookings with seat preference support.", points: ["Tatkal & confirmed seats", "Eurail global passes", "Seat selection"] },
  { icon: Shield, image: insuranceImg, title: "Overseas Insurance", desc: "Comprehensive travel insurance for international trips with global medical coverage.", points: ["Medical emergencies", "Trip cancellation", "Lost baggage cover"] },
  { icon: Ship, image: cruiseImg, title: "Cruise Booking", desc: "Luxury cruise packages for unforgettable sea voyages across the world's top routes.", points: ["Caribbean & Mediterranean", "Cabin upgrades", "Shore excursions"] },
  { icon: Car, image: carImg, title: "Car Rental", desc: "Domestic car booking for comfortable road travel with chauffeur or self-drive options.", points: ["All-India coverage", "Hourly & daily rentals", "Airport pickups"] },
  { icon: Globe, image: toursImg, title: "Tour Packages", desc: "Curated domestic & international holiday packages tailored to every traveller.", points: ["Custom itineraries", "Honeymoon specials", "Group tours"] },
  { icon: CreditCard, image: forexImg, title: "Forex Services", desc: "Competitive foreign exchange and travel card services with doorstep delivery.", points: ["Multi-currency cards", "Best exchange rates", "RBI authorised"] },
];

const faqs = [
  { q: "How far in advance should I book my trip?", a: "For international holidays we recommend booking 2-3 months in advance for the best fares and availability. Domestic trips can usually be booked 3-4 weeks ahead." },
  { q: "Do you offer fully customised itineraries?", a: "Absolutely. Every trip can be tailored, destinations, hotel category, activities, transport and pace. Just share your preferences and our team will craft a plan around you." },
  { q: "What documents do I need for visa assistance?", a: "Requirements vary by country, but typically you'll need a valid passport, recent photographs, financial statements and confirmed travel bookings. We provide a full checklist after enquiry." },
  { q: "Is travel insurance included in packages?", a: "Travel insurance is highly recommended and offered as an add-on. We can issue policies on the spot covering medical, baggage and trip cancellation." },
  { q: "What payment methods do you accept?", a: "We accept bank transfers, UPI, all major credit/debit cards, and EMI options for select packages. A booking confirmation is shared instantly upon payment." },
  { q: "Do you provide 24/7 support during the trip?", a: "Yes, every traveller gets a dedicated WhatsApp helpline and emergency contact for round-the-clock assistance throughout the journey." },
];

const Services = () => (
  <div className="min-h-screen">
    <Seo
      title="Travel Services"
      description="Complete travel services from Udan Travels: flights, hotels, passport, visa, cruise, train, car rental, insurance and forex under one trusted roof."
      path="/services"
    />
    <Navbar />


    <PageHero
      eyebrow="Complete Travel Solutions"
      title="Our Services"
      subtitle="From flight tickets to forex, every travel need under one trusted roof, backed by 35+ years of expertise."
      breadcrumb="Services"
      image={heroServices}
    />

    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-14 md:mb-20">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Discover Our Services
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Tailored travel solutions for every journey, from quick getaways to complex multi-country itineraries.
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {services.map((s, i) => {
            const hasLink = "link" in s && s.link && s.link !== "/contact";
            const reverse = i % 2 === 1;
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                <div className={reverse ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                    {s.desc}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-foreground/85">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="rounded-full font-semibold">
                    <Link to={hasLink ? s.link! : "/contact"}>
                      {hasLink ? "Learn More" : "Enquire Now"} <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className={reverse ? "lg:order-1" : ""}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">FAQs</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4">
            Everything you need to know before reaching out.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="bg-card border border-border rounded-xl px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-background">
      <div className="container">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-10 md:p-14 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl animate-float-slow" />
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">Need help planning your trip?</h3>
          <p className="text-white/85 mb-6 max-w-xl mx-auto">
            Our travel experts are just a call away. Get personalised recommendations in minutes.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link to="/contact#contact-form">
              Talk to an Expert <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;
