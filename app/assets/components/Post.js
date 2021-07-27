import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

import AffinityText from './AffinityText';

function Post({ group, onPress, title, subtitle }) {
    //Makes a "postcard" for each post within the selected tab
    return (
          <TouchableOpacity onPress={onPress}>
          <View style={styles.conatiner}>
            <View style={styles.post}>
                 <AffinityText style={styles.group}>{group}</AffinityText>
                <Text numberOfLines={2} style={styles.title}>{title}</Text>
                <Text numberOfLines={3} style={styles.subtitle}>{subtitle}</Text>
            </View>
          </View>
          </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: 'crimson',
        width: '95%',
        padding: 20,
        borderRadius: 25,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'center'
    },
    group: {
        marginBottom: 10,
        fontSize: 20,
        marginLeft: 5,
        
    },
    post: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        // textDecorationLine: 'underline',
        //^ not sure if we should or should not use an underline, thoughts?
        marginBottom: 10
    },
    subtitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '200',
        marginBottom: 15
    }
})

export default Post;