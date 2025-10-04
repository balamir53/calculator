```jsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type OperationButtonProps = {
  operation: string;
  onPress: () => void;
};

const OperationButton: React.FC<OperationButtonProps> = ({ operation, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{operation}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OperationButton;
```