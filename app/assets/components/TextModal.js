import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

import { FormButton } from "./Button";
import { BlurView } from "expo-blur";

function TextModal({
  buttonColor,
  buttonText,
  text,
  icon,
  secure,
  input,
  onChange,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <FormButton
        v={true}
        onPress={() => setModalVisible(true)}
        text={buttonText}
        color={buttonColor}
      ></FormButton>
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill}>
            <SafeAreaView style={styles.screen}>
              <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.modal}>
                  {icon && (
                    <MaterialCommunityIcons
                      name={icon}
                      size={30}
                      color={defaultStyles.colors.white}
                    />
                  )}
                  <Text style={styles.text}>{text}</Text>
                  <View style={styles.box}>
                    <TextInput
                      onChangeText={onChange}
                      secureTextEntry={secure}
                      style={styles.input}
                    >
                      {input}
                    </TextInput>
                  </View>
                  <View style={styles.buttonRow}>
                    <Button
                      title="Cancel"
                      onPress={() => setModalVisible(false)}
                    />
                    <Button
                      title="Submit"
                      onPress={() => setModalVisible(false)}
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </SafeAreaView>
          </BlurView>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: defaultStyles.colors.charcoal,
    width: "60%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    margin: 5,
    color: defaultStyles.colors.white,
    fontWeight: "700",
    fontSize: 15,
  },
  input: {
    color: defaultStyles.colors.leet,
    fontWeight: "600",
    fontSize: 17,
    width: "100%",
  },
  box: {
    backgroundColor: defaultStyles.colors.grey,
    borderWidth: 2,
    borderColor: defaultStyles.colors.grey,
    borderRadius: 5,
    width: "90%",
    marginTop: 5,
    justifyContent: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
});

export default TextModal;
