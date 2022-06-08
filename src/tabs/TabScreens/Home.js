import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";

const Home = () => {
  return (
    <ScrollView>
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

        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={require("../../../assets/image/kedarnath.jpg")}
              style={{
                width: 150,
                height: 150,
                borderRadius: 20,
                marginLeft: 20,
                marginTop: 20,
              }}
            />
            <Pressable style={{}} onPress={() => console.warn("btn clicked")}>
              <Text
                style={{
                  zIndex: 100,
                  bottom: 30,
                  marginLeft: 20,
                  color: "#fff",
                  borderRadius: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Kedarnath
              </Text>
            </Pressable>
          </View>
          <View>
            <Image
              source={require("../../../assets/image/kashmir.jpg")}
              style={{
                width: 150,
                height: 150,
                borderRadius: 20,
                marginLeft: 20,
                marginTop: 20,
              }}
            />
            <Pressable style={{}} onPress={() => console.warn("btn clicked")}>
              <Text
                style={{
                  zIndex: 100,
                  bottom: 30,
                  marginLeft: 20,
                  color: "#fff",
                  borderRadius: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Kashmir
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={require("../../../assets/image/manali.jpg")}
              style={{
                width: 150,
                height: 150,
                borderRadius: 20,
                marginLeft: 20,
                marginTop: 10,
              }}
            />
            <Pressable style={{}} onPress={() => console.warn("btn clicked")}>
              <Text
                style={{
                  zIndex: 100,
                  bottom: 30,
                  marginLeft: 20,
                  color: "#fff",
                  borderRadius: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Manali
              </Text>
            </Pressable>
          </View>
          <View>
            <Image
              source={require("../../../assets/image/goa.jpg")}
              style={{
                width: 150,
                height: 150,
                borderRadius: 20,
                marginLeft: 20,
                marginTop: 10,
              }}
            />
            <Pressable style={{}} onPress={() => console.warn("btn clicked")}>
              <Text
                style={{
                  zIndex: 100,
                  bottom: 30,
                  marginLeft: 20,
                  color: "#fff",
                  borderRadius: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Goa
              </Text>
            </Pressable>
          </View>
        </View>
        <ImageBackground
          source={require("../../../assets/image/travel1.webp")}
          style={styles.backgroundImage}
        >
          <Text
            style={{
              marginHorizontal: 25,
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 50,
            }}
          >
            Better to see something once than hear about it a thousand times.
          </Text>
          <Pressable
            style={styles.backgroundImageButton}
            onPress={() => console.warn("Explore btn clicked")}
          >
            <Text style={styles.buttonText}>Trip guide</Text>
          </Pressable>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
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
  backgroundImage: {
    width: "100%",
    height: 500,
    marginTop: 30,
    resizeMode: "cover",
    justifyContent: "center",
  },
  backgroundImageButton: {
    backgroundColor: "#fff",
    width: 150,
    height: 40,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
