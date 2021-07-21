import React, { useEffect, useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import AffinityText from "../assets/components/AffinityText";
import colors from '../assets/config/colors';
import OrgName from '../assets/components/OrgName';
import Screen from '../assets/components/Screen';


export default function OrgScreen() {
    const [data, setData] = useState([]);

    const getOrgs = async () => {
        try {
            const response = await fetch('https://aims-ambassadorship-app.herokuapp.com/api/organizations');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getOrgs();
    }, []);

    return (
        <Screen>
            <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={({ orgId }, index) => orgId.toString()}
                    renderItem={({ item }) => (
                        <OrgName 
                            orgName={item.orgName}
                            onPress
                        />
                    )}
                />
            </View>
            </SafeAreaView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 10,
        width: "100%"
    }
});

// export default OrgScreen;



