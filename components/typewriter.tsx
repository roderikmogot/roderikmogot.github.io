"use client";

import { useState, useEffect } from "react";

const words = ["softwares", "experiences", "websites", "products"];

export default function TypeWriter() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (!isDeleting && textIndex < currentWord.length) {
      const t = setTimeout(() => {
        setTypedText((prev) => prev + currentWord[textIndex]);
        setTextIndex((i) => i + 1);
      }, 90);
      return () => clearTimeout(t);
    }

    if (!isDeleting && textIndex === currentWord.length) {
      const t = setTimeout(() => setIsDeleting(true), 1400);
      return () => clearTimeout(t);
    }

    if (isDeleting && typedText.length > 0) {
      const t = setTimeout(() => {
        setTypedText((prev) => prev.slice(0, -1));
      }, 50);
      return () => clearTimeout(t);
    }

    if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setTextIndex(0);
      setCurrentWordIndex((i) => (i + 1) % words.length);
    }
  }, [currentWordIndex, textIndex, typedText, isDeleting]);

  return (
    <span>
      {typedText}
      <span className="animate-pulse text-violet-400">|</span>
    </span>
  );
}
