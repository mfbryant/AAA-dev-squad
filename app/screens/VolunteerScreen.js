import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, FlatList, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import Screen from '../assets/components/Screen';
import Icon from '../assets/components/IconButton';
import Post from '../assets/components/Post';
import colors from '../assets/config/colors';


const fakePosts = [
    {
        id: 1,
        group: 'CMISS',
        title: "Involvement oppurtunity at soup bowl!",
        subtitle: 'Going to make this a very long text to make sure we are still handling everything the way we should be handling it',
        time: '2 minutes ago'
    },

    {
        id: 2,
        group: 'AIMS',
        title: "Involvement oppurtunity",
        subtitle: "Get involved today! There needs everywhere!",
        time: '3 days ago',
    },
    {
        id: 3,
        group: 'WIT',
        title: "Get Involved!",
        subtitle: "Today is the day to do this and that and allll that",
        time: '35 minutes ago'
    },
    {
        id: 4,
        group: "AMBASSADOR",
        title: "SIGN UP NOW!",
        subtitle: "Tomorrow",
        time: '2 hours ago'
    }

]

function VolunteerScreen({ navigation }) {
    
    const [posts, setPost] = useState(fakePosts);
    const [refreshing, setRefreshing] = useState(false);
    //Possible Icons: close, arrow-left, chevron-left/chevron-right/chevron-down/chevron-up
    return (
    // <Screen>
        <ImageBackground style={styles.image} backgroundColor="#e9e2e4">
            <StatusBar style="light"/>
            <View style={{flexDirection: 'row', paddingTop: 45, backgroundColor: colors.charcoal, justifyContent: 'center'}}>
            <Icon
            style={styles.icon}
            name="close" 
            color='white' 
            onPress={() => console.log("exit pressed")} 
            size={25}/> 
            <Text style={styles.text}>Volunteer Oppurtunities</Text>
            <Icon name='plus' 
                    onPress={() => 
                    console.log('Add Pressed')} 
                    size={25} 
                    color='white'
                    style={styles.add}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                data={posts}
                keyExtractor={post => post.id.toString()} 
                renderItem={({ item }) => <Post
                group={item.group} 
                title={item.title}
                subtitle={item.subtitle}
                time={item.time}
                onPress={() => navigation.navigate('VolunteerDetail' , item)}
                />}
                refreshing={refreshing}
                onRefresh={() => {setPost(fakePosts);
                }}
                />
            </View>
          </ImageBackground>
        // </Screen>
    );
}

const styles = StyleSheet.create({
    add: {
        paddingTop: 7,
        margin: 5,
        },
    container: {
        flex: 1,
        width: '100%',
    },
    icon: {
        paddingRight: 10,
        paddingTop: 7,
        paddingBottom: 4,
        margin: 5
    },
    image: {
        flex: 1,
    },
    text: {
        color: 'white', 
        alignSelf: 'center',
        marginLeft: 35, 
        fontSize: 18, 
        marginRight: 35,
        fontWeight: 'bold' 
    },
})

export default VolunteerScreen;
