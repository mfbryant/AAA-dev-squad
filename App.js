import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

//https://github.com/mfbryant/AAA-dev-squad

import * as Splash from "expo-splash-screen";
import CalendarScreen from "./app/screens/CalendarScreen";
import Internships from "./app/screens/InternshipScreen";
import Involvement from "./app/screens/InvolvementScreen";
import Volunteer from "./app/screens/VolunteerScreen";


export default function App() {
  // console.log("app be working");
  Splash.preventAutoHideAsync();
  setTimeout(Splash.hideAsync, 2000);
  return <CalendarScreen />;
  //return <Volunteer />; 
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
