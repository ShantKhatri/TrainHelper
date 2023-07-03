import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import AppNavigator from "./src/navigation/appNavigator";

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // white
  },
  header: {
    flexDirection: "column",
    backgroundColor: "red",
    marginTop: 0,
    paddingTop: 0,
  },
});
