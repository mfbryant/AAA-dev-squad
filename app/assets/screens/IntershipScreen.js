import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, FlatList, Modal } from 'react-native';

import Icon from '../components/IconButton';
import Post from '../components/Post';

const fakePosts = [
    {
        id: 1,
        title: "Intership avaliable at Deliotte",
        subtitle: "This summer, Deliotte has several opens in several areas around the country, including: Alabama and Georgia"
    },

    {
        id: 2,
        title: "Are you looking for intership oppurtunities?",
        subtitle: "There are plenty of oppurtunities for you!"
    }

]

function IntershipScreen(props) {
    const [posts, setPost] = useState(fakePosts);

    return (
            <>
            <ImageBackground style={styles.image} backgroundColor="crimson">
            <View>
            <Icon name="arrow-left-bold" onPress={() => console.log("exit pressed")}/>
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
           </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        color: 'white',
        flex: 1,
    },
    image: {
        flex: 1,
    },
    text: {
        color: '#fff',
    },
})

export default IntershipScreen;
