import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Clock,
  ShieldCheck,
  Users,
  Calendar,
  MapPin,
  BookUser,
  Phone,
  Sparkles,
  RefreshCw,
  Zap,
  AlertTriangle,
  Edit3,
  Baby,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroPassport from "@/assets/hero-passport.jpg";
import passportDocuments from "@/assets/passport-documents.jpg";

const services = [
  { title: "Fresh Passport", icon: FileText, desc: "Brand new passport application with end-to-end form filling, document verification & appointment booking." },
  { title: "Passport Renewal", icon: RefreshCw, desc: "Hassle-free renewal of expired or near-expiry passports with priority processing." },
  { title: "Tatkaal Passport", icon: Zap, desc: "Urgent passport processing under the Tatkaal scheme for last-minute travel needs." },
  { title: "Lost / Damaged", icon: AlertTriangle, desc: "Police verification support and re-issue assistance for lost or damaged passports." },
  { title: "Name / Address Change", icon: Edit3, desc: "Update name after marriage, change of address, DOB correction and other amendments." },
  { title: "Minor Passport", icon: Baby, desc: "Special handling for minors, parental documentation guidance and appointment support." },
];

const documents = [
  "Aadhaar Card (mandatory)",
  "PAN and Voter ID",
  "Birth Certificate / Education Proof",
  "School Leaving Certificate",
  "Address Proof (Electricity / Gas / Bank passbook)",
  "Old passport (for renewal cases)",
];

const process = [
  { icon: Phone, title: "Consultation", desc: "Share your requirement on call or WhatsApp. We assess your case in minutes." },
  { icon: FileText, title: "Documentation", desc: "We prepare your forms and verify every document for accuracy." },
  { icon: Calendar, title: "Appointment", desc: "Slot booking at the nearest Passport Seva Kendra at your convenience." },
  { icon: ShieldCheck, title: "Verification", desc: "Guidance through police verification and real-time status tracking." },
  { icon: CheckCircle2, title: "Delivery", desc: "Your passport arrives at your doorstep, quick, safe, and stress-free." },
];

const faqs = [
  { q: "How long does it take to get a new passport?", a: "Under normal scheme it takes 30-45 days; Tatkaal can be 7-14 working days subject to police verification." },
  { q: "Can you handle police verification?", a: "Yes, we guide you on every step of post/pre verification and help coordinate with local authorities." },
  { q: "Do I need to visit your office?", a: "No, we offer doorstep document collection across Ahmedabad and online consultation for outstation clients." },
  { q: "What if my passport application is rejected?", a: "Our experts review the rejection reason and help you re-apply with corrected documentation at no extra service charge." },
];

const Passport = () => (
  <div className="min-h-screen">
    <Seo
      title="Passport Services"
      description="End-to-end passport assistance in Ahmedabad: fresh applications, renewals, tatkaal, lost or damaged, name and address changes, and minor passports."
      path="/services/passport"
    />
    <Navbar />


    <PageHero
      eyebrow="Passport Services"
      title="Your Passport, Our Priority"
      subtitle="Fast, reliable and hassle-free passport assistance in Ahmedabad. From fresh applications to renewals, we handle every step so you can focus on the journey ahead."
      breadcrumb="Passport"
      image={heroPassport}
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild size="lg" variant="secondary" className="font-semibold">
          <Link to="/contact#contact-form"><Sparkles className="w-4 h-4 mr-2" /> Apply Now</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 backdrop-blur text-white hover:bg-white/20 hover:text-white">
          <a href="tel:+919825042489"><Phone className="w-4 h-4 mr-2" /> Call Expert</a>
        </Button>
      </div>
    </PageHero>

    {/* Overview */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
          <img
            src={heroPassport}
            alt="Passport assistance"
            loading="lazy"
            width={1920}
            height={1080}
            className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
          />
        </div>
        <div>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Overview</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
            Trusted Passport Partner Since 1990
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            At Udan Travels, we take pride in being a leading agency in Ahmedabad dedicated to providing
            <strong className="text-foreground"> fast, reliable and stress-free passport services.</strong> Our
            goal is to simplify the process for you, from new applications and renewals to lost passport
            cases and name or address changes.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            With our experienced team and deep understanding of government procedures, we ensure all
            documents are correctly prepared, submitted on time, and compliant with the latest passport
            regulations. We guide you through appointment booking, documentation, police verification and
            even help track your application status.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { icon: Users, num: "10K+", label: "Passports" },
              { icon: Clock, num: "7 Days", label: "Tatkaal" },
              { icon: ShieldCheck, num: "100%", label: "Compliant" },
            ].map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
                <s.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-xl font-display font-bold text-foreground">{s.num}</div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Services we offer */}
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Complete Passport Solutions
          </h2>
          <p className="text-muted-foreground mt-4">
            Every kind of passport requirement, handled by experts.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group bg-card border border-border rounded-2xl p-7 hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-2 transition-all duration-500 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-card-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Documents required */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <SectionHeader
          eyebrow="Documents"
          title="Documents You'll Need"
          description="We share a complete checklist after your enquiry. Most applications require the essentials below."
          className="mb-12"
        />
        <div className="mb-8 rounded-3xl border border-border bg-secondary/10 p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-secondary text-white shadow-sm">
              <span className="text-base font-semibold">i</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Document checklist note</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                This list shows the most common documents. Depending on your case, there may be additional documents required, and our team will confirm the exact checklist after your enquiry.
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <img
              src={passportDocuments}
              alt="Passport application documents"
              loading="lazy"
              width={1280}
              height={960}
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </div>
          <ul className="space-y-3">
            {documents.map((d) => (
              <li key={d} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Process Made Simple */}
    <section className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
      <div className="container">
        <SectionHeader
          eyebrow="How It Works"
          title="Process Made Simple"
          description="From first call to passport in hand, here's how we make it effortless."
          className="mb-16"
        />

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px border-t-2 border-dashed border-primary/30" />

          {process.map((p, i) => (
            <div
              key={p.title}
              className="relative text-center opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative w-20 h-20 mx-auto mb-5">
                <div className="absolute inset-0 rounded-full bg-secondary/20 animate-ping" style={{ animationDuration: "3s" }} />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center shadow-xl shadow-primary/20 font-display text-2xl font-bold">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">{p.title}</h3>
              <p className="font-sans text-sm text-muted-foreground mt-2 max-w-xs mx-auto leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">FAQs</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Passport Questions Answered
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
          <BookUser className="w-10 h-10 text-secondary mx-auto mb-3" />
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">Ready to apply for your passport?</h3>
          <p className="text-white/85 mb-6 max-w-xl mx-auto">
            Get expert help today, share your details and we'll take it from there.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link to="/contact#contact-form">
              Start Application <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Passport;
