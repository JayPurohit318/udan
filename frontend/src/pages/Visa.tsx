import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Clock,
  ShieldCheck,
  Plane,
  Briefcase,
  GraduationCap,
  Heart,
  Phone,
  Sparkles,
  FileCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroVisa from "@/assets/hero-visa.jpg";
import visaAdvantage from "@/assets/visa-advantage.jpg";

const visaTypes = [
  { icon: Plane, title: "Tourist Visa", desc: "Holiday and leisure travel visas for 50+ countries with quick turnaround." },
  { icon: Briefcase, title: "Business Visa", desc: "Corporate travel, conferences, meetings and trade exhibitions worldwide." },
  { icon: Heart, title: "Family / Visit Visa", desc: "Visit relatives or friends abroad with smooth invitation-letter processing." },
  { icon: Globe, title: "Transit Visa", desc: "Layover and transit visa support for long international itineraries." },
];

const countries = [
  { name: "USA", flag: "🇺🇸" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Schengen", flag: "🇪🇺" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Dubai (UAE)", flag: "🇦🇪" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Vietnam", flag: "🇻🇳" },
];

const benefits = [
  "Up-to-date knowledge of global visa policies",
  "Strong network of international embassy partners",
  "Personalised guidance for your destination",
  "Higher chance of approval, lower paperwork stress",
  "Document verification before submission",
  "Real-time application status updates",
];

const faqs = [
  { q: "How early should I apply for a visa?", a: "We recommend applying at least 4-6 weeks before your travel date. Some embassies (Schengen, USA) may require longer slots." },
  { q: "Do you guarantee visa approval?", a: "No agent can guarantee approval, final decisions rest with the embassy. However, our expertise significantly improves accuracy and approval chances." },
  { q: "What if my visa is rejected?", a: "We review the rejection grounds, advise on required corrections and assist with re-application or appeals." },
  { q: "Do I need to appear at the embassy in person?", a: "Most countries require biometrics and a personal interview. We pre-book your slot and brief you for the interview in advance." },
  { q: "Can you handle group visa applications?", a: "Yes, we regularly handle family, corporate and student group visas with bulk documentation support." },
];

const Visa = () => (
  <div className="min-h-screen">
    <Seo
      title="Visa Services"
      description="Expert visa assistance for 50+ countries: tourist, business, student and family visas with documentation, appointments and follow-up handled for you."
      path="/services/visa"
    />
    <Navbar />


    <PageHero
      eyebrow="Visa Services"
      title="Travel Visas Made Easy"
      subtitle="From tourist to business, study to work, we provide reliable, efficient and hassle-free visa application services for 50+ countries worldwide."
      breadcrumb="Visa"
      image={heroVisa}
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild size="lg" variant="secondary" className="font-semibold">
          <Link to="/contact#contact-form"><Sparkles className="w-4 h-4 mr-2" /> Check Eligibility</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 backdrop-blur text-white hover:bg-white/20 hover:text-white">
          <a href="tel:+919825042489"><Phone className="w-4 h-4 mr-2" /> Talk to Expert</a>
        </Button>
      </div>
    </PageHero>

    {/* Overview */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Welcome to Udan</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
            Your Trusted Travel Visa Experts
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Planning an international trip? Let us take the stress out of your visa application. We
            specialise in <strong className="text-foreground">reliable, efficient and hassle-free visa
            services</strong> for tourists, students and business travellers. Whether you're heading to
            Europe, Asia, the Americas, or anywhere in between, our experienced team helps you get
            approved fast, with confidence.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            From gathering required documents to submitting your application, we provide step-by-step
            guidance to ensure everything is accurate and complete. With us, you're in safe hands.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { icon: Globe, num: "50+", label: "Countries" },
              { icon: Clock, num: "5-15", label: "Days Avg" },
              { icon: ShieldCheck, num: "98%", label: "Success Rate" },
            ].map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
                <s.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-xl font-display font-bold text-foreground">{s.num}</div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
          <img
            src={heroVisa}
            alt="Visa services"
            loading="lazy"
            width={1920}
            height={1080}
            className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </section>

    {/* Visa types */}
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Visa Categories</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Every Visa, Handled
          </h2>
          <p className="text-muted-foreground mt-4">
            We process every category of travel visa with personalised support.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {visaTypes.map((v, i) => (
            <article
              key={v.title}
              className="group bg-card border border-border rounded-2xl p-7 hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-2 transition-all duration-500 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <v.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-display font-bold text-card-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Countries */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Destinations</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Popular Visa Destinations
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {countries.map((c, i) => (
            <div
              key={c.name}
              className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.04 * i}s` }}
            >
              <div className="text-4xl mb-2">{c.flag}</div>
              <div className="text-sm font-semibold text-foreground">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why choose us */}
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
            The Udan Advantage
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Every trip is unique, and so is every visa requirement. Our personalised service ensures
            you get the right advice for your destination.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <ul className="grid gap-3 order-last lg:order-first">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{b}</span>
              </li>
            ))}
          </ul>
          <div className="relative lg:h-full min-h-[320px]">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <img
              src={visaAdvantage}
              alt="Visa documents and world travel map"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative rounded-3xl shadow-2xl w-full h-full object-cover lg:absolute lg:inset-0"
            />
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">FAQs</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Visa Questions Answered
          </h2>
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
          <Globe className="w-10 h-10 text-secondary mx-auto mb-3" />
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">Start Your Journey with Confidence</h3>
          <p className="text-white/85 mb-6 max-w-xl mx-auto">
            Don't let paperwork delay your plans. Whether it's a family vacation, business trip or a dream backpacking adventure, we're ready to help you get there.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link to="/contact#contact-form">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Visa;
