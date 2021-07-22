import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function FormButton({ v, text, color, onPress }) {
  return (
    <>
      {v ? (
        <TouchableOpacity
          onPress={onPress}
          style={[{ backgroundColor: color }, styles.button]}
        >
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
            {text}
          </Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  text: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 15,
  },
});

export default FormButton;
