import React from 'react';
import { TouchableOpacity, Text, StyleSheet, SafeAreaView, View } from 'react-native';

function AppButton({ title, onPress }) {
    return (
        <SafeAreaView>
        <TouchableOpacity style={[styles.button, {backgroundColor: 'crimson'}]}
        onPress={onPress}>
            <Text style={styles.text} numberOfLines={2}>{title}</Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 50,
        height: 50,
        justifyContent: 'center',
        marginVertical: 10,
        padding: 0,
        width: '100%',

    },
    text: {
        color: "#c9d1d8",
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
})

export default AppButton;