import { StatusBar } from "expo-status-bar";
import React from "react";
import * as Splash from "expo-splash-screen";
import Agenda from "./app/screens/CalendarScreen";
import Internships from "./app/screens/InternshipScreen";
import Involvement from "./app/screens/InvolvementScreen";
import Volunteer from "./app/screens/VolunteerScreen";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // console.log("app be working");
  Splash.preventAutoHideAsync();
  setTimeout(Splash.hideAsync, 2000);
  return <Volunteer />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
