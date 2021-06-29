import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Agenda from './app/assets/screens/CalendarScreen';
import { StyleSheet, Text, View } from 'react-native';

import VolunteerScreen from './app/assets/screens/VolunteerScreen';
import InternshipScreen from './app/assets/screens/InternshipScreen';
import InvolvementScreen from './app/assets/screens/InvolvementScreen';

export default function App() {
  // console.log("app be working");

  return (
    <VolunteerScreen />
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
