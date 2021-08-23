import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Button from '../assets/components/AppButton';

import SponsorsScreen from './SponsorsScreen';
import FeedNavigator from '../navigation/FeedNavigator';

function InvolvementScreen({ navigation }) {
    return (
        <ImageBackground style={styles.image} source={require('../assets/graphics/denny.jpg')} blurRadius={1}>
        <View style={styles.container}>
            <Button title="Internship Info" onPress={() => console.log('internship pressed')}/>
            <Button title="Hiring Sponsors" onPress={() => navigation.navigate('Sponsors')} />
            <Button title="Volunteer Information" onPress={() => navigation.navigate('FeedNav')} />
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf:'center',
        marginTop: 50
    },
    image: {
        flex: 1,
    },
    text: {
        flexShrink: 1,
    },
})

export default InvolvementScreen;