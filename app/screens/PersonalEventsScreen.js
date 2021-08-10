import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import EventListItem from "../assets/components/EventListItem";
import Icon from "../assets/components/IconButton";
import EventScreen from "../assets/components/EventScreen";
import colors from "../assets/config/colors";

// Load in user specific events from server
// handleOnLoad

// Examples
// const userEvents = [
//   {
//     org: "aims",
//     id: 2021000001,
//     title: "Welcome Back Event",
//     description: "See you soon!",
//     status: "Pending",
//   },
//   {
//     org: "cmiss",
//     id: 2021000002,
//     title: "Get On Board Day",
//     description: "See you soon!",
//     status: "Approved",
//   },
//   {
//     org: "Wit",
//     id: 2021000003,
//     title: "Mock Interviews",
//     description: "See you soon!",
//     status: "Denied",
//   },
// ];
// Examples

const user = {
  userId: 1,
  officerStatus: 1, // orgID
  userName: "jdmay2",
  userOrg: "aims",
  label: "AIMS", // orgAbbr
};

function PersonalEventsScreen({ navigation }) {
  // const [events, setEvents] = useState(userEvents);
  const [refreshing, setRefreshing] = useState(false);
  const [eventData, setEventData] = useState([]);
  const [orgData, setOrgData] = useState([]);

  const getData = async () => {
    try {
      const response1 = await fetch(
        "https://aims-ambassadorship-app.herokuapp.com/api/events"
      );
      const json1 = await response1.json();
      const response2 = await fetch(
        "https://aims-ambassadorship-app.herokuapp.com/api/organizations"
      );
      const json2 = await response2.json();
      setOrgData(json2);
      setEventData(json1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // users access status
  // Change values when data is correct
  var showIcon = false;
  if (user.executive === 1 || user.officerStatus === 1) {
    var showIcon = true;
  }

  //Necessary for no errors when filling in data on add page
  var item = [null];

  return (
    <EventScreen
      barChildren={
        <View style={styles.bar}>
          <View style={styles.barItem}>
            <Icon
              name="home"
              color={colors.white}
              onPress={() => navigation.navigate("Home")}
              size={25}
            />
          </View>
          <View style={[{ justifyContent: "center" }, styles.barItem]}>
            <Text style={styles.barText}>Your Events</Text>
          </View>
          <View style={[{ justifyContent: "flex-end" }, styles.barItem]}>
            {showIcon ? (
              <Icon
                name="plus"
                color={colors.white}
                onPress={() =>
                  navigation.navigate("Add Event", { item, orgData })
                }
                size={25}
              />
            ) : null}
          </View>
        </View>
      }
    >
      <View style={styles.list}>
        <FlatList
          style={styles.flatList}
          data={eventData}
          extraData={orgData}
          keyExtractor={({ eventId }) => eventId.toString()}
          renderItem={({ item }) => (
            <EventListItem
              show={item.userId === user.userId}
              org={orgData[item.orgId - 1].orgName}
              title={item.eventName}
              subTitle={item.location}
              drafted={item.eventDraft}
              pending={item.eventPending}
              approved={item.eventApproved}
              onPress={() => {
                if (item.eventDraft) {
                  navigation.navigate("Add Event", { orgData, item });
                } else {
                  navigation.navigate("Event Details", { orgData, item });
                }
              }}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setEventData(eventData);
            setOrgData(orgData);
            setRefreshing(false);
          }}
        />
      </View>
    </EventScreen>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  barItem: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  separator: {
    width: "100%",
    height: 1,
  },
  barText: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.white,
  },
  bar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingBottom: 7,
  },
});

export default PersonalEventsScreen;
