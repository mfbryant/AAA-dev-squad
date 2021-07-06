import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppButton from '../assets/components/AppButton';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <AppButton title="Calendar" onPress={() => navigation.navigate("Calendar")} />
            <AppButton title="Involvement" onPress={() => navigation.navigate("Involvement")} />
            <AppButton title="Organizations" onPress={() => navigation.navigate("Organizations")} />
            <AppButton title="Volunteer Opportunities" onPress={() => navigation.navigate("Volunteer")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default HomeScreen;