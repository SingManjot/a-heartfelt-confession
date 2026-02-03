import { useEffect, useState } from 'react';

interface Confetti {
  id: number;
  left: number;
  emoji: string;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

const emojis = ['🎉', '🎊', '💖', '💕', '✨', '🌸', '💗', '🎀', '💝', '❤️'];

const PartyConfetti = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    const items: Confetti[] = [];
    
    for (let i = 0; i < 60; i++) {
      items.push({
        id: i,
        left: Math.random() * 100,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        size: Math.random() * 25 + 20,
        duration: Math.random() * 2 + 2,
        delay: Math.random() * 0.5,
        rotation: Math.random() * 360,
      });
    }
    setConfetti(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((item) => (
        <div
          key={item.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
            transform: `rotate(${item.rotation}deg)`,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};

export default PartyConfetti;
