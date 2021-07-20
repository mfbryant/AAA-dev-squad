import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';

import ScanScreen from '../screens/ScanScreen';
import HomeScreen from '../screens/HomeScreen';
import Screen from '../assets/components/Screen';
import AuthNavigator from './AuthNavigator';
import PersonalEventsScreen from '../screens/PersonalEventsScreen';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './TabNavigator';
import YourEventsNavigator from './YourEventsNavigator';

const SwipeTab = createMaterialTopTabNavigator();

const BottomTab = createBottomTabNavigator();

const SwipeNavigator = () => (
    <>
       <StatusBar style='auto' />
        <SwipeTab.Navigator tabBarOptions={{ showLabel: false }} tabBarPosition="hidden" initialRouteName='Home'>
            <SwipeTab.Screen name='Scanner' component={ScanScreen} />
            <SwipeTab.Screen name='Home' component={TabNavigator} />
            <SwipeTab.Screen name='Events' component={YourEventsNavigator} />
        </SwipeTab.Navigator>
    </>
);

export default SwipeNavigator;