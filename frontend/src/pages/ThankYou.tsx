import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Thank You"
        description="Thank you for contacting Udan Travels. We'll be in touch soon."
        path="/thank-you"
      />
      <Navbar />
      <main className="container py-24 text-center">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border/60 bg-card p-12 shadow-xl shadow-primary/5">
          <p className="text-sm uppercase tracking-[0.4em] text-primary font-semibold mb-4">Thank You</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Your message has been sent.
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            We received your enquiry and our team will contact you shortly. In the meantime, feel free to explore our travel packages and services.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
              Back to Home
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
              Send Another Message
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
