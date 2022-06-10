import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FoodList from "./foodList";
import Feed from "../../assets/data/Feed";

const post1 = Feed[0];

const Activity = () => {
  return (
    <View style={styles.body}>
      <Text>Activity</Text>
      <FoodList post={post1} />
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellowgreen",
  },
});
