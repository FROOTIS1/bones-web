import { ArrowLeft, Clock } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { POSTS } from "../data/blogPosts";
import "../App.css";

function renderContent(text) {
  const lines = text.split("\n");
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="postH2">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={i} className="postH3">{line.slice(4)}</h3>);
    } else if (line.startsWith("- ")) {
      const items = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(<li key={i}>{renderInline(lines[i].trim().slice(2))}</li>);
        i++;
      }
      elements.push(<ul key={`ul-${i}`} className="postUl">{items}</ul>);
      continue;
    } else if (line === "") {
      // skip empty lines
    } else {
      elements.push(<p key={i} className="postP">{renderInline(line)}</p>);
    }
    i++;
  }
  return elements;
}

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = POSTS.find((p) => p.slug === slug);
  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="page">
          <div className="pageInner" style={{ paddingTop: 80, textAlign: "center" }}>
            <h1 style={{ color: "#fff", marginBottom: 16 }}>Artículo no encontrado</h1>
            <button className="btnPrimary" onClick={() => navigate("/blog")}>
              Volver al blog
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="pageInner">
          <article className="postPage">

            {/* ── Back ── */}
            <button className="postBack" onClick={() => navigate("/blog")}>
              <ArrowLeft size={16} />
              Volver al blog
            </button>

            {/* ── Header ── */}
            <header className="postHeader">
              <div className="postMeta">
                <span
                  className="blogTag"
                  style={{
                    background: post.tagColor.bg,
                    border: `1px solid ${post.tagColor.border}`,
                    color: post.tagColor.text,
                  }}
                >
                  {post.tag}
                </span>
                <span className="blogMetaItem">
                  <Clock size={13} />
                  {post.readTime} de lectura
                </span>
                <span className="blogMetaDot" />
                <span className="blogMetaItem">{post.date}</span>
              </div>
              <h1 className="postTitle">{post.title}</h1>
              <p className="postExcerpt">{post.excerpt}</p>
              <div className="postDivider" />
            </header>

            {/* ── Body ── */}
            <div className="postBody">
              {renderContent(post.content)}
            </div>

            {/* ── Related ── */}
            {related.length > 0 && (
              <div className="postRelated">
                <h3 className="postRelatedTitle">Más artículos</h3>
                <div className="postRelatedGrid">
                  {related.map((r) => (
                    <div
                      key={r.slug}
                      className="blogCard"
                      onClick={() => { navigate(`/blog/${r.slug}`); window.scrollTo(0, 0); }}
                    >
                      <div className="blogCardMeta">
                        <span
                          className="blogTag"
                          style={{
                            background: r.tagColor.bg,
                            border: `1px solid ${r.tagColor.border}`,
                            color: r.tagColor.text,
                          }}
                        >
                          {r.tag}
                        </span>
                        <span className="blogMetaItem">
                          <Clock size={11} />
                          {r.readTime}
                        </span>
                      </div>
                      <h3 className="blogCardTitle">{r.title}</h3>
                      <p className="blogCardExcerpt">{r.excerpt}</p>
                      <div className="blogCardFooter">
                        <span className="blogCardDate">{r.date}</span>
                        <span className="blogCardLink">Leer →</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </article>
        </div>

        {/* ── Footer ── */}
        <footer className="footer">
          <div className="footerLeft">
            <div className="footerLogo">
              <img src="/images/bones-social/bones-logo.png" alt="Bones" style={{ width: 22, height: 22, objectFit: "contain" }} />
            </div>
            <span className="footerBrand">BONES SOCIAL</span>
          </div>
          <div className="footerCenter">
            <a href="/">INICIO</a>
            <a href="/sobre-nosotros">SOBRE NOSOTROS</a>
            <a href="/avances">AVANCES</a>
            <a href="/blog">BLOG</a>
            <a onClick={() => window.open("https://discord.gg/r29J6fwrQ", "_blank")} style={{ cursor: "pointer" }}>DISCORD</a>
          </div>
          <div className="footerRight">© 2026 Bones Social · Beta v1.0.4</div>
        </footer>
      </main>
    </>
  );
}
