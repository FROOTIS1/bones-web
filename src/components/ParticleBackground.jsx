import { useEffect, useRef } from "react";
import "./ParticleBackground.css";

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;
    const particles = [];

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const COLORS = [
      "rgba(160,120,255,",
      "rgba(200,182,255,",
      "rgba(100,160,255,",
      "rgba(255,255,255,",
      "rgba(220,100,255,",
    ];

    class Particle {
      constructor() { this.reset(true); }

      reset(init = false) {
        this.x       = Math.random() * W;
        this.y       = init ? Math.random() * H : H + 10;
        this.r       = Math.random() * 1.6 + 0.3;
        this.vx      = (Math.random() - 0.5) * 0.25;
        this.vy      = -(Math.random() * 0.45 + 0.12);
        this.life    = 0;
        this.maxLife = Math.random() * 220 + 140;
        this.color   = COLORS[Math.floor(Math.random() * COLORS.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;
        if (this.life > this.maxLife || this.y < -10) this.reset();
      }

      draw() {
        const p     = this.life / this.maxLife;
        const alpha = p < 0.2 ? p / 0.2 : p > 0.8 ? (1 - p) / 0.2 : 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color + alpha * 0.65 + ")";
        ctx.fill();
      }
    }

    for (let i = 0; i < 130; i++) particles.push(new Particle());

    function loop() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(loop);
    }
    loop();

    function handleMouse(e) {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top  = e.clientY + "px";
      }
    }
    window.addEventListener("mousemove", handleMouse);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="pb-canvas" />
      <div className="pb-glow pb-glow-1" />
      <div className="pb-glow pb-glow-2" />
      <div className="pb-glow pb-glow-3" />
      <div ref={cursorRef} className="pb-cursor" />
    </>
  );
}
