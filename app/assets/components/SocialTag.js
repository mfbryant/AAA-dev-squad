import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Foundation } from "@expo/vector-icons";

function SocialTag({ children, name, textColor, iconColor }) {
  return (
    <View style={styles.textRow}>
      <Foundation name={name} color={iconColor} size={35} />
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={[styles.socialText, { color: textColor }]}
      >
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  socialText: {
    fontSize: 25,
    fontWeight: "500",
    marginLeft: 10,
  },
});

export default SocialTag;
