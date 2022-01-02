import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {PocketMarathonProvider} from "../PocketMarathon/Context/RunPaceContext";

import PocketMarathonNavigator from "./Navigation/PocketMarathonNagivator";
export default function App() {
  return(<PocketMarathonProvider>
      <PocketMarathonNavigator style={styles.container}/>
      </PocketMarathonProvider>
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
