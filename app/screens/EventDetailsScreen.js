import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import { format } from "date-fns";
import QRCode from "react-native-qrcode-svg";
import EventScreen from "../assets/components/EventScreen";
import Icon from "../assets/components/IconButton";
import colors from "../assets/config/colors";
import AffinityText from "../assets/components/AffinityText";
import ScreenModal from "../assets/components/ScreenModal";
import FormButton from "../assets/components/FormButton";
import Person from "../assets/components/PeopleListItem";

function EventDetailsScreen({ route, navigation }) {
  const qrWidth = 0.8 * Dimensions.get("window").width;
  const { personal, userData, user, orgData, event } = route.params;
  const [attendanceData, setAttendanceData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getData = async () => {
    try {
      setRefreshing(true);
      const response = await fetch(
        "https://aims-ambassadorship-app.herokuapp.com/api/attendance"
      );
      const json = await response.json();
      setAttendanceData(json);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  var later = new Date(event.startDate);
  later.setTime(new Date(event.endDate).getTime());

  var start = new Date(event.startDate);
  var end = new Date(event.endDate);
  var show = false;
  var roster = false;
  if (
    (user.executive || (user.officer && user.orgId === event.orgId)) &&
    event.eventApproved
  ) {
    start >= later ? (show = true) : (roster = true);
  }

  var status = null;
  if (event.eventDraft) {
    var status = "Draft";
  } else {
    if (event.eventPending) {
      var status = "Pending";
    } else {
      if (event.eventApproved) {
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
    navigation.goBack();
    event.eventPending = false;
    event.eventApproved = true;
  };

  const handleDeny = () => {
    navigation.goBack();
    event.eventPending = false;
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
            <Text style={styles.header}>{event.eventName}</Text>
            {personal && (
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
            )}
          </View>
          <AffinityText style={styles.subHeader}>
            {orgData[event.orgId - 1].orgName}
          </AffinityText>
          {personal && (
            <Text style={styles.creator}>
              Created by {userData[event.userId - 1].userName}
            </Text>
          )}
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
          <Text style={styles.sideText}>
            {roster ? "Attendees:" : "Details:"}
          </Text>
          {!roster ? (
            <ScrollView>
              <Text style={styles.bodyText}>{event.eventDeets}</Text>
            </ScrollView>
          ) : (
            <View style={styles.list}>
              <FlatList
                style={styles.flatList}
                data={attendanceData}
                extraData={userData}
                keyExtractor={({ attendanceId }) => attendanceId.toString()}
                renderItem={({ item }) => (
                  <Person
                    show={item.eventId === event.eventId}
                    title={userData[item.userId - 1].userName}
                    subTitle={userData[item.userId - 1].userEmail}
                  />
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                refreshing={refreshing}
                onRefresh={() => {
                  setRefreshing(true);
                  setAttendanceData(attendanceData);
                  setRefreshing(false);
                }}
              />
            </View>
          )}
        </View>
        <View style={styles.buttonBox}>
          <View style={styles.button}>
            <FormButton
              v={personal && user.executive}
              text="Approve"
              color={colors.green}
              style={{ marginRight: 15 }}
              onPress={handleApprove}
            />
            <FormButton
              v={personal && user.executive}
              text="Deny"
              color={colors.danger}
              onPress={handleDeny}
            />
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
  list: {
    flex: 1,
    borderColor: colors.medium,
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
  },
  flatList: {
    borderRadius: 5,
  },
  separator: {
    width: "100%",
    height: 3,
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
