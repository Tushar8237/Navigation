import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./TabScreens/Home";
import Search from "./TabScreens/Search";
import Plan from "./TabScreens/Plan";
import Review from "./TabScreens/Review";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="HomePage" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Plan" component={Plan} />
      <Tab.Screen name="Review" component={Review} />
    </Tab.Navigator>
  );
};

export default BottomTab;
