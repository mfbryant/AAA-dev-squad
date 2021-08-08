import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";
import * as Linking from "expo-linking";

function SocialTag({ children, site, name, textColor, iconColor }) {
  return (
    <TouchableOpacity
      onPress={() =>
        Linking.openURL(`https://${site}.com/${children.substr(1)}/`)
      }
    >
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
    </TouchableOpacity>
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
