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

          <div className="bonesLifeLogo">
            <img src="/images/bones-life-logo.png" alt="Bones Life" />
          </div>

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

          <div className="avancesSubtitle">MAPA</div>
          <div className="avancesMapaWrap">
            <img src="/images/mapa1.png" alt="Mapa Bones Life" className="avancesMapa" />
          </div>

          <div className="avancesSubtitle">ANIMACIONES</div>
          <div className="avancesVideos">
            <video controls>
              <source src="/videos/animacion1.mp4" type="video/mp4" />
            </video>
            <video controls>
              <source src="/videos/animacion2.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="bonesLifeInfo">
            <h2>¿Qué es Bones Life?</h2>
            <p>Bones Life es la nueva experiencia social interactiva de Bones Social. Más que una simple función, Bones Life transforma la manera en la que los usuarios se conocen e interactúan dentro de una red social, llevando la comunicación a un entorno virtual vivo y completamente personalizable.</p>
            <p>Dentro de Bones Life cada usuario podrá crear su propio avatar 3D con diferentes estilos, ropa, accesorios, animaciones, expresiones y elementos cosméticos exclusivos inspirados en la estética oscura y gamer de Bones Social. El objetivo es que cada avatar represente verdaderamente la personalidad de quien lo utiliza.</p>
            <p>Una vez personalizado el avatar, el usuario podrá entrar a un mundo online compartido donde cientos de personas podrán interactuar al mismo tiempo dentro de una gran plaza social. Este espacio funcionará como un punto de encuentro virtual donde los usuarios podrán caminar libremente, explorar zonas, acercarse a otros jugadores y comenzar conversaciones de forma mucho más natural y dinámica que en una red social tradicional.</p>
            <p>Bones Life busca recrear la sensación de encontrarse con personas reales dentro de un entorno digital. Los usuarios podrán ver avatares moviéndose en tiempo real, escribir mensajes directamente desde el mundo virtual, interactuar con grupos, descubrir nuevas personas y participar en actividades sociales dentro de la plaza principal.</p>
            <p>Además de la interacción social, Bones Life contará con actividades y minijuegos donde los usuarios podrán jugar entre sí, desbloquear recompensas, conseguir cosméticos especiales y crear una identidad aún más única dentro de la plataforma.</p>
            <p>La experiencia también estará conectada directamente con el perfil del usuario en Bones Social. Los marcos, discos de música, burbujas de chat, accesorios y otros elementos desbloqueados podrán reflejarse dentro del mundo de Bones Life, creando un ecosistema completamente conectado entre la red social y el entorno virtual.</p>
            <p>Bones Life representa la evolución de Bones Social hacia una nueva forma de conexión digital: un espacio donde las personas no solo publican contenido, sino donde realmente pueden vivir, explorar, hablar y crear recuerdos dentro de un mundo social interactivo.</p>
          </div>

        </section>
      )}

      {/* BONES SOCIAL */}
      {tab === "bonessocial" && (
        <section className="avancesSection">

          <div className="bonesLifeLogo">
            <img src="/images/bones-social/bones-logo.png" alt="Bones Social" />
          </div>

          <div className="avancesSubtitle">CAPTURAS DE LA APP</div>
          <div className="bsGrid">
            <div className="bsCard"><img src="/images/bones-social/bs1.png" alt="Tienda" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs2.png" alt="Feed" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs3.png" alt="Chat de voz" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs4.png" alt="Emojis" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs5.png" alt="Comunidades" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs6.png" alt="Comunidades destacadas" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs7.png" alt="Tu tribu" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs8.png" alt="Tienda música" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs9.png" alt="Marcos" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs10.png" alt="Marcos 2" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs11.png" alt="Ajustes" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs12.png" alt="Feed posts" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs13.png" alt="Crear publicación" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs14.png" alt="Burbujas" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs15.png" alt="Hope Core" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs16.png" alt="NCS" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs17.png" alt="Chat" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs18.png" alt="Editar perfil" /></div>
            <div className="bsCard"><img src="/images/bones-social/bs19.png" alt="Perfil" /></div>
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