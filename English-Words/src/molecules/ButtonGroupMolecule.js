import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonAtom from '../atoms/ButtonAtom';

export default function ButtonGroupMolecule({ onPrevious, onNext, isPreviousDisabled, isNextDisabled }) {
  return (
    <View style={styles.container}>
      <ButtonAtom title="Geri" onPress={onPrevious} disabled={isPreviousDisabled} />
      <ButtonAtom title="İleri" onPress={onNext} disabled={isNextDisabled} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
