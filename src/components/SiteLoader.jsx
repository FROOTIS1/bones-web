import { useEffect, useState } from "react";

/**
 * Animación de carga al entrar a la web — logo de Bones con glow,
 * anillos y barra de progreso; fade-out hacia la página.
 */
const DURATION = 2200;
const FADE = 600;

export default function SiteLoader() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setFading(true), DURATION);
    const t2 = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
    }, DURATION + FADE);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`siteLoader ${fading ? "siteLoaderFade" : ""}`}>
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="siteLoaderParticle"
          style={{
            left: `${(i * 83) % 100}%`,
            top: `${(i * 41) % 100}%`,
            animationDelay: `${i * 0.2}s`,
            background: i % 2 === 0 ? "#7C3AED" : "#EC4899",
          }}
        />
      ))}

      <div className="siteLoaderCenter">
        <div className="siteLoaderRing" />
        <div className="siteLoaderRing" style={{ animationDelay: "0.5s" }} />
        <div className="siteLoaderGlow" />
        <img
          src="/images/bones-social/bones-logo.png"
          alt="Bones Social"
          className="siteLoaderLogo"
          draggable={false}
        />
      </div>

      <div className="siteLoaderSub">LA RED SOCIAL QUE ESPERABAS</div>

      <div className="siteLoaderBarTrack">
        <div className="siteLoaderBarFill" />
      </div>
    </div>
  );
}
