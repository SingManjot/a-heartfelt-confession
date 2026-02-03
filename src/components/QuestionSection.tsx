import { useState, useCallback, useRef, useEffect } from 'react';

interface QuestionSectionProps {
  isVisible: boolean;
  onYesClick: () => void;
}

const QuestionSection = ({ isVisible, onYesClick }: QuestionSectionProps) => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [escapeCount, setEscapeCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setShowQuestion(true), 800);
    }
  }, [isVisible]);

  const escapeMessages = [
    "Hmm… 🤔",
    "Think again? 🥺",
    "Pretty please? 🙏",
    "One more chance? 💕",
    "I won't give up! 💪",
    "Okay fine... 😢",
    "Just kidding! 😄",
    "Say yes! 💖",
  ];

  const handleNoHover = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const maxX = container.width - 150;
    const maxY = container.height - 60;
    
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    
    setNoButtonPosition({ x: newX, y: newY });
    setEscapeCount(prev => Math.min(prev + 1, escapeMessages.length - 1));
  }, []);

  if (!isVisible) return null;

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative"
    >
      {/* Decorative hearts */}
      <div className="absolute top-20 left-1/4 text-4xl animate-heartbeat opacity-60">💗</div>
      <div className="absolute top-32 right-1/4 text-3xl animate-heartbeat opacity-50" style={{ animationDelay: '0.5s' }}>💓</div>
      <div className="absolute bottom-40 left-1/3 text-3xl animate-float-gentle opacity-40">💘</div>

      {showQuestion && (
        <div className="text-center max-w-3xl animate-fade-in-up">
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-6">
            So here it goes...
          </p>

          <h2 className="font-romantic text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 animate-pulse-glow rounded-3xl p-4">
            Will you be my Valentine?
          </h2>
          
          <div className="text-6xl mb-12 animate-heartbeat">
            💖
          </div>

          {/* Buttons container */}
          <div className="relative h-40 flex items-center justify-center gap-8">
            {/* Yes Button */}
            <button
              onClick={onYesClick}
              className="px-12 py-5 bg-primary text-primary-foreground font-body font-bold text-xl rounded-full 
                         romantic-shadow hover:scale-110 transition-all duration-300 hover:animate-pulse-glow
                         relative z-10"
            >
              Yes 🥰
            </button>

            {/* No/Hmm Button - escapes on hover */}
            <button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="px-10 py-5 bg-muted text-muted-foreground font-body font-semibold text-lg rounded-full 
                         transition-all duration-300 hover:bg-muted/80"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              {escapeMessages[escapeCount]}
            </button>
          </div>

          {escapeCount > 2 && (
            <p className="mt-8 text-muted-foreground font-body text-sm animate-fade-in">
              (The button seems to have a mind of its own... 😅)
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default QuestionSection;
