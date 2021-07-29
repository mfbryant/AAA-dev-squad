import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import AffinityText from "./AffinityText";

import custom from "../config/styles";
import { AntDesign } from "@expo/vector-icons";

function OrgName({ orgName, orgDeets, insta, facebook, linkedIn, twitter, onPress }) {
    return (
        <TouchableHighlight
          underlayColor={custom.colors.medium}
          onPress={onPress}
          style={{ borderRadius: 15 }}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <AntDesign name="staro" size={20} color="black" />
              <AffinityText style={styles.labelText}>{orgName} </AffinityText>

            </View>
            <View style={styles.deets}>
                
              <AffinityText style={styles.deets} >{orgDeets}</AffinityText>
                    
                   
            </View>
            
            {/* <View style={styles.detailsContainer}>
              <Text style={styles.title}>{title}</Text>
              {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
            </View>
            <View style={styles.statusArea}>
              <View
                style={{
                  backgroundColor: a,
                  borderRadius: 7,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.status}>
                  {status}
                </Text>
              </View>
            </View> */}
          </View>
        </TouchableHighlight>
    );
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 15,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "center",
    padding: 15,
    backgroundColor: custom.colors.white,
  },
  deets: {
    // height: 100,
    fontSize: 15,
  },
  header: {

  },
  label: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  statusArea: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  labelText: {
    fontSize: 30,
  },
  status: {
    color: custom.colors.white,
    fontWeight: "500",
  },
  subTitle: {
    color: custom.colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default OrgName;