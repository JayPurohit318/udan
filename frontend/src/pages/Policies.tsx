import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import heroPolicies from "@/assets/about/about-hero.jpg";

const Policies = () => (
  <div className="min-h-screen">
    <Seo
      title="Policies"
      description="Cancellation, refund and service fee policies for Shresth Udan Travels."
      path="/policies"
    />
    <Navbar />

    <PageHero
      eyebrow="Policies"
      title="Policies"
      subtitle="Important information about cancellations, refunds and service fees."
      breadcrumb="Policies"
      hideBreadcrumb
      noImage
    />

    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-3xl">
        <div className="rounded-2xl bg-card border border-border p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Policies</h2>
          <ul className="list-disc pl-5 space-y-3 text-sm text-muted-foreground">
            <li>Cancellation must be made in writing via email.</li>
            <li>Cancellation charges will apply as per airline, hotel, and supplier policies, which may vary by destination and season.</li>
            <li>Refund timelines depend on third-party suppliers and may take several weeks.</li>
            <li>Service fees charged by Shresth Udan Travels are non-refundable.</li>
          </ul>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Policies;
