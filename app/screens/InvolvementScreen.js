import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { AppButton } from "../assets/components/Button";

function InvolvementScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../assets/graphics/denny.jpg")}
      blurRadius={1}
    >
      <View style={styles.container}>
        <AppButton
          title="Internship Info"
          onPress={() => console.log("internship pressed")}
        />
        <AppButton
          title="Hiring Sponsors"
          onPress={() => navigation.navigate("Sponsors")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginTop: 50,
  },
  image: {
    flex: 1,
  },
  text: {
    flexShrink: 1,
  },
});

export default InvolvementScreen;
