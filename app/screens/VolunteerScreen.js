import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import Screen from '../assets/components/Screen';
import Icon from '../assets/components/IconButton';
import Post from '../assets/components/Post';

const fakePosts = [
    {
        id: 1,
        group: 'CMISS',
        title: "Involvement oppurtunity at soup bowl!",
        subtitle: 'Going to make this a very long text to make sure we are still handling everything the way we should be handling it'
    },

    {
        id: 2,
        group: 'AIMS',
        title: "Involvement oppurtunity",
        subtitle: "Get involved today! There needs everywhere!"
    },
    {
        id: 3,
        group: 'WIT',
        title: "Get Involved!",
        subtitle: "Today is the day to do this and that and allll that"
    },
    {
        id: 4,
        group: "AIMS AMBASSADOR",
        title: "SIGN UP NOW!",
        subtitle: "Tomorrow"
    }

]

function VolunteerScreen({ navigation }) {
    
    const [posts, setPost] = useState(fakePosts);
    const [refreshing, setRefreshing] = useState(false);
    //Possible Icons: close, arrow-left, chevron-left/chevron-right/chevron-down/chevron-up
    return (
    <Screen>
        <ImageBackground style={styles.image} backgroundColor="#e9e2e4">
            <StatusBar style="auto"/>
            {/* <View style={{flexDirection: 'row'}}>
            <Icon
            style={styles.icon}
            name="close" 
            color='crimson' 
            onPress={() => console.log("exit pressed")} 
            size={40}/>
            <TouchableOpacity>
                    <Icon name='plus-box' 
                    onPress={() => 
                    console.log('Add Pressed')} 
                    size={40} 
                    color='crimson'
                    style={styles.add}/>
                </TouchableOpacity>
            </View> */}
            <View style={styles.container}>
                <FlatList 
                data={posts}
                keyExtractor={post => post.id.toString()} 
                renderItem={({ item }) => <Post
                group={item.group} 
                title={item.title}
                subtitle={item.subtitle}
                onPress={() => navigation.navigate('VolunteerDetail' , item)}
                />}
                refreshing={refreshing}
                onRefresh={() => {setPost(fakePosts);
                }}
                />
            </View>
          </ImageBackground>
        </Screen>
    );
}

const styles = StyleSheet.create({
    add: {
        paddingLeft: 310,
        paddingTop: 10
        },
    container: {
        flex: 1,
        width: '100%',
    },
    icon: {
        paddingRight: 10,
        paddingTop: 10,
    },
    image: {
        flex: 1,
    },
})

export default VolunteerScreen;
