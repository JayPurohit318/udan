import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeader from "@/components/SectionHeader";

const faqs = [
  {
    q: "How far in advance should I book my trip?",
    a: "For international holidays we recommend booking 2-3 months in advance to lock in the best fares and availability. Domestic trips can usually be booked 3-4 weeks ahead.",
  },
  {
    q: "Do you offer customised travel packages?",
    a: "Yes, every itinerary is fully tailored to your interests, budget and travel dates. Share your preferences and our team will craft a personalised plan for you.",
  },
  {
    q: "What documents are required for visa assistance?",
    a: "Requirements vary by country, but typically include a valid passport, recent photographs, financial statements and confirmed travel bookings. We provide a complete checklist after enquiry.",
  },
  {
    q: "Is travel insurance included in your packages?",
    a: "Travel insurance is highly recommended and offered as an add-on. We can issue policies on the spot covering medical, baggage and trip cancellation.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, bank transfers, debit/credit cards and cheques. EMI options are available on select credit cards for bigger packages.",
  },
  {
    q: "Do you provide 24/7 support during the trip?",
    a: "Absolutely. Our team is reachable round the clock during your travel dates to handle any changes, emergencies or on-ground assistance.",
  },
  {
    q: "Can I make changes to my booking after confirmation?",
    a: "Yes, changes are possible subject to airline and hotel policies. Reach out to us as early as possible and we'll work to minimise any change fees.",
  },
  {
    q: "Do you arrange group and corporate travel?",
    a: "Yes, we specialise in group tours, family trips, MICE travel and corporate offsites with dedicated coordinators and negotiated rates.",
  },
];

const FaqSection = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container max-w-4xl">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Everything you need to know"
          description="Quick answers to the questions our travellers ask the most. Still curious? Get in touch, we love a good conversation."
          className="mb-12"
        />

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl px-5 mb-3 bg-card data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-base md:text-lg hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </div>
    </section>
  );
};

export default FaqSection;
