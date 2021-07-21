import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import EventScreen from "../assets/components/EventScreen";
import Icon from "../assets/components/IconButton";
import colors from "../assets/config/colors";

import Print from "expo-print";
import MediaLibrary from "expo-media-library";
import Sharing from "expo-sharing";

import { ReactPDF } from "@react-pdf/renderer";
import EventPDF from "../assets/components/EventPDF";
import FormButton from "../assets/components/FormButton";

// const createAndSavePDF = async (html) => {
//   try {
//     const { uri } = await Print.printToFileAsync({ html });
//     if (Platform.OS === "ios") {
//       await Sharing.shareAsync(uri);
//     } else {
//       const permission = await MediaLibrary.requestPermissionsAsync();
//       if (permission.granted) {
//         await MediaLibrary.createAssetAsync(uri);
//       }
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

function EventDetailsScreen({ route, navigation }) {
  const [data, setData] = useState([]);
  var eventId = route.params.paramKey;

  const getEvents = async () => {
    try {
      const response = await fetch(
        "https://aims-ambassadorship-app.herokuapp.com/api/events"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <EventScreen
      barChildren={
        <View style={styles.bar}>
          <Icon
            name="arrow-left"
            color={colors.white}
            onPress={() => navigation.goBack()}
            size={25}
          />
          <Text style={styles.barText}>Your Events</Text>
        </View>
      }
    >
      <SafeAreaView>
        <Text>{eventId}</Text>
        <FormButton></FormButton>
      </SafeAreaView>
    </EventScreen>
  );
}

const styles = StyleSheet.create({
  barText: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.white,
    marginLeft: 10,
  },
  bar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingBottom: 7,
  },
});

export default EventDetailsScreen;
