import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Google from 'expo-auth-session/providers/google';

import Screen from "../assets/components/Screen";
import AffinityText from "../assets/components/AffinityText";



function LoginScreen({ naviagtion }) { 
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const [response, request, promptAsnyc] = Google.useAuthRequest({
      responseType: 'id_token',
      expoClientId: '425541249408-3plajqimd7pt1ne62ggngv63lkgf7ak1.apps.googleusercontent.com',
      iosClientId: '425541249408-cg5c17mv09k3141e6f51p55j256tjq4v.apps.googleusercontent.com',
      scopes: ['email', 'profile']
    });

     React.useEffect(() => {
      if(response?.type === 'success') {
        const { authentication } = response;
        console.log(response.scopes.toString());
        navigation.navigate('Home', { authentication });
      }
      else {
        console.log('something else happened')
      }
    }, [response]);
    
    return (
    <Screen>
      <StatusBar style='auto'/>
      {/* <AffinityText style={styles.text}>Aims</AffinityText> */}
      <Image source={require('../assets/graphics/Aims-Login.jpg')} resizeMode='contain' style={styles.aims} />
      <TouchableOpacity style={styles.button} onPress={promptAsnyc}>
        <View style={{ flexDirection: 'row' }}>
          <AntDesign name='google' size={34} color={'#fff'} />
          <Text style={styles.characters}>Sign In With Google</Text>
        </View>
      </TouchableOpacity>
      <Image source={require('../assets/graphics/ua-watermark.png')} resizeMode='contain' style={styles.water}/>
      {/* <Text style={styles.alabama} >The University of Alabama {<MaterialCommunityIcons name='registered-trademark'/>}</Text> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
aims: {
 width: 300,
 height: 150,
 alignSelf: 'center'
},
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
},
water: {
  width: 300,
  height: 20,
  alignSelf: 'center',
  marginTop: 425
}
});

export default LoginScreen;
