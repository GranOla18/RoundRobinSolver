import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import StartScreen from './screens/StartScreen';
import Solver from './screens/SolverScreen';
import logic from './logic'

export default function App() {

  let content =<logic/>

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
