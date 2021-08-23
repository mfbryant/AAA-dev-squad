import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { AppButton } from "../assets/components/Button";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import SponsorsScreen from "./SponsorsScreen";

function InvolvementScreen({ navigation }) {
=======
import SponsorsScreen from "./SponsorsScreen";

function InvolvementScreen({ navigation }) {
>>>>>>> a2938060f0f4184335f8a978522ff6e94ae281f8
=======
import SponsorsScreen from "./SponsorsScreen";

function InvolvementScreen({ navigation }) {
>>>>>>> a2938060f0f4184335f8a978522ff6e94ae281f8
=======
import SponsorsScreen from "./SponsorsScreen";

function InvolvementScreen({ navigation }) {
>>>>>>> a2938060f0f4184335f8a978522ff6e94ae281f8
=======
import SponsorsScreen from "./SponsorsScreen";

function InvolvementScreen({ navigation }) {
>>>>>>> a2938060f0f4184335f8a978522ff6e94ae281f8
  return (
    <ImageBackground
      style={styles.image}
      source={require("../assets/graphics/denny.jpg")}
      blurRadius={1}
    >
      <View style={styles.container}>
        <AppButton
          title="Internship Info"
          onPress={() => console.log("internship pressed")}
        />
        <AppButton
          title="Hiring Sponsors"
          onPress={() => navigation.navigate("Sponsors")}
        />
      </View>
    </ImageBackground>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a2938060f0f4184335f8a978522ff6e94ae281f8
=======
>>>>>>> a2938060f0f4184335f8a978522ff6e94ae281f8
=======
>>>>>>> a2938060f0f4184335f8a978522ff6e94ae281f8
=======
>>>>>>> a2938060f0f4184335f8a978522ff6e94ae281f8
=======
>>>>>>> a2938060f0f4184335f8a978522ff6e94ae281f8
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginTop: 50,
  },
  image: {
    flex: 1,
  },
  text: {
    flexShrink: 1,
  },
});

export default InvolvementScreen;
