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

function AddEventScreen({ route, navigation }) {
  const { eventData, orgData, event, user } = route.params;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isStartTimePickerVisible, setStartTimePickerVisibility] = useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);

  // Just added, feeds data from previous navigator page if user selects an event that is in draft mode.
  const [date, setDate] = useState(
    event.startDate != null ? new Date(event.startDate) : new Date()
  );
  const [startTime, setStartTime] = useState(
    event.startDate != null ? new Date(event.startDate) : new Date()
  );
  const [endTime, setEndTime] = useState(
    event.endDate != null ? new Date(event.endDate) : new Date()
  );
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  // End of changes
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [input, setInput] = useState('');
  // const [nEvent, setEvent] = useState();

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
  
  const handleSubmit = (event) => {
    let inputName = event.eventName; 
    let inputOrg = event.org;
    // let inputDate = date;
    let inputStart = date + startTime;
    let inputEnd = date + endTime; 
    let inputLocation = event.location; 
    let inputDeets = event.description;
    let newEvent = {
      eventName: inputName,
      startDate: inputStart,
      endDate: inputEnd,
      location: inputLocation,
      eventDeets: inputDeets,
      orgId: inputOrg,
      eventDraft: false,
      eventPending: true,
      eventApproved: false,
      userId: event.userId
    };
    // setEvent(newEvent);

    fetch("https://aims-ambassadorship-app.herokuapp.com/api/events", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent)
    })

    navigation.goBack();
  };

  const handleDraft = () => {
    navigation.goBack();
  };

  const handleCancel = () => {
    if (event.eventId != null) {
      if (
        eventData.filter(
          (i) => i.eventId.toString() === event.eventId.toString()
        ) != null
      ) {
        event = null; // delete event
      }
    }
    navigation.goBack();
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
          <Text style={styles.barText}>Events</Text>
        </View>
      }
    >
      <Screen style={styles.screen}>
        <Text style={styles.header}>Name of Event</Text>
        <View
          style={
            name
              ? [styles.textBox, styles.text2]
              : [styles.textBox, { backgroundColor: colors.leet }]
          }
        >
          <TextInput
            onChangeText={setName}
            placeholder="GOBD, Tree-Cleaning, etc.,"
            placeholderTextColor={colors.medium}
            style={styles.textInput}
          >
            {event.eventName}
          </TextInput>
        </View>
        <Text style={styles.title}>Organization</Text>
        <AppPicker
          selectedItem={org}
          onSelectItem={(item) => setOrg(item)}
          data={orgData}
          status={user.executive}
          user={user}
          icon="school"
          placeholder={
            event.orgId != null
              ? orgData[event.orgId - 1].orgName
              : "aims, cmiss, wit, etc.,"
          }
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
        <View
          style={
            location
              ? [styles.descriptionBox, styles.text2]
              : [styles.descriptionBox, { backgroundColor: colors.leet }]
          }
        >
          <TextInput
            placeholder="Ferguson Student Center, AIME Building, Jeff's Office..."
            placeholderTextColor={colors.medium}
            multiline={true}
            onChangeText={setLocation}
            style={styles.descriptionInput}
          >
            {event.location}
          </TextInput>
        </View>
        <Text style={styles.title}>Event Description/Details</Text>
        <View
          style={
            description
              ? [styles.descriptionBox2, styles.text2]
              : [styles.descriptionBox2, { backgroundColor: colors.leet }]
          }
        >
          <TextInput
            placeholder="Cleaning the wonderful trees around campus..."
            placeholderTextColor={colors.medium}
            multiline={true}
            onChangeText={setDescription}
            style={styles.descriptionInput}
          >
            {event.eventDeets}
          </TextInput>
        </View>
        <View style={[styles.buttonRow, { marginTop: 5 }]}>
          {!user.executive && (
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
          )}
          <FormButton
            v={true}
            text={user.executive ? "Submit" : "Submit for Review"}
            color={colors.green}
            onPress={handleSubmit}
          />
        </View>
        {!user.executive && (
          <View style={styles.buttonRow}>
            <FormButton
              v={true}
              text="Save as Draft"
              color={colors.medium}
              onPress={handleDraft}
            />
          </View>
        )}
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
  text2: {
    backgroundColor: colors.light,
    borderWidth: 2,
    borderColor: colors.leet,
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  descriptionBox: {
    flex: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  descriptionBox2: {
    flex: 4,
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
