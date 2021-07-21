import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import colors from "../assets/config/colors";

import AppPicker from "../assets/components/AppPicker";
import Screen from "../assets/components/Screen";
import DatePicker from "../assets/components/DatePicker";
import FormButton from "../assets/components/FormButton";
import TextModal from "../assets/components/TextModal";

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
  const [date, setDate] = useState(new Date());
  const [org, setOrg] = useState();
  const [input, setInput] = useState();

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
      <DatePicker
        showDatePicker={showDatePicker}
        hideDatePicker={hideDatePicker}
        isDatePickerVisible={isDatePickerVisible}
        date={date}
        handleConfirm={handleConfirm}
      />
      <Text style={styles.title}>When Does it End?</Text>
      <DatePicker
        showDatePicker={showDatePicker}
        hideDatePicker={hideDatePicker}
        isDatePickerVisible={isDatePickerVisible}
        date={date}
        handleConfirm={handleConfirm}
      />
      <Text style={styles.title}>Event Description/Details</Text>
      <View style={styles.descriptionBox}>
        <TextInput
          placeholder="Cleaning the wonderful trees around campus..."
          placeholderTextColor={colors.leet}
          multiline={true}
          style={styles.descriptionInput}
        />
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.spacing}>
          <TextModal
            icon="lock"
            buttonText="Bypass Review"
            buttonColor={colors.medium}
            text="Enter Executive Key"
            input={input}
            secure={true}
          />
        </View>
        <FormButton text="Submit for Review" color={colors.green} />
      </View>
      <View style={styles.buttonRow}>
        <FormButton text="Save as Draft" color={colors.medium} />
      </View>
      <View style={styles.button}>
        <FormButton text="Cancel" color={colors.danger} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
  },
  textInput: {
    height: 20,
    fontWeight: "600",
  },
  descriptionInput: {
    fontWeight: "600",
    overflow: "scroll",
    height: "100%",
  },
  header: {
    fontSize: 17,
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
  descriptionBox: {
    flex: 1,
    backgroundColor: colors.light,
    borderWidth: 2,
    borderColor: colors.black,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: "600",
    paddingBottom: 3,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
    justifyContent: "space-evenly",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  spacing: {
    marginRight: 10,
  },
});

export default AddEventScreen;
