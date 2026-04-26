import { useEffect, useRef } from "react";

const SPACING = 28;
const AMPLITUDE = 2.8;
const SPEED = 0.007;

export default function WaterDots() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      const dotColor = isDark ? "167,139,250" : "26,10,46";
      const baseAlpha = isDark ? 0.22 : 0.2;

      const cols = Math.ceil(w / SPACING) + 2;
      const rows = Math.ceil(h / SPACING) + 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const bx = c * SPACING;
          const by = r * SPACING;

          /* Two interfering waves → realistic water ripple */
          const w1 = Math.sin(bx * 0.044 + by * 0.028 + time);
          const w2 = Math.cos(bx * 0.033 - by * 0.054 + time * 1.35);

          const x = bx + w1 * AMPLITUDE;
          const y = by + w2 * AMPLITUDE;

          /* Subtle opacity breathing with the wave */
          const alpha = baseAlpha + (w1 + w2) * 0.013;

          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dotColor},${Math.max(0.1, alpha)})`;
          ctx.fill();
        }
      }

      time += SPEED;
      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
