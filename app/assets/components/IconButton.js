import React from 'react';
import { SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function IconButton({ onPress }) {
    return (
      <SafeAreaView>
          <TouchableOpacity onPress={onPress} style={{
              paddingLeft: 15,
              paddingBottom: 20,
              paddingTop: 10
          }}>
          <MaterialCommunityIcons name="backspace-outline" color='grey' size={35} />
          </TouchableOpacity>
      </SafeAreaView>
    );
}

export default IconButton;