import {
    Bell,
    Gamepad2,
    Menu,
    MessageCircle,
    Music2,
    Settings,
    Skull,
    Square,
    Users,
    X,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const openDiscord = () => {
    window.open("https://discord.gg/r29J6fwrQ", "_blank");
  };

  return (
    <main className="page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <div className="skull">
            <Skull size={24} />
          </div>
          <span>BONES SOCIAL</span>
        </div>

        <div className="navLinks">
          <a onClick={() => scrollTo("inicio")}>INICIO</a>
          <a onClick={() => scrollTo("caracteristicas")}>CARACTERÍSTICAS</a>
          <a onClick={() => navigate("/sobre-nosotros")}>SOBRE NOSOTROS</a>
          <a onClick={() => navigate("/avances")}>AVANCES</a>
          <a onClick={() => scrollTo("contacto")}>CONTACTO</a>
        </div>

        <button className="discordTop" onClick={openDiscord}>
          <Gamepad2 size={18} />
          ÚNETE AL DISCORD
        </button>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MENÚ MÓVIL */}
      {menuOpen && (
        <div className="mobileMenu">
          <a onClick={() => scrollTo("inicio")}>INICIO</a>
          <a onClick={() => scrollTo("caracteristicas")}>CARACTERÍSTICAS</a>
          <a onClick={() => { setMenuOpen(false); navigate("/sobre-nosotros"); }}>SOBRE NOSOTROS</a>
          <a onClick={() => { setMenuOpen(false); navigate("/avances"); }}>AVANCES</a>
          <a onClick={() => scrollTo("contacto")}>CONTACTO</a>
          <button className="primary" onClick={openDiscord}>
            <Gamepad2 size={18} />
            ÚNETE AL DISCORD
          </button>
        </div>
      )}

      {/* HERO */}
      <section className="hero" id="inicio">

        {/* LEFT */}
        <div className="left">

          <div className="miniTitle">
            <Skull size={13} />
            BONES SOCIAL //////// ✦
          </div>

          <h1>
            LA NUEVA <br />
            RED SOCIAL
          </h1>

          <p>
            Comunidades, chats personalizados, avatares,
            música, marcos y una estética gamer totalmente
            diferente.
          </p>

          <div className="buttons">
            <button className="primary" onClick={openDiscord}>
              <Gamepad2 size={18} />
              ÚNETE AL DISCORD
            </button>

            <a
              href="https://github.com/FROOTIS1/bones-web/releases/download/v1.0.0/app-release.apk"
              download
              className="secondary"
              style={{ textDecoration: "none" }}
            >
              DESCARGAR APK →
            </a>
          </div>

          <div className="users">
            <p>Únete a miles de usuarios en nuestra comunidad</p>
          </div>

        </div>

        {/* RIGHT */}
        <div className="right">
          <div className="appCard">

            <img
              src="/images/mostazon-card.png"
              alt="Mostazón Bones Social"
              className="mostazonCardImage"
            />

            <div className="imageProfileBar">
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div className="profileIcon">
                  <Skull size={20} />
                </div>
                <div>
                  <strong>Mostazón</strong>
                  <small>● En línea</small>
                </div>
              </div>

              <div className="profileActions">
                <MessageCircle size={20} />
                <Bell size={20} />
                <Settings size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="caracteristicas">

        <div>
          <MessageCircle className="featureIcon" />
          <h3>CHATS</h3>
          <p>Mensajes privados y grupales totalmente personalizables.</p>
        </div>

        <div>
          <Users className="featureIcon" />
          <h3>COMUNIDADES</h3>
          <p>Crea, únete y participa en comunidades con tus temas favoritos.</p>
        </div>

        <div>
          <Skull className="featureIcon" />
          <h3>AVATARES</h3>
          <p>Personaliza tu avatar al estilo Bones con miles de opciones.</p>
        </div>

        <div>
          <Music2 className="featureIcon" />
          <h3>MÚSICA</h3>
          <p>Añade tu música favorita a tu perfil y destaca tu estilo.</p>
        </div>

        <div>
          <Square className="featureIcon" />
          <h3>MARCOS</h3>
          <p>Consigue marcos únicos y muestra tu perfil como quieras.</p>
        </div>

      </section>

      {/* FOOTER */}
      <footer id="contacto">
        <Skull size={14} />
        DISPONIBLE EN ANDROID ·{" "}
        <a
          href="https://github.com/FROOTIS1/bones-web/releases/download/v1.0.0/app-release.apk"
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          DESCARGAR APK BETA
        </a>
      </footer>

    </main>
  );
}