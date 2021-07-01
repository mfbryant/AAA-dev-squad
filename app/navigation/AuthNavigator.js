import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CalendarScreen from '../screens/CalendarScreen';
import InternshipScreen from '../screens/InternshipScreen';
import InvolvementScreen from '../screens/InvolvementScreen';
// import Screen from '../assets/components/Screen';
import VolunteerScreen from '../screens/VolunteerScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Event Calendar"
            component={CalendarScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Internships"
            component={InternshipScreen}
        />
        <Stack.Screen 
            name="Involvement"
            component={InvolvementScreen}
        />
        <Stack.Screen 
            name="Volunteer Opportunities"
            component={VolunteerScreen}
        />
    </Stack.Navigator>
);

export default AuthNavigator; 