import React from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";

var logo = require("../assets/aims-splash-logo.png");
var watermark = require("../assets/ua-watermark.png");

function Splash() {
  return (
    <>
      <ImageBackground style={styles.container}>
        <Image source={logo} style={styles.image} width={"70%"} />
        <Image source={watermark} style={styles.image} width={"50%"} />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    resizeMode: "contain",
  },
});

export default Splash;
