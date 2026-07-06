import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for exact layout/kerning */}
      <span className="opacity-0 select-none pointer-events-none">{char}</span>
      {/* Absolutely positioned animated span */}
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Split into words to preserve word boundaries for proper line wrapping
  const words = text.split(' ');
  const totalChars = text.replace(/ /g, '').length;
  let charIndex = 0;

  return (
    <p ref={containerRef} className={`whitespace-normal ${className}`}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const wordElement = (
          // whitespace-nowrap ensures the whole word wraps together — no mid-word breaks
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {wordChars.map((char) => {
              const index = charIndex++;
              const start = (index / totalChars) * 0.85;
              const end = start + 0.15;
              return (
                <Character
                  key={index}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );

        // Add a space after each word except the last
        return (
          <React.Fragment key={wordIndex}>
            {wordElement}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </React.Fragment>
        );
      })}
    </p>
  );
};
