import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

const testimonials = [
  { name: "Priya Mehta", trip: "Maldives Honeymoon", text: "Absolutely flawless planning! Every detail was taken care of, from the overwater villa to the candle-lit dinner. Best decision ever.", rating: 5 },
  { name: "Rakesh Shah", trip: "Europe Family Tour", text: "Travelling with three generations was a breeze thanks to the team. Smooth transfers, great hotels, and unforgettable memories.", rating: 5 },
  { name: "Anjali Patel", trip: "Kashmir Escape", text: "The shikara ride at sunrise will stay with me forever. Highly professional team, felt cared for at every step.", rating: 5 },
  { name: "Vikram Desai", trip: "Dubai Business + Leisure", text: "I needed a quick combination trip and they delivered above and beyond. 24/7 support is real and reliable.", rating: 5 },
  { name: "Sneha Joshi", trip: "Bali Getaway", text: "Loved the curated experiences, the temple sunrise tour and the cooking class were highlights. Worth every rupee.", rating: 5 },
  { name: "Aman Trivedi", trip: "Kerala Backwaters", text: "From the houseboat to the spa resort in Munnar, everything was perfectly timed. A truly rejuvenating holiday.", rating: 5 },
  { name: "Meera Kapoor", trip: "Switzerland Tour", text: "The Alps were breathtaking and the planning was impeccable. Every transfer and excursion was seamless.", rating: 5 },
  { name: "Rohit Sinha", trip: "Thailand Adventure", text: "Island hopping, street food tours, and luxury stays, perfectly balanced. Will book again without hesitation.", rating: 5 },
  { name: "Kavita Rao", trip: "Singapore Family", text: "Kid-friendly itinerary with the right mix of fun and rest. The team understood exactly what we needed.", rating: 5 },
];

const PAGE_SIZE = 3;

const TestimonialCard = ({ t }: { t: typeof testimonials[number] }) => (
  <div className="bg-accent/60 border border-accent rounded-2xl p-7 flex flex-col h-full">
    <div className="flex gap-1 mb-5">
      {Array.from({ length: t.rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
      ))}
    </div>
    <p className="text-base text-foreground/85 leading-relaxed flex-1">{t.text}</p>
    <div className="mt-6">
      <div className="font-display font-bold text-foreground">{t.name}</div>
      <div className="text-sm text-muted-foreground mt-0.5">{t.trip}</div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const totalPages = Math.ceil(testimonials.length / PAGE_SIZE);
  const [page, setPage] = useState(0);

  const start = page * PAGE_SIZE;
  const visible = testimonials.slice(start, start + PAGE_SIZE);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            align="left"
            eyebrow="Travellers Speak"
            title="What our clients say about us"
            description="Real words from real travellers we've had the privilege to serve."
            className="mx-0"
          />
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Previous testimonials"
              className="rounded-full h-12 w-12 border-primary/30 hover:bg-primary/5"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              onClick={next}
              aria-label="Next testimonials"
              className="rounded-full h-12 w-12 bg-primary hover:bg-primary/90"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <TestimonialCard key={`${page}-${i}`} t={t} />
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === page ? "w-8 bg-primary" : "w-2 bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
