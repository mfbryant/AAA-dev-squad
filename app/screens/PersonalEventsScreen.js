import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";

import Screen from "../assets/components/Screen";
import EventListItem from "../assets/components/EventListItem";
import Icon from "../assets/components/IconButton";

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
      <View style={styles.container}>
        <SafeAreaView style={{ alignItems: "center" }}>
          <View style={styles.bar}>
            <Icon
              name="home"
              color={colors.white}
              onPress={() => navigation.navigate("Home")}
              size={30}
            />
            <Text style={styles.barText}>Your Events</Text>
            <Icon
              name="plus"
              color={colors.white}
              onPress={() => navigation.navigate("Add Event")}
              size={30}
            />
          </View>
        </SafeAreaView>
      </View>
      <SafeAreaView>
        <View style={styles.list}>
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
    padding: 15,
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
  statusBar: {
    backgroundColor: colors.dark,
    flexDirection: "row",
    width: "100%",
  },
});

export default PersonalEventsScreen;
