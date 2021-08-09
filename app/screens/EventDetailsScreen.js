import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { format } from "date-fns";
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

function EventDetailsScreen({ route, navigation }) {
  const qrWidth = 0.8 * Dimensions.get("window").width;
  const { item, orgData } = route.params;
  const event = item;
  // const user = route.params;

  // users access status
  // Change values when data is correct
  var show = false;
  if (
    (user.executive || user.officerStatus) &&
    user.userOrgs.includes(orgData[item.orgId - 1].orgName) &&
    event.eventApproved
  ) {
    var show = true;
  }

  var start = new Date(event.startDate);
  var end = new Date(event.endDate);

  var status = null;
  if (item.drafted) {
    var status = "Draft";
  } else {
    if (item.pending) {
      var status = "Pending";
    } else {
      if (item.approved) {
        var status = "Approved";
      } else {
        var status = "Denied";
      }
    }
  }

  if (status === "Approved") {
    var a = colors.green;
  } else if (status === "Denied") {
    var a = colors.danger;
  } else if (status === "Pending") {
    var a = colors.medium;
  } else if (status === "Draft") {
    var a = colors.yellow;
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
          <View style={styles.textBar}>
            <Text style={styles.header}>{event.eventName}</Text>
            <View style={styles.statusArea}>
              <View
                style={{
                  backgroundColor: a,
                  borderRadius: 7,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={1}
                  style={styles.status}
                >
                  {status}
                </Text>
              </View>
            </View>
          </View>
          <AffinityText style={styles.subHeader}>
            {orgData[item.orgId - 1].orgName}
          </AffinityText>
          <View style={styles.textRow}>
            <Text style={styles.sideText}>Location: </Text>
            <Text style={styles.bodyText}>{event.location}</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.sideText}>Date: </Text>
            <Text style={styles.bodyText}>{format(start, "MMMM do yyyy")}</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.sideText}>Time: </Text>
            <Text style={styles.bodyText}>
              {format(start, "hh:mm a")}
              {" - "}
              {format(end, "hh:mm a")}
            </Text>
          </View>
          <Text style={styles.sideText}>Details: </Text>
          <ScrollView>
            <Text style={styles.bodyText}>{event.eventDeets}</Text>
          </ScrollView>
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
                  <QRCode value={event.eventId.toString()} size={qrWidth} />
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
  textBar: {
    width: "100%",
    flexDirection: "row",
  },
  header: {
    fontSize: 27,
    fontWeight: "bold",
    paddingBottom: 1,
  },
  subHeader: {
    fontSize: 20,
    marginBottom: 10,
    color: colors.crimson,
  },
  textRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  sideText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "600",
  },
  bodyText: {
    fontSize: 17,
    fontWeight: "400",
  },
  button: {
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonBox: {
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
  statusArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  status: {
    color: colors.white,
    fontWeight: "500",
  },
});

export default EventDetailsScreen;
