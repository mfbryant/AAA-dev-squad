import React from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";

import Screen from "../assets/components/Screen";
import { IconButton } from "../assets/components/Button";

function VolunteerDetailScreen({ route, navigation }) {
  const post = route.params;

  return (
    <Screen style={styles.container}>
      <IconButton
        name="chevron-down"
        size={40}
        color="black"
        onPress={() => navigation.navigate("Volunteer")}
        style={styles.button}
      />
      <ScrollView>
        <Text style={styles.title}>{post.title}</Text>
        <View style={styles.lineBreak} />
        <Text style={styles.subtitle}>{post.subtitle}</Text>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-end",
    paddingRight: 10,
  },
  lineBreak: {
    backgroundColor: "black",
    height: 2,
    marginTop: 8,
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 15,
  },
  subtitle: {
    fontWeight: "300",
    fontSize: 20,
    marginLeft: 10,
    marginTop: 15,
  },
});

export default VolunteerDetailScreen;
