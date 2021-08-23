import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VolunteerDetailScreen from '../screens/VolunteerDetailScreen';
import VolunteerScreen from '../screens/VolunteerScreen';
import InvolvementScreen from '../screens/InvolvementScreen';
import SponsorsScreen from '../screens/SponsorsScreen';
import { MaterialTopTabView } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedNavigator from './FeedNavigator';

const Stack = createStackNavigator();

const InvolvementNavigator = () => (
    <Stack.Navigator mode='modal'>
    <Stack.Screen name='Involvement' component={InvolvementScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Sponsors' component={SponsorsScreen} options={{ headerShown: false }} />
    <Stack.Screen name='FeedNav' component={FeedNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
);

export default InvolvementNavigator;