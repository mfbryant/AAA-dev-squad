import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


export default function OrgScreen() {
    const [data, setData] = useState([]);
    // const [orgName, setOrgName] = React.useState('')

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

        // const getOrgsApiUrl = 'https://localhost:5001/api/organizations';
        // fetch(getOrgsApiUrl)
        //     .then(response => response.json())
        //     .then(response => {
        //         setOrgID(response.orgID);
        //         setOrgName(response.orgName);
        //     })

    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                keyExtractor={({ orgId }, index) => orgId.toString()}
                renderItem={({ item }) => (
                   <Text>{item.orgName}, {item.orgDeets}</Text>
               )}
            />
            {/* <Text>{orgName}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

// export default OrgScreen;



