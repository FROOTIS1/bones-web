import { Route, Routes } from "react-router-dom";
import ParticleBackground from "./components/ParticleBackground";
import SiteLoader from "./components/SiteLoader";
import RevealManager from "./components/RevealManager";
import Avances from "./pages/Avances.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Home from "./pages/Home.jsx";
import SobreNosotros from "./pages/SobreNosotros.jsx";
import Tienda from "./pages/Tienda.jsx";
import Privacidad from "./pages/Privacidad.jsx";
import Terminos from "./pages/Terminos.jsx";
import Reembolsos from "./pages/Reembolsos.jsx";

export default function App() {
  return (
    <>
      <SiteLoader />
      <RevealManager />
      <ParticleBackground />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/avances"        element={<Avances />} />
        <Route path="/blog"           element={<Blog />} />
        <Route path="/blog/:slug"     element={<BlogPost />} />
        <Route path="/tienda"         element={<Tienda />} />
        <Route path="/privacidad"     element={<Privacidad />} />
        <Route path="/terminos"       element={<Terminos />} />
        <Route path="/reembolsos"     element={<Reembolsos />} />
      </Routes>
    </>
  );
}