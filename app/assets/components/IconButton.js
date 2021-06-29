import React from 'react';
import { SafeAreaView, Button, TouchableOpacity, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function IconButton({ onPress, name, size, color, style }) {
    return (
    <Swipeable>
      <SafeAreaView>
        <View>
          <TouchableOpacity onPress={onPress} style={style}>
          <MaterialCommunityIcons name={name} color={color} size={size}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Swipeable>
    );
}
export default IconButton;