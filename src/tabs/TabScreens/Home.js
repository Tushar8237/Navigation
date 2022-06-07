import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";

const Home = () => {
  return (
    <View>
      <Pressable
        style={styles.searchbutton}
        onPress={() => console.warn("Search btn clicked")}
      >
        <MaterialIcons name="search" size={24} color="black" />
        <Text style={styles.searchbuttonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require("../../../assets/image/image1.jpg")}
        style={styles.image}
      >
        <Text style={styles.title}>Explore</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn("Explore btn clicked")}
        >
          <Text style={styles.buttonText}>Explore nearby destinations</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    marginTop: 40,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    marginLeft: 25,
  },
  button: {
    backgroundColor: "#fff",
    width: 280,
    height: 40,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchbutton: {
    backgroundColor: "#fff",
    width: Dimensions.get("screen").width - 20,
    height: 50,
    borderRadius: 30,
    marginHorizontal: 10,
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 30,
    zIndex: 100,
  },
  searchbuttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
