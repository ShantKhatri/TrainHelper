import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { pnrProfileScreen } from "../screens/pnrProfile.screen";
import pnrHomeScreen from "../screens/pnrHome.screen";

const Stack = createStackNavigator();

export const pnrNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={pnrHomeScreen} />
      <Stack.Screen name="pnrProfile" component={pnrProfileScreen} />
      {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);
