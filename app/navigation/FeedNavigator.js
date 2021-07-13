import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VolunteerDetailScreen from '../screens/VolunteerDetailScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode='modal'>
        <Stack.Screen name='VolunteerDetail' component={VolunteerDetailScreen}/>
    </Stack.Navigator>
);

export default FeedNavigator;