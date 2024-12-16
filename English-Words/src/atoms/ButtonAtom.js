import React from 'react';
import { Button, StyleSheet } from 'react-native';

export default function ButtonAtom({ title, onPress, disabled }) {
  return <Button title={title} onPress={onPress} disabled={disabled} />;
}

const styles = StyleSheet.create({});
