import React from 'react';
import { SafeAreaView, Button, TouchableOpacity, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function IconButton({ onPress, name, size, color }) {
    return (
    <Swipeable>
      <SafeAreaView>
        <View>
          <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons name={name} color={color} size={size} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Swipeable>
    );
}

const styles = StyleSheet.create({
  // container: {
  //   paddingRight: 10,
  //   paddingBottom: 5,
  //   paddingTop: 5,
  //   alignItems: 'flex-end'
  // }
})

export default IconButton;