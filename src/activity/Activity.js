import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
// import FoodList from "./foodList";
// import Feed from "../../assets/data/Feed";

// const post1 = Feed[0];
{
  /* <FoodList post={post1} /> */
}

const Activity = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={require("../../assets/image/travel1.jpg")}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("FoodList")}
      >
        <Text style={styles.buttonText}>Food of the city</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("ThingsToDo")}
      >
        <Text style={styles.buttonText}>Things to do</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Destinations")}
      >
        <Text style={styles.buttonText}>Destinations</Text>
      </Pressable>
      <Image
        style={styles.image2}
        source={require("../../assets/image/travel4.jpg")}
      />
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#999999",
    width: "95%",
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: "99%",
    height: 200,
    borderRadius: 10,
    marginTop: 70,
  },
  image2: {
    width: "99%",
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});
