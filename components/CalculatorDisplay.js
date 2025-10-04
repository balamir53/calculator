import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CalculatorDisplayProps {
  value: string;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  display: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default CalculatorDisplay;