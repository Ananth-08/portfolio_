import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'circle' | 'square' | 'triangle';
  delay: number;
  duration: number;
}

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    // Generate random shapes
    const generatedShapes: Shape[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as Shape['type'],
      delay: Math.random() * 2,
      duration: Math.random() * 4 + 6,
    }));
    setShapes(generatedShapes);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderShape = (shape: Shape) => {
    const baseClasses = "absolute opacity-10 transition-all duration-1000";
    
    switch (shape.type) {
      case 'circle':
        return (
          <div
            className={`${baseClasses} rounded-full border border-primary/30`}
            style={{
              width: shape.size,
              height: shape.size,
              background: `radial-gradient(circle, hsl(var(--neon-cyan) / 0.1) 0%, transparent 70%)`,
            }}
          />
        );
      case 'square':
        return (
          <div
            className={`${baseClasses} border border-secondary/30 rotate-45`}
            style={{
              width: shape.size,
              height: shape.size,
              background: `linear-gradient(135deg, hsl(var(--neon-blue) / 0.1) 0%, transparent 100%)`,
            }}
          />
        );
      case 'triangle':
        return (
          <div
            className={`${baseClasses}`}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid hsl(var(--neon-purple) / 0.1)`,
            }}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Mouse follower glow */}
      <motion.div
        className="mouse-glow"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent/5 via-transparent to-transparent" />

      {/* Floating shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {renderShape(shape)}
        </motion.div>
      ))}

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
