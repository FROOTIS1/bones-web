import { Gamepad2, Menu, Skull, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function SobreNosotros() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a style={{ color: "white" }}>SOBRE NOSOTROS</a>
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
          <a style={{ color: "white" }}>SOBRE NOSOTROS</a>
          <a onClick={() => { setMenuOpen(false); navigate("/"); }}>CONTACTO</a>
          <button className="primary" onClick={openDiscord}>
            <Gamepad2 size={18} />
            ÚNETE AL DISCORD
          </button>
        </div>
      )}

      {/* CONTENIDO */}
      <section className="about">
        <div className="aboutInner">

          <div className="aboutTag">SOBRE NOSOTROS</div>

          <h2>¿Qué es Bones Social?</h2>

          <p>
            Bones Social es una nueva generación de red social diseñada para personas que buscan
            algo más que seguidores y likes. Creamos una experiencia enfocada en identidad,
            comunidad, personalización y conexión real dentro de un entorno oscuro, gamer y
            totalmente diferente a las plataformas tradicionales.
          </p>

          <p>
            En Bones Social puedes crear tu propio estilo mediante avatares personalizados, marcos
            exclusivos, burbujas de chat, discos de música para tu perfil y una enorme variedad de
            elementos visuales que hacen que cada usuario tenga una identidad única dentro de la
            plataforma.
          </p>

          <p>
            La aplicación ya cuenta con sistema de chats privados, comunidades temáticas, perfiles
            avanzados, música en perfiles, sistema de comentarios, marcos animados, chat de voz en
            comunidades y personalización visual completa para que cada conversación y cada perfil
            se sientan diferentes.
          </p>

          <p>
            Uno de los sistemas más importantes es <strong>Bones Life</strong>, una nueva
            experiencia social donde podrás crear y personalizar tu avatar en 3D para entrar a un
            mundo online compartido con otros usuarios. Dentro de Bones Life podrás caminar
            libremente por una plaza social, conocer personas, interactuar con otros avatares,
            escribir mensajes en tiempo real, explorar zonas, participar en actividades y vivir una
            forma totalmente nueva de socializar dentro de una red social.
          </p>

          <p>
            Bones Social también incluye funciones sociales únicas como el <strong>Modo Match</strong>,
            diseñado para conectar usuarios con intereses similares, y <strong>Botella Perdida</strong>,
            una experiencia inspirada en los mensajes anónimos y encuentros aleatorios, donde podrás
            enviar mensajes al azar y descubrir nuevas personas de una manera más espontánea y divertida.
          </p>

          <p>
            Nuestra visión es construir una plataforma donde cada usuario pueda sentirse parte de
            algo distinto. Bones Social no busca ser una copia más de las redes actuales; busca
            crear un nuevo espacio digital donde la creatividad, la identidad visual, la música,
            los videojuegos y la interacción social evolucionen en una sola experiencia.
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <Skull size={14} />
        PRÓXIMAMENTE EN ANDROID · APK DISPONIBLE PRÓXIMAMENTE
      </footer>

    </main>
  );
}