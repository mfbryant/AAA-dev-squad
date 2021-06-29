import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Agenda from './app/assets/screens/CalendarScreen';
import { StyleSheet, Text, View } from 'react-native';
import InvolvmentScreen from './app/assets/screens/InvolvmentScreen';

export default function App() {
  // console.log("app be working");

  return (
    <InvolvmentScreen />
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
