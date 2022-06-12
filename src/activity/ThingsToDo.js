import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThingToDoPost from "./post/ThingToDoPost";

const ThingsToDo = () => {
  return (
    <View style={styles.body}>
      <Text style={{ marginVertical: 15, fontSize: 20, fontWeight: "bold" }}>
        Things To Do In Goa
      </Text>
      <ThingToDoPost />
    </View>
  );
};

export default ThingsToDo;

const styles = StyleSheet.create({
  body: {
    marginTop: 50,
    marginHorizontal: 5,
  },
});
