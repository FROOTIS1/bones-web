import { Route, Routes } from "react-router-dom";
import ParticleBackground from "./components/ParticleBackground";
import Avances from "./pages/Avances.jsx";
import Home from "./pages/Home.jsx";
import SobreNosotros from "./pages/SobreNosotros.jsx";

export default function App() {
  return (
    <>
      <ParticleBackground />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/avances"        element={<Avances />} />
      </Routes>
    </>
  );
}