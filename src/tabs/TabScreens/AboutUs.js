import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AboutUs = () => {
  return (
    <View style={styles.body}>
      <Text>AboutUs</Text>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d0f6fb",
  },
});
