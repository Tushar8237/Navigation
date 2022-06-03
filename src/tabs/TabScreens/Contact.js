import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Contact = () => {
  return (
    <View style={styles.body}>
      <Text>Contact</Text>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d0f6fb",
  },
});
