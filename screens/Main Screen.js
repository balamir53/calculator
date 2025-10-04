import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }) => {
  const [input, setInput] = useState('');
  
  const handleButtonPress = (value) => {
    setInput(input + value);
  };
  
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };
  
  const handleClear = () => {
    setInput('');
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        editable={false}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        {/* Include more buttons for other digits and operations */}
      </View>
      <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
        <Text style={styles.calculateButtonText}>=</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.clearButtonText}>C</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: 'orange',
    color: 'black',
    fontSize: 20,
    textAlign: 'right',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
  },
  calculateButton: {
    width: '80%',
    height: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  calculateButtonText: {
    color: 'black',
    fontSize: 24,
  },
  clearButton: {
    width: '80%',
    height: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  clearButtonText: {
    color: 'black',
    fontSize: 24,
  },
});

export default MainScreen;