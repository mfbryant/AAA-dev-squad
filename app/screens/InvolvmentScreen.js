import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
<<<<<<< HEAD:app/assets/screens/InvolvementScreen.js
import { StatusBar } from 'expo-status-bar';

import Button from '../components/AppButton';
=======
import Button from '../assets/components/AppButton';
import Icon from '../assets/components/IconButton';
>>>>>>> cf402513763f27c949a8842317f291d85001aa2e:app/screens/InvolvmentScreen.js

function InvolvementScreen(props) {
    return (
        <ImageBackground style={styles.image} source={require('../assets/denny.jpg')} blurRadius={1}>
        <View style={styles.container}>
            <Button title="Internship Info" onPress={() => console.log('internship pressed')}/>
            <Button title="Involvement" onPress={() => console.log("involement pressed") }/>
            <Button title="Volunteer Info" onPress={() => console.log('volunteer pressed')}/>
            <Button title="Hiring Sponsors" onPress={() => console.log('hiring pressed')} />
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf:'center'
    },
    image: {
        flex: 1,
    },
    text: {
        flexShrink: 1,
    },
})

export default InvolvementScreen;