import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Agenda } from 'react-native-calendars';

import Screen from '../assets/components/Screen';

export default function CalendarScreen() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  
  const getEvents = async () => {
    try {
        const response = await fetch('https://aims-ambassadorship-app.herokuapp.com/api/events');
        const json = await response.json();
        setData(json);
    } catch (error) {
        console.error(error);
    }   
  }
  useEffect(() => {
      getEvents();
  }, []);
  
  // const timeToString = (time) => {
    //   const date = new Date(time);
    //   return date.toISOString().split('T')[0];
    // };
    
  const loadItems = (day) => {
    
    const newItems = {};
    Object.keys(data).forEach(key => { newItems[data.eventId] = data[data.eventName]; });
    setItems(newItems);
  }
  
  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={[styles.item, { height: item.height }]}
        onPress={() => alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <Screen>
      <Agenda
            items={items}
            loadItemsForMonth={loadItems}
            renderEmptyData={() => { return null }}
            // renderEmptyDate={this.renderEmptyDate.bind(this)}
            renderItem={renderItem}
            // rowHasChanged={this.rowHasChanged.bind(this)}
            selected={Date()}
            showClosingKnob={true}
            style={styles.calendar}
      />
    </Screen>
  );
};

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

// class CalendarScreen extends Component {
  
//   constructor(props) {
//     super(props);
//     populateCalendar();


//     const ambassadors = { key: 'ambassadors', color: 'green' }

//     this.state = {
//       items: {
//         '2021-07-01': [{ dots: [ambassadors], name: 'current day testing', selected: true, selectedColor: 'red' }],
//         //August
//         '2021-08-20': [{ name: 'Welcome Back Event at the UA Rec Fields @5-7:00!!' }],
        
      

//       }
//     };
//   }

//   render() {
//     return (
//       <Screen>
//         <Agenda
//           items={this.populateCalendar.items}
//           loadItemsForMonth={this.loadItems.bind(this)}
//           renderEmptyData={() => { return null }}
//           renderEmptyDate={this.renderEmptyDate.bind(this)}
//           renderItem={this.renderItem.bind(this)}
//           rowHasChanged={this.rowHasChanged.bind(this)}
//           selected={Date()}
//           showClosingKnob={true}
//           style={styles.calendar}
//         />
//       </Screen>
//     );
//   }

  

  

//   renderEmptyDate() {
//     return (
//       <View style={styles.emptyDate}></View>
//     );
//   }

//   rowHasChanged(r1, r2) {
//     return r1.name !== r2.name;
//   }

//   timeToString(time) {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
//   }

// }


