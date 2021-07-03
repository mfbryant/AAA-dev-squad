import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import * as SQLite from "expo-sqlite";
import { openDatabase } from "expo-sqlite";

const db = SQLite.openDatabase("AAA.db");

function OrgScreen(props) {
    return (
        db.transaction(tx => {
            tx.executeSql(
                "select * from organization",
                []
            );
        })
    );
};

export default OrgScreen; 



