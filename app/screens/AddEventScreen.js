import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import Screen from "../assets/components/Screen";
import colors from "../assets/config/colors";

function AddEventScreen(props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());

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

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setDate(date);
    hideDatePicker();
  };

  return (
    <Screen style={styles.screen}>
      <Text style={styles.title}>Name of Event</Text>
      <View style={styles.textBox}>
        <TextInput
          placeholder="GOBD, Tree-Cleaning, etc.,"
          style={styles.textInput}
        />
      </View>
      <View style={styles.separator}></View>
      <Text style={styles.title}>Organization</Text>
      <View style={styles.textBox}>
        <TextInput
          placeholder="aims, cmiss, wit, etc.,"
          style={styles.textInput}
        />
      </View>
      <View style={styles.separator}></View>
      <View style={styles.date}>
        <Text style={styles.title}>Date of Event</Text>
        <TouchableOpacity onPress={showDatePicker} style={styles.button}>
          <Text style={styles.buttonText}>{date.toDateString()}</Text>
        </TouchableOpacity>
      </View>
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
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  textInput: {},
  textBox: {
    backgroundColor: colors.leet,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 3,
  },
  separator: {
    width: "100%",
    height: 10,
  },
  date: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingRight: 5,
  },
  button: {
    backgroundColor: colors.charcoal,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 20,
  },
});

export default AddEventScreen;
