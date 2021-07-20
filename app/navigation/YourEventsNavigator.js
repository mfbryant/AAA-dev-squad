import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PersonalEventsScreen from '../screens/PersonalEventsScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import AddEventScreen from '../screens/AddEventScreen';

const Stack = createStackNavigator();

const YourEventsNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='Events' component={PersonalEventsScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Add Event' component={AddEventScreen} />
        <Stack.Screen name='Event Details' component={EventDetailsScreen} />
    </Stack.Navigator>
);

export default YourEventsNavigator;