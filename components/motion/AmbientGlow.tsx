"use client";

import { useEffect, useState } from "react";

export function AmbientGlow() {
  const [pos, setPos] = useState({ x: 50, y: 20 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="pulse-glow absolute h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(144,0,187,0.28),transparent_65%)] blur-2xl transition-transform duration-700 ease-out"
        style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
      />
      <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(79,0,103,0.45),transparent_70%)] blur-3xl" />
    </div>
  );
}
