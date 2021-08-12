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
import FormButton from "../assets/components/FormButton";

function EventDetailsScreen({ route, navigation }) {
  const qrWidth = 0.8 * Dimensions.get("window").width;
  const { personal, userData, user, item, orgData } = route.params;

  // users access status
  // Change values when data is correct
  var start = new Date(item.startDate);
  var end = new Date(item.endDate);
  var show = false;
  var roster = false;
  if (
    (user.executive || (user.officer && user.orgId === item.orgId)) &&
    item.eventApproved
  ) {
    start >= new Date() ? (show = true) : (roster = true);
  }

  var status = null;
  if (item.eventDraft) {
    var status = "Draft";
  } else {
    if (item.eventPending) {
      var status = "Pending";
    } else {
      if (item.eventApproved) {
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

  const handleApprove = () => {
    //Navigate back to previous screen
    //Set pending to false
    //Set Approve to true
  };

  const handleDeny = () => {
    //Navigate back to previous screen
    //Set pending to false
  };

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
          <Text style={styles.barText}>Events</Text>
        </View>
      }
    >
      <SafeAreaView style={styles.screen}>
        <View style={styles.info}>
          <View style={styles.textBar}>
            <Text style={styles.header}>{item.eventName}</Text>
            {personal ? (
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
            ) : null}
          </View>
          <AffinityText style={styles.subHeader}>
            {orgData[item.orgId - 1].orgName}
          </AffinityText>
          {personal ? (
            <Text style={styles.creator}>
              Created by {userData[item.userId - 1].userName}
            </Text>
          ) : null}
          <View style={styles.textRow}>
            <Text style={styles.sideText}>Location: </Text>
            <Text style={styles.bodyText}>{item.location}</Text>
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
            <Text style={styles.bodyText}>{item.eventDeets}</Text>
          </ScrollView>
        </View>
        {roster ? (
          <View style={{ flex: 1 }}>
            <Text>Hello</Text>
          </View>
        ) : null}
        <View style={styles.buttonBox}>
          <View style={styles.button}>
            <FormButton
              v={personal && user.executive}
              text="Approve"
              color={colors.green}
              style={{ marginRight: 15 }}
              onPress={() => setModalVisible(true)}
            />
            <FormButton
              v={personal && user.executive}
              text="Deny"
              color={colors.danger}
              onPress={() => setModalVisible(true)}
            />
            <ScreenModal
              buttonShow={show}
              buttonText="Get Event QR"
              buttonColor={colors.medium}
            >
              <View style={styles.qr}>
                <View style={styles.qrBack}>
                  <QRCode value={item.eventId.toString()} size={qrWidth} />
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
    marginBottom: 5,
    color: colors.crimson,
  },
  creator: {
    fontSize: 15,
    fontWeight: "700",
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
    width: "90%",
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
    fontWeight: "600",
    fontSize: 17,
  },
});

export default EventDetailsScreen;
