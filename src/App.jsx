import "./App.css";

import {
  Bell,
  Gamepad2,
  MessageCircle,
  Music2,
  Settings,
  Skull,
  Square,
  User,
  Users,
} from "lucide-react";

export default function App() {
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
          <a>INICIO</a>
          <a>CARACTERÍSTICAS</a>
          <a>COMUNIDAD</a>
          <a>BETA</a>
          <a>CONTACTO</a>
        </div>

        <button className="discordTop">
          <Gamepad2 size={18} />
          ÚNETE AL DISCORD
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        {/* LEFT */}
        <div className="left">
          <div className="miniTitle">
            <Skull size={13} />
            BONES SOCIAL //////// ✦
          </div>

          <h1>
            LA NUEVA <br />
            RED SOCIAL <br />
            <span>OSCURA</span>
          </h1>

          <p>
            Comunidades, chats personalizados, avatares, música,
            marcos y una estética gamer totalmente diferente.
          </p>

          <div className="buttons">
            <button className="primary">
              <Gamepad2 size={18} />
              ÚNETE AL DISCORD
            </button>

            <button className="secondary">
              VER BETA →
            </button>
          </div>

          <div className="users">
            <div className="avatar">
              <Skull size={15} />
            </div>

            <div className="avatar">
              <User size={15} />
            </div>

            <div className="avatar">
              <Skull size={15} />
            </div>

            <span>+2K</span>

            <p>
              Únete a miles de usuarios en nuestra comunidad
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right">
          <div className="appCard">
            <div className="glowCircle"></div>

            <div className="featureBox box1">
              <User size={24} />
              <span>AVATARES</span>
            </div>

            <div className="featureBox box2">
              <Music2 size={24} />
              <span>MÚSICA</span>
            </div>

            <div className="featureBox box3">
              <Users size={24} />
              <span>COMUNIDADES</span>
            </div>

            <div className="featureBox box4">
              <Square size={24} />
              <span>MARCOS</span>
            </div>

            <div className="character">
              <Skull size={180} strokeWidth={1.5} />
            </div>

            <div className="profileBar">
              <div className="profileIcon">
                <Skull size={18} />
              </div>

              <div>
                <strong>Mostazón</strong>
                <small>● En línea</small>
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
      <section className="features">
        <div>
          <MessageCircle className="featureIcon" />

          <h3>CHATS</h3>

          <p>
            Mensajes privados y grupales totalmente personalizables.
          </p>
        </div>

        <div>
          <Users className="featureIcon" />

          <h3>COMUNIDADES</h3>

          <p>
            Crea, únete y participa en comunidades con tus temas favoritos.
          </p>
        </div>

        <div>
          <Skull className="featureIcon" />

          <h3>AVATARES</h3>

          <p>
            Personaliza tu avatar al estilo Bones con miles de opciones.
          </p>
        </div>

        <div>
          <Music2 className="featureIcon" />

          <h3>MÚSICA</h3>

          <p>
            Añade tu música favorita a tu perfil y destaca tu estilo.
          </p>
        </div>

        <div>
          <Square className="featureIcon" />

          <h3>MARCOS</h3>

          <p>
            Consigue marcos únicos y muestra tu perfil como quieras.
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