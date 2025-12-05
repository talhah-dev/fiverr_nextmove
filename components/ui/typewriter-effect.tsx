"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const word = words[currentWordIndex].text;
      if (currentCharIndex < word.length) {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev + word[currentCharIndex]);
          setCurrentCharIndex((prev) => prev + 1);
        }, 50); // Adjust typing speed here
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentWordIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
          setDisplayedText((prev) => prev + " ");
        }, 500); // Delay before next word
        return () => clearTimeout(timer);
      }
    }
  }, [currentWordIndex, currentCharIndex, words]);

  return (
    <div className={cn("flex items-center justify-center w-full", className)}>
      <motion.div
        className="overflow-hidden"
        initial={{ width: "0%" }}
        animate={{ width: "fit-content" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold whitespace-nowrap text-center">
          {displayedText}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "block rounded-sm w-[4px] h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 bg-orange-500 ml-2",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};