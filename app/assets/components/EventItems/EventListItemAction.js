import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import fetch from "node-fetch";

import colors from "../../config/colors";

function EventListItemAction({ favs, event, user }) {
  // const [favorites, setFavorites] = useState([]);
  const url = "https://aims-ambassadorship-app.herokuapp.com/api/favorites";
  // const getData = async () => {
  //   try {
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     setFavorites(json);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const onFavorite = () => {
    let newFav = {
      eventId: event.eventId,
      userId: user.userId,
    };

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFav),
    });
  };

  const onRemoveFavorite = () => {
    const f = favs.findIndex(
      (item) =>
        item.eventId.toString() === event.eventId.toString() &&
        item.userId.toString() === user.userId.toString()
    );
    const id = favs[f].favoriteId;

    fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  };

  const ifExists = () => {
    if (
      favs.filter(
        (item) =>
          item.eventId.toString() === event.eventId.toString() &&
          item.userId.toString() === user.userId.toString()
      ).length > 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <TouchableWithoutFeedback
      onPress={ifExists ? () => onRemoveFavorite() : () => onFavorite()}
    >
      <View style={styles.container}>
        <AntDesign
          name={ifExists ? "star" : "staro"}
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
