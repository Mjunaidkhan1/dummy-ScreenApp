import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Button from './src/components/buttons/Button';
import State from './src/components/buttons/State';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor="#288FD4" />
      <State />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#288FD4",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
