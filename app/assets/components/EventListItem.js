import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { format } from "date-fns";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AffinityText from "./AffinityText";
import custom from "../config/styles";

function EventListItem({
  show,
  drafted,
  pending,
  approved,
  org,
  title,
  subTitle,
  date,
  onPress,
  renderRightActions,
  statusShow,
}) {
  var status = null;
  if (drafted) {
    status = "Draft";
  } else {
    if (pending) {
      status = "Pending";
    } else {
      if (approved) {
        status = "Approved";
      } else {
        status = "Denied";
      }
    }
  }

  var a = custom.colors.black;
  if (status === "Approved") {
    a = custom.colors.green;
  } else if (status === "Denied") {
    a = custom.colors.danger;
  } else if (status === "Pending") {
    a = custom.colors.medium;
  } else if (status === "Draft") {
    a = custom.colors.yellow;
  }

  return (
    <>
      {show && (
        <Swipeable renderRightActions={renderRightActions}>
          <TouchableHighlight
            underlayColor={custom.colors.medium}
            onPress={onPress}
          >
            <View style={styles.container}>
              <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <AffinityText style={styles.labelText}>{org}</AffinityText>
                {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
              </View>
              <View style={styles.statusArea}>
                <View
                  style={[
                    styles.statusBox,
                    {
                      backgroundColor: statusShow ? a : custom.colors.medium,
                    },
                  ]}
                >
                  <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={statusShow ? styles.status : styles.date}
                  >
                    {statusShow ? status : format(new Date(date), "MMM dd")}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </Swipeable>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: custom.colors.white,
  },
  detailsContainer: {
    flex: 4,
    marginLeft: 5,
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
  statusBox: {
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  labelText: {
    fontSize: 15,
    color: custom.colors.crimson,
  },
  status: {
    color: custom.colors.white,
    fontWeight: "600",
  },
  date: {
    color: custom.colors.white,
    fontWeight: "600",
  },
  subTitle: {
    color: custom.colors.medium,
    fontWeight: "500",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default EventListItem;
