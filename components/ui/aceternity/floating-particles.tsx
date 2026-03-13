"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
  brightness: number;
}

export const FloatingParticles = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 120;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 0.5; // Variation in sizes
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          vx: (Math.random() - 0.5) * 0.2, // Slow diagonal drift
          vy: -Math.random() * 0.3 - 0.1, // Slow upward drift
          opacity: Math.random() * 0.5 + 0.2,
          brightness: Math.random() * 0.6 + 0.4, // Depth feel
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = theme === "dark";
      const dotColor = isDark ? "255, 255, 255" : "15, 23, 42"; // White for dark, Navy for light

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Intensity based on brightness and basic opacity
        const alpha = isDark ? p.opacity * p.brightness * 0.5 : p.opacity * 0.15;
        ctx.fillStyle = `rgba(${dotColor}, ${alpha})`;
        ctx.fill();

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    createParticles();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, theme]);

  if (!mounted) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 z-0 ${className}`}>
      {/* Radial Glows */}
      <div 
        className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full blur-[120px] pointer-events-none"
        style={{ 
          background: "radial-gradient(circle, rgba(0, 194, 255, 0.08) 0%, transparent 70%)" 
        }} 
      />
      <div 
        className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full blur-[150px] pointer-events-none"
        style={{ 
          background: "radial-gradient(circle, rgba(0, 194, 255, 0.04) 0%, transparent 70%)" 
        }} 
      />
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};
