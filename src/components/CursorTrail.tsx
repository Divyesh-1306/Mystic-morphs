import { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      };

      setTrail(prev => {
        const updated = [...prev, newPoint];
        // Keep only recent points (last 800ms)
        return updated.filter(point => Date.now() - point.timestamp < 800);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {trail.map((point, index) => {
        const age = (Date.now() - point.timestamp) / 800;
        const opacity = Math.max(0, 1 - age);
        const size = Math.max(2, 8 * (1 - age));
        
        return (
          <div
            key={`${point.x}-${point.y}-${point.timestamp}`}
            className="absolute rounded-full bg-magical-glow pointer-events-none"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: size,
              height: size,
              opacity: opacity * 0.6,
              boxShadow: `0 0 ${size * 2}px hsl(var(--magical-glow))`,
              transition: 'all 0.1s ease-out'
            }}
          />
        );
      })}
    </div>
  );
};

export default CursorTrail;
