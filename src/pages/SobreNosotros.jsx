import { Gamepad2, Info, Skull } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function SobreNosotros() {
  const navigate = useNavigate();

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
      </nav>

      {/* CONTENIDO */}
      <section className="about">
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
      <footer>
        <Skull size={14} />
        PRÓXIMAMENTE EN ANDROID · APK DISPONIBLE PRÓXIMAMENTE
      </footer>

    </main>
  );
}