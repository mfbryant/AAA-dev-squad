import React, { useState } from "react";
import {
  Modal,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FormButton } from "./Button";
import colors from "../config/colors";

function ScreenModal({
  buttonShow,
  buttonText,
  buttonColor,
  onShow,
  onDismiss,
  children,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <FormButton
        v={buttonShow}
        text={buttonText}
        color={buttonColor}
        onPress={() => setModalVisible(true)}
      />
      <Modal
        onShow={onShow}
        onDismiss={onDismiss}
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.screen}>
          <SafeAreaView style={styles.topArea}>
            <View style={styles.topButton}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <View style={styles.top}>
                  {/* <MaterialIcons
                  name="keyboard-arrow-down"
                  size={40}
                  color={colors.white}
                /> */}
                  <Text style={styles.text}>Close</Text>
                </View>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
          <View style={styles.modal}>
            <SafeAreaView style={styles.body}>{children}</SafeAreaView>
          </View>
        </View>
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
    flex: 1,
    width: "100%",
    backgroundColor: colors.black,
  },
  top: {
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
  },
  topButton: {
    backgroundColor: colors.grey,
  },
  topArea: {
    width: "100%",
  },
  body: {
    flex: 1,
  },
  text: {
    color: colors.white,
    fontWeight: "500",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default ScreenModal;
