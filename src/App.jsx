import "./App.css";

import {
  Bell,
  Gamepad2,
  Info,
  MessageCircle,
  Music2,
  Settings,
  Skull,
  Square,
  Users,
} from "lucide-react";

export default function App() {
  const scrollTo = (id) => {
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
          <a onClick={() => scrollTo("sobre-nosotros")}>SOBRE NOSOTROS</a>
          <a onClick={() => scrollTo("contacto")}>CONTACTO</a>
        </div>

        <button className="discordTop" onClick={openDiscord}>
          <Gamepad2 size={18} />
          ÚNETE AL DISCORD
        </button>
      </nav>

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

            <button className="secondary" disabled style={{ opacity: 0.4, cursor: "not-allowed" }}>
              VER BETA →
            </button>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
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

      {/* SOBRE NOSOTROS */}
      <section className="about" id="sobre-nosotros">

        <div className="aboutInner">

          <div className="aboutIcon">
            <Info size={28} />
          </div>

          <div className="aboutTag">SOBRE NOSOTROS</div>

          <h2>¿Qué es Bones Social?</h2>

          <p>
            Bones Social es una plataforma social diseñada para conectar personas
            con intereses en común dentro de un entorno digital único y diferente.
            Nuestra misión es ofrecer un espacio donde la identidad, la creatividad
            y la comunidad sean el centro de cada experiencia.
          </p>

          <p>
            A diferencia de las redes sociales tradicionales, Bones Social nació
            con una visión clara: crear un ecosistema donde cada usuario pueda
            expresarse libremente a través de avatares personalizados, comunidades
            temáticas, música y una estética visual que rompe con lo convencional.
          </p>

          <p>
            Estamos construyendo algo nuevo. Una red social hecha por y para
            quienes buscan más que likes — buscan pertenencia, identidad y conexión real.
          </p>

          <div className="aboutStats">
            <div>
              <strong>+2K</strong>
              <span>Usuarios en comunidad</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Personalizable</span>
            </div>
            <div>
              <strong>BETA</strong>
              <span>Próximamente disponible</span>
            </div>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer id="contacto">
        <Skull size={14} />
        PRÓXIMAMENTE EN ANDROID · APK DISPONIBLE PRÓXIMAMENTE
      </footer>

    </main>
  );
}