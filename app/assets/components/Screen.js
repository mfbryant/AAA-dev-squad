import React from "react";
import Constants from "expo-constants";
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

function Screen({ children, style }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={[styles.screen, style]}>
        <StatusBar style="auto" />
        <View style={[styles.view, style]}>{children}</View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
