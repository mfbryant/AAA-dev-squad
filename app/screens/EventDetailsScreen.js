import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import EventScreen from "../assets/components/EventScreen";
import Icon from "../assets/components/IconButton";
import colors from "../assets/config/colors";

function EventDetailsScreen({ route, navigation }) {
  const [data, setData] = useState([]);
  var eventId = route.params.paramKey;

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
      <SafeAreaView>
        <Text>{eventId}</Text>
      </SafeAreaView>
    </EventScreen>
  );
}

const styles = StyleSheet.create({
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
});

export default EventDetailsScreen;
