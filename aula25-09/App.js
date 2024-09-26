import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Calculator from './components/Calculadora';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
  },
});

export default App;
