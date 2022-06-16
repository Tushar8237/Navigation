import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FoodList = (props) => {
  console.log(props);
  return (
    <View style={styles.body}>
      <Text>foodList</Text>
      <Text>Item one</Text>
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellowgreen",
  },
});
