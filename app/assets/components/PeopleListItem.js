import React from "react";
import { View, Text, StyleSheet } from "react-native";
import custom from "../config/styles";

function PeopleListItem({ show, title, subTitle }) {
  return (
    <>
      {show && (
        <View style={styles.container}>
          <View style={styles.detailsContainer}>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: custom.colors.grey,
    borderRadius: 5,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  subTitle: {
    color: custom.colors.light,
    fontWeight: "500",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: custom.colors.white,
  },
});

export default PeopleListItem;
