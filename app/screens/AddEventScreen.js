import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import AppPicker from "../assets/components/AppPicker";
import Screen from "../assets/components/Screen";
import colors from "../assets/config/colors";

const systemOrgs = [
  {
    value: 1, // orgID
    label: "AIMS", // orgAbbr
  },
  {
    value: 2,
    label: "CMISS",
  },
  {
    value: 3,
    label: "WIT",
  },
];

function AddEventScreen(props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [date, setDate] = useState(new Date());
  const [org, setOrg] = useState();

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
      <Text style={styles.header}>Name of Event</Text>
      <View style={styles.textBox}>
        <TextInput
          placeholder="GOBD, Tree-Cleaning, etc.,"
          style={styles.textInput}
        />
      </View>
      <Text style={styles.title}>Organization</Text>
      <AppPicker
        selectedItem={org}
        onSelectItem={(item) => setOrg(item)}
        items={systemOrgs}
        icon="school"
        placeholder="aims, cmiss, wit, etc.,"
      />
      <View style={styles.date}>
        <Text style={styles.title}>Date of Event</Text>
        <TouchableOpacity
          onPress={showDatePicker}
          style={styles.button}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
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
    padding: 15,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  textInput: {},
  header: {
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 3,
  },
  textBox: {
    backgroundColor: colors.leet,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 3,
  },
  date: {
    marginTop: 5,
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
