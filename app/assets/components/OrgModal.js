import React, { useState } from "react";
import {
  Modal,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import OrgName from "./OrgName";
import colors from "../config/colors";

function OrgModal({ item, children }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <OrgName orgName={item.orgName} onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.screen}>
          <SafeAreaView style={styles.topArea}>
            <View style={styles.topButton}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <View style={styles.top}>
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
    backgroundColor: colors.light,
  },
  top: {
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  topButton: {
    backgroundColor: colors.grey,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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

export default OrgModal;
