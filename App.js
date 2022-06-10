import "react-native-gesture-handler";
import React, { useState } from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./src/tabs/BottomTab";
import SignUpScreen from "./src/loginscreens/SignUp";
import Loginscreen from "./src/loginscreens/Login";
import Activity from "./src/activity/Activity";
import firebase from "firebase/app";
import "firebase/auth";
// import DrawerTab from "./src/tabs/DrawerTab";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyAnQQT09_G_Q6FVS30ZtWYAPPQZDjreXGE",
    authDomain: "login-87f06.firebaseapp.com",
    projectId: "login-87f06",
    storageBucket: "login-87f06.appspot.com",
    messagingSenderId: "387508274024",
    appId: "1:387508274024:web:639f731dc8d45fa1258cdd",
  };

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
          <Stack.Screen
            name="Activity"
            component={Activity}
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
