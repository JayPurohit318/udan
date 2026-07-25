import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

import baliImg from "@/assets/packages/bali.jpg";
import kashmirImg from "@/assets/packages/kashmir.jpg";
import dubaiImg from "@/assets/packages/dubai.jpg";
import europeImg from "@/assets/packages/europe.jpg";
import keralaImg from "@/assets/packages/kerala.jpg";
import maldivesImg from "@/assets/packages/maldives.jpg";

const posts = [
  { title: "10 Hidden Beaches in Bali You Must Visit", category: "Travel Tips", date: "Apr 12, 2026", read: "6 min", image: baliImg, excerpt: "Skip the crowds and discover serene shores known only to locals, pristine sand, clear water, zero noise." },
  { title: "Kashmir in Spring: A Photographer's Dream", category: "Destination", date: "Mar 28, 2026", read: "8 min", image: kashmirImg, excerpt: "Tulip gardens, blooming meadows and the gentlest light, here's how to capture Kashmir at its best." },
  { title: "Dubai on a Budget: Yes, It's Possible", category: "Budget Travel", date: "Mar 15, 2026", read: "5 min", image: dubaiImg, excerpt: "Smart hacks to enjoy the city of gold without burning a hole in your pocket, from food to transport." },
  { title: "First-Time Europe: 7 Mistakes to Avoid", category: "Travel Tips", date: "Feb 22, 2026", read: "7 min", image: europeImg, excerpt: "From over-packing to over-planning, learn what seasoned Europe travellers wish they had known earlier." },
  { title: "Why Kerala is the Perfect Slow-Travel Escape", category: "Wellness", date: "Feb 04, 2026", read: "5 min", image: keralaImg, excerpt: "Backwaters, ayurveda and lush green silence, the antidote to your fast-paced city life." },
  { title: "Maldives Resort Guide: Picking the Right Island", category: "Luxury", date: "Jan 18, 2026", read: "9 min", image: maldivesImg, excerpt: "Not all atolls are equal. Use this guide to match the right Maldives resort to your travel style." },
];

const Blog = () => (
  <div className="min-h-screen">
    <Seo
      title="Travel Blog — Stories, Tips & Destination Guides | Udan Travels"
      description="Travel inspiration, destination guides and expert tips from Udan Travels' team. Plan smarter trips with stories from across India and the world."
      path="/blog"
    />
    <Navbar />


    <PageHero
      eyebrow="Travel Diaries"
      title="Stories & Inspiration"
      subtitle="Tips, guides and tales from the road, to fuel your next great escape."
      breadcrumb="Blog"
      image={europeImg}
    />

    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Featured post */}
        <article className="grid md:grid-cols-2 gap-8 mb-16 bg-card rounded-3xl overflow-hidden border border-border shadow-xl shadow-primary/5 group">
          <div className="relative h-72 md:h-auto overflow-hidden">
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <span className="absolute top-5 left-5 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              Featured
            </span>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
              <span className="inline-flex items-center gap-1"><Tag className="w-3.5 h-3.5" /> {posts[0].category}</span>
              <span className="inline-flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {posts[0].date}</span>
              <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {posts[0].read}</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground leading-tight">
              {posts[0].title}
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">{posts[0].excerpt}</p>
            <Button asChild className="mt-6 self-start">
              <Link to="/contact#contact-form">Read Article <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </article>

        {/* Other posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.slice(1).map((p, i) => (
            <article
              key={p.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-card/95 backdrop-blur text-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" /> {p.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {p.read}</span>
                </div>
                <h3 className="text-lg font-display font-bold text-card-foreground leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.excerpt}</p>
                <Link
                  to="/contact#contact-form"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-4 group-hover:gap-2.5 transition-all"
                >
                  Read more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-10 md:p-14 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl animate-float-slow" />
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">Subscribe to our travel letter</h3>
          <p className="text-white/85 mb-6 max-w-xl mx-auto">
            Hand-picked destinations, deals and tips, straight to your inbox, once a month.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 rounded-full px-5 py-3 text-sm text-foreground bg-white/95 placeholder:text-muted-foreground focus:outline-none"
              required
            />
            <Button type="submit" variant="secondary" className="rounded-full font-semibold">
              Subscribe <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </form>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Blog;
