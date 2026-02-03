import { useEffect, useState } from 'react';

interface OpeningSectionProps {
  onContinue: () => void;
}

const OpeningSection = ({ onContinue }: OpeningSectionProps) => {
  const [showContent, setShowContent] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowContent(true), 500);
    const timer2 = setTimeout(() => setShowSubtext(true), 1500);
    const timer3 = setTimeout(() => setShowButton(true), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Decorative floating heart */}
      <div className="absolute top-20 right-10 text-4xl animate-float-gentle opacity-60">
        💗
      </div>
      <div className="absolute bottom-32 left-10 text-3xl animate-float-gentle opacity-50" style={{ animationDelay: '1s' }}>
        💝
      </div>

      <div className="text-center max-w-2xl">
        {showContent && (
          <h1 
            className="font-romantic text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-fade-in-up"
          >
            Hey… I've been wanting to ask you something{' '}
            <span className="inline-block animate-bounce-gentle">💭</span>
          </h1>
        )}

        {showSubtext && (
          <p 
            className="text-lg md:text-xl text-muted-foreground font-body opacity-0 animate-fade-in-up mb-12"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Something that's been on my mind for a while now...
          </p>
        )}

        {showButton && (
          <button
            onClick={onContinue}
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-full 
                       romantic-shadow hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in
                       hover:animate-pulse-glow"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="relative z-10">Continue reading...</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-rose-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        )}
      </div>

      {/* Scroll indicator */}
      {showButton && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-gentle opacity-50">
          <span className="text-2xl">↓</span>
        </div>
      )}
    </section>
  );
};

export default OpeningSection;
