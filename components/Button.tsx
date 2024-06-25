import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function Button() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#E88810',
    padding: 12,
    borderRadius: 12, 
    alignItems: 'center',
    width: 300, 
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
