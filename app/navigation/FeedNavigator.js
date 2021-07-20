import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VolunteerDetailScreen from '../screens/VolunteerDetailScreen';
import { startClock } from 'react-native-reanimated';
import VolunteerScreen from '../screens/VolunteerScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode='modal'>
        <Stack.Screen name='Volunteer' component={VolunteerScreen} options={{ headerShown: false }} />
        <Stack.Screen name='VolunteerDetail' component={VolunteerDetailScreen} />
    </Stack.Navigator>
);

export default FeedNavigator;