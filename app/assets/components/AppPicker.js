import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PickerItem from "./PickerItem";
import defaultStyles from "../config/styles";

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View
          style={
            selectedItem
              ? [styles.container, styles.cont1]
              : [styles.container, styles.cont2]
          }
        >
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <Text
            style={
              selectedItem
                ? [styles.text, styles.text1]
                : [styles.text, styles.text2]
            }
          >
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <SafeAreaView style={styles.screen}>
          <View style={styles.modalBox}>
            <View style={styles.modal}>
              <Button title="Close" onPress={() => setModalVisible(false)} />
              <FlatList
                data={items}
                keyExtractor={(item) => item.value.toString()}
                renderItem={({ item }) => (
                  <PickerItem
                    label={item.label}
                    onPress={() => {
                      setModalVisible(false);
                      onSelectItem(item);
                    }}
                  />
                )}
              />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: defaultStyles.colors.black,
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  cont1: { backgroundColor: defaultStyles.colors.light },
  cont2: { backgroundColor: defaultStyles.colors.leet },
  text1: { color: defaultStyles.colors.black },
  text2: { color: defaultStyles.colors.medium },
  screen: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalBox: {
    alignItems: "center",
  },
  modal: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: defaultStyles.colors.leet,
    width: "90%",
    borderRadius: 25,
  },
  text: {
    flex: 1,
    fontWeight: "500",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppPicker;
