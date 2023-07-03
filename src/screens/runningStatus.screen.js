import React from "react";
import { View, StyleSheet, StatusBar, TextInput } from "react-native";
import { Button } from "react-native-paper";

export default runningStatusScreen = () => {
  const [trainNumber, onChangeTrainNumber] = React.useState("");
  console.log(trainNumber);
  return (
    <View style={{ flex: 1, backgroundColor: "#E3DFE3" }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTrainNumber}
        value={trainNumber}
        placeholder="Train Number"
        keyboardType="numeric"
      />
      <Button
        mode="contained"
        // loading
        onPress={() => {}}
        style={styles.button}
      >
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
