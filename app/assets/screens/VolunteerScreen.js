import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import Icon from '../components/IconButton';
import Post from '../components/Post';

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
            <>
            <ImageBackground style={styles.image} backgroundColor="crimson">
            <View style={styles.icon}>
            <Icon 
            name="chevron-down" 
            color='black' 
            onPress={() => console.log("exit pressed")} 
            size={35}/>
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
                <TouchableOpacity>
                <View style={styles.add}>
                    <MaterialCommunityIcons 
                    name='plus' 
                    size={40}
                    onPress={() => console.log('add pressed')}
                    color="crimson" 
                    />
                    {/*<Icon name='plus' onPress={() => console.log('Add Pressed')} size={40} color='crimson'/> */}
                </View>
                </TouchableOpacity>
            </View>
            </ImageBackground>
           </>
    );
}

const styles = StyleSheet.create({
    add: {
        height:50,
        width: 50,
        alignSelf: 'flex-end',
        borderRadius: 25,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 10,
        
    },
    container: {
        width: '100%',
        color: 'white',
        flex: 1,
    },
    icon: {
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        alignItems: 'flex-end'
    },
    image: {
        flex: 1,
    },
    text: {
        color: '#fff',
    },
})

export default VolunteerScreen;
