import React from 'react';
import { View, StyleSheet } from 'react-native';
import FlashcardOrganism from '../organisms/FlashcardOrganism';

export default function FlashcardTemplate(props) {
  return (
    <View style={styles.container}>
      <FlashcardOrganism {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});
