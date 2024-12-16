import React from 'react';
import CardMolecule from '../molecules/CardMolecule';
import ButtonGroupMolecule from '../molecules/ButtonGroupMolecule';

export default function FlashcardOrganism({ word, sentence, showTurkish, onCardPress, onPrevious, onNext, isPreviousDisabled, isNextDisabled }) {
  return (
    <>
      <CardMolecule word={word} sentence={sentence} onPress={onCardPress} />
      <ButtonGroupMolecule
        onPrevious={onPrevious}
        onNext={onNext}
        isPreviousDisabled={isPreviousDisabled}
        isNextDisabled={isNextDisabled}
      />
    </>
  );
}
