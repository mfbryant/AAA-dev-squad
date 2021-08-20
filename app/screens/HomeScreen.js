import React from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { AppButton } from "../assets/components/Button";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppButton
        title="Calendar"
        onPress={() => navigation.navigate("Calendar")}
      />
      <AppButton
        title="Involvement"
        onPress={() => navigation.navigate("Involvement")}
      />
      <AppButton
        title="Organizations"
        onPress={() => navigation.navigate("Organizations")}
      />
      <AppButton
        title="Volunteer Opportunities"
        onPress={() => navigation.navigate("Volunteer")}
      />
      {/* <AppButton
        title="QR Scanner"
        onPress={() => navigation.navigate("Scanner")}
      />
      <AppButton
        title="Your Events"
        onPress={() => navigation.navigate("Events")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
