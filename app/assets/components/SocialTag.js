import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";
import colors from "../config/colors";
import * as Linking from "expo-linking";
import { LinearGradient } from "expo-linear-gradient";

function SocialTag({ children, site }) {
  if (site === "instagram") {
    var c = colors.instagram;
  } else if (site === "twitter") {
    var c = colors.twitter;
  } else if (site === "linkedin") {
    var c = colors.linkedin;
  } else if (site === "facebook") {
    var c = colors.facebook;
  }
  return (
    <TouchableOpacity
      onPress={() =>
        site === "facebook"
          ? Linking.openURL(
              `https://${site}.com/${children.replace(/ /g, "")}/`
            )
          : Linking.openURL(`https://${site}.com/${children.substr(1)}/`)
      }
      style={styles.button}
    >
      <LinearGradient
        colors={c}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.body}
      >
        <Foundation name={`social-${site}`} color={colors.white} size={35} />
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.socialText}>
          {children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    marginVertical: 5,
  },
  body: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  socialText: {
    fontSize: 25,
    fontWeight: "500",
    marginLeft: 10,
    color: colors.white,
  },
});

export default SocialTag;
