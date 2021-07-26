import React, { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Dimensions } from "react-native";
import QRCode from "react-native-qrcode-svg";
import EventScreen from "../assets/components/EventScreen";
import Icon from "../assets/components/IconButton";
import colors from "../assets/config/colors";
import AffinityText from "../assets/components/AffinityText";
import ScreenModal from "../assets/components/ScreenModal";

const user = {
  officerStatus: 1, // orgID
  label: "AIMS", // orgAbbr
  userOrgs: ["aims", "cmiss"],
};
const event2 = {
  eventId: 2021000001,
  eventStatus: "Approved", // orgID
  label: "AIMS", // orgAbbr
  eventOrg: "aims",
};

function EventDetailsScreen({ route, navigation }) {
  const qrWidth = 0.8 * Dimensions.get("window").width;
  const event = route.params;
  // const user = route.params;

  // users access status
  // Change values when data is correct
  var show = false;
  if (
    user.officerStatus === 1 &&
    user.userOrgs.includes(event2.eventOrg) &&
    event2.eventStatus === "Approved"
  ) {
    var show = true;
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
            <ScreenModal
              buttonShow={show}
              buttonText="Get Event QR"
              buttonColor={colors.medium}
            >
              <View style={styles.qr}>
                <View style={styles.qrBack}>
                  <QRCode value={event2.eventId.toString()} size={qrWidth} />
                </View>
              </View>
            </ScreenModal>
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
  qr: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  qrBack: {
    backgroundColor: colors.white,
    padding: 10,
  },
});

export default EventDetailsScreen;
