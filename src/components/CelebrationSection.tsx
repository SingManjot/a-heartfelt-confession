import { useEffect, useState } from 'react';
import FloatingHearts from './FloatingHearts';
import PartyConfetti from './PartyConfetti';

interface CelebrationSectionProps {
  isVisible: boolean;
}

const CelebrationSection = ({ isVisible }: CelebrationSectionProps) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showSecondary, setShowSecondary] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    setTimeout(() => setShowMessage(true), 500);
    setTimeout(() => setShowSecondary(true), 2000);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Party confetti explosion */}
      <PartyConfetti />
      
      {/* Celebration hearts burst */}
      <FloatingHearts intensity="celebration" />
      
      {/* Glowing background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30" />
      
      {/* Sparkle decorations */}
      <div className="absolute top-1/4 left-1/4 text-4xl animate-float-gentle">✨</div>
      <div className="absolute top-1/3 right-1/4 text-5xl animate-float-gentle" style={{ animationDelay: '1s' }}>💖</div>
      <div className="absolute bottom-1/3 left-1/3 text-4xl animate-float-gentle" style={{ animationDelay: '0.5s' }}>💕</div>
      <div className="absolute bottom-1/4 right-1/3 text-3xl animate-float-gentle" style={{ animationDelay: '1.5s' }}>🌸</div>

      <div className="relative z-10 text-center max-w-3xl">
        {showMessage && (
          <div className="animate-fade-in-up">
            <div className="text-8xl mb-8 animate-heartbeat">
              💖
            </div>
            
            <h2 className="font-romantic text-5xl md:text-7xl lg:text-8xl text-foreground mb-6">
              You just made my day...
            </h2>
            
            <p className="font-romantic text-4xl md:text-5xl lg:text-6xl text-primary mb-8">
              No, my whole year! ❤️
            </p>
          </div>
        )}

        {showSecondary && (
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="font-body text-xl md:text-2xl text-foreground">
              I promise to make every moment with you special.
            </p>
            
            <p className="font-body text-xl md:text-2xl text-foreground">
              To make you laugh, to hold you close,
            </p>
            
            <p className="font-body text-xl md:text-2xl text-primary font-semibold">
              and to love you more each day. 💕
            </p>

            <div className="pt-8 flex justify-center gap-4 text-4xl">
              <span className="animate-bounce-gentle">🥰</span>
              <span className="animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>💖</span>
              <span className="animate-bounce-gentle" style={{ animationDelay: '0.4s' }}>🌹</span>
            </div>

            <div className="pt-12">
              <p className="font-romantic text-3xl md:text-4xl text-muted-foreground">
                Forever yours...
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CelebrationSection;
