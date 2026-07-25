import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import heroAbout from "@/assets/about/about-hero.jpg";
import missionImg from "@/assets/about/mission.jpg";
import visionImg from "@/assets/about/vision.jpg";
import iataLogo from "@/assets/accreditations/iata.svg";
import taaiLogo from "@/assets/accreditations/taai.jpeg";
import tafiLogo from "@/assets/accreditations/tafi.png";
import { Award, CheckCircle, Target, Eye, Heart } from "lucide-react";

const timeline = [
  { year: "1990", title: "The Journey Begins", desc: "Shresth Udan Travels founded in Ahmedabad with a vision to make travel effortless." },
  { year: "1991", title: "IATA Accreditation", desc: "Earned official IATA license, entering the global travel network." },
  { year: "1993", title: "Member of TAAI", desc: "Joined the Travel Agents Association of India to strengthen travel partnerships and trust." },
  { year: "1995", title: "Member of TAFI", desc: "Became a member of the Travel Agents Federation of India for expanded industry collaboration." },
  { year: "2003", title: "50,000 Happy Travellers", desc: "A proud milestone, a decade of trust, smiles and memories." },
  { year: "2026", title: "35+ Years Strong", desc: "Continuing to redefine travel with modern experiences and old-school care." },
];

const values = [
  { icon: Heart, title: "Customer First", desc: "Every itinerary starts with you, your dreams, your pace, your comfort." },
  { icon: Award, title: "Uncompromised Quality", desc: "Hand-picked partners and verified experiences, no shortcuts." },
  { icon: CheckCircle, title: "Honest Pricing", desc: "Transparent fares with zero hidden surprises, ever." },
];

const About = () => (
  <div className="min-h-screen">
    <Seo
      title="About Us"
      description="Founded in 1990, Shresth Udan Travels is an IATA-licensed agency in Ahmedabad with 35+ years of trusted service across flights, visas and tours."
      path="/about"
    />
    <Navbar />


    <PageHero
      eyebrow="Our Story"
      title="About Us"
      subtitle="35+ years of trust, expertise, and seamless travel experiences."
      breadcrumb="About"
      hideBreadcrumb
      image={heroAbout}
    />

    {/* Our Story, Bento layout */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Story</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground leading-tight">
            Shresth Udan Travels Ltd
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 md:gap-6 md:auto-rows-fr">
          {/* Top-left: 50K+ Travellers (primary) */}
          <div className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-10 flex flex-col justify-between min-h-[260px]">
            <div className="text-5xl md:text-7xl font-display font-bold leading-none">50K+</div>
            <div>
              <div className="text-lg font-semibold mt-6">Happy Travellers</div>
              <p className="text-sm text-primary-foreground/80 mt-3 leading-relaxed">
                Every journey we craft adds to a growing family of travellers who trust us with their memories.
              </p>
            </div>
          </div>

          {/* Center (merged): Shresth Udan story + 35+ years + Est. 1990 */}
          <div className="rounded-2xl bg-gradient-to-br from-foreground via-foreground to-foreground/85 text-white p-8 md:p-10 flex flex-col justify-between min-h-[260px] md:row-span-2 relative overflow-hidden">
            <div className="absolute -top-6 -right-2 font-display text-[180px] leading-none text-secondary/15 select-none pointer-events-none">
              &ldquo;
            </div>

            <div className="relative z-10 flex items-center gap-3">
              <span className="h-px w-8 bg-secondary" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-secondary font-semibold">
                Est. 1990
              </span>
            </div>

            <div className="relative z-10 mt-8">
              <div className="font-display text-3xl md:text-4xl leading-[1.05] font-bold">
                Shresth <span className="italic font-light text-secondary">Udan</span>
              </div>
              <div className="font-display text-3xl md:text-4xl leading-[1.05] font-bold">
                Travels <span className="text-white/60 font-light">Ltd.</span>
              </div>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="text-5xl md:text-6xl font-display font-bold text-secondary leading-none">35+</span>
                <span className="text-sm uppercase tracking-widest text-white/70">Years of Service</span>
              </div>
              <div className="mt-5 h-px w-16 bg-white/25" />
              <p className="text-sm text-white/75 mt-5 leading-relaxed max-w-[34ch]">
                Crafting trusted journeys from Ahmedabad since 1990, 35+ years of transparency, care and seamless travel.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
              <div className="text-[10px] tracking-[0.25em] uppercase text-white/50">Founded by</div>
              <div className="font-display italic text-lg md:text-xl mt-1">Rani &amp; Biren Parikh</div>
            </div>
          </div>

          {/* Right (tall): 110+ Destinations */}
          <div className="rounded-2xl bg-secondary text-foreground p-8 md:p-10 flex flex-col justify-between min-h-[260px] md:row-span-2 relative overflow-hidden">
            <div className="text-[11px] tracking-[0.3em] uppercase font-semibold text-foreground/70">Worldwide Reach</div>
            <div className="flex flex-col items-start">
              <div className="text-6xl md:text-8xl font-display font-bold leading-none">110+</div>
              <div className="mt-4 text-lg font-semibold">Destinations</div>
              <div className="mt-5 h-px w-16 bg-foreground/30" />
              <p className="text-sm md:text-base text-foreground/80 mt-5 leading-relaxed max-w-[28ch]">
                From local escapes to far-off horizons, we craft journeys across the globe.
              </p>
            </div>
            <div className="text-xs text-foreground/60">India · Asia · Europe · Americas · Africa · Oceania</div>
          </div>

          {/* Bottom-left: IATA (dark) */}
          <div className="rounded-2xl bg-foreground text-white p-8 md:p-10 flex flex-col justify-between min-h-[260px]">
            <div className="text-5xl md:text-7xl font-display font-bold leading-none">IATA</div>
            <div>
              <div className="text-lg font-semibold mt-6">Licensed Agency</div>
              <p className="text-sm text-white/70 mt-3 leading-relaxed">
                Accredited by IATA (14 3 3585 6) and proud members of TAAI &amp; TAFI, your guarantee of trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: "Our Mission",
              image: missionImg,
              desc: "To provide world-class travel solutions at competitive prices while ensuring every journey is safe, comfortable, and memorable. We strive to be your lifelong travel partner.",
            },
            {
              title: "Our Vision",
              image: visionImg,
              desc: "To be the most trusted and preferred travel agency in Gujarat, known for integrity, innovation, and exceptional customer service across domestic and international travel.",
            },
          ].map((item) => (
            <article key={item.title} className="relative flex flex-col rounded-3xl overflow-hidden bg-foreground shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent via-foreground/60 to-foreground pointer-events-none" />
              </div>
              <div className="px-8 md:px-12 pt-2 pb-10 md:pb-14 text-white -mt-px">
                <h3 className="font-display text-4xl md:text-6xl text-secondary leading-[1.05]">
                  <span className="font-normal">Our</span>{" "}
                  <span className="font-bold">{item.title.replace("Our ", "")}</span>
                </h3>
                <p className="text-base md:text-lg text-white/75 leading-relaxed mt-6 max-w-xl">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Journey</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            35+ Years of Milestones
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary md:-translate-x-1/2" />

          {timeline.map((t, i) => (
            <div
              key={t.year}
              className={`relative mb-10 flex items-center opacity-0 animate-fade-in-up ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="hidden md:block w-1/2" />
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background shadow-lg md:-translate-x-1/2 z-10" />
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <div className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-1 rounded-full mb-2">
                    {t.year}
                  </span>
                  <h3 className="font-display font-bold text-lg text-foreground">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Core values */}
    <section className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">What We Stand For</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">Our Core Values</h2>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="relative text-center opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative w-20 h-20 mx-auto mb-5">
                <div className="absolute inset-0 rounded-full bg-secondary/20 animate-ping" style={{ animationDuration: "3s" }} />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center shadow-xl shadow-primary/20">
                  <v.icon className="w-9 h-9" />
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-foreground">{v.title}</h3>
              <p className="font-sans text-sm text-muted-foreground mt-2 max-w-xs mx-auto leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Leadership</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">Meet the Directors</h2>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Rani Parikh", role: "Director", initials: "RP" },
            { name: "Biren Parikh", role: "Director", initials: "BP" },
            { name: "Kartikeya Parikh", role: "Director", initials: "KP" },
          ].map((p, i) => (
            <div
              key={p.name}
              className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-shadow opacity-0 animate-scale-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 text-primary-foreground flex items-center justify-center text-2xl font-display font-bold shadow-lg">
                {p.initials}
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mt-5">{p.name}</h3>
              <p className="text-sm text-secondary font-semibold uppercase tracking-wider mt-1">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* Accreditations & Memberships */}
    <section className="py-16 md:py-24 bg-muted/30 border-t border-border">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Trusted & Certified</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Accreditations & Memberships
          </h2>
          <p className="text-muted-foreground mt-4">
            Proud IATA accredited agency and active member of India's leading travel associations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { src: iataLogo, name: "IATA", label: "Accredited Agency — License No. 14 3 3585 6" },
            { src: taaiLogo, name: "TAAI", label: "Member — Travel Agents Association of India" },
            { src: tafiLogo, name: "TAFI", label: "Member — Travel Agents Federation of India" },
          ].map((a) => (
            <div
              key={a.name}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="h-28 w-28 flex items-center justify-center mb-5">
                <img
                  src={a.src}
                  alt={`${a.name} logo`}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground">{a.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{a.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
