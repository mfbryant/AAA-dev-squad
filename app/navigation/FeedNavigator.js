import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VolunteerDetailScreen from '../screens/VolunteerDetailScreen';
import VolunteerScreen from '../screens/VolunteerScreen';
import InvolvementScreen from '../screens/InvolvementScreen';
import SponsorsScreen from '../screens/SponsorsScreen';
import { MaterialTopTabView } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const FeedNavigator = () => (
        <Stack.Navigator mode='modal'>
            <Stack.Screen name='Involvement' component={InvolvementScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Sponsors' component={SponsorsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>

    // {/* <Stack.Navigator mode='modal'>
    //     <Stack.Screen name='Volunteer' component={VolunteerScreen} options={{ headerShown: false }} />
    //     <Stack.Screen name='VolunteerDetail' component={VolunteerDetailScreen} options={{ headerShown: false }} />
    // </Stack.Navigator> */}
);

export default FeedNavigator;