import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";

import EventListItem from "../assets/components/EventListItem";
import Icon from "../assets/components/IconButton";

import colors from "../assets/config/colors";
import { LinearGradient } from "expo-linear-gradient";

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

function PersonalEventsScreen({ navigation }) {
  // const [events, setEvents] = useState(userEvents);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

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
    <LinearGradient
      colors={[colors.light, colors.leet]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <SafeAreaView style={{ alignItems: "center" }}>
          <View style={styles.bar}>
            <Icon
              name="home"
              color={colors.white}
              onPress={() => navigation.navigate("Home")}
              size={25}
            />
            <Text style={styles.barText}>Your Events</Text>
            <Icon
              name="plus"
              color={colors.white}
              onPress={() => navigation.navigate("Add Event")}
              size={25}
            />
          </View>
        </SafeAreaView>
      </View>
      <SafeAreaView>
        <View style={styles.list}>
          <FlatList
            data={data}
            keyExtractor={({ eventId }) => eventId.toString()}
            renderItem={({ item }) => (
              <EventListItem
                org="aims"
                title={item.eventName}
                subTitle={item.location}
                status="Approved"
                onPress={() =>
                  navigation.navigate("Event Details", {
                    paramKey: item.eventId,
                  })
                }
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            refreshing={refreshing}
            onRefresh={() => {
              // setEvents(data);
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.charcoal,
  },
  list: {
    padding: 10,
    height: "100%",
  },
  background: {
    flex: 1,
  },
  separator: {
    width: "100%",
    height: 10,
  },
  gradient: {
    flex: 1,
  },
  barText: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.white,
  },
  bar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingBottom: 7,
  },
});

export default PersonalEventsScreen;
