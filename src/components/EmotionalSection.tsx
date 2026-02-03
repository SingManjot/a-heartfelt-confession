import { useEffect, useState } from 'react';

interface EmotionalSectionProps {
  isVisible: boolean;
  onComplete: () => void;
}

const EmotionalSection = ({ isVisible, onComplete }: EmotionalSectionProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 2000),
      setTimeout(() => setStage(3), 4000),
      setTimeout(() => {
        setStage(4);
        setTimeout(onComplete, 1500);
      }, 6000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      {/* Floating decorations */}
      <div className="absolute top-1/4 left-10 text-5xl animate-float-gentle opacity-40">✨</div>
      <div className="absolute bottom-1/4 right-10 text-4xl animate-float-gentle opacity-40" style={{ animationDelay: '2s' }}>💫</div>

      <div className="relative z-10 max-w-2xl text-center">
        {stage >= 1 && (
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up">
            There's something I need you to know...
          </p>
        )}

        {stage >= 2 && (
          <h2 
            className="font-romantic text-4xl md:text-6xl lg:text-7xl text-foreground mb-8 animate-fade-in-up leading-relaxed"
            style={{ animationDelay: '0.2s' }}
          >
            You make my heart skip a beat
          </h2>
        )}

        {stage >= 3 && (
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="font-body text-xl md:text-2xl text-foreground">
              Your smile lights up my darkest days.
            </p>
            <p className="font-body text-xl md:text-2xl text-foreground">
              Your laugh is my favorite melody.
            </p>
            <p className="font-body text-xl md:text-2xl text-primary font-semibold">
              You are my favorite person in this world.
            </p>
          </div>
        )}

        {stage >= 4 && (
          <div className="mt-12 animate-heartbeat">
            <span className="text-6xl">💖</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmotionalSection;
