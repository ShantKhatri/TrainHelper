// import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-paper";

export default pnrHomeScreen = ({ navigation }) => {
  const [pnrNumber, onChangePnrNumber] = React.useState("");
  //   const navigation = useNavigation();
  console.log(pnrNumber);
  return (
    <View style={{ flex: 1, backgroundColor: "#E3DFE3" }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangePnrNumber}
        value={pnrNumber}
        placeholder="PNR Number"
        keyboardType="numeric"
      />
      <Button
        mode="contained"
        // loading
        onPress={() => navigation.navigate("pnrProfile")}
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
