import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Result: 0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  resultText: {
    fontSize: 24,
    color: 'orange',
  },
});

export default ResultScreen;