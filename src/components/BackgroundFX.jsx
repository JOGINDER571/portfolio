import { useEffect, useRef } from "react";

// Lightweight cursor-following fog/spotlight background.
// You can replace the draw loop with your own fluid sim.
export default function BackgroundFX() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });
  const reduceMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    let width = 0;
    let height = 0;

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let last = 0;
    function frame(ts) {
      rafRef.current = requestAnimationFrame(frame);
      // Limit to ~60fps
      if (ts - last < 16) return;
      last = ts;

      ctx.clearRect(0, 0, width, height);

      // Background gradient (subtle)
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "rgba(2,6,23,0.8)"); // slate-950
      grad.addColorStop(1, "rgba(15,23,42,0.8)"); // slate-900
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Foggy radial spotlight that follows the cursor
      const cx = pointerRef.current.x * width;
      const cy = pointerRef.current.y * height;
      const radius = Math.max(width, height) * 0.35;
      const g = ctx.createRadialGradient(cx, cy, radius * 0.1, cx, cy, radius);
      g.addColorStop(0, "rgba(59,130,246,0.20)"); // blue-500 glow
      g.addColorStop(0.5, "rgba(168,85,247,0.10)"); // purple-500
      g.addColorStop(1, "rgba(2,6,23,0.00)");
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    }

    if (!reduceMotion) rafRef.current = requestAnimationFrame(frame);

    let throttle = 0;
    const onPointer = (e) => {
      const now = performance.now();
      if (now - throttle < 16) return; // ~60hz
      throttle = now;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      pointerRef.current.x = Math.max(0, Math.min(1, x));
      pointerRef.current.y = Math.max(0, Math.min(1, y));
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerdown", onPointer, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerdown", onPointer);
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [reduceMotion]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}


