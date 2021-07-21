import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import Icon from "../assets/components/IconButton";
import { LinearGradient } from "expo-linear-gradient";
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
    <LinearGradient
      colors={[colors.light, colors.leet]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <SafeAreaView style={{ alignItems: "center" }}>
          <View style={styles.bar}>
            <Icon
              name="arrow-left"
              color={colors.white}
              onPress={() => navigation.goBack()}
              size={25}
            />
            <Text style={styles.barText}>Your Events</Text>
          </View>
        </SafeAreaView>
      </View>
      <SafeAreaView>
        <Text>{eventId}</Text>
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
