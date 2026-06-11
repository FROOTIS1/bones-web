import { ShoppingBag, Zap, Skull } from "lucide-react";
import Navbar from "../components/Navbar";
import "../App.css";

/* ── COINS PACKAGES ────────────────────────────────────────── */
const COIN_PACKAGES = [
  {
    id: "coins_300",
    coins: 300,
    price: "$3",
    usd: 3,
    popular: false,
    color: "#4F8EF7",
    dark: "#1A3A7A",
    emoji: "⭐",
    label: "Starter",
    stripeUrl: "https://buy.stripe.com/REEMPLAZA_AQUI_300_COINS",
  },
  {
    id: "coins_500",
    coins: 500,
    price: "$5",
    usd: 5,
    popular: true,
    color: "#A855F7",
    dark: "#3B1A6E",
    emoji: "🔥",
    label: "Popular",
    stripeUrl: "https://buy.stripe.com/REEMPLAZA_AQUI_500_COINS",
  },
  {
    id: "coins_1000",
    coins: 1000,
    price: "$10",
    usd: 10,
    popular: false,
    color: "#EC4899",
    dark: "#5C1A3A",
    emoji: "💎",
    label: "Pro",
    stripeUrl: "https://buy.stripe.com/REEMPLAZA_AQUI_1000_COINS",
  },
  {
    id: "coins_2500",
    coins: 2500,
    price: "$20",
    usd: 20,
    popular: false,
    color: "#F59E0B",
    dark: "#5C3A00",
    emoji: "🏆",
    label: "Elite",
    stripeUrl: "https://buy.stripe.com/REEMPLAZA_AQUI_2500_COINS",
  },
];

/* ── SKELETONS PACKAGES ────────────────────────────────────── */
const SKELETON_PACKAGES = [
  {
    id: "skl_150",
    amount: 150,
    price: "$1.99",
    popular: false,
    color: "#9CA3AF",
    dark: "#1F2937",
    emoji: "💀",
    label: "Puñado",
    stripeUrl: "https://buy.stripe.com/REEMPLAZA_AQUI_150_SKELETONS",
  },
  {
    id: "skl_500",
    amount: 500,
    price: "$4.99",
    popular: true,
    color: "#A78BFA",
    dark: "#2D1B69",
    emoji: "💀",
    label: "Bolsa",
    stripeUrl: "https://buy.stripe.com/REEMPLAZA_AQUI_500_SKELETONS",
  },
  {
    id: "skl_1200",
    amount: 1200,
    price: "$9.99",
    popular: false,
    color: "#EC4899",
    dark: "#4C0519",
    emoji: "💀",
    label: "Cofre",
    stripeUrl: "https://buy.stripe.com/REEMPLAZA_AQUI_1200_SKELETONS",
  },
  {
    id: "skl_2500",
    amount: 2500,
    price: "$19.99",
    popular: false,
    color: "#F59E0B",
    dark: "#451A03",
    emoji: "💀",
    label: "Tesoro",
    stripeUrl: "https://buy.stripe.com/REEMPLAZA_AQUI_2500_SKELETONS",
  },
];

function CoinCard({ pkg }) {
  return (
    <div className="shop-card" style={{ borderColor: pkg.color + "44" }}>
      {pkg.popular && <div className="shop-badge" style={{ background: pkg.color }}>MÁS POPULAR</div>}
      <div className="shop-card-icon" style={{ background: pkg.dark }}>
        <span style={{ fontSize: 32 }}>{pkg.emoji}</span>
      </div>
      <div className="shop-card-label" style={{ color: pkg.color }}>{pkg.label}</div>
      <div className="shop-card-amount">{pkg.coins.toLocaleString()}</div>
      <div className="shop-card-currency">Coins 🪙</div>
      <a
        href={pkg.stripeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="shop-buy-btn"
        style={{ background: pkg.color }}
      >
        {pkg.price}
      </a>
    </div>
  );
}

function SkeletonCard({ pkg }) {
  const display = pkg.amount >= 1000 ? `${pkg.amount / 1000}K` : `${pkg.amount}`;
  return (
    <div className="shop-card" style={{ borderColor: pkg.color + "44" }}>
      {pkg.popular && <div className="shop-badge" style={{ background: pkg.color }}>MÁS POPULAR</div>}
      <div className="shop-card-icon" style={{ background: pkg.dark }}>
        <span style={{ fontSize: 32 }}>{pkg.emoji}</span>
      </div>
      <div className="shop-card-label" style={{ color: pkg.color }}>{pkg.label}</div>
      <div className="shop-card-amount">{display}</div>
      <div className="shop-card-currency">Skeletons 💀</div>
      <a
        href={pkg.stripeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="shop-buy-btn"
        style={{ background: pkg.color }}
      >
        {pkg.price}
      </a>
    </div>
  );
}

export default function Tienda() {
  return (
    <div className="page">
      <Navbar />

      <div className="shop-hero">
        <div className="shop-hero-badge">
          <ShoppingBag size={14} />
          TIENDA OFICIAL
        </div>
        <h1 className="shop-hero-title">
          Consigue monedas para<br />
          <span className="gradient-text">Bones Social</span>
        </h1>
        <p className="shop-hero-sub">
          Compra Coins y Skeletons de forma segura con Stripe.<br />
          Los créditos se añaden manualmente a tu cuenta en 24&nbsp;h.
        </p>
        <div className="shop-info-box">
          <span>⚠️</span>
          <span>
            Después de pagar, envíanos tu UID de usuario por{" "}
            <a href="https://discord.gg/r29J6fwrQ" target="_blank" rel="noopener noreferrer" style={{ color: "#A855F7" }}>
              Discord
            </a>{" "}
            para acreditar tus monedas. El proceso tarda menos de 24&nbsp;h.
          </span>
        </div>
      </div>

      {/* COINS */}
      <section className="shop-section">
        <div className="shop-section-header">
          <div className="shop-section-icon" style={{ background: "rgba(245,158,11,0.15)" }}>
            <Zap size={20} color="#F59E0B" />
          </div>
          <div>
            <h2 className="shop-section-title">Coins 🪙</h2>
            <p className="shop-section-desc">Úsalos en la tienda de la app para comprar marcos, animaciones y más.</p>
          </div>
        </div>
        <div className="shop-grid">
          {COIN_PACKAGES.map((pkg) => <CoinCard key={pkg.id} pkg={pkg} />)}
        </div>
      </section>

      {/* SKELETONS */}
      <section className="shop-section">
        <div className="shop-section-header">
          <div className="shop-section-icon" style={{ background: "rgba(167,139,250,0.15)" }}>
            <Skull size={20} color="#A78BFA" />
          </div>
          <div>
            <h2 className="shop-section-title">Skeletons 💀</h2>
            <p className="shop-section-desc">Súbelos para publicar marcos en la comunidad y desbloquear contenido exclusivo.</p>
          </div>
        </div>
        <div className="shop-grid">
          {SKELETON_PACKAGES.map((pkg) => <SkeletonCard key={pkg.id} pkg={pkg} />)}
        </div>
      </section>

      {/* FAQ */}
      <section className="shop-section shop-faq">
        <h2 className="shop-section-title" style={{ textAlign: "center", marginBottom: 24 }}>Preguntas frecuentes</h2>
        <div className="faq-list">
          {[
            { q: "¿Cómo se añaden las monedas a mi cuenta?", a: "Tras el pago, escríbenos por Discord con tu UID y el comprobante. Las añadimos en menos de 24 h." },
            { q: "¿Dónde encuentro mi UID?", a: "Ve a tu perfil en Bones Social → botón de configuración ⚙️ → tu UID aparece en la parte inferior." },
            { q: "¿El pago es seguro?", a: "Sí. Usamos Stripe, el procesador de pagos más confiable del mundo. No almacenamos datos de tarjeta." },
            { q: "¿Puedo pedir reembolso?", a: "Las monedas digitales no son reembolsables una vez acreditadas. Contáctanos antes de 24 h si hay algún problema." },
          ].map(({ q, a }) => (
            <div className="faq-item" key={q}>
              <div className="faq-q">❓ {q}</div>
              <div className="faq-a">{a}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
