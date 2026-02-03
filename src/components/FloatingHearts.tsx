import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const FloatingHearts = ({ intensity = 'normal' }: { intensity?: 'normal' | 'celebration' }) => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const heartCount = intensity === 'celebration' ? 50 : 15;
    const newHearts: Heart[] = [];
    
    for (let i = 0; i < heartCount; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        size: intensity === 'celebration' 
          ? Math.random() * 30 + 15 
          : Math.random() * 20 + 10,
        duration: intensity === 'celebration' 
          ? Math.random() * 3 + 2 
          : Math.random() * 8 + 6,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    setHearts(newHearts);
  }, [intensity]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up text-primary"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
