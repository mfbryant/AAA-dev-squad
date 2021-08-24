import React from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import Constants from "expo-constants";

import Screen from "../assets/components/Screen";
import { IconButton } from "../assets/components/Button";
import colors from "../assets/config/colors";
import { ColorSchemeProvider } from "react-native-dynamic";

function VolunteerDetailScreen({ route, navigation }) {
  const post = route.params;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: colors.charcoal }}>
        <IconButton
          name="chevron-down"
          size={40}
          color="white"
          onPress={() => navigation.navigate("Volunteer")}
          style={styles.button}
        />
      </View>
      <ScrollView>
        <Text style={styles.title}>{post.title}</Text>
        <View style={styles.lineBreak} />
        <Text style={styles.subtitle}>{post.subtitle}</Text>
      </ScrollView>
    </View>
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
