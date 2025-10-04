import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextDisplay: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Text style={styles.text}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextDisplay;