import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';



function Company({ image, company }) {
    return (
     <View style={styles.container}>
        <TouchableOpacity>
            <Image source={image}/>
            <Text>{company}</Text>
        </TouchableOpacity>
     </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor:'black',

    }
})

export default Company;