import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useIsFocused } from "@react-navigation/native";
import { Camera } from "expo-camera";

const sampleAttend = [
  {
    attendanceId: 1,
    eventId: 1,
    userId: 11,
  },
  {
    attendanceId: 2,
    eventId: 1,
    userId: 2,
  },
  {
    attendanceId: 3,
    eventId: 1,
    userId: 3,
  },
  {
    attendanceId: 4,
    eventId: 1,
    userId: 4,
  },
  {
    attendanceId: 5,
    eventId: 1,
    userId: 5,
  },
  {
    attendanceId: 6,
    eventId: 1,
    userId: 6,
  },
  {
    attendanceId: 7,
    eventId: 1,
    userId: 7,
  },
  {
    attendanceId: 8,
    eventId: 1,
    userId: 8,
  },
  {
    attendanceId: 9,
    eventId: 1,
    userId: 9,
  },
  {
    attendanceId: 10,
    eventId: 1,
    userId: 10,
  },
];

const user = {
  userId: 4,
  userName: "Mattie Bryant",
  userEmail: "mfbryant@crimson.ua.edu",
  executive: true,
  officer: false,
  orgId: null,
};

function ScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [eventData, setEventData] = useState([]);
  // const [attendanceData, setAttendanceData] = useState([]);
  const isFocused = useIsFocused();

  const getData = async () => {
    try {
      const response1 = await fetch(
        "https://aims-ambassadorship-app.herokuapp.com/api/events"
      );
      // const response2 = await fetch(
      //   "https://aims-ambassadorship-app.herokuapp.com/api/attendance"
      // );
      const json1 = await response1.json();
      // const json2 = await response2.json();
      setEventData(json1);
      // setAttendanceData(json2);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const approved = (data) => {
    sampleAttend.some(
      (i) =>
        i.eventId.toString() === data.toString() &&
        i.userId.toString() === user.userId.toString()
    )
      ? Alert.alert(
          `${eventData[data - 1].eventName}`,
          `You have already checked in`
        )
      : Alert.alert(
          `${eventData[data - 1].eventName}`,
          `You are now checked in to this event`
        );
  };

  const error = () => {
    Alert.alert("Unable to find Event", "Please try again");
  };

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    navigation.goBack();
    Number.isInteger(data)
      ? eventData[data - 1].eventApproved ? approved(data) : error() 
      : error();
    setScanned(false);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.error}>
        <Text>Requesting for camera permission...</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.error}>
        <Text style={styles.errorText}>Error! No access to camera.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isFocused && (
        <Camera
          style={styles.camera}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  camera: {
    flex: 3,
  },
  error: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    fontSize: 17,
    fontWeight: "600",
  },
});

export default ScanScreen;
