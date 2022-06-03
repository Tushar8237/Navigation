import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Home from "./TabScreens/Home";
import Search from "./TabScreens/Search";
import Plan from "./TabScreens/Plan";
import Review from "./TabScreens/Review";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        headerShown: false,
        tabBarActiveBackgroundColor: "#d0f6fb",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Plan"
        component={Plan}
        options={{
          tabBarLabel: "Plan",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-text-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Review"
        component={Review}
        options={{
          tabBarLabel: "Review",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="rate-review" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
