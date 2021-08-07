import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import colors from "../assets/config/colors";
import Icon from "../assets/components/IconButton";
import AppPicker from "../assets/components/AppPicker";
import Screen from "../assets/components/Screen";
import DatePicker from "../assets/components/DatePicker";
import TimePicker from "../assets/components/TimePicker";
import FormButton from "../assets/components/FormButton";
import TextModal from "../assets/components/TextModal";
import EventScreen from "../assets/components/EventScreen";

// const systemOrgs = [
//   {
//     value: 1, // orgID
//     label: "AIMS", // orgAbbr
//   },
//   {
//     value: 2,
//     label: "CMISS",
//   },
//   {
//     value: 3,
//     label: "WIT",
//   },
// ];

function AddEventScreen({ route, navigation }) {
  const { orgData } = route.params;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isStartTimePickerVisible, setStartTimePickerVisibility] = useState(
    false
  );
  const [name, setName] = useState();
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [org, setOrg] = useState();
  const [input, setInput] = useState();

  const handleEventName = (text) => {
    setName(text);
    console.log(name);
  }
  
  const handleDateConfirm = (date) => {
    setDate(date);
    setDatePickerVisibility(false);
  };

  const handleStartTimeConfirm = (startTime) => {
    setStartTime(startTime);
    setStartTimePickerVisibility(false);
  };

  const handleEndTimeConfirm = (endTime) => {
    setEndTime(endTime);
    setEndTimePickerVisibility(false);
  };

  const handleInput = (input) => {
    setInput(input);
  };

  // const handleAddEvent = () => {
  //   try {
  //     const response = await fetch(
  //       "https://aims-ambassadorship-app.herokuapp.com/api/events"
  //     );
  //     const json = await response.json();
  //     setEventData(json);
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   useEffect(() => {
  //     getEvents();
  //   }, []);
  // }

  // const handleAddEvent = () => {
  //   let newEvent = {

  //   }
    
  //   fetch("https://aims-ambassadorship-app.herokuapp.com/api/events", {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newEvent)
  //   })
  // }

  const handleDraft = () => {};

  const handleCancel = () => {
    // if events.includes(event.eventId) {
    //   // delete event from sql
    //   navigation.goBack();
    // } else {
    //   navigation.goBack();
    // }
  };

  return (
    <EventScreen
      barChildren={
        <View style={styles.bar}>
          <Icon
            name="arrow-left"
            color={colors.white}
            onPress={() => navigation.goBack()}
            size={25}
          />
          <Text style={styles.barText}>Your Events</Text>
        </View>
      }
    >
      <Screen style={styles.screen}>
        <Text style={styles.header}>Name of Event</Text>
        <View style={styles.textBox}>
          <TextInput
            // onChangeText={handleEventName}
            placeholder="GOBD, Tree-Cleaning, etc.,"
            placeholderTextColor={colors.leet}
            style={styles.textInput}
          />
        </View>
        <Text style={styles.title}>Organization</Text>
        <AppPicker
          selectedItem={org}
          onSelectItem={(item) => setOrg(item)}
          data={orgData}
          icon="school"
          placeholder="aims, cmiss, wit, etc.,"
        />
        <View style={styles.textRow}>
          <Text style={styles.title}>Date of Event</Text>
          <Text style={styles.title}>Time</Text>
        </View>
        <View style={styles.objectRow}>
          <DatePicker
            showDatePicker={() => setDatePickerVisibility(true)}
            hideDatePicker={() => setDatePickerVisibility(false)}
            isDatePickerVisible={isDatePickerVisible}
            date={date}
            handleConfirm={handleDateConfirm}
          />
          <TimePicker
            showDatePicker={() => setStartTimePickerVisibility(true)}
            hideDatePicker={() => setStartTimePickerVisibility(false)}
            isDatePickerVisible={isStartTimePickerVisible}
            date={startTime}
            handleConfirm={handleStartTimeConfirm}
          />
        </View>
        <Text style={styles.title}>When Does it End?</Text>
        <View style={styles.row}>
          <TimePicker
            showDatePicker={() => setEndTimePickerVisibility(true)}
            hideDatePicker={() => setEndTimePickerVisibility(false)}
            isDatePickerVisible={isEndTimePickerVisible}
            date={endTime}
            handleConfirm={handleEndTimeConfirm}
          />
        </View>
        <Text style={styles.title}>Location</Text>
        <View style={styles.descriptionBox}>
          <TextInput
            placeholder="Ferguson Student Center, AIME Building, Jeff's Office..."
            placeholderTextColor={colors.leet}
            multiline={true}
            style={styles.descriptionInput}
          />
        </View>
        <Text style={styles.title}>Event Description/Details</Text>
        <View style={styles.descriptionBox2}>
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
              onChange={handleInput}
              secure={true}
            />
          </View>
          <FormButton v={true} text="Submit for Review" color={colors.green} />
        </View>
        <View style={styles.buttonRow}>
          <FormButton
            v={true}
            text="Save as Draft"
            color={colors.medium}
            // onPress={handleAddEvent}
          />
        </View>
        <View style={styles.button}>
          <FormButton
            v={true}
            text="Cancel"
            color={colors.danger}
            onPress={handleCancel}
          />
        </View>
      </Screen>
    </EventScreen>
  );
}

const styles = StyleSheet.create({
  barText: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.white,
    marginLeft: 10,
  },
  bar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingBottom: 7,
  },
  screen: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
  },
  textInput: {
    height: 20,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  objectRow: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    flex: 3,
    backgroundColor: colors.light,
    borderWidth: 2,
    borderColor: colors.black,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  descriptionBox2: {
    flex: 4,
    backgroundColor: colors.light,
    borderWidth: 2,
    borderColor: colors.black,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
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
    marginBottom: 10,
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
