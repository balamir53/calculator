const NumberButton: React.FC<{
  number: number;
  onPress: () => void;
}> = ({ number, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    margin: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default NumberButton;