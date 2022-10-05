import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Cart from './features/carts';
import DeviceId from './features/device-id';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Mobile Test ALAMI</Text>
        <DeviceId />
        <Cart />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default App;
