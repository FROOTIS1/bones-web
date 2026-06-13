import { Download, Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const [open, setOpen] = useState(false);

  const isHome    = location.pathname === "/";
  const isSobre   = location.pathname === "/sobre-nosotros";
  const isAv      = location.pathname === "/avances";
  const isBlog    = location.pathname.startsWith("/blog");
  const isTienda  = location.pathname === "/tienda";

  const goHome    = () => { setOpen(false); navigate("/"); };
  const goSobre   = () => { setOpen(false); navigate("/sobre-nosotros"); };
  const goAv      = () => { setOpen(false); navigate("/avances"); };
  const goBlog    = () => { setOpen(false); navigate("/blog"); };
  const goTienda  = () => { setOpen(false); navigate("/tienda"); };

  const scrollTo = (id) => {
    setOpen(false);
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openDiscord = () => {
    setOpen(false);
    window.open("https://discord.gg/r29J6fwrQ", "_blank");
  };

  return (
    <>
      <nav className="navbar">
        {/* Brand */}
        <div className="brand" onClick={goHome}>
          <div className="brandLogo">
            <img src="/images/bones-social/bones-logo.png" alt="Bones" style={{ width: 26, height: 26, objectFit: "contain" }} />
          </div>
          <span className="brandName">BONES SOCIAL</span>
        </div>

        {/* Desktop links */}
        <div className="navLinks">
          <a onClick={goHome}           className={isHome  && !isSobre && !isAv && !isBlog && !isTienda ? "active" : ""}>INICIO</a>
          <a onClick={() => scrollTo("caracteristicas")}>CARACTERÍSTICAS</a>
          <a onClick={goSobre}          className={isSobre   ? "active" : ""}>SOBRE NOSOTROS</a>
          <a onClick={goAv}             className={isAv      ? "active" : ""}>AVANCES</a>
          <a onClick={goBlog}           className={isBlog    ? "active" : ""}>BLOG</a>
          <a onClick={goTienda}         className={isTienda  ? "active" : ""} style={{ color: "#c084fc" }}>🛒 TIENDA</a>
          <a onClick={() => scrollTo("instalar")}>INSTALAR</a>
          <a onClick={() => scrollTo("contacto")}>CONTACTO</a>
        </div>

        {/* Desktop right */}
        <div className="navRight">
          <a
            href="https://expo.dev/artifacts/eas/mb0pD7gs4-TRpK8zJ4GJhpn7SdL80Vb0BJbXLg5-p_Q.apk"
            download
            className="btnOutline"
            style={{ textDecoration: "none" }}
          >
            <Download size={15} />
            DESCARGAR APK
          </a>
          <button className="btnPrimary" onClick={openDiscord}>
            <Gamepad2 size={15} />
            DISCORD
          </button>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mobileMenu">
          <a onClick={goHome}           className={isHome  ? "active" : ""}>INICIO</a>
          <a onClick={() => scrollTo("caracteristicas")}>CARACTERÍSTICAS</a>
          <a onClick={goSobre}          className={isSobre   ? "active" : ""}>SOBRE NOSOTROS</a>
          <a onClick={goAv}             className={isAv      ? "active" : ""}>AVANCES</a>
          <a onClick={goBlog}           className={isBlog    ? "active" : ""}>BLOG</a>
          <a onClick={goTienda}         className={isTienda  ? "active" : ""} style={{ color: "#c084fc" }}>🛒 TIENDA</a>
          <a onClick={() => scrollTo("instalar")}>INSTALAR</a>
          <a onClick={() => scrollTo("contacto")}>CONTACTO</a>
          <div className="mobileMenuBottom">
            <a
              href="https://expo.dev/artifacts/eas/mb0pD7gs4-TRpK8zJ4GJhpn7SdL80Vb0BJbXLg5-p_Q.apk"
              download
              className="btnOutline"
              style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
            >
              <Download size={14} />
              APK
            </a>
            <button className="btnPrimary" onClick={openDiscord}>
              <Gamepad2 size={14} />
              DISCORD
            </button>
          </div>
        </div>
      )}
    </>
  );
}
