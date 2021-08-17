import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function PickerItem({ label, onPress, show }) {
  return (
    <>
      {show && (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.text}>{label}</Text>
          <View style={styles.bar} />
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: "500",
    fontSize: 15,
  },
  bar: {
    borderBottomWidth: 1,
    borderColor: colors.light,
  },
});

export default PickerItem;
