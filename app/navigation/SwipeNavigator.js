import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';

import ScanScreen from '../screens/ScanScreen';
import HomeScreen from '../screens/HomeScreen';
import Screen from '../assets/components/Screen';
import AuthNavigator from './AuthNavigator';
import PersonalEventsScreen from '../screens/PersonalEventsScreen';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const SwipeNavigator = () => (
    <>
        <StatusBar style='auto' />
        <Tab.Navigator tabBarOptions={{ showLabel: false }} tabBarPosition="hidden" initialRouteName='Home'>
            <Tab.Screen name='Scanner' component={ScanScreen} />
            <Tab.Screen name='Home' component={AuthNavigator} />
            <Tab.Screen name='PersonalEvent' component={PersonalEventsScreen} />
        </Tab.Navigator>
    </>
);

export default SwipeNavigator;