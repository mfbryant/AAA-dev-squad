import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import AffinityText from "./AffinityText";

import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";

function OrgName({ orgName, onPress }) {
  return (
    <TouchableHighlight
      underlayColor={colors.medium}
      onPress={onPress}
      style={{ borderRadius: 15 }}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={[colors.charcoal, colors.crimson]} // colors.medium
          start={[0, 0]}
          end={[1, 0]}
          style={styles.gradient}
        >
          <View style={styles.header}>
            <AffinityText style={styles.labelText}>{orgName} </AffinityText>
          </View>
        </LinearGradient>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderRadius: 15,
    flexWrap: "wrap",
    backgroundColor: colors.grey,
  },
  gradient: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderRadius: 15,
  },
  header: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: 25,
    color: colors.light,
  },
});

export default OrgName;
