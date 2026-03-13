"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TypewriterRotating = ({
  words,
  className,
  cursorClassName,
}: {
  words: string[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100 + Math.random() * 50); // Natural speed

        if (currentText === fullText) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500);
          setTypingSpeed(50);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          // Pause before next word
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

  return (
    <div className={cn("inline-flex items-center", className)}>
      <span className="whitespace-nowrap">
        {currentText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className={cn(
          "inline-block ml-1 w-[4px] h-[1em] bg-primary rounded-sm",
          cursorClassName
        )}
      />
    </div>
  );
};
