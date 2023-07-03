import * as React from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import pnrHomeScreen from "./pnrHome.screen";
import runningStatusScreen from "./runningStatus.screen";
import { pnrProfileScreen } from "./pnrProfile.screen";

const renderScene = SceneMap({
  first: runningStatusScreen,
  //   second: pnrHomeScreen,
  second: pnrProfileScreen,
});
export default function HomeScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Running Status" },
    { key: "second", title: "PNR Status" },
  ]);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ImageBackground
          style={styles.header}
          source={require("../../assets/TrainImage.jpg")}
        >
          <View
            style={{
              width: layout.width,
              backgroundColor: "#00A2FF",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </ImageBackground>
        <TabView
          style={{ marginTop: -180 }}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </KeyboardAvoidingView>
    </View>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  button: {
    margin: 12,
  },
  header: {
    // fontSize: 30,
    width: "100%",
    height: "40%",
  },
});
