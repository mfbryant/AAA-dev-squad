import { StatusBar } from "expo-status-bar";
import React from "react";
import { 
  StyleSheet, 
  Text, 
  View 
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as Splash from "expo-splash-screen";
import * as SQLite from 'expo-sqlite';

import CalendarScreen from "./app/screens/CalendarScreen";
import Internships from "./app/screens/InternshipScreen";
import Involvement from "./app/screens/InvolvementScreen";
import OrgScreen from "./app/screens/OrgScreen";
import Volunteer from "./app/screens/VolunteerScreen";

// function openDatabase() {
//   if (Platform.OS === "web") {
//     return {
//       transaction: () => {
//         return {
//           executeSql: () => {},
//         };
//       },
//     };
//   }

//   const db = SQLite.openDatabase("AAA.db");
//   return db;
// }

// const db = openDatabase();


export default function App() {
  // console.log("app be working");
  Splash.preventAutoHideAsync();
  setTimeout(Splash.hideAsync, 2000);
  return <OrgScreen />; 
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
