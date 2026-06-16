import {
  Bell,
  Download,
  Gamepad2,
  MessageCircle,
  Settings,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "../components/Navbar";
import "../App.css";

/* ── MARQUEE ITEMS ─────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  { label: "CHATS PRIVADOS",     icon: "💬" },
  { label: "COMUNIDADES",        icon: "👥" },
  { label: "MARCOS EXCLUSIVOS",  icon: "🖼️" },
  { label: "MÚSICA EN PERFIL",   icon: "🎵" },
  { label: "MODO MATCH",         icon: "💘" },
  { label: "BONES LIFE",         icon: "🌐" },
  { label: "BOTELLA PERDIDA",    icon: "🍾" },
  { label: "AVATARES ÚNICOS",    icon: "💀" },
  { label: "RECOMPENSAS",        icon: "🎁" },
  { label: "LETREROS",           icon: "🏷️" },
];

/* ── FEATURES ─────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: "💬",
    color: "rgba(96,165,250,0.12)",
    border: "rgba(96,165,250,0.2)",
    title: "CHATS",
    desc: "Mensajes privados y grupales con burbujas de chat personalizadas, colores, estilos y más.",
    tag: null,
    tagColor: null,
  },
  {
    icon: "👥",
    color: "rgba(155,92,246,0.12)",
    border: "rgba(155,92,246,0.2)",
    title: "COMUNIDADES",
    desc: "Crea o únete a comunidades temáticas con chat de voz integrado, posts y mucho más.",
    tag: null,
    tagColor: null,
  },
  {
    icon: "🖼️",
    color: "rgba(34,211,238,0.1)",
    border: "rgba(34,211,238,0.18)",
    title: "MARCOS",
    desc: "Consigue marcos exclusivos para tu perfil a través de la tienda, logros o recompensas diarias.",
    tag: null,
    tagColor: null,
  },
  {
    icon: "🎵",
    color: "rgba(236,72,153,0.1)",
    border: "rgba(236,72,153,0.2)",
    title: "MÚSICA",
    desc: "Añade discos de música a tu perfil y comparte tu estilo con el resto de la comunidad.",
    tag: null,
    tagColor: null,
  },
  {
    icon: "💘",
    color: "rgba(251,113,133,0.1)",
    border: "rgba(251,113,133,0.2)",
    title: "MODO MATCH",
    desc: "Conecta con personas afines basándote en gustos e intereses. Desliza, conecta y habla.",
    tag: null,
    tagColor: null,
  },
  {
    icon: "🌐",
    color: "rgba(251,191,36,0.1)",
    border: "rgba(251,191,36,0.2)",
    title: "BONES LIFE",
    desc: "Explora un mundo social virtual 3D, personaliza tu avatar y conoce gente en tiempo real.",
    tag: "EN DESARROLLO",
    tagColor: { bg: "rgba(251,191,36,0.12)", border: "rgba(251,191,36,0.25)", text: "#FBBF24" },
  },
];

/* ── STATS ────────────────────────────────────────────────── */
const STATS = [
  { num: "v1.0.5",    label: "Versión actual",    sub: "Estable para Android" },
  { num: "Beta",      label: "Estado actual",      sub: "Acceso público activo" },
  { num: "APK",       label: "Disponible ya",      sub: "Sin necesidad de Play Store" },
  { num: "Discord",   label: "Comunidad abierta",  sub: "Únete gratis ahora" },
];

/* ═══════════════════════════════════════════════════════════ */
export default function Home() {
  const openDiscord = () => window.open("https://discord.gg/r29J6fwrQ", "_blank");
  const apkUrl = "https://expo.dev/artifacts/eas/mb0pD7gs4-TRpK8zJ4GJhpn7SdL80Vb0BJbXLg5-p_Q.apk";

  // Duplicate marquee for seamless loop
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <>
      <Navbar />

      <main className="page">

        {/* ══ HERO ═══════════════════════════════════════════════ */}
        <section className="pageInner">
          <div className="hero" id="inicio">

            {/* LEFT */}
            <div className="heroLeft">
              <div className="heroTag">
                <span className="tag">
                  <span style={{ fontSize: 14 }}>🔥</span>
                  NUEVA RED SOCIAL · EDICIÓN BETA
                </span>
              </div>

              <h1 className="heroH1">
                LA RED SOCIAL<br />
                <span className="gradient-text">QUE ESPERABAS</span>
              </h1>

              <p className="heroDesc">
                Comunidades, chats personalizados, avatares únicos, música,
                marcos y una estética gamer completamente diferente a todo
                lo que conoces.
              </p>

              <div className="heroBtns">
                <a href={apkUrl} download className="heroBtnPrimary">
                  <Download size={18} />
                  DESCARGAR APK
                </a>
                <button className="heroBtnSecondary" onClick={openDiscord}>
                  <Gamepad2 size={18} />
                  ÚNETE AL DISCORD
                </button>
              </div>

              <div className="heroPlatform">
                <div className="heroPlatformDot" />
                <span>BETA ACTIVA · ANDROID · GRATIS</span>
              </div>
            </div>

            {/* RIGHT — Mockup */}
            <div className="heroRight">
              <div className="mockupWrap">
                <div className="mockupGlow" />
                <div className="mockupCard" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src="/images/bones-social/bones-logo.png"
                    alt="Bones Social"
                    style={{ width: "62%", height: "62%", objectFit: "contain", position: "relative", zIndex: 1 }}
                  />
                  <div className="mockupBar">
                    <div className="mockupBarUser">
                      <div className="mockupAvatar" />
                      <div>
                        <strong>Mostazón</strong>
                        <small>● En línea</small>
                      </div>
                    </div>
                    <div className="mockupBarIcons">
                      <MessageCircle size={20} />
                      <Bell size={20} />
                      <Settings size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ══ MARQUEE ════════════════════════════════════════════ */}
        <div className="marqueeSection">
          <div className="marqueeTrack">
            {marqueeItems.map((item, i) => (
              <div className="marqueeItem" key={i}>
                <span>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* ══ FEATURES ═══════════════════════════════════════════ */}
        <section className="section pageInner" id="caracteristicas">
          <div className="sectionHead">
            <span className="tag">CARACTERÍSTICAS</span>
            <h2>
              Todo lo que necesitas<br />
              <span className="gradient-text">en un solo lugar</span>
            </h2>
            <p>
              Bones Social combina lo mejor de una red social moderna con una
              estética gamer única. Personaliza cada detalle de tu experiencia.
            </p>
          </div>

          <div className="featuresGrid">
            {FEATURES.map((f, i) => (
              <div className="featureCard" key={i}>
                <div
                  className="featureCardIcon"
                  style={{
                    background: f.color,
                    border: `1px solid ${f.border}`,
                  }}
                >
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                {f.tag && (
                  <span
                    className="featureTag"
                    style={{
                      background: f.tagColor.bg,
                      border: `1px solid ${f.tagColor.border}`,
                      color: f.tagColor.text,
                    }}
                  >
                    {f.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ══ BONES LIFE HIGHLIGHT ═══════════════════════════════ */}
        <section className="highlightSection pageInner">
          <div className="highlightInner">
            <div className="highlightBg" />

            <div className="highlightContent">
              <div className="highlightBadge">
                <span>🌐</span>
                EN DESARROLLO
              </div>

              <h2>
                Conoce<br />
                <span className="gradient-text">Bones Life</span>
              </h2>

              <p>
                Más que una red social. Bones Life es un mundo social virtual
                3D donde podrás crear tu avatar, explorar una plaza compartida
                con otros usuarios, conversar en tiempo real y vivir una nueva
                forma de socializar digital.
              </p>

              <div className="highlightFeatList">
                {[
                  "Avatares 3D completamente personalizables",
                  "Plaza social en tiempo real con otros usuarios",
                  "Minijuegos y recompensas exclusivas",
                  "Conectado con tu perfil de Bones Social",
                ].map((item, i) => (
                  <div className="highlightFeat" key={i}>
                    <div className="highlightFeatDot" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="highlightVisual">
              <img
                src="/images/bones-life-logo.png"
                alt="Bones Life"
                className="highlightImg"
                style={{ objectFit: "contain", background: "transparent", border: "none", boxShadow: "none" }}
              />
            </div>
          </div>
        </section>

        {/* ══ STATS ══════════════════════════════════════════════ */}
        <section className="statsSection">
          <div className="pageInner">
            <div className="statsGrid">
              {STATS.map((s, i) => (
                <div className="statItem" key={i}>
                  <div className="statNum">{s.num}</div>
                  <div className="statLabel">{s.label}</div>
                  <div className="statSub">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ DISCORD CTA ════════════════════════════════════════ */}
        {/* ══ INSTALACIÓN ════════════════════════════════════════ */}
        <section className="installSection pageInner" id="instalar">
          <div className="installInner">

            <div className="installHeader">
              <span className="tag">
                <Download size={13} />
                GUÍA DE INSTALACIÓN
              </span>
              <h2 className="installTitle">
                ¿Cómo instalar<br />
                <span className="gradient-text">el APK?</span>
              </h2>
              <p className="installSubtitle">
                Sigue estos pasos — tarda menos de 2 minutos.
              </p>
            </div>

            {/* STEPS */}
            <div className="installSteps">

              <div className="installStep">
                <div className="installStepNum">1</div>
                <div className="installStepContent">
                  <h3>Descarga el APK</h3>
                  <p>Pulsa el botón <strong>"DESCARGAR APK"</strong> de esta página. Se descargará un archivo <code>.apk</code> en tu carpeta de descargas.</p>
                </div>
              </div>

              <div className="installStepArrow">↓</div>

              <div className="installStep">
                <div className="installStepNum">2</div>
                <div className="installStepContent">
                  <h3>Abre el archivo descargado</h3>
                  <p>Desliza la barra de notificaciones hacia abajo y toca el archivo descargado, o abre tu app de <strong>Descargas</strong> y busca <code>application-ea19de92.apk</code>.</p>
                </div>
              </div>

              <div className="installStepArrow">↓</div>

              {/* PERMISO — caja especial */}
              <div className="installPermBox">
                <div className="installPermHeader">
                  <ShieldCheck size={20} className="installPermIcon" />
                  <span>Paso importante: Activar "Fuentes desconocidas"</span>
                </div>
                <p className="installPermDesc">
                  Android bloquea la instalación de apps fuera de la Play Store por seguridad. Solo tienes que darle permiso una vez a tu navegador.
                </p>
                <div className="installPermSteps">
                  <div className="installPermStep">
                    <span className="installPermBadge">Android 8+</span>
                    <p>Cuando aparezca el aviso, toca <strong>"Configuración"</strong> → activa <strong>"Permitir de esta fuente"</strong> → vuelve atrás e instala.</p>
                  </div>
                  <div className="installPermStep">
                    <span className="installPermBadge samsung">Samsung</span>
                    <p>Ajustes → Aplicaciones → tu navegador (Chrome o Samsung Internet) → <strong>"Instalar apps desconocidas"</strong> → Permitir.</p>
                  </div>
                  <div className="installPermStep">
                    <span className="installPermBadge xiaomi">Xiaomi / MIUI</span>
                    <p>Ajustes de seguridad → <strong>"Instalar desde fuentes desconocidas"</strong> → actívalo para tu navegador.</p>
                  </div>
                </div>
              </div>

              <div className="installStepArrow">↓</div>

              <div className="installStep">
                <div className="installStepNum">3</div>
                <div className="installStepContent">
                  <h3>Toca "Instalar"</h3>
                  <p>Android te mostrará la pantalla de instalación. Pulsa <strong>"Instalar"</strong> y espera unos segundos.</p>
                </div>
              </div>

              <div className="installStepArrow">↓</div>

              <div className="installStep highlight">
                <div className="installStepNum done">✓</div>
                <div className="installStepContent">
                  <h3>¡Listo! Abre Bones Social</h3>
                  <p>Toca <strong>"Abrir"</strong> o búscala en tu menú de apps. Crea tu cuenta y únete a la comunidad.</p>
                </div>
              </div>

            </div>

            <a href={apkUrl} download className="installDownloadBtn">
              <Download size={18} />
              DESCARGAR APK v1.0.5
            </a>

          </div>
        </section>

        <section className="ctaSection pageInner" id="contacto">
          <div className="ctaInner">
            <div className="ctaGlow" />

            <span className="tag">
              <Sparkles size={13} />
              COMUNIDAD
            </span>

            <h2>
              ¿Listo para<br />
              <span className="gradient-text">unirte?</span>
            </h2>

            <p>
              Únete a nuestra comunidad en Discord, descarga la beta ahora
              y sé parte del crecimiento de Bones Social desde el principio.
            </p>

            <div className="ctaBtns">
              <button className="ctaBtnPrimary" onClick={openDiscord}>
                <Gamepad2 size={20} />
                ÚNETE AL DISCORD
              </button>
              <a href={apkUrl} download className="ctaBtnSecondary">
                <Download size={20} />
                DESCARGAR APK v1.0.5
              </a>
            </div>
          </div>
        </section>

        {/* ══ FOOTER ═════════════════════════════════════════════ */}
        <footer className="footer">
          <div className="footerLeft">
            <div className="footerLogo">
              <img src="/images/bones-social/bones-logo.png" alt="Bones" style={{ width: 22, height: 22, objectFit: "contain" }} />
            </div>
            <span className="footerBrand">BONES SOCIAL</span>
          </div>

          <div className="footerCenter">
            <a onClick={() => document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })}>INICIO</a>
            <a onClick={() => document.getElementById("caracteristicas")?.scrollIntoView({ behavior: "smooth" })}>CARACTERÍSTICAS</a>
            <a href="/sobre-nosotros">SOBRE NOSOTROS</a>
            <a href="/avances">AVANCES</a>
            <a href="/privacidad">PRIVACIDAD</a>
            <a href="/terminos">TÉRMINOS</a>
            <a href="/reembolsos">REEMBOLSOS</a>
            <a onClick={() => openDiscord()}>DISCORD</a>
          </div>

          <div className="footerRight">
            © 2026 Bones Social · Beta v1.0.5
          </div>
        </footer>

      </main>
    </>
  );
}
