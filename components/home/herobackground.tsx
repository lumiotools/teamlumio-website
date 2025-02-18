import React, { useEffect, useRef } from 'react';

const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const setCanvasSize = (): void => {
      const scale = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      ctx.scale(scale, scale);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const drawBlob = (
      x: number,
      y: number,
      size: number,
      color: string,
      time: number,
      opacity: number = 1
    ): void => {
      ctx.beginPath();
      ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

      for (let i = 0; i < 12; i++) {
        const angle = (i / 6) * Math.PI;
        const distortion = Math.sin(time + i) * 20;
        const radius = size + distortion;
        const pointX = x + radius * Math.cos(angle);
        const pointY = y + radius * Math.sin(angle);

        if (i === 0) {
          ctx.moveTo(pointX, pointY);
        } else {
          const prevAngle = ((i - 1) / 6) * Math.PI;
          const prevX = x + radius * Math.cos(prevAngle);
          const prevY = y + radius * Math.sin(prevAngle);

          const cpX1 = prevX + (pointX - prevX) / 2;
          const cpY1 = prevY + (pointY - prevY) / 2;

          ctx.quadraticCurveTo(cpX1, cpY1, pointX, pointY);
        }
      }

      ctx.closePath();
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 1.5);
      gradient.addColorStop(0, `${color}${opacity})`);       // Center with full opacity
      gradient.addColorStop(0.4, `${color}${opacity * 0.5})`); // Middle with 70% opacity
      gradient.addColorStop(0.7, `${color}${opacity * 0.1})`); // Outer with 30% opacity
      gradient.addColorStop(1, `${color}0)`); 

      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.015;

      // Draw morphing blobs
      drawBlob(canvas.width * 0.2, canvas.height * 0.3, 150, 'rgba(79, 70, 229,', time * 1.4, 0.10);
      drawBlob(canvas.width * 0.8, canvas.height * 0.7, 200, 'rgba(124, 58, 237,', time * 1.2, 0.10);
      drawBlob(canvas.width * 0.5, canvas.height * 0.5, 180, 'rgba(236, 72, 153,', time * 1.5, 0.10);

      animationFrameId = requestAnimationFrame(animate);
    };

    setCanvasSize();
    animate();

    const handleResize = (): void => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-white opacity-70" />

      {/* Canvas for dynamic elements */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Mesh gradient overlay */}
      <div
        className="absolute inset-0 opacity-20 backdrop-blur-3xl"
        style={{
          backgroundImage: `radial-gradient(at 40% 20%, rgba(79, 70, 229, 0.1) 0px, transparent 50%),
                           radial-gradient(at 80% 0%, rgba(124, 58, 237, 0.1) 0px, transparent 50%),
                           radial-gradient(at 0% 50%, rgba(236, 72, 153, 0.1) 0px, transparent 50%),
                           radial-gradient(at 80% 50%, rgba(79, 70, 229, 0.1) 0px, transparent 50%),
                           radial-gradient(at 0% 100%, rgba(124, 58, 237, 0.1) 0px, transparent 50%),
                           radial-gradient(at 80% 100%, rgba(236, 72, 153, 0.1) 0px, transparent 50%)`,
        }}
      />
    </div>
  );
};

export default HeroBackground;
