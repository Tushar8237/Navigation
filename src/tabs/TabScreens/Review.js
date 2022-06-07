import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Review = () => {
  return (
    <View style={styles.body}>
      <Text>Review</Text>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
