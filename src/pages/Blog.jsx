import { BookOpen, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { POSTS } from "../data/blogPosts";
import "../App.css";

export default function Blog() {
  const navigate = useNavigate();
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="pageInner">
          <div className="blogPage">

            {/* ── HERO ── */}
            <div className="blogHero">
              <span className="tag">
                <BookOpen size={13} />
                BLOG
              </span>
              <h1>
                Noticias y guías de<br />
                <span className="gradient-text">Bones Social</span>
              </h1>
              <p>
                Tutoriales, actualizaciones, guías de personalización y todo
                lo que necesitas saber sobre Bones Social y Bones Life.
              </p>
            </div>

            {/* ── POST DESTACADO ── */}
            <div
              className="blogFeatured"
              onClick={() => navigate(`/blog/${featured.slug}`)}
            >
              <div className="blogFeaturedBg" />
              <div className="blogFeaturedContent">
                <div className="blogFeaturedMeta">
                  <span
                    className="blogTag"
                    style={{
                      background: featured.tagColor.bg,
                      border: `1px solid ${featured.tagColor.border}`,
                      color: featured.tagColor.text,
                    }}
                  >
                    {featured.tag}
                  </span>
                  <span className="blogMetaItem">
                    <Clock size={12} />
                    {featured.readTime} lectura
                  </span>
                  <span className="blogMetaDot" />
                  <span className="blogMetaItem">{featured.date}</span>
                </div>
                <h2 className="blogFeaturedTitle">{featured.title}</h2>
                <p className="blogFeaturedExcerpt">{featured.excerpt}</p>
                <div className="blogReadMore">Leer artículo →</div>
              </div>
            </div>

            {/* ── GRID RESTO DE POSTS ── */}
            <div className="blogGrid">
              {rest.map((post) => (
                <div
                  key={post.slug}
                  className="blogCard"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <div className="blogCardMeta">
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
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="blogCardTitle">{post.title}</h3>
                  <p className="blogCardExcerpt">{post.excerpt}</p>
                  <div className="blogCardFooter">
                    <span className="blogCardDate">{post.date}</span>
                    <span className="blogCardLink">Leer →</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── FOOTER ── */}
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
