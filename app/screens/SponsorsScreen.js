import React from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Screen from '../assets/components/Screen';
import Company from '../assets/components/Company';
import { width } from 'styled-system';
import { CommonActions } from '@react-navigation/native';


function SponsorsScreen(props) {
    return (
      <ScrollView style={styles.container}>
             <StatusBar style='auto' />
              <View style={styles.row} >
                <Company source={require('../assets/graphics/companies/CGI.jpg')}/>
                <View style={{ marginLeft: 20 }}>
                <Company source={require('../assets/graphics/companies/campgeminiOnline.png')} style={{ width: 200, height: 100, marginLeft: 10 }} />
                </View>
              </View>
              <View style={styles.row2}>
                    <Company source={require('../assets/graphics/companies/insuresoft.png')} style={{ paddingRight: 100 }}/>
                <View style={{ marginLeft: 150 }}>
                    <Company source={require('../assets/graphics/companies/crowe.png')} style={{ paddingLeft: 10, justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end', alignSelf: 'flex-end'}} />
                </View>
              </View>
              <View style={styles.row3}>
                    <Company source={require('../assets/graphics/companies/Microsoft.png')}/>
                <View style={{ marginLeft: 70 }} >
                    <Company source={require('../assets/graphics/companies/walmart.png')}/>
                </View>
              </View>
              <View style={styles.row4}>
                <Company source={require('../assets/graphics/companies/FedEx.png')}/>
                <View style={{ marginLeft: 65 }} >
                <Company source={require('../assets/graphics/companies/Verizon.png')}/>
                </View>
              </View>
              <View style={styles.row5}>
                <Company source={require('../assets/graphics/companies/Regions.png')}/>
                <View style={{ marginLeft: 150 }} >
                <Company source={require('../assets/graphics/companies/apple.png')}/>
                </View>
              </View>
                <View style={styles.row6}>
                    <Company source={require('../assets/graphics/companies/charlesSchwab.png')}/>
                  <View style={{ marginLeft: 95 }} >
                    <Company source={require('../assets/graphics/companies/ATT.png')}/>
                  </View>
                </View>
              <View style={styles.row7}>
                    <Company source={require('../assets/graphics/companies/southernCompany.png')}/>
                  <View style={{ marginLeft: 95 }} >
                    <Company source={require('../assets/graphics/companies/lockheedMartin.png')}/>
                  </View>
              </View>
              <View style={styles.row8} >
                    <Company source={require('../assets/graphics/companies/alteclogo.png')}/>
                  <View style={{ marginLeft: 125, marginTop: 20 }} >
                    <Company source={require('../assets/graphics/companies/cisco.png')}/>
                  </View>   
              </View>
              <View style={styles.row9} >
                    <Company source={require('../assets/graphics/companies/homeDepot.png')}/>
                    <Company source={require('../assets/graphics/companies/lowes.png')}/>
                  <View style={{ marginLeft: 60 }}>
                    <Company source={require('../assets/graphics/companies/pg.png')}/>
                  </View>   
              </View>
              <View style={styles.row10} >
                    <Company source={require('../assets/graphics/companies/renasantBank.png')}/>
                  <View style={{ marginLeft: 25 }} >
                    <Company source={require('../assets/graphics/companies/kpmg.png')}/>
                  </View>   
              </View>
              <View style={styles.row11} >
                    <Company source={require('../assets/graphics/companies/accenture.png')}/>
                  <View style={{ marginLeft: 75 }} >
                    <Company source={require('../assets/graphics/companies/equifax.png')}/>
                  </View>   
              </View>
              <View style={styles.row12} >
                    <Company source={require('../assets/graphics/companies/bankOfAmerica.png')}/>
                  <View style={{ marginLeft: 140,  }} >
                    <Company source={require('../assets/graphics/companies/bbva.png')}/>
                  </View>  
              </View>
              <View style={styles.row13} >
                    <Company source={require('../assets/graphics/companies/hp.png')}/>
                    <Company source={require('../assets/graphics/companies/coke.png')}/>
                  <View style={{ marginLeft: 40, marginTop: 15 }} >
                    <Company source={require('../assets/graphics/companies/thyssenKrupp.png')}/>
                  </View>  
              </View>
              <View style={styles.row12} >
                    <Company source={require('../assets/graphics/companies/unum.png')}/>
                  <View style={{ marginLeft: 90 }} >
                    <Company source={require('../assets/graphics/companies/coach.png')}/>
                  </View>
              </View>
              <View style={{ height: 50 }} />  
           </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        justifyContent: 'center', 
        height: 50, 
        width:200, 
        marginLeft: 25,
        marginTop: 25, 
        flexDirection: 'row',
        marginBottom: 20,

    },
    row2: {
        justifyContent: 'center', 
        height: 50, 
        width:200, 
        marginLeft: 75,
        flexDirection: 'row',
        marginBottom: 20, 
    },
    row3: {
        justifyContent: 'center', 
        height: 50, 
        width:200, 
        marginLeft: 55, 
        flexDirection: 'row',
        marginBottom: 20,
    },
    row4: {
        justifyContent: 'center', 
        height: 50, 
        width:200, 
        marginLeft: 55, 
        flexDirection: 'row',
        marginBottom: 20,
    },
    row5: {
        height: 50, 
        width:200, 
        marginLeft: 15, 
        flexDirection: 'row',
        marginBottom: 20,
    },
    row6: {
        height: 50, 
        width:200, 
        marginLeft: 0, 
        flexDirection: 'row',
        marginBottom: 20,
    },
    row7: {
        height: 50, 
        width:200, 
        marginLeft: 0, 
        flexDirection: 'row',
        marginBottom: 20,
    },
    row8: {
        height: 50, 
        width:200, 
        marginLeft: 0, 
        flexDirection: 'row',
        marginBottom: 20,
    },
    row9: {
      height: 50, 
      width:200, 
      marginLeft: 10,
      marginTop: 20, 
      flexDirection: 'row',
      marginBottom: 20,
  },
  row10: {
    height: 50, 
    width:200, 
    marginLeft: 20,
    marginTop: 35, 
    flexDirection: 'row',
    marginBottom: 20,
},
row11: {
  height: 50, 
  width:200, 
  marginLeft: 20,
  marginTop: 15, 
  flexDirection: 'row',
  marginBottom: 20,
},
row12: {
  height: 50, 
  width:200, 
  marginLeft: 20,
  marginTop: 28, 
  flexDirection: 'row',
  marginBottom: 20,
},
row13: {
  height: 50, 
  width:200, 
  marginLeft: 20,
  marginTop: 28, 
  flexDirection: 'row',
  marginBottom: 20,
},
})

export default SponsorsScreen;