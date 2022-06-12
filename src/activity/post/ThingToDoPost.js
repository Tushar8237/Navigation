import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const ThingToDoPost = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={{
          flexDirection: "row",
          width: "99%",
          overflow: "hidden",
          borderWidth: 1,
          borderRadius: 10,
        }}
        onPress={() => console.warn("btn pressed")}
      >
        <Image
          style={{ width: 150, height: 130, borderRadius: 10 }}
          source={require("../../../assets/image/dhudhsagar.jpg")}
        />
        <View style={{ flexDirection: "column", width: 200 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 15 }}>
            Dudhsagar waterfall
          </Text>
          <Text style={{ marginLeft: 15 }}>
            Dudhsagar Falls is a four-tiered waterfall located on the Mandovi
            River in the Indian state of Goa.
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          width: "99%",
          overflow: "hidden",
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => console.warn("btn pressed")}
      >
        <Image
          style={{ width: 150, height: 130, borderRadius: 10 }}
          source={require("../../../assets/image/Mandovi-River-Cruise.jpeg")}
        />
        <View style={{ flexDirection: "column", width: 200 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 15 }}>
            River Cruise Goa
          </Text>
          <Text style={{ marginLeft: 15 }}>
            The Mandovi river is a storehouse of enthralling cruise in Goa
            experiences.
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          width: "99%",
          overflow: "hidden",
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => console.warn("btn pressed")}
      >
        <Image
          style={{ width: 150, height: 130, borderRadius: 10 }}
          source={require("../../../assets/image/bungee-jump-action.jpg")}
        />
        <View style={{ flexDirection: "column", width: 200 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 15 }}>
            Bungee jumping
          </Text>
          <Text style={{ marginLeft: 15 }}>
            Spike your adrenaline rush as you jump from Goa's highest bungee
            jumping spot at a height of 63 m.
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          width: "99%",
          overflow: "hidden",
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => console.warn("btn pressed")}
      >
        <Image
          style={{ width: 150, height: 130, borderRadius: 10 }}
          source={require("../../../assets/image/paragliding.jpg")}
        />
        <View style={{ flexDirection: "column", width: 200 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 15 }}>
            Paragliding
          </Text>
          <Text style={{ marginLeft: 15 }}>
            Paragliding in Goa is one of the best tourist experiences because of
            Goa’s beautiful scenery
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ThingToDoPost;

const styles = StyleSheet.create({});
