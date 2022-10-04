import React from 'react';
import {
  Button,
  NativeModules,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const deviceId = NativeModules.RNConfig.deviceId;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.deviceIdContainer}>
          <Text style={styles.title}>Mobile Test ALAMI</Text>
          <Text style={styles.subtitle}>Device ID:</Text>
          <Text>{deviceId}</Text>
        </View>
        <Button title="Add To Cart" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  deviceIdContainer: {
    marginBottom: 16,
  },
  mb: {
    marginBottom: 16,
  },
});

export default App;
