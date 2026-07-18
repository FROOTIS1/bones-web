import { useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";

const BS_SCREENSHOTS = [
  { src: "/images/bones-social/bs1.png",  alt: "Tienda" },
  { src: "/images/bones-social/bs2.png",  alt: "Feed" },
  { src: "/images/bones-social/bs3.png",  alt: "Chat de voz" },
  { src: "/images/bones-social/bs4.png",  alt: "Emojis" },
  { src: "/images/bones-social/bs5.png",  alt: "Comunidades" },
  { src: "/images/bones-social/bs6.png",  alt: "Comunidades destacadas" },
  { src: "/images/bones-social/bs7.png",  alt: "Tu tribu" },
  { src: "/images/bones-social/bs8.png",  alt: "Tienda música" },
  { src: "/images/bones-social/bs9.png",  alt: "Marcos" },
  { src: "/images/bones-social/bs10.png", alt: "Marcos 2" },
  { src: "/images/bones-social/bs11.png", alt: "Ajustes" },
  { src: "/images/bones-social/bs12.png", alt: "Feed posts" },
  { src: "/images/bones-social/bs13.png", alt: "Crear publicación" },
  { src: "/images/bones-social/bs14.png", alt: "Burbujas" },
  { src: "/images/bones-social/bs15.png", alt: "Hope Core" },
  { src: "/images/bones-social/bs16.png", alt: "NCS" },
  { src: "/images/bones-social/bs17.png", alt: "Chat" },
  { src: "/images/bones-social/bs18.png", alt: "Editar perfil" },
  { src: "/images/bones-social/bs19.png", alt: "Perfil" },
];

export default function Avances() {
  const [tab, setTab] = useState("boneslife");

  const openDiscord = () => window.open("https://discord.gg/r29J6fwrQ", "_blank");
  const apkUrl = "https://github.com/FROOTIS1/bones-web/releases/download/v1.0.5/bones-social-v1.0.5.apk";

  return (
    <>
      <Navbar />

      <main className="page">
        <div className="pageInner">

          {/* ── HERO ──────────────────────────────────────────── */}
          <div className="avancesPage">
            <div className="avancesHero">
              <span className="tag">🚧 AVANCES</span>
              <h1>
                Progreso del<br />
                <span className="gradient-text">proyecto</span>
              </h1>
              <p>
                Mira cómo está evolucionando Bones Social y Bones Life.
                Capturas reales y videos del desarrollo.
              </p>
            </div>

            {/* ── TABS ──────────────────────────────────────────── */}
            <div className="avancesTabs">
              <button
                className={tab === "boneslife"    ? "tabActive" : "tabInactive"}
                onClick={() => setTab("boneslife")}
              >
                🌐 BONES LIFE
              </button>
              <button
                className={tab === "bonessocial" ? "tabActive" : "tabInactive"}
                onClick={() => setTab("bonessocial")}
              >
                💀 BONES SOCIAL
              </button>
            </div>

            {/* ══════════════════════════════════════════════════ */}
            {tab === "boneslife" && (
              <section className="avancesSection">

                {/* Logo */}
                <div className="bonesLifeLogo">
                  <img src="/images/bones-life-logo.png" alt="Bones Life" />
                </div>

                {/* Personajes */}
                <div className="avancesSubtitle">PERSONAJES</div>
                <div className="avancesGrid">
                  {[1,2,3,4,5].map((n) => (
                    <div className="avancesCard" key={n}>
                      <img src={`/images/personaje${n}.png`} alt={`Personaje ${n}`} />
                    </div>
                  ))}
                </div>

                {/* Mapa */}
                <div className="avancesSubtitle">MAPA</div>
                <div className="avancesMapaWrap">
                  <img src="/images/mapa1.png" alt="Mapa Bones Life" className="avancesMapa" />
                </div>

                {/* Animaciones */}
                <div className="avancesSubtitle">ANIMACIONES</div>
                <div className="avancesVideos">
                  <video controls>
                    <source src="/videos/animacion1.mp4" type="video/mp4" />
                  </video>
                  <video controls>
                    <source src="/videos/animacion2.mp4" type="video/mp4" />
                  </video>
                </div>

                {/* Info */}
                <div className="bonesLifeInfo">
                  <div className="bonesLifeInfoLeft">
                    <div className="highlightBadge" style={{ marginBottom: 24 }}>
                      <span>🌐</span> EN DESARROLLO
                    </div>
                    <h2>
                      ¿Qué es<br />
                      <span className="gradient-text">Bones Life?</span>
                    </h2>
                  </div>
                  <div className="bonesLifeInfoRight">
                    {[
                      `Bones Life es la nueva experiencia social interactiva de Bones Social.
                       Más que una simple función, Bones Life transforma la manera en la que
                       los usuarios se conocen e interactúan, llevando la comunicación a un
                       entorno virtual vivo y completamente personalizable.`,
                      `Dentro de Bones Life cada usuario podrá crear su propio avatar 3D con
                       diferentes estilos, ropa, accesorios, animaciones y expresiones. Una vez
                       personalizado, podrá entrar a un mundo online compartido donde cientos de
                       personas podrán interactuar al mismo tiempo dentro de una gran plaza social.`,
                      `Además de la interacción social, Bones Life contará con minijuegos donde los
                       usuarios podrán jugar entre sí, desbloquear recompensas y conseguir cosméticos
                       especiales. Todo conectado directamente con tu perfil de Bones Social — marcos,
                       discos, burbujas y más reflejados dentro del mundo virtual.`,
                    ].map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>
                </div>

              </section>
            )}

            {/* ══════════════════════════════════════════════════ */}
            {tab === "bonessocial" && (
              <section className="avancesSection">

                <div className="bonesLifeLogo">
                  <img src="/images/bones-social/bones-logo.png" alt="Bones Social" />
                </div>

                <div className="avancesSubtitle">CAPTURAS DE LA APP</div>
                <div className="bsGrid">
                  {BS_SCREENSHOTS.map((s) => (
                    <div className="bsCard" key={s.src}>
                      <img src={s.src} alt={s.alt} />
                    </div>
                  ))}
                </div>

              </section>
            )}

          </div>
        </div>

        {/* ── FOOTER ────────────────────────────────────────────── */}
        <footer className="footer">
          <div className="footerLeft">
            <div className="footerLogo">
              <img src="/images/bones-social/bones-logo.png" alt="Bones" style={{ width: 22, height: 22, objectFit: "contain" }} />
            </div>
            <span className="footerBrand">BONES SOCIAL</span>
          </div>
          <div className="footerCenter">
            <a href="/">INICIO</a>
            <a href="/sobre-nosotros">SOBRE NOSOTROS</a>
            <a href="/avances">AVANCES</a>
            <a onClick={openDiscord} style={{ cursor: "pointer" }}>DISCORD</a>
            <a href={apkUrl} download>DESCARGAR APK</a>
          </div>
          <div className="footerRight">© 2026 Bones Social · Beta v1.0.5</div>
        </footer>

      </main>
    </>
  );
}
