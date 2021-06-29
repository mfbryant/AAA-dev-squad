import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Agenda from './app/screens/CalendarScreen';
import { StyleSheet, Text, View } from 'react-native';

import InternshipScreen from './app/screens/InternshipScreen';
import InvolvementScreen from './app/screens/InvolvementScreen';
import CalendarScreen from './app/screens/CalendarScreen';
import Splash from './app/screens/Splash';
import VolunteerScreen from './app/screens/VolunteerScreen';


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
