import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';

export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        '2021-06-30': [{name: 'vacation'}],
        '2021-07-04': [{name: 'July the 4th! Fireworks at the lake from 8-11pm'}]
      }
    };
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={Date()}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
         // monthFormat={'yyyy'}
         // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems(day) {
    // setTimeout(() => {
    //   for (let i = -15; i < 85; i++) {
    //     const time = day.timestamp + i * 24 * 60 * 60 * 1000;
    //     const strTime = this.timeToString(time);
    //     if (!this.state.items[strTime]) {
    //       this.state.items[strTime] = [];
    //       const numItems = Math.floor(Math.random() * 5);
    //       for (let j = 0; j < numItems; j++) {
    //         this.state.items[strTime].push({
    //           name: 'Event on ' + strTime,
    //           height: Math.max(50, Math.floor(Math.random() * 150))
    //         });
    //       }
    //     }
    //   }
    //   //console.log(this.state.items);
    // }, 1000);
    const newItems = {};
    Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
    this.setState({
      items: newItems
    });
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});






// function CalendarScreen(props) {
//   const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
//   const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
//   const workout = {key: 'workout', color: 'green'};

//     return (
//       <Agenda 
//         // Callback that gets called when items for a certain month should be loaded (month became visible)
//         loadItemsForMonth={(month) => {console.log('trigger items loading')}}
//         // Callback that fires when the calendar is opened or closed
//         onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
//         // Callback that gets called on day press
//         onDayPress={(day) => {console.log('day pressed')}}
//         // Callback that gets called when day changes while scrolling agenda list
//         onDayChange={(day) => {console.log('day changed')}}

//         items={{
//           '2021-06-28': [{name: 'vacation'}],
//           '2021-06-29': [{name: 'doctor'}],
//           '2021-06-30': [],
//         }}
//         // renderItem={(item) => (
//         //   <MyEventComponent item={item} />
//         // )}

//         // markingType={'multi-dot'}
//         // markedDates={{
//         // '2021-07-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
//         // '2021-07-26': {dots: [massage, workout], disabled: true}
//         // }}

//         // markingType={'period'}
//         // markedDates={{
//         //   '2021-06-20': {textColor: 'green'},
//         //   '2021-06-22': {startingDay: true, color: 'green'},
//         //   '2021-06-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
//         //   '2021-07-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
//         // }}

//         //Day of the week header colors
//         theme={{ 
//           'stylesheet.calendar.header': {
//             dayTextAtIndex0: {
//               color: 'red'
//             },
//             dayTextAtIndex6: {
//               color: 'blue'
//             }
//           }
//         }}

//       />
//     );
// };

// // const styles = StyleSheet.create({
    
// // });

// export default CalendarScreen;
