import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CalendarScreen from '../screens/CalendarScreen';
import FeedNavigator from './FeedNavigator';
import OrgScreen from '../screens/OrgScreen';
import InvolvementScreen from '../screens/InvolvementScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator initialRouteName='Calendar'>
        <Tab.Screen name='Calendar' component={CalendarScreen}
            options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='calendar' size={size} color={color} />
            }} />
        <Tab.Screen name='Volunteer' component={FeedNavigator}
            options={{ tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='hammer' size={size} color={color} /> }} />
        <Tab.Screen name='Organizations' component={OrgScreen}
            options={{ tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='group' size={size} color={color} /> }} />
        <Tab.Screen name='Involvement' component={FeedNavigator}
            options={{ tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='door-open' size={size} color={color} /> }} />
    </Tab.Navigator>
);

export default TabNavigator;