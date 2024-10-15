import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const ComponentSelector = ({ name, options, selectedOption, onSelect }) => {
  return (
    <View style={styles.componentSelector}>
      <Text style={styles.heading}>{name}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onSelect(option)}
          style={[
            styles.button,
            { backgroundColor: selectedOption?.name === option.name ? 'lightgreen' : 'lightgrey' },
          ]}
        >
          <Text style={styles.buttonText}>
            {option.name} - {option.price} HUF
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const App = () => {
  const [processor, setProcessor] = useState(null);
  const [memory, setMemory] = useState(null);

  const processors = [
    { name: 'Intel i5', price: 50000 },
    { name: 'Intel i7', price: 75000 },
  ];

  const memories = [
    { name: '8GB RAM', price: 12000 },
    { name: '16GB RAM', price: 25000 },
  ];

  const totalPrice = (processor?.price || 0) + (memory?.price || 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Számítógép összeszerelő app</Text>
      <ComponentSelector
        name="Processzor"
        options={processors}
        selectedOption={processor}
        onSelect={setProcessor}
      />
      <ComponentSelector
        name="Memória"
        options={memories}
        selectedOption={memory}
        onSelect={setMemory}
      />
      <Text style={styles.totalPrice}>Teljes ár: {totalPrice} HUF</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  componentSelector: {
    marginBottom: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 22,
    marginTop: 20,
  },
});
export default App;