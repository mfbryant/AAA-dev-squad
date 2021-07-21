import React, { Component } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Agenda } from 'react-native-calendars';

import AppButton from '../assets/components/AppButton';
import Screen from '../assets/components/Screen';

  // return(
  //   <SafeAreaView>
  //     <Agenda items={items} renderItem={renderItem}/>
  //   </SafeAreaView>
  // );



export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);

    const ambassadors = { key: 'ambassadors', color: 'green' }

    this.state = {
      items: {
        '2021-07-01': [{ dots: [ambassadors], name: 'current day testing', selected: true, selectedColor: 'red' }],
        //August
        '2021-08-20': [{ name: 'Welcome Back Event at the UA Rec Fields @5-7:00!!' }],
        '2021-08-26': [{ name: 'Get On Board Day at the Ferg Promenade @5-9:00' }],
        //September
        '2021-09-09': [{ name: 'Mock Mock Interviews with Commonly Asked Interview Questions Workshop' }],
        '2021-09-11': [{ name: 'Tailgate sponsored by International Paper' }],
        '2021-09-16': [{ name: 'Mock Interviews' }],
        '2021-09-17': [{ name: 'Mock Interviews' }],
        '2021-09-22': [{ name: 'Career Fair' }],
        //October

        //November

        //December

      }
    };
  }

  render() {
    return (
      <Screen>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          renderEmptyData={() => { return null }}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          renderItem={this.renderItem.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          selected={Date()}
          showClosingKnob={true}
          style={styles.calendar}
        />
      </Screen>
    );
  }

  // populateCalendar() {
  //   const [data, setData] = useState([]);

  //   const getEvents = async () => {
  //     try {
  //         const response = await fetch('https://aims-ambassadorship-app.herokuapp.com/api/events');
  //         const json = await response.json();
  //         setData(json);
  //     } catch (error) {
  //         console.error(error);
  //     }   
  //   }
    
  //   useEffect(() => {
  //       getEvents();
  //   }, []);
    
  // }

  

  loadItems(day) {
    const newItems = {};
    Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
    this.setState({
      items: newItems
    });
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.item, { height: item.height }]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
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
  calendar: {
    borderRadius: 10,
    padding: 10,
  },
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
    flex: 1,
    paddingTop: 30
  },
  safe: {
    flex: 1,
  }
});


// export default CalendarScreen;