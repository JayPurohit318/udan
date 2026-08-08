import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import ThankYou from "./pages/ThankYou.tsx";
import Packages from "./pages/Packages.tsx";
import Services from "./pages/Services.tsx";
import Passport from "./pages/Passport.tsx";
import Visa from "./pages/Visa.tsx";
import Destinations from "./pages/Destinations.tsx";
import Blog from "./pages/Blog.tsx";
import Policies from "./pages/Policies.tsx";
import NotFound from "./pages/NotFound.tsx";

import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

const queryClient = new QueryClient();

function RouterWrapper() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    try {
      let isReload = false;
      const navEntries = (performance && (performance as any).getEntriesByType)
        ? (performance as any).getEntriesByType("navigation")
        : null;
      const navType = navEntries && navEntries.length ? navEntries[0].type : undefined;
      if (navType === "reload") isReload = true;
      // fallback for older API
      else if ((performance as any).navigation && (performance as any).navigation.type === 1) isReload = true;

      if (isReload && location.pathname !== "/") {
        navigate("/", { replace: true });
      }
    } catch (e) {
      // ignore errors
    }
    // run only on first mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ScrollToTop />
      <ScrollToTopButton />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/passport" element={<Passport />} />
        <Route path="/services/visa" element={<Visa />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function AppContent() {
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <BrowserRouter>
      <RouterWrapper />
    </BrowserRouter>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;