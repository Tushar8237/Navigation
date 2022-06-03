import { createDrawerNavigator } from "@react-navigation/drawer";
import Contact from "./TabScreens/Contact";
import AboutUs from "./TabScreens/AboutUs";

const Drawer = createDrawerNavigator();

const DrawerTab = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "blue",
        // headerShown: false,
      }}
    >
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
    </Drawer.Navigator>
  );
};

export default DrawerTab;
