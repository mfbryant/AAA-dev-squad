import React from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';

import Screen from '../assets/components/Screen';
import Company from '../assets/components/Company';
import { width } from 'styled-system';
import { CommonActions } from '@react-navigation/native';


function SponsorsScreen(props) {
    return (
      <ScrollView style={styles.container}>
             <StatusBar style='auto' />
              <View style={styles.row} >
                <Company source={require('../assets/graphics/companies/CGI.jpg')} onPress={() => Linking.openURL('https://www.cgi.com/en')}/>
                <View style={{ marginLeft: 20 }}>
                <Company source={require('../assets/graphics/companies/campgeminiOnline.png')} style={{ width: 200, height: 100, marginLeft: 10 }} 
                onPress={() => Linking.openURL('https://www.capgemini.com/us-en/')} />
                </View>
              </View>
              <View style={styles.row2}>
                    <Company source={require('../assets/graphics/companies/insuresoft.png')} style={{ paddingRight: 100 }}
                     onPress={() => Linking.openURL('https://www.insuresoft.com/')}/>
                <View style={{ marginLeft: 150 }}>
                    <Company source={require('../assets/graphics/companies/crowe.png')} style={{ paddingLeft: 10, justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end', alignSelf: 'flex-end'}}
                     onPress={() => Linking.openURL('https://www.crowe.com/')}/>
                </View>
              </View>
              <View style={styles.row3}>
                    <Company source={require('../assets/graphics/companies/Microsoft.png')}
                     onPress={() => Linking.openURL('https://careers.microsoft.com/students/us/en/usuniversityinternship')}/>
                <View style={{ marginLeft: 70 }} >
                    <Company source={require('../assets/graphics/companies/walmart.png')}
                    onPress={() => Linking.openURL('https://careers.walmart.com/student')}/>
                </View>
              </View>
              <View style={styles.row4}>
                <Company source={require('../assets/graphics/companies/FedEx.png')}
                onPress={() => Linking.openURL('https://careers.fedex.com/fedex#about-us')}/>
                <View style={{ marginLeft: 65 }} >
                <Company source={require('../assets/graphics/companies/Verizon.png')} 
                onPress={() => Linking.openURL('https://www.verizon.com/about/careers/college-students')}/>
                </View>
              </View>
              <View style={styles.row5}>
                <Company source={require('../assets/graphics/companies/Regions.png')}
                onPress={() => Linking.openURL('https://www.regions.com/about-regions/careers/emerging-talent')}/>
                <View style={{ marginLeft: 150 }} >
                <Company source={require('../assets/graphics/companies/apple.png')}
                onPress={() => Linking.openURL('https://www.apple.com/careers/us/students.html')}/>
                </View>
              </View>
                <View style={styles.row6}>
                    <Company source={require('../assets/graphics/companies/charlesSchwab.png')}
                    onPress={() => Linking.openURL('https://www.aboutschwab.com/interns')}/>
                  <View style={{ marginLeft: 95 }} >
                    <Company source={require('../assets/graphics/companies/ATT.png')}
                    onPress={() => Linking.openURL('https://connect.att.jobs/students')}/>
                  </View>
                </View>
              <View style={styles.row7}>
                    <Company source={require('../assets/graphics/companies/southernCompany.png')}
                    onPress={() => Linking.openURL('https://southerncompany-campus.jobs/')}/>
                  <View style={{ marginLeft: 95 }} >
                    <Company source={require('../assets/graphics/companies/lockheedMartin.png')}
                    onPress={() => Linking.openURL('https://www.lockheedmartinjobs.com/college-students')}/>
                  </View>
              </View>
              <View style={styles.row8} >
                    <Company source={require('../assets/graphics/companies/alteclogo.png')}
                    onPress={() => Linking.openURL('https://www.altec.com/about-altec/altec-careers/')}/>
                  <View style={{ marginLeft: 125, marginTop: 20 }} >
                    <Company source={require('../assets/graphics/companies/cisco.png')}
                    onPress={() => Linking.openURL('https://www.cisco.com/c/en/us/about/careers/communities/students-and-new-graduates.html')}/>
                  </View>   
              </View>
              <View style={styles.row9} >
                    <Company source={require('../assets/graphics/companies/homeDepot.png')}
                    onPress={() => Linking.openURL('https://careers.homedepot.com/students-internships/')}/>
                    <Company source={require('../assets/graphics/companies/lowes.png')}
                    onPress={() => Linking.openURL('https://corporate.lowes.com/careers/students-grads')}/>
                  <View style={{ marginLeft: 60 }}>
                    <Company source={require('../assets/graphics/companies/pg.png')}
                    onPress={() => Linking.openURL('https://www.pgcareers.com/NA-Virtual-Internship-Program')}/>
                  </View>   
              </View>
              <View style={styles.row10} >
                    <Company source={require('../assets/graphics/companies/renasantBank.png')}
                    onPress={() => Linking.openURL('https://www.renasantbank.com/')}/>
                  <View style={{ marginLeft: 25 }} >
                    <Company source={require('../assets/graphics/companies/kpmg.png')}
                    onPress={() => Linking.openURL('https://www.kpmgcampus.com/')}/>
                  </View>   
              </View>
              <View style={styles.row11} >
                    <Company source={require('../assets/graphics/companies/accenture.png')}
                    onPress={() => Linking.openURL('https://www.accenture.com/us-en/careers/local/students')}/>
                  <View style={{ marginLeft: 75 }} >
                    <Company source={require('../assets/graphics/companies/equifax.png')}
                    onPress={() => Linking.openURL('https://careers.equifax.com/global/en')}/>
                  </View>   
              </View>
              <View style={styles.row12} >
                    <Company source={require('../assets/graphics/companies/bankOfAmerica.png')}
                    onPress={() => Linking.openURL('https://campus.bankofamerica.com/campus-recruiting.html')}/>
                  <View style={{ marginLeft: 140,  }} >
                    <Company source={require('../assets/graphics/companies/bbva.png')}
                    onPress={() => Linking.openURL('https://www.bbvausa.com/our-story/careers/explore-our-college-programs.html')}/>
                  </View>  
              </View>
              <View style={styles.row13} >
                    <Company source={require('../assets/graphics/companies/hp.png')}
                    onPress={() => Linking.openURL('https://jobs.hp.com/en-us/Why-Work-at-HP?prefilters=none&CloudSearchLocation=none&CloudSearchValue=none')}/>
                    <Company source={require('../assets/graphics/companies/coke.png')}/>
                  <View style={{ marginLeft: 40, marginTop: 15 }} >
                    <Company source={require('../assets/graphics/companies/thyssenKrupp.png')}
                    onPress={() => Linking.openURL('https://karriere.thyssenkrupp.com/en/university-students')}/>
                  </View>  
              </View>
              <View style={styles.row12} >
                    <Company source={require('../assets/graphics/companies/unum.png')}
                    onPress={() => Linking.openURL('https://careers.unum.com/global/en/job/817335/Unum-Scholar-Intern')}/>
                  <View style={{ marginLeft: 90 }} >
                    <Company source={require('../assets/graphics/companies/coach.png')}
                    onPress={() => Linking.openURL('https://www.coach.com/')}/>
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