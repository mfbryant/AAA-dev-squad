import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Screen from '../assets/components/Screen';

function VolunteerDetailScreen({ route }) {
const post = route.params;

    return (
        <Screen style={styles.container}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.subtitle}>{post.subtitle}</Text>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },

})

export default VolunteerDetailScreen;