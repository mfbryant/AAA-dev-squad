import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

function EventScreen({ barChildren, children }) {
  return (
    <LinearGradient
      colors={[colors.light, colors.light]}
      style={styles.gradient}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <SafeAreaView style={styles.bar}>{barChildren}</SafeAreaView>
      </View>
      <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.charcoal,
  },
  bar: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    flex: 1,
    padding: 15,
  },
  view: {
    flex: 1,
  },
});

export default EventScreen;
