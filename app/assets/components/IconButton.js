import React from 'react';
import { SafeAreaView, Button, TouchableOpacity, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function IconButton({ onPress, name }) {
    return (
    <Swipeable>
      <SafeAreaView>
          <TouchableOpacity onPress={onPress} style={{
              paddingLeft: 15,
              paddingBottom: 5,
              paddingTop: 10
            }}>
          <MaterialCommunityIcons name={name} color='black' size={35} />
          </TouchableOpacity>
      </SafeAreaView>
    </Swipeable>
    );
}

export default IconButton;