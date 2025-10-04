const InputField: React.FC<Props> = ({ value, onChangeText, placeholder }) => {
  const [error, setError] = useState("");

  const handleTextChange = (text: string) => {
    if (text.length > 10) {
      setError("Input must be less than 10 characters");
    } else {
      setError("");
      onChangeText(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleTextChange}
        placeholder={placeholder}
        placeholderTextColor={theme === 'dark' ? colors[0] : colors[1]}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: theme === 'dark' ? colors[0] : colors[1],
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});

export default InputField;