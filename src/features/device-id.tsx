import {View, Text, StyleSheet, NativeModules} from 'react-native';
import React from 'react';

const DeviceID: React.FC = () => {
  const deviceId = NativeModules.RNConfig.deviceId;

  return (
    <View style={styles.deviceIdContainer}>
      <Text style={styles.title}>Device ID</Text>
      <Text>{deviceId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  deviceIdContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },
});

export default DeviceID;
