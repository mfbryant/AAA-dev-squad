import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Splash from "expo-splash-screen";
import * as SQLite from "expo-sqlite";

import AuthNavigator from "./app/navigation/AuthNavigator";
import CalendarScreen from "./app/screens/CalendarScreen";
import HomeScreen from "./app/screens/HomeScreen";
import Internships from "./app/screens/InternshipScreen";
import Involvement from "./app/screens/InvolvementScreen";
import OrgScreen from "./app/screens/OrgScreen";
import Volunteer from "./app/screens/VolunteerScreen";
import SponsorsScreen from "./app/screens/SponsorsScreen";
import ScanScreen from "./app/screens/ScanScreen";
import SwipeNavigator from "./app/navigation/SwipeNavigator";
import LoginScreen from "./app/screens/LoginScreen";
import InvolvementScreen from "./app/screens/InvolvementScreen";

export default function App() {
  // console.log("app be working");
  Splash.preventAutoHideAsync();
  setTimeout(Splash.hideAsync, 2000);

  return (
    // <LoginScreen />

    <NavigationContainer>
      <SwipeNavigator />
    </NavigationContainer>
  );

  // return <HomeScreen />;
  // return <CalendarScreen />;
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
