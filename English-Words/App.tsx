import React, { useState } from 'react';
import FlashcardTemplate from './src/templates/FlashcardTemplate';
import words from './data.json';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTurkish, setShowTurkish] = useState(false);

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowTurkish(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowTurkish(false);
    }
  };

  const handleCardPress = () => {
    setShowTurkish(!showTurkish);
  };

  const currentWord = showTurkish ? words[currentIndex].meaning : words[currentIndex].word;
  const currentSentence = showTurkish ? words[currentIndex].sentence_tr : words[currentIndex].sentence_en;

  return (
    <FlashcardTemplate
      word={currentWord}
      sentence={currentSentence}
      showTurkish={showTurkish}
      onCardPress={handleCardPress}
      onPrevious={handlePrevious}
      onNext={handleNext}
      isPreviousDisabled={currentIndex === 0}
      isNextDisabled={currentIndex === words.length - 1}
    />
  );
}
