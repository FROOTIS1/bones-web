import Navbar from "./Navbar";
import "../App.css";

const SUPPORT_EMAIL = "arroyaveriverarafa@gmail.com";

export default function LegalLayout({ title, updated, sections }) {
  const openDiscord = () => window.open("https://discord.gg/r29J6fwrQ", "_blank");

  return (
    <>
      <Navbar />

      <main className="page">
        <div className="pageInner">
          <div className="legalPage">
            <div className="legalHeader">
              <h1 className="legalTitle">{title}</h1>
              <p className="legalUpdated">Última actualización: {updated}</p>
            </div>

            <div className="legalBody">
              {sections.map((s, i) => (
                <section key={i} className="legalSection">
                  {s.heading ? <h2 className="legalHeading">{s.heading}</h2> : null}
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="legalParagraph" dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </section>
              ))}

              <section className="legalSection">
                <h2 className="legalHeading">Contacto</h2>
                <p className="legalParagraph">
                  Para cualquier duda sobre estas políticas puedes escribirnos a{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="legalLink">{SUPPORT_EMAIL}</a>.
                </p>
              </section>
            </div>
          </div>
        </div>

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
            <a href="/privacidad">PRIVACIDAD</a>
            <a href="/terminos">TÉRMINOS</a>
            <a href="/reembolsos">REEMBOLSOS</a>
            <a onClick={openDiscord} style={{ cursor: "pointer" }}>DISCORD</a>
          </div>
          <div className="footerRight">© 2026 Bones Social · Beta v1.0.5</div>
        </footer>
      </main>
    </>
  );
}
