import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import DateTimePicker from "react-native-modal-datetime-picker";
import colors from "../../config/colors";

function TimePicker({
  showDatePicker,
  hideDatePicker,
  isDatePickerVisible,
  date,
  handleConfirm,
}) {
  let currentDate = new Date();

  return (
    <SafeAreaView>
      <>
        <TouchableOpacity
          onPress={showDatePicker}
          style={styles.button}
          onValueChange={(item) => setSelectedValue(item)}
        >
          <MaterialCommunityIcons
            name="calendar-clock"
            size={20}
            color={colors.white}
          />
          <Text style={styles.buttonText}>{format(date, "hh:mm a")}</Text>
        </TouchableOpacity>
      </>
      <DateTimePicker
        isVisible={isDatePickerVisible}
        value={date}
        mode="time"
        minuteInterval={15}
        date={currentDate}
        display="spinner"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        // isDarkModeEnabled={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 2,
    backgroundColor: colors.charcoal,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 17,
    paddingLeft: 10,
  },
});

export default TimePicker;
