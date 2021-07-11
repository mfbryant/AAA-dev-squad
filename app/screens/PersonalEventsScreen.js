import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Screen from "../assets/components/Screen";
import ListItem from "../assets/components/ListItem";
import colors from "../assets/config/colors";

// Load in user specific events from server
// handleOnLoad

// Example
const userEvents = [
  {
    id: 2021000001,
    title: "Welcome Back Event",
    description: "See you soon!",
    image: require("../assets/graphics/aims.jpg"),
  },
  {
    id: 2021000002,
    title: "Get On Board Day",
    description: "See you soon!",
    image: require("../assets/graphics/aims.jpg"),
  },
];
// Example

function PersonalEventsScreen({ navigation }) {
  const [events, setEvents] = useState(userEvents);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <Screen>
      <FlatList
        data={events}
        keyExtractor={(event) => event.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => navigation.navigate("Event Details")}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setEvents(userEvents);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default PersonalEventsScreen;
