import { useEffect, useState } from "react";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import heroContact from "@/assets/hero-contact.jpg";

import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  phone: z.string().trim().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  message: z.string().trim().optional(),
});

type FormState = z.infer<typeof contactSchema>;
type Errors = Partial<Record<keyof FormState, string>>;

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (k: keyof FormState, v: string) => {
    setForm(p => ({ ...p, [k]: v }));
    if (errors[k]) setErrors(p => ({ ...p, [k]: undefined }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Errors = {};
      result.error.issues.forEach(i => {
        const key = i.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitted(false);
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", result.data.name);
      formData.append("email", result.data.email);
      formData.append("phone", result.data.phone);
      formData.append("message", result.data.message);
      formData.append("_subject", "New contact form submission from Udan Travels");
      formData.append("_captcha", "false");

      const response = await fetch("https://formsubmit.co/ajax/shresthudan@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (!data.success && data.message !== "success") {
        setIsSubmitting(false);
        toast({
          title: "Unable to send message",
          description: data.message || "Please try again later.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Message sent",
        description: data.message || "Your enquiry has been delivered.",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      window.location.href = "/thank-you";
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your enquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      if (!submitted) {
        setIsSubmitting(false);
      }
    }
  };

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Palak+Prime+Ambli+Road+Ahmedabad";
  const contactItems: {
    icon: typeof MapPin;
    label: string;
    lines: { text: string; href?: string }[];
  }[] = [
    {
      icon: MapPin,
      label: "Visit Us",
      lines: [
        { text: "1111 & 1112, Palak Prime,", href: mapsUrl },
        { text: "Opp. Double Tree Hilton,", href: mapsUrl },
        { text: "Ambli Road, Ahmedabad 380058", href: mapsUrl },
      ],
    },
    {
      icon: Phone,
      label: "Call Us",
      lines: [
        { text: "+91 98250 42489", href: "tel:+919825042489" },
        { text: "079-29600929 / 30", href: "tel:+9107929600929" },
      ],
    },
    {
      icon: Mail,
      label: "Email Us",
      lines: [{ text: "shresthudan@gmail.com", href: "mailto:shresthudan@gmail.com" }],
    },
    {
      icon: Clock,
      label: "Open Hours",
      lines: [
        { text: "Mon - Fri: 10 AM - 7 PM" },
        { text: "Sat: 10 AM - 4 PM" },
      ],
    },
  ];

  const errClass = (k: keyof FormState) =>
    errors[k] ? "border-destructive focus-visible:ring-destructive" : "";

  useEffect(() => {
    if (window.location.hash === "#contact-form") {
      const element = document.getElementById("contact-form");
      if (element) {
        const headerOffset = 96;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Seo
        title="Contact Us"
        description="Talk to Ahmedabad's IATA-licensed travel team. Call, email or visit us to plan flights, visas, holidays and bespoke tour packages."
        path="/contact"
      />
      <Navbar />


      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out and let's plan your next journey together."
        image={heroContact}
        hideBreadcrumb
      />

      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="container relative">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT: info panel (no container) */}
            <div className="lg:col-span-5 relative p-2 md:p-4 flex flex-col">
              <div className="relative">

                <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-3">
                  Contact Information
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-3 text-foreground">
                  Let's Start a <span className="italic text-primary">Conversation</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-8 max-w-sm">
                  Reach out through any of these channels, our team is ready to help craft your perfect journey.
                </p>

                <ul className="space-y-5">
                  {contactItems.map(c => (
                    <li key={c.label} className="group flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 ring-1 ring-border group-hover:bg-primary group-hover:ring-primary transition-all duration-300">
                        <c.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-1">
                          {c.label}
                        </div>
                        <div className="text-sm text-foreground leading-relaxed break-words space-y-0.5">
                          {c.lines.map((ln, i) =>
                            ln.href ? (
                              <a
                                key={i}
                                href={ln.href}
                                target={ln.href.startsWith("http") ? "_blank" : undefined}
                                rel={ln.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="block hover:text-primary transition-colors underline-offset-4 hover:underline"
                              >
                                {ln.text}
                              </a>
                            ) : (
                              <div key={i}>{ln.text}</div>
                            )
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT: form + map stacked */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                noValidate
                className="scroll-mt-24 rounded-3xl bg-card border border-border/60 shadow-xl shadow-primary/5 p-8 md:p-10"
              >
                <div className="mb-6">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-2">
                    Send a Message
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-card-foreground leading-tight">
                    Plan your <span className="italic text-primary">next journey</span>
                  </h3>
                </div>

                {submitted && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="mb-6 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/10 p-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold text-card-foreground">Message sent successfully!</div>
                      <p className="text-muted-foreground mt-0.5">
                        Your enquiry was delivered directly to our inbox. We'll reply shortly.
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={e => update("email", e.target.value)}
                      maxLength={255}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      className={cn(errClass("email"))}
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1.5">{errors.email}</p>}
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={e => update("phone", e.target.value)}
                      maxLength={10}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      className={cn(errClass("phone"))}
                    />
                    {errors.phone && <p className="text-xs text-destructive mt-1.5">{errors.phone}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      placeholder="Your Name"
                      value={form.name}
                      onChange={e => update("name", e.target.value)}
                      maxLength={100}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      className={cn(errClass("name"))}
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1.5">{errors.name}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <Textarea
                      placeholder="Tell us about your travel plans... (optional)"
                      rows={5}
                      value={form.message}
                      onChange={e => update("message", e.target.value)}
                      className={cn(errClass("message"))}
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1.5">{errors.message}</p>}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full mt-6" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Plane className="w-4 h-4 mr-2 animate-[spin_1s_linear_infinite]" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" /> Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden border bg-card shadow-xl shadow-primary/5 relative flex-1 min-h-[260px]">
                <iframe
                  title="Udan Travels Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d72.5!3d23.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzI0LjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
