import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import PocketMarathonNavigator from "./Navigation/PocketMarathonNagivator";
export default function App() {
  return(
      <PocketMarathonNavigator style={styles.container}/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
