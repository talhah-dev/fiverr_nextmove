'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Users, TrendingUp, BarChart3 } from 'lucide-react';

const wordIcons = {
  Umsatz: BarChart3,
  Reichweite: TrendingUp,
  Notartermine: Users,
};

export const FlipWords = ({
  words,
  duration = 3000,
  className,
  onWordClick,
}: {
  words: string[];
  duration?: number;
  className?: string;
  onWordClick?: (word: string) => void;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isAnimating && isMounted) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation, isMounted]);

  if (!isMounted) {
    return <span className={cn('inline-block', className)} suppressHydrationWarning>{words[0]}</span>;
  }

  const IconComponent = wordIcons[currentWord as keyof typeof wordIcons];

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 2,
          position: 'absolute',
        }}
        className={cn(
          'z-10 inline-block relative text-left text-[#ff5500] w-full font-light cursor-pointer hover:text-[#ff8040] transition-colors',
          className
        )}
        style={{
          textShadow: '2px 2px 6px rgba(0,0,0,0.9), 0 0 20px rgba(255,85,0,0.6)',
          lineHeight: '1',
          verticalAlign: 'text-bottom',
          display: 'inline-block',
          marginBottom: '-0.15em'
        }}
        key={currentWord}
        onClick={() => onWordClick?.(currentWord)}
      >
        <div style={{ display: 'inline-block', lineHeight: '1' }}>
          {currentWord.split(' ').map((word, wordIndex) => (
            <motion.span
              key={word + wordIndex}
              initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: wordIndex * 0.3,
                duration: 0.3,
              }}
              className="inline whitespace-nowrap"
              style={{ lineHeight: '1' }}
            >
              {word.split('').map((letter, letterIndex) => (
                <motion.span
                  key={word + letterIndex}
                  initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    delay: wordIndex * 0.3 + letterIndex * 0.05,
                    duration: 0.2,
                  }}
                  className="inline"
                  style={{ lineHeight: '1' }}
                >
                  {letter}
                </motion.span>
              ))}
              <span className="inline">&nbsp;</span>
            </motion.span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};