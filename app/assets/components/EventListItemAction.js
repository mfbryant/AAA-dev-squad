import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";

const favoriteData = [
  {
    favoriteId: 1,
    eventId: 2,
    userId: 1,
  },
  {
    favoriteId: 2,
    eventId: 1,
    userId: 2,
  },
];

function EventListItemAction({ event, user }) {
  //   const [favorites, setFavorites] = useState([]);

  //   const getData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://aims-ambassadorship-app.herokuapp.com/api/favorites"
  //       );
  //       const json = await response.json();
  //       setFavorites(json);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  const onFavorite = () => {
    let newFav = {
      eventId: event.eventId,
      userId: user.userId,
    };

    // fetch("https://aims-ambassadorship-app.herokuapp.com/api/favorites", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newFav),
    // });
  };

  // Change all instances of favoriteData to favorites once in SQL
  const onRemoveFavorite = () => {
    const filtered = favoriteData.filter(
      (item) => item.eventId !== event.eventId && item.userId !== user.userId
    );
    setFavorites(filtered);
  };

  const ifExists = () => {
    if (
      favoriteData.filter(
        (item) => item.eventId === event.eventId && item.userId === user.userId
      ).length > 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => (ifExists() ? onRemoveFavorite() : onFavorite())}
    >
      <View style={styles.container}>
        <AntDesign
          name={ifExists() ? "star" : "staro"}
          size={25}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.medium,
    width: 65,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EventListItemAction;
