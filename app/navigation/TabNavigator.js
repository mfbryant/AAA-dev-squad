import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

import CalendarScreen from '../screens/CalendarScreen';
import MoreScreen from '../screens/MoreScreen';
import FeedNavigator from './FeedNavigator';
import OrgScreen from '../screens/OrgScreen';
import InvolvementScreen from '../screens/InvolvementScreen';
import InvolvementNavigator from './InvolvementNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator initialRouteName='Calendar'>
        <Tab.Screen name='Calendar' component={CalendarScreen}
            options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='calendar' size={size} color={color} />
            }} />
        <Tab.Screen name='Involvement' component={InvolvementNavigator}
            options={{ tabBarIcon: ({ color, size }) => <SimpleLineIcons name='people' size={size} color={color} /> }} />
        <Tab.Screen name='Organizations' component={OrgScreen}
            options={{ tabBarIcon: ({ color, size }) => <SimpleLineIcons name='organization' size={size} color={color} /> }} />
        <Tab.Screen name='More' component={MoreScreen}
            options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name='more-horiz' size={size} color={color} /> }} />
    </Tab.Navigator>
);

export default TabNavigator;