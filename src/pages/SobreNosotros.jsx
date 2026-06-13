import { Download, Gamepad2, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import "../App.css";

const BLOCKS = [
  {
    icon: "💀",
    title: "¿Qué es Bones Social?",
    full: false,
    content: [
      `Bones Social es una nueva generación de red social diseñada para personas
       que buscan algo más que seguidores y likes. Creamos una experiencia enfocada
       en identidad, comunidad, personalización y conexión real dentro de un entorno
       oscuro, gamer y totalmente diferente a las plataformas tradicionales.`,
    ],
  },
  {
    icon: "🎨",
    title: "Personalización total",
    full: false,
    content: [
      `En Bones Social puedes crear tu propio estilo mediante avatares personalizados,
       marcos exclusivos, burbujas de chat, discos de música para tu perfil y una enorme
       variedad de elementos visuales que hacen que cada usuario tenga una identidad única.`,
    ],
  },
  {
    icon: "⚡",
    title: "Funciones únicas",
    full: true,
    content: [
      `La aplicación ya cuenta con sistema de chats privados, comunidades temáticas,
       perfiles avanzados, música en perfiles, sistema de comentarios, marcos animados,
       chat de voz en comunidades y personalización visual completa para que cada
       conversación y cada perfil se sientan diferentes.`,
      `Uno de los sistemas más importantes es <strong>Bones Life</strong>, una nueva
       experiencia social donde podrás crear y personalizar tu avatar en 3D para entrar
       a un mundo online compartido con otros usuarios. Dentro de Bones Life podrás
       caminar libremente por una plaza social, conocer personas, interactuar con otros
       avatares, escribir mensajes en tiempo real y vivir una forma totalmente nueva de
       socializar.`,
    ],
  },
  {
    icon: "💘",
    title: "Modo Match & Botella Perdida",
    full: false,
    content: [
      `Bones Social incluye el <strong>Modo Match</strong>, diseñado para conectar
       usuarios con intereses similares, y <strong>Botella Perdida</strong>, una experiencia
       inspirada en los mensajes anónimos donde podrás enviar mensajes al azar y descubrir
       nuevas personas de forma espontánea y divertida.`,
    ],
  },
  {
    icon: "🌐",
    title: "Nuestra visión",
    full: false,
    content: [
      `Bones Social no busca ser una copia más de las redes actuales. Queremos crear
       un nuevo espacio digital donde la creatividad, la identidad visual, la música,
       los videojuegos y la interacción social evolucionen en una sola experiencia única.`,
    ],
  },
];

export default function SobreNosotros() {
  const openDiscord = () => window.open("https://discord.gg/r29J6fwrQ", "_blank");
  const apkUrl = "https://expo.dev/artifacts/eas/xHfCkEqQIhZzJkmF-eKMmsRDsygih8Zdu7B2zbFEe_o.apk";

  return (
    <>
      <Navbar />

      <main className="page">
        <div className="pageInner">

          {/* ── HERO ──────────────────────────────────────────── */}
          <div className="aboutPage">
            <div className="aboutHero">
              <span className="tag">
                <Skull size={13} />
                SOBRE NOSOTROS
              </span>

              <h1>
                Más que una<br />
                <span className="gradient-text">red social</span>
              </h1>

              <p>
                Somos un equipo construyendo la red social que siempre quisimos
                tener — oscura, gamer, personalizable y diferente a todo.
              </p>
            </div>

            {/* ── CONTENT GRID ──────────────────────────────────── */}
            <div className="aboutGrid">
              {BLOCKS.map((block, i) => (
                <div
                  key={i}
                  className={`aboutBlock ${block.full ? "aboutBlockFull" : ""}`}
                >
                  <div className="aboutBlockIcon">{block.icon}</div>
                  <h3>{block.title}</h3>
                  {block.content.map((text, j) => (
                    <p key={j} dangerouslySetInnerHTML={{ __html: text }} />
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="ctaSection pageInner" id="contacto">
          <div className="ctaInner">
            <div className="ctaGlow" />
            <span className="tag">
              <Sparkles size={13} />
              ÚNETE AHORA
            </span>
            <h2>
              Sé parte de<br />
              <span className="gradient-text">algo diferente</span>
            </h2>
            <p>
              Descarga la beta gratuita para Android y únete a nuestra comunidad
              en Discord donde puedes seguir el desarrollo en tiempo real.
            </p>
            <div className="ctaBtns">
              <button className="ctaBtnPrimary" onClick={openDiscord}>
                <Gamepad2 size={20} />
                ÚNETE AL DISCORD
              </button>
              <a href={apkUrl} download className="ctaBtnSecondary">
                <Download size={20} />
                DESCARGAR APK
              </a>
            </div>
          </div>
        </section>

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
          </div>
          <div className="footerRight">© 2026 Bones Social · Beta v1.0.4</div>
        </footer>

      </main>
    </>
  );
}
