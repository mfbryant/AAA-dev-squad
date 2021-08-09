import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import OrgModal from "../assets/components/OrgModal";
import AffinityText from "../assets/components/AffinityText";
import Screen from "../assets/components/Screen";
import SocialTag from "../assets/components/SocialTag";
import colors from "../assets/config/colors";
import Constants from "expo-constants";

export default function OrgScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  const getOrgs = async () => {
    try {
      const response = await fetch(
        "https://aims-ambassadorship-app.herokuapp.com/api/organizations"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOrgs();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={data}
            keyExtractor={({ orgId }) => orgId.toString()}
            renderItem={({ item }) => (
              <OrgModal
                item={item}
                children={
                  <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.modalBox}>
                      <AffinityText
                        adjustsFontSizeToFit
                        numberOfLines={1}
                        style={styles.modalBoxText}
                      >
                        {item.orgName}
                      </AffinityText>
                      <Text
                        adjustsFontSizeToFit
                        numberOfLines={1}
                        style={styles.deets}
                      >
                        {item.orgDeets}
                      </Text>
                      <View style={styles.socialBox}>
                        {item.insta != "" ? (
                          <SocialTag site="instagram" children={item.insta} />
                        ) : null}
                        {item.twitter != "" ? (
                          <SocialTag site="twitter" children={item.twitter} />
                        ) : null}
                        {item.linkedIn != "" ? (
                          <SocialTag site="linkedin" children={item.linkedIn} />
                        ) : null}
                        {item.facebook != "" ? (
                          <SocialTag site="facebook" children={item.facebook} />
                        ) : null}
                      </View>
                    </View>
                  </SafeAreaView>
                }
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setData(data);
              setRefreshing(false);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  list: {
    flex: 1,
    height: "100%",
  },
  container: {
    flex: 1,
    padding: 10,
  },
  separator: {
    width: "100%",
    height: 10,
  },
  modalBox: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
  modalBoxText: {
    fontSize: 40,
    color: colors.crimson,
  },
  deets: {
    fontSize: 20,
    fontWeight: "500",
    flexWrap: "wrap",
  },
  textRow: {
    flexDirection: "row",
  },
  socialBox: {
    flex: 1,
    justifyContent: "center",
  },
  socialText: {
    fontSize: 25,
  },
});

// export default OrgScreen;
