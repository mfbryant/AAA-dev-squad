import React, { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import EventScreen from "../assets/components/EventScreen";
import Icon from "../assets/components/IconButton";
import colors from "../assets/config/colors";
import AffinityText from "../assets/components/AffinityText";
import FormButton from "../assets/components/FormButton";

// import Print from "expo-print";
// import MediaLibrary from "expo-media-library";
// import Sharing from "expo-sharing";

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

const user = {
  officerStatus: 1, // orgID
  label: "AIMS", // orgAbbr
};
const event2 = {
  eventStatus: "Approved", // orgID
  label: "AIMS", // orgAbbr
};
function EventDetailsScreen({ route, navigation }) {
  const event = route.params;
  // const user = route.params;

  // users access status
  var show;
  if (user.officerStatus === 1 && event2.eventStatus === "Approved") {
    show = true;
  } else {
    show = false;
  }

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
      <SafeAreaView style={styles.screen}>
        <View style={styles.info}>
          <Text style={styles.header}>{event.eventName}</Text>
          <AffinityText style={styles.subHeader}>aims</AffinityText>
        </View>
        <View style={styles.buttonBox}>
          <View style={styles.button}>
            <FormButton
              v={show}
              text="Export Event Poster"
              color={colors.medium}
              // onPress={}
            />
          </View>
        </View>
      </SafeAreaView>
    </EventScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  info: {
    flex: 1,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 1,
  },
  subHeader: {
    fontSize: 15,
  },
  button: {
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
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
