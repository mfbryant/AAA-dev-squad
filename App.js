import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Agenda from './app/screens/CalendarScreen';
import { StyleSheet, Text, View } from 'react-native';

import IntershipScreen from './app/screens/IntershipScreen';

export default function App() {
  // console.log("app be working");

  return (
    <IntershipScreen />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
