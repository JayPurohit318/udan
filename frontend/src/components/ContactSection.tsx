import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SectionHeader from "@/components/SectionHeader";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("message", form.message);
      formData.append("_subject", "New contact form submission from Udan Travels");
      formData.append("_captcha", "false");

      const response = await fetch("https://formsubmit.co/ajax/purohitjay07@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();
      if (data.success || data.message === "success") {
        toast({
          title: "Message Sent!",
          description: data.message || "Your message was sent successfully.",
        });
        setForm({ name: "", email: "", phone: "", message: "" });
        window.location.href = "/thank-you";
      } else {
        throw new Error(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Contact Us"
          description="Visit us or reach out, our team is here to help plan your perfect trip."
          className="mb-14"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Visit us or reach out, our team is here to help plan your perfect trip.
            </p>

            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Address", value: "111/1112, 11th Floor, Palak Prime, Opp. Antariksh Colony, BRTS Bus Stop, Iscon, Ambli Road, Ahmedabad - 380058" },
                { icon: Phone, label: "Phone", value: "+91 98250 42489 • 079-29600929 • 079-29600930" },
                { icon: Mail, label: "Email", value: "shresthudan@gmail.com" },
                { icon: Clock, label: "Working Hours", value: "Mon - Sat: 10:00 AM - 7:00 PM" },
              ].map(c => (
                <div key={c.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-foreground">{c.label}</div>
                    <div className="text-sm text-muted-foreground">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed */}
            <div className="rounded-xl overflow-hidden border h-48 mt-6">
              <iframe
                title="Udan Travels Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d72.5!3d23.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzI0LjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl border shadow-sm space-y-5">
            <h3 className="font-display font-bold text-2xl text-card-foreground">Send us a message</h3>
            <Input placeholder="Your Name" value={form.name}
              onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required disabled={loading} />
            <Input type="email" placeholder="Email Address" value={form.email}
              onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required disabled={loading} />
            <Input type="tel" placeholder="Phone Number" value={form.phone}
              onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} disabled={loading} />
            <Textarea placeholder="Tell us about your travel plans..." rows={4} value={form.message}
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))} required disabled={loading} />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : <>
                <Send className="w-4 h-4 mr-2" /> Send Message
              </>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
