import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./TabScreens/Home";
import Search from "./TabScreens/Search";
import Plan from "./TabScreens/Plan";
import Review from "./TabScreens/Review";

const Drawer = createDrawerNavigator();

const DrawerTab = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="Plan" component={Plan} />
      <Drawer.Screen name="Review" component={Review} />
    </Drawer.Navigator>
  );
};

export default DrawerTab;
