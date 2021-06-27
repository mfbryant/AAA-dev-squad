import React from 'react';
import { View } from 'react-native';
import { Agenda } from 'react-native-calendars';

function CalendarScreen(props) {
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};

    return (
      <Agenda 
        // Callback that gets called when items for a certain month should be loaded (month became visible)
        loadItemsForMonth={(month) => {console.log('trigger items loading')}}
        // Callback that fires when the calendar is opened or closed
        onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
        // Callback that gets called on day press
        onDayPress={(day) => {console.log('day pressed')}}
        // Callback that gets called when day changes while scrolling agenda list
        onDayChange={(day) => {console.log('day changed')}}

        items={{
          '2021-06-28': [{name: 'vacation', dayText: 'vacation' }],
          '2021-06-29': [{name: 'doctor'}],
        }}

        renderItem={item => <View />}
        // renderDay={(day, item) => <View />}
        // renderEmptyDate={() => <View />}
        // rowHasChanged={(r1, r2) => (r1.text !== r2.text)}
        // hideKnob={true}

        // markingType={'multi-dot'}
        // markedDates={{
        // '2021-07-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
        // '2021-07-26': {dots: [massage, workout], disabled: true}
        // }}

        // markingType={'period'}
        // markedDates={{
        //   '2021-06-20': {textColor: 'green'},
        //   '2021-06-22': {startingDay: true, color: 'green'},
        //   '2021-06-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
        //   '2021-07-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
        // }}

        //Day of the week header colors
        theme={{ 
          'stylesheet.calendar.header': {
            dayTextAtIndex0: {
              color: 'red'
            },
            dayTextAtIndex6: {
              color: 'blue'
            }
          }
        }}

      />
    );
};

// const styles = StyleSheet.create({
    
// });

export default CalendarScreen;
