import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Plan = () => {
  return (
    <View style={styles.body}>
      <Text>Notification</Text>
    </View>
  );
};

export default Plan;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
