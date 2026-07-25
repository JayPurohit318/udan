import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, CreditCard, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import udanLogo from "@/assets/udan-footer-logo.svg";

const Footer = () => (
  <footer className="bg-foreground text-background/80 py-20 md:py-24">
    <div className="container">
      {/* Top row: Brand left, menus right */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8 mb-14">
        {/* Brand, left side */}
        <div className="lg:max-w-xs">
          <img src={udanLogo} alt="Udan Travels" className="h-24 md:h-28 w-auto mb-4" />
          <p className="text-sm leading-relaxed mb-4">"We are the people with your interest at heart"</p>
          <a
            href="https://www.facebook.com/udantravels"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/10 hover:bg-secondary hover:text-secondary-foreground ring-1 ring-background/15 text-xs font-medium transition-all"
          >
            <Facebook className="w-3.5 h-3.5" />
            Follow us on Facebook
          </a>
        </div>

        {/* Navigation menus, right side, aligned right */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-3 font-sans text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-secondary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-secondary transition-colors">Packages</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-3 font-sans text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-secondary transition-colors">All Services</Link>
              </li>
              <li>
                <Link to="/services/passport" className="hover:text-secondary transition-colors">Passport Services</Link>
              </li>
              <li>
                <Link to="/services/visa" className="hover:text-secondary transition-colors">Visa Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-3 font-sans text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Ahmedabad - 380058</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 98250 42489</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>shresthudan@gmail.com</span>
              </div>
            </div>
            <div className="mt-4">
              <Button
                size="sm"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <CreditCard className="w-4 h-4 mr-1.5" />
                Pay
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: centered copyright */}
      <div className="border-t border-background/10 pt-8 text-center">
        <p className="text-sm text-background/60">
          © {new Date().getFullYear()} Shresth Udan Travels Ltd. All rights reserved. | IATA License: 14 3 3585 6
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
