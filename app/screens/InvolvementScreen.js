import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Button from '../assets/components/AppButton';


function InvolvementScreen(props) {
    return (
        <ImageBackground style={styles.image} source={require('../assets/graphics/denny.jpg')} blurRadius={1}>
        <View style={styles.container}>
            <Button title="Internship Info" onPress={() => console.log('internship pressed')}/>
            {/* <Button title="Involvement" onPress={() => console.log("involement pressed") }/> */}
            <Button title="Volunteer Info" onPress={() => console.log('volunteer pressed')}/>
            <Button title="Hiring Sponsors" onPress={() => console.log('hiring pressed')} />
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