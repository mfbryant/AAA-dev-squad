import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react/cjs/react.production.min';

export default function OrgScreen(props) {
    let [orgID, setOrgID] = React.useState('')
    let [orgName, setOrgName] = React.useState('')

        const getOrgsApiUrl = 'https://localhost:5001/api/organizations';
        fetch(getOrgsApiUrl)
            .then(response => response.json())
            .then(response => {
                setOrgID(response.orgID);
                setOrgName(response.orgName);
            })
    

    return (
        <View style={styles.container}>
            <Text>{orgID}</Text>
            <Text>{orgName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

// export default OrgScreen;


//GIT PULL


