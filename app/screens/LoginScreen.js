import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import * as GoogleSignIn from "expo-google-sign-in";
import { StatusBar } from "expo-status-bar";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../assets/components/Screen";
import AffinityText from "../assets/components/AffinityText";
import * as Google from "expo-auth-session/providers/google";

function LoginScreen({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    responseType: "id_token",
    expoClientId:
      "425541249408-3plajqimd7pt1ne62ggngv63lkgf7ak1.apps.googleusercontent.com",
    iosClientId:
      "425541249408-cg5c17mv09k3141e6f51p55j256tjq4v.apps.googleusercontent.com",
    androidClientId:
      "425541249408-okf5lqjevg39dia3i0k8t5bkm1mcrtar.apps.googleusercontent.com",
    scopes: ["email", "profile"],
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
    }
  }, [response]);

  return (
    <Screen>
      <StatusBar style="auto" />
      <AffinityText style={styles.text}>Aims</AffinityText>
      <TouchableOpacity
        disabled={!request}
        style={styles.button}
        onPress={() => promptAsync()}
      >
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="google" size={34} color={"#fff"} />
          <Text style={styles.characters}>Sign In With Google</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.alabama}>
        The University of Alabama{" "}
        {<MaterialCommunityIcons name="registered-trademark" />}
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  alabama: {
    textAlign: "center",
    textAlignVertical: "bottom",
    fontWeight: "bold",
    marginTop: 425,
  },
  button: {
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "crimson",
    height: 55,
    marginTop: 125,
    padding: 10,
    width: "90%",
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
    fontSize: 125,
    marginTop: 20,
  },
  characters: {
    fontSize: 27,
    color: "#fff",
    marginLeft: 10,
    fontWeight: "500",
    textAlignVertical: "center",
    paddingLeft: 10,
  },
});

export default LoginScreen;
