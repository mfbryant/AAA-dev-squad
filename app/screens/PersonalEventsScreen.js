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
const event2 = {
  eventStatus: "Approved", // orgID
  eventDeets: "aims",
  eventCreator: "jdmay2",
  eventDraft: true,
  eventPending: false,
  eventApproved: false,
};

function PersonalEventsScreen({ navigation }) {
  // const [events, setEvents] = useState(userEvents);
  const [refreshing, setRefreshing] = useState(false);
  const [eventData, setEventData] = useState([]);
  const [orgData, setOrgData] = useState([]);

  const getEvents = async () => {
    try {
      const response = await fetch(
        "https://aims-ambassadorship-app.herokuapp.com/api/events"
      );
      const json = await response.json();
      setEventData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const getOrgs = async () => {
    try {
      const response = await fetch(
        "https://aims-ambassadorship-app.herokuapp.com/api/organizations"
      );
      const json = await response.json();
      setOrgData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEvents();
    getOrgs();
  }, []);

  // users access status
  // Change values when data is correct
  var showIcon = false;
  if (user.executive === 1 || user.officerStatus === 1) {
    var showIcon = true;
  }

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
                onPress={() => navigation.navigate("Add Event")}
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
          keyExtractor={({ eventId }) => eventId.toString()}
          renderItem={({ item }) => (
            <EventListItem
              show={item.userId === user.userId}
              org={item.orgId}
              title={item.eventName}
              subTitle={item.location}
              drafted={item.eventDraft}
              pending={item.eventPending}
              approved={item.eventApproved}
              // status={status} // change to item.status
              onPress={() =>
                navigation.navigate("Event Details", { item, orgData })
              }
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
  flatList: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  barItem: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  separator: {
    width: "100%",
    height: 10,
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
