import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
    }> = [];

    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.005 + 0.002, // Slower twinkle
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.1) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Brighter Aurora Effect */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 20%, rgba(34, 197, 94, 0.25) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 30%, rgba(59, 130, 246, 0.25) 0%, transparent 50%)",
              "radial-gradient(ellipse at 40% 70%, rgba(168, 85, 247, 0.25) 0%, transparent 50%)",
              "radial-gradient(ellipse at 70% 80%, rgba(34, 197, 94, 0.25) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 20%, rgba(34, 197, 94, 0.25) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at 60% 10%, rgba(59, 130, 246, 0.2) 0%, transparent 40%)",
              "radial-gradient(ellipse at 30% 60%, rgba(168, 85, 247, 0.2) 0%, transparent 40%)",
              "radial-gradient(ellipse at 80% 90%, rgba(34, 197, 94, 0.2) 0%, transparent 40%)",
              "radial-gradient(ellipse at 10% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 40%)",
              "radial-gradient(ellipse at 60% 10%, rgba(59, 130, 246, 0.2) 0%, transparent 40%)"
            ]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>
    </>
  );
};

export default StarryBackground;