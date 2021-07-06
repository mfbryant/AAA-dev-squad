import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import Icon from '../assets/components/IconButton';
import Post from '../assets/components/Post';

const fakePosts = [
    {
        id: 1,
        title: "Involvement oppurtunity at soup bowl!",
        subtitle: "This week soup bowl is in need of people to help make food, serve, and many other things. I am going to keep writing for more length"
    },

    {
        id: 2,
        title: "Involvement oppurtunity",
        subtitle: "Get involved today! There needs everywhere!"
    },
    {
        id: 3,
        title: "Get Involved!",
        subtitle: "Today is the day to do this and that and allll that"
    },
    {
        id: 4,
        title: "SIGN UP NOW!",
        subtitle: "Tomorrow"
    }

]

function VolunteerScreen(props) {
    const [posts, setPost] = useState(fakePosts);
    //Possible Icons: close, arrow-left, chevron-left/chevron-right/chevron-down/chevron-up
    return (
            <ImageBackground style={styles.image} backgroundColor="#e9e2e4">
            <StatusBar style="auto"/>
            <View style={{flexDirection: 'row'}}>
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
            </View>
            <View style={styles.container}>
                <FlatList 
                data={posts}
                keyExtractor={post => post.id.toString()} 
                renderItem={({ item }) => <Post 
                title={item.title}
                subtitle={item.subtitle}
                onPress={() => console.log(item.id)}
                />} />
            </View>
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    add: {
        paddingLeft: 310,
        paddingTop: 10,
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
