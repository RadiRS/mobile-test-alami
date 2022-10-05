import React from 'react';
import {SafeAreaView, StyleSheet, Text, ScrollView} from 'react-native';

import Cart from './features/carts';
import DeviceId from './features/device-id';
import ProgressBar from './features/progress-bar';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.title}>Mobile Test ALAMI</Text>
        <DeviceId />
        <Cart />
        <ProgressBar />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default App;
