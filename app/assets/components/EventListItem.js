import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import AffinityText from "./AffinityText";

import custom from "../config/styles";

function EventListItem({ status, org, title, subTitle, onPress }) {
  if (status === "Approved") {
    var a = custom.colors.green;
  } else if (status === "Denied") {
    var a = custom.colors.danger;
  } else if (status === "Pending") {
    var a = custom.colors.medium;
  }

  return (
    <TouchableHighlight
      underlayColor={custom.colors.medium}
      onPress={onPress}
      style={{ borderRadius: 15 }}
    >
      <View style={styles.container}>
        <View style={styles.label}>
          <AffinityText style={styles.labelText}>{org}</AffinityText>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
        </View>
        <View style={styles.statusArea}>
          <View
            style={{
              backgroundColor: a,
              borderRadius: 7,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.status}>
              {status}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    flexDirection: "row",
    padding: 15,
    backgroundColor: custom.colors.white,
  },
  detailsContainer: {
    flex: 3,
    marginLeft: 10,
    justifyContent: "center",
  },
  label: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  statusArea: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  labelText: {
    fontSize: 20,
  },
  status: {
    color: custom.colors.white,
    fontWeight: "500",
  },
  subTitle: {
    color: custom.colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default EventListItem;
