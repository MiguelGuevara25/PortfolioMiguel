import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface ParticleBackgroundProps {
  density?: number;
  maxParticles?: number;
  connectionDistance?: number;
  particleSpeed?: number;
}

export default function ParticleBackground({
  density = 0.8,
  maxParticles = 100,
  connectionDistance = 150,
  particleSpeed = 0.5,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle colors (blue theme)
    const colors = [
      "rgba(59, 130, 246, 0.4)", // blue-500
      "rgba(37, 99, 235, 0.3)", // blue-600
      "rgba(96, 165, 250, 0.2)", // blue-400
      "rgba(147, 197, 253, 0.15)", // blue-300
    ];

    // Create particle
    const createParticle = (x?: number, y?: number): Particle => {
      return {
        x: x ?? Math.random() * canvas.width,
        y: y ?? Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 300 + 200,
      };
    };

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor(
        ((canvas.width * canvas.height) / 15000) * density
      );
      const actualCount = Math.min(particleCount, maxParticles);

      for (let i = 0; i < actualCount; i++) {
        particlesRef.current.push(createParticle());
      }
    };

    // Update particle
    const updateParticle = (particle: Particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life++;

      // Fade in/out effect
      const lifeCycle = particle.life / particle.maxLife;
      if (lifeCycle < 0.1) {
        particle.opacity = (lifeCycle / 0.1) * 0.6;
      } else if (lifeCycle > 0.9) {
        particle.opacity = ((1 - lifeCycle) / 0.1) * 0.6;
      }

      // Boundary collision with soft bounce
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      // Mouse interaction
      if (mouseRef.current.isMoving) {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;
        }
      }

      // Apply friction
      particle.vx *= 0.999;
      particle.vy *= 0.999;

      return particle.life < particle.maxLife;
    };

    // Draw particle
    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Add subtle glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = particle.size * 2;
      ctx.fill();
      ctx.restore();
    };

    // Draw connections between nearby particles
    const drawConnections = () => {
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.1;
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = "rgba(59, 130, 246, 0.2)";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(updateParticle);
      particlesRef.current.forEach(drawParticle);

      // Draw connections
      drawConnections();

      // Add new particles if needed
      while (
        particlesRef.current.length <
        Math.min(
          maxParticles,
          Math.floor(((canvas.width * canvas.height) / 15000) * density)
        )
      ) {
        particlesRef.current.push(createParticle());
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isMoving = true;

      // Reset moving flag after a delay
      setTimeout(() => {
        mouseRef.current.isMoving = false;
      }, 100);
    };

    // Touch tracking for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.isMoving = true;

        setTimeout(() => {
          mouseRef.current.isMoving = false;
        }, 100);
      }
    };

    // Initialize and start animation
    initParticles();
    animate();

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, maxParticles, connectionDistance, particleSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "transparent",
      }}
    />
  );
}
