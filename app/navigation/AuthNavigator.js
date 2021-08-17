import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CalendarScreen from "../screens/CalendarScreen";
import HomeScreen from "../screens/HomeScreen";
import InternshipScreen from "../screens/InternshipScreen";
import InvolvementScreen from "../screens/InvolvementScreen";
// import Screen from '../assets/components/Screen';
import VolunteerScreen from "../screens/VolunteerScreen";
import OrgScreen from "../screens/OrgScreen";
import ScanScreen from "../screens/ScanScreen";
import PersonalEventsScreen from "../screens/PersonalEventsScreen";
import EventDetailsScreen from "../screens/EventDetailsScreen";
import AddEventScreen from "../screens/AddEventScreen";
import FeedNavigator from "./FeedNavigator";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Involvement" component={FeedNavigator} />
      <Stack.Screen name="Organizations" component={OrgScreen} />
      <Stack.Screen name="Volunteer" component={FeedNavigator} />
      <Stack.Screen name="Scanner" component={ScanScreen} />
      <Stack.Screen name="Events" component={PersonalEventsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Event Details" component={EventDetailsScreen} />
      <Stack.Screen name="Add Event" component={AddEventScreen} />
    </Stack.Navigator>
  </>
);

export default AuthNavigator;
