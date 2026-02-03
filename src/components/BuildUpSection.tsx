import { useEffect, useState } from 'react';

interface BuildUpSectionProps {
  isVisible: boolean;
  onComplete: () => void;
}

const messages = [
  "I tried to think of the perfect words…",
  "And the perfect moment…",
  "Something grand and unforgettable…",
  "But then I realized…",
  "The best moments are the simple ones.",
  "Like when you smile…",
  "Or when you laugh at my silly jokes…",
  "Every moment with you feels special.",
];

const BuildUpSection = ({ isVisible, onComplete }: BuildUpSectionProps) => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [allComplete, setAllComplete] = useState(false);

  useEffect(() => {
    // Prevent rerunning if already showing messages
    if (!isVisible || visibleMessages.length > 0) return;

    messages.forEach((_, index) => {
      setTimeout(() => {
        setVisibleMessages(prev =>
          prev.includes(index) ? prev : [...prev, index]
        );
        if (index === messages.length - 1) {
          setTimeout(() => {
            setAllComplete(true);
            setTimeout(onComplete, 1500);
          }, 1000);
        }
      }, index * 1200);
    });
  }, [isVisible, visibleMessages.length, onComplete]);

  if (!isVisible) return null;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-xl text-center space-y-6">
        {messages.map((message, index) => (
          <p
            key={index}
            className={`font-body text-xl md:text-2xl text-foreground 
                       ${visibleMessages.includes(index) 
                         ? 'animate-smooth-reveal' 
                         : 'opacity-0'}`}
            style={{ 
              animationDelay: `${index * 0.08}s`,
              color: index >= messages.length - 2 ? 'hsl(var(--primary))' : undefined,
              fontWeight: index >= messages.length - 2 ? 600 : 400,
            }}
          >
            {message}
          </p>
        ))}

        {/* Heartbeat decoration */}
        {visibleMessages.length > 4 && (
          <div className="pt-8 animate-heartbeat text-4xl">
            💓
          </div>
        )}
      </div>
    </section>
  );
};

export default BuildUpSection;
