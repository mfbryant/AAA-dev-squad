import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Screen from "../assets/components/Screen";

function AddEventScreen(props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState("");
  const [laterDate, setLaterDate] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDate(date);
    hideDatePicker();
  };

  useEffect(() => {
    var curMonth = new Date().getMonth() + 1;
    var curDay = new Date().getDate();
    var curYear = new Date().getFullYear();
    var laterYear = new Date().getFullYear() + 2;
    setCurrentDate(curMonth + "/" + curDay + "/" + curYear);
    setLaterDate(curMonth + "/" + curDay + "/" + laterYear);
  }, []);

  return (
    <Screen style={styles.screen}>
      <View></View>
      <DateTimePickerModal
        display={Platform.OS === "ios" ? "inline" : "calendar"}
        isVisible={isDatePickerVisible}
        mode="date"
        minimumDate={currentDate}
        maximumDate={laterDate}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default AddEventScreen;
