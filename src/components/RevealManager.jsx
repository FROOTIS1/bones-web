import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Anima la entrada de secciones y tarjetas al hacer scroll (fade + slide up).
 * Observa las clases principales del sitio en cada cambio de ruta.
 */
const SELECTORS = [
  ".featureCard", ".aboutBlock", ".statCard", ".sectionHead",
  ".shop-card", ".shop-section-header", ".faq-item",
  ".blogCard", ".installStep", ".avanceCard", ".legalSection",
  ".ctaInner", ".heroLeft", ".heroRight",
].join(", ");

export default function RevealManager() {
  const location = useLocation();

  useEffect(() => {
    // Pequeño delay para que la ruta termine de renderizar
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(SELECTORS);
      if (!els.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      els.forEach((el, i) => {
        if (el.classList.contains("reveal-in")) return;
        el.classList.add("reveal-init");
        el.style.transitionDelay = `${Math.min((i % 4) * 70, 210)}ms`;
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}
