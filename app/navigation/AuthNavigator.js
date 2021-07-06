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

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <>
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
        />
        <Stack.Screen
            name="Calendar"
            component={CalendarScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen 
            name="Involvement"
            component={InvolvementScreen}
            />
        <Stack.Screen 
            name="Organizations"
            component={OrgScreen}
            />
        <Stack.Screen 
            name="Volunteer"
            component={VolunteerScreen}
            />
</Stack.Navigator>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="Calendar"
      component={CalendarScreen}
      options={{ headerShown: false }}
      />
    <Stack.Screen name="Involvement" component={InvolvementScreen} />
    <Stack.Screen name="Organizations" component={OrgScreen} />
    <Stack.Screen name="Volunteer" component={VolunteerScreen} />
    <Stack.Screen name="Scanner" component={ScanScreen} />
  </Stack.Navigator>
  </>
);

export default AuthNavigator;
