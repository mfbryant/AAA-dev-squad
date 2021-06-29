import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

import Icon from '../components/IconButton';

function InternshipScreen(props) {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
               <SafeAreaView>
                   <View style={styles.icon}>
                    <Icon 
                    name='chevron-down' 
                    size={40} 
                    color="white" 
                    onPress={() => console.log('exit pressed')}/>
                   </View>
                <Text 
                style={styles.textImage}
                >Click on the {<Image source={require('../assets/alabama.jpg')} style={styles.image}/>} to 
                get more info!
                </Text>
               </SafeAreaView>
               <TouchableOpacity style={styles.imageContainer} onPress={() => console.log('A Pressed')}>
                   <Image source={require('../assets/alabama.jpg')}/>
               </TouchableOpacity>
               <Text style={styles.improve}>This tab is a work in progress, 
               we hope to bring you an extremely awesome feature soon, Roll Tide!</Text>
                <Image source={require('../assets/alabamaElephant.jpg')} style={{height: 50, width: 50, alignSelf: 'center', paddingTop: 5}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    icon: {
        alignItems: 'flex-end',
    },
    imageContainer: {
        alignItems: 'center',
        height: Image.length,
        marginTop: 30,
        width: '100%',
    },
    image: {
        height: 25,
        width: 25
    },
    improve: {
        color: 'white',
        fontSize: 30,
        paddingTop: 20,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textImage: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold'
    },
})

export default InternshipScreen;