import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import TextAtom from '../atoms/TextAtom';

export default function CardMolecule({ word, sentence, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <TextAtom style={styles.word}>{word}</TextAtom>
      <TextAtom style={styles.sentence}>{sentence}</TextAtom>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  word: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sentence: {
    fontSize: 16,
    textAlign: 'center',
  },
});
