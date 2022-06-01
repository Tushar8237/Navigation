import "react-native-gesture-handler";
import React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./src/tabs/BottomTab";
import DrawerTab from "./src/tabs/DrawerTab";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="DrawerTab" component={DrawerTab} />
        {/* <Stack.Screen name="BottomTab" component={BottomTab} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}