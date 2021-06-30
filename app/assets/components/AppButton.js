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
        width: '100%',
        height: 125,
        borderRadius: 50,
        marginVertical: 10,
        padding: 20,
        alignItems: 'center',

    },
    text: {
        color: "#c9d1d8",
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 40,
        padding: 20,
        textAlign: 'center',
        fontWeight:'300',
    },
})

export default AppButton;