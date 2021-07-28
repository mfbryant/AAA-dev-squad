import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';



function Company({ source, style, onPress }) {
    return (
     <View style={styles.container}>
        <TouchableOpacity onPress={onPress} >
            <Image source={source} style={style} />
        </TouchableOpacity>
     </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: 100,
        width: 100,
    },
})

export default Company;