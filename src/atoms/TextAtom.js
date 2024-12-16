import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TextAtom({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
