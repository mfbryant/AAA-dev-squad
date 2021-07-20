import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
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
    setDate(date);
    hideDatePicker();
  };

  return (
    <Screen style={styles.screen}>
      <Text style={styles.header}>Name of Event</Text>
      <View style={styles.textBox}>
        <TextInput
          placeholder="GOBD, Tree-Cleaning, etc.,"
          placeholderTextColor={colors.leet}
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
      <Text style={styles.title}>Date & Time of Event</Text>
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
      <View style={styles.buttonBox}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.bigButton}></TouchableOpacity>
          <TouchableOpacity style={styles.bigButton}></TouchableOpacity>
          <TouchableOpacity style={styles.bigButton}></TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.bigButton}></TouchableOpacity>
          <TouchableOpacity style={styles.bigButton}></TouchableOpacity>
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
      </View>
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
  textInput: {
    height: 20,
    fontWeight: "600",
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 3,
  },
  textBox: {
    backgroundColor: colors.light,
    borderWidth: 2,
    borderColor: colors.black,
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
  buttonBox: {
    flex: 1,
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bigButton: {
    flex: 1,
    height: 50,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "black",
  },
});

export default AddEventScreen;
