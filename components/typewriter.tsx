import { useState, useEffect } from "react";

export default function TypeWriter() {
  const words = ["softwares", "programs", "websites"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [wordChanging, setWordChanging] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (textIndex < currentWord.length) {
      const typingInterval = setInterval(() => {
        setTypedText((prevText) => prevText + currentWord[textIndex]);
        setTextIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearInterval(typingInterval);
    } else if (!wordChanging) {
      setWordChanging(true);
      setTimeout(() => {
        // Shift one letter to the left
        for (let i = currentWord.length; i >= 0; i--) {
          setTimeout(
            () => {
              setTypedText((prevText) => prevText.slice(0, -1));
            },
            (currentWord.length - i) * 100,
          ); // Adjust shifting speed
        }
        setTimeout(() => {
          setWordChanging(false);
          setTextIndex(0);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, currentWord.length * 100); // Delay before clearing
      }, 1000); // Delay before shifting
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWordIndex, textIndex, words, wordChanging]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      {typedText}
      <span className="animate-pulse">_</span>
    </div>
  );
}
