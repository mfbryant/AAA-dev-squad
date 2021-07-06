import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

function ScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    console.log(data); // Will change to prop to analyze whether or not the data read is present in database
    navigation.navigate("Home");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Error! No access to camera.</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={styles.camera}
      />
      <View style={styles.bottom}>
        <Text style={styles.text}>Scan QR Code</Text>
      </View>
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
  text: {
    fontSize: 30,
  },
  top: {
    flex: 1,
    color: "#fff",
  },
  bottom: {
    flex: 2,
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScanScreen;
