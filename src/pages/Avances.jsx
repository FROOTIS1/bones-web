import { Gamepad2, Menu, Skull, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./Avances.css";

export default function Avances() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState("boneslife");

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
          <a onClick={() => navigate("/")}>INICIO</a>
          <a onClick={() => navigate("/")}>CARACTERÍSTICAS</a>
          <a onClick={() => navigate("/sobre-nosotros")}>SOBRE NOSOTROS</a>
          <a style={{ color: "white" }}>AVANCES</a>
          <a onClick={() => navigate("/")}>CONTACTO</a>
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
          <a onClick={() => { setMenuOpen(false); navigate("/"); }}>INICIO</a>
          <a onClick={() => { setMenuOpen(false); navigate("/"); }}>CARACTERÍSTICAS</a>
          <a onClick={() => { setMenuOpen(false); navigate("/sobre-nosotros"); }}>SOBRE NOSOTROS</a>
          <a style={{ color: "white" }}>AVANCES</a>
          <a onClick={() => { setMenuOpen(false); navigate("/"); }}>CONTACTO</a>
          <button className="primary" onClick={openDiscord}>
            <Gamepad2 size={18} />
            ÚNETE AL DISCORD
          </button>
        </div>
      )}

      {/* TABS */}
      <div className="avancesTabs">
        <button
          className={tab === "boneslife" ? "tabActive" : "tabInactive"}
          onClick={() => setTab("boneslife")}
        >
          BONES LIFE
        </button>
        <button
          className={tab === "bonessocial" ? "tabActive" : "tabInactive"}
          onClick={() => setTab("bonessocial")}
        >
          BONES SOCIAL
        </button>
      </div>

      {/* BONES LIFE */}
      {tab === "boneslife" && (
        <section className="avancesSection">

          <div className="avancesHeader">
            <div className="aboutTag">AVANCES</div>
            <h2>Bones Life</h2>
            <p>
              Bones Life es el mundo social 3D dentro de Bones Social. Crea y personaliza
              tu avatar, entra a una plaza compartida con otros usuarios, camina libremente,
              interactúa en tiempo real, explora zonas, participa en actividades y vive una
              forma completamente nueva de socializar.
            </p>
          </div>

          {/* PERSONAJES */}
          <div className="avancesSubtitle">PERSONAJES</div>
          <div className="avancesGrid">
            <div className="avancesCard">
              <img src="/images/personaje1.png" alt="Personaje 1" />
            </div>
            <div className="avancesCard">
              <img src="/images/personaje2.png" alt="Personaje 2" />
            </div>
            <div className="avancesCard">
              <img src="/images/personaje3.png" alt="Personaje 3" />
            </div>
            <div className="avancesCard">
              <img src="/images/personaje4.png" alt="Personaje 4" />
            </div>
            <div className="avancesCard">
              <img src="/images/personaje5.png" alt="Personaje 5" />
            </div>
          </div>

          {/* MAPA */}
          <div className="avancesSubtitle">MAPA</div>
          <div className="avancesMapaWrap">
            <img src="/images/mapa1.png" alt="Mapa Bones Life" className="avancesMapa" />
          </div>

          {/* VIDEOS */}
          <div className="avancesSubtitle">ANIMACIONES</div>
          <div className="avancesVideos">
            <video controls>
              <source src="/videos/animacion1.mp4" type="video/mp4" />
            </video>
            <video controls>
              <source src="/videos/animacion2.mp4" type="video/mp4" />
            </video>
          </div>

        </section>
      )}

      {/* BONES SOCIAL */}
      {tab === "bonessocial" && (
        <section className="avancesSection">

          <div className="avancesHeader">
            <div className="aboutTag">AVANCES</div>
            <h2>Bones Social</h2>
            <p>
              Aquí irán próximamente capturas e información sobre las funciones
              de Bones Social: chats, comunidades, perfiles, marcos, música y más.
            </p>
          </div>

          <div className="avancesProximamente">
            <Skull size={40} />
            <span>PRÓXIMAMENTE</span>
          </div>

        </section>
      )}

      {/* FOOTER */}
      <footer>
        <Skull size={14} />
        PRÓXIMAMENTE EN ANDROID · APK DISPONIBLE PRÓXIMAMENTE
      </footer>

    </main>
  );
}