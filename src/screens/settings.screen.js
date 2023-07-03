import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

export default function SettingsScreen() {
  return (
    // <SafeAreaView
    //   style={{
    //     marginTop: StatusBar.currentHeight,
    //     flex: 1,
    //     backgroundColor: "green",
    //   }}
    // >
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <StatusBar style="auto" />
    </View>
    // {/* </SafeAreaView> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "column",
    backgroundColor: "red",
    marginTop: 0,
    paddingTop: 0,
  },
});
