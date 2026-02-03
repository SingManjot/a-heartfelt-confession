import { useState, useRef, useCallback } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import OpeningSection from '@/components/OpeningSection';
import BuildUpSection from '@/components/BuildUpSection';
import EmotionalSection from '@/components/EmotionalSection';
import QuestionSection from '@/components/QuestionSection';
import CelebrationSection from '@/components/CelebrationSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  
  const buildUpRef = useRef<HTMLDivElement>(null);
  const emotionalRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContinue = useCallback(() => {
    setCurrentSection(1);
    setTimeout(() => scrollToRef(buildUpRef), 100);
  }, []);

  const handleBuildUpComplete = useCallback(() => {
    setCurrentSection(2);
    setTimeout(() => scrollToRef(emotionalRef), 500);
  }, []);

  const handleEmotionalComplete = useCallback(() => {
    setCurrentSection(3);
    setTimeout(() => scrollToRef(questionRef), 500);
  }, []);

  const handleYesClick = useCallback(() => {
    setShowCelebration(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (showCelebration) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        <CelebrationSection isVisible={true} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background floating hearts */}
      <FloatingHearts intensity="normal" />

      {/* Main content */}
      <div className="relative z-10">
        <OpeningSection onContinue={handleContinue} />

        <div ref={buildUpRef}>
          <BuildUpSection 
            isVisible={currentSection >= 1} 
            onComplete={handleBuildUpComplete}
          />
        </div>

        <div ref={emotionalRef}>
          <EmotionalSection 
            isVisible={currentSection >= 2} 
            onComplete={handleEmotionalComplete}
          />
        </div>

        <div ref={questionRef}>
          <QuestionSection 
            isVisible={currentSection >= 3} 
            onYesClick={handleYesClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
