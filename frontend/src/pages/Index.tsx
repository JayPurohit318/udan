import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PackagesPreview from "@/components/PackagesPreview";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => (
  <div className="min-h-screen">
    <Seo
      title="Udan Travels"
      description="Flights, hotels, visa, passport, cruise and curated tour packages from Shresth Udan Travels — Ahmedabad's trusted IATA travel agency since 1990."
      path="/"
    />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <PackagesPreview />
    <ProcessSection />
    <WhyUsSection />
    <TestimonialsSection />
    <FaqSection />
    <FinalCtaSection />
    <Footer />
  </div>
);

export default Index;
