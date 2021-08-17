import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import * as GoogleSignIn from 'expo-google-sign-in';

import Screen from "../assets/components/Screen";
import AffinityText from "../assets/components/AffinityText";
import Icon from '../assets/components/IconButton';
import { BottomTabBarHeightContext } from "@react-navigation/bottom-tabs";



function LoginScreen() {

  // const handleMessage = (message, type ) => {
  //   setMessage(message);
  //   setMessageType(type);
  // }

  const handleOnPress = () => {
    const config = GoogleSignIn.initAsync({
      scopes: ['email']
    });

    GoogleSignIn.signInAsync(config).then((result) => 
    {
      const {type, user} = result;

      if(type === 'success'){
        const {firstName, lastName} = user;
      // handleMessage('Google signin sucess', 'Success');
      } else {
        // handleMessage('Google Sign in was canceled')
      }
    })
    .catch(error => {
      console.log(error);
      // handleMessage('An error occurred. Check your network and try again');
    }) 
  }
 
  return (
    <Screen>
      <StatusBar style='auto'/>
      <AffinityText style={styles.text}>Aims</AffinityText>
      <TouchableOpacity style={styles.button} onPress={handleOnPress} >
        <View style={{ flexDirection: 'row' }} >
          <AntDesign name='google' size={34} color={'#fff'} />
          <Text style={styles.characters}>Sign In With Google</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.alabama} >The University of Alabama {<MaterialCommunityIcons name='registered-trademark'/>}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
alabama: {
  textAlign: 'center',
  textAlignVertical: 'bottom',
  fontWeight: 'bold',
  marginTop: 425,

},
button: {
alignSelf: 'center',
borderRadius: 20,
backgroundColor: 'crimson',
height: 55,
marginTop: 125,
padding: 10,
width: '90%',
flexDirection: 'row'
},
text: {
textAlign: 'center',
fontSize: 125,
marginTop: 20,
},
characters: {
  fontSize: 27, 
  color: '#fff', 
  marginLeft: 10, 
  fontWeight: '500',
  textAlignVertical: 'center',
  paddingLeft: 10
}
});

export default LoginScreen;
