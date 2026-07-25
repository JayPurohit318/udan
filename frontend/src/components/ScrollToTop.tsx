import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Temporarily disable smooth scrolling so the jump is instant
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    html.scrollTop = 0;

    html.style.scrollBehavior = prevBehavior;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
