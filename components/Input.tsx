import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export default function Input() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#f0f0f0', 
    width: 300,
    height: 50, 
    padding: 10,
    borderRadius: 12,
    borderColor: '#ccc', 
    borderWidth: 1,
  },
});
