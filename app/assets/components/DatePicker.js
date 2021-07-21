import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import DateTimePicker from "react-native-modal-datetime-picker";
import colors from "../config/colors";

function DatePicker({
  showDatePicker,
  hideDatePicker,
  isDatePickerVisible,
  date,
  handleConfirm,
  mode,
}) {
  let currentDate = new Date();
  let curMonth = new Date().getMonth();
  let curDay = new Date().getDate();
  let laterYear = new Date().getFullYear() + 2;
  let curHour = new Date().getUTCHours();
  let curMin = new Date().getUTCMinutes();
  let curSeconds = new Date().getUTCSeconds();
  let curMillisec = new Date().getUTCMilliseconds();
  let laterDate = new Date(
    laterYear,
    curMonth,
    curDay,
    curHour,
    curMin,
    curSeconds,
    curMillisec
  );

  return (
    <SafeAreaView>
      <>
        <TouchableOpacity
          onPress={showDatePicker}
          style={styles.button}
          onValueChange={(item) => setSelectedValue(item)}
        >
          <MaterialCommunityIcons
            name="calendar-multiselect"
            size={20}
            color={colors.white}
          />
          <Text style={styles.buttonText}>
            {format(date, "MMMM do yyyy  hh:mm a")}
          </Text>
        </TouchableOpacity>
      </>
      <DateTimePicker
        isVisible={isDatePickerVisible}
        value={date}
        mode="datetime"
        date={currentDate}
        minimumDate={currentDate}
        maximumDate={laterDate}
        display={Platform.OS === "ios" ? "inline" : "calendar"}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        isDarkModeEnabled={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    backgroundColor: colors.charcoal,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 17,
  },
});

export default DatePicker;
