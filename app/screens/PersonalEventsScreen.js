import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Screen from "../assets/components/Screen";
import EventListItem from "../assets/components/EventListItem";
import colors from "../assets/config/colors";
import { LinearGradient } from "expo-linear-gradient";

// Load in user specific events from server
// handleOnLoad

// Examples
const userEvents = [
  {
    org: "aims",
    id: 2021000001,
    title: "Welcome Back Event",
    description: "See you soon!",
    status: "Pending",
  },
  {
    org: "cmiss",
    id: 2021000002,
    title: "Get On Board Day",
    description: "See you soon!",
    status: "Approved",
  },
  {
    org: "Wit",
    id: 2021000003,
    title: "Mock Interviews",
    description: "See you soon!",
    status: "Denied",
  },
];
// Examples

function PersonalEventsScreen({ navigation }) {
  const [events, setEvents] = useState(userEvents);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <LinearGradient
      colors={[colors.light, colors.leet]}
      style={styles.gradient}
    >
      <Screen style={styles.screen}>
        <FlatList
          data={events}
          keyExtractor={(event) => event.id.toString()}
          renderItem={({ item }) => (
            <EventListItem
              org={item.org}
              title={item.title}
              subTitle={item.description}
              status={item.status}
              onPress={() => navigation.navigate("Event Details")}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          refreshing={refreshing}
          onRefresh={() => {
            setEvents(userEvents);
          }}
        />
      </Screen>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  separator: {
    width: "100%",
    height: 10,
  },
  gradient: {
    flex: 1,
  },
});

export default PersonalEventsScreen;
