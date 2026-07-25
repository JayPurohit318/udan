import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Plane, ChevronDown, FileText, Globe, Hotel, Train, Shield, Ship, Car, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import udanLogo from "@/assets/udan-header-logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Packages", to: "/packages" },
  { label: "About", to: "/about" },
];

const serviceLinks = [
  { label: "All Services", to: "/services", icon: Globe, desc: "View complete range" },
  { label: "Passport Services", to: "/services/passport", icon: FileText, desc: "Fresh, renewal & tatkaal" },
  { label: "Visa Services", to: "/services/visa", icon: Globe, desc: "50+ countries covered" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isServicesActive = location.pathname.startsWith("/services");
  const transparent = !scrolled;

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      // Hysteresis: become solid after 80px down, become transparent only below 10px
      setScrolled((prev) => (prev ? y > 10 : y > 80));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div
        className={`bg-primary text-primary-foreground text-sm hidden md:block relative z-50 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${transparent ? 'max-h-0 py-0 opacity-0 pointer-events-none' : 'max-h-12 py-2 opacity-100'}`}
      >
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +91 98250 42489</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> shresthudan@gmail.com</span>
          </div>
          <span className="text-primary-foreground/80">IATA Licensed • Est. 1990</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${transparent ? 'bg-transparent border-transparent shadow-none' : 'bg-card/95 backdrop-blur-md border-b shadow-sm'}`}>
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center" aria-label="Udan Travels home">
            <span
              className={`block h-12 w-28 transition-colors ${transparent ? 'text-white' : 'text-primary'}`}
              style={{
                WebkitMaskImage: `url(${udanLogo})`,
                maskImage: `url(${udanLogo})`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                backgroundColor: 'currentColor',
              }}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.slice(0, 1).map(l => (
              <Link key={l.to} to={l.to}
                className={`relative text-sm font-medium transition-colors ${location.pathname === l.to ? (transparent ? 'text-white' : 'text-primary') : (transparent ? 'text-white/85 hover:text-white' : 'text-muted-foreground hover:text-primary')}`}>
                {l.label}
                {location.pathname === l.to && (
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${transparent ? 'bg-white' : 'bg-primary'}`} />
                )}
              </Link>
            ))}

            {/* Services dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`relative !bg-transparent !rounded-none text-sm font-medium h-auto p-0 hover:!bg-transparent focus:!bg-transparent focus:!outline-none focus-visible:!outline-none focus-visible:!ring-0 focus:!ring-0 data-[state=open]:!bg-transparent ${isServicesActive ? (transparent ? 'text-white hover:!text-white' : 'text-primary hover:!text-primary') : (transparent ? 'text-white/85 hover:!text-white' : 'text-muted-foreground hover:!text-primary')}`}
                  >
                    Services
                    {isServicesActive && (
                      <span className={`absolute -bottom-1 left-0 right-4 h-0.5 rounded-full ${transparent ? 'bg-white' : 'bg-primary'}`} />
                    )}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="left-auto right-0">
                    <div className="grid gap-1 p-3 w-[320px]">
                      <Link
                        to="/services"
                        className="mb-1 px-3 py-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-sm font-semibold text-foreground">All Services</div>
                          <div className="text-xs text-muted-foreground">View complete range</div>
                        </div>
                        <ChevronDown className="w-4 h-4 -rotate-90 text-primary group-hover:translate-x-1 transition-transform" />
                      </Link>
                      {serviceLinks.slice(1).map(s => (
                        <Link
                          key={s.label}
                          to={s.to}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-accent transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-md bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <s.icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-medium text-foreground truncate">{s.label}</div>
                            <div className="text-xs text-muted-foreground truncate">{s.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navLinks.slice(1).map(l => (
              <Link key={l.to} to={l.to}
                className={`relative text-sm font-medium transition-colors ${location.pathname === l.to ? (transparent ? 'text-white' : 'text-primary') : (transparent ? 'text-white/85 hover:text-white' : 'text-muted-foreground hover:text-primary')}`}>
                {l.label}
                {location.pathname === l.to && (
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${transparent ? 'bg-white' : 'bg-primary'}`} />
                )}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className={`transition-colors ${transparent ? 'bg-white text-primary hover:bg-white/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className={`lg:hidden ${transparent ? 'text-white' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t bg-card pb-4">
            <Link to="/" onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium ${location.pathname === '/' ? 'text-primary bg-accent' : 'text-muted-foreground hover:bg-accent'}`}>
              Home
            </Link>

            {/* Mobile services collapsible */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`w-full flex items-center justify-between px-6 py-3 text-sm font-medium ${isServicesActive ? 'text-primary bg-accent' : 'text-muted-foreground hover:bg-accent'}`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="bg-muted/30">
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="block px-10 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
                >
                  All Services
                </Link>
                <Link
                  to="/services/passport"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-10 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
                >
                  <FileText className="w-4 h-4" />
                  Passport Services
                </Link>
                <Link
                  to="/services/visa"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-10 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
                >
                  <Globe className="w-4 h-4" />
                  Visa Services
                </Link>
              </div>
            )}

            {navLinks.slice(1).map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                className={`block px-6 py-3 text-sm font-medium ${location.pathname === l.to ? 'text-primary bg-accent' : 'text-muted-foreground hover:bg-accent'}`}>
                {l.label}
              </Link>
            ))}
            <div className="px-6 pt-2">
              <Button asChild className="w-full" size="sm">
                <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
