import "react-native-gesture-handler";
import React, { useState } from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./src/tabs/BottomTab";
import SignUpScreen from "./src/loginscreens/SignUp";
import Loginscreen from "./src/loginscreens/Login";
import firebase from "firebase/app";
import "firebase/auth";
// import DrawerTab from "./src/tabs/DrawerTab";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const firebaseConfig = {};

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={BottomTab}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Loginscreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
