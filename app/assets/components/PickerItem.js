import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.bar} />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: "500",
    fontSize: 17,
  },
  bar: {
    borderBottomWidth: 1,
    borderColor: colors.medium,
  },
});

export default PickerItem;
